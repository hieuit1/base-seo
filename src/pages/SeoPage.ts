import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { SeoPageTestData } from "../test-data/seoData";
import { injectVisualSEOReport } from "../utils/SeoReportHelper";
import { SeoScorecard } from "../utils/reportHelper";
import { DEFAULT_SEO_CONFIG } from "../constants/seoDefaults";
import { toSlug } from "../utils/stringHelper";
import { CheerioService, StaticSeoData } from "../services/CheerioService";

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
  staticData?: StaticSeoData;
  images: {
    src: string; 
    alt: string | null; 
    width: string | null; 
    height: string | null;
    extension: string;
    isModernFormat: boolean;
    sizeBytes: number | null;
  }[];
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
  bodyText: string;
  hreflangs: { rel: string; href: string; lang: string }[];
  pageHeaders: Record<string, string>;
  cssFiles: string[];
  minFontSize: number;
  badTouchTargets: number;
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
    const currentUrl = this.page.url();
    const urlObj = new URL(currentUrl);
    const urlPath = urlObj.pathname + urlObj.search;
    const isHttps = this.isHttps();

    // --- 0. Static HTML Parse via Cheerio ---
    let staticData: StaticSeoData | undefined;
    let pageHeaders: Record<string, string> = {};
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
      this.getHreflangs(),
      this.getCssFiles(),
      this.getMobileMetrics(),
    ]);

    // Local Node.js computations to avoid browser roundtrips:
    // 1. Word count & first 100 words
    const words = bodyText.split(/\s+/).filter((w) => w.length > 0);
    const wordCount = words.length;
    const first100Words = words.slice(0, 100).join(" ");

    // 2. Keyword density
    let keywordDensity = 0;
    if (wordCount > 0 && keyword.trim().length > 0) {
      const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(escapedKeyword, "gi");
      const matches = bodyText.match(regex);
      const keywordWordCount = keyword.split(/\s+/).filter(w => w.length > 0).length;
      keywordDensity = ((matches ? (matches.length * keywordWordCount) : 0) / wordCount) * 100;
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

    // 5. Fetch image sizes (limit to first 20 images to avoid timeouts)
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

  // ==================== VISUAL REPORT ====================

  /**
   * Inject bảng báo cáo SEO trực quan lên DOM — hiển thị trong screenshot.
   * Bao gồm tất cả 11 nhóm PHẦN A.
   */
  async injectVisualSEOReport(pageName: string, data: SeoScanResult, config: SeoPageTestData) {
    await injectVisualSEOReport(this.page, pageName, data, config);
  }

  // ==================== VERIFY METHODS ====================

  /** 1.1→1.4: Xác thực thẻ Title */
  async verifyTitle(scan: SeoScanResult, data: SeoPageTestData, sc: SeoScorecard) {
    const minLen = data.titleMinLength ?? DEFAULT_SEO_CONFIG.titleMinLength;
    const maxLen = data.titleMaxLength ?? DEFAULT_SEO_CONFIG.titleMaxLength;
    const { titleVal } = scan;

    // 1.1 — Title phải tồn tại và có nội dung
    await sc.check(
      `Title phải có nội dung (hiện tại: ${titleVal.length} ký tự)`,
      !!titleVal && titleVal.length > 0,
      "Title tag không tồn tại hoặc rỗng!"
    );

    // 1.2 — Độ dài Title nằm trong khoảng cho phép
    await sc.check(
      `Độ dài Title: ${titleVal.length} ký tự (chuẩn: ${minLen}–${maxLen})`,
      titleVal.length >= minLen && titleVal.length <= maxLen,
      `Title ${titleVal.length < minLen ? "quá ngắn" : "quá dài"}: ${titleVal.length} ký tự, cần ${minLen}–${maxLen}`
    );

    // 1.3 — Title phải chứa keyword chính
    await sc.check(
      `Title chứa keyword "${data.keyword}"`,
      titleVal.toLowerCase().includes(data.keyword.toLowerCase()),
      `Title không chứa keyword "${data.keyword}"`
    );

    // 1.4 — Đối chiếu Raw vs Rendered HTML (Nếu có)
    if (scan.staticData && scan.staticData.title) {
      await sc.check(
        `Đồng bộ Title tĩnh và động (CSR vs SSR/SSG)`,
        scan.staticData.title === titleVal,
        `Title HTML gốc là "${scan.staticData.title}" nhưng Render ra là "${titleVal}" (Nguy cơ SEO nếu Bot không chạy JS)`
      );
    }

    // 1.5 — Keyword nên nằm ở nửa đầu Title
    const keywordIndex = titleVal.toLowerCase().indexOf(data.keyword.toLowerCase());
    const halfLen = Math.floor(titleVal.length / 2);
    await sc.check(
      `Keyword nằm ở nửa đầu Title (vị trí: ${keywordIndex >= 0 ? keywordIndex : "N/A"})`,
      keywordIndex >= 0 && keywordIndex <= halfLen,
      keywordIndex < 0
        ? `Bỏ qua — keyword "${data.keyword}" không có trong Title`
        : `Keyword ở vị trí ${keywordIndex}, nên ≤ ${halfLen}`
    );
  }

  /** Xác thực Meta Description */
  async verifyMetaDescription(scan: SeoScanResult, data: SeoPageTestData, sc: SeoScorecard) {
    const minLen = data.metaDescMinLength ?? DEFAULT_SEO_CONFIG.metaDescMinLength;
    const maxLen = data.metaDescMaxLength ?? DEFAULT_SEO_CONFIG.metaDescMaxLength;
    const { metaVal } = scan;

    // 2.1 — Meta description phải tồn tại
    await sc.check(
      `Meta description tồn tại (${metaVal ? metaVal.length + " ký tự" : "Không tìm thấy"})`,
      metaVal !== null && metaVal.length > 0,
      "Thẻ <meta name=\"description\"> không tồn tại hoặc rỗng!"
    );

    // 2.2 — Độ dài Meta description hợp lệ
    await sc.check(
      `Độ dài Meta: ${metaVal?.length ?? 0} ký tự (chuẩn: ${minLen}–${maxLen})`,
      !!metaVal && metaVal.length >= minLen && metaVal.length <= maxLen,
      metaVal
        ? `Meta description ${metaVal.length < minLen ? "quá ngắn" : "quá dài"}: ${metaVal.length} ký tự, cần ${minLen}–${maxLen}`
        : "Không thể đo — Meta description không tồn tại"
    );

    // 2.3 — Meta description chứa keyword
    await sc.check(
      `Meta description chứa keyword "${data.keyword}"`,
      !!metaVal && metaVal.toLowerCase().includes(data.keyword.toLowerCase()),
      metaVal
        ? `Meta description không chứa keyword "${data.keyword}"`
        : "Không thể kiểm tra — Meta description không tồn tại"
    );

    // 2.4 — Đối chiếu Raw vs Rendered HTML (Cheerio vs Playwright)
    if (scan.staticData && scan.staticData.metaDesc) {
      await sc.check(
        `Đồng bộ Meta tĩnh và động (CSR vs SSR/SSG)`,
        scan.staticData.metaDesc === metaVal,
        `Meta HTML gốc là "${scan.staticData.metaDesc}" nhưng Render ra là "${metaVal}"`
      );
    }
  }

  /** Xác thực cấu trúc Heading */
  async verifyHeadingStructure(scan: SeoScanResult, data: SeoPageTestData, sc: SeoScorecard) {
    const { h1Texts, allHeadings, headingHierarchy } = scan;

    // Phải có đúng 1 thẻ H1
    await sc.check(
      `Trang có đúng 1 thẻ H1 (hiện tại: ${h1Texts.length} thẻ)`,
      h1Texts.length === 1,
      h1Texts.length === 0
        ? "Trang không có thẻ H1 nào!"
        : `Trang có ${h1Texts.length} thẻ H1, bắt buộc đúng 1 thẻ duy nhất!`
    );

    // 3.2 — H1 phải chứa keyword
    const h1Text = h1Texts.length > 0 ? h1Texts[0] : "";
    await sc.check(
      `H1 chứa keyword "${data.keyword}"`,
      h1Texts.length > 0
      && h1Text.trim().length > 0
      && h1Text.toLowerCase().includes(data.keyword.toLowerCase()),
      h1Texts.length === 0
        ? "Không có H1 để kiểm tra"
        : h1Text.trim().length === 0
          ? "Thẻ H1 tồn tại nhưng nội dung rỗng!"
          : `H1 "${h1Text}" không chứa keyword "${data.keyword}"`
    );

    // 3.3 — Heading phân cấp đúng (không nhảy cấp)
    await sc.check(
      `Heading phân cấp hợp lệ (${headingHierarchy.issues.length} lỗi)`,
      headingHierarchy.valid,
      `Heading phân cấp sai: ${headingHierarchy.issues.join("; ")}`
    );

    // 3.4 — Trang có ít nhất H2 hoặc H3
    const hasH2orH3 = allHeadings.some((h) => h.tag === "h2" || h.tag === "h3");
    await sc.check(
      `Trang có thẻ H2/H3 hỗ trợ (${allHeadings.filter((h) => h.tag === "h2" || h.tag === "h3").length} thẻ)`,
      hasH2orH3,
      "Trang nên có ít nhất 1 thẻ H2 hoặc H3"
    );
  }

  /** Xác thực cấu trúc URL */
  async verifyUrlStructure(scan: SeoScanResult, data: SeoPageTestData, sc: SeoScorecard) {
    const maxLen = data.urlMaxLength ?? DEFAULT_SEO_CONFIG.urlMaxLength;
    const { urlPath } = scan;

    // URL path không quá dài
    await sc.check(
      `Độ dài URL: ${urlPath.length} ký tự (tối đa: ${maxLen})`,
      urlPath.length <= maxLen,
      `URL path quá dài: ${urlPath.length} ký tự (${urlPath}), tối đa ${maxLen}`
    );

    // 4.2 — URL chứa keyword slug (bỏ qua trang chủ)
    const isHomepage = urlPath === "/" || urlPath === "";
    const keywordSlug = toSlug(data.keyword);
    await sc.check(
      `URL chứa keyword slug "${keywordSlug}" ${isHomepage ? "(bỏ qua — trang chủ)" : ""}`,
      isHomepage || urlPath.toLowerCase().includes(keywordSlug),
      `URL "${urlPath}" không chứa keyword "${keywordSlug}"`
    );

    // 4.3 — URL không chứa dấu gạch dưới
    await sc.check(
      `4.3 — URL không chứa dấu gạch dưới`,
      !urlPath.includes("_"),
      `URL chứa dấu gạch dưới: ${urlPath}`
    );

    // 4.4 — URL toàn chữ thường
    await sc.check(
      `4.4 — URL toàn chữ thường`,
      urlPath === urlPath.toLowerCase(),
      `URL chứa chữ hoa: ${urlPath}`
    );
  }

  /** Xác thực nội dung */
  async verifyContent(scan: SeoScanResult, data: SeoPageTestData, sc: SeoScorecard) {
    const minWords = data.minWordCount ?? DEFAULT_SEO_CONFIG.minWordCount;
    const densityMin = data.keywordDensityMin ?? DEFAULT_SEO_CONFIG.keywordDensityMin;
    const densityMax = data.keywordDensityMax ?? DEFAULT_SEO_CONFIG.keywordDensityMax;

    // Số lượng từ tối thiểu
    await sc.check(
      `Số lượng từ: ${scan.wordCount} (tối thiểu: ${minWords})`,
      scan.wordCount >= minWords,
      `Trang chỉ có ${scan.wordCount} từ, cần ≥ ${minWords}`
    );

    // Mật độ keyword hợp lý
    await sc.check(
      `Mật độ keyword: ${scan.keywordDensity.toFixed(2)}% (chuẩn: ${densityMin}%–${densityMax}%)`,
      scan.keywordDensity >= densityMin && scan.keywordDensity <= densityMax,
      scan.keywordDensity < densityMin
        ? `Mật độ keyword quá thấp: ${scan.keywordDensity.toFixed(2)}%, cần ≥ ${densityMin}%`
        : `Mật độ keyword quá cao (stuffing): ${scan.keywordDensity.toFixed(2)}%, cần ≤ ${densityMax}%`
    );

    // Keyword xuất hiện trong 100 từ đầu
    await sc.check(
      `Keyword "${data.keyword}" xuất hiện trong 100 từ đầu`,
      scan.first100Words.toLowerCase().includes(data.keyword.toLowerCase()),
      `Keyword "${data.keyword}" không xuất hiện trong 100 từ đầu`
    );

    // Có từ khóa liên quan / LSI
    const lsiKeywords = data.lsiKeywords || [];
    if (lsiKeywords.length > 0) {
      const foundLsi = lsiKeywords.filter(lsi => scan.bodyText.toLowerCase().includes(lsi.toLowerCase()));
      await sc.check(
        `Có từ khóa liên quan / LSI (tìm thấy ${foundLsi.length}/${lsiKeywords.length})`,
        foundLsi.length > 0,
        `Nội dung không chứa từ khóa LSI nào trong danh sách: ${lsiKeywords.join(", ")}`
      );
    } else {
      await sc.check(
        `Có từ khóa liên quan / LSI`,
        true,
        `Bỏ qua - không có cấu hình LSI Keywords`
      );
    }

    // Điểm dễ đọc (readability – Flesch)
    const sentences = scan.bodyText.split(/[.?!]+/).filter(s => s.trim().length > 0).length || 1;
    const syllables = scan.bodyText.match(/[aeiouyàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹ]+/gi)?.length || scan.wordCount;
    const readabilityScore = 206.835 - 1.015 * (scan.wordCount / sentences) - 84.6 * (syllables / scan.wordCount);
    const minReadability = data.minReadabilityScore ?? 50;

    await sc.check(
      `Điểm dễ đọc (Flesch): ${readabilityScore.toFixed(1)} (khuyến nghị ≥ ${minReadability})`,
      readabilityScore >= minReadability,
      `Nội dung khó đọc, điểm Flesch ${readabilityScore.toFixed(1)} < ${minReadability}`
    );

    // Nội dung không trùng lặp (duplicate content)
    const isNoindex = scan.robots?.toLowerCase().includes("noindex");
    const hasExplicitCanonical = scan.canonical && scan.canonical !== scan.currentUrl;
    const expectIndexable = data.expectIndexable ?? true;
    
    // Nếu trang được mong muốn index, nó không nên có dấu hiệu duplicate (noindex hoặc trỏ canonical đi nơi khác)
    const duplicateRisk = (isNoindex || hasExplicitCanonical);
    
    await sc.check(
      `Nội dung không bị đánh dấu Duplicate/Mirror (noindex hoặc trỏ canonical ra ngoài)`,
      !duplicateRisk || expectIndexable === false,
      `Trang có nguy cơ là duplicate content vì ${isNoindex ? "bị gắn thẻ noindex" : "có thẻ canonical trỏ sang trang khác"}`
    );
  }

  /** Xác thực hình ảnh */
  async verifyImages(scan: SeoScanResult, data: SeoPageTestData, sc: SeoScorecard) {
    const { images, missingAltCount, imagesWithBadNames, imagesWithDimensions } = scan;

    // Tất cả ảnh phải có thuộc tính alt
    await sc.check(
      `100% ảnh có thuộc tính alt (thiếu: ${missingAltCount}/${images.length})`,
      missingAltCount === 0,
      `Có ${missingAltCount} hình ảnh thiếu thuộc tính 'alt'`
    );

    // Ít nhất 1 ảnh có alt chứa keyword
    const hasKeywordAlt = images.some(
      (img) => img.alt && img.alt.toLowerCase().includes(data.keyword.toLowerCase())
    );
    await sc.check(
      `Có ảnh chứa keyword "${data.keyword}" trong alt`,
      images.length === 0 || hasKeywordAlt,
      `Không có ảnh nào có alt chứa keyword "${data.keyword}"`
    );

    // Ảnh có khai báo width/height (≥ 80%)
    const dimThreshold = images.length > 0 ? Math.ceil(images.length * 0.8) : 0;
    await sc.check(
      `Ảnh có width/height: ${imagesWithDimensions}/${images.length} (cần ≥ 80%)`,
      images.length === 0 || imagesWithDimensions >= dimThreshold,
      `Chỉ ${imagesWithDimensions}/${images.length} ảnh có width/height, cần ≥ ${dimThreshold}`
    );

    // Không có ảnh tên file vô nghĩa (hash)
    await sc.check(
      `Ảnh có tên file rõ nghĩa (hash: ${imagesWithBadNames})`,
      imagesWithBadNames === 0,
      `${imagesWithBadNames} ảnh có tên file vô nghĩa (dạng mã hash/ngẫu nhiên)`
    );

    // Kiểm tra định dạng ảnh (WebP/AVIF)
    const expectedModernRatio = data.modernImageRatio ?? 80;
    const modernImagesCount = images.filter(img => img.isModernFormat).length;
    const actualModernRatio = images.length > 0 ? (modernImagesCount / images.length) * 100 : 100;

    await sc.check(
      `Định dạng ảnh tối ưu (WebP/AVIF): ${actualModernRatio.toFixed(0)}% (cần ≥ ${expectedModernRatio}%)`,
      actualModernRatio >= expectedModernRatio,
      `Tỷ lệ ảnh WebP/AVIF quá thấp: ${modernImagesCount}/${images.length} ảnh (${actualModernRatio.toFixed(0)}%)`
    );

    // Kiểm tra dung lượng ảnh
    const maxKb = data.maxImageSizeKb ?? 250;
    const maxBytes = maxKb * 1024;
    const oversizedImages = images.filter(img => img.sizeBytes !== null && img.sizeBytes > maxBytes);
    const checkedImagesCount = images.filter(img => img.sizeBytes !== null).length;

    await sc.check(
      `Dung lượng ảnh tối ưu (≤ ${maxKb}KB)`,
      oversizedImages.length === 0,
      `${oversizedImages.length}/${checkedImagesCount} ảnh vượt quá ${maxKb}KB (Ví dụ: ${oversizedImages[0]?.src})`
    );
  }

  /** Xác thực liên kết */
  async verifyLinks(scan: SeoScanResult, sc: SeoScorecard) {
    const { internalLinks, externalLinks } = scan;

    // Có ít nhất 1 internal link
    await sc.check(
      `Internal links: ${internalLinks.length} link`,
      internalLinks.length > 0,
      "Trang nên có ít nhất 1 internal link"
    );

    // External links (khuyến nghị, không bắt buộc)
    await sc.check(
      `External links: ${externalLinks.length} link`,
      true, // Luôn PASS — chỉ là khuyến nghị
      "Trang không có external links — không bắt buộc nhưng nên có"
    );

    // Anchor text chất lượng
    const genericAnchors = ["click here", "here", "read more", "xem thêm", "nhấn vào đây", "tại đây"];
    const badAnchors = internalLinks.filter((link) => {
      const text = link.text.trim().toLowerCase();
      return text === "" || genericAnchors.includes(text);
    });
    await sc.check(
      `Anchor text chất lượng (lỗi: ${badAnchors.length})`,
      badAnchors.length === 0,
      `${badAnchors.length} link có anchor text không tốt: ${badAnchors.map((l) => `"${l.text}" → ${l.href}`).join(", ")}`
    );

    // Kiểm tra broken internal links & redirect chain (tối đa 10)
    const origin = new URL(scan.currentUrl).origin;
    const brokenLinks: string[] = [];
    const redirectChains: { from: string; to: string; count: number }[] = [];
    
    const linksToCheck = internalLinks
      .filter((l) => l.href && !l.href.startsWith("#") && !l.href.startsWith("javascript:") && !l.href.startsWith("mailto:") && !l.href.startsWith("tel:"))
      .slice(0, 10);

    await Promise.all(
      linksToCheck.map(async (link) => {
        const fullUrl = link.href.startsWith("http") ? link.href : `${origin}${link.href}`;
        
        let current = fullUrl;
        let count = 0;
        const visited = new Set<string>();
        
        while (count < 10) {
          if (visited.has(current)) break;
          visited.add(current);
          
          try {
            const resp = await this.page.request.head(current, { timeout: 3000 });
            if ([301, 302, 307, 308].includes(resp.status())) {
              const location = resp.headers()["location"];
              if (location) {
                current = new URL(location, current).href;
                count++;
              } else {
                break;
              }
            } else {
              if (count === 0 && (resp.status() >= 400 || resp.status() === 0)) {
                brokenLinks.push(`${link.href} (status: ${resp.status()})`);
              }
              break;
            }
          } catch (e) {
            if (count === 0) brokenLinks.push(`${link.href} (error)`);
            break;
          }
        }
        
        if (count > 1) {
          redirectChains.push({ from: fullUrl, to: current, count });
        }
      })
    );
    
    await sc.check(
      `Không có broken links (lỗi: ${brokenLinks.length}/${linksToCheck.length})`,
      brokenLinks.length === 0,
      `Broken links: ${brokenLinks.join(", ")}`
    );

    await sc.check(
      `Không có redirect chain (lỗi: ${redirectChains.length})`,
      redirectChains.length === 0,
      `Detected redirect chains: ${redirectChains.map(r => `${r.count} hops: ${r.from}`).join("; ")}`
    );
  }

  /** Xác thực Technical SEO */
  async verifyTechnicalSeo(scan: SeoScanResult, data: SeoPageTestData, sc: SeoScorecard) {
    // Canonical URL
    const isCanonicalOk = !!scan.canonical && /^https?:\/\//.test(scan.canonical);
    await sc.check(
      `Canonical URL hợp lệ (${scan.canonical || "Không có"})`,
      isCanonicalOk,
      scan.canonical === null
        ? "Thiếu thẻ <link rel=\"canonical\">. Nguy cơ trùng lặp!"
        : `URL Canonical không hợp lệ: "${scan.canonical}"`
    );

    // Robots/Indexability
    const expectIndexable = data.expectIndexable ?? true;
    const isNoindex = !!scan.robots?.toLowerCase().includes("noindex");
    const robotsOk = expectIndexable ? !isNoindex : isNoindex;
    await sc.check(
      `Robots: ${scan.robots || "Mặc định Index"} (mong muốn: ${expectIndexable ? "INDEX" : "NOINDEX"})`,
      robotsOk,
      expectIndexable
        ? "Trang mong muốn INDEX nhưng đang bị gắn 'noindex'!"
        : "Trang bảo mật/nội bộ nên có 'noindex' nhưng chưa gắn!"
    );

    // robots.txt & sitemap.xml (gửi song song để tối ưu tốc độ)
    const origin = new URL(scan.currentUrl).origin;
    const [robotsTxtStatus, sitemapStatus] = await Promise.all([
      this.checkUrlStatus(`${origin}/robots.txt`),
      this.checkUrlStatus(`${origin}/sitemap.xml`)
    ]);

    await sc.check(
      `robots.txt trả về status ${robotsTxtStatus}`,
      robotsTxtStatus === 200,
      `robots.txt trả về status ${robotsTxtStatus}, cần 200`
    );

    await sc.check(
      `sitemap.xml trả về status ${sitemapStatus}`,
      sitemapStatus === 200,
      `sitemap.xml trả về status ${sitemapStatus}, cần 200`
    );

    // Schema Markup
    await sc.check(
      `Schema Markup (JSON-LD/Microdata): ${scan.hasSchema ? "Đã cài" : "Thiếu"}`,
      scan.hasSchema,
      "Thiếu Schema Markup (JSON-LD / Microdata / RDFa)"
    );

    // Open Graph tags (tuỳ cấu hình)
    if (data.checkSocialOg !== false) {
      await sc.check(
        `Open Graph: og:title=${scan.ogTitle ? "✔" : "✘"}, og:description=${scan.ogDesc ? "✔" : "✘"}`,
        !!scan.ogTitle && !!scan.ogDesc,
        `Thiếu ${!scan.ogTitle ? "og:title" : ""}${!scan.ogTitle && !scan.ogDesc ? " và " : ""}${!scan.ogDesc ? "og:description" : ""}`
      );
    }

    // Twitter Card tags (tuỳ cấu hình)
    if (data.checkSocialOg !== false) {
      const twitterCount = Object.keys(scan.twitterTags).length;
      await sc.check(
        `Twitter Card tags: ${twitterCount} thẻ`,
        twitterCount > 0,
        "Trang thiếu Twitter Card tags"
      );
    }

    // Thuộc tính lang
    await sc.check(
      `HTML lang="${scan.lang || "Thiếu"}"`,
      !!scan.lang && scan.lang.length > 0,
      "Thẻ <html> thiếu thuộc tính lang"
    );

    // Hreflang Tags
    if (data.languages && data.languages.length > 1) {
      await sc.check(
        `Hreflang tags (${scan.hreflangs.length} tags cho ${data.languages.length} ngôn ngữ)`,
        scan.hreflangs.length >= data.languages.length,
        `Thiếu hreflang. Chỉ tìm thấy ${scan.hreflangs.length} tags, cần ít nhất ${data.languages.length}`
      );
    } else {
      await sc.check(`Hreflang tags (Bỏ qua vì đơn ngôn ngữ)`, true, "Bỏ qua");
    }

    // Charset + Favicon
    const charsetOk = !!scan.charset && scan.charset.toLowerCase() === "utf-8";
    await sc.check(
      `Charset: ${scan.charset || "Thiếu"} | Favicon: ${scan.hasFavicon ? "✔" : "✘"}`,
      charsetOk && scan.hasFavicon,
      [
        !scan.charset ? "Thiếu khai báo charset" : null,
        scan.charset && scan.charset.toLowerCase() !== "utf-8" ? `Charset nên là UTF-8, hiện tại: ${scan.charset}` : null,
        !scan.hasFavicon ? "Trang thiếu favicon" : null,
      ].filter(Boolean).join(". ")
    );
  }

  /** Xác thực Mobile */
  async verifyMobile(scan: SeoScanResult, sc: SeoScorecard) {
    await sc.check(
      `Viewport meta tag: ${scan.hasViewport ? "✔" : "✘"}`,
      scan.hasViewport,
      "Trang thiếu thẻ <meta name='viewport'>"
    );

    await sc.check(
      `Font size trên mobile (≥ 12px): ${scan.minFontSize}px`,
      scan.minFontSize >= 12,
      `Có text quá nhỏ (${scan.minFontSize}px), khó đọc trên thiết bị di động`
    );

    await sc.check(
      `Touch targets (nút/link) đủ lớn (≥ 48x48px): ${scan.badTouchTargets === 0 ? "✔" : "✘"}`,
      scan.badTouchTargets === 0,
      `Phát hiện ${scan.badTouchTargets} nút/link có kích thước quá nhỏ (nhỏ hơn 48x48px)`
    );
  }

  /** Xác thực Tối ưu hoá (Compression, Cache, Minify) */
  async verifyPageOptimization(scan: SeoScanResult, sc: SeoScorecard) {
    const headers = scan.pageHeaders || {};
    
    // Gzip / Brotli
    const encoding = (headers["content-encoding"] || headers["Content-Encoding"] || "none").toLowerCase();
    await sc.check(
      `Nén dữ liệu (Gzip/Brotli): ${encoding !== "none" ? encoding.toUpperCase() : "✘"}`,
      ["gzip", "br", "deflate"].includes(encoding),
      `Trang không được nén bằng Gzip hoặc Brotli (Content-Encoding: ${encoding})`
    );

    // Caching
    const cacheControl = (headers["cache-control"] || headers["Cache-Control"] || "No cache").toLowerCase();
    await sc.check(
      `Browser caching (Cache-Control): ${cacheControl !== "no cache" ? "✔" : "✘"}`,
      cacheControl.includes("max-age") && !cacheControl.includes("no-store"),
      `Cache header chưa tối ưu hoặc bị disable: ${cacheControl}`
    );

    // Minify CSS
    const nonMinifiedCss = scan.cssFiles.filter(href => !href.includes(".min.css") && !href.includes("?"));
    await sc.check(
      `CSS Minified: ${nonMinifiedCss.length === 0 ? "✔" : "✘"}`,
      nonMinifiedCss.length === 0,
      `Phát hiện ${nonMinifiedCss.length} file CSS chưa được minify (Ví dụ: ${nonMinifiedCss[0]})`
    );
  }

  /** Xác thực Core Web Vitals (Tốc độ tải trang) */
  async verifyPerformance(vitals: any, sc: SeoScorecard) {
    if (!vitals) {
      await sc.check(`Core Web Vitals & Tốc độ tải trang`, true, "Bỏ qua — Không có dữ liệu (API Key lỗi hoặc timeout)");
      return;
    }
    
    await sc.check(
      `LCP (Largest Contentful Paint): ${vitals.lcp ? vitals.lcp + "ms" : "N/A"} (< 2500ms)`,
      vitals.lcp !== null && vitals.lcp < 2500,
      `LCP quá cao: ${vitals.lcp}ms (chuẩn: < 2.5s)`
    );

    await sc.check(
      `INP (Interaction to Next Paint): ${vitals.inp ? vitals.inp + "ms" : "N/A"} (< 200ms)`,
      vitals.inp !== null && vitals.inp < 200,
      `INP quá cao: ${vitals.inp}ms (chuẩn: < 200ms)`
    );

    await sc.check(
      `CLS (Cumulative Layout Shift): ${vitals.cls ?? "N/A"} (< 0.1)`,
      vitals.cls !== null && vitals.cls < 0.1,
      `CLS quá cao: ${vitals.cls} (chuẩn: < 0.1)`
    );

    await sc.check(
      `Performance Score (Lighthouse): ${vitals.score ?? "N/A"}/100`,
      vitals.score !== null && vitals.score >= 80,
      `Điểm tốc độ tải trang quá thấp: ${vitals.score}/100 (cần ≥ 80)`
    );
  }

  /** Xác thực Bảo mật */
  async verifySecurity(scan: SeoScanResult, sc: SeoScorecard) {
    // HTTPS
    await sc.check(
      `HTTPS: ${scan.isHttps ? "Đã bật" : "Chưa bật"}`,
      scan.isHttps,
      `Trang đang dùng HTTP: ${scan.currentUrl}`
    );

    // Mixed Content
    await sc.check(
      `Mixed Content: ${scan.mixedContent.length} tài nguyên HTTP`,
      scan.mixedContent.length === 0,
      `Phát hiện ${scan.mixedContent.length} tài nguyên HTTP trên HTTPS: ${scan.mixedContent.slice(0, 5).join(", ")}`
    );
  }


  // ==================== GETTER METHODS ====================

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

  async getBodyText(): Promise<string> {
    return await this.page.evaluate(() => {
      const clone = document.body.cloneNode(true) as HTMLElement;
      clone.querySelectorAll("script, style, noscript, iframe").forEach((el) => el.remove());
      return (clone.textContent || "").replace(/\s+/g, " ").trim();
    });
  }

  async getImages(): Promise<{ src: string; alt: string | null; width: string | null; height: string | null; extension: string; isModernFormat: boolean; sizeBytes: number | null }[]> {
    return await this.page.evaluate(() => {
      return Array.from(document.querySelectorAll("img")).map((img) => {
        const src = img.getAttribute("src") || (img as HTMLImageElement).currentSrc || "";
        let extension = "";
        try {
          const urlObj = new URL(src, window.location.origin);
          const extMatch = urlObj.pathname.match(/\.([a-zA-Z0-9]+)$/);
          if (extMatch) extension = extMatch[1].toLowerCase();
        } catch (e) { }

        let isModernFormat = extension === "webp" || extension === "avif";

        const parent = img.parentElement;
        if (!isModernFormat && parent && parent.tagName.toLowerCase() === "picture") {
          const sources = Array.from(parent.querySelectorAll("source"));
          const modernSource = sources.find(s => s.type === "image/webp" || s.type === "image/avif");
          if (modernSource) isModernFormat = true;
        }

        return {
          src,
          alt: img.getAttribute("alt"),
          width: img.getAttribute("width") || img.style.width || null,
          height: img.getAttribute("height") || img.style.height || null,
          extension,
          isModernFormat,
          sizeBytes: null
        };
      });
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

  async getHreflangs(): Promise<{ rel: string; href: string; lang: string }[]> {
    return await this.page.evaluate(() => {
      return Array.from(document.querySelectorAll('link[rel="alternate"][hreflang]')).map(link => ({
        rel: link.getAttribute("rel") || "",
        href: link.getAttribute("href") || "",
        lang: link.getAttribute("hreflang") || ""
      }));
    });
  }

  async getCssFiles(): Promise<string[]> {
    return await this.page.evaluate(() => {
      return Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
        .map(link => link.getAttribute("href") || "");
    });
  }

  async getMobileMetrics(): Promise<{ minFontSize: number; badTouchTargets: number }> {
    return await this.page.evaluate(() => {
      let minSize = 16;
      document.querySelectorAll("body, p, span, a").forEach((el) => {
        const style = window.getComputedStyle(el);
        const size = parseFloat(style.fontSize);
        if (size > 0 && size < minSize) minSize = size;
      });
      
      let badTargets = 0;
      document.querySelectorAll("button, a, input").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
           if (rect.width < 48 || rect.height < 48) badTargets++;
        }
      });
      return { minFontSize: Math.round(minSize), badTouchTargets: badTargets };
    });
  }
}
