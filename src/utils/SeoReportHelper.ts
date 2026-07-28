import { Page } from "@playwright/test";
import { SeoScanResult } from "../interfaces/SeoScanResult";
import { AdvancedSeoScanResult } from "../interfaces/AdvancedSeoScanResult";
import { SeoPageTestData } from "../test-data/seoData";
import { DEFAULT_SEO_CONFIG } from "../constants/seoDefaults";

/**
 * Inject bảng báo cáo SEO trực quan lên DOM.
 * - Nếu không truyền `advancedData`: hiển thị 38 tiêu chí Phần A
 * - Nếu truyền `advancedData`: hiển thị đầy đủ A+B (54 tiêu chí) trong 1 panel
 */
export async function injectVisualSEOReport(
  page: Page,
  pageName: string,
  data: SeoScanResult,
  config: SeoPageTestData,
  advancedData?: AdvancedSeoScanResult,
  threshold = 70,
): Promise<void> {
  const mergedConfig = { ...DEFAULT_SEO_CONFIG, ...config };
  await page.evaluate(
    ({ pageName, data, config, advancedData, threshold }) => {
      const oldCard = document.getElementById("seo-report-card");
      if (oldCard) oldCard.remove();

      const toSlug = (text: string) =>
        text
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/đ/g, "d")
          .replace(/Đ/g, "d")
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .trim()
          .replace(/\s+/g, "-");

      // ─────────────────────────────────────────────────────────
      // PHẦN A —  tiêu chí On-page cơ bản
      // ─────────────────────────────────────────────────────────
      const minTitle = config.titleMinLength;
      const maxTitle = config.titleMaxLength;
      const minMeta = config.metaDescMinLength;
      const maxMeta = config.metaDescMaxLength;
      const minWordCount = config.minWordCount;
      const densityMin = config.keywordDensityMin;
      const densityMax = config.keywordDensityMax;
      const urlMaxLength = config.urlMaxLength;

      interface CheckItem {
        id: string;
        group: string;
        name: string;
        isPass: boolean;
        err: string;
      }

      const itemsList: CheckItem[] = [];

      // ── 1. Title (5 tiêu chí) ─────────────────────────────
      const tVal = data.titleVal || "";
      itemsList.push({
        id: "1.1", group: "Title",
        name: `Title phải có nội dung (hiện tại: ${tVal.length} ký tự)`,
        isPass: !!tVal && tVal.length > 0,
        err: "Title tag không tồn tại hoặc rỗng!",
      });
      itemsList.push({
        id: "1.2", group: "Title",
        name: `Độ dài Title: ${tVal.length} ký tự (chuẩn: ${minTitle}–${maxTitle})`,
        isPass: tVal.length >= minTitle && tVal.length <= maxTitle,
        err: `Title quá ngắn hoặc quá dài (${tVal.length} ký tự), cần ${minTitle}–${maxTitle}`,
      });
      const hasTitleKw = tVal.toLowerCase().includes(config.keyword.toLowerCase());
      itemsList.push({
        id: "1.3", group: "Title",
        name: `Title chứa keyword "${config.keyword}"`,
        isPass: hasTitleKw,
        err: `Title không chứa keyword "${config.keyword}"`,
      });
      const titleKeywordIndex = tVal.toLowerCase().indexOf(config.keyword.toLowerCase());
      const titleHalfLen = Math.floor(tVal.length / 2);
      itemsList.push({
        id: "1.4", group: "Title",
        name: `Keyword nằm ở nửa đầu Title (vị trí: ${titleKeywordIndex >= 0 ? titleKeywordIndex : "N/A"})`,
        isPass: titleKeywordIndex >= 0 && titleKeywordIndex <= titleHalfLen,
        err: titleKeywordIndex < 0
          ? `Keyword "${config.keyword}" không có trong Title`
          : `Keyword ở vị trí ${titleKeywordIndex}, nên ≤ ${titleHalfLen}`,
      });
      // 1.5 — CSR vs SSR sync (luôn thêm, pass nếu không có staticData)
      const staticTitleOk = !data.staticData?.title || data.staticData.title === tVal;
      itemsList.push({
        id: "1.5", group: "Title",
        name: `Đồng bộ Title tĩnh/động (CSR vs SSR)`,
        isPass: staticTitleOk,
        err: `Title HTML gốc "${data.staticData?.title}" ≠ Render "${tVal}" — Bot không chạy JS sẽ thấy khác!`,
      });

      // ── 2. Meta Description (4 tiêu chí) ─────────────────
      const mVal = data.metaVal;
      itemsList.push({
        id: "2.1", group: "Meta",
        name: `Meta description tồn tại (${mVal ? mVal.length + " ký tự" : "Không tìm thấy"})`,
        isPass: mVal !== null && mVal.length > 0,
        err: 'Thẻ <meta name="description"> không tồn tại hoặc rỗng!',
      });
      itemsList.push({
        id: "2.2", group: "Meta",
        name: `Độ dài Meta: ${mVal?.length ?? 0} ký tự (chuẩn: ${minMeta}–${maxMeta})`,
        isPass: !!mVal && mVal.length >= minMeta && mVal.length <= maxMeta,
        err: mVal
          ? `Meta description quá ngắn hoặc quá dài (${mVal.length} ký tự), cần ${minMeta}–${maxMeta}`
          : "Không thể đo — Meta description không tồn tại",
      });
      itemsList.push({
        id: "2.3", group: "Meta",
        name: `Meta description chứa keyword "${config.keyword}"`,
        isPass: !!mVal && mVal.toLowerCase().includes(config.keyword.toLowerCase()),
        err: mVal
          ? `Meta description không chứa keyword "${config.keyword}"`
          : "Không thể kiểm tra — Meta description không tồn tại",
      });
      // 2.4 — CSR vs SSR sync
      const staticMetaOk = !data.staticData?.metaDesc || data.staticData.metaDesc === mVal;
      itemsList.push({
        id: "2.4", group: "Meta",
        name: `Đồng bộ Meta tĩnh/động (CSR vs SSR)`,
        isPass: staticMetaOk,
        err: `Meta HTML gốc "${data.staticData?.metaDesc}" ≠ Render "${mVal}"`,
      });

      // ── 3. Heading Structure (4 tiêu chí) ────────────────
      itemsList.push({
        id: "3.1", group: "Heading",
        name: `Trang có đúng 1 thẻ H1 (hiện tại: ${data.h1Texts.length} thẻ)`,
        isPass: data.h1Texts.length === 1,
        err: data.h1Texts.length === 0
          ? "Trang không có thẻ H1 nào!"
          : `Trang có ${data.h1Texts.length} thẻ H1, bắt buộc đúng 1 thẻ duy nhất!`,
      });
      const h1Text = data.h1Texts.length > 0 ? data.h1Texts[0] : "";
      itemsList.push({
        id: "3.2", group: "Heading",
        name: `H1 chứa keyword "${config.keyword}"`,
        isPass: data.h1Texts.length > 0 && h1Text.trim().length > 0 && h1Text.toLowerCase().includes(config.keyword.toLowerCase()),
        err: data.h1Texts.length === 0
          ? "Không có H1 để kiểm tra"
          : h1Text.trim().length === 0
            ? "Thẻ H1 tồn tại nhưng nội dung rỗng!"
            : `H1 "${h1Text}" không chứa keyword "${config.keyword}"`,
      });
      itemsList.push({
        id: "3.3", group: "Heading",
        name: `Heading phân cấp hợp lệ (${data.headingHierarchy.issues.length} lỗi)`,
        isPass: data.headingHierarchy.valid,
        err: `Heading phân cấp sai: ${data.headingHierarchy.issues.join("; ")}`,
      });
      const hasH2orH3 = data.allHeadings.some((h: any) => h.tag === "h2" || h.tag === "h3");
      itemsList.push({
        id: "3.4", group: "Heading",
        name: `Trang có thẻ H2/H3 hỗ trợ (${data.allHeadings.filter((h: any) => h.tag === "h2" || h.tag === "h3").length} thẻ)`,
        isPass: hasH2orH3,
        err: "Trang nên có ít nhất 1 thẻ H2 hoặc H3",
      });

      // ── 4. URL Structure (5 tiêu chí) ─────────────────────
      itemsList.push({
        id: "4.1", group: "URL",
        name: `Độ dài URL: ${data.urlPath.length} ký tự (tối đa: ${urlMaxLength})`,
        isPass: data.urlPath.length <= urlMaxLength,
        err: `URL path quá dài: ${data.urlPath.length} ký tự, tối đa ${urlMaxLength}`,
      });
      const isHomepage = data.urlPath === "/" || data.urlPath === "";
      const keywordSlug = toSlug(config.keyword);
      itemsList.push({
        id: "4.2", group: "URL",
        name: `URL chứa keyword slug "${keywordSlug}" ${isHomepage ? "(bỏ qua — trang chủ)" : ""}`,
        isPass: isHomepage || data.urlPath.toLowerCase().includes(keywordSlug),
        err: `URL "${data.urlPath}" không chứa keyword "${keywordSlug}"`,
      });
      itemsList.push({
        id: "4.3", group: "URL",
        name: "URL không chứa dấu gạch dưới",
        isPass: !data.urlPath.includes("_"),
        err: `URL chứa dấu gạch dưới: ${data.urlPath}`,
      });
      itemsList.push({
        id: "4.4", group: "URL",
        name: "URL toàn chữ thường",
        isPass: data.urlPath === data.urlPath.toLowerCase(),
        err: `URL chứa chữ hoa: ${data.urlPath}`,
      });
      const hasSpecialChars = /[^a-z0-9\-\/\.]/i.test(data.urlPath.split("?")[0]);
      const hasTrackingParams = /[?&](utm_|fbclid|gclid|ref=)/.test(data.urlPath);
      itemsList.push({
        id: "4.5", group: "URL",
        name: "URL không chứa ký tự đặc biệt / tracking params",
        isPass: !hasSpecialChars && !hasTrackingParams,
        err: `URL "${data.urlPath}" ${hasSpecialChars ? "chứa ký tự đặc biệt" : ""} ${hasTrackingParams ? "chứa tracking param" : ""}`.trim(),
      });

      // ── 5. Content (6 tiêu chí) ───────────────────────────
      itemsList.push({
        id: "5.1", group: "Content",
        name: `Số lượng từ: ${data.wordCount} (tối thiểu: ${minWordCount})`,
        isPass: data.wordCount >= minWordCount,
        err: `Trang chỉ có ${data.wordCount} từ, cần ≥ ${minWordCount}`,
      });
      itemsList.push({
        id: "5.2", group: "Content",
        name: `Mật độ keyword: ${data.keywordDensity.toFixed(2)}% (chuẩn: ${densityMin}%–${densityMax}%)`,
        isPass: data.keywordDensity >= densityMin && data.keywordDensity <= densityMax,
        err: data.keywordDensity < densityMin
          ? `Mật độ keyword quá thấp: ${data.keywordDensity.toFixed(2)}%, cần ≥ ${densityMin}%`
          : `Mật độ keyword quá cao (stuffing): ${data.keywordDensity.toFixed(2)}%, cần ≤ ${densityMax}%`,
      });
      itemsList.push({
        id: "5.3", group: "Content",
        name: `Keyword "${config.keyword}" xuất hiện trong 100 từ đầu`,
        isPass: data.first100Words.toLowerCase().includes(config.keyword.toLowerCase()),
        err: `Keyword "${config.keyword}" không xuất hiện trong 100 từ đầu`,
      });
      // 5.4 — LSI Keywords
      const lsiKeywords: string[] = (config as any).lsiKeywords || [];
      const foundLsi = lsiKeywords.filter((lsi: string) =>
        data.bodyText.toLowerCase().includes(lsi.toLowerCase())
      );
      itemsList.push({
        id: "5.4", group: "Content",
        name: lsiKeywords.length > 0
          ? `Từ khóa LSI (tìm thấy ${foundLsi.length}/${lsiKeywords.length})`
          : "Từ khóa LSI (không cấu hình — bỏ qua)",
        isPass: lsiKeywords.length === 0 || foundLsi.length > 0,
        err: `Nội dung không chứa từ khóa LSI nào trong: ${lsiKeywords.join(", ")}`,
      });
      // 5.5 — Readability (phân biệt tiếng Việt và tiếng Anh)
      const sentences = data.bodyText.split(/[.?!]+/).filter((s: string) => s.trim().length > 0).length || 1;
      const avgWordsPerSentence = data.wordCount / sentences;
      const isVietnamese = data.lang?.startsWith("vi") || /[àáạảãâầấẫẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(data.bodyText.slice(0, 500));

      let readabilityScore: number;
      let readabilityLabel: string;

      if (isVietnamese) {
        const longSentences = data.bodyText.split(/[.?!]+/).filter((s: string) => s.trim().split(/\s+/).length > 40).length;
        const longSentenceRatio = longSentences / sentences;
        const deviation = Math.abs(avgWordsPerSentence - 17);
        readabilityScore = Math.max(0, Math.min(100, 100 - deviation * 3 - longSentenceRatio * 30));
        readabilityLabel = `Readability (VI): ${readabilityScore.toFixed(1)} (avg ${avgWordsPerSentence.toFixed(1)} từ/câu)`;
      } else {
        const syllables = (data.bodyText.match(/[aeiouy]+/gi) || []).length || data.wordCount;
        readabilityScore = 206.835 - 1.015 * avgWordsPerSentence - 84.6 * (syllables / data.wordCount);
        readabilityLabel = `Readability (Flesch): ${readabilityScore.toFixed(1)}`;
      }

      const minReadability = (config as any).minReadabilityScore ?? 50;
      itemsList.push({
        id: "5.5", group: "Content",
        name: `${readabilityLabel} (khuyến nghị ≥ ${minReadability})`,
        isPass: readabilityScore >= minReadability,
        err: `Nội dung khó đọc, điểm ${readabilityScore.toFixed(1)} < ${minReadability}`,
      });
      // 5.6 — Duplicate content risk
      const isNoindexContent = data.robots?.toLowerCase().includes("noindex");
      const hasExplicitCanonical = data.canonical && data.canonical !== data.currentUrl;
      const expectIndexable = (config as any).expectIndexable ?? true;
      const duplicateRisk = isNoindexContent || hasExplicitCanonical;
      itemsList.push({
        id: "5.6", group: "Content",
        name: "Nội dung không bị đánh dấu Duplicate/Mirror",
        isPass: !duplicateRisk || expectIndexable === false,
        err: `Trang có nguy cơ duplicate content vì ${isNoindexContent ? "bị gắn thẻ noindex" : "có thẻ canonical trỏ sang trang khác"}`,
      });

      // ── 6. Images (6 tiêu chí) ────────────────────────────
      itemsList.push({
        id: "6.1", group: "Images",
        name: `100% ảnh có thuộc tính alt (thiếu: ${data.missingAltCount}/${data.images.length})`,
        isPass: data.missingAltCount === 0,
        err: `Có ${data.missingAltCount} hình ảnh thiếu thuộc tính 'alt'`,
      });
      const hasKeywordAlt = data.images.some(
        (img: any) => img.alt && img.alt.toLowerCase().includes(config.keyword.toLowerCase())
      );
      itemsList.push({
        id: "6.2", group: "Images",
        name: `Có ảnh chứa keyword "${config.keyword}" trong alt`,
        isPass: data.images.length === 0 || hasKeywordAlt,
        err: `Không có ảnh nào có alt chứa keyword "${config.keyword}"`,
      });
      const dimThreshold = data.images.length > 0 ? Math.ceil(data.images.length * 0.8) : 0;
      itemsList.push({
        id: "6.3", group: "Images",
        name: `Ảnh có width/height: ${data.imagesWithDimensions}/${data.images.length} (cần ≥ 80%)`,
        isPass: data.images.length === 0 || data.imagesWithDimensions >= dimThreshold,
        err: `Chỉ ${data.imagesWithDimensions}/${data.images.length} ảnh có width/height, cần ≥ ${dimThreshold}`,
      });
      itemsList.push({
        id: "6.4", group: "Images",
        name: `Ảnh có tên file rõ nghĩa (hash: ${data.imagesWithBadNames})`,
        isPass: data.imagesWithBadNames === 0,
        err: `${data.imagesWithBadNames} ảnh có tên file vô nghĩa (dạng mã hash/ngẫu nhiên)`,
      });
      // 6.5 — Modern image format (WebP/AVIF)
      const expectedModernRatio = (config as any).modernImageRatio ?? 80;
      const modernImagesCount = data.images.filter((img: any) => img.isModernFormat).length;
      const actualModernRatio = data.images.length > 0 ? (modernImagesCount / data.images.length) * 100 : 100;
      itemsList.push({
        id: "6.5", group: "Images",
        name: `Định dạng ảnh tối ưu (WebP/AVIF): ${actualModernRatio.toFixed(0)}% (cần ≥ ${expectedModernRatio}%)`,
        isPass: actualModernRatio >= expectedModernRatio,
        err: `Tỷ lệ ảnh WebP/AVIF quá thấp: ${modernImagesCount}/${data.images.length} ảnh (${actualModernRatio.toFixed(0)}%)`,
      });
      // 6.6 — Image size
      const maxKb = (config as any).maxImageSizeKb ?? 250;
      const maxBytes = maxKb * 1024;
      const oversizedImages = data.images.filter((img: any) => img.sizeBytes !== null && img.sizeBytes > maxBytes);
      itemsList.push({
        id: "6.6", group: "Images",
        name: `Dung lượng ảnh tối ưu (≤ ${maxKb}KB): ${oversizedImages.length} ảnh vượt`,
        isPass: oversizedImages.length === 0,
        err: `${oversizedImages.length} ảnh vượt quá ${maxKb}KB`,
      });

      // ── 7. Links (5 tiêu chí) ─────────────────────────────
      itemsList.push({
        id: "7.1", group: "Links",
        name: `Internal links: ${data.internalLinks.length} link`,
        isPass: data.internalLinks.length > 0,
        err: "Trang nên có ít nhất 1 internal link",
      });
      itemsList.push({
        id: "7.2", group: "Links",
        name: `External links: ${data.externalLinks.length} link`,
        isPass: true, // Khuyến nghị
        err: "Trang không có external links — không bắt buộc nhưng nên có",
      });
      const genericAnchors = [
        "click here", "here", "read more", "xem thêm", "nhấn vào đây", "tại đây",
        "chi tiết", "xem chi tiết", "tìm hiểu thêm"
      ];
      const badAnchors = data.internalLinks.filter((link: any) => {
        const text = link.text.trim().toLowerCase();
        return text === "" || genericAnchors.includes(text);
      });
      itemsList.push({
        id: "7.3", group: "Links",
        name: `Anchor text chất lượng (lỗi: ${badAnchors.length})`,
        isPass: badAnchors.length === 0,
        err: `${badAnchors.length} link có anchor text không tốt`,
      });
      itemsList.push({
        id: "7.4", group: "Links",
        name: "Không có broken links (kiểm tra runtime)",
        isPass: true, // Runtime check trong SeoPage
        err: "Phát hiện link hỏng khi kiểm tra phản hồi HTTP",
      });
      itemsList.push({
        id: "7.5", group: "Links",
        name: "Không có redirect chain (kiểm tra runtime)",
        isPass: true, // Runtime check trong SeoPage
        err: "Phát hiện redirect chain (>1 hop) trên internal links",
      });

      // ── 8. Technical SEO (9 tiêu chí) ────────────────────
      const isCanonicalOk = !!data.canonical && /^https?:\/\//.test(data.canonical);
      itemsList.push({
        id: "8.1", group: "Technical",
        name: `Canonical URL hợp lệ (${data.canonical || "Không có"})`,
        isPass: isCanonicalOk,
        err: data.canonical === null
          ? 'Thiếu thẻ <link rel="canonical">. Nguy cơ trùng lặp!'
          : `URL Canonical không hợp lệ: "${data.canonical}"`,
      });
      const isNoindexRobot = !!data.robots?.toLowerCase().includes("noindex");
      const robotsOk = expectIndexable ? !isNoindexRobot : isNoindexRobot;
      itemsList.push({
        id: "8.2", group: "Technical",
        name: `Robots: ${data.robots || "Mặc định Index"} (mong muốn: ${expectIndexable ? "INDEX" : "NOINDEX"})`,
        isPass: robotsOk,
        err: expectIndexable
          ? "Trang mong muốn INDEX nhưng đang bị gắn 'noindex'!"
          : "Trang bảo mật/nội bộ nên có 'noindex' nhưng chưa gắn!",
      });
      itemsList.push({
        id: "8.3", group: "Technical",
        name: "robots.txt tồn tại (200 OK)",
        isPass: true, // Runtime check
        err: "robots.txt không phản hồi status 200 OK",
      });
      itemsList.push({
        id: "8.4", group: "Technical",
        name: "sitemap.xml tồn tại (200 OK)",
        isPass: true, // Runtime check
        err: "sitemap.xml không phản hồi status 200 OK",
      });
      itemsList.push({
        id: "8.5", group: "Technical",
        name: `Schema Markup: ${data.hasSchema ? "Đã cài" : "Thiếu"}`,
        isPass: data.hasSchema,
        err: "Thiếu Schema Markup (JSON-LD / Microdata / RDFa)",
      });
      if ((config as any).checkSocialOg !== false) {
        itemsList.push({
          id: "8.6", group: "Technical",
          name: `Open Graph: og:title=${data.ogTitle ? "✔" : "✘"}, og:description=${data.ogDesc ? "✔" : "✘"}, og:image=${data.ogImage ? "✔" : "✘"}`,
          isPass: !!data.ogTitle && !!data.ogDesc && !!data.ogImage,
          err: [
            !data.ogTitle ? "og:title" : null,
            !data.ogDesc ? "og:description" : null,
            !data.ogImage ? "og:image" : null,
          ].filter(Boolean).join(", ") + " — Link không có thumbnail khi share trên social media",
        });
        const twitterCount = Object.keys(data.twitterTags).length;
        itemsList.push({
          id: "8.7", group: "Technical",
          name: `Twitter Card tags: ${twitterCount} thẻ`,
          isPass: twitterCount > 0,
          err: "Trang thiếu Twitter Card tags",
        });
      } else {
        itemsList.push({ id: "8.6", group: "Technical", name: "Open Graph (Bỏ qua)", isPass: true, err: "" });
        itemsList.push({ id: "8.7", group: "Technical", name: "Twitter Card (Bỏ qua)", isPass: true, err: "" });
      }
      itemsList.push({
        id: "8.8", group: "Technical",
        name: `HTML lang="${data.lang || "Thiếu"}"`,
        isPass: !!data.lang && data.lang.length > 0,
        err: "Thẻ <html> thiếu thuộc tính lang",
      });
      const charsetOk = !!data.charset && data.charset.toLowerCase() === "utf-8";
      itemsList.push({
        id: "8.9", group: "Technical",
        name: `Charset: ${data.charset || "Thiếu"} | Favicon: ${data.hasFavicon ? "✔" : "✘"} | Doctype: ${(data as any).hasHtml5Doctype ? "HTML5" : "✘"}`,
        isPass: charsetOk && data.hasFavicon && (data as any).hasHtml5Doctype,
        err: [
          !data.charset ? "Thiếu khai báo charset" : null,
          data.charset && data.charset.toLowerCase() !== "utf-8" ? `Charset nên là UTF-8, hiện tại: ${data.charset}` : null,
          !data.hasFavicon ? "Trang thiếu favicon" : null,
          !(data as any).hasHtml5Doctype ? "Trang thiếu khai báo <!DOCTYPE html> (HTML5)" : null,
        ].filter(Boolean).join(". "),
      });

      // ── 9. Mobile (3 tiêu chí) ────────────────────────────
      itemsList.push({
        id: "9.1", group: "Mobile",
        name: `Viewport meta tag: ${data.hasViewport ? "✔" : "✘"}`,
        isPass: data.hasViewport,
        err: "Trang thiếu thẻ <meta name='viewport'>",
      });
      itemsList.push({
        id: "9.2", group: "Mobile",
        name: `Font size trên mobile (≥ 12px): ${data.minFontSize}px`,
        isPass: data.minFontSize >= 12,
        err: `Có text quá nhỏ (${data.minFontSize}px), khó đọc trên thiết bị di động`,
      });
      itemsList.push({
        id: "9.3", group: "Mobile",
        name: `Touch targets đủ lớn (≥ 48x48px): ${data.badTouchTargets === 0 ? "✔" : data.badTouchTargets + " lỗi"}`,
        isPass: data.badTouchTargets === 0,
        err: `Phát hiện ${data.badTouchTargets} nút/link có kích thước quá nhỏ (< 48x48px)`,
      });

      // ── 10. Page Optimization (3 tiêu chí) ───────────────
      const headers = data.pageHeaders || {};
      const encoding = (headers["content-encoding"] || headers["Content-Encoding"] || "none").toLowerCase();
      itemsList.push({
        id: "10.1", group: "Performance",
        name: `Nén dữ liệu (Gzip/Brotli): ${encoding !== "none" ? encoding.toUpperCase() : "✘ Chưa nén"}`,
        isPass: ["gzip", "br", "deflate"].includes(encoding),
        err: `Trang không được nén bằng Gzip hoặc Brotli (Content-Encoding: ${encoding})`,
      });
      const cacheControl = (headers["cache-control"] || headers["Cache-Control"] || "no cache").toLowerCase();
      itemsList.push({
        id: "10.2", group: "Performance",
        name: `Browser caching (Cache-Control): ${cacheControl.includes("max-age") ? "✔" : "✘"}`,
        isPass: cacheControl.includes("max-age") && !cacheControl.includes("no-store"),
        err: `Cache header chưa tối ưu hoặc bị disable: ${cacheControl}`,
      });
      const assetHashPattern = /[.-][a-f0-9]{6,}\./;
      const nonMinifiedCss = (data.cssFiles || []).filter((href: string) =>
        !href.includes(".min.css") && !href.includes("?") && !assetHashPattern.test(href)
      );
      itemsList.push({
        id: "10.3", group: "Performance",
        name: `CSS Minified: ${nonMinifiedCss.length === 0 ? "✔" : nonMinifiedCss.length + " chưa minify"}`,
        isPass: nonMinifiedCss.length === 0,
        err: `Phát hiện ${nonMinifiedCss.length} file CSS chưa được minify`,
      });
      // 10.4 — JS Minify
      const nonMinifiedJs = ((data as any).jsFiles || []).filter((src: string) =>
        !src.includes(".min.js") && !src.includes("?") && !assetHashPattern.test(src) && !src.includes("chunk")
      );
      itemsList.push({
        id: "10.4", group: "Performance",
        name: `JS Minified: ${nonMinifiedJs.length === 0 ? "✔" : nonMinifiedJs.length + " chưa minify"}`,
        isPass: nonMinifiedJs.length === 0,
        err: `Phát hiện ${nonMinifiedJs.length} file JS chưa được minify`,
      });
      // 10.5 — Tổng dung lượng trang
      const totalPageSizeBytes = (data as any).totalPageSizeBytes || 0;
      if (totalPageSizeBytes > 0) {
        const pageSizeKB = Math.round(totalPageSizeBytes / 1024);
        itemsList.push({
          id: "10.5", group: "Performance",
          name: `Dung lượng trang: ${pageSizeKB}KB (tối đa: 3000KB)`,
          isPass: pageSizeKB <= 3000,
          err: `Dung lượng trang quá lớn: ${pageSizeKB}KB, cần ≤ 3000KB`,
        });
      }

      // 10.6, 10.7, 10.8 — Core Web Vitals
      const finalLcp = data.vitals?.lcp ?? data.localMetrics?.lcp ?? null;
      const finalCls = data.vitals?.cls ?? data.localMetrics?.cls ?? null;
      const finalInp = data.vitals?.inp ?? null;

      itemsList.push({
        id: "10.6", group: "Performance",
        name: `LCP: ${finalLcp !== null ? finalLcp + "ms" : "N/A"} (< 2500ms)`,
        isPass: finalLcp !== null && finalLcp < 2500,
        err: `LCP quá cao: ${finalLcp}ms (chuẩn: < 2.5s)`,
      });

      itemsList.push({
        id: "10.7", group: "Performance",
        name: `INP: ${finalInp !== null ? finalInp + "ms" : "N/A"} (< 200ms)`,
        isPass: finalInp === null || finalInp < 200,
        err: `INP quá cao: ${finalInp}ms (chuẩn: < 200ms)`,
      });

      itemsList.push({
        id: "10.8", group: "Performance",
        name: `CLS: ${finalCls !== null ? finalCls : "N/A"} (< 0.1)`,
        isPass: finalCls !== null && finalCls < 0.1,
        err: `CLS quá cao: ${finalCls} (chuẩn: < 0.1)`,
      });

      // ── 11. Security (2 tiêu chí) ────────────────────────
      itemsList.push({
        id: "11.1", group: "Security",
        name: `HTTPS: ${data.isHttps ? "Đã bật" : "Chưa bật"}`,
        isPass: data.isHttps,
        err: `Trang đang dùng HTTP: ${data.currentUrl}`,
      });
      itemsList.push({
        id: "11.2", group: "Security",
        name: `Mixed Content: ${data.mixedContent.length} tài nguyên HTTP`,
        isPass: data.mixedContent.length === 0,
        err: `Phát hiện ${data.mixedContent.length} tài nguyên HTTP trên HTTPS`,
      });

      // ─────────────────────────────────────────────────────────
      // PHẦN B — Advanced (nếu có advancedData)
      // ─────────────────────────────────────────────────────────
      if (advancedData) {
        const ad = advancedData;

        // B1 — Featured Snippet DOM
        const fs = ad.featuredSnippetCheck;
        itemsList.push({
          id: "B1.4", group: "B-Semantic",
          name: `Featured Snippet DOM: list=${fs.hasList ? "✔" : "✘"} table=${fs.hasTable ? "✔" : "✘"} (${fs.score}/100)`,
          isPass: fs.score >= 30,
          err: `Cấu trúc FS yếu (${fs.score}/100) — cần thêm list/table/short paragraph`,
        });

        // B2 — E-E-A-T (5 tiêu chí)
        itemsList.push({
          id: "B2.1", group: "B-E-E-A-T",
          name: `Thông tin tác giả: ${ad.hasAuthorInfo ? "Có" : "Thiếu"}`,
          isPass: ad.hasAuthorInfo,
          err: "Trang thiếu thông tin tác giả (author schema/byline)",
        });
        itemsList.push({
          id: "B2.2", group: "B-E-E-A-T",
          name: `Ngày đăng (datePublished): ${ad.hasDatePublished ? "Có" : "Thiếu"}`,
          isPass: ad.hasDatePublished,
          err: "Thiếu datePublished — Google dùng để đánh giá tính mới của nội dung",
        });
        itemsList.push({
          id: "B2.3", group: "B-E-E-A-T",
          name: `Ngày cập nhật (dateModified): ${ad.hasDateModified ? "Có" : "Thiếu"}`,
          isPass: ad.hasDateModified,
          err: "Thiếu dateModified — Bài viết nên hiển thị ngày cập nhật gần nhất",
        });
        const existingTrust = ad.trustPages.filter((p: any) => p.exists);
        itemsList.push({
          id: "B2.4", group: "B-E-E-A-T",
          name: `Trust Pages: ${existingTrust.length}/${ad.trustPages.length} tồn tại`,
          isPass: existingTrust.length >= 2,
          err: `Chỉ ${existingTrust.length} trust pages. Cần ≥ 2 trong: About, Contact, Privacy Policy`,
        });
        itemsList.push({
          id: "B2.5", group: "B-E-E-A-T",
          name: `External citations: ${ad.externalCitations} link dẫn nguồn`,
          isPass: ad.externalCitations > 0,
          err: "Trang không có external link dẫn nguồn. Nên có ≥ 1 link authority",
        });

        // B3 — Schema nâng cao (5 tiêu chí)
        const expectedTypes = (config as any).expectedSchemaTypes || [];
        if (expectedTypes.length > 0) {
          const missing = expectedTypes.filter((t: string) => !ad.schemaAnalysis.types.includes(t));
          itemsList.push({
            id: "B3.1", group: "B-Schema",
            name: `Schema types: [${ad.schemaAnalysis.types.join(", ")}]`,
            isPass: missing.length === 0,
            err: `Thiếu Schema types: ${missing.join(", ")}`,
          });
        } else {
          itemsList.push({
            id: "B3.1", group: "B-Schema",
            name: `Schema types: ${ad.schemaAnalysis.types.length} types`,
            isPass: ad.schemaAnalysis.types.length > 0,
            err: "Trang không có Schema Markup (JSON-LD)",
          });
        }
        itemsList.push({
          id: "B3.2", group: "B-Schema",
          name: "Schema có đủ required fields",
          isPass: ad.schemaAnalysis.hasRequiredFields,
          err: ad.schemaAnalysis.issues.join("; "),
        });
        itemsList.push({
          id: "B3.3", group: "B-Schema",
          name: `Schema không có lỗi cú pháp (${ad.schemaAnalysis.issues.length} lỗi)`,
          isPass: ad.schemaAnalysis.issues.length === 0,
          err: `Lỗi Schema: ${ad.schemaAnalysis.issues.join("; ")}`,
        });
        itemsList.push({
          id: "B3.4", group: "B-Schema",
          name: `BreadcrumbList Schema: ${ad.schemaAnalysis.types.includes("BreadcrumbList") ? "Có" : "Thiếu"}`,
          isPass: ad.schemaAnalysis.types.includes("BreadcrumbList"),
          err: "Thiếu BreadcrumbList Schema",
        });
        itemsList.push({
          id: "B3.6", group: "B-Schema",
          name: `Schema nhất quán với DOM: ${ad.schemaConsistency.isConsistent ? "✔" : ad.schemaConsistency.issues.length + " vấn đề"}`,
          isPass: ad.schemaConsistency.isConsistent,
          err: ad.schemaConsistency.issues.slice(0, 2).join("; "),
        });

        // B4 — Crawlability (4 tiêu chí)
        itemsList.push({
          id: "B4.1", group: "B-Crawl",
          name: `Soft 404: ${ad.isSoft404 ? "Phát hiện!" : "Không"}`,
          isPass: !ad.isSoft404,
          err: "Trang trả về 200 nhưng nội dung cho thấy là trang lỗi (soft 404)",
        });
        itemsList.push({
          id: "B4.2", group: "B-Crawl",
          name: `X-Robots-Tag: ${ad.xRobotsTag || "Không có (OK)"}`,
          isPass: !ad.xRobotsTag || !ad.xRobotsTag.toLowerCase().includes("noindex"),
          err: `X-Robots-Tag đang chặn index: "${ad.xRobotsTag}"`,
        });
        itemsList.push({
          id: "B4.3", group: "B-Crawl",
          name: `Canonical khớp URL hiện tại: ${ad.canonicalMatchesUrl ? "✔" : "✘"}`,
          isPass: ad.canonicalMatchesUrl,
          err: "Canonical không khớp URL hiện tại — Nguy cơ duplicate content!",
        });
        itemsList.push({
          id: "B4.4", group: "B-Crawl",
          name: `Hreflang tags: ${ad.hasHreflang ? "Có" : "Không có"}`,
          isPass: true, // Khuyến nghị
          err: "Trang chưa có hreflang — nên thêm nếu web đa ngôn ngữ",
        });

        // B5 — Internal Linking (4 tiêu chí)
        itemsList.push({
          id: "B5.1", group: "B-Linking",
          name: `Breadcrumb navigation: ${ad.hasBreadcrumb ? "Có" : "Thiếu"}`,
          isPass: ad.hasBreadcrumb,
          err: "Trang thiếu breadcrumb navigation",
        });
        itemsList.push({
          id: "B5.2", group: "B-Linking",
          name: `Breadcrumb Schema (JSON-LD): ${ad.breadcrumbSchema ? "Có" : "Thiếu"}`,
          isPass: ad.breadcrumbSchema,
          err: "Có breadcrumb nhưng thiếu BreadcrumbList Schema",
        });
        itemsList.push({
          id: "B5.3", group: "B-Linking",
          name: `Table of Contents: ${ad.hasTableOfContents ? "Có" : "Không"}`,
          isPass: true, // Khuyến nghị
          err: "Nên thêm mục lục (TOC) cho bài viết dài > 1500 từ",
        });
        const anchorDiv = ad.anchorDiversity;
        const anchorThreshold = (config as any).anchorDiversityThreshold ?? 70;
        itemsList.push({
          id: "B5.4", group: "B-Linking",
          name: `Anchor Diversity: ${anchorDiv.unique}/${anchorDiv.total} unique (${anchorDiv.ratio}%, cần ≥ ${anchorThreshold}%)`,
          isPass: anchorDiv.ratio >= anchorThreshold,
          err: `Anchor text không đa dạng: chỉ ${anchorDiv.ratio}% unique`,
        });

        // B6 — Performance (8 tiêu chí)
        const maxTTFB = (config as any).maxTTFB || 800;
        const maxDOMSize = (config as any).maxDOMSize || 1500;
        const perf = ad.performance;
        itemsList.push({
          id: "B6.1", group: "B-Perf",
          name: `TTFB: ${perf.ttfb}ms (tối đa: ${maxTTFB}ms)`,
          isPass: perf.ttfb <= maxTTFB,
          err: `TTFB quá cao: ${perf.ttfb}ms, cần ≤ ${maxTTFB}ms`,
        });
        itemsList.push({
          id: "B6.2", group: "B-Perf",
          name: `DOM Size: ${perf.domSize} elements (tối đa: ${maxDOMSize})`,
          isPass: perf.domSize <= maxDOMSize,
          err: `DOM quá lớn: ${perf.domSize} elements`,
        });
        const isH2Plus = perf.httpVersion.includes("h2") || perf.httpVersion.includes("h3");
        itemsList.push({
          id: "B6.3", group: "B-Perf",
          name: `HTTP Protocol: ${perf.httpVersion}`,
          isPass: isH2Plus,
          err: `Server đang dùng ${perf.httpVersion}. Nên upgrade lên HTTP/2+`,
        });
        itemsList.push({
          id: "B6.4", group: "B-Perf",
          name: `Resource Hints: preload=${perf.preloadCount}, preconnect=${perf.preconnectCount}`,
          isPass: perf.hasPreload || perf.hasPreconnect,
          err: "Trang không sử dụng resource hints (preload/preconnect)",
        });
        const lazyRatio = perf.totalBelowFoldImages > 0 ? (perf.lazyLoadedImages / perf.totalBelowFoldImages) * 100 : 100;
        itemsList.push({
          id: "B6.5", group: "B-Perf",
          name: `Lazy Load: ${perf.lazyLoadedImages}/${perf.totalBelowFoldImages} below-fold (${lazyRatio.toFixed(0)}%)`,
          isPass: lazyRatio >= 80,
          err: `Chỉ ${lazyRatio.toFixed(0)}% ảnh below-fold có loading="lazy"`,
        });
        itemsList.push({
          id: "B6.6", group: "B-Perf",
          name: `Font Optimization: swap=${perf.fontDisplaySwap ? "✔" : "✘"}, preload=${perf.preloadedFonts}`,
          isPass: perf.fontDisplaySwap || perf.preloadedFonts > 0,
          err: "Font chưa tối ưu. Thêm font-display: swap và/hoặc preload font files",
        });
        const responsiveRatio = perf.totalImages > 0 ? (perf.responsiveImages / perf.totalImages) * 100 : 100;
        itemsList.push({
          id: "B6.7", group: "B-Perf",
          name: `Responsive Images: ${perf.responsiveImages}/${perf.totalImages} có srcset (${responsiveRatio.toFixed(0)}%)`,
          isPass: responsiveRatio >= 50,
          err: `Chỉ ${responsiveRatio.toFixed(0)}% ảnh có srcset/sizes`,
        });
        itemsList.push({
          id: "B6.8", group: "B-Perf",
          name: `3rd-party Scripts: ${ad.thirdPartyScripts.count} domains`,
          isPass: ad.thirdPartyScripts.count <= 5,
          err: `${ad.thirdPartyScripts.count} 3rd-party domains: ${ad.thirdPartyScripts.names.slice(0, 3).join(", ")}`,
        });

        // B7 — UX Signals (4 tiêu chí)
        itemsList.push({
          id: "B7.1", group: "B-UX",
          name: `Intrusive Interstitials: ${ad.hasIntrusiveInterstitials ? "Phát hiện!" : "Không có"}`,
          isPass: !ad.hasIntrusiveInterstitials,
          err: "Phát hiện popup/overlay che nội dung. Google phạt trang này!",
        });
        itemsList.push({
          id: "B7.2", group: "B-UX",
          name: `Above-fold Ads: ${ad.aboveFoldAdCount} ad elements`,
          isPass: ad.aboveFoldAdCount <= 1,
          err: `Quá nhiều ad above-the-fold: ${ad.aboveFoldAdCount}. Nên ≤ 1`,
        });
        itemsList.push({
          id: "B7.3", group: "B-UX",
          name: `ARIA Labels thiếu: ${ad.missingAriaLabels} phần tử`,
          isPass: ad.missingAriaLabels <= 3,
          err: `${ad.missingAriaLabels} phần tử interactive thiếu ARIA label`,
        });
        itemsList.push({
          id: "B7.4", group: "B-UX",
          name: `CSS Focus Styles: ${ad.hasFocusStyles ? "Có" : "Thiếu"}`,
          isPass: ad.hasFocusStyles,
          err: "Trang thiếu CSS focus styles. Keyboard users bị ảnh hưởng",
        });

        // B8 — URL Consistency (4 tiêu chí)
        itemsList.push({
          id: "B8.1", group: "B-URL",
          name: `WWW Redirect: ${ad.wwwRedirectOk ? "OK" : "Lỗi"}`,
          isPass: ad.wwwRedirectOk,
          err: "www ↔ non-www không redirect đúng. Có thể gây duplicate content",
        });
        itemsList.push({
          id: "B8.2", group: "B-URL",
          name: `HTTPS Redirect: ${ad.httpsRedirectOk ? "OK" : "Lỗi"}`,
          isPass: ad.httpsRedirectOk,
          err: "HTTP không redirect sang HTTPS",
        });
        itemsList.push({
          id: "B8.3", group: "B-URL",
          name: `Trailing Slash: ${ad.trailingSlashConsistent ? "Nhất quán" : "Không nhất quán"}`,
          isPass: ad.trailingSlashConsistent,
          err: "URL trailing slash không nhất quán",
        });
        itemsList.push({
          id: "B8.4", group: "B-URL",
          name: `HSTS: ${ad.hasHSTS ? "Có" : "Thiếu"}`,
          isPass: ad.hasHSTS,
          err: "Thiếu HSTS header. Browser không bắt buộc dùng HTTPS",
        });

        // Phase 2 APIs (conditional)
        if (ad.contentEvaluation) {
          const ce = ad.contentEvaluation;
          itemsList.push({
            id: "AI.1", group: "B-AI (Gemini)",
            name: `Khớp Search Intent: ${ce.isIntentMatched ? "Có" : "Không"}`,
            isPass: ce.isIntentMatched,
            err: `Nội dung không thỏa mãn search intent. Đề xuất: ${ce.recommendations.join(", ")}`,
          });
          itemsList.push({
            id: "AI.2", group: "B-AI (Gemini)",
            name: `E-E-A-T Score (Gemini): ${ce.score}/100`,
            isPass: ce.score >= 70,
            err: `Điểm E-E-A-T thấp (${ce.score}/100): ${ce.explanation}`,
          });
          itemsList.push({
            id: "AI.3", group: "B-AI (Gemini)",
            name: `TF-IDF Relevance: ${ce.tfIdfScore}/100`,
            isPass: ce.tfIdfScore >= 60,
            err: `TF-IDF thấp: ${ce.tfIdfScore}/100`,
          });
          itemsList.push({
            id: "AI.4", group: "B-AI (Gemini)",
            name: `Entity SEO: ${ce.entities.length} có, ${ce.missingEntities.length} thiếu`,
            isPass: ce.missingEntities.length === 0,
            err: `Thiếu entities: ${ce.missingEntities.join(", ")}`,
          });
          itemsList.push({
            id: "AI.5", group: "B-AI (Gemini)",
            name: `Featured Snippet (AI): ${ce.featuredSnippetScore}/100 | Direct Answer: ${ce.hasDirectAnswer ? "✔" : "✘"}`,
            isPass: ce.featuredSnippetScore >= 50,
            err: `FS tiềm năng thấp: ${ce.featuredSnippetScore}/100`,
          });
        }

        if (ad.coreWebVitals) {
          const cw = ad.coreWebVitals;
          if (cw.lcp !== null) {
            itemsList.push({ id: "CrUX.1", group: "B-CrUX", name: `LCP: ${cw.lcp}ms`, isPass: cw.lcp <= 2500, err: `LCP chậm (${cw.lcp}ms). Cần ≤ 2500ms` });
          }
          if (cw.cls !== null) {
            itemsList.push({ id: "CrUX.2", group: "B-CrUX", name: `CLS: ${cw.cls}`, isPass: cw.cls <= 0.1, err: `CLS cao (${cw.cls}). Cần ≤ 0.1` });
          }
          if (cw.inp !== null) {
            itemsList.push({ id: "CrUX.3", group: "B-CrUX", name: `INP: ${cw.inp}ms`, isPass: cw.inp <= 200, err: `INP cao (${cw.inp}ms). Cần ≤ 200ms` });
          }
          if (cw.score !== null) {
            itemsList.push({ id: "CrUX.4", group: "B-CrUX", name: `PageSpeed Score: ${cw.score}/100`, isPass: cw.score >= 70, err: `Score thấp (${cw.score}/100)` });
          }
        }

        if (ad.serpData) {
          itemsList.push({
            id: "SERP.1", group: "B-SERP",
            name: `Cannibalization: ${ad.serpData.competingPagesCount > 1 ? "Có" : "Không"}`,
            isPass: ad.serpData.competingPagesCount <= 1,
            err: `${ad.serpData.competingPagesCount} trang cùng domain rank cho keyword này`,
          });
          itemsList.push({
            id: "SERP.2", group: "B-SERP",
            name: `PAA: ${ad.serpData.hasPaa ? `Có (${ad.serpData.paaQuestions.length} câu)` : "Không"}`,
            isPass: ad.serpData.hasPaa,
            err: "Từ khóa này không có People Also Ask trên SERP",
          });
          if (ad.serpData.rank !== null) {
            itemsList.push({
              id: "SERP.3", group: "B-SERP",
              name: `Vị trí xếp hạng: #${ad.serpData.rank}`,
              isPass: ad.serpData.rank <= 10,
              err: `Trang xếp hạng #${ad.serpData.rank} — ngoài top 10`,
            });
          }
        }
      }

      // ─────────────────────────────────────────────────────────
      // TÍNH ĐIỂM & RENDER
      // ─────────────────────────────────────────────────────────
      const failedItems = itemsList.filter((item) => !item.isPass);
      const passedCount = itemsList.length - failedItems.length;
      const score = Math.round((passedCount / itemsList.length) * 100);
      const isFullReport = !!advancedData;
      const isPass = score >= threshold;

      let scoreColor = "#ef4444";
      let scoreLabel = "KÉM";
      let scoreIcon = "🔴";
      if (score >= 93) { scoreColor = "#22c55e"; scoreLabel = "XUẤT SẮC"; scoreIcon = "💎"; }
      else if (score >= 77) { scoreColor = "#3b82f6"; scoreLabel = "TỐT"; scoreIcon = "🟢"; }
      else if (score >= 65) { scoreColor = "#eab308"; scoreLabel = "KHÁ"; scoreIcon = "🟡"; }
      else if (score >= 50) { scoreColor = "#f97316"; scoreLabel = "TRUNG BÌNH"; scoreIcon = "🟠"; }

      // Nhóm theo group để hiển thị phân vùng
      const groups = [...new Set(itemsList.map(i => i.group))];

      const container = document.createElement("div");
      container.id = "seo-report-card";
      container.style.cssText = `
        position:fixed; top:10px; right:10px; width:520px;
        background:#0f172a; color:#f8fafc; border: 2px solid ${scoreColor};
        border-radius:16px; box-shadow: 0 20px 60px -10px ${scoreColor}44, 0 20px 25px -5px rgb(0 0 0 / 0.6);
        font-family:system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        padding:18px; z-index:9999999; pointer-events:none;
        max-height:94vh; overflow-y:auto; line-height:1.5;
      `;

      const reportLabel = isFullReport ? "Full SEO (A+B)" : "Phần A: On-page cơ bản";
      const passColor = isPass ? "#22c55e" : "#ef4444";
      const passText = isPass ? "PASS" : "FAIL";
      const passIcon = isPass ? "✅" : "❌";

      const headerHtml = `
        <div style="font-weight:bold; font-size:15px; margin-bottom:12px; border-bottom:1px solid #334155; padding-bottom:10px; display:flex; justify-content:space-between; align-items:center;">
          <span>🎯 BÁO CÁO SEO AUDIT CHUYÊN SÂU</span>
          <span style="color:#94a3b8; font-size:11px;">${reportLabel}</span>
        </div>

        <!-- ═══ BẢNG ĐIỂM TỔNG KẾT ═══ -->
        <div style="
          background: linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(30,41,59,0.6) 100%);
          border: 2px solid ${scoreColor};
          border-radius: 12px;
          padding: 14px 16px;
          margin-bottom: 14px;
          position: relative;
          overflow: hidden;
        ">
          <!-- Glow effect -->
          <div style="position:absolute; top:-40px; left:-40px; width:120px; height:120px; border-radius:50%; background:${scoreColor}; opacity:0.06; pointer-events:none;"></div>

          <!-- Header dòng tiêu đề -->
          <div style="
            text-align:center;
            font-size:11px;
            font-weight:bold;
            color:#94a3b8;
            letter-spacing:2px;
            text-transform:uppercase;
            margin-bottom:10px;
            border-bottom: 1px solid #1e293b;
            padding-bottom: 8px;
          ">══ KẾT QUẢ CHẤM ĐIỂM SEO ══</div>

          <!-- Grid 2 cột: Vòng tròn điểm | Thông tin -->
          <div style="display:grid; grid-template-columns: 100px 1fr; gap:14px; align-items:center; margin-bottom:12px;">
            <!-- Vòng tròn điểm số -->
            <div style="display:flex; justify-content:center;">
              <div style="
                position:relative; width:88px; height:88px;
                border-radius:50%;
                background: conic-gradient(${scoreColor} ${score * 3.6}deg, #1e293b 0deg);
                display:flex; justify-content:center; align-items:center;
                box-shadow: 0 0 20px ${scoreColor}33;
              ">
                <div style="
                  position:absolute; width:72px; height:72px;
                  border-radius:50%; background:#0f172a;
                  display:flex; justify-content:center; align-items:center; flex-direction:column;
                ">
                  <span style="font-size:24px; font-weight:900; color:${scoreColor}; line-height:1;">${score}</span>
                  <span style="font-size:8px; color:#64748b; text-transform:uppercase; font-weight:bold; letter-spacing:1px;">/ 100</span>
                </div>
              </div>
            </div>

            <!-- Thông tin điểm -->
            <div style="display:flex; flex-direction:column; gap:5px; font-size:11px;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="color:#94a3b8;">Điểm số:</span>
                <strong style="color:${scoreColor}; font-size:14px;">${score}/100</strong>
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="color:#94a3b8;">Đánh giá:</span>
                <strong style="color:${scoreColor};">${scoreIcon} ${scoreLabel}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="color:#94a3b8;">Ngưỡng đạt:</span>
                <span style="color:#cbd5e1;">${threshold}%</span>
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #1e293b; padding-top:5px; margin-top:2px;">
                <span style="color:#94a3b8;">Kết quả:</span>
                <span style="
                  font-weight:bold; font-size:12px;
                  color:${passColor};
                  background: ${isPass ? 'rgba(34,197,94,0.12)' : 'rgba(239,68,68,0.12)'};
                  border: 1px solid ${passColor};
                  border-radius:4px; padding:1px 8px;
                ">${passIcon} ${passText}</span>
              </div>
            </div>
          </div>

          <!-- Thống kê tiêu chí -->
          <div style="
            display:grid; grid-template-columns: 1fr 1fr 1fr;
            gap:6px;
            background: rgba(0,0,0,0.25);
            border-radius: 8px;
            padding: 8px 10px;
            border: 1px solid #1e293b;
          ">
            <div style="text-align:center;">
              <div style="font-size:16px; font-weight:bold; color:#60a5fa;">${itemsList.length}</div>
              <div style="font-size:9px; color:#64748b; text-transform:uppercase; letter-spacing:0.5px;">Tổng tiêu chí</div>
            </div>
            <div style="text-align:center; border-left:1px solid #1e293b; border-right:1px solid #1e293b;">
              <div style="font-size:16px; font-weight:bold; color:#4ade80;">✅ ${passedCount}</div>
              <div style="font-size:9px; color:#64748b; text-transform:uppercase; letter-spacing:0.5px;">Đạt</div>
            </div>
            <div style="text-align:center;">
              <div style="font-size:16px; font-weight:bold; color:#f87171;">❌ ${failedItems.length}</div>
              <div style="font-size:9px; color:#64748b; text-transform:uppercase; letter-spacing:0.5px;">Không đạt</div>
            </div>
          </div>

          <!-- Thông tin trang & từ khóa -->
          <div style="margin-top:10px; font-size:10px; display:flex; flex-direction:column; gap:4px; border-top:1px solid #1e293b; padding-top:8px;">
            <div style="display:flex; gap:6px; align-items:flex-start;">
              <span style="color:#64748b; white-space:nowrap;">🔗 Trang:</span>
              <strong style="color:#60a5fa; word-break:break-all;">${pageName}</strong>
            </div>
            <div style="display:flex; gap:6px; align-items:flex-start;">
              <span style="color:#64748b; white-space:nowrap;">🔑 Từ khóa:</span>
              <strong style="color:#fbbf24; word-break:break-all;">${config.keyword}</strong>
            </div>
          </div>

          ${isFullReport ? (() => {
          const aItems = itemsList.filter(i => !i.id.startsWith("B") && !i.id.startsWith("AI") && !i.id.startsWith("CrUX") && !i.id.startsWith("SERP"));
          const bItems = itemsList.filter(i => i.id.startsWith("B") || i.id.startsWith("AI") || i.id.startsWith("CrUX") || i.id.startsWith("SERP"));
          const aPass = aItems.filter(i => i.isPass).length;
          const bPass = bItems.filter(i => i.isPass).length;
          return `<div style="margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:6px; font-size:10px;">
              <div style="background:rgba(99,102,241,0.08); border:1px solid rgba(99,102,241,0.2); border-radius:6px; padding:6px 8px; display:flex; justify-content:space-between;">
                <span style="color:#a5b4fc;">Phần A (On-page):</span>
                <strong style="color:${aPass === aItems.length ? '#4ade80' : '#f87171'};">${aPass}/${aItems.length}</strong>
              </div>
              <div style="background:rgba(99,102,241,0.08); border:1px solid rgba(99,102,241,0.2); border-radius:6px; padding:6px 8px; display:flex; justify-content:space-between;">
                <span style="color:#a5b4fc;">Phần B (Advanced):</span>
                <strong style="color:${bPass === bItems.length ? '#4ade80' : '#f87171'};">${bPass}/${bItems.length}</strong>
              </div>
            </div>`;
        })() : ""}
        </div>

        <!-- CỘT LỖI CẦN KHẮC PHỤC -->
        <div style="pointer-events: auto;">
      `;

      let bodyHtml = "";

      if (failedItems.length === 0) {
        bodyHtml = `
            <div style="text-align:center; padding: 25px 15px; background:rgba(34, 197, 94, 0.08); border-radius:10px; border: 1px solid rgba(34, 197, 94, 0.3);">
              <div style="font-size: 24px; margin-bottom: 5px;">🎉</div>
              <strong style="color:#4ade80; font-size:13px; display:block; margin-bottom:5px;">Tuyệt vời! Không phát hiện lỗi SEO nào.</strong>
              <span style="color:#94a3b8; font-size:11px;">Trang đã đáp ứng đầy đủ ${itemsList.length} tiêu chuẩn SEO.</span>
            </div>
          </div>
        `;
      } else {
        // Nhóm lỗi theo group label gọn
        const groupLabels: Record<string, string> = {
          "Title": "Title",
          "Meta": "Meta Description",
          "Heading": "Heading Structure",
          "URL": "URL Structure",
          "Content": "Content",
          "Images": "Images",
          "Links": "Links",
          "Technical": "Technical SEO",
          "Mobile": "Mobile",
          "Performance": "Page Optimization",
          "Security": "Security",
          "B-Semantic": "B1 — Semantic SEO",
          "B-E-E-A-T": "B2 — E-E-A-T",
          "B-Schema": "B3 — Schema nâng cao",
          "B-Crawl": "B4 — Crawlability",
          "B-Linking": "B5 — Internal Linking",
          "B-Perf": "B6 — Performance",
          "B-UX": "B7 — UX Signals",
          "B-URL": "B8 — URL Consistency",
          "B-AI (Gemini)": "AI — Gemini Eval",
          "B-CrUX": "CrUX — Core Web Vitals",
          "B-SERP": "SERP — Competitor",
        };

        let groupedHtml = "";
        for (const group of groups) {
          const groupFailed = failedItems.filter(i => i.group === group);
          if (groupFailed.length === 0) continue;

          const groupPassCount = itemsList.filter(i => i.group === group && i.isPass).length;
          const groupTotal = itemsList.filter(i => i.group === group).length;
          const groupLabel = groupLabels[group] || group;
          const isAdvGroup = group.startsWith("B-") || group === "B-AI (Gemini)";

          groupedHtml += `
            <div style="margin-bottom:10px;">
              <div style="font-size:11px; font-weight:bold; color:${isAdvGroup ? '#a78bfa' : '#94a3b8'}; margin-bottom:6px; display:flex; justify-content:space-between; text-transform:uppercase; letter-spacing:0.5px; border-bottom: 1px solid #1e293b; padding-bottom: 4px;">
                <span>${groupLabel}</span>
                <span style="color:${groupPassCount === groupTotal ? '#4ade80' : '#f87171'};">${groupPassCount}/${groupTotal}</span>
              </div>
              ${groupFailed.map(item => `
                <div style="background:rgba(239, 68, 68, 0.05); padding:8px 10px; border-radius:6px; border: 1px solid rgba(239, 68, 68, 0.15); border-left: 4px solid #ef4444; margin-bottom:4px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:3px;">
                    <strong style="color:#f87171; font-size:11px;">${item.name}</strong>
                    <span style="font-size:9px; color:#f87171; background:rgba(239, 68, 68, 0.2); padding:2px 5px; border-radius:3px; font-weight:bold; white-space:nowrap; margin-left:6px;">${item.id}</span>
                  </div>
                  <div style="color:#cbd5e1; font-size:10px;">⚠️ ${item.err}</div>
                </div>
              `).join("")}
            </div>
          `;
        }

        bodyHtml = `
            <div style="font-weight:bold; font-size:12px; color:#f87171; margin-bottom:10px; text-transform:uppercase; letter-spacing:0.5px;">
              ❌ Chi tiết lỗi cần khắc phục (${failedItems.length}/${itemsList.length}):
            </div>
            ${groupedHtml}
          </div>
        `;
      }

      container.innerHTML = headerHtml + bodyHtml;
      document.body.appendChild(container);
    },
    { pageName, data, config: mergedConfig, advancedData: advancedData ?? null, threshold },
  );
}
