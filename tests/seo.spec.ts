import { test } from "../src/fixtures/baseTest";
import { allure } from "allure-playwright";
import { customStep, SeoScorecard } from "../src/utils/reportHelper";
import { seoTestData } from "../src/test-data/seoData";
import { SeoScanResult } from "../src/interfaces/SeoScanResult";
import { DEFAULT_SEO_CONFIG } from "../src/constants/seoDefaults";
import { PageSpeedService } from "../src/services/PageSpeedService";

test.describe("SEO TIÊU CHUẨN CƠ BẢN CHO WEB", () => {
  test.describe.configure({ mode: "parallel" });

  test.beforeEach(async () => {
    await allure.epic("SEO Optimization");
    await allure.feature("Tiêu chuẩn cơ bản (parse HTML tĩnh)");
  });

  // Duyệt qua mảng dữ liệu để tạo ra các test cases tự động (Data-driven)
  seoTestData.forEach((data) => {
    test(
      `Kiểm tra SEO Onpage: ${data.name}`,
      {
        tag: [
          "@seo",
          `@priority:${data.priority}`,
          "@regression",
          "@smoke",
        ],
        annotation: [{ type: "severity", description: data.severity }],
      },
      async ({ page, seoPage }) => {
        await allure.story(`Phân tích SEO chuyên sâu: ${data.name}`);

        const config = { ...DEFAULT_SEO_CONFIG, ...data };

        const scorecard = new SeoScorecard();
        const pageSpeedService = new PageSpeedService();

        // ── KÍCH HOẠT API SONG SONG NGAY TỪ ĐẦU ──
        const fullUrl = new URL(config.path, process.env.BASE_URL as string).href;
        const vitalsPromise = config.checkCoreWebVitals !== false
            ? (async () => {
                const mobile = await pageSpeedService.getCoreWebVitals(fullUrl, "mobile");
                // Delay nhỏ để tránh bị Google block (Rate Limit) do gửi 2 requests cùng lúc
                await new Promise(resolve => setTimeout(resolve, 1000));
                const desktop = await pageSpeedService.getCoreWebVitals(fullUrl, "desktop");
                return { mobile, desktop };
              })()
            : Promise.resolve({ mobile: null, desktop: null });

        // ── STEP 1: Truy cập trang ──
        let navigationResponse: any;
        await customStep(page, `1. Truy cập trang: ${config.name}`, async () => {
          navigationResponse = await page.goto(config.path, { waitUntil: "domcontentloaded" });
        });

        // ── STEP 2: Quét toàn bộ dữ liệu SEO & Tốc độ ──
        let scan: SeoScanResult;
        let vitals: any = null;
        let localMetrics: any = null;

        await customStep(page, "2. Quét toàn bộ dữ liệu Technical SEO & Performance", async () => {
          const rawHtml = navigationResponse ? await navigationResponse.text() : undefined;
          const passedHeaders = navigationResponse ? navigationResponse.headers() : undefined;
          
          const scanPromise = seoPage.scanSEOMetadata(config.keyword, rawHtml, passedHeaders);
          const localMetricsPromise = seoPage.getLocalPerformanceMetrics();
          
          const [scanResult, vitalsResult, localMetricsResult] = await Promise.all([
            scanPromise, 
            vitalsPromise,
            localMetricsPromise
          ]);
          
          scan = scanResult;
          vitals = vitalsResult;
          localMetrics = localMetricsResult;

          scan.vitals = vitals;
          scan.localMetrics = localMetrics;

          await seoPage.injectVisualSEOReport(config.name, scan, config);
        });

        await customStep(page, `3. Xác thực Title (${config.titleMinLength}–${config.titleMaxLength} ký tự)`, async () => {
          await seoPage.verifyTitle(scan!, config, scorecard);
        });

        await customStep(page, `4. Xác thực Meta Description (${config.metaDescMinLength}–${config.metaDescMaxLength} ký tự)`, async () => {
          await seoPage.verifyMetaDescription(scan!, config, scorecard);
        });

        await customStep(page, "5. Xác thực cấu trúc Heading (H1 duy nhất + phân cấp)", async () => {
          await seoPage.verifyHeadingStructure(scan!, config, scorecard);
        });

        await customStep(page, "6. Xác thực URL (chữ thường, gạch ngang, keyword)", async () => {
          await seoPage.verifyUrlStructure(scan!, config, scorecard);
        });

        await customStep(page, `7. Xác thực Nội dung (≥ ${config.minWordCount} từ, keyword density, không trùng lặp)`, async () => {
          await seoPage.verifyContent(scan!, config, scorecard);
        });

        await customStep(page, "8. Đảm bảo 100% hình ảnh có thẻ Alt + quality check", async () => {
          await seoPage.verifyImages(scan!, config, scorecard);
        });

        await customStep(page, "9. Xác thực Internal/External links + broken links + redirect chain", async () => {
          await seoPage.verifyLinks(scan!, scorecard);
        });

        await customStep(page, "10. Xác thực Technical SEO (Canonical, Robots, Schema, OG, Twitter, Hreflang)", async () => {
          await seoPage.verifyTechnicalSeo(scan!, config, scorecard);
        });

        await customStep(page, "11. Xác thực Mobile (Viewport, Font size, Touch targets)", async () => {
          await seoPage.verifyMobile(scan!, scorecard);
        });

        await customStep(page, "12. Xác thực Tối ưu hoá (Gzip/Brotli, Cache, Minify CSS)", async () => {
          await seoPage.verifyPageOptimization(scan!, scorecard);
        });

        await customStep(page, "13. Xác thực Tốc độ tải trang & Core Web Vitals", async () => {
          await seoPage.verifyPerformance(vitals, localMetrics, scorecard);
        });

        await customStep(page, "14. Xác thực Bảo mật (HTTPS + Mixed Content)", async () => {
          await seoPage.verifySecurity(scan!, scorecard);
        });

        await scorecard.finalizeScore(page, config.seoPassThreshold ?? 70);
      }
    );
  });
});
