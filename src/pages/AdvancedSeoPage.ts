import { Page } from "@playwright/test";
import { SeoPage, SeoScanResult } from "./SeoPage";
import { SeoPageTestData } from "../test-data/seoData";
import { SeoScorecard } from "../utils/reportHelper";
import { DEFAULT_ADVANCED_SEO_CONFIG } from "../constants/advancedSeoDefaults";
import { injectAdvancedVisualSEOReport } from "../utils/AdvancedSeoReportHelper";
import { LLMService, ContentEvaluationResult } from "../services/LLMService";
import { PageSpeedService, CoreWebVitals } from "../services/PageSpeedService";
import { SerpService, SerpResult } from "../services/SerpService";

// ==================== INTERFACES ====================

/** Kết quả phân tích JSON-LD Schema */
export interface SchemaAnalysis {
  types: string[];                // Danh sách @type tìm thấy
  hasRequiredFields: boolean;     // Có đủ required fields không
  issues: string[];               // Danh sách lỗi cụ thể
  rawSchemas: Record<string, unknown>[];  // Raw JSON-LD objects
}

/** Kết quả kiểm tra Performance */
export interface PerformanceMetrics {
  ttfb: number;                   // Time to First Byte (ms)
  domSize: number;                // Tổng số DOM elements
  httpVersion: string;            // h2, h3, http/1.1, ...
  hasPreload: boolean;            // Có resource hint preload
  hasPreconnect: boolean;         // Có resource hint preconnect
  hasDnsPrefetch: boolean;        // Có dns-prefetch
  preloadCount: number;           // Số lượng preload
  preconnectCount: number;        // Số lượng preconnect
  lazyLoadedImages: number;       // Ảnh có loading="lazy"
  totalBelowFoldImages: number;   // Tổng ảnh below-fold
  fontDisplaySwap: boolean;       // Có font-display: swap
  preloadedFonts: number;         // Số font được preload
  responsiveImages: number;       // Ảnh có srcset/sizes
  totalImages: number;            // Tổng ảnh trên trang
}

/** Kết quả quét SEO chuyên sâu Phần B */
export interface AdvancedSeoScanResult {
  // B2. E-E-A-T
  hasAuthorInfo: boolean;         // Có thông tin tác giả (schema/markup)
  hasDatePublished: boolean;      // Có ngày đăng bài
  hasDateModified: boolean;       // Có ngày cập nhật
  trustPages: { path: string; status: number; exists: boolean }[];  // About/Contact/Privacy
  externalCitations: number;      // Số external link có giá trị (không nofollow)

  // B3. Schema nâng cao
  schemaAnalysis: SchemaAnalysis;

  // B4. Crawlability & Indexability
  isSoft404: boolean;             // Trang trả 200 nhưng content báo 404
  xRobotsTag: string | null;      // HTTP header X-Robots-Tag
  canonicalMatchesUrl: boolean;   // Canonical URL = current URL
  hasHreflang: boolean;           // Có thẻ hreflang cho đa ngôn ngữ

  // B5. Internal Linking
  hasBreadcrumb: boolean;         // Có breadcrumb (DOM hoặc Schema)
  breadcrumbSchema: boolean;      // Có BreadcrumbList schema
  hasTableOfContents: boolean;    // Có mục lục (TOC)
  orphanLinkScore: number;        // Tỷ lệ internal links trỏ về trang này (0-100)

  // B6. Performance
  performance: PerformanceMetrics;

  // B7. UX Signals
  hasIntrusiveInterstitials: boolean;  // Có popup/overlay che content
  aboveFoldAdCount: number;            // Số ad trên viewport
  missingAriaLabels: number;           // Phần tử interactive thiếu ARIA
  hasFocusStyles: boolean;             // Có CSS focus styles

  // B8. URL & Domain Consistency
  wwwRedirectOk: boolean;         // www ↔ non-www redirect đúng
  httpsRedirectOk: boolean;       // HTTP → HTTPS redirect đúng
  trailingSlashConsistent: boolean; // Trailing slash nhất quán
  hasHSTS: boolean;               // Strict-Transport-Security header

  // Phase 2: API Integrations
  contentEvaluation: ContentEvaluationResult | null;
  coreWebVitals: CoreWebVitals | null;
  serpData: SerpResult | null;
}

// ==================== PAGE OBJECT ====================

export class AdvancedSeoPage extends SeoPage {
  constructor(page: Page) {
    super(page);
  }

  // ==================== SCAN METHOD ====================

