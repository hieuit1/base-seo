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

export interface AdvancedSeoScanResult {
  hasAuthorInfo: boolean;
  hasDatePublished: boolean;
  hasDateModified: boolean;
  trustPages: { path: string; status: number; exists: boolean }[];
  externalCitations: number;

  schemaAnalysis: SchemaAnalysis;

  isSoft404: boolean;
  xRobotsTag: string | null;
  canonicalMatchesUrl: boolean;
  hasHreflang: boolean;

  hasBreadcrumb: boolean;
  breadcrumbSchema: boolean;
  hasTableOfContents: boolean;
  orphanLinkScore: number;

  performance: PerformanceMetrics;

  hasIntrusiveInterstitials: boolean;
  aboveFoldAdCount: number;
  missingAriaLabels: number;
  hasFocusStyles: boolean;

  wwwRedirectOk: boolean;
  httpsRedirectOk: boolean;
  trailingSlashConsistent: boolean;
  hasHSTS: boolean;

  contentEvaluation: ContentEvaluationResult | null;
  coreWebVitals: CoreWebVitals | null;
  serpData: SerpResult | null;
}
