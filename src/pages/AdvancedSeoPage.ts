import { Page } from "@playwright/test";
import { SeoPage } from "./SeoPage";
import { SeoScanResult } from "../interfaces/SeoScanResult";
import { AdvancedSeoScanResult } from "../interfaces/AdvancedSeoScanResult";
import { SeoPageTestData } from "../test-data/seoData";
import { SeoScorecard } from "../utils/reportHelper";
import { DEFAULT_ADVANCED_SEO_CONFIG } from "../constants/advancedSeoDefaults";
import { injectAdvancedVisualSEOReport } from "../utils/AdvancedSeoReportHelper";
import { AdvancedDomExtractor } from "./extractors/AdvancedDomExtractor";
import { AdvancedSeoScanner } from "./scanners/AdvancedSeoScanner";

export class AdvancedSeoPage extends SeoPage {
  async scanAdvancedSEO(baseScan: SeoScanResult, config: SeoPageTestData): Promise<AdvancedSeoScanResult> {
    const advExtractor = new AdvancedDomExtractor(this.page);
    const advScanner = new AdvancedSeoScanner(this.page, advExtractor);
    return advScanner.scanAdvancedSEO(baseScan, config);
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

}