  /**
   * Quét toàn bộ dữ liệu SEO chuyên sâu Phần B.
   * Gọi SAU scanSEOMetadata() của Phần A.
   */
  async scanAdvancedSEO(baseScan: SeoScanResult, config: SeoPageTestData): Promise<AdvancedSeoScanResult> {
    const origin = new URL(baseScan.currentUrl).origin;
    const [
      authorInfo,
      dateInfo,
      trustPages,
      externalCitations,
      schemaAnalysis,
      soft404Check,
      xRobotsTag,
      hreflangCheck,
      breadcrumbInfo,
      tocCheck,
      performanceMetrics,
      uxSignals,
      urlConsistency,
    ] = await Promise.all([
      // B2: E-E-A-T
      this.checkAuthorInfo(),
      this.checkDateInfo(),
      this.checkTrustPages(origin),
      this.countExternalCitations(baseScan.externalLinks),

      // B3: Schema nâng cao
      this.analyzeSchemaMarkup(),

      // B4: Crawlability
      this.checkSoft404(config),
      this.getXRobotsTag(),
      this.checkHreflang(),

      // B5: Internal Linking
      this.checkBreadcrumbs(),
      this.checkTableOfContents(),

      // B6: Performance
      this.collectPerformanceMetrics(),

      // B7: UX Signals
      this.collectUXSignals(),

      // B8: URL Consistency
      this.checkUrlConsistency(origin, baseScan.currentUrl, config),
    ]);

    // Lấy nội dung text để cho LLM đánh giá (loại bỏ script, style)
    const pageContent = await this.page.evaluate(() => document.body.innerText);

    // Gọi các API bên ngoài song song
    const llmService = new LLMService();
    const pageSpeedService = new PageSpeedService();
    const serpService = new SerpService();

    const [contentEval, cwVitals, serpData] = await Promise.all([
      llmService.isAvailable() ? llmService.evaluateContentQuality(config.keyword, pageContent) : Promise.resolve(null),
      pageSpeedService.isAvailable() ? pageSpeedService.getCoreWebVitals(baseScan.currentUrl) : Promise.resolve(null),
      serpService.isAvailable() ? serpService.analyzeSerp(new URL(baseScan.currentUrl).hostname, config.keyword) : Promise.resolve(null)
    ]);

    return {
      // B2
      hasAuthorInfo: authorInfo,
      hasDatePublished: dateInfo.hasPublished,
      hasDateModified: dateInfo.hasModified,
      trustPages,
      externalCitations,

      // B3
      schemaAnalysis,

      // B4
      isSoft404: soft404Check,
      xRobotsTag,
      canonicalMatchesUrl: this.checkCanonicalMatch(baseScan),
      hasHreflang: hreflangCheck,

      // B5
      hasBreadcrumb: breadcrumbInfo.hasDom,
      breadcrumbSchema: breadcrumbInfo.hasSchema,
      hasTableOfContents: tocCheck,
      orphanLinkScore: 0, // Cần crawl nhiều trang — bỏ qua ở level này

      // B6
      performance: performanceMetrics,

      // B7
      hasIntrusiveInterstitials: uxSignals.hasInterstitials,
      aboveFoldAdCount: uxSignals.adCount,
      missingAriaLabels: uxSignals.missingAria,
      hasFocusStyles: uxSignals.hasFocus,

      // B8
      wwwRedirectOk: urlConsistency.wwwOk,
      httpsRedirectOk: urlConsistency.httpsOk,
      trailingSlashConsistent: urlConsistency.trailingSlashOk,
      hasHSTS: urlConsistency.hasHSTS,

      // Phase 2
      contentEvaluation: contentEval,
      coreWebVitals: cwVitals,
      serpData: serpData,
    };
  }

  // ==================== VISUAL REPORT ====================

  async injectAdvancedVisualSEOReport(
    pageName: string,
    data: AdvancedSeoScanResult,
    config: SeoPageTestData
  ) {
    await injectAdvancedVisualSEOReport(this.page, pageName, data, config);
  }

  // ==================== VERIFY METHODS ====================

  // ──────────────────────────────────────────────────────────
  // Phase 2 APIs (Semantic SEO, Core Web Vitals, SERP)
  // ──────────────────────────────────────────────────────────

  async verifySemanticSEO(
    scan: AdvancedSeoScanResult,
    sc: SeoScorecard
  ): Promise<void> {
    const evalData = scan.contentEvaluation;
    if (!evalData) {
      // Bỏ qua nếu không có API key
      return;
    }

    await sc.check(
      `Semantic — Khớp Search Intent: ${evalData.isIntentMatched ? "Có" : "Không"}`,
      evalData.isIntentMatched,
      `Nội dung không thỏa mãn search intent. Đề xuất: ${evalData.recommendations.join(", ")}`
    );

    await sc.check(
      `Semantic — Điểm E-E-A-T (AI chấm): ${evalData.score}/100`,
      evalData.score >= 70,
      `Điểm E-E-A-T thấp (${evalData.score}/100): ${evalData.explanation}`
    );
  }

  async verifyCoreWebVitalsAPI(
    scan: AdvancedSeoScanResult,
    sc: SeoScorecard
  ): Promise<void> {
    const cw = scan.coreWebVitals;
    if (!cw) return;

    if (cw.lcp !== null) {
      await sc.check(
        `CrUX — LCP (Largest Contentful Paint): ${cw.lcp}ms`,
        cw.lcp <= 2500,
        `LCP quá chậm (${cw.lcp}ms). Cần ≤ 2500ms.`
      );
    }
    if (cw.cls !== null) {
      await sc.check(
        `CrUX — CLS (Cumulative Layout Shift): ${cw.cls}`,
        cw.cls <= 0.1,
        `CLS quá cao (${cw.cls}). Cần ≤ 0.1.`
      );
    }
  }

  async verifySerpData(
    scan: AdvancedSeoScanResult,
    sc: SeoScorecard
  ): Promise<void> {
    const serp = scan.serpData;
    if (!serp) return;

    if (serp.competingPagesCount > 1) {
      await sc.check(
        `SERP — Keyword Cannibalization: Phát hiện ${serp.competingPagesCount} trang`,
        false,
        `Phát hiện ${serp.competingPagesCount} trang cùng domain rank cho từ khóa này. Có thể bị ăn thịt từ khóa.`
      );
    } else {
      await sc.check(`SERP — Keyword Cannibalization: Không`, true, "");
    }
  }

