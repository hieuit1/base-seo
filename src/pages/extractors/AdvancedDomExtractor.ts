import { DomExtractor } from "./DomExtractor";
import { SeoScanResult } from "../../interfaces/SeoScanResult";
import { SeoPageTestData } from "../../test-data/seoData";
import { DEFAULT_ADVANCED_SEO_CONFIG } from "../../constants/advancedSeoDefaults";
import {
  PerformanceMetrics,
  SchemaAnalysis,
  SchemaConsistency,
  AnchorDiversity,
  ThirdPartyScripts,
  FeaturedSnippetCheck,
} from "../../interfaces/AdvancedSeoScanResult";

export class AdvancedDomExtractor extends DomExtractor {
  // ──────────────────────────────────────────────────────────
  // B2. E-E-A-T
  // ──────────────────────────────────────────────────────────

  async checkAuthorInfo(): Promise<boolean> {
    return await this.page.evaluate(() => {
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
      const authorSelectors = [
        '[rel="author"]', '[itemprop="author"]', '.author', '.byline',
        '[class*="author"]', '[data-author]', 'a[href*="/author/"]',
      ];
      return authorSelectors.some((sel) => document.querySelector(sel) !== null);
    });
  }

  async checkDateInfo(): Promise<{ hasPublished: boolean; hasModified: boolean }> {
    return await this.page.evaluate(() => {
      let hasPublished = false;
      let hasModified = false;

      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      for (const script of scripts) {
        try {
          const json = JSON.parse(script.textContent || "");
          const schemas = Array.isArray(json) ? json : [json];
          for (const s of schemas) {
            if (s.datePublished) hasPublished = true;
            if (s.dateModified) hasModified = true;
            if (s["@graph"]) {
              for (const g of s["@graph"]) {
                if (g.datePublished) hasPublished = true;
                if (g.dateModified) hasModified = true;
              }
            }
          }
        } catch { /* invalid JSON-LD */ }
      }

      if (document.querySelector('meta[property="article:published_time"]')) hasPublished = true;
      if (document.querySelector('meta[property="article:modified_time"]')) hasModified = true;
      if (document.querySelector('time[datetime], [itemprop="datePublished"]')) hasPublished = true;
      if (document.querySelector('[itemprop="dateModified"]')) hasModified = true;

      return { hasPublished, hasModified };
    });
  }

