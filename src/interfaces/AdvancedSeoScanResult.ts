import { ContentEvaluationResult } from "../services/LLMService";
import { CoreWebVitals } from "../services/PageSpeedService";
import { SerpResult } from "../services/SerpService";

export interface SchemaAnalysis {
  types: string[];
  hasRequiredFields: boolean;
  issues: string[];
  rawSchemas: Record<string, unknown>[];
}

export interface PerformanceMetrics {
  ttfb: number;
  domSize: number;
  httpVersion: string;
  hasPreload: boolean;
  hasPreconnect: boolean;
  hasDnsPrefetch: boolean;
  preloadCount: number;
  preconnectCount: number;
  lazyLoadedImages: number;
  totalBelowFoldImages: number;
  fontDisplaySwap: boolean;
  preloadedFonts: number;
  responsiveImages: number;
  totalImages: number;
}

// B3.6 — Schema vs visible DOM consistency
export interface SchemaConsistency {
  isConsistent: boolean;
  issues: string[]; // VD: ["Product.name 'Foo' không khớp H1 'Bar'"]
}

// B5.4 — Anchor text diversity
export interface AnchorDiversity {
  total: number;
  unique: number;
  ratio: number; // unique/total * 100 (%)
  genericCount: number; // Số anchor text chung chung (click here, xem thêm...)
}

// B6.8 — Third-party script impact
export interface ThirdPartyScripts {
  count: number;
  names: string[]; // Domain tên của scripts (analytics.google.com, fb.net...)
}

// B1.4 — Featured Snippet
export interface FeaturedSnippetCheck {
  hasList: boolean;       // Có danh sách đánh số/dấu chấm không
  hasTable: boolean;      // Có bảng không
  hasShortParagraph: boolean; // Có đoạn 40-60 từ không
  score: number;          // 0-100 tổng hợp
}

export interface AdvancedSeoScanResult {
  // ── B2. E-E-A-T ──
  hasAuthorInfo: boolean;
  hasDatePublished: boolean;
  hasDateModified: boolean;
  trustPages: { path: string; status: number; exists: boolean }[];
  externalCitations: number;

  // ── B3. Schema ──
  schemaAnalysis: SchemaAnalysis;
  schemaConsistency: SchemaConsistency; // B3.6 MỚI

  // ── B4. Crawlability ──
  isSoft404: boolean;
  xRobotsTag: string | null;
  canonicalMatchesUrl: boolean;
  hasHreflang: boolean;

  // ── B5. Internal Linking ──
  hasBreadcrumb: boolean;
  breadcrumbSchema: boolean;
  hasTableOfContents: boolean;
  orphanLinkScore: number;            // Giữ = 0 (bỏ qua, cần crawler riêng)
  anchorDiversity: AnchorDiversity;   // B5.4 MỚI

  // ── B6. Performance ──
  performance: PerformanceMetrics;
  thirdPartyScripts: ThirdPartyScripts; // B6.8 MỚI

  // ── B7. UX Signals ──
  hasIntrusiveInterstitials: boolean;
  aboveFoldAdCount: number;
  missingAriaLabels: number;
  hasFocusStyles: boolean;

  // ── B8. URL Consistency ──
  wwwRedirectOk: boolean;
  httpsRedirectOk: boolean;
  trailingSlashConsistent: boolean;
  hasHSTS: boolean;

  // ── B1. Semantic SEO (từ DOM check) ──
  featuredSnippetCheck: FeaturedSnippetCheck; // B1.4 MỚI

  // ── Phase 2 APIs ──
  contentEvaluation: ContentEvaluationResult | null; // LLM (B1.1-B1.4, entity, TF-IDF)
  coreWebVitals: CoreWebVitals | null;               // PageSpeed API (B6)
  serpData: SerpResult | null;                       // SerpAPI (B1.5, B1.6)
}