  // ──────────────────────────────────────────────────────────
  // B2. E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
  // ──────────────────────────────────────────────────────────

  async verifyEEAT(
    scan: AdvancedSeoScanResult,
    config: SeoPageTestData,
    sc: SeoScorecard
  ): Promise<void> {
    // B2.1 — Thông tin tác giả
    await sc.check(
      `B2.1 — Thông tin tác giả: ${scan.hasAuthorInfo ? "Có" : "Thiếu"}`,
      scan.hasAuthorInfo,
      "Trang thiếu thông tin tác giả (author schema/byline). Google ưu tiên nội dung có tác giả rõ ràng."
    );

    // B2.2 — Ngày đăng bài
    await sc.check(
      `B2.2 — Ngày đăng bài (datePublished): ${scan.hasDatePublished ? "Có" : "Thiếu"}`,
      scan.hasDatePublished,
      "Thiếu datePublished — Google dùng để đánh giá tính mới của nội dung."
    );

    // B2.3 — Ngày cập nhật
    await sc.check(
      `B2.3 — Ngày cập nhật (dateModified): ${scan.hasDateModified ? "Có" : "Thiếu"}`,
      scan.hasDateModified,
      "Thiếu dateModified — Bài viết nên hiển thị ngày cập nhật gần nhất."
    );

    // B2.4 — Trang Trust (About/Contact/Privacy)
    const existingTrust = scan.trustPages.filter((p) => p.exists);
    await sc.check(
      `B2.4 — Trust Pages: ${existingTrust.length}/${scan.trustPages.length} trang tồn tại`,
      existingTrust.length >= 2,
      `Chỉ ${existingTrust.length} trust pages tồn tại. Cần ≥ 2 trong: About, Contact, Privacy Policy.`
    );

    // B2.5 — External citations (link dẫn nguồn)
    await sc.check(
      `B2.5 — External citations: ${scan.externalCitations} link dẫn nguồn`,
      scan.externalCitations > 0,
      "Trang không có external link dẫn nguồn. Nên có ≥ 1 link authority để tăng E-E-A-T."
    );
  }

  // ──────────────────────────────────────────────────────────
  // B3. Schema Markup Nâng Cao
  // ──────────────────────────────────────────────────────────

  async verifyAdvancedSchema(
    scan: AdvancedSeoScanResult,
    config: SeoPageTestData,
    sc: SeoScorecard
  ): Promise<void> {
    const { schemaAnalysis } = scan;
    const expectedTypes = config.expectedSchemaTypes || [];

    // B3.1 — Schema types kỳ vọng
    if (expectedTypes.length > 0) {
      const missingTypes = expectedTypes.filter(
        (t) => !schemaAnalysis.types.includes(t)
      );
      await sc.check(
        `B3.1 — Schema types: [${schemaAnalysis.types.join(", ")}] (kỳ vọng: [${expectedTypes.join(", ")}])`,
        missingTypes.length === 0,
        `Thiếu Schema types: ${missingTypes.join(", ")}`
      );
    } else {
      await sc.check(
        `B3.1 — Schema Markup tồn tại: ${schemaAnalysis.types.length} types`,
        schemaAnalysis.types.length > 0,
        "Trang không có Schema Markup (JSON-LD)"
      );
    }

    // B3.2 — Required fields
    await sc.check(
      `B3.2 — Schema có đủ required fields`,
      schemaAnalysis.hasRequiredFields,
      `Schema thiếu required fields: ${schemaAnalysis.issues.join("; ")}`
    );

    // B3.3 — Không có lỗi cú pháp
    await sc.check(
      `B3.3 — Schema không có lỗi cú pháp (${schemaAnalysis.issues.length} lỗi)`,
      schemaAnalysis.issues.length === 0,
      `Lỗi Schema: ${schemaAnalysis.issues.join("; ")}`
    );

    // B3.4 — BreadcrumbList schema (khuyến nghị cao)
    await sc.check(
      `B3.4 — BreadcrumbList Schema: ${schemaAnalysis.types.includes("BreadcrumbList") ? "Có" : "Thiếu"}`,
      schemaAnalysis.types.includes("BreadcrumbList"),
      "Thiếu BreadcrumbList Schema — giúp Google hiểu cấu trúc site tốt hơn."
    );
  }

  // ──────────────────────────────────────────────────────────
  // B4. Crawlability & Indexability
  // ──────────────────────────────────────────────────────────

  async verifyCrawlability(
    scan: AdvancedSeoScanResult,
    baseScan: SeoScanResult,
    config: SeoPageTestData,
    sc: SeoScorecard
  ): Promise<void> {
    // B4.1 — Không phải soft 404
    await sc.check(
      `B4.1 — Không phải Soft 404`,
      !scan.isSoft404,
      "Trang trả về status 200 nhưng nội dung cho thấy là trang lỗi (soft 404). Google có thể deindex."
    );

    // B4.2 — X-Robots-Tag header
    const xRobotsOk =
      scan.xRobotsTag === null ||
      !scan.xRobotsTag.toLowerCase().includes("noindex");
    await sc.check(
      `B4.2 — X-Robots-Tag: ${scan.xRobotsTag || "Không có (OK)"}`,
      config.expectIndexable !== false ? xRobotsOk : !xRobotsOk,
      config.expectIndexable !== false
        ? `X-Robots-Tag đang chặn index: "${scan.xRobotsTag}"`
        : `Trang cần noindex nhưng X-Robots-Tag không gắn`
    );

    // B4.3 — Canonical URL khớp URL hiện tại
    await sc.check(
      `B4.3 — Canonical khớp URL hiện tại`,
      scan.canonicalMatchesUrl,
      `Canonical "${baseScan.canonical}" không khớp URL hiện tại "${baseScan.currentUrl}". Nguy cơ duplicate content!`
    );

    // B4.4 — Hreflang (đa ngôn ngữ)
    await sc.check(
      `B4.4 — Hreflang tags: ${scan.hasHreflang ? "Có" : "Không có"}`,
      true, // Khuyến nghị, không bắt buộc — luôn pass
      "Trang chưa có hreflang — nên thêm nếu web đa ngôn ngữ."
    );
  }

