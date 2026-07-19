// ==================== ADVANCED SEO TEST DATA (PHẦN B) ====================
// Test data data-driven cho Phần B — kế thừa và mở rộng data Phần A

import { SeoPageTestData, seoTestData } from "./seoData";

/**
 * Tạo test data cho Phần B bằng cách overlay config Advanced lên data Phần A.
 * Mỗi trang đã có trong seoTestData sẽ tự động được bật kiểm tra Advanced.
 */
export const advancedSeoTestData: SeoPageTestData[] = seoTestData.map(
  (data) => ({
    ...data,
    // Bật tất cả nhóm check Advanced
    checkAdvanced: true,
    checkEEAT: true,
    checkPerformance: true,
    checkAccessibility: true,
    // Schema types mặc định — override riêng cho từng trang nếu cần
    expectedSchemaTypes: ["Organization", "BreadcrumbList"],
    // Ngưỡng pass riêng cho Phần B (dễ hơn Phần A vì nhiều tiêu chí khó)
    advancedPassThreshold: 60,
  })
);