  async checkTrustPages(origin: string): Promise<{ path: string; status: number; exists: boolean }[]> {
    const trustPaths = [
      "/about", "/about-us", "/gioi-thieu",
      "/contact", "/contact-us", "/lien-he",
      "/privacy-policy", "/chinh-sach-bao-mat",
    ];

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

  countExternalCitations(externalLinks: { href: string; text: string; rel: string | null }[]): Promise<number> {
    const citations = externalLinks.filter((link) => {
      const rel = (link.rel || "").toLowerCase();
      return !rel.includes("nofollow") && !rel.includes("sponsored") && !rel.includes("ugc");
    });
    return Promise.resolve(citations.length);
  }

  // ──────────────────────────────────────────────────────────
  // B3. Schema Markup
  // ──────────────────────────────────────────────────────────

  async analyzeSchemaMarkup(): Promise<SchemaAnalysis> {
    return await this.page.evaluate(() => {
      const types: string[] = [];
      const issues: string[] = [];
      const rawSchemas: Record<string, unknown>[] = [];

      const requiredFieldsMap: Record<string, string[]> = {
        Article: ["headline", "author", "datePublished"],
        Product: ["name", "image"],
        Organization: ["name", "url"],
        WebSite: ["name", "url"],
        BreadcrumbList: ["itemListElement"],
        FAQPage: ["mainEntity"],
        LocalBusiness: ["name", "address"],
        HowTo: ["name", "step"],             // MỚI: HowTo schema
        VideoObject: ["name", "description", "thumbnailUrl"], // MỚI: VideoObject
      };

      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      for (const script of scripts) {
        try {
          const json = JSON.parse(script.textContent || "");
          const schemas = Array.isArray(json) ? json : [json];

          for (const schema of schemas) {
            const items = schema["@graph"] ? schema["@graph"] : [schema];
            for (const item of items) {
              const type = item["@type"];
              if (type) {
                const typeArr = Array.isArray(type) ? type : [type];
                types.push(...typeArr);
                rawSchemas.push(item);

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

  /**
   * B3.6 — Kiểm tra tính nhất quán Schema vs DOM hiển thị
   * Dùng contains + lowercase (không exact match) để tránh false negative
   */
  async checkSchemaConsistency(): Promise<SchemaConsistency> {
    return await this.page.evaluate(() => {
      const issues: string[] = [];

      const h1Text = (document.querySelector("h1")?.textContent || "").trim().toLowerCase();
      const bodyText = (document.body?.textContent || "").toLowerCase();

      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      for (const script of scripts) {
        try {
          const json = JSON.parse(script.textContent || "");
          const schemas = Array.isArray(json) ? json : [json];

          for (const schema of schemas) {
            const items = schema["@graph"] ? schema["@graph"] : [schema];
            for (const item of items) {
              const type = item["@type"];
              if (!type) continue;

              // Article/WebPage: kiểm tra headline vs H1
              if ((type === "Article" || type === "WebPage" || type === "NewsArticle") && item.headline) {
                const headline = String(item.headline).toLowerCase();
                if (h1Text.length > 0 && !h1Text.includes(headline.substring(0, 20)) && !headline.includes(h1Text.substring(0, 20))) {
                  issues.push(`${type}.headline "${item.headline}" không khớp H1 "${document.querySelector("h1")?.textContent?.trim()}"`);
                }
              }

              // Product: kiểm tra name xuất hiện trong DOM
              if (type === "Product" && item.name) {
                const productName = String(item.name).toLowerCase();
                if (!bodyText.includes(productName)) {
                  issues.push(`Product.name "${item.name}" không xuất hiện trong nội dung trang`);
                }
              }

              // FAQPage: kiểm tra câu hỏi xuất hiện trong DOM
              if (type === "FAQPage" && Array.isArray(item.mainEntity)) {
                for (const faqItem of item.mainEntity.slice(0, 3)) {
                  const question = String(faqItem.name || "").toLowerCase();
                  if (question && !bodyText.includes(question.substring(0, 30))) {
                    issues.push(`FAQPage: câu hỏi "${faqItem.name}" không xuất hiện trên trang`);
                  }
                }
              }
            }
          }
        } catch { /* ignore parse error đã xử lý ở analyzeSchemaMarkup */ }
      }

      return {
        isConsistent: issues.length === 0,
        issues,
      };
    });
  }

  // ──────────────────────────────────────────────────────────
  // B4. Crawlability
  // ──────────────────────────────────────────────────────────

  async checkSoft404(config: SeoPageTestData): Promise<boolean> {
    const patterns = DEFAULT_ADVANCED_SEO_CONFIG.softErrorPatterns;
    return await this.page.evaluate((patternsArg) => {
      const title = document.title.toLowerCase();
      const h1 = document.querySelector("h1")?.textContent?.toLowerCase() || "";
      const bodyText = document.body?.textContent?.toLowerCase() || "";

      for (const pattern of patternsArg) {
        if (title.includes(pattern) || h1.includes(pattern)) return true;
      }

      const wordCount = bodyText.split(/\s+/).filter((w) => w.length > 0).length;
      if (wordCount < 200) {
        for (const pattern of patternsArg) {
          if (bodyText.includes(pattern)) return true;
        }
      }

      return false;
    }, patterns);
  }

  async getXRobotsTag(): Promise<string | null> {
    try {
      const response = await this.page.request.head(this.getCurrentUrl(), {
        timeout: 10000,
      });
      return response.headers()["x-robots-tag"] || null;
    } catch {
      return null;
    }
  }

  checkCanonicalMatch(baseScan: SeoScanResult): boolean {
    if (!baseScan.canonical) return false;
    const normalize = (url: string) =>
      url.toLowerCase().replace(/\/+$/, "").replace(/^https?:\/\/www\./, "https://");
    return normalize(baseScan.canonical) === normalize(baseScan.currentUrl);
  }

  async checkHreflang(): Promise<boolean> {
    return await this.page.evaluate(() => {
      return document.querySelectorAll('link[rel="alternate"][hreflang]').length > 0;
    });
  }

  // ──────────────────────────────────────────────────────────
  // B5. Internal Linking
  // ──────────────────────────────────────────────────────────

  async checkBreadcrumbs(): Promise<{ hasDom: boolean; hasSchema: boolean }> {
    return await this.page.evaluate(() => {
      const hasDom =
        document.querySelector('nav[aria-label*="breadcrumb" i]') !== null ||
        document.querySelector('[class*="breadcrumb" i]') !== null ||
        document.querySelector('[itemtype*="BreadcrumbList"]') !== null ||
        document.querySelector('ol.breadcrumb, ul.breadcrumb') !== null;

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

  async checkTableOfContents(): Promise<boolean> {
    return await this.page.evaluate(() => {
      const tocSelectors = [
        '[class*="table-of-content" i]',
        '[class*="toc" i]',
        '[id*="toc" i]',
        'nav[aria-label*="table of content" i]',
        '[class*="muc-luc" i]',
      ];
      if (tocSelectors.some((sel) => document.querySelector(sel) !== null)) return true;

      const containers = document.querySelectorAll("nav, aside, div");
      for (const container of containers) {
        const anchorLinks = container.querySelectorAll('a[href^="#"]');
        if (anchorLinks.length >= 3) return true;
      }

      return false;
    });
  }

  /**
   * B5.4 — Phân tích độ đa dạng anchor text của internal links
   */
  analyzeAnchorDiversity(internalLinks: { href: string; text: string }[]): AnchorDiversity {
    const genericAnchors = [
      "click here", "here", "read more", "xem thêm", "nhấn vào đây",
      "tại đây", "more", "link", "this", "this page", "more info",
    ];

    const total = internalLinks.length;
    if (total === 0) {
      return { total: 0, unique: 0, ratio: 100, genericCount: 0 };
    }

    const anchorTexts = internalLinks.map((l) => l.text.trim().toLowerCase()).filter(Boolean);
    const uniqueAnchors = new Set(anchorTexts);
    const unique = uniqueAnchors.size;
    const ratio = Math.round((unique / total) * 100);

    const genericCount = anchorTexts.filter((t) =>
      genericAnchors.some((g) => t === g || t.startsWith(g))
    ).length;

    return { total, unique, ratio, genericCount };
  }

  // ──────────────────────────────────────────────────────────
  // B1.4 — Featured Snippet Potential (DOM-based)
  // ──────────────────────────────────────────────────────────

  async checkFeaturedSnippetPotential(): Promise<FeaturedSnippetCheck> {
    return await this.page.evaluate(() => {
      // Kiểm tra có danh sách (ol/ul) có ít nhất 3 items
      const hasList = (() => {
        const lists = document.querySelectorAll("ol, ul");
        for (const list of lists) {
          const items = list.querySelectorAll("li");
          if (items.length >= 3) return true;
        }
        return false;
      })();

      // Kiểm tra có bảng (table) không
      const hasTable = document.querySelector("table") !== null;

      // Kiểm tra có đoạn văn 40-60 từ không (trả lời trực tiếp)
      const hasShortParagraph = (() => {
        const paragraphs = document.querySelectorAll("p");
        for (const p of paragraphs) {
          const text = (p.textContent || "").trim();
          const words = text.split(/\s+/).filter((w) => w.length > 0);
          if (words.length >= 40 && words.length <= 80) return true;
        }
        return false;
      })();

      // Tính điểm tổng hợp
      let score = 0;
      if (hasList) score += 40;
      if (hasTable) score += 30;
      if (hasShortParagraph) score += 30;

      return { hasList, hasTable, hasShortParagraph, score };
    });
  }

  // ──────────────────────────────────────────────────────────
  // B6. Performance (extended)
  // ──────────────────────────────────────────────────────────

  async collectPerformanceMetrics(): Promise<PerformanceMetrics> {
    return await this.page.evaluate(() => {
      const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
      const ttfb = nav ? Math.round(nav.responseStart - nav.requestStart) : 0;
      const httpVersion = (nav as unknown as Record<string, string>)?.nextHopProtocol || "unknown";

      const domSize = document.querySelectorAll("*").length;

      const preloads = document.querySelectorAll('link[rel="preload"]');
      const preconnects = document.querySelectorAll('link[rel="preconnect"]');
      const dnsPrefetches = document.querySelectorAll('link[rel="dns-prefetch"]');

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

  /**
   * B6.8 — Thu thập third-party scripts ảnh hưởng performance
   */
  async collectThirdPartyScripts(): Promise<ThirdPartyScripts> {
    const currentOrigin = new URL(this.getCurrentUrl()).hostname;

    return await this.page.evaluate((host) => {
      const thirdPartyDomains: string[] = [];
      const knownThirdParty = [
        "google-analytics.com", "googletagmanager.com", "analytics.google.com",
        "facebook.net", "fbcdn.net", "connect.facebook.net",
        "doubleclick.net", "googlesyndication.com", "googleadservices.com",
        "twitter.com", "platform.twitter.com",
        "cdn.jsdelivr.net", "cdnjs.cloudflare.com", "unpkg.com",
        "hotjar.com", "intercom.io", "crisp.chat", "tawk.to",
        "youtube.com", "vimeo.com",
        "disqus.com", "disquscdn.com",
        "pingdom.net", "newrelic.com",
      ];

      const scripts = document.querySelectorAll("script[src]");
      scripts.forEach((script) => {
        const src = script.getAttribute("src") || "";
        try {
          const url = new URL(src, window.location.origin);
          const domain = url.hostname;
          if (domain !== host && domain !== `www.${host}`) {
            const isKnown = knownThirdParty.some((tp) => domain.includes(tp));
            if (isKnown || !domain.endsWith(host)) {
              thirdPartyDomains.push(domain);
            }
          }
        } catch { /* relative URL — same origin */ }
      });

      const uniqueDomains = [...new Set(thirdPartyDomains)];
      return {
        count: uniqueDomains.length,
        names: uniqueDomains.slice(0, 10),
      };
    }, currentOrigin);
  }

  // ──────────────────────────────────────────────────────────
  // B7. UX Signals
  // ──────────────────────────────────────────────────────────

  async collectUXSignals(): Promise<{
    hasInterstitials: boolean;
    adCount: number;
    missingAria: number;
    hasFocus: boolean;
  }> {
    return await this.page.evaluate(() => {
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
          const coverageRatio = (rect.width * rect.height) / (window.innerWidth * window.innerHeight);
          if (coverageRatio > 0.5) {
            hasInterstitials = true;
            break;
          }
        }
      }

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
      if (!hasFocus) {
        const outlineNone = document.querySelector('*:not([tabindex="-1"])[style*="outline: none"], *:not([tabindex="-1"])[style*="outline:none"]');
        hasFocus = outlineNone === null;
      }

      return { hasInterstitials, adCount, missingAria, hasFocus };
    });
  }

  // ──────────────────────────────────────────────────────────
  // B8. URL Consistency
  // ──────────────────────────────────────────────────────────

  async checkUrlConsistency(
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

    let wwwOk = true;
    try {
      const hasWww = parsedUrl.hostname.startsWith("www.");
      const altHost = hasWww
        ? parsedUrl.hostname.replace("www.", "")
        : `www.${parsedUrl.hostname}`;
      const altUrl = `${parsedUrl.protocol}//${altHost}${parsedUrl.pathname}`;
      const status = await this.checkUrlStatus(altUrl);
      wwwOk = status === 301 || status === 302 || status === 308 || status === 0;
    } catch {
      wwwOk = true;
    }

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

    let trailingSlashOk = true;
    const path = parsedUrl.pathname;
    if (path !== "/" && path.length > 1) {
      try {
        const altPath = path.endsWith("/") ? path.slice(0, -1) : path + "/";
        const altUrl = `${origin}${altPath}`;
        const status = await this.checkUrlStatus(altUrl);
        trailingSlashOk = status !== 200;
      } catch {
        trailingSlashOk = true;
      }
    }

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
