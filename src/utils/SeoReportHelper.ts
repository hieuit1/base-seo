import { Page } from "@playwright/test";
import { SeoScanResult } from "../pages/SeoPage";
import { SeoPageTestData } from "../test-data/seoData";

/**
 * Inject bảng báo cáo SEO trực quan lên DOM — hiển thị trong screenshot.
 * Chỉ chỉ ra lỗi cần khắc phục và cung cấp phân tích tổng hợp cùng điểm số trực quan.
 */
export async function injectVisualSEOReport(
  page: Page,
  pageName: string,
  data: SeoScanResult,
  config: SeoPageTestData
): Promise<void> {
  await page.evaluate(
    ({ pageName, data, config }) => {
      const oldCard = document.getElementById("seo-report-card");
      if (oldCard) oldCard.remove();

      const minTitle = config.titleMinLength ?? 50;
      const maxTitle = config.titleMaxLength ?? 60;
      const minMeta = config.metaDescMinLength ?? 120;
      const maxMeta = config.metaDescMaxLength ?? 160;
      const minWordCount = config.minWordCount ?? 300;
      const densityMin = config.keywordDensityMin ?? 0.5;
      const densityMax = config.keywordDensityMax ?? 2.5;
      const urlMaxLength = config.urlMaxLength ?? 75;

      // 11 Nhóm Đánh giá
      const isTitleLengthOk = !!data.titleVal && data.titleVal.length >= minTitle && data.titleVal.length <= maxTitle;
      const isTitleKeywordOk = !!data.titleVal && data.titleVal.toLowerCase().includes(config.keyword.toLowerCase());
      const titleKeywordIndex = data.titleVal ? data.titleVal.toLowerCase().indexOf(config.keyword.toLowerCase()) : -1;
      const isTitleKeywordPositionOk = titleKeywordIndex >= 0 && titleKeywordIndex <= Math.floor(data.titleVal.length / 2);
      const isTitleOk = isTitleLengthOk && isTitleKeywordOk && isTitleKeywordPositionOk;

      const isMetaLengthOk = !!data.metaVal && data.metaVal.length >= minMeta && data.metaVal.length <= maxMeta;
      const isMetaKeywordOk = !!data.metaVal && data.metaVal.toLowerCase().includes(config.keyword.toLowerCase());
      const isMetaOk = isMetaLengthOk && isMetaKeywordOk;

      const isH1Ok = data.h1Texts.length === 1;
      const isH1KeywordOk = data.h1Texts.length > 0 && data.h1Texts[0].toLowerCase().includes(config.keyword.toLowerCase());
      const isHeadingOk = data.headingHierarchy.valid && data.allHeadings.some((h: any) => h.tag === "h2" || h.tag === "h3");

      const keywordSlug = config.keyword.toLowerCase().replace(/\s+/g, "-");
      const isUrlLengthOk = data.urlPath.length <= urlMaxLength;
      const isUrlKeywordOk = data.urlPath === "/" || data.urlPath === "" || data.urlPath.toLowerCase().includes(keywordSlug);
      const isUrlFormatOk = !data.urlPath.includes("_") && data.urlPath === data.urlPath.toLowerCase();
      const isUrlOk = isUrlLengthOk && isUrlKeywordOk && isUrlFormatOk;

      const isWordCountOk = data.wordCount >= minWordCount;
      const isDensityOk = data.keywordDensity >= densityMin && data.keywordDensity <= densityMax;
      const isFirst100WordsOk = data.first100Words.toLowerCase().includes(config.keyword.toLowerCase());
      const isContentOk = isWordCountOk && isDensityOk && isFirst100WordsOk;

      const isImagesAltOk = data.missingAltCount === 0;
      const hasKeywordAlt = data.images.some((img: any) => img.alt && img.alt.toLowerCase().includes(config.keyword.toLowerCase()));
      const isImagesOk = isImagesAltOk && (data.images.length === 0 || hasKeywordAlt) && data.imagesWithBadNames === 0;

      const isCanonicalOk = !!data.canonical && /^https?:\/\//.test(data.canonical);
      const isIndexable = !data.robots?.toLowerCase().includes("noindex");

      const hasOgTags = !!data.ogTitle && !!data.ogDesc;
      const hasTwitterTags = Object.keys(data.twitterTags).length > 0;
      const isSocialOk = hasOgTags && hasTwitterTags && data.hasSchema;

      const isMobileOk = data.hasViewport && !!data.lang && !!data.charset && data.hasFavicon;
      const isSecureOk = data.isHttps && data.mixedContent.length === 0;

      // Danh sách các tiêu chí tổng hợp
      const checkItems = [
        {
          id: "title",
          title: "Thẻ Title",
          isPass: isTitleOk,
          value: data.titleVal || "Không tìm thấy",
          errors: [
            !data.titleVal ? "Thiếu thẻ Title." : null,
            data.titleVal && !isTitleLengthOk ? `Độ dài không chuẩn: ${data.titleVal.length} ký tự (yêu cầu từ ${minTitle}-${maxTitle}).` : null,
            data.titleVal && !isTitleKeywordOk ? `Không chứa từ khóa chính: "${config.keyword}".` : null,
            data.titleVal && isTitleKeywordOk && !isTitleKeywordPositionOk ? "Từ khóa không nằm ở nửa đầu tiêu đề." : null,
          ].filter(Boolean) as string[],
        },
        {
          id: "metaDesc",
          title: "Thẻ Meta Description",
          isPass: isMetaOk,
          value: data.metaVal ? (data.metaVal.length > 80 ? data.metaVal.substring(0, 80) + "..." : data.metaVal) : "Không tìm thấy",
          errors: [
            !data.metaVal ? "Thiếu thẻ Meta Description." : null,
            data.metaVal && !isMetaLengthOk ? `Độ dài không chuẩn: ${data.metaVal.length} ký tự (yêu cầu từ ${minMeta}-${maxMeta}).` : null,
            data.metaVal && !isMetaKeywordOk ? `Không chứa từ khóa chính: "${config.keyword}".` : null,
          ].filter(Boolean) as string[],
        },
        {
          id: "headings",
          title: "Cấu trúc Thẻ Headings",
          isPass: isH1Ok && isH1KeywordOk && isHeadingOk,
          value: `H1: ${data.h1Texts.length} thẻ ・ Tổng: ${data.allHeadings.length} headings`,
          errors: [
            data.h1Texts.length === 0 ? "Không có thẻ H1." : null,
            data.h1Texts.length > 1 ? `Có nhiều thẻ H1 (${data.h1Texts.length} thẻ) - Chỉ được phép có 1 H1 duy nhất.` : null,
            data.h1Texts.length === 1 && !isH1KeywordOk ? `Thẻ H1 không chứa từ khóa "${config.keyword}".` : null,
            !data.headingHierarchy.valid ? `Lỗi phân cấp heading: ${data.headingHierarchy.issues.join("; ")}` : null,
            data.allHeadings.length > 0 && !data.allHeadings.some((h: any) => h.tag === "h2" || h.tag === "h3") ? "Trang nên có thêm thẻ H2 hoặc H3." : null,
          ].filter(Boolean) as string[],
        },
        {
          id: "url",
          title: "Cấu trúc Đường dẫn URL",
          isPass: isUrlOk,
          value: data.urlPath,
          errors: [
            !isUrlLengthOk ? `Đường dẫn quá dài: ${data.urlPath.length} ký tự (tối đa ${urlMaxLength}).` : null,
            !isUrlKeywordOk ? `Đường dẫn không chứa từ khóa viết dưới dạng slug: "${keywordSlug}".` : null,
            data.urlPath.includes("_") ? "Đường dẫn chứa dấu gạch dưới '_' thay vì gạch ngang '-'." : null,
            data.urlPath !== data.urlPath.toLowerCase() ? "Đường dẫn chứa ký tự viết hoa." : null,
          ].filter(Boolean) as string[],
        },
        {
          id: "content",
          title: "Chất lượng Nội dung",
          isPass: isContentOk,
          value: `${data.wordCount} từ ・ Mật độ keyword: ${data.keywordDensity.toFixed(2)}%`,
          errors: [
            !isWordCountOk ? `Số lượng từ quá ít: ${data.wordCount} từ (yêu cầu tối thiểu ${minWordCount} từ).` : null,
            !isDensityOk ? `Mật độ từ khóa (${data.keywordDensity.toFixed(2)}%) không tối ưu (yêu cầu ${densityMin}% - ${densityMax}%).` : null,
            !isFirst100WordsOk ? `100 từ đầu tiên không chứa từ khóa "${config.keyword}".` : null,
          ].filter(Boolean) as string[],
        },
        {
          id: "images",
          title: "Tối ưu Hình ảnh",
          isPass: isImagesOk,
          value: `${data.images.length} ảnh ・ Thiếu Alt: ${data.missingAltCount}`,
          errors: [
            data.missingAltCount > 0 ? `Có ${data.missingAltCount} hình ảnh thiếu thẻ 'alt'.` : null,
            data.images.length > 0 && !hasKeywordAlt ? `Không có hình ảnh nào chứa từ khóa "${config.keyword}" trong thẻ alt.` : null,
            data.imagesWithBadNames > 0 ? `Có ${data.imagesWithBadNames} ảnh có tên file vô nghĩa (dạng mã hash/ngẫu nhiên).` : null,
          ].filter(Boolean) as string[],
        },
        {
          id: "canonicalRobots",
          title: "Canonical & Robots",
          isPass: isCanonicalOk && isIndexable,
          value: `Robots: ${data.robots || "Mặc định Index"}`,
          errors: [
            !data.canonical ? "Thiếu thẻ <link rel='canonical'>." : null,
            data.canonical && !isCanonicalOk ? `Thẻ canonical không hợp lệ (phải là URL tuyệt đối): "${data.canonical}".` : null,
            !isIndexable ? "Trang đang có thuộc tính 'noindex' ngăn cản Google lập chỉ mục." : null,
          ].filter(Boolean) as string[],
        },
        {
          id: "socialOG",
          title: "Social Open Graph & Schema",
          isPass: isSocialOk,
          value: `Schema: ${data.hasSchema ? "Đã cài" : "Thiếu"}`,
          errors: [
            !hasOgTags ? "Thiếu thẻ Open Graph (og:title hoặc og:description)." : null,
            !hasTwitterTags ? "Thiếu Twitter Card meta tags." : null,
            !data.hasSchema ? "Thiếu cấu trúc Schema Markup (JSON-LD/Microdata)." : null,
          ].filter(Boolean) as string[],
        },
        {
          id: "mobileTech",
          title: "Di động & Kỹ thuật",
          isPass: isMobileOk,
          value: `Lang: ${data.lang || "Thiếu"} ・ Charset: ${data.charset || "Thiếu"}`,
          errors: [
            !data.hasViewport ? "Thiếu thẻ viewport để hỗ trợ responsive di động." : null,
            !data.lang ? "Thẻ html thiếu thuộc tính 'lang'." : null,
            !data.charset ? "Thiếu khai báo charset hoặc charset khác UTF-8." : null,
            !data.hasFavicon ? "Không tìm thấy Favicon." : null,
          ].filter(Boolean) as string[],
        },
        {
          id: "security",
          title: "Bảo mật & HTTPS",
          isPass: isSecureOk,
          value: `HTTPS: ${data.isHttps ? "Đã bật" : "Chưa bật"}`,
          errors: [
            !data.isHttps ? "Trang đang chạy giao thức HTTP không an toàn." : null,
            data.mixedContent.length > 0 ? `Phát hiện ${data.mixedContent.length} tài nguyên Mixed Content (tải qua HTTP trên trang HTTPS).` : null,
          ].filter(Boolean) as string[],
        },
      ];

      const failedItems = checkItems.filter(item => !item.isPass);
      const passedCount = checkItems.length - failedItems.length;
      const score = Math.round((passedCount / checkItems.length) * 100);

      // Định nghĩa màu sắc theo thang điểm Lighthouse
      let scoreColor = "#ef4444"; // Red (< 50)
      if (score >= 90) {
        scoreColor = "#22c55e"; // Green
      } else if (score >= 50) {
        scoreColor = "#eab308"; // Orange/Yellow
      }

      const container = document.createElement("div");
      container.id = "seo-report-card";
      container.style.cssText = `
        position:fixed; top:10px; right:10px; width:480px;
        background:#0f172a; color:#f8fafc; border: 2px solid ${scoreColor};
        border-radius:16px; box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.5);
        font-family:system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        padding:20px; z-index:9999999; pointer-events:none;
        max-height:92vh; overflow-y:auto; line-height:1.5;
      `;

      // Header & Circular Score Meter
      const headerHtml = `
        <div style="font-weight:bold; font-size:15px; margin-bottom:15px; border-bottom:1px solid #334155; padding-bottom:10px; display:flex; justify-content:space-between; align-items:center;">
          <span>🎯 BÁO CÁO SEO AUDIT</span>
          <span style="color:#94a3b8; font-size:11px;">Phần A: On-page cơ bản</span>
        </div>
        
        <div style="display:flex; justify-content:center; align-items:center; flex-direction:column; margin-bottom:20px; background: rgba(30, 41, 59, 0.5); padding: 15px; border-radius: 12px;">
          <div style="position:relative; width:90px; height:90px; border-radius:50%; background:conic-gradient(${scoreColor} ${score * 3.6}deg, #334155 0deg); display:flex; justify-content:center; align-items:center; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.2);">
            <div style="position:absolute; width:76px; height:76px; border-radius:50%; background:#0f172a; display:flex; justify-content:center; align-items:center; flex-direction:column;">
              <span style="font-size:26px; font-weight:bold; color:${scoreColor};">${score}</span>
              <span style="font-size:9px; color:#94a3b8; text-transform:uppercase; font-weight:bold; letter-spacing:1px;">SEO</span>
            </div>
          </div>
          <div style="margin-top:12px; font-weight:bold; color:${scoreColor}; font-size:13px; text-transform:uppercase; letter-spacing:0.5px;">
            ${score >= 90 ? 'TỐI ƯU HOÀN HẢO' : score >= 50 ? 'CẦN CẢI THIỆN THÊM' : 'CẢNH BÁO: SEO YẾU'}
          </div>
        </div>

        <div style="font-size:11px; margin-bottom:15px; padding: 10px; background: rgba(255,255,255,0.03); border-radius: 8px; border: 1px dashed #334155;">
          <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
            <span style="color:#94a3b8;">Trang phân tích:</span>
            <strong style="color:#60a5fa;">${pageName}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
            <span style="color:#94a3b8;">Từ khóa chính:</span>
            <strong style="color:#fbbf24;">${config.keyword}</strong>
          </div>
          <div style="display:flex; justify-content:space-between;">
            <span style="color:#94a3b8;">Kết quả tiêu chí:</span>
            <strong style="color:${scoreColor};">${passedCount}/${checkItems.length} ĐẠT</strong>
          </div>
        </div>
      `;

      let bodyHtml = "";

      if (failedItems.length === 0) {
        bodyHtml = `
          <div style="text-align:center; padding: 25px 15px; background:rgba(34, 197, 94, 0.08); border-radius:10px; border: 1px solid rgba(34, 197, 94, 0.3);">
            <div style="font-size: 24px; margin-bottom: 5px;">🎉</div>
            <strong style="color:#4ade80; font-size:13px; display:block; margin-bottom:5px;">Tuyệt vời! Không phát hiện lỗi SEO nào.</strong>
            <span style="color:#94a3b8; font-size:11px;">Trang của bạn đã đáp ứng đầy đủ các tiêu chuẩn SEO On-page cơ bản.</span>
          </div>
        `;
      } else {
        bodyHtml = `
          <div style="font-weight:bold; font-size:12px; color:#f87171; margin-bottom:10px; text-transform:uppercase; letter-spacing:0.5px;">
            ❌ Lỗi cần khắc phục (${failedItems.length}):
          </div>
          <div style="display:flex; flex-direction:column; gap:8px;">
            ${failedItems.map(item => `
              <div style="background:rgba(239, 68, 68, 0.05); padding:10px 12px; border-radius:8px; border-left:4px solid #ef4444; border: 1px solid rgba(239, 68, 68, 0.15); border-left-width: 4px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                  <strong style="color:#f87171; font-size:12px;">${item.title}</strong>
                  <span style="font-size:10px; color:#cbd5e1; background:rgba(239, 68, 68, 0.2); padding:2px 6px; border-radius:4px; font-weight:bold;">LỖI</span>
                </div>
                <div style="color:#94a3b8; font-size:11px; word-break:break-all; background:rgba(0,0,0,0.15); padding:6px; border-radius:4px; margin-bottom:6px;">
                  Hiện tại: <i>${item.value || "Không tìm thấy/Trống"}</i>
                </div>
                <ul style="margin: 0; padding-left: 15px; color:#cbd5e1; font-size:11px;">
                  ${item.errors.map(err => `<li style="margin-bottom:2px;">${err}</li>`).join("")}
                </ul>
              </div>
            `).join("")}
          </div>
        `;
      }

      container.innerHTML = headerHtml + bodyHtml;
      document.body.appendChild(container);
    },
    { pageName, data, config }
  );
}
