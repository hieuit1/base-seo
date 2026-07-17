import { Page } from "@playwright/test";
import { SeoScanResult } from "../pages/SeoPage";
import { SeoPageTestData } from "../test-data/seoData";

/**
 * Inject bảng báo cáo SEO trực quan lên DOM — hiển thị trong screenshot.
 * Bao gồm tất cả 11 nhóm PHẦN A.
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

      const container = document.createElement("div");
      container.id = "seo-report-card";
      container.style.cssText = `
        position:fixed; top:10px; right:10px; width:520px;
        background:rgba(15,23,42,0.98); color:#f8fafc;
        border-radius:12px; box-shadow:0 25px 50px -12px rgba(0,0,0,0.5);
        font-family:system-ui,sans-serif; padding:20px; z-index:9999999;
        pointer-events:none; max-height:95vh; overflow-y:auto; line-height:1.4;
      `;

      const minTitle = config.titleMinLength ?? 50;
      const maxTitle = config.titleMaxLength ?? 60;
      const minMeta = config.metaDescMinLength ?? 120;
      const maxMeta = config.metaDescMaxLength ?? 160;

      // Đánh giá các tiêu chí
      const isTitleOk = !!data.titleVal && data.titleVal.length >= minTitle && data.titleVal.length <= maxTitle;
      const isMetaOk = !!data.metaVal && data.metaVal.length >= minMeta && data.metaVal.length <= maxMeta;
      const isH1Ok = data.h1Texts.length === 1;
      const isHeadingOk = data.headingHierarchy.valid && data.allHeadings.some((h: any) => h.tag === "h2" || h.tag === "h3");
      const isUrlOk = data.urlPath === data.urlPath.toLowerCase() && !data.urlPath.includes("_");
      const isContentOk = data.wordCount >= (config.minWordCount ?? 300);
      const isImagesOk = data.missingAltCount === 0;
      const isCanonicalOk = !!data.canonical;
      const isIndexable = !data.robots?.toLowerCase().includes("noindex");
      const hasOgTags = !!data.ogTitle && !!data.ogDesc;
      const isMobileOk = data.hasViewport;
      const isSecureOk = data.isHttps && data.mixedContent.length === 0;

      const checks = [isTitleOk, isMetaOk, isH1Ok, isHeadingOk, isUrlOk, isContentOk, isImagesOk, isCanonicalOk, isIndexable, hasOgTags, isMobileOk, isSecureOk];
      const passCount = checks.filter(Boolean).length;
      const allPass = passCount === checks.length;

      container.style.border = `2px solid ${allPass ? '#22c55e' : '#ef4444'}`;

      const renderRow = (label: string, value: string, isPass: boolean, detail: string) => `
        <div style="background:rgba(255,255,255,0.03); padding:8px 10px; border-radius:6px; border-left:4px solid ${isPass ? '#22c55e' : '#ef4444'}; margin-bottom:6px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2px;">
            <strong style="color:#cbd5e1; font-size:12px;">${label}</strong>
            <span style="font-size:13px;">${isPass ? '✅' : '❌'}</span>
          </div>
          <div style="color:${isPass ? '#4ade80' : '#f87171'}; font-size:11px; word-break:break-word; margin-bottom:2px;">${value || "Không tìm thấy!"}</div>
          <div style="color:#94a3b8; font-size:10px;">📌 ${detail}</div>
        </div>`;

      container.innerHTML = `
        <div style="font-weight:bold; font-size:14px; margin-bottom:10px; border-bottom:1px solid #334155; padding-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
          <span>🎯 SEO AUDIT — PHẦN A</span>
          <span style="color:${allPass ? '#22c55e' : '#ef4444'}; font-size:11px; font-weight:bold;">${passCount}/${checks.length} ${allPass ? 'HOÀN HẢO' : 'CẦN TỐI ƯU'}</span>
        </div>
        <div style="font-size:11px; margin-bottom:10px; color:#94a3b8;">
          <strong>Trang:</strong> <span style="color:#60a5fa;">${pageName}</span> ・<strong>Keyword:</strong> <span style="color:#fbbf24;">${config.keyword}</span>
        </div>
        ${renderRow("1. Title (" + minTitle + "–" + maxTitle + " ký tự)", data.titleVal ? data.titleVal + " (" + data.titleVal.length + " ký tự)" : "", isTitleOk, "Độ dài tối ưu hiển thị trên Google Search.")}
        ${renderRow("2. Meta Description (" + minMeta + "–" + maxMeta + " ký tự)", data.metaVal ? data.metaVal.substring(0, 80) + "... (" + data.metaVal.length + " ký tự)" : "", isMetaOk, "Tránh bị cắt xén nội dung mô tả.")}
        ${renderRow("3. Heading H1 (Duy nhất)", data.h1Texts.length > 0 ? data.h1Texts.length + ' thẻ: "' + data.h1Texts[0] + '"' : "Không có H1", isH1Ok && isHeadingOk, "1 H1 duy nhất + phân cấp H2/H3 hợp lý.")}
        ${renderRow("4. URL Structure", data.urlPath, isUrlOk, "Chữ thường, dùng gạch ngang, không gạch dưới.")}
        ${renderRow("5. Nội dung", data.wordCount + " từ ・Keyword density: " + data.keywordDensity.toFixed(2) + "%", isContentOk, "Tối thiểu " + (config.minWordCount ?? 300) + " từ.")}
        ${renderRow("6. Hình ảnh Alt", data.missingAltCount === 0 ? "100% ảnh có Alt (" + data.images.length + " ảnh)" : data.missingAltCount + "/" + data.images.length + " ảnh thiếu Alt", isImagesOk, "SEO hình ảnh và hỗ trợ khiếm thị.")}
        ${renderRow("7. Liên kết", "Internal: " + data.internalLinks.length + " ・External: " + data.externalLinks.length, data.internalLinks.length > 0, "Cần có internal links.")}
        ${renderRow("8. Canonical & Robots", (data.canonical || "Thiếu") + " ・" + (data.robots || "Mặc định Index"), isCanonicalOk && isIndexable, "Chống trùng lặp + cho phép index.")}
        ${renderRow("9. Social OG + Schema", (hasOgTags ? "OG ✓" : "OG ✗") + " ・" + (data.hasSchema ? "Schema ✓" : "Schema ✗") + " ・" + (Object.keys(data.twitterTags).length > 0 ? "Twitter ✓" : "Twitter ✗"), hasOgTags && data.hasSchema, "Tối ưu chia sẻ mạng xã hội + rich snippets.")}
        ${renderRow("10. Mobile & Technical", "Viewport: " + (data.hasViewport ? "✓" : "✗") + " ・Lang: " + (data.lang || "✗") + " ・Charset: " + (data.charset || "✗") + " ・Favicon: " + (data.hasFavicon ? "✓" : "✗"), isMobileOk && !!data.lang && !!data.charset && data.hasFavicon, "Viewport, lang, charset UTF-8, favicon.")}
        ${renderRow("11. Bảo mật", "HTTPS: " + (data.isHttps ? "✓" : "✗") + " ・Mixed content: " + data.mixedContent.length, isSecureOk, "HTTPS bắt buộc + không mixed content.")}
      `;
      document.body.appendChild(container);
    },
    { pageName, data, config }
  );
}
