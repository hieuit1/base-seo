export interface SeoPageTestData {
  name: string;
  path: string;
  keyword: string;
  expectIndexable?: boolean;
  checkSocialOg?: boolean;
  priority: string;
  severity: string;
  titleMinLength?: number;
  titleMaxLength?: number;
  metaDescMinLength?: number;
  metaDescMaxLength?: number;
  minWordCount?: number;
  keywordDensityMin?: number;
  keywordDensityMax?: number;
  urlMaxLength?: number;
  seoPassThreshold?: number;
  lsiKeywords?: string[];
  minReadabilityScore?: number;
  maxImageSizeKb?: number;
  modernImageRatio?: number;
  languages?: string[]; // Thêm ngôn ngữ hỗ trợ (VD: ['vi', 'en'])
  checkCoreWebVitals?: boolean; // Bật/tắt gọi PageSpeed API

  // ═══════ PHẦN B: Tiêu chuẩn chuyên sâu (ADVANCED) ═══════
  checkAdvanced?: boolean;            // Bật/tắt kiểm tra Phần B (default: false)
  checkEEAT?: boolean;               // B2: Kiểm tra E-E-A-T signals
  expectedSchemaTypes?: string[];     // B3: Schema types kỳ vọng ['Product', 'BreadcrumbList', ...]
  checkPerformance?: boolean;         // B6: Kiểm tra performance metrics
  maxTTFB?: number;                   // B6: Override TTFB tối đa (ms)
  maxDOMSize?: number;                // B6: Override DOM size tối đa
  checkAccessibility?: boolean;       // B7: Kiểm tra UX/Accessibility signals
  enforceTrailingSlash?: boolean;     // B8: Enforce trailing slash consistency
  advancedPassThreshold?: number;     // Ngưỡng pass riêng cho Phần B (default: 60)
  maxThirdPartyScripts?: number;      // B6.8: Số lượng third-party script domains tối đa (default: 5)
  anchorDiversityThreshold?: number;  // B5.4: Tỷ lệ anchor text unique tối thiểu % (default: 70)
}

export const seoTestData: SeoPageTestData[] = [
  {
    name: "Trang chủ (Home Page)",
    path: "/",
    keyword: "Thuê văn phòng Bình Dương", // ← Thay bằng keyword thực tế
    expectIndexable: true,
    checkSocialOg: true,
    checkCoreWebVitals: true,
    priority: "critical",
    severity: "blocker",
  },

  // ── Thêm trang khác tại đây ──────────────────────────
  {
    name: "Giới thiệu",
    path: "/gioi-thieu",
    keyword: "Giới thiệu văn phòng Bình Dương",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "high",
    severity: "critical",
  },
  {
    name: "Dịch vụ",
    path: "/dich-vu",
    keyword: "Dịch vụ văn phòng",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "high",
    severity: "critical",
  },
  {
    name: "Văn phòng cho thuê",
    path: "/van-phong-cho-thue",
    keyword: "Văn phòng cho thuê Bình Dương",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "high",
    severity: "critical",
  },
  {
    name: "Cho thuê văn phòng cao cấp",
    path: "/van-phong-cao-cap",
    keyword: "Cho thuê văn phòng cao cấp",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "high",
    severity: "critical",
  },
  {
    name: "Cho thuê văn phòng sáng tạo",
    path: "/van-phong-sang-tao",
    keyword: "Cho thuê văn phòng sáng tạo",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "high",
    severity: "critical",
  },
  {
    name: "Văn phòng trọn gói",
    path: "/van-phong-tron-goi",
    keyword: "Văn phòng trọn gói",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "high",
    severity: "critical",
  },
  {
    name: "Văn phòng truyền thống",
    path: "/van-phong-truyen-thong",
    keyword: "Văn phòng truyền thống",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "medium",
    severity: "normal",
  },
  {
    name: "Phòng họp cho thuê theo giờ",
    path: "/phong-hop-cho-thue-theo-gio",
    keyword: "Phòng họp cho thuê theo giờ",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "high",
    severity: "critical",
  },
  {
    name: "Thuê phòng họp theo giờ",
    path: "/thue-phong-hop-theo-gio",
    keyword: "Thuê phòng họp theo giờ Bình Dương",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "high",
    severity: "critical",
  },
  {
    name: "Setup dịch vụ văn phòng",
    path: "/setup-dich-vu-van-phong",
    keyword: "Setup dịch vụ văn phòng",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "medium",
    severity: "normal",
  },
  {
    name: "Tiện ích",
    path: "/tien-ich",
    keyword: "Tiện ích tòa nhà văn phòng",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "medium",
    severity: "normal",
  },
  {
    name: "Hoạt động",
    path: "/hoat-dong",
    keyword: "Hoạt động sự kiện văn phòng",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "medium",
    severity: "normal",
  },
  {
    name: "Liên hệ",
    path: "/lien-he",
    keyword: "Liên hệ thuê văn phòng",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "high",
    severity: "critical",
  },
  {
    name: "Chính sách bảo mật",
    path: "/chinh-sach-bao-mat",
    keyword: "Chính sách bảo mật",
    expectIndexable: true,
    checkSocialOg: false,
    priority: "low",
    severity: "normal",
  },
  {
    name: "Chính sách hỗ trợ",
    path: "/chinh-sach-ho-tro",
    keyword: "Chính sách hỗ trợ khách hàng",
    expectIndexable: true,
    checkSocialOg: false,
    priority: "low",
    severity: "normal",
  },
  {
    name: "Chính sách tư vấn",
    path: "/chinh-sach-tu-van",
    keyword: "Chính sách tư vấn",
    expectIndexable: true,
    checkSocialOg: false,
    priority: "low",
    severity: "normal",
  },
  {
    name: "Chính sách chăm sóc",
    path: "/chinh-sac-cham-soc",
    keyword: "Chính sách chăm sóc khách hàng",
    expectIndexable: true,
    checkSocialOg: false,
    priority: "low",
    severity: "normal",
  },
  {
    name: "Chương trình huấn luyện tại tòa nhà BM Tower",
    path: "/cuoc-hop-chien-luoc",
    keyword: "Chương trình huấn luyện BM Tower",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "medium",
    severity: "normal",
  },
  {
    name: "Gắn kết đội ngũ",
    path: "/gan-ket-doi-ngu",
    keyword: "Hoạt động gắn kết đội ngũ",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "medium",
    severity: "normal",
  },
  {
    name: "Thuyết trình đỉnh cao",
    path: "/thuyet-trinh-dinh-cao",
    keyword: "Kỹ năng thuyết trình đỉnh cao",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "medium",
    severity: "normal",
  }
];
