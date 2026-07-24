export interface SeoPageTestData {
  name: string;
  path: string;
  keyword: string;
  expectIndexable?: boolean;
  checkSocialOg?: boolean;
  priority: string;
  severity: string;
  titleMinLength?: number;
  titleMaxLength?: number;
  metaDescMinLength?: number;
  metaDescMaxLength?: number;
  minWordCount?: number;
  keywordDensityMin?: number;
  keywordDensityMax?: number;
  urlMaxLength?: number;
  seoPassThreshold?: number;
  lsiKeywords?: string[];
  minReadabilityScore?: number;
  maxImageSizeKb?: number;
  modernImageRatio?: number;
  languages?: string[]; // Thêm ngôn ngữ hỗ trợ (VD: ['vi', 'en'])

  // ═══════ PHẦN B: Tiêu chuẩn chuyên sâu (ADVANCED) ═══════
  checkAdvanced?: boolean;            // Bật/tắt kiểm tra Phần B (default: false)
  checkEEAT?: boolean;               // B2: Kiểm tra E-E-A-T signals
  expectedSchemaTypes?: string[];     // B3: Schema types kỳ vọng ['Product', 'BreadcrumbList', ...]
  checkPerformance?: boolean;         // B6: Kiểm tra performance metrics
  maxTTFB?: number;                   // B6: Override TTFB tối đa (ms)
  maxDOMSize?: number;                // B6: Override DOM size tối đa
  checkAccessibility?: boolean;       // B7: Kiểm tra UX/Accessibility signals
  enforceTrailingSlash?: boolean;     // B8: Enforce trailing slash consistency
  advancedPassThreshold?: number;     // Ngưỡng pass riêng cho Phần B (default: 60)
}
export const seoTestData: SeoPageTestData[] = [
  {
    name: "Trang chủ (Home Page)",
    path: "/",
    keyword: "Thuê văn phòng Bình Dương", // ← Thay bằng keyword thực tế
    expectIndexable: true,
    checkSocialOg: true,
    priority: "critical",
    severity: "blocker",
  },

  // ── Thêm trang khác tại đây ──────────────────────────
  // {
  //   name: "SEO starter guide",
  //   path: "/search/docs/fundamentals/seo-starter-guide",
  //   keyword: "SEO starter guide",
  //   expectIndexable: true,
  //   checkSocialOg: true,
  //   priority: "high",
  //   severity: "critical",
  //   titleMinLength: 40,
  //   titleMaxLength: 65,
  // },

];
