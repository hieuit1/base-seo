import { test } from "../src/fixtures/baseTest";
import { allure } from "allure-playwright";
import { customStep, SeoScorecard } from "../src/utils/reportHelper";
import { seoTestData } from "../src/test-data/seoData";
import { SeoScanResult } from "../src/pages/SeoPage";

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

        // ⭐ Khởi tạo bộ chấm điểm SEO
        const scorecard = new SeoScorecard();

        // ── STEP 1: Truy cập trang ──
        await customStep(page, `1. Truy cập trang: ${data.name}`, async () => {
          await page.goto(data.path, { waitUntil: "domcontentloaded" });
        });

        // ── STEP 2: Quét toàn bộ dữ liệu SEO ──
        let scan: SeoScanResult;

        await customStep(page, "2. Quét toàn bộ dữ liệu Technical SEO", async () => {
          scan = await seoPage.scanSEOMetadata(data.keyword);
          await seoPage.injectVisualSEOReport(data.name, scan, data);
        });

        // ── STEP 3: Xác thực Title (A1.1–A1.4) ──
        await customStep(page, `3. Xác thực Title (${data.titleMinLength ?? 50}–${data.titleMaxLength ?? 60} ký tự)`, async () => {
          await seoPage.verifyTitle(scan!, data, scorecard);
        });

        // ── STEP 4: Xác thực Meta Description (A2.1–A2.3) ──
        await customStep(page, `4. Xác thực Meta Description (${data.metaDescMinLength ?? 120}–${data.metaDescMaxLength ?? 160} ký tự)`, async () => {
          await seoPage.verifyMetaDescription(scan!, data, scorecard);
        });

        // ── STEP 5: Xác thực Heading Structure (A3.1–A3.4) ──
        await customStep(page, "5. Xác thực cấu trúc Heading (H1 duy nhất + phân cấp)", async () => {
          await seoPage.verifyHeadingStructure(scan!, data, scorecard);
        });

        // ── STEP 6: Xác thực URL Structure (A4.1–A4.4) ──
        await customStep(page, "6. Xác thực URL (chữ thường, gạch ngang, keyword)", async () => {
          await seoPage.verifyUrlStructure(scan!, data, scorecard);
        });

        // ── STEP 7: Xác thực Nội dung (A5.1–A5.3) ──
        await customStep(page, `7. Xác thực Nội dung (≥ ${data.minWordCount ?? 300} từ, keyword density)`, async () => {
          await seoPage.verifyContent(scan!, data, scorecard);
        });

        // ── STEP 8: Xác thực Hình ảnh (A6.1–A6.4) ──
        await customStep(page, "8. Đảm bảo 100% hình ảnh có thẻ Alt + quality check", async () => {
          await seoPage.verifyImages(scan!, data, scorecard);
        });

        // ── STEP 9: Xác thực Liên kết (A7.1–A7.4) ──
        await customStep(page, "9. Xác thực Internal/External links + broken links", async () => {
          await seoPage.verifyLinks(scan!, scorecard);
        });

        // ── STEP 10: Xác thực Technical SEO (A8.1–A8.9) ──
        await customStep(page, "10. Xác thực Technical SEO (Canonical, Robots, Schema, OG, Twitter)", async () => {
          await seoPage.verifyTechnicalSeo(scan!, data, scorecard);
        });

        // ── STEP 11: Xác thực Mobile (A9.1) ──
        await customStep(page, "11. Xác thực Mobile (Viewport meta)", async () => {
          await seoPage.verifyMobile(scan!, scorecard);
        });

        // ── STEP 12: Xác thực Bảo mật (A11.1–A11.2) ──
        await customStep(page, "12. Xác thực Bảo mật (HTTPS + Mixed Content)", async () => {
          await seoPage.verifySecurity(scan!, scorecard);
        });

        // ── ⭐ STEP 13: CHỐT SỔ ĐIỂM SEO ──
        // Đây là nơi DUY NHẤT quyết định Test PASS hay FAIL
        await scorecard.finalizeScore(page, data.seoPassThreshold ?? 70);
      }
    );
  });
});
