import { test } from "../src/fixtures/baseTest";
import { allure } from "allure-playwright";
import { customStep, SeoScorecard } from "../src/utils/reportHelper";
import { advancedSeoTestData } from "../src/test-data/advancedSeoData";
import { SeoScanResult } from "../src/pages/SeoPage";
import { AdvancedSeoScanResult } from "../src/pages/AdvancedSeoPage";
import { DEFAULT_SEO_CONFIG } from "../src/constants/seoDefaults";

test.describe("SEO TIÊU CHUẨN CHUYÊN SÂU (ADVANCED) — PHẦN B", () => {
  test.describe.configure({ mode: "parallel" });

  test.beforeEach(async () => {
    await allure.epic("SEO Optimization");
    await allure.feature("Tiêu chuẩn chuyên sâu (Advanced — Phần B)");
  });

  // Data-driven: tạo test case cho mỗi trang trong advancedSeoTestData
  advancedSeoTestData.forEach((data) => {
    test(
      `[Advanced] Kiểm tra SEO chuyên sâu: ${data.name}`,
      {
        tag: [
          "@seo-advanced",
          `@priority:${data.priority}`,
          "@regression",
        ],
        annotation: [{ type: "severity", description: data.severity }],
      },
      async ({ page, advancedSeoPage }) => {
        await allure.story(`Phân tích SEO chuyên sâu (Phần B): ${data.name}`);

        const config = { ...DEFAULT_SEO_CONFIG, ...data };
        const scorecard = new SeoScorecard();

        // ── STEP 1: Truy cập trang ──
        await customStep(page, `1. Truy cập trang: ${config.name}`, async () => {
          await page.goto(config.path, { waitUntil: "domcontentloaded" });
        });

        // ── STEP 2: Quét dữ liệu SEO cơ bản (reuse Phần A) ──
        let baseScan: SeoScanResult;
        await customStep(page, "2. Quét dữ liệu SEO cơ bản (Phần A)", async () => {
          baseScan = await advancedSeoPage.scanSEOMetadata(config.keyword);
        });

        // ── STEP 3: Quét dữ liệu SEO chuyên sâu (Phần B) ──
        let advScan: AdvancedSeoScanResult;
        await customStep(page, "3. Quét dữ liệu SEO chuyên sâu (Phần B)", async () => {
          advScan = await advancedSeoPage.scanAdvancedSEO(baseScan!, config);
          await advancedSeoPage.injectAdvancedVisualSEOReport(config.name, advScan, config);
        });

        // ── STEP 4: E-E-A-T ──
        if (data.checkEEAT !== false) {
          await customStep(page, "4. Xác thực E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)", async () => {
            await advancedSeoPage.verifyEEAT(advScan!, config, scorecard);
          });
        }

        // ── STEP 5: Schema nâng cao ──
        await customStep(page, "5. Xác thực Schema Markup nâng cao", async () => {
          await advancedSeoPage.verifyAdvancedSchema(advScan!, config, scorecard);
        });

        // ── STEP 6: Crawlability & Indexability ──
        await customStep(page, "6. Xác thực Crawlability & Indexability", async () => {
          await advancedSeoPage.verifyCrawlability(advScan!, baseScan!, config, scorecard);
        });

        // ── STEP 7: Internal Linking ──
        await customStep(page, "7. Xác thực Internal Linking hệ thống", async () => {
          await advancedSeoPage.verifyInternalLinking(advScan!, scorecard);
        });

        // ── STEP 8: Performance ──
        if (data.checkPerformance !== false) {
          await customStep(page, "8. Xác thực Performance (TTFB, DOM Size, HTTP/2, Lazy Load)", async () => {
            await advancedSeoPage.verifyPerformanceAdvanced(advScan!, config, scorecard);
          });
        }

        // ── STEP 9: UX Signals ──
        if (data.checkAccessibility !== false) {
          await customStep(page, "9. Xác thực UX Signals (Interstitials, Ads, ARIA, Focus)", async () => {
            await advancedSeoPage.verifyUXSignals(advScan!, scorecard);
          });
        }

        // ── STEP 10: URL & Domain Consistency ──
        await customStep(page, "10. Xác thực URL & Domain Consistency (WWW, HTTPS, HSTS)", async () => {
          await advancedSeoPage.verifyUrlConsistency(advScan!, scorecard);
        });

        // ── STEP 11: Phase 2 API Verification (LLM, CrUX, SerpAPI) ──
        await customStep(page, "11. Xác thực qua API (Semantic, Core Web Vitals, SERP)", async () => {
          await advancedSeoPage.verifySemanticSEO(advScan!, scorecard);
          await advancedSeoPage.verifyCoreWebVitalsAPI(advScan!, scorecard);
          await advancedSeoPage.verifySerpData(advScan!, scorecard);
        });

        // ── STEP 12: Tổng kết điểm ──
        await scorecard.finalizeScore(page, config.advancedPassThreshold ?? 60);
      }
    );
  });
});
