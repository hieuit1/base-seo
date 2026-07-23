# 🚀 Base SEO Automation Framework (Playwright + TypeScript)

Đây là bộ khung nền tảng (**Boilerplate Framework**) kiểm thử tự động SEO Onpage chuyên sâu được xây dựng trên sự kết hợp giữa **Playwright** và **TypeScript**. Khác với các công cụ SEO truyền thống chỉ parse HTML tĩnh, framework này sử dụng trình duyệt thật (Chromium) để render JavaScript, giúp quét chính xác dữ liệu của các trang SPA (Single Page Application) hiện đại.

Dự án cung cấp bộ checklist chấm điểm SEO Onpage toàn diện, xuất báo cáo trực quan qua **Allure Report**, và có khả năng tích hợp **AI (LLM)** để đánh giá chất lượng nội dung chuyên sâu (E-E-A-T).

---

## 🌟 Tính Năng Nổi Bật (Key Features)

*   **Chấm Điểm SEO Tự Động (SEO Scorecard):** Quét và chấm điểm trang web theo thang điểm 100 dựa trên checklist SEO chuẩn. Cảnh báo lỗi ngay lập tức nếu điểm số dưới ngưỡng cho phép.
*   **Playwright Browser Rendering:** Khả năng render và trích xuất dữ liệu trên các website nặng về JS (React, Vue, Angular) thay vì chỉ đọc mã nguồn tĩnh.
*   **Bộ Checklist SEO Chuyên Sâu (Part A & Part B):**
    *   **Cơ bản:** Title, Meta Description, Headings (H1-H6), URL, Canonical, Schema markup, Open Graph, Twitter Card.
    *   **Content:** Đếm số từ, tính toán chuẩn Keyword Density (ngay cả với long-tail keywords), nhận diện từ khoá LSI, đo điểm đọc hiểu Flesch.
    *   **Images:** Kiểm tra thuộc tính `alt`, tỷ lệ định dạng ảnh hiện đại (`WebP`/`AVIF`), bắt lỗi ảnh quá nặng (vượt `maxImageSizeKb`), tên file vô nghĩa, khai báo kích thước (tránh CLS).
    *   **Links:** Internal/External links, cảnh báo Broken links.
*   **Tích hợp AI/LLM (`LLMService`):** Hỗ trợ gọi API OpenAI (hoặc LLM khác) để phân tích chất lượng bài viết theo Search Intent và chuẩn E-E-A-T.
*   **Báo cáo Allure chuyên nghiệp (Allure Reports):** Hiển thị kết quả kiểm thử, lỗi SEO kèm theo ảnh chụp màn hình minh hoạ chi tiết.
*   **Data-Driven Testing (`seoData.ts`):** Dễ dàng mở rộng test cho hàng loạt URLs với cấu hình linh hoạt (từ khoá, ngưỡng dung lượng ảnh, mật độ từ khoá,...).

---

## 📁 Cấu Trúc Thư Mục Lõi (Core Architecture)

Cây thư mục của dự án được tổ chức khoa học:

```text
base-seo/
├── .github/
│   └── workflows/
│       └── playwright-ci.yml   # Workflow GitHub Actions chạy CI/CD
├── src/
│   ├── config/               # Chứa các file .env cấu hình môi trường
│   ├── constants/            # Cấu hình ngưỡng chuẩn SEO (seoDefaults.ts)
│   ├── pages/
│   │   ├── BasePage.ts       # Kế thừa thao tác Playwright cơ bản
│   │   └── SeoPage.ts        # Chứa toàn bộ logic trích xuất DOM và xác thực Checklist SEO
│   ├── services/
│   │   └── LLMService.ts     # Tích hợp AI đánh giá nội dung (E-E-A-T)
│   ├── test-data/
│   │   └── seoData.ts        # Data-driven config (Khai báo URLs, Keywords, Rules cần check)
│   └── utils/
│       ├── reportHelper.ts   # Helper tạo báo cáo Allure (SeoScorecard)
│       └── stringHelper.ts   # Các hàm hỗ trợ xử lý chuỗi
├── tests/
│   ├── seo.spec.ts           # Kịch bản chạy test SEO chuẩn cơ bản (Part A)
│   └── seo-advanced.spec.ts  # Kịch bản chạy test SEO nâng cao (Part B)
├── package.json              # Quản lý thư viện phụ thuộc
└── playwright.config.ts      # Tệp cấu hình trung tâm cho Playwright
```

---

## 🛠️ Yêu Cầu Hệ Thống (Prerequisites)

*   **Node.js**: Phiên bản LTS (từ `18.x.x` hoặc mới hơn).
*   **NPM**: Trình quản lý gói.
*   **Java Development Kit (JDK)**: Phiên bản `8` trở lên (bắt buộc để xem báo cáo **Allure Report**).

---

## 🚀 Hướng Dẫn Cài Đặt (Local Setup)

### Bước 1: Cài đặt thư viện
```bash
npm install
```

### Bước 2: Cài đặt Trình duyệt Playwright
```bash
npx playwright install --with-deps
```

### Bước 3: Cấu hình Môi trường & AI (.env)
Khai báo biến môi trường (như `OPENAI_API_KEY` nếu muốn chạy test LLM):
1. Copy file `.env-example` hoặc tạo mới file `.env`.
2. Điền thông tin:
```env
BASE_URL=https://qa.your-project.com
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxx
```

---

## 🏃 Hướng Dẫn Thực Thi Kiểm Thử SEO

Bạn có thể chạy các kịch bản kiểm thử một cách linh hoạt bằng các câu lệnh dưới đây:

### 1. Cấu hình Dữ Liệu Kiểm Thử
Trước khi chạy, vào `src/test-data/seoData.ts` để cấu hình URL và từ khoá cần kiểm tra:
```typescript
export const seoTestData: SeoPageTestData[] = [
  {
    name: "Trang chủ (Home Page)",
    path: "/",
    keyword: "160STORE",
    priority: "critical",
    maxImageSizeKb: 300,
    modernImageRatio: 80,
  }
];
```

### 2. Lệnh Chạy Test

| Câu lệnh | Mô tả |
| :--- | :--- |
| `npx playwright test` | Thực thi toàn bộ test SEO ở chế độ ẩn danh (Headless) |
| `npx playwright test --headed` | Thực thi kiểm thử có hiển thị trình duyệt (Headed mode) |
| `npx playwright test tests/seo.spec.ts` | Chỉ chạy riêng kịch bản SEO cơ bản |

---

## 📊 Xem Báo Cáo Allure (Allure Reports)

Mỗi lần chạy test SEO, công cụ sẽ tổng hợp điểm số và liệt kê chi tiết các lỗi SEO (như thiếu alt ảnh, mật độ từ khoá quá thấp, ảnh quá nặng).

Để xem báo cáo:

1.  **Tạo báo cáo chi tiết:**
    ```bash
    npx allure generate allure-results --clean -o allure-report
    ```
2.  **Khởi chạy server để xem trên trình duyệt:**
    ```bash
    npx allure open allure-report
    ```

---

## 🤖 Tích Hợp CI/CD (GitHub Actions)

Dự án đã được tích hợp sẵn file cấu hình `.github/workflows/playwright-ci.yml`. Mỗi khi có Push hoặc Pull Request, GitHub Actions sẽ tự động chạy bộ test SEO, ngăn chặn việc merge code nếu làm rớt điểm SEO của dự án!