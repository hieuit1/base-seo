import { Page } from "@playwright/test";
import { AdvancedSeoScanResult } from "../pages/AdvancedSeoPage";
import { SeoPageTestData } from "../test-data/seoData";
import { DEFAULT_ADVANCED_SEO_CONFIG } from "../constants/advancedSeoDefaults";

/**
 * Inject bảng báo cáo SEO chuyên sâu (Phần B) lên DOM.
 * Hiển thị bên trái viewport (bù vị trí với bảng Phần A ở bên phải).
 */
export async function injectAdvancedVisualSEOReport(
  page: Page,
  pageName: string,
  data: AdvancedSeoScanResult,
  config: SeoPageTestData
): Promise<void> {
  await page.evaluate(
    ({ pageName, data, config }) => {
      const oldCard = document.getElementById("seo-advanced-report-card");
      if (oldCard) oldCard.remove();

      // ── Định nghĩa các tiêu chí check ──
      const itemsList: { id: string; group: string; name: string; isPass: boolean; err: string }[] = [];

      // B2. E-E-A-T
      itemsList.push({
        id: "B2.1", group: "E-E-A-T",
        name: `Thông tin tác giả: ${data.hasAuthorInfo ? "Có" : "Thiếu"}`,
        isPass: data.hasAuthorInfo,
        err: "Thiếu thông tin tác giả"
      });
      itemsList.push({
        id: "B2.2", group: "E-E-A-T",
        name: `Ngày đăng (datePublished): ${data.hasDatePublished ? "Có" : "Thiếu"}`,
        isPass: data.hasDatePublished,
        err: "Thiếu ngày đăng bài"
      });
      itemsList.push({
        id: "B2.3", group: "E-E-A-T",
        name: `Ngày cập nhật (dateModified): ${data.hasDateModified ? "Có" : "Thiếu"}`,
        isPass: data.hasDateModified,
        err: "Thiếu ngày cập nhật"
      });
      const existingTrust = data.trustPages.filter(p => p.exists);
      itemsList.push({
        id: "B2.4", group: "E-E-A-T",
        name: `Trust Pages: ${existingTrust.length}/${data.trustPages.length} tồn tại`,
        isPass: existingTrust.length >= 2,
        err: `Chỉ ${existingTrust.length} trust pages`
      });
      itemsList.push({
        id: "B2.5", group: "E-E-A-T",
        name: `External Citations: ${data.externalCitations} link`,
        isPass: data.externalCitations > 0,
        err: "Không có external link dẫn nguồn"
      });

      // B3. Schema nâng cao
      const expectedTypes = config.expectedSchemaTypes || [];
      if (expectedTypes.length > 0) {
        const missing = expectedTypes.filter(t => !data.schemaAnalysis.types.includes(t));
        itemsList.push({
          id: "B3.1", group: "Schema",
          name: `Schema types: [${data.schemaAnalysis.types.join(", ")}]`,
          isPass: missing.length === 0,
          err: `Thiếu types: ${missing.join(", ")}`
        });
      } else {
        itemsList.push({
          id: "B3.1", group: "Schema",
          name: `Schema types: ${data.schemaAnalysis.types.length} types`,
          isPass: data.schemaAnalysis.types.length > 0,
          err: "Không có Schema"
        });
      }
      itemsList.push({
        id: "B3.2", group: "Schema",
        name: `Schema required fields`,
        isPass: data.schemaAnalysis.hasRequiredFields,
        err: data.schemaAnalysis.issues.join("; ")
      });
      itemsList.push({
        id: "B3.3", group: "Schema",
        name: `Schema cú pháp (${data.schemaAnalysis.issues.length} lỗi)`,
        isPass: data.schemaAnalysis.issues.length === 0,
        err: data.schemaAnalysis.issues.join("; ")
      });
      itemsList.push({
        id: "B3.4", group: "Schema",
        name: `BreadcrumbList Schema: ${data.schemaAnalysis.types.includes("BreadcrumbList") ? "Có" : "Thiếu"}`,
        isPass: data.schemaAnalysis.types.includes("BreadcrumbList"),
        err: "Thiếu BreadcrumbList Schema"
      });

      // B4. Crawlability
      itemsList.push({
        id: "B4.1", group: "Crawlability",
        name: `Soft 404: ${data.isSoft404 ? "Phát hiện!" : "Không"}`,
        isPass: !data.isSoft404,
        err: "Trang là soft 404"
      });
      itemsList.push({
        id: "B4.2", group: "Crawlability",
        name: `X-Robots-Tag: ${data.xRobotsTag || "Không có"}`,
        isPass: !data.xRobotsTag || !data.xRobotsTag.toLowerCase().includes("noindex"),
        err: `X-Robots-Tag chặn index`
      });
      itemsList.push({
        id: "B4.3", group: "Crawlability",
        name: `Canonical khớp URL: ${data.canonicalMatchesUrl ? "✔" : "✘"}`,
        isPass: data.canonicalMatchesUrl,
        err: "Canonical không khớp URL hiện tại"
      });

      // B5. Internal Linking
      itemsList.push({
        id: "B5.1", group: "Linking",
        name: `Breadcrumb: ${data.hasBreadcrumb ? "Có" : "Thiếu"}`,
        isPass: data.hasBreadcrumb,
        err: "Thiếu breadcrumb"
      });
      itemsList.push({
        id: "B5.2", group: "Linking",
        name: `Breadcrumb Schema: ${data.breadcrumbSchema ? "Có" : "Thiếu"}`,
        isPass: data.breadcrumbSchema,
        err: "Thiếu BreadcrumbList Schema"
      });

      // B6. Performance
      const maxTTFB = config.maxTTFB || 800;
      const maxDOM = config.maxDOMSize || 1500;
      const perf = data.performance;

      itemsList.push({
        id: "B6.1", group: "Performance",
        name: `TTFB: ${perf.ttfb}ms (max: ${maxTTFB}ms)`,
        isPass: perf.ttfb <= maxTTFB,
        err: `TTFB quá cao: ${perf.ttfb}ms`
      });
      itemsList.push({
        id: "B6.2", group: "Performance",
        name: `DOM Size: ${perf.domSize} (max: ${maxDOM})`,
        isPass: perf.domSize <= maxDOM,
        err: `DOM quá lớn: ${perf.domSize}`
      });
      const isH2Plus = perf.httpVersion.includes("h2") || perf.httpVersion.includes("h3");
      itemsList.push({
        id: "B6.3", group: "Performance",
        name: `HTTP: ${perf.httpVersion}`,
        isPass: isH2Plus,
        err: `Đang dùng ${perf.httpVersion}`
      });
      itemsList.push({
        id: "B6.4", group: "Performance",
        name: `Resource Hints: preload=${perf.preloadCount}, preconnect=${perf.preconnectCount}`,
        isPass: perf.hasPreload || perf.hasPreconnect,
        err: "Thiếu resource hints"
      });
      const lazyRatio = perf.totalBelowFoldImages > 0 ? (perf.lazyLoadedImages / perf.totalBelowFoldImages * 100) : 100;
      itemsList.push({
        id: "B6.5", group: "Performance",
        name: `Lazy Load: ${perf.lazyLoadedImages}/${perf.totalBelowFoldImages} (${lazyRatio.toFixed(0)}%)`,
        isPass: lazyRatio >= 80,
        err: `Chỉ ${lazyRatio.toFixed(0)}% lazy`
      });
      itemsList.push({
        id: "B6.6", group: "Performance",
        name: `Font: swap=${perf.fontDisplaySwap ? "✔" : "✘"}, preload=${perf.preloadedFonts}`,
        isPass: perf.fontDisplaySwap || perf.preloadedFonts > 0,
        err: "Font chưa tối ưu"
      });
      const responsiveRatio = perf.totalImages > 0 ? (perf.responsiveImages / perf.totalImages * 100) : 100;
      itemsList.push({
        id: "B6.7", group: "Performance",
        name: `Responsive Images: ${perf.responsiveImages}/${perf.totalImages} (${responsiveRatio.toFixed(0)}%)`,
        isPass: responsiveRatio >= 50,
        err: `Chỉ ${responsiveRatio.toFixed(0)}% có srcset`
      });

      // B7. UX Signals
      itemsList.push({
        id: "B7.1", group: "UX",
        name: `Interstitials: ${data.hasIntrusiveInterstitials ? "Phát hiện!" : "Không"}`,
        isPass: !data.hasIntrusiveInterstitials,
        err: "Có popup che content"
      });
      itemsList.push({
        id: "B7.2", group: "UX",
        name: `Above-fold Ads: ${data.aboveFoldAdCount}`,
        isPass: data.aboveFoldAdCount <= 1,
        err: `Quá nhiều ad: ${data.aboveFoldAdCount}`
      });
      itemsList.push({
        id: "B7.3", group: "UX",
        name: `ARIA thiếu: ${data.missingAriaLabels} phần tử`,
        isPass: data.missingAriaLabels <= 3,
        err: `${data.missingAriaLabels} phần tử thiếu ARIA`
      });
      itemsList.push({
        id: "B7.4", group: "UX",
        name: `Focus Styles: ${data.hasFocusStyles ? "Có" : "Thiếu"}`,
        isPass: data.hasFocusStyles,
        err: "Thiếu focus styles"
      });

      // B8. URL Consistency
      itemsList.push({
        id: "B8.1", group: "URL",
        name: `WWW Redirect: ${data.wwwRedirectOk ? "OK" : "Lỗi"}`,
        isPass: data.wwwRedirectOk,
        err: "www redirect sai"
      });
      itemsList.push({
        id: "B8.2", group: "URL",
        name: `HTTPS Redirect: ${data.httpsRedirectOk ? "OK" : "Lỗi"}`,
        isPass: data.httpsRedirectOk,
        err: "HTTPS redirect sai"
      });
      itemsList.push({
        id: "B8.3", group: "URL",
        name: `Trailing Slash: ${data.trailingSlashConsistent ? "OK" : "Lỗi"}`,
        isPass: data.trailingSlashConsistent,
        err: "Trailing slash không nhất quán"
      });
      itemsList.push({
        id: "B8.4", group: "URL",
        name: `HSTS: ${data.hasHSTS ? "Có" : "Thiếu"}`,
        isPass: data.hasHSTS,
        err: "Thiếu HSTS header"
      });

      // ── Tính toán điểm ──
      const failedItems = itemsList.filter(item => !item.isPass);
      const passedCount = itemsList.length - failedItems.length;
      const score = Math.round((passedCount / itemsList.length) * 100);

      let scoreColor = "#ef4444";
      let scoreLabel = "KÉM";
      if (score >= 93) {
        scoreColor = "#22c55e";
        scoreLabel = "XUẤT SẮC";
      } else if (score >= 77) {
        scoreColor = "#3b82f6";
        scoreLabel = "TỐT";
      } else if (score >= 65) {
        scoreColor = "#eab308";
        scoreLabel = "KHÁ";
      } else if (score >= 50) {
        scoreColor = "#f97316";
        scoreLabel = "TRUNG BÌNH";
      }

      // ── Nhóm lỗi theo category ──
      const groups = [...new Set(itemsList.map(i => i.group))];

      // ── Render HTML ──
      const container = document.createElement("div");
      container.id = "seo-advanced-report-card";
      container.style.cssText = `
        position:fixed; top:10px; left:10px; width:600px;
        background:#0a0f1e; color:#f8fafc; border: 2px solid ${scoreColor};
        border-radius:16px; box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.5);
        font-family:system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        padding:20px; z-index:9999998; pointer-events:none;
        max-height:92vh; overflow-y:auto; line-height:1.5;
      `;

      const headerHtml = `
        <div style="font-weight:bold; font-size:15px; margin-bottom:15px; border-bottom:1px solid #1e293b; padding-bottom:10px; display:flex; justify-content:space-between; align-items:center;">
          <span>🔬 BÁO CÁO SEO CHUYÊN SÂU</span>
          <span style="color:#94a3b8; font-size:11px;">Phần B: Advanced</span>
        </div>
        
        <div style="display: grid; grid-template-columns: 180px 1fr; gap: 16px; align-items: start;">
          <!-- CỘT TRÁI: ĐIỂM SỐ -->
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="display:flex; justify-content:center; align-items:center; flex-direction:column; background: rgba(30, 41, 59, 0.5); padding: 15px; border-radius: 12px;">
              <div style="position:relative; width:80px; height:80px; border-radius:50%; background:conic-gradient(${scoreColor} ${score * 3.6}deg, #1e293b 0deg); display:flex; justify-content:center; align-items:center;">
                <div style="position:absolute; width:66px; height:66px; border-radius:50%; background:#0a0f1e; display:flex; justify-content:center; align-items:center; flex-direction:column;">
                  <span style="font-size:22px; font-weight:bold; color:${scoreColor};">${score}</span>
                  <span style="font-size:8px; color:#94a3b8; text-transform:uppercase; font-weight:bold; letter-spacing:1px;">ADV</span>
                </div>
              </div>
              <div style="margin-top:10px; font-weight:bold; color:${scoreColor}; font-size:12px; text-transform:uppercase; letter-spacing:0.5px; text-align:center;">
                ${scoreLabel}
              </div>
            </div>

            <div style="font-size:11px; padding: 10px; background: rgba(255,255,255,0.03); border-radius: 8px; border: 1px dashed #1e293b; display: flex; flex-direction: column; gap: 4px;">
              <div>
                <div style="color:#94a3b8; margin-bottom: 2px;">Trang:</div>
                <strong style="color:#818cf8; word-break:break-all; font-size:10px;">${pageName}</strong>
              </div>
              <div style="border-top: 1px solid #1e293b; padding-top: 4px; display:flex; justify-content:space-between;">
                <span style="color:#94a3b8;">Đạt:</span>
                <strong style="color:${scoreColor};">${passedCount}/${itemsList.length}</strong>
              </div>
            </div>
          </div>

          <!-- CỘT PHẢI: NHÓM TIÊU CHÍ -->
          <div style="max-height: 72vh; overflow-y: auto; padding-right: 4px; pointer-events: auto;">
      `;

      let bodyHtml = "";

      if (failedItems.length === 0) {
        bodyHtml = `
            <div style="text-align:center; padding: 20px; background:rgba(34, 197, 94, 0.08); border-radius:10px; border: 1px solid rgba(34, 197, 94, 0.3);">
              <div style="font-size: 22px; margin-bottom: 5px;">🏆</div>
              <strong style="color:#4ade80; font-size:12px;">Advanced SEO — Hoàn hảo!</strong>
            </div>
          </div>
        </div>
        `;
      } else {
        // Group failed items by category
        let groupedHtml = "";
        for (const group of groups) {
          const groupItems = failedItems.filter(i => i.group === group);
          if (groupItems.length === 0) continue;

          const groupPassCount = itemsList.filter(i => i.group === group && i.isPass).length;
          const groupTotal = itemsList.filter(i => i.group === group).length;

          groupedHtml += `
            <div style="margin-bottom:10px;">
              <div style="font-size:11px; font-weight:bold; color:#94a3b8; margin-bottom:6px; display:flex; justify-content:space-between; text-transform:uppercase; letter-spacing:0.5px;">
                <span>${group}</span>
                <span style="color:${groupPassCount === groupTotal ? '#4ade80' : '#f87171'};">${groupPassCount}/${groupTotal}</span>
              </div>
              ${groupItems.map(item => `
                <div style="background:rgba(239, 68, 68, 0.05); padding:8px 10px; border-radius:6px; border: 1px solid rgba(239, 68, 68, 0.15); border-left: 3px solid #ef4444; margin-bottom:4px;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="color:#f87171; font-size:11px; font-weight:600;">${item.name}</span>
                    <span style="font-size:9px; color:#f87171; background:rgba(239, 68, 68, 0.2); padding:1px 5px; border-radius:3px; font-weight:bold;">${item.id}</span>
                  </div>
                  <div style="color:#cbd5e1; font-size:10px; margin-top:2px;">⚠️ ${item.err}</div>
                </div>
              `).join("")}
            </div>
          `;
        }

        bodyHtml = `
            <div style="font-weight:bold; font-size:11px; color:#f87171; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.5px;">
              ❌ Lỗi cần khắc phục (${failedItems.length}):
            </div>
            ${groupedHtml}
          </div>
        </div>
        `;
      }

      container.innerHTML = headerHtml + bodyHtml;
      document.body.appendChild(container);
    },
    { pageName, data, config }
  );
}
