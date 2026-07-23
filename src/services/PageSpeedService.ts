import * as dotenv from "dotenv";

dotenv.config();

export interface CoreWebVitals {
  lcp: number | null; // Largest Contentful Paint (ms)
  cls: number | null; // Cumulative Layout Shift
  inp: number | null; // Interaction to Next Paint (ms)
  score: number | null; // Performance Score (0-100)
}

export class PageSpeedService {
  private apiKey: string | undefined;

  constructor() {
    this.apiKey = process.env.PAGESPEED_API_KEY;
  }

  public isAvailable(): boolean {
    return !!this.apiKey;
  }

  /**
   * Lấy Core Web Vitals thực tế từ Google PageSpeed Insights (Mobile strategy mặc định).
   */
  public async getCoreWebVitals(url: string, strategy: "mobile" | "desktop" = "mobile"): Promise<CoreWebVitals | null> {
    if (!this.apiKey) return null;

    try {
      const endpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${this.apiKey}&strategy=${strategy}&category=performance`;
      const response = await fetch(endpoint);
      
      if (!response.ok) {
        console.error(`[PageSpeedService] Error fetching data: ${response.statusText}`);
        return null;
      }

      const data = await response.json();
      
      const metrics = data.lighthouseResult?.audits || {};
      const lcp = metrics["largest-contentful-paint"]?.numericValue || null;
      const cls = metrics["cumulative-layout-shift"]?.numericValue || null;
      const inp = metrics["interaction-to-next-paint"]?.numericValue || null;
      
      const score = data.lighthouseResult?.categories?.performance?.score 
          ? Math.round(data.lighthouseResult.categories.performance.score * 100) 
          : null;

      return {
        lcp: lcp ? Math.round(lcp) : null,
        cls: cls ? Number(cls.toFixed(3)) : null,
        inp: inp ? Math.round(inp) : null,
        score
      };
    } catch (error) {
      console.error("[PageSpeedService] Exception:", error);
      return null;
    }
  }
}
