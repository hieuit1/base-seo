import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { SeoPageTestData } from "../test-data/seoData";
import { injectVisualSEOReport } from "../utils/SeoReportHelper";

// ==================== INTERFACES ====================

export interface SeoScanResult {
  titleVal: string;
  metaVal: string | null;
  h1Texts: string[];
  allHeadings: { tag: string; text: string }[];
  headingHierarchy: { valid: boolean; issues: string[] };
  currentUrl: string;
  urlPath: string;
  wordCount: number;
  first100Words: string;
  keywordDensity: number;
  images: { src: string; alt: string | null; width: string | null; height: string | null }[];
  missingAltCount: number;
  imagesWithBadNames: number;
  imagesWithDimensions: number;
  internalLinks: { href: string; text: string }[];
  externalLinks: { href: string; text: string; rel: string | null }[];
  canonical: string | null;
  robots: string | null;
  hasSchema: boolean;
  ogTitle: string | null;
  ogDesc: string | null;
  ogImage: string | null;
  twitterTags: Record<string, string>;
  lang: string | null;
  charset: string | null;
  hasFavicon: boolean;
  hasViewport: boolean;
  isHttps: boolean;
  mixedContent: string[];
}

export class SeoPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // ==================== SCAN METHOD ====================
  /**
   * Quét toàn diện dữ liệu SEO từ DOM — gọi 1 lần duy nhất.
   * Dữ liệu trả về dùng cho injectVisualSEOReport() và verify*().
   */
  async scanSEOMetadata(keyword: string): Promise<SeoScanResult> {
    const currentUrl = this.getCurrentUrl();
    const urlPath = new URL(currentUrl).pathname;
    const isHttps = this.isHttps();
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
    ] = await Promise.all([
      this.getTitle(),
      this.getMetaDescription(),
      this.getH1Elements(),
      this.getAllHeadings(),
      this.getBodyText(),
      this.getImages(),
      this.getInternalLinks(),
      this.getExternalLinks(),
      this.getCanonicalUrl(),
      this.getRobotsContent(),
      this.hasSchemaMarkup(),
      this.getOpenGraphTags(),
      this.getTwitterCardTags(),
      this.getLangAttribute(),
      this.getCharset(),
      this.hasFavicon(),
      this.hasViewportMeta(),
      this.getMixedContent(),
    ]);

    // Local Node.js computations to avoid browser roundtrips:
    // 1. Word count & first 100 words
    const words = bodyText.split(/\s+/).filter((w) => w.length > 0);
    const wordCount = words.length;
    const first100Words = words.slice(0, 100).join(" ");

    // 2. Keyword density
    let keywordDensity = 0;
    if (wordCount > 0) {
      const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(escapedKeyword, "gi");
      const matches = bodyText.match(regex);
      keywordDensity = ((matches ? matches.length : 0) / wordCount) * 100;
    }

    // 3. Heading hierarchy check
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

    // 4. Image calculations
    const missingAltCount = images.filter((img) => img.alt === null || img.alt.trim() === "").length;
    const hashPattern = /^[a-f0-9]{8,}\.(jpg|jpeg|png|gif|webp|svg|avif)$/i;
    const imagesWithBadNames = images.filter((img) => {
      const fileName = img.src.split("/").pop()?.split("?")[0] || "";
      return hashPattern.test(fileName);
    }).length;
    const imagesWithDimensions = images.filter((img) => img.width || img.height).length;

    return {
      titleVal, metaVal, h1Texts, allHeadings, headingHierarchy,
      currentUrl, urlPath, wordCount, first100Words, keywordDensity,
      images, missingAltCount, imagesWithBadNames, imagesWithDimensions,
      internalLinks, externalLinks,
      canonical, robots, hasSchema,
      ogTitle: ogTags["og:title"] || null,
      ogDesc: ogTags["og:description"] || null,
      ogImage: ogTags["og:image"] || null,
      twitterTags, lang, charset, hasFavicon, hasViewport,
      isHttps, mixedContent,
    };
  }

  // ==================== VISUAL REPORT ====================

  /**
   * Inject bảng báo cáo SEO trực quan lên DOM — hiển thị trong screenshot.
   * Bao gồm tất cả 11 nhóm PHẦN A.
   */
  async injectVisualSEOReport(pageName: string, data: SeoScanResult, config: SeoPageTestData) {
    await injectVisualSEOReport(this.page, pageName, data, config);
  }

  // ==================== VERIFY METHODS (expect.soft) ====================

  /** A1.1→A1.4: Xác thực thẻ Title */
  async verifyTitle(scan: SeoScanResult, data: SeoPageTestData) {
    const minLen = data.titleMinLength ?? 50;
    const maxLen = data.titleMaxLength ?? 60;
    const { titleVal } = scan;

    // A1.1
    expect.soft(titleVal, "1 — Title tag không tồn tại hoặc rỗng!").toBeTruthy();
    expect.soft(titleVal.length, "A1.1 — Title phải có nội dung").toBeGreaterThan(0);

    // A1.2
    expect.soft(titleVal.length, `2 — Title quá ngắn: ${titleVal.length} ký tự, cần ≥ ${minLen}`).toBeGreaterThanOrEqual(minLen);
    expect.soft(titleVal.length, `2 — Title quá dài: ${titleVal.length} ký tự, cần ≤ ${maxLen}`).toBeLessThanOrEqual(maxLen);

    // A1.3
    expect.soft(
      titleVal.toLowerCase(),
      `3 — Title không chứa keyword "${data.keyword}"`
    ).toContain(data.keyword.toLowerCase());

    // A1.4
    const keywordIndex = titleVal.toLowerCase().indexOf(data.keyword.toLowerCase());
    if (keywordIndex >= 0) {
      expect.soft(
        keywordIndex,
        `4 — Keyword ở vị trí ${keywordIndex}, nên nằm trong nửa đầu title (≤ ${Math.floor(titleVal.length / 2)})`
      ).toBeLessThanOrEqual(Math.floor(titleVal.length / 2));
    }
  }

  /** A2.1→A2.3: Xác thực Meta Description */
  async verifyMetaDescription(scan: SeoScanResult, data: SeoPageTestData) {
    const minLen = data.metaDescMinLength ?? 120;
    const maxLen = data.metaDescMaxLength ?? 160;
    const { metaVal } = scan;

    // A2.1
    expect.soft(metaVal, "1 — Thẻ <meta name=\"description\"> không tồn tại!").not.toBeNull();
    if (metaVal) {
      expect.soft(metaVal.length, "1 — Meta description rỗng").toBeGreaterThan(0);

      // A2.2
      expect.soft(metaVal.length, `2 — Meta description quá ngắn: ${metaVal.length} ký tự, cần ≥ ${minLen}`).toBeGreaterThanOrEqual(minLen);
      expect.soft(metaVal.length, `2 — Meta description quá dài: ${metaVal.length} ký tự, cần ≤ ${maxLen}`).toBeLessThanOrEqual(maxLen);

      // A2.3
      expect.soft(
        metaVal.toLowerCase(),
        `3 — Meta description không chứa keyword "${data.keyword}"`
      ).toContain(data.keyword.toLowerCase());
    }
  }

  /** A3.1→A3.4: Xác thực cấu trúc Heading */
  async verifyHeadingStructure(scan: SeoScanResult, data: SeoPageTestData) {
    const { h1Texts, allHeadings, headingHierarchy } = scan;

    // A3.1
    expect.soft(
      h1Texts.length,
      `1 — Trang có ${h1Texts.length} thẻ H1, bắt buộc đúng 1 thẻ duy nhất!`
    ).toBe(1);

    // A3.2
    if (h1Texts.length > 0) {
      expect.soft(h1Texts[0].trim().length, "2 — Thẻ H1 tồn tại nhưng nội dung rỗng!").toBeGreaterThan(0);
      expect.soft(
        h1Texts[0].toLowerCase(),
        `2 — H1 "${h1Texts[0]}" không chứa keyword "${data.keyword}"`
      ).toContain(data.keyword.toLowerCase());
    }

    // A3.3
    expect.soft(
      headingHierarchy.valid,
      `3 — Heading phân cấp sai: ${headingHierarchy.issues.join("; ")}`
    ).toBe(true);

    // A3.4
    const hasH2orH3 = allHeadings.some((h) => h.tag === "h2" || h.tag === "h3");
    expect.soft(hasH2orH3, "4 — Trang nên có ít nhất 1 thẻ H2 hoặc H3").toBe(true);
  }

  /** A4.1→A4.4: Xác thực cấu trúc URL */
  async verifyUrlStructure(scan: SeoScanResult, data: SeoPageTestData) {
    const maxLen = data.urlMaxLength ?? 75;
    const { urlPath } = scan;

    // A4.1
    expect.soft(urlPath.length, `1 — URL path quá dài: ${urlPath.length} ký tự (${urlPath})`).toBeLessThanOrEqual(maxLen);

    // A4.2 — bỏ qua cho trang chủ
    if (urlPath !== "/" && urlPath !== "") {
      const keywordSlug = data.keyword.toLowerCase().replace(/\s+/g, "-");
      expect.soft(
        urlPath.toLowerCase(),
        `2 — URL "${urlPath}" không chứa keyword "${keywordSlug}"`
      ).toContain(keywordSlug);
    }

    // A4.3
    expect.soft(urlPath, `3 — URL chứa dấu gạch dưới: ${urlPath}`).not.toContain("_");

    // A4.4
    expect.soft(urlPath, `4 — URL chứa chữ hoa: ${urlPath}`).toBe(urlPath.toLowerCase());
  }

  /** A5.1→A5.3: Xác thực nội dung */
  async verifyContent(scan: SeoScanResult, data: SeoPageTestData) {
    const minWords = data.minWordCount ?? 300;
    const densityMin = data.keywordDensityMin ?? 0.5;
    const densityMax = data.keywordDensityMax ?? 2.5;

    // A5.1
    expect.soft(
      scan.wordCount,
      `1 — Trang chỉ có ${scan.wordCount} từ, cần ≥ ${minWords}`
    ).toBeGreaterThanOrEqual(minWords);

    // A5.2
    expect.soft(
      scan.keywordDensity,
      `2 — Mật độ keyword quá thấp: ${scan.keywordDensity.toFixed(2)}%`
    ).toBeGreaterThanOrEqual(densityMin);
    expect.soft(
      scan.keywordDensity,
      `2 — Mật độ keyword quá cao (stuffing): ${scan.keywordDensity.toFixed(2)}%`
    ).toBeLessThanOrEqual(densityMax);

    // A5.3
    expect.soft(
      scan.first100Words.toLowerCase(),
      `3 — Keyword "${data.keyword}" không xuất hiện trong 100 từ đầu`
    ).toContain(data.keyword.toLowerCase());
  }

  /** A6.1→A6.4: Xác thực hình ảnh */
  async verifyImages(scan: SeoScanResult, data: SeoPageTestData) {
    const { images, missingAltCount, imagesWithBadNames, imagesWithDimensions } = scan;

    // A6.1
    expect.soft(
      missingAltCount,
      `1 — Đang có ${missingAltCount} hình ảnh thiếu thuộc tính 'alt'.`
    ).toBe(0);

    // A6.2
    if (images.length > 0) {
      const hasKeywordAlt = images.some(
        (img) => img.alt && img.alt.toLowerCase().includes(data.keyword.toLowerCase())
      );
      expect.soft(hasKeywordAlt, `2 — Không có ảnh nào có alt chứa keyword "${data.keyword}"`).toBe(true);
    }

    // A6.3
    if (images.length > 0) {
      const threshold = Math.ceil(images.length * 0.8);
      expect.soft(
        imagesWithDimensions,
        `3 — Chỉ ${imagesWithDimensions}/${images.length} ảnh có width/height`
      ).toBeGreaterThanOrEqual(threshold);
    }

    // A6.4
    expect.soft(
      imagesWithBadNames,
      `4 — ${imagesWithBadNames} ảnh có tên file vô nghĩa (hash)`
    ).toBe(0);
  }

  /** A7.1→A7.4: Xác thực liên kết */
  async verifyLinks(scan: SeoScanResult) {
    const { internalLinks, externalLinks } = scan;

    // A7.1
    expect.soft(internalLinks.length, "1 — Trang nên có ít nhất 1 internal link").toBeGreaterThan(0);

    // A7.2 — Chỉ log, không enforce
    if (externalLinks.length === 0) {
      console.log("ℹ️ 2 — Trang không có external links — không bắt buộc nhưng nên có.");
    }

    // A7.3
    const genericAnchors = ["click here", "here", "read more", "xem thêm", "nhấn vào đây", "tại đây"];
    const badAnchors = internalLinks.filter((link) => {
      const text = link.text.trim().toLowerCase();
      return text === "" || genericAnchors.includes(text);
    });
    expect.soft(
      badAnchors.length,
      `3 — ${badAnchors.length} link có anchor text không tốt: ${badAnchors.map((l) => `"${l.text}" → ${l.href}`).join(", ")}`
    ).toBe(0);

    // A7.4 — Kiểm tra tối đa 10 broken internal links
    const origin = new URL(scan.currentUrl).origin;
    const brokenLinks: string[] = [];
    const linksToCheck = internalLinks
      .filter((l) => l.href && !l.href.startsWith("#") && !l.href.startsWith("javascript:") && !l.href.startsWith("mailto:") && !l.href.startsWith("tel:"))
      .slice(0, 10);

    for (const link of linksToCheck) {
      const fullUrl = link.href.startsWith("http") ? link.href : `${origin}${link.href}`;
      const status = await this.checkUrlStatus(fullUrl);
      if (status >= 400 || status === 0) {
        brokenLinks.push(`${link.href} (status: ${status})`);
      }
    }
    expect.soft(brokenLinks.length, `4 — Broken links: ${brokenLinks.join(", ")}`).toBe(0);
  }

  /** A8.1→A8.9: Xác thực Technical SEO */
  async verifyTechnicalSeo(scan: SeoScanResult, data: SeoPageTestData) {
    // A8.1
    expect.soft(scan.canonical, "1 — Thiếu thẻ <link rel=\"canonical\">. Nguy cơ trùng lặp!").not.toBeNull();
    if (scan.canonical !== null) {
      expect.soft(scan.canonical, "1 — URL Canonical không hợp lệ!").toMatch(/^https?:\/\//);
    }

    // A8.2
    const expectIndexable = data.expectIndexable ?? true;
    const isNoindex = !!scan.robots?.toLowerCase().includes("noindex");
    if (expectIndexable) {
      expect.soft(isNoindex, "2 — Trang mong muốn INDEX nhưng đang bị gắn 'noindex'!").toBe(false);
    } else {
      expect.soft(isNoindex, "2 — Trang bảo mật/nội bộ nên có 'noindex' nhưng chưa gắn!").toBe(true);
    }

    // A8.3
    const origin = new URL(scan.currentUrl).origin;
    const robotsTxtStatus = await this.checkUrlStatus(`${origin}/robots.txt`);
    expect.soft(robotsTxtStatus, `3 — robots.txt trả về status ${robotsTxtStatus}`).toBe(200);

    // A8.4
    const sitemapStatus = await this.checkUrlStatus(`${origin}/sitemap.xml`);
    expect.soft(sitemapStatus, `4 — sitemap.xml trả về status ${sitemapStatus}`).toBe(200);

    // A8.5
    expect.soft(scan.hasSchema, "5 — Thiếu Schema Markup (JSON-LD / Microdata / RDFa)").toBe(true);

    // A8.6 — Open Graph (tuỳ cấu hình checkSocialOg)
    if (data.checkSocialOg !== false) {
      expect.soft(scan.ogTitle, "6 — Thiếu og:title").not.toBeNull();
      expect.soft(scan.ogDesc, "6 — Thiếu og:description").not.toBeNull();
    }

    // A8.7 — Twitter Card (tuỳ cấu hình checkSocialOg)
    if (data.checkSocialOg !== false) {
      expect.soft(
        Object.keys(scan.twitterTags).length,
        "7 — Trang thiếu Twitter Card tags"
      ).toBeGreaterThan(0);
    }

    // A8.8
    expect.soft(scan.lang, "8 — Thẻ <html> thiếu thuộc tính lang").not.toBeNull();
    if (scan.lang) {
      expect.soft(scan.lang.length, "8 — Thuộc tính lang rỗng").toBeGreaterThan(0);
    }

    // A8.9
    expect.soft(scan.charset, "9 — Trang thiếu khai báo charset").not.toBeNull();
    if (scan.charset) {
      expect.soft(scan.charset.toLowerCase(), `9 — Charset nên là UTF-8, hiện tại: ${scan.charset}`).toBe("utf-8");
    }
    expect.soft(scan.hasFavicon, "9 — Trang thiếu favicon").toBe(true);
  }

  /** A9.1: Xác thực Mobile */
  async verifyMobile(scan: SeoScanResult) {
    expect.soft(scan.hasViewport, "1 — Trang thiếu thẻ <meta name='viewport'>").toBe(true);
  }

  /** A11.1→A11.2: Xác thực Bảo mật */
  async verifySecurity(scan: SeoScanResult) {
    // A11.1
    expect.soft(scan.isHttps, `1 — Trang đang dùng HTTP: ${scan.currentUrl}`).toBe(true);

    // A11.2
    expect.soft(
      scan.mixedContent.length,
      `2 — Phát hiện ${scan.mixedContent.length} tài nguyên HTTP trên HTTPS: ${scan.mixedContent.join(", ")}`
    ).toBe(0);
  }

  // ==================== GETTER METHODS (giữ nguyên) ====================

  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  async getMetaDescription(): Promise<string | null> {
    return await this.getMetaContent("description");
  }

  async getH1Elements(): Promise<string[]> {
    return await this.getAllElementsText("h1");
  }

  async getAllHeadings(): Promise<{ tag: string; text: string }[]> {
    return await this.page.evaluate(() => {
      const headings: { tag: string; text: string }[] = [];
      document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((el) => {
        headings.push({ tag: el.tagName.toLowerCase(), text: (el.textContent || "").trim() });
      });
      return headings;
    });
  }

  async checkHeadingHierarchy(): Promise<{ valid: boolean; issues: string[] }> {
    const headings = await this.getAllHeadings();
    const issues: string[] = [];
    let lastLevel = 0;
    for (const heading of headings) {
      const level = parseInt(heading.tag.replace("h", ""));
      if (lastLevel > 0 && level > lastLevel + 1) {
        issues.push(`Nhảy cấp từ H${lastLevel} → H${level} ("${heading.text}")`);
      }
      lastLevel = level;
    }
    return { valid: issues.length === 0, issues };
  }

  async getBodyText(): Promise<string> {
    return await this.page.evaluate(() => {
      const clone = document.body.cloneNode(true) as HTMLElement;
      clone.querySelectorAll("script, style, noscript, iframe").forEach((el) => el.remove());
      return (clone.textContent || "").replace(/\s+/g, " ").trim();
    });
  }

  async getWordCount(): Promise<number> {
    const text = await this.getBodyText();
    return text.split(/\s+/).filter((w) => w.length > 0).length;
  }

  async getFirst100Words(): Promise<string> {
    const text = await this.getBodyText();
    return text.split(/\s+/).slice(0, 100).join(" ");
  }

  async calculateKeywordDensity(keyword: string): Promise<number> {
    const text = await this.getBodyText();
    const words = text.split(/\s+/).filter((w) => w.length > 0);
    const totalWords = words.length;
    if (totalWords === 0) return 0;
    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escapedKeyword, "gi");
    const matches = text.match(regex);
    return ((matches ? matches.length : 0) / totalWords) * 100;
  }

  async getImages(): Promise<{ src: string; alt: string | null; width: string | null; height: string | null }[]> {
    return await this.page.evaluate(() => {
      return Array.from(document.querySelectorAll("img")).map((img) => ({
        src: img.getAttribute("src") || "",
        alt: img.getAttribute("alt"),
        width: img.getAttribute("width") || img.style.width || null,
        height: img.getAttribute("height") || img.style.height || null,
      }));
    });
  }

  async getInternalLinks(): Promise<{ href: string; text: string }[]> {
    const currentHost = new URL(this.getCurrentUrl()).hostname;
    return await this.page.evaluate((host) => {
      return Array.from(document.querySelectorAll("a[href]"))
        .filter((a) => {
          const href = a.getAttribute("href") || "";
          try {
            const url = new URL(href, window.location.origin);
            return url.hostname === host || href.startsWith("/") || href.startsWith("#");
          } catch { return href.startsWith("/") || href.startsWith("#"); }
        })
        .map((a) => ({ href: a.getAttribute("href") || "", text: (a.textContent || "").trim() }));
    }, currentHost);
  }

  async getExternalLinks(): Promise<{ href: string; text: string; rel: string | null }[]> {
    const currentHost = new URL(this.getCurrentUrl()).hostname;
    return await this.page.evaluate((host) => {
      return Array.from(document.querySelectorAll("a[href]"))
        .filter((a) => {
          const href = a.getAttribute("href") || "";
          try {
            const url = new URL(href, window.location.origin);
            return url.hostname !== host && !href.startsWith("/") && !href.startsWith("#");
          } catch { return false; }
        })
        .map((a) => ({ href: a.getAttribute("href") || "", text: (a.textContent || "").trim(), rel: a.getAttribute("rel") }));
    }, currentHost);
  }

  async getCanonicalUrl(): Promise<string | null> {
    return await this.page.evaluate(() => {
      const link = document.querySelector('link[rel="canonical"]');
      return link ? link.getAttribute("href") : null;
    });
  }

  async getRobotsContent(): Promise<string | null> {
    return await this.getMetaContent("robots");
  }

  async hasSchemaMarkup(): Promise<boolean> {
    return await this.page.evaluate(() => {
      if (document.querySelectorAll('script[type="application/ld+json"]').length > 0) return true;
      if (document.querySelectorAll("[itemscope]").length > 0) return true;
      return document.querySelectorAll("[vocab]").length > 0;
    });
  }

  async getOpenGraphTags(): Promise<Record<string, string>> {
    return await this.page.evaluate(() => {
      const tags: Record<string, string> = {};
      document.querySelectorAll('meta[property^="og:"]').forEach((meta) => {
        const p = meta.getAttribute("property"), c = meta.getAttribute("content");
        if (p && c) tags[p] = c;
      });
      return tags;
    });
  }

  async getTwitterCardTags(): Promise<Record<string, string>> {
    return await this.page.evaluate(() => {
      const tags: Record<string, string> = {};
      document.querySelectorAll('meta[name^="twitter:"]').forEach((meta) => {
        const n = meta.getAttribute("name"), c = meta.getAttribute("content");
        if (n && c) tags[n] = c;
      });
      return tags;
    });
  }

  async getLangAttribute(): Promise<string | null> {
    return await this.page.evaluate(() => document.documentElement.getAttribute("lang"));
  }

  async getCharset(): Promise<string | null> {
    return await this.page.evaluate(() => {
      const meta = document.querySelector("meta[charset]");
      if (meta) return meta.getAttribute("charset");
      const httpEquiv = document.querySelector('meta[http-equiv="Content-Type"]');
      if (httpEquiv) {
        const match = (httpEquiv.getAttribute("content") || "").match(/charset=([^\s;]+)/i);
        return match ? match[1] : null;
      }
      return null;
    });
  }

  async hasFavicon(): Promise<boolean> {
    return await this.page.evaluate(() => {
      return document.querySelector('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]') !== null;
    });
  }

  async hasViewportMeta(): Promise<boolean> {
    const content = await this.getMetaContent("viewport");
    return content !== null && content.length > 0;
  }

  isHttps(): boolean {
    return this.getCurrentUrl().startsWith("https://");
  }

  async getMixedContent(): Promise<string[]> {
    if (!this.isHttps()) return [];
    return await this.page.evaluate(() => {
      const mixed: string[] = [];
      document.querySelectorAll("img[src], script[src], link[href], iframe[src], video[src], audio[src], source[src]").forEach((el) => {
        const url = el.getAttribute("src") || el.getAttribute("href") || "";
        if (url.startsWith("http://")) mixed.push(url);
      });
      return mixed;
    });
  }
}
