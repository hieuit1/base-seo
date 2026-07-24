import * as dotenv from "dotenv";

dotenv.config();

export interface CoreWebVitals {
  lcp: number | null; // Largest Contentful Paint (ms)
  cls: number | null; // Cumulative Layout Shift
  inp: number | null; // Interaction to Next Paint (ms)
  score: number | null; // Performance Score (0-100), lab data only
}

export class PageSpeedService {
  private apiKey: string | undefined;
  private readonly timeoutMs = 20000;

  constructor() {
    this.apiKey = process.env.PAGESPEED_API_KEY;
  }

  public isAvailable(): boolean {
    return !!this.apiKey;
  }

  public async getCoreWebVitals(
    url: string,
    strategy: "mobile" | "desktop" = "mobile"
  ): Promise<CoreWebVitals | null> {
    if (!this.apiKey) return null;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);

    try {
      const endpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
        url
      )}&key=${this.apiKey}&strategy=${strategy}&category=performance`;

      const response = await fetch(endpoint, { signal: controller.signal });

      if (!response.ok) {
        console.error(`[PageSpeedService] Error fetching data: ${response.status} ${response.statusText}`);
        return null;
      }

      const data = await response.json();

      // ---- 1. Ưu tiên Field Data (CrUX) — trải nghiệm người dùng thực tế ----
      // loadingExperience = field data cho riêng URL này
      // originLoadingExperience = fallback field data cho cả domain (nếu URL cụ thể chưa đủ traffic)
      const fieldMetrics =
        data.loadingExperience?.metrics || data.originLoadingExperience?.metrics || null;

      let lcp: number | null = null;
      let cls: number | null = null;
      let inp: number | null = null;

      if (fieldMetrics) {
        lcp = fieldMetrics["LARGEST_CONTENTFUL_PAINT_MS"]?.percentile ?? null;
        cls = fieldMetrics["CUMULATIVE_LAYOUT_SHIFT_SCORE"]?.percentile ?? null;
        // CrUX trả CLS *1000 dạng percentile (vd 8 = 0.008), quy đổi lại về thang thật
        if (cls !== null) cls = cls / 100;
        inp = fieldMetrics["INTERACTION_TO_NEXT_PAINT"]?.percentile ?? null;
      }

      // ---- 2. Fallback về Lab Data (Lighthouse) nếu thiếu field data ----
      const audits = data.lighthouseResult?.audits || {};

      if (lcp === null) {
        lcp = audits["largest-contentful-paint"]?.numericValue ?? null;
      }
      if (cls === null) {
        cls = audits["cumulative-layout-shift"]?.numericValue ?? null;
      }
      if (inp === null) {
        // Tuỳ phiên bản Lighthouse, key có thể là "interaction-to-next-paint"
        // hoặc "experimental-interaction-to-next-paint"
        inp =
          audits["interaction-to-next-paint"]?.numericValue ??
          audits["experimental-interaction-to-next-paint"]?.numericValue ??
          null;
      }

      const perfScoreRaw = data.lighthouseResult?.categories?.performance?.score;
      const score = perfScoreRaw != null ? Math.round(perfScoreRaw * 100) : null;

      return {
        lcp: lcp !== null ? Math.round(lcp) : null,
        cls: cls !== null ? Number(cls.toFixed(3)) : null,
        inp: inp !== null ? Math.round(inp) : null,
        score,
      };
    } catch (error) {
      if ((error as Error).name === "AbortError") {
        console.error(`[PageSpeedService] Timeout after ${this.timeoutMs}ms for URL: ${url}`);
      } else {
        console.error("[PageSpeedService] Exception:", error);
      }
      return null;
    } finally {
      clearTimeout(timeoutId);
    }
  }
}