import { Page } from "@playwright/test";
import { SeoScanResult } from "../../interfaces/SeoScanResult";
import { AdvancedSeoScanResult } from "../../interfaces/AdvancedSeoScanResult";
import { SeoPageTestData } from "../../test-data/seoData";
import { AdvancedDomExtractor } from "../extractors/AdvancedDomExtractor";
import { LLMService } from "../../services/LLMService";
import { PageSpeedService } from "../../services/PageSpeedService";
import { SerpService } from "../../services/SerpService";

export class AdvancedSeoScanner {
  constructor(private page: Page, private extractor: AdvancedDomExtractor) { }

  async scanAdvancedSEO(
    baseScan: SeoScanResult, 
    config: SeoPageTestData,
    apiResults: {
      contentEvaluation?: any;
      coreWebVitals?: any;
      serpData?: any;
    } = {}
  ): Promise<AdvancedSeoScanResult> {
    const origin = new URL(baseScan.currentUrl).origin;

    const [
      authorInfo,
      dateInfo,
      trustPages,
      externalCitations,
      schemaAnalysis,
      schemaConsistency,
      soft404Check,
      xRobotsTag,
      hreflangCheck,
      breadcrumbInfo,
      tocCheck,
      featuredSnippetCheck,
      performanceMetrics,
      thirdPartyScripts,
      uxSignals,
      urlConsistency,
    ] = await Promise.all([
      // B2. E-E-A-T
      this.extractor.checkAuthorInfo(),
      this.extractor.checkDateInfo(),
      this.extractor.checkTrustPages(origin),
      this.extractor.countExternalCitations(baseScan.externalLinks),
      // B3. Schema
      this.extractor.analyzeSchemaMarkup(),
      this.extractor.checkSchemaConsistency(),
      // B4. Crawlability
      this.extractor.checkSoft404(config),
      this.extractor.getXRobotsTag(),
      this.extractor.checkHreflang(),
      // B5. Internal Linking
      this.extractor.checkBreadcrumbs(),
      this.extractor.checkTableOfContents(),
      // B1.4 Featured Snippet (DOM-based)
      this.extractor.checkFeaturedSnippetPotential(),
      // B6. Performance
      this.extractor.collectPerformanceMetrics(),
      this.extractor.collectThirdPartyScripts(),
      // B7. UX Signals
      this.extractor.collectUXSignals(),
      // B8. URL Consistency
      this.extractor.checkUrlConsistency(origin, baseScan.currentUrl, config),
    ]);

    // B5.4 — Anchor diversity (sync, không cần await)
    const anchorDiversity = this.extractor.analyzeAnchorDiversity(baseScan.internalLinks);

    // API results are now passed from the spec to allow parallel execution

    return {
      // B2. E-E-A-T
      hasAuthorInfo: authorInfo,
      hasDatePublished: dateInfo.hasPublished,
      hasDateModified: dateInfo.hasModified,
      trustPages,
      externalCitations,

      // B3. Schema
      schemaAnalysis,
      schemaConsistency,

      // B4. Crawlability
      isSoft404: soft404Check,
      xRobotsTag,
      canonicalMatchesUrl: this.extractor.checkCanonicalMatch(baseScan),
      hasHreflang: hreflangCheck,

      // B5. Internal Linking
      hasBreadcrumb: breadcrumbInfo.hasDom,
      breadcrumbSchema: breadcrumbInfo.hasSchema,
      hasTableOfContents: tocCheck,
      orphanLinkScore: 0,   // Giữ = 0, cần crawler riêng
      anchorDiversity,

      // B6. Performance
      performance: performanceMetrics,
      thirdPartyScripts,

      // B7. UX Signals
      hasIntrusiveInterstitials: uxSignals.hasInterstitials,
      aboveFoldAdCount: uxSignals.adCount,
      missingAriaLabels: uxSignals.missingAria,
      hasFocusStyles: uxSignals.hasFocus,

      // B8. URL Consistency
      wwwRedirectOk: urlConsistency.wwwOk,
      httpsRedirectOk: urlConsistency.httpsOk,
      trailingSlashConsistent: urlConsistency.trailingSlashOk,
      hasHSTS: urlConsistency.hasHSTS,

      // B1.4 Featured Snippet (DOM)
      featuredSnippetCheck,

      // Phase 2 APIs
      contentEvaluation: apiResults.contentEvaluation || null,
      coreWebVitals: apiResults.coreWebVitals || null,
      serpData: apiResults.serpData || null,
    };
  }
}
