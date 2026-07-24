import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";

dotenv.config();

export interface ContentEvaluationResult {
  score: number;
  explanation: string;
  isIntentMatched: boolean;
  recommendations: string[];
}

export class LLMService {
  private genAI: GoogleGenerativeAI | null = null;
  private model: any = null;

  constructor() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      this.genAI = new GoogleGenerativeAI(apiKey);
      // Sử dụng gemini-1.5-flash vì nó nhanh và hỗ trợ tốt JSON output
      this.model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
    }
  }

  public isAvailable(): boolean {
    return this.genAI !== null;
  }

  /**
   * Gọi LLM để đánh giá Content theo Search Intent và E-E-A-T.
   */
  public async evaluateContentQuality(keyword: string, content: string): Promise<ContentEvaluationResult | null> {
    if (!this.model) return null;

    // Giới hạn content length (Gemini hỗ trợ token lớn hơn nên có thể tăng lên một chút)
    const truncatedContent = content.substring(0, 8000);

    const systemPrompt = `
Bạn là một chuyên gia SEO (Search Engine Optimization). 
Người dùng sẽ cung cấp Từ khóa mục tiêu và Nội dung văn bản của một trang web.
Nhiệm vụ của bạn:
1. Đánh giá xem nội dung có thoả mãn Ý định tìm kiếm (Search Intent) của từ khóa không.
2. Chấm điểm nội dung theo tiêu chí E-E-A-T (Kinh nghiệm, Chuyên môn, Thẩm quyền, Độ tin cậy) (thang điểm 1-100).
3. Đưa ra giải thích và các đề xuất cải thiện cụ thể.

Lưu ý: Phản hồi duy nhất bằng định dạng JSON chuẩn như sau:
{
  "score": number, // Điểm từ 0 đến 100
  "explanation": "string", // Tóm tắt lý do ngắn gọn
  "isIntentMatched": boolean, // Có khớp search intent hay không
  "recommendations": ["string"] // Tối đa 3 gạch đầu dòng đề xuất
}
`;

    const userPrompt = `
Từ khóa mục tiêu: "${keyword}"
Nội dung trang web:
"""
${truncatedContent}
"""
`;

    try {
      const result = await this.model.generateContent({
        contents: [
          { role: "user", parts: [{ text: systemPrompt + "\n\n" + userPrompt }] }
        ],
        generationConfig: {
          temperature: 0.2,
          responseMimeType: "application/json"
        }
      });

      const responseText = result.response.text();
      if (!responseText) return null;

      const parsed = JSON.parse(responseText);
      return {
        score: parsed.score || 0,
        explanation: parsed.explanation || "",
        isIntentMatched: parsed.isIntentMatched || false,
        recommendations: parsed.recommendations || []
      };
    } catch (error) {
      console.error("[LLMService] Error evaluating content:", error);
      return null;
    }
  }
}