  // ──────────────────────────────────────────────────────────
  // B5. Internal Linking Hệ Thống
  // ──────────────────────────────────────────────────────────

  async verifyInternalLinking(
    scan: AdvancedSeoScanResult,
    sc: SeoScorecard
  ): Promise<void> {
    // B5.1 — Breadcrumb DOM
    await sc.check(
      `B5.1 — Breadcrumb navigation: ${scan.hasBreadcrumb ? "Có" : "Thiếu"}`,
      scan.hasBreadcrumb,
      "Trang thiếu breadcrumb navigation. Giúp Google hiểu cấu trúc site và cải thiện UX."
    );

    // B5.2 — Breadcrumb Schema
    await sc.check(
      `B5.2 — Breadcrumb Schema (JSON-LD): ${scan.breadcrumbSchema ? "Có" : "Thiếu"}`,
      scan.breadcrumbSchema,
      "Có breadcrumb nhưng thiếu BreadcrumbList Schema. Thêm JSON-LD để hiển thị trên SERP."
    );

    // B5.3 — Mục lục (TOC) cho bài viết dài
    await sc.check(
      `B5.3 — Table of Contents: ${scan.hasTableOfContents ? "Có" : "Không"}`,
      true, // Khuyến nghị, không bắt buộc
      "Nên thêm mục lục (TOC) cho bài viết dài > 1500 từ."
    );
  }

  // ──────────────────────────────────────────────────────────
  // B6. Performance
  // ──────────────────────────────────────────────────────────

  async verifyPerformanceAdvanced(
    scan: AdvancedSeoScanResult,
    config: SeoPageTestData,
    sc: SeoScorecard
  ): Promise<void> {
    const maxTTFB = config.maxTTFB ?? DEFAULT_ADVANCED_SEO_CONFIG.maxTTFB;
    const maxDOM = config.maxDOMSize ?? DEFAULT_ADVANCED_SEO_CONFIG.maxDOMSize;
    const perf = scan.performance;

    // B6.1 — Time to First Byte
    await sc.check(
      `B6.1 — TTFB: ${perf.ttfb}ms (tối đa: ${maxTTFB}ms)`,
      perf.ttfb <= maxTTFB,
      `TTFB quá cao: ${perf.ttfb}ms, cần ≤ ${maxTTFB}ms. Kiểm tra server/hosting/CDN.`
    );

    // B6.2 — DOM Size
    await sc.check(
      `B6.2 — DOM Size: ${perf.domSize} elements (tối đa: ${maxDOM})`,
      perf.domSize <= maxDOM,
      `DOM quá lớn: ${perf.domSize} elements, cần ≤ ${maxDOM}. DOM cồng kềnh làm chậm render.`
    );

    // B6.3 — HTTP/2 hoặc HTTP/3
    const isHttp2Plus =
      perf.httpVersion.includes("h2") || perf.httpVersion.includes("h3");
    await sc.check(
      `B6.3 — HTTP Protocol: ${perf.httpVersion}`,
      isHttp2Plus,
      `Server đang dùng ${perf.httpVersion}. Nên upgrade lên HTTP/2 hoặc HTTP/3 để tăng tốc.`
    );

    // B6.4 — Resource Hints (preload/preconnect)
    await sc.check(
      `B6.4 — Resource Hints: preload=${perf.preloadCount}, preconnect=${perf.preconnectCount}`,
      perf.hasPreload || perf.hasPreconnect,
      "Trang không sử dụng resource hints (preload/preconnect). Thêm để tối ưu tải tài nguyên."
    );

    // B6.5 — Lazy Loading cho ảnh
    const lazyRatio =
      perf.totalBelowFoldImages > 0
        ? (perf.lazyLoadedImages / perf.totalBelowFoldImages) * 100
        : 100;
    await sc.check(
      `B6.5 — Lazy Loading: ${perf.lazyLoadedImages}/${perf.totalBelowFoldImages} ảnh below-fold (${lazyRatio.toFixed(0)}%)`,
      lazyRatio >= DEFAULT_ADVANCED_SEO_CONFIG.lazyLoadThreshold,
      `Chỉ ${lazyRatio.toFixed(0)}% ảnh below-fold có loading="lazy", cần ≥ ${DEFAULT_ADVANCED_SEO_CONFIG.lazyLoadThreshold}%.`
    );

    // B6.6 — Font Optimization
    await sc.check(
      `B6.6 — Font Optimization: font-display:swap=${perf.fontDisplaySwap ? "✔" : "✘"}, preload=${perf.preloadedFonts}`,
      perf.fontDisplaySwap || perf.preloadedFonts > 0,
      "Font chưa được tối ưu. Thêm font-display: swap và/hoặc preload font files."
    );

    // B6.7 — Responsive Images (srcset/sizes)
    const responsiveRatio =
      perf.totalImages > 0
        ? (perf.responsiveImages / perf.totalImages) * 100
        : 100;
    await sc.check(
      `B6.7 — Responsive Images: ${perf.responsiveImages}/${perf.totalImages} ảnh có srcset`,
      responsiveRatio >= 50,
      `Chỉ ${responsiveRatio.toFixed(0)}% ảnh có srcset/sizes. Nên ≥ 50% để tối ưu cho nhiều device.`
    );
  }

