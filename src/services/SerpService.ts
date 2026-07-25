import * as dotenv from "dotenv";

dotenv.config();

export interface SerpResult {
  rank: number | null;
  hasPaa: boolean;            // People Also Ask xuất hiện trên SERP không
  paaQuestions: string[];     // Danh sách câu hỏi PAA (tối đa 5)
  hasRichSnippet: boolean;
  competingPagesCount: number; // Số trang từ SAME domain rank cho keyword này
}

export class SerpService {
  private apiKey: string | undefined;

  constructor() {
    this.apiKey = process.env.SERPAPI_API_KEY;
  }

  public isAvailable(): boolean {
    return !!this.apiKey;
  }

  /**
   * Gọi SerpAPI để kiểm tra vị trí hiện tại, Keyword Cannibalization,
   * và People Also Ask questions.
   */
  public async analyzeSerp(domain: string, keyword: string): Promise<SerpResult | null> {
    if (!this.apiKey) return null;

    try {
      const endpoint = `https://serpapi.com/search.json?engine=google&q=${encodeURIComponent(keyword)}&api_key=${this.apiKey}&hl=vi&gl=vn`;
      const response = await fetch(endpoint);

      if (!response.ok) {
        console.error(`[SerpService] Error fetching data: ${response.statusText}`);
        return null;
      }

      const data = await response.json();

      let rank = null;
      let competingPagesCount = 0;
      let hasRichSnippet = false;

      // Phân tích organic results
      const organicResults = data.organic_results || [];
      for (const result of organicResults) {
        if (result.link && result.link.includes(domain)) {
          competingPagesCount++;
          if (rank === null) {
            rank = result.position;
            if (result.rich_snippet || result.sitelinks) {
              hasRichSnippet = true;
            }
          }
        }
      }

      // People Also Ask — lấy tối đa 5 câu hỏi
      const relatedQuestions: { question?: string }[] = data.related_questions || [];
      const hasPaa = relatedQuestions.length > 0;
      const paaQuestions = relatedQuestions
        .slice(0, 5)
        .map((q) => q.question || "")
        .filter(Boolean);

      return {
        rank,
        hasPaa,
        paaQuestions,
        hasRichSnippet,
        competingPagesCount,
      };
    } catch (error) {
      console.error("[SerpService] Exception:", error);
      return null;
    }
  }
}
