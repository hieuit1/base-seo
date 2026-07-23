import * as dotenv from "dotenv";

dotenv.config();

export interface SerpResult {
  rank: number | null;
  hasPaa: boolean; // People Also Ask present on SERP
  hasRichSnippet: boolean;
  competingPagesCount: number; // Number of pages from SAME domain ranking for this keyword
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
   * Gọi SerpAPI để kiểm tra vị trí hiện tại và Keyword Cannibalization.
   */
  public async analyzeSerp(domain: string, keyword: string): Promise<SerpResult | null> {
    if (!this.apiKey) return null;

    try {
      // Dùng Google Search Engine, query là keyword
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
            rank = result.position; // Lấy rank của kết quả cao nhất
            
            // Check nếu có rich snippet (ví dụ: rating, price)
            if (result.rich_snippet || result.sitelinks) {
              hasRichSnippet = true;
            }
          }
        }
      }

      // Kiểm tra People Also Ask (PAA)
      const hasPaa = data.related_questions && data.related_questions.length > 0;

      return {
        rank,
        hasPaa,
        hasRichSnippet,
        competingPagesCount
      };
    } catch (error) {
      console.error("[SerpService] Exception:", error);
      return null;
    }
  }
}