  // ──────────────────────────────────────────────────────────
  // B7. UX Signals
  // ──────────────────────────────────────────────────────────

  async verifyUXSignals(
    scan: AdvancedSeoScanResult,
    sc: SeoScorecard
  ): Promise<void> {
    // B7.1 — Không có popup/overlay che content
    await sc.check(
      `B7.1 — Intrusive Interstitials: ${scan.hasIntrusiveInterstitials ? "Phát hiện" : "Không có"}`,
      !scan.hasIntrusiveInterstitials,
      "Phát hiện popup/overlay che nội dung. Google phạt trang có intrusive interstitials trên mobile."
    );

    // B7.2 — Quảng cáo above-the-fold
    await sc.check(
      `B7.2 — Above-fold Ads: ${scan.aboveFoldAdCount} ad elements`,
      scan.aboveFoldAdCount <= 1,
      `Quá nhiều ad above-the-fold: ${scan.aboveFoldAdCount}. Nên ≤ 1 để không ảnh hưởng UX.`
    );

    // B7.3 — ARIA Labels cho interactive elements
    await sc.check(
      `B7.3 — ARIA Labels thiếu: ${scan.missingAriaLabels} phần tử`,
      scan.missingAriaLabels <= 3,
      `${scan.missingAriaLabels} phần tử interactive thiếu ARIA label. Ảnh hưởng accessibility.`
    );

    // B7.4 — Focus Styles
    await sc.check(
      `B7.4 — CSS Focus Styles: ${scan.hasFocusStyles ? "Có" : "Thiếu"}`,
      scan.hasFocusStyles,
      "Trang thiếu CSS focus styles. Người dùng keyboard không thấy được phần tử đang focus."
    );
  }

  // ──────────────────────────────────────────────────────────
  // B8. URL & Domain Consistency
  // ──────────────────────────────────────────────────────────

  async verifyUrlConsistency(
    scan: AdvancedSeoScanResult,
    sc: SeoScorecard
  ): Promise<void> {
    // B8.1 — WWW Redirect
    await sc.check(
      `B8.1 — WWW Redirect: ${scan.wwwRedirectOk ? "OK" : "Lỗi"}`,
      scan.wwwRedirectOk,
      "www ↔ non-www không redirect đúng. Có thể gây duplicate content."
    );

    // B8.2 — HTTPS Redirect
    await sc.check(
      `B8.2 — HTTPS Redirect: ${scan.httpsRedirectOk ? "OK" : "Lỗi"}`,
      scan.httpsRedirectOk,
      "HTTP không redirect sang HTTPS. Ảnh hưởng bảo mật và SEO."
    );

    // B8.3 — Trailing Slash Consistency
    await sc.check(
      `B8.3 — Trailing Slash: ${scan.trailingSlashConsistent ? "Nhất quán" : "Không nhất quán"}`,
      scan.trailingSlashConsistent,
      "URL trailing slash không nhất quán. Cần redirect /page và /page/ về cùng 1 phiên bản."
    );

    // B8.4 — HSTS Header
    await sc.check(
      `B8.4 — HSTS (Strict-Transport-Security): ${scan.hasHSTS ? "Có" : "Thiếu"}`,
      scan.hasHSTS,
      "Thiếu HSTS header. Browser không bắt buộc dùng HTTPS, có thể bị downgrade attack."
    );
  }

  // ==================== GETTER / HELPER METHODS ====================

  // ── B2: E-E-A-T Helpers ──

  /** Kiểm tra thông tin tác giả trong schema hoặc DOM */
  private async checkAuthorInfo(): Promise<boolean> {
    return await this.page.evaluate(() => {
      // Check JSON-LD author
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      for (const script of scripts) {
        try {
          const json = JSON.parse(script.textContent || "");
          const schemas = Array.isArray(json) ? json : [json];
          for (const s of schemas) {
            if (s.author || s["@graph"]?.some?.((g: Record<string, unknown>) => g.author)) return true;
          }
        } catch { /* invalid JSON-LD */ }
      }
      // Check DOM patterns
      const authorSelectors = [
        '[rel="author"]', '[itemprop="author"]', '.author', '.byline',
        '[class*="author"]', '[data-author]', 'a[href*="/author/"]',
      ];
      return authorSelectors.some((sel) => document.querySelector(sel) !== null);
    });
  }

