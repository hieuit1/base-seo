import OpenAI from "openai";
import * as dotenv from "dotenv";

dotenv.config();

export interface ContentEvaluationResult {
  score: number;
  explanation: string;
  isIntentMatched: boolean;
  recommendations: string[];
}

export class LLMService {
  private openai: OpenAI | null = null;

  constructor() {
    const apiKey = process.env.OPENAI_API_KEY;
    if (apiKey) {
      this.openai = new OpenAI({ apiKey });
    }
  }

  public isAvailable(): boolean {
    return this.openai !== null;
  }

  /**
   * Gọi LLM để đánh giá Content theo Search Intent và E-E-A-T.
   */
  public async evaluateContentQuality(keyword: string, content: string): Promise<ContentEvaluationResult | null> {
    if (!this.openai) return null;

    // Giới hạn content length để tránh vượt quá token limit của model
    const truncatedContent = content.substring(0, 4000);

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
      const response = await this.openai.chat.completions.create({
        model: "gpt-4o-mini", // Dùng model nhỏ gọn, nhanh, tiết kiệm
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        response_format: { type: "json_object" },
        temperature: 0.2,
      });

      const responseText = response.choices[0].message.content;
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
