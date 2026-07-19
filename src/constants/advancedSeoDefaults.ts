// ==================== ADVANCED SEO DEFAULTS (PHẦN B) ====================
// Cấu hình mặc định cho các tiêu chí chuyên sâu — override được qua test data

export const DEFAULT_ADVANCED_SEO_CONFIG = {
  // ── B4. Crawlability & Indexability ──
  softErrorPatterns: [
    "404",
    "not found",
    "page not found",
    "trang không tồn tại",
    "không tìm thấy",
    "this page doesn't exist",
    "oops",
    "sorry",
  ],

  // ── B6. Performance ──
  maxTTFB: 800,          // ms — Time to First Byte tối đa
  maxDOMSize: 1500,      // Số phần tử DOM tối đa trước khi cảnh báo
  maxResourceHints: 10,  // Tối đa preload/preconnect để không lạm dụng
  lazyLoadThreshold: 80, // ≥ 80% ảnh below-fold cần loading="lazy"

  // ── B7. UX Signals ──
  minColorContrast: 4.5, // WCAG AA contrast ratio tối thiểu

  // ── B8. URL & Domain Consistency ──
  enforceTrailingSlash: false, // true = URL phải có trailing slash, false = không có
};