  /** Kiểm tra ngày đăng và ngày cập nhật */
  private async checkDateInfo(): Promise<{ hasPublished: boolean; hasModified: boolean }> {
    return await this.page.evaluate(() => {
      let hasPublished = false;
      let hasModified = false;

      // Check JSON-LD
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      for (const script of scripts) {
        try {
          const json = JSON.parse(script.textContent || "");
          const schemas = Array.isArray(json) ? json : [json];
          for (const s of schemas) {
            if (s.datePublished) hasPublished = true;
            if (s.dateModified) hasModified = true;
            // Check @graph
            if (s["@graph"]) {
              for (const g of s["@graph"]) {
                if (g.datePublished) hasPublished = true;
                if (g.dateModified) hasModified = true;
              }
            }
          }
        } catch { /* invalid JSON-LD */ }
      }

      // Check meta tags
      if (document.querySelector('meta[property="article:published_time"]')) hasPublished = true;
      if (document.querySelector('meta[property="article:modified_time"]')) hasModified = true;

      // Check DOM patterns
      if (document.querySelector('time[datetime], [itemprop="datePublished"]')) hasPublished = true;
      if (document.querySelector('[itemprop="dateModified"]')) hasModified = true;

      return { hasPublished, hasModified };
    });
  }

  /** Kiểm tra sự tồn tại của trang trust (About, Contact, Privacy) */
  private async checkTrustPages(origin: string): Promise<{ path: string; status: number; exists: boolean }[]> {
    const trustPaths = [
      "/about", "/about-us", "/gioi-thieu",
      "/contact", "/contact-us", "/lien-he",
      "/privacy-policy", "/chinh-sach-bao-mat",
    ];

    // Chạy song song nhưng giới hạn 4 concurrent
    const results: { path: string; status: number; exists: boolean }[] = [];
    const batchSize = 4;

    for (let i = 0; i < trustPaths.length; i += batchSize) {
      const batch = trustPaths.slice(i, i + batchSize);
      const batchResults = await Promise.all(
        batch.map(async (p) => {
          const status = await this.checkUrlStatus(`${origin}${p}`);
          return { path: p, status, exists: status >= 200 && status < 400 };
        })
      );
      results.push(...batchResults);
    }

    return results;
  }

  /** Đếm external link có giá trị SEO (không nofollow) */
  private countExternalCitations(
    externalLinks: { href: string; text: string; rel: string | null }[]
  ): Promise<number> {
    const citations = externalLinks.filter((link) => {
      const rel = (link.rel || "").toLowerCase();
      return !rel.includes("nofollow") && !rel.includes("sponsored") && !rel.includes("ugc");
    });
    return Promise.resolve(citations.length);
  }

  // ── B3: Schema Helpers ──

  /** Phân tích chi tiết Schema Markup (JSON-LD) */
  private async analyzeSchemaMarkup(): Promise<SchemaAnalysis> {
    return await this.page.evaluate(() => {
      const types: string[] = [];
      const issues: string[] = [];
      const rawSchemas: Record<string, unknown>[] = [];

      // Required fields theo từng type
      const requiredFieldsMap: Record<string, string[]> = {
        Article: ["headline", "author", "datePublished"],
        Product: ["name", "image"],
        Organization: ["name", "url"],
        WebSite: ["name", "url"],
        BreadcrumbList: ["itemListElement"],
        FAQPage: ["mainEntity"],
        LocalBusiness: ["name", "address"],
      };

      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      for (const script of scripts) {
        try {
          const json = JSON.parse(script.textContent || "");
          const schemas = Array.isArray(json) ? json : [json];

          for (const schema of schemas) {
            // Handle @graph pattern
            const items = schema["@graph"] ? schema["@graph"] : [schema];
            for (const item of items) {
              const type = item["@type"];
              if (type) {
                const typeArr = Array.isArray(type) ? type : [type];
                types.push(...typeArr);
                rawSchemas.push(item);

                // Check required fields
                for (const t of typeArr) {
                  const required = requiredFieldsMap[t];
                  if (required) {
                    const missing = required.filter((f) => !item[f]);
                    if (missing.length > 0) {
                      issues.push(`${t}: thiếu fields [${missing.join(", ")}]`);
                    }
                  }
                }
              }
            }
          }
        } catch (e) {
          issues.push(`JSON-LD parse error: ${(e as Error).message}`);
        }
      }

      return {
        types: [...new Set(types)],
        hasRequiredFields: issues.length === 0,
        issues,
        rawSchemas,
      };
    });
  }

  // ── B4: Crawlability Helpers ──

  /** Kiểm tra soft 404 — trang trả 200 nhưng nội dung báo lỗi */
  private async checkSoft404(config: SeoPageTestData): Promise<boolean> {
    const patterns = DEFAULT_ADVANCED_SEO_CONFIG.softErrorPatterns;
    return await this.page.evaluate((patternsArg) => {
      const title = document.title.toLowerCase();
      const h1 = document.querySelector("h1")?.textContent?.toLowerCase() || "";
      const bodyText = document.body?.textContent?.toLowerCase() || "";

      // Kiểm tra title và H1 trước (high-confidence signals)
      for (const pattern of patternsArg) {
        if (title.includes(pattern) || h1.includes(pattern)) return true;
      }

      // Kiểm tra body text — chỉ khi body rất ngắn (< 200 từ)
      const wordCount = bodyText.split(/\s+/).filter((w) => w.length > 0).length;
      if (wordCount < 200) {
        for (const pattern of patternsArg) {
          if (bodyText.includes(pattern)) return true;
        }
      }

      return false;
    }, patterns);
  }

