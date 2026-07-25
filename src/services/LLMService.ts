import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";

dotenv.config();

export interface ContentEvaluationResult {
  score: number;
  explanation: string;
  isIntentMatched: boolean;
  recommendations: string[];
  // B1.2 — Entity SEO
  entities: string[];           // Thực thể được đề cập trong nội dung
  missingEntities: string[];    // Thực thể quan trọng còn thiếu
  // B1.3 — TF-IDF relevance
  tfIdfScore: number;           // 0-100: độ liên quan nội dung theo TF-IDF
  // B1.4 — Featured Snippet
  featuredSnippetScore: number; // 0-100: khả năng ra featured snippet
  hasDirectAnswer: boolean;     // Có đoạn trả lời ngắn 40-60 từ không
}

export class LLMService {
  private genAI: GoogleGenerativeAI | null = null;
  private model: any = null;

  constructor() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      this.genAI = new GoogleGenerativeAI(apiKey);
      // gemini-2.5-flash: miễn phí, nhanh, JSON output hoàn hảo
      this.model = this.genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    }
  }

  public isAvailable(): boolean {
    return this.genAI !== null;
  }

  /**
   * Gọi Gemini để đánh giá Content toàn diện:
   * - Search Intent & E-E-A-T score
   * - Entity SEO (thực thể có/còn thiếu)
   * - TF-IDF relevance
   * - Featured Snippet potential
   */
  public async evaluateContentQuality(keyword: string, content: string): Promise<ContentEvaluationResult | null> {
    if (!this.model) return null;

    // Giới hạn content length — gemini-2.5-flash hỗ trợ token lớn
    const truncatedContent = content.substring(0, 10000);

    const prompt = `
Bạn là chuyên gia SEO đẳng cấp thế giới. Phân tích toàn diện nội dung trang web dưới đây theo từ khóa mục tiêu.

Từ khóa mục tiêu: "${keyword}"

Nội dung trang web:
"""
${truncatedContent}
"""

Hãy phản hồi DUY NHẤT bằng JSON hợp lệ theo cấu trúc sau (không có text nào ngoài JSON):
{
  "score": <number 0-100, điểm E-E-A-T tổng thể>,
  "explanation": "<string, tóm tắt đánh giá ngắn gọn ≤ 100 ký tự>",
  "isIntentMatched": <boolean, nội dung có thỏa mãn search intent không>,
  "recommendations": ["<string>", "<string>", "<string>"],
  "entities": ["<thực thể 1>", "<thực thể 2>"],
  "missingEntities": ["<thực thể quan trọng còn thiếu 1>", "<thực thể quan trọng còn thiếu 2>"],
  "tfIdfScore": <number 0-100, độ liên quan nội dung so với chủ đề từ khóa>,
  "featuredSnippetScore": <number 0-100, tiềm năng xuất hiện featured snippet>,
  "hasDirectAnswer": <boolean, có đoạn văn ngắn 40-60 từ trả lời thẳng câu hỏi không>
}

Hướng dẫn chấm điểm:
- entities: tối đa 10 thực thể chính (người, tổ chức, địa điểm, khái niệm) xuất hiện trong nội dung
- missingEntities: tối đa 5 thực thể mà Google thường mong đợi thấy với từ khóa này nhưng nội dung chưa có
- tfIdfScore: dựa trên tần suất từ khóa và các từ liên quan so với nội dung tổng thể (0=không liên quan, 100=rất liên quan)
- featuredSnippetScore: dựa trên cấu trúc (có list/table/paragraph ngắn), định dạng câu trả lời trực tiếp
- hasDirectAnswer: true nếu có đoạn text 40-60 từ trả lời trực tiếp câu hỏi ngầm của từ khóa
`;

    try {
      const result = await this.model.generateContent({
        contents: [
          { role: "user", parts: [{ text: prompt }] }
        ],
        generationConfig: {
          temperature: 0.1,
          responseMimeType: "application/json"
        }
      });

      const responseText = result.response.text();
      if (!responseText) return null;

      const parsed = JSON.parse(responseText);
      return {
        score: parsed.score ?? 0,
        explanation: parsed.explanation ?? "",
        isIntentMatched: parsed.isIntentMatched ?? false,
        recommendations: parsed.recommendations ?? [],
        entities: parsed.entities ?? [],
        missingEntities: parsed.missingEntities ?? [],
        tfIdfScore: parsed.tfIdfScore ?? 0,
        featuredSnippetScore: parsed.featuredSnippetScore ?? 0,
        hasDirectAnswer: parsed.hasDirectAnswer ?? false,
      };
    } catch (error) {
      console.error("[LLMService] Error evaluating content:", error);
      return null;
    }
  }
}
