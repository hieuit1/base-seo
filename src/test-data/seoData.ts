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
}

/**
 * 📌 Danh sách các trang cần kiểm tra SEO.
 *    Path sẽ tự nối với BASE_URL trong .env
 *    Thêm/sửa/xóa entry tùy ý.
 */
export const seoTestData: SeoPageTestData[] = [
  {
    name: "Trang chủ (Home Page)",
    path: "/",
    keyword: "TỪ-KHÓA-CHÍNH", // ← Thay bằng keyword thực tế
    expectIndexable: true,
    checkSocialOg: true,
    priority: "critical",
    severity: "blocker",
  },

  // ── Thêm trang khác tại đây ──────────────────────────
  {
    name: "Tất cả sản phẩm",
    path: "/collections/tat-ca-san-pham",
    keyword: "san pham",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "high",
    severity: "critical",
    titleMinLength: 40,
    titleMaxLength: 65,
  },
  {
    name: "Áo khoác",
    path: "/collections/ao-khoac",
    keyword: "áo khoác",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "high",
    severity: "critical",
    titleMinLength: 40,
    titleMaxLength: 65,
  },
  {
    name: "Áo len",
    path: "/collections/ao-len",
    keyword: "áo len",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "high",
    severity: "critical",
    titleMinLength: 40,
    titleMaxLength: 65,
  },
  {
    name: "Áo ni - sweater",
    path: "/collections/ao-ni-sweater",
    keyword: "áo ni - sweater",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "high",
    severity: "critical",
    titleMinLength: 40,
    titleMaxLength: 65,
  },
  {
    name: "Áo sơ mi",
    path: "/collections/ao-somi",
    keyword: "áo sơ mi",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "high",
    severity: "critical",
    titleMinLength: 40,
    titleMaxLength: 65,
  },
  {
    name: "Áo polo",
    path: "/collections/ao-somi",
    keyword: "áo polo",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "high",
    severity: "critical",
    titleMinLength: 40,
    titleMaxLength: 65,
  },
  {
    name: "Áo thun",
    path: "/collections/ao-thun",
    keyword: "áo thun",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "high",
    severity: "critical",
    titleMinLength: 40,
    titleMaxLength: 65,
  },
  {
    name: "Ba lô",
    path: "/collections/ba-lo",
    keyword: "ba lô",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "high",
    severity: "critical",
    titleMinLength: 40,
    titleMaxLength: 65,
  },
];