  /** Lấy X-Robots-Tag từ HTTP response headers */
  private async getXRobotsTag(): Promise<string | null> {
    try {
      const response = await this.page.request.head(this.getCurrentUrl(), {
        timeout: 10000,
      });
      return response.headers()["x-robots-tag"] || null;
    } catch {
      return null;
    }
  }

  /** Kiểm tra canonical URL khớp URL hiện tại */
  private checkCanonicalMatch(baseScan: SeoScanResult): boolean {
    if (!baseScan.canonical) return false;
    // Normalize: bỏ trailing slash, lowercase
    const normalize = (url: string) =>
      url.toLowerCase().replace(/\/+$/, "").replace(/^https?:\/\/www\./, "https://");
    return normalize(baseScan.canonical) === normalize(baseScan.currentUrl);
  }

  /** Kiểm tra thẻ hreflang */
  private async checkHreflang(): Promise<boolean> {
    return await this.page.evaluate(() => {
      return document.querySelectorAll('link[rel="alternate"][hreflang]').length > 0;
    });
  }

  // ── B5: Internal Linking Helpers ──

  /** Kiểm tra breadcrumb navigation (DOM + Schema) */
  private async checkBreadcrumbs(): Promise<{ hasDom: boolean; hasSchema: boolean }> {
    return await this.page.evaluate(() => {
      // DOM breadcrumb
      const hasDom =
        document.querySelector('nav[aria-label*="breadcrumb" i]') !== null ||
        document.querySelector('[class*="breadcrumb" i]') !== null ||
        document.querySelector('[itemtype*="BreadcrumbList"]') !== null ||
        document.querySelector('ol.breadcrumb, ul.breadcrumb') !== null;

      // Schema breadcrumb
      let hasSchema = false;
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      for (const script of scripts) {
        try {
          const json = JSON.parse(script.textContent || "");
          const schemas = Array.isArray(json) ? json : [json];
          for (const s of schemas) {
            const items = s["@graph"] ? s["@graph"] : [s];
            for (const item of items) {
              if (item["@type"] === "BreadcrumbList") {
                hasSchema = true;
                break;
              }
            }
            if (hasSchema) break;
          }
        } catch { /* ignore */ }
      }

      return { hasDom, hasSchema };
    });
  }

  /** Kiểm tra mục lục (Table of Contents) */
  private async checkTableOfContents(): Promise<boolean> {
    return await this.page.evaluate(() => {
      // Check common TOC patterns
      const tocSelectors = [
        '[class*="table-of-content" i]',
        '[class*="toc" i]',
        '[id*="toc" i]',
        'nav[aria-label*="table of content" i]',
        '[class*="muc-luc" i]',
      ];
      if (tocSelectors.some((sel) => document.querySelector(sel) !== null)) return true;

      // Check for anchor links pattern (> 3 links with # in same container)
      const containers = document.querySelectorAll("nav, aside, div");
      for (const container of containers) {
        const anchorLinks = container.querySelectorAll('a[href^="#"]');
        if (anchorLinks.length >= 3) return true;
      }

      return false;
    });
  }

  // ── B6: Performance Helpers ──

  /** Thu thập tất cả Performance metrics */
  private async collectPerformanceMetrics(): Promise<PerformanceMetrics> {
    return await this.page.evaluate(() => {
      // Navigation Timing
      const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
      const ttfb = nav ? Math.round(nav.responseStart - nav.requestStart) : 0;
      const httpVersion = (nav as unknown as Record<string, string>)?.nextHopProtocol || "unknown";

      // DOM Size
      const domSize = document.querySelectorAll("*").length;

      // Resource Hints
      const preloads = document.querySelectorAll('link[rel="preload"]');
      const preconnects = document.querySelectorAll('link[rel="preconnect"]');
      const dnsPrefetches = document.querySelectorAll('link[rel="dns-prefetch"]');

      // Lazy Loading — ảnh ngoài viewport (below-fold ≈ ngoài 800px đầu)
      const allImages = document.querySelectorAll("img");
      let lazyCount = 0;
      let belowFoldCount = 0;
      allImages.forEach((img) => {
        const rect = img.getBoundingClientRect();
        if (rect.top > window.innerHeight) {
          belowFoldCount++;
          if (img.loading === "lazy" || img.getAttribute("loading") === "lazy") {
            lazyCount++;
          }
        }
      });

      // Font Optimization
      let fontDisplaySwap = false;
      const styleSheets = document.styleSheets;
      try {
        for (const sheet of styleSheets) {
          try {
            const rules = sheet.cssRules;
            for (const rule of rules) {
              if (rule instanceof CSSFontFaceRule) {
                if (rule.style.getPropertyValue("font-display") === "swap") {
                  fontDisplaySwap = true;
                  break;
                }
              }
            }
          } catch { /* cross-origin stylesheet */ }
          if (fontDisplaySwap) break;
        }
      } catch { /* ignore */ }

      const preloadedFonts = document.querySelectorAll('link[rel="preload"][as="font"]').length;

      // Responsive Images
      const responsiveImages = document.querySelectorAll("img[srcset], img[sizes], picture source[srcset]").length;

      return {
        ttfb,
        domSize,
        httpVersion,
        hasPreload: preloads.length > 0,
        hasPreconnect: preconnects.length > 0,
        hasDnsPrefetch: dnsPrefetches.length > 0,
        preloadCount: preloads.length,
        preconnectCount: preconnects.length,
        lazyLoadedImages: lazyCount,
        totalBelowFoldImages: belowFoldCount,
        fontDisplaySwap,
        preloadedFonts,
        responsiveImages,
        totalImages: allImages.length,
      };
    });
  }

