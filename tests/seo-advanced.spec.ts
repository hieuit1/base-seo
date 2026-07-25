import { test } from "../src/fixtures/baseTest";
import { allure } from "allure-playwright";
import { customStep, SeoScorecard } from "../src/utils/reportHelper";
import { advancedSeoTestData } from "../src/test-data/advancedSeoData";
import { SeoScanResult } from "../src/interfaces/SeoScanResult";
import { AdvancedSeoScanResult } from "../src/pages/AdvancedSeoPage";
import { DEFAULT_SEO_CONFIG } from "../src/constants/seoDefaults";
import { PageSpeedService } from "../src/services/PageSpeedService";
import { SerpService } from "../src/services/SerpService";
import { LLMService } from "../src/services/LLMService";

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

        // ── KÍCH HOẠT API SONG SONG NGAY TỪ ĐẦU ──
        const fullUrl = new URL(config.path, process.env.BASE_URL as string).href;
        
        const pageSpeedService = new PageSpeedService();
        const serpService = new SerpService();
        const llmService = new LLMService();

        const vitalsPromise = config.checkCoreWebVitals !== false && pageSpeedService.isAvailable()
            ? pageSpeedService.getCoreWebVitals(fullUrl)
            : Promise.resolve(null);
            
        const serpPromise = serpService.isAvailable()
            ? serpService.analyzeSerp(new URL(fullUrl).hostname, config.keyword)
            : Promise.resolve(null);

        // ── STEP 1: Truy cập trang ──
        let navigationResponse: any;
        await customStep(page, `1. Truy cập trang: ${config.name}`, async () => {
          navigationResponse = await page.goto(config.path, { waitUntil: "domcontentloaded" });
        });

        // Kích hoạt LLM song song với parse DOM vì đã có pageContent
        const pageContent = await page.evaluate(() => document.body.innerText);
        const llmPromise = llmService.isAvailable()
            ? llmService.evaluateContentQuality(config.keyword, pageContent)
            : Promise.resolve(null);

        // ── STEP 2: Quét dữ liệu SEO cơ bản (reuse Phần A) ──
        let baseScan: SeoScanResult;
        await customStep(page, "2. Quét dữ liệu SEO cơ bản (Phần A)", async () => {
          const rawHtml = navigationResponse ? await navigationResponse.text() : undefined;
          const passedHeaders = navigationResponse ? navigationResponse.headers() : undefined;
          baseScan = await advancedSeoPage.scanSEOMetadata(config.keyword, rawHtml, passedHeaders);
        });

        // ── STEP 3: Quét dữ liệu SEO chuyên sâu (Phần B) ──
        let advScan: AdvancedSeoScanResult;
        await customStep(page, "3. Quét dữ liệu SEO chuyên sâu (Phần B) và chờ APIs", async () => {
          const [contentEval, cwVitals, serpData] = await Promise.all([llmPromise, vitalsPromise, serpPromise]);
          
          advScan = await advancedSeoPage.scanAdvancedSEO(baseScan!, config, {
            contentEvaluation: contentEval,
            coreWebVitals: cwVitals,
            serpData: serpData
          });
          await advancedSeoPage.injectAdvancedVisualSEOReport(config.name, advScan, config);
        });

        // ── STEP 4: B1 Semantic SEO cơ bản (Search Intent + E-E-A-T từ Gemini) ──
        await customStep(page, "4. B1 — Semantic SEO: Search Intent & E-E-A-T (Gemini)", async () => {
          await advancedSeoPage.verifySemanticSEO(advScan!, scorecard);
        });

        // ── STEP 4.5: B1 Semantic SEO nâng cao (Entity, TF-IDF, Featured Snippet, PAA) ──
        await customStep(page, "4.5. B1 — Semantic SEO Nâng cao: Entity / TF-IDF / Featured Snippet / PAA", async () => {
          await advancedSeoPage.verifySemanticSEOAdvanced(advScan!, scorecard);
        });

        // ── STEP 5: E-E-A-T ──
        if (data.checkEEAT !== false) {
          await customStep(page, "5. B2 — Xác thực E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)", async () => {
            await advancedSeoPage.verifyEEAT(advScan!, config, scorecard);
          });
        }

        // ── STEP 6: Schema nâng cao (bao gồm B3.6 consistency) ──
        await customStep(page, "6. B3 — Xác thực Schema Markup nâng cao (types, fields, consistency)", async () => {
          await advancedSeoPage.verifyAdvancedSchema(advScan!, config, scorecard);
        });

        // ── STEP 7: Crawlability & Indexability ──
        await customStep(page, "7. B4 — Xác thực Crawlability & Indexability", async () => {
          await advancedSeoPage.verifyCrawlability(advScan!, baseScan!, config, scorecard);
        });

        // ── STEP 8: Internal Linking (B5.1-B5.3) ──
        await customStep(page, "8. B5 — Xác thực Internal Linking hệ thống (Breadcrumb, TOC)", async () => {
          await advancedSeoPage.verifyInternalLinking(advScan!, scorecard);
        });

        // ── STEP 8.5: B5.4 Anchor Text Diversity ──
        await customStep(page, "8.5. B5.4 — Xác thực Anchor Text Diversity", async () => {
          await advancedSeoPage.verifyAnchorDiversity(advScan!, config, scorecard);
        });

        // ── STEP 9: Performance (B6.1-B6.7) ──
        if (data.checkPerformance !== false) {
          await customStep(page, "9. B6 — Xác thực Performance (TTFB, DOM Size, HTTP/2, Lazy Load, Font, srcset)", async () => {
            await advancedSeoPage.verifyPerformanceAdvanced(advScan!, config, scorecard);
          });
        }

        // ── STEP 9.5: B6.8 Third-party Scripts ──
        await customStep(page, "9.5. B6.8 — Xác thực Third-party Script Impact", async () => {
          await advancedSeoPage.verifyThirdPartyImpact(advScan!, config, scorecard);
        });

        // ── STEP 10: UX Signals ──
        if (data.checkAccessibility !== false) {
          await customStep(page, "10. B7 — Xác thực UX Signals (Interstitials, Ads, ARIA, Focus)", async () => {
            await advancedSeoPage.verifyUXSignals(advScan!, scorecard);
          });
        }

        // ── STEP 11: URL & Domain Consistency ──
        await customStep(page, "11. B8 — Xác thực URL & Domain Consistency (WWW, HTTPS, HSTS)", async () => {
          await advancedSeoPage.verifyUrlConsistency(advScan!, scorecard);
        });

        // ── STEP 12: Phase 2 API Verification (LLM, CrUX, SerpAPI) ──
        await customStep(page, "12. Phase 2 API — Core Web Vitals (CrUX) & SERP Analysis", async () => {
          await advancedSeoPage.verifyCoreWebVitalsAPI(advScan!, scorecard);
          await advancedSeoPage.verifySerpData(advScan!, scorecard);
        });

        // ── STEP 13: Tổng kết điểm ──
        await scorecard.finalizeScore(page, config.advancedPassThreshold ?? 60);
      }
    );
  });
});
