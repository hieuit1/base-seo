import { Page } from "@playwright/test";
import * as allure from "allure-js-commons";

// ==================== CUSTOM STEP (giữ nguyên) ====================

export async function customStep(
    page: Page,
    stepName: string,
    action: () => Promise<void>
): Promise<void> {
    await allure.step(stepName, async () => {
        try {
            await action();
        } finally {
            // Đảm bảo luôn đính kèm bằng chứng hình ảnh kể cả khi bước test thành công hay thất bại
            const screenshot = await page.screenshot({ fullPage: false });
            await allure.attachment(`Ảnh chụp: ${stepName}`, screenshot, "image/png");
        }
    });
}

// ==================== SEO SCORECARD ====================

interface ScorecardFailure {
    step: string;
    message: string;
}

/**
 * Hệ thống chấm điểm SEO — thay thế hoàn toàn expect.soft().
 *
 * Cơ chế:
 *   • check()         → Ghi nhận PASS/FAIL từng tiêu chí, hiển thị ✅/❌ trên Allure
 *                        nhưng KHÔNG làm sập Test Case.
 *   • finalizeScore() → Tổng kết điểm. Nếu dưới ngưỡng mới quăng Error duy nhất → FAIL test.
 */
export class SeoScorecard {
    private totalChecks = 0;
    private passedChecks = 0;
    private failures: ScorecardFailure[] = [];

    /**
     * Wrap 1 tiêu chí SEO con vào allure.step().
     *
     * @param stepName    — Tên hiển thị trên Allure (VD: "A1.1 — Title phải có nội dung")
     * @param condition   — true = PASS, false = FAIL
     * @param errorMessage — Mô tả lỗi khi condition = false
     */
    async check(
        stepName: string,
        condition: boolean,
        errorMessage: string
    ): Promise<void> {
        this.totalChecks++;

        if (condition) {
            // ✅ PASS — step tự nhiên hiện xanh trên Allure
            this.passedChecks++;
            await allure.step(`✅ ${stepName}`, async () => {
                // Step rỗng → Allure tự đánh PASS
            });
        } else {
            // ❌ FAIL — ép Allure hiện đỏ nhưng KHÔNG crash test
            this.failures.push({ step: stepName, message: errorMessage });
            try {
                await allure.step(`❌ ${stepName}`, async () => {
                    await allure.attachment(
                        "Chi tiết lỗi",
                        Buffer.from(errorMessage, "utf-8"),
                        "text/plain"
                    );
                    throw new Error(errorMessage); // Ép Allure đánh ❌ cho step này
                });
            } catch {
                // Nuốt lỗi — test tiếp tục chạy bình thường
            }
        }
    }

    /** Lấy điểm hiện tại (0–100) */
    get score(): number {
        if (this.totalChecks === 0) return 100;
        return Math.round((this.passedChecks / this.totalChecks) * 100);
    }

    /** Lấy thống kê chi tiết */
    get stats() {
        return {
            total: this.totalChecks,
            passed: this.passedChecks,
            failed: this.totalChecks - this.passedChecks,
            score: this.score,
            failures: [...this.failures],
        };
    }

    /**
     * 🏆 CHỐT SỔ — Gọi ở cuối test để quyết định PASS/FAIL.
     *
     * • score >= threshold → Test PASS (xanh), hiện bảng điểm đẹp.
     * • score <  threshold → Quăng Error duy nhất → Test FAIL (đỏ).
     *
     * Đây là nơi DUY NHẤT trong toàn bộ hệ thống quăng lỗi thật.
     */
    async finalizeScore(page: Page, threshold = 70): Promise<void> {
        const { total, passed, failed, score, failures } = this.stats;

        // Xác định trạng thái
        const isPass = score >= threshold;
        const statusText = isPass ? "PASS" : "FAIL";

        // Thang điểm SEO mới
        let scoreLabel: string;
        let statusIcon: string;
        if (score >= 93) {
            scoreLabel = "XUẤT SẮC";
            statusIcon = "💎";
        } else if (score >= 77) {
            scoreLabel = "TỐT";
            statusIcon = "🟢";
        } else if (score >= 65) {
            scoreLabel = "KHÁ";
            statusIcon = "🟡";
        } else if (score >= 50) {
            scoreLabel = "TRUNG BÌNH";
            statusIcon = "🟠";
        } else {
            scoreLabel = "KÉM";
            statusIcon = "🔴";
        }

        // Tạo báo cáo tổng kết dạng text
        const summaryLines = [
            `══════════════════════════════════════`,
            `   ${statusIcon} KẾT QUẢ CHẤM ĐIỂM SEO`,
            `══════════════════════════════════════`,
            `   Điểm số:     ${score}/100`,
            `   Đánh giá:    ${scoreLabel}`,
            `   Ngưỡng đạt:  ${threshold}%`,
            `   Kết quả:     ${statusText}`,
            `──────────────────────────────────────`,
            `   Tổng tiêu chí:  ${total}`,
            `   ✅ Đạt:          ${passed}`,
            `   ❌ Không đạt:    ${failed}`,
            `══════════════════════════════════════`,
        ];

        if (failures.length > 0) {
            summaryLines.push(``, `📋 CHI TIẾT LỖI:`);
            failures.forEach((f, i) => {
                summaryLines.push(`   ${i + 1}. [${f.step}]`);
                summaryLines.push(`      → ${f.message}`);
            });
        }

        const summaryText = summaryLines.join("\n");

        // Step cuối cùng — hiển thị bảng điểm + quyết định PASS/FAIL
        await customStep(
            page,
            `13. 🏆 Kết quả chấm điểm SEO: ${score}/100 — ${statusText} (${scoreLabel})`,
            async () => {
                // Đính kèm bảng điểm text
                await allure.attachment(
                    "Bảng điểm SEO",
                    Buffer.from(summaryText, "utf-8"),
                    "text/plain"
                );

                // Gắn description vào Test Case trên Allure
                await allure.description(
                    `[${statusText}] Điểm SEO: ${score}/100 | Đạt: ${passed}/${total} tiêu chí | Ngưỡng: ${threshold}%\n\n` +
                    `${scoreLabel}`
                );

                // 🚀 ĐÂY LÀ DÒNG DUY NHẤT quyết định Test PASS hay FAIL
                if (!isPass) {
                    throw new Error(
                        `❌ FAIL — Điểm SEO ${score}/100 dưới ngưỡng ${threshold}%. ` +
                        `Có ${failed}/${total} tiêu chí không đạt.`
                    );
                }
            }
        );
    }
}