  // ── B7: UX Signals Helpers ──

  /** Thu thập tất cả UX signals */
  private async collectUXSignals(): Promise<{
    hasInterstitials: boolean;
    adCount: number;
    missingAria: number;
    hasFocus: boolean;
  }> {
    return await this.page.evaluate(() => {
      // Intrusive Interstitials — popup/overlay che content
      let hasInterstitials = false;
      const overlaySelectors = [
        '[class*="modal" i][style*="display: block"]',
        '[class*="modal" i][style*="display:block"]',
        '[class*="popup" i]:not([style*="display: none"])',
        '[class*="overlay" i]:not([style*="display: none"])',
        '[class*="lightbox" i]:not([style*="display: none"])',
      ];
      for (const sel of overlaySelectors) {
        const el = document.querySelector(sel);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Chỉ tính nếu phủ > 50% viewport
          const coverageRatio = (rect.width * rect.height) / (window.innerWidth * window.innerHeight);
          if (coverageRatio > 0.5) {
            hasInterstitials = true;
            break;
          }
        }
      }

      // Above-fold Ads
      const adSelectors = [
        ".adsbygoogle",
        'ins.adsbygoogle',
        '[id*="google_ads"]',
        '[class*="ad-slot"]',
        '[class*="ad-container"]',
        'iframe[src*="doubleclick"]',
        'iframe[src*="googlesyndication"]',
      ];
      let adCount = 0;
      for (const sel of adSelectors) {
        document.querySelectorAll(sel).forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            adCount++;
          }
        });
      }

      // Missing ARIA Labels
      const interactiveSelectors = "button, [role='button'], input, select, textarea, a[href]";
      let missingAria = 0;
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        const hasLabel =
          el.getAttribute("aria-label") ||
          el.getAttribute("aria-labelledby") ||
          el.getAttribute("title") ||
          (el.textContent || "").trim().length > 0;
        if (!hasLabel) missingAria++;
      });

      // Focus Styles — check if :focus-visible or :focus styles exist
      let hasFocus = false;
      try {
        for (const sheet of document.styleSheets) {
          try {
            for (const rule of sheet.cssRules) {
              if (rule instanceof CSSStyleRule) {
                if (rule.selectorText?.includes(":focus")) {
                  hasFocus = true;
                  break;
                }
              }
            }
          } catch { /* cross-origin */ }
          if (hasFocus) break;
        }
      } catch { /* ignore */ }
      // Fallback: check if browser default focus styles are preserved
      if (!hasFocus) {
        const outlineNone = document.querySelector('*:not([tabindex="-1"])[style*="outline: none"], *:not([tabindex="-1"])[style*="outline:none"]');
        hasFocus = outlineNone === null; // No outline:none = probably has default focus
      }

      return { hasInterstitials, adCount, missingAria, hasFocus };
    });
  }

  // ── B8: URL Consistency Helpers ──

  /** Kiểm tra tất cả URL consistency signals */
  private async checkUrlConsistency(
    origin: string,
    currentUrl: string,
    config: SeoPageTestData
  ): Promise<{
    wwwOk: boolean;
    httpsOk: boolean;
    trailingSlashOk: boolean;
    hasHSTS: boolean;
  }> {
    const parsedUrl = new URL(currentUrl);

    // B8.1 — WWW consistency: check if www variant redirects to non-www (or vice versa)
    let wwwOk = true;
    try {
      const hasWww = parsedUrl.hostname.startsWith("www.");
      const altHost = hasWww
        ? parsedUrl.hostname.replace("www.", "")
        : `www.${parsedUrl.hostname}`;
      const altUrl = `${parsedUrl.protocol}//${altHost}${parsedUrl.pathname}`;
      const status = await this.checkUrlStatus(altUrl);
      // 301/302 redirect = đúng, 200 = cả 2 version cùng active = sai
      wwwOk = status === 301 || status === 302 || status === 308 || status === 0;
    } catch {
      wwwOk = true; // Không check được = assume OK
    }

    // B8.2 — HTTPS redirect
    let httpsOk = true;
    if (parsedUrl.protocol === "https:") {
      try {
        const httpUrl = currentUrl.replace("https://", "http://");
        const status = await this.checkUrlStatus(httpUrl);
        httpsOk = status === 301 || status === 302 || status === 308 || status === 0;
      } catch {
        httpsOk = true;
      }
    }

    // B8.3 — Trailing slash consistency
    let trailingSlashOk = true;
    const path = parsedUrl.pathname;
    if (path !== "/" && path.length > 1) {
      try {
        const altPath = path.endsWith("/") ? path.slice(0, -1) : path + "/";
        const altUrl = `${origin}${altPath}`;
        const status = await this.checkUrlStatus(altUrl);
        // 301/302 redirect = nhất quán, 200 = cả 2 version active = không nhất quán
        trailingSlashOk = status !== 200;
      } catch {
        trailingSlashOk = true;
      }
    }

    // B8.4 — HSTS Header
    let hasHSTS = false;
    try {
      const response = await this.page.request.head(currentUrl, { timeout: 10000 });
      const headers = response.headers();
      hasHSTS = !!headers["strict-transport-security"];
    } catch {
      hasHSTS = false;
    }

    return { wwwOk, httpsOk, trailingSlashOk, hasHSTS };
  }
}
