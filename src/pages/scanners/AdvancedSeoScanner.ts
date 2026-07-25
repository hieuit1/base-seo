import { Page } from "@playwright/test";
import { SeoScanResult } from "../../interfaces/SeoScanResult";
import { AdvancedSeoScanResult } from "../../interfaces/AdvancedSeoScanResult";
import { SeoPageTestData } from "../../test-data/seoData";
import { AdvancedDomExtractor } from "../extractors/AdvancedDomExtractor";
import { LLMService } from "../../services/LLMService";
import { PageSpeedService } from "../../services/PageSpeedService";
import { SerpService } from "../../services/SerpService";

export class AdvancedSeoScanner {
  constructor(private page: Page, private extractor: AdvancedDomExtractor) {}

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
      this.extractor.checkAuthorInfo(),
      this.extractor.checkDateInfo(),
      this.extractor.checkTrustPages(origin),
      this.extractor.countExternalCitations(baseScan.externalLinks),
      this.extractor.analyzeSchemaMarkup(),
      this.extractor.checkSoft404(config),
      this.extractor.getXRobotsTag(),
      this.extractor.checkHreflang(),
      this.extractor.checkBreadcrumbs(),
      this.extractor.checkTableOfContents(),
      this.extractor.collectPerformanceMetrics(),
      this.extractor.collectUXSignals(),
      this.extractor.checkUrlConsistency(origin, baseScan.currentUrl, config),
    ]);

    const pageContent = await this.page.evaluate(() => document.body.innerText);

    const llmService = new LLMService();
    const pageSpeedService = new PageSpeedService();
    const serpService = new SerpService();

    const [contentEval, cwVitals, serpData] = await Promise.all([
      llmService.isAvailable() ? llmService.evaluateContentQuality(config.keyword, pageContent) : Promise.resolve(null),
      pageSpeedService.isAvailable() ? pageSpeedService.getCoreWebVitals(baseScan.currentUrl) : Promise.resolve(null),
      serpService.isAvailable() ? serpService.analyzeSerp(new URL(baseScan.currentUrl).hostname, config.keyword) : Promise.resolve(null)
    ]);

    return {
      hasAuthorInfo: authorInfo,
      hasDatePublished: dateInfo.hasPublished,
      hasDateModified: dateInfo.hasModified,
      trustPages,
      externalCitations,
      schemaAnalysis,
      isSoft404: soft404Check,
      xRobotsTag,
      canonicalMatchesUrl: this.extractor.checkCanonicalMatch(baseScan),
      hasHreflang: hreflangCheck,
      hasBreadcrumb: breadcrumbInfo.hasDom,
      breadcrumbSchema: breadcrumbInfo.hasSchema,
      hasTableOfContents: tocCheck,
      orphanLinkScore: 0,
      performance: performanceMetrics,
      hasIntrusiveInterstitials: uxSignals.hasInterstitials,
      aboveFoldAdCount: uxSignals.adCount,
      missingAriaLabels: uxSignals.missingAria,
      hasFocusStyles: uxSignals.hasFocus,
      wwwRedirectOk: urlConsistency.wwwOk,
      httpsRedirectOk: urlConsistency.httpsOk,
      trailingSlashConsistent: urlConsistency.trailingSlashOk,
      hasHSTS: urlConsistency.hasHSTS,
      contentEvaluation: contentEval,
      coreWebVitals: cwVitals,
      serpData: serpData,
    };
  }
}
