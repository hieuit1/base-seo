import { test } from "../src/fixtures/baseTest";
import { allure } from "allure-playwright";
import { customStep, SeoScorecard } from "../src/utils/reportHelper";
import { seoTestData } from "../src/test-data/seoData";
import { SeoScanResult } from "../src/pages/SeoPage";
import { DEFAULT_SEO_CONFIG } from "../src/constants/seoDefaults";

test.describe("SEO TIÊU CHUẨN CƠ BẢN CHO WEB", () => {
  test.beforeEach(async () => {
    await allure.epic("SEO Optimization");
    await allure.feature("PHẦN A — Tiêu chuẩn cơ bản (parse HTML tĩnh)");
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

        // ── STEP 1: Truy cập trang ──
        await customStep(page, `1. Truy cập trang: ${config.name}`, async () => {
          await page.goto(config.path, { waitUntil: "domcontentloaded" });
        });

        // ── STEP 2: Quét toàn bộ dữ liệu SEO ──
        let scan: SeoScanResult;

        await customStep(page, "2. Quét toàn bộ dữ liệu Technical SEO", async () => {
          scan = await seoPage.scanSEOMetadata(config.keyword);
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

        await customStep(page, `7. Xác thực Nội dung (≥ ${config.minWordCount} từ, keyword density)`, async () => {
          await seoPage.verifyContent(scan!, config, scorecard);
        });

        await customStep(page, "8. Đảm bảo 100% hình ảnh có thẻ Alt + quality check", async () => {
          await seoPage.verifyImages(scan!, config, scorecard);
        });

        await customStep(page, "9. Xác thực Internal/External links + broken links", async () => {
          await seoPage.verifyLinks(scan!, scorecard);
        });

        await customStep(page, "10. Xác thực Technical SEO (Canonical, Robots, Schema, OG, Twitter)", async () => {
          await seoPage.verifyTechnicalSeo(scan!, config, scorecard);
        });

        await customStep(page, "11. Xác thực Mobile (Viewport meta)", async () => {
          await seoPage.verifyMobile(scan!, scorecard);
        });

        await customStep(page, "12. Xác thực Bảo mật (HTTPS + Mixed Content)", async () => {
          await seoPage.verifySecurity(scan!, scorecard);
        });

        await scorecard.finalizeScore(page, config.seoPassThreshold ?? 70);
      }
    );
  });
});
