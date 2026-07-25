import { Page } from "@playwright/test";
import { SeoScanResult } from "../../interfaces/SeoScanResult";
import { DomExtractor } from "../extractors/DomExtractor";
import { CheerioService, StaticSeoData } from "../../services/CheerioService";

export class SeoScanner {
  constructor(private page: Page, private extractor: DomExtractor) {}

  async scanSEOMetadata(keyword: string, rawHtml?: string, passedHeaders?: Record<string, string>): Promise<SeoScanResult> {
    const currentUrl = this.page.url();
    const urlObj = new URL(currentUrl);
    const urlPath = urlObj.pathname + urlObj.search;
    const isHttps = this.extractor.isHttps();

    let staticData: StaticSeoData | undefined;
    let pageHeaders: Record<string, string> = passedHeaders || {};
    
    if (rawHtml) {
      staticData = CheerioService.parseStaticHtml(rawHtml);
    } else {
      try {
        const response = await this.page.request.get(currentUrl, { timeout: 10000 });
        if (response.ok()) {
          const html = await response.text();
          staticData = CheerioService.parseStaticHtml(html);
          pageHeaders = response.headers();
        }
      } catch (e) {
        console.error(`Không thể lấy Static HTML cho ${currentUrl}:`, e);
      }
    }

    const [
      titleVal,
      metaVal,
      h1Texts,
      allHeadings,
      bodyText,
      images,
      internalLinks,
      externalLinks,
      canonical,
      robots,
      hasSchema,
      ogTags,
      twitterTags,
      lang,
      charset,
      hasFavicon,
      hasViewport,
      mixedContent,
      hreflangs,
      cssFiles,
      mobileMetrics,
    ] = await Promise.all([
      this.extractor.getTitle(),
      this.extractor.getMetaDescription(),
      this.extractor.getH1Elements(),
      this.extractor.getAllHeadings(),
      this.extractor.getBodyText(),
      this.extractor.getImages(),
      this.extractor.getInternalLinks(),
      this.extractor.getExternalLinks(),
      this.extractor.getCanonicalUrl(),
      this.extractor.getRobotsContent(),
      this.extractor.hasSchemaMarkup(),
      this.extractor.getOpenGraphTags(),
      this.extractor.getTwitterCardTags(),
      this.extractor.getLangAttribute(),
      this.extractor.getCharset(),
      this.extractor.hasFavicon(),
      this.extractor.hasViewportMeta(),
      this.extractor.getMixedContent(),
      this.extractor.getHreflangs(),
      this.extractor.getCssFiles(),
      this.extractor.getMobileMetrics(),
    ]);

    const words = bodyText.split(/\s+/).filter((w) => w.length > 0);
    const wordCount = words.length;
    const first100Words = words.slice(0, 100).join(" ");

    let keywordDensity = 0;
    if (wordCount > 0 && keyword.trim().length > 0) {
      const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(escapedKeyword, "gi");
      const matches = bodyText.match(regex);
      const keywordWordCount = keyword.split(/\s+/).filter(w => w.length > 0).length;
      keywordDensity = ((matches ? (matches.length * keywordWordCount) : 0) / wordCount) * 100;
    }

    const hierarchyIssues: string[] = [];
    let lastLevel = 0;
    for (const heading of allHeadings) {
      const level = parseInt(heading.tag.replace("h", ""));
      if (lastLevel > 0 && level > lastLevel + 1) {
        hierarchyIssues.push(`Nhảy cấp từ H${lastLevel} → H${level} ("${heading.text}")`);
      }
      lastLevel = level;
    }
    const headingHierarchy = { valid: hierarchyIssues.length === 0, issues: hierarchyIssues };

    const missingAltCount = images.filter((img) => img.alt === null || img.alt.trim() === "").length;
    const hashPattern = /^[a-f0-9]{8,}\.(jpg|jpeg|png|gif|webp|svg|avif)$/i;
    const imagesWithBadNames = images.filter((img) => {
      const fileName = img.src.split("/").pop()?.split("?")[0] || "";
      return hashPattern.test(fileName);
    }).length;
    const imagesWithDimensions = images.filter((img) => img.width && img.height).length;

    const origin = new URL(currentUrl).origin;
    const imagesToCheck = images.slice(0, 20);
    await Promise.all(imagesToCheck.map(async (img) => {
      if (!img.src || img.src.startsWith('data:')) return;
      try {
        const fullUrl = img.src.startsWith('http') ? img.src : (img.src.startsWith('//') ? `https:${img.src}` : new URL(img.src, origin).href);
        const response = await this.page.request.head(fullUrl, { timeout: 2000 });
        if (response.ok()) {
          const headers = response.headers();
          if (headers['content-length']) {
            img.sizeBytes = parseInt(headers['content-length'], 10);
          }
        }
      } catch (error) {
        // ignore fetch errors
      }
    }));

    return {
      titleVal, metaVal, h1Texts, allHeadings, headingHierarchy,
      currentUrl, urlPath, wordCount, first100Words, keywordDensity, staticData,
      images, missingAltCount, imagesWithBadNames, imagesWithDimensions,
      internalLinks, externalLinks,
      canonical, robots, hasSchema,
      ogTitle: ogTags["og:title"] || null,
      ogDesc: ogTags["og:description"] || null,
      ogImage: ogTags["og:image"] || null,
      twitterTags, lang, charset, hasFavicon, hasViewport,
      isHttps, mixedContent, bodyText,
      hreflangs, pageHeaders, cssFiles, minFontSize: mobileMetrics.minFontSize, badTouchTargets: mobileMetrics.badTouchTargets,
    };
  }
}
