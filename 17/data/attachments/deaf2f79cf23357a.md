# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo.spec.ts >> SEO TIÊU CHUẨN CƠ BẢN CHO WEB >> Kiểm tra SEO Onpage: Disney | Mickey & Friend
- Location: tests/seo.spec.ts:18:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 58/100 dưới ngưỡng 70%. Có 16/38 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e4]:
      - link "⚡️Flash Sale giảm 15% toàn bộ sản phẩm BST World Cup" [ref=e6] [cursor=pointer]:
        - /url: /
        - paragraph [ref=e7]:
          - strong [ref=e8]: ⚡️Flash Sale giảm 15% toàn bộ sản phẩm BST World Cup
      - link "☀️Đón hè cùng Bộ Sưu Tập The Poolside Club 2026" [ref=e10] [cursor=pointer]:
        - /url: /
        - paragraph [ref=e11]:
          - strong [ref=e12]: ☀️Đón hè cùng Bộ Sưu Tập The Poolside Club 2026
      - link "Voucher 50K cho đơn từ 699K" [ref=e14] [cursor=pointer]:
        - /url: /
        - paragraph [ref=e15]:
          - strong [ref=e16]: Voucher 50K cho đơn từ 699K
      - link "Voucher 80K cho đơn từ 999K" [ref=e18] [cursor=pointer]:
        - /url: /
        - paragraph [ref=e19]:
          - strong [ref=e20]: Voucher 80K cho đơn từ 999K
    - generic [ref=e23]:
      - link "160STORE" [ref=e25] [cursor=pointer]:
        - /url: /
        - img "160STORE" [ref=e26]
      - navigation [ref=e27]:
        - generic [ref=e29]:
          - textbox "Search" [ref=e31]:
            - /placeholder: Bạn đang tìm gì...
          - button "Tìm kiếm" [ref=e32] [cursor=pointer]:
            - img "Tìm kiếm" [ref=e33]
      - list [ref=e36]:
        - listitem [ref=e37]:
          - generic [ref=e38]:
            - link "Hệ thống cửa hàng Cửa hàng" [ref=e39] [cursor=pointer]:
              - /url: https://www.160store.com/pages/lien-he
              - img "Hệ thống cửa hàng" [ref=e41]
              - generic [ref=e43]: Cửa hàng
            - option "Chọn tỉnh/thành phố" [selected]
            - option "Hà Nội"
            - option "Bà Rịa - Vũng Tàu"
            - option "An Giang"
            - option "Đà Nẵng"
            - option "Đắk Lắk"
            - option "Hồ Chí Minh"
            - option "Cần Thơ"
            - option "Đồng Nai"
            - option "Đà Nẵng"
            - option "Hồ Chí Minh"
            - option "TPHCM - Bình Dương"
            - option "Hà Nội"
            - option "Hồ Chí Minh"
            - option "Đồng Tháp - Tiền Giang"
            - option "Cần Thơ"
            - option "Hồ Chí Minh"
            - option "Chọn Quận/huyện" [selected]
        - listitem [ref=e44]:
          - generic [ref=e45]:
            - link "Tài khoản Đăng nhập" [ref=e46] [cursor=pointer]:
              - /url: javascript:void(0)
              - img "Tài khoản" [ref=e48]
              - generic [ref=e49]: Đăng nhập
            - generic:
              - generic:
                - generic: Đăng nhập tài khoản
                - paragraph: "Nhập email và mật khẩu của bạn:"
              - generic:
                - generic:
                  - generic:
                    - textbox "Nhập email hoặc số điện thoại"
                  - generic:
                    - textbox "Mật khẩu"
                  - generic:
                    - button "Đăng nhập"
                - generic:
                  - paragraph:
                    - text: Khách hàng mới?
                    - link "Tạo tài khoản":
                      - /url: /account/register
                  - paragraph:
                    - text: Quên mật khẩu?
                    - button "Khôi phục mật khẩu"
        - listitem [ref=e50]:
          - link "Hệ thống cửa hàng 0 Giỏ hàng" [ref=e52] [cursor=pointer]:
            - /url: /cart
            - generic [ref=e53]:
              - img "Hệ thống cửa hàng" [ref=e54]
              - generic [ref=e55]: "0"
            - generic [ref=e56]: Giỏ hàng
    - navigation [ref=e60]:
      - list [ref=e61]:
        - listitem [ref=e62]:
          - link "🔎 HÀNG MỚI" [ref=e63] [cursor=pointer]:
            - /url: /collections/san-pham-moi
            - generic [ref=e64]: 🔎 HÀNG MỚI
          - generic [ref=e65]: New
        - listitem [ref=e66]:
          - link "SẢN PHẨM" [ref=e67] [cursor=pointer]:
            - /url: /collections/tat-ca-san-pham
            - generic [ref=e68]: SẢN PHẨM
        - listitem [ref=e70]:
          - link "ÁO NAM" [ref=e71] [cursor=pointer]:
            - /url: /collections/ao
            - generic [ref=e72]: ÁO NAM
        - listitem [ref=e74]:
          - link "QUẦN NAM" [ref=e75] [cursor=pointer]:
            - /url: /collections/quan
            - generic [ref=e76]: QUẦN NAM
        - listitem [ref=e78]:
          - link "PHỤ KIỆN" [ref=e79] [cursor=pointer]:
            - /url: /collections/nhom-phu-kien-khac
            - generic [ref=e80]: PHỤ KIỆN
        - listitem [ref=e82]:
          - link "BST Hè 2026" [ref=e83] [cursor=pointer]:
            - /url: /collections/the-poolside-club-collection
            - generic [ref=e84]: BST Hè 2026
        - listitem [ref=e85]:
          - link "OUTLET" [ref=e86] [cursor=pointer]:
            - /url: /collections/outlet
            - generic [ref=e87]: OUTLET
          - generic [ref=e88]: "-50%"
        - listitem [ref=e89]:
          - link "COLLECTION" [ref=e90] [cursor=pointer]:
            - /url: /
            - generic [ref=e91]: COLLECTION
        - listitem [ref=e93]:
          - link "JEANS" [ref=e94] [cursor=pointer]:
            - /url: /collections/quan-jeans
            - generic [ref=e95]: JEANS
        - listitem [ref=e97]:
          - link "TIN THỜI TRANG" [ref=e98] [cursor=pointer]:
            - /url: https://www.160store.com/blogs/all
            - generic [ref=e99]: TIN THỜI TRANG
  - text: + + + + + + + + +
  - main [ref=e100]:
    - list [ref=e103]:
      - listitem [ref=e104]:
        - link "Trang chủ" [ref=e105] [cursor=pointer]:
          - /url: /
      - listitem [ref=e106]:
        - text: /
        - generic [ref=e107]: DISNEY COLLECTION - MICKEY IN REAL LIFE ++REAL FRIENDS
    - generic [ref=e110]:
      - img "DISNEY COLLECTION - MICKEY IN REAL LIFE ++REAL FRIENDS" [ref=e113]
      - generic [ref=e115]:
        - generic [ref=e118]:
          - text: "Sắp xếp:"
          - combobox [ref=e119] [cursor=pointer]:
            - option "Sản phẩm nổi bật" [selected]
            - 'option "Giá: Tăng dần"'
            - 'option "Giá: Giảm dần"'
            - 'option "Tên: A-Z"'
            - 'option "Tên: Z-A"'
            - option "Cũ nhất"
            - option "Mới nhất"
            - option "Bán chạy nhất"
            - 'option "Tồn kho: Giảm dần"'
        - text: 
        - paragraph [ref=e121]: Hiện chưa có sản phẩm
        - generic:
          - paragraph
  - generic [ref=e125]:
    - generic [ref=e126]:
      - paragraph [ref=e127]: Đăng kí nhận tin
      - generic [ref=e129]:
        - generic [ref=e130]:
          - text: 
          - textbox "Email" [ref=e131]
        - button "Đăng ký" [ref=e132] [cursor=pointer]:
          - generic [ref=e133]: 
          - text: Đăng ký
    - list [ref=e135]:
      - listitem [ref=e136]:
        - link "Liên hệ với chúng tôi qua Zalo" [ref=e137] [cursor=pointer]:
          - /url: //zalo.me/3664144181122308942
          - img "Liên hệ với chúng tôi qua Zalo" [ref=e138]
      - listitem [ref=e139]:
        - link [ref=e140] [cursor=pointer]:
          - /url: https://www.youtube.com/@storehanghieu1608
          - generic [ref=e141]: 
      - listitem [ref=e142]:
        - link [ref=e143] [cursor=pointer]:
          - /url: https://www.instagram.com/160store
          - generic [ref=e144]: 
      - listitem [ref=e145]:
        - link [ref=e146] [cursor=pointer]:
          - /url: https://www.facebook.com/160store
          - generic [ref=e147]: 
  - contentinfo [ref=e148]:
    - generic [ref=e150]:
      - generic [ref=e151]:
        - generic [ref=e152]:
          - generic [ref=e154]: Giới thiệu
          - generic [ref=e155]:
            - paragraph [ref=e156]: 160STORE - Chuỗi Phân Phối Thời Trang Nam Chuẩn Hiệu
            - list [ref=e157]:
              - listitem [ref=e158]:
                - generic [ref=e159]: 
                - link "02871006789" [ref=e160] [cursor=pointer]:
                  - /url: tel:02871006789
              - listitem [ref=e161]:
                - generic [ref=e162]: 
                - link "cs@160store.com" [ref=e163] [cursor=pointer]:
                  - /url: mailto:cs@160store.com
              - listitem [ref=e164]:
                - generic [ref=e165]: 
                - generic [ref=e166]: "Giờ mở cửa : 08:30 - 22:00"
              - listitem [ref=e167]:
                - generic [ref=e168]: 
                - generic [ref=e169]: Nhân viên tư vấn phản hồi tin nhắn đến 24:00 (Mỗi ngày)
              - listitem [ref=e170]:
                - link [ref=e171] [cursor=pointer]:
                  - /url: http://online.gov.vn/Home/WebDetails/121880
                  - img [ref=e172]
              - listitem [ref=e173]:
                - link "DMCA.com Protection Status" [ref=e174] [cursor=pointer]:
                  - /url: https://www.dmca.com/Protection/Status.aspx?ID=9049de26-d97b-48dc-ab97-1e5fcb221fba&refurl=https://160store.com/collections/disney-collection-mickey-in-real-life-real-friends
                  - img "DMCA.com Protection Status" [ref=e175]
        - generic [ref=e176]:
          - generic [ref=e178]: CHÍNH SÁCH
          - list [ref=e180]:
            - listitem [ref=e181]:
              - link "Hướng dẫn đặt hàng" [ref=e182] [cursor=pointer]:
                - /url: /pages/huong-dan-dat-hang
            - listitem [ref=e183]:
              - paragraph [ref=e186] [cursor=pointer]: Chính sách
        - generic [ref=e188]:
          - link "ĐỊA CHỈ CỬA HÀNG (20 CH)" [ref=e191] [cursor=pointer]:
            - /url: https://www.160store.com/pages/lien-he
          - generic [ref=e193]:
            - generic [ref=e194]:
              - generic [ref=e195]:
                - img [ref=e196]
                - paragraph [ref=e197]: HỒ CHÍ MINH (10 CH)
              - paragraph [ref=e198]: 274 Ba Cu, Phường Vũng Tàu, TP.HCM
            - generic [ref=e199]:
              - generic [ref=e200]:
                - img [ref=e201]
                - paragraph [ref=e202]:
                  - text: HÀ NỘI (2 CH)
                  - generic [ref=e203]: New
              - paragraph [ref=e204]: 27 Tôn Đức Thắng - P. Văn Miếu - Quốc Tử Giám; TP. Hà Nội
            - generic [ref=e205]:
              - generic [ref=e206]:
                - img [ref=e207]
                - paragraph [ref=e208]: CẦN THƠ (2 CH)
              - paragraph [ref=e209]: Số 35 Trần Phú, Phường Ninh Kiều, TP.Cần Thơ
            - generic [ref=e210]:
              - generic [ref=e211]:
                - img [ref=e212]
                - paragraph [ref=e213]: ĐÀ NẴNG (2 CH)
              - paragraph [ref=e214]: 332 Đ. Lê Duẩn, Phường Thanh Khê, TP.Đà Nẵng
            - link "XEM TẤT CẢ CỬA HÀNG" [ref=e216] [cursor=pointer]:
              - /url: https://www.160store.com/pages/lien-he
        - generic [ref=e219]:
          - generic [ref=e220]: PHƯƠNG THỨC THANH TOÁN
          - generic [ref=e221]:
            - img "Image Spay" [ref=e222]
            - img "Image VNPay" [ref=e223]
            - img "Image Cod" [ref=e224]
      - generic [ref=e229]: BẢN QUYỀN THUỘC VỀ 160STORE
  - list [ref=e231]
  - button "back to top" [ref=e233] [cursor=pointer]:
    - img [ref=e234]
    - text: back to top
  - paragraph [ref=e240]: Bạn chưa chọn size sản phẩm!
  - generic:
    - generic:
      - generic: 🎯 BÁO CÁO SEO AUDIT CHUYÊN SÂU
      - generic: "Phần A: On-page cơ bản"
    - generic:
      - generic:
        - generic:
          - generic:
            - generic:
              - generic: "58"
              - generic: SEO
          - generic: TRUNG BÌNH
        - generic:
          - generic:
            - generic: "Trang phân tích:"
            - strong: Disney | Mickey & Friend
          - generic:
            - generic: "Từ khóa chính:"
            - strong: disney mickey friend
          - generic:
            - generic: "Tiêu chí đạt:"
            - strong: 22/38
      - generic [ref=e241]:
        - generic [ref=e242]: "❌ Chi tiết lỗi cần khắc phục (16):"
        - generic [ref=e243]:
          - generic [ref=e244]:
            - generic [ref=e245]:
              - strong [ref=e246]: Title chứa keyword "disney mickey friend"
              - generic [ref=e247]: "1.3"
            - generic [ref=e248]: "⚠️ Lỗi: Title không chứa keyword \"disney mickey friend\""
          - generic [ref=e249]:
            - generic [ref=e250]:
              - strong [ref=e251]: "Keyword nằm ở nửa đầu Title (vị trí: N/A)"
              - generic [ref=e252]: "1.4"
            - generic [ref=e253]: "⚠️ Lỗi: Bỏ qua — keyword \"disney mickey friend\" không có trong Title"
          - generic [ref=e254]:
            - generic [ref=e255]:
              - strong [ref=e256]: Meta description tồn tại (Không tìm thấy)
              - generic [ref=e257]: "2.1"
            - generic [ref=e258]: "⚠️ Lỗi: Thẻ không tồn tại hoặc rỗng!"
          - generic [ref=e259]:
            - generic [ref=e260]:
              - strong [ref=e261]: "Độ dài Meta: 0 ký tự (chuẩn: 120–160)"
              - generic [ref=e262]: "2.2"
            - generic [ref=e263]: "⚠️ Lỗi: Không thể đo — Meta description không tồn tại"
          - generic [ref=e264]:
            - generic [ref=e265]:
              - strong [ref=e266]: Meta description chứa keyword "disney mickey friend"
              - generic [ref=e267]: "2.3"
            - generic [ref=e268]: "⚠️ Lỗi: Không thể kiểm tra — Meta description không tồn tại"
          - generic [ref=e269]:
            - generic [ref=e270]:
              - strong [ref=e271]: "Trang có đúng 1 thẻ H1 (hiện tại: 0 thẻ)"
              - generic [ref=e272]: "3.1"
            - generic [ref=e273]: "⚠️ Lỗi: Trang không có thẻ H1 nào!"
          - generic [ref=e274]:
            - generic [ref=e275]:
              - strong [ref=e276]: H1 chứa keyword "disney mickey friend"
              - generic [ref=e277]: "3.2"
            - generic [ref=e278]: "⚠️ Lỗi: Không có H1 để kiểm tra"
          - generic [ref=e279]:
            - generic [ref=e280]:
              - strong [ref=e281]: Trang có thẻ H2/H3 hỗ trợ (0 thẻ)
              - generic [ref=e282]: "3.4"
            - generic [ref=e283]: "⚠️ Lỗi: Trang nên có ít nhất 1 thẻ H2 hoặc H3"
          - generic [ref=e284]:
            - generic [ref=e285]:
              - strong [ref=e286]: URL chứa keyword slug "disney-mickey-friend"
              - generic [ref=e287]: "4.2"
            - generic [ref=e288]: "⚠️ Lỗi: URL \"/collections/disney-collection-mickey-in-real-life-real-friends\" không chứa keyword \"disney-mickey-friend\""
          - generic [ref=e289]:
            - generic [ref=e290]:
              - strong [ref=e291]: "Mật độ keyword: 0.00% (chuẩn: 0.5%–2.5%)"
              - generic [ref=e292]: "5.2"
            - generic [ref=e293]: "⚠️ Lỗi: Mật độ keyword quá thấp: 0.00%, cần ≥ 0.5%"
          - generic [ref=e294]:
            - generic [ref=e295]:
              - strong [ref=e296]: Keyword "disney mickey friend" xuất hiện trong 100 từ đầu
              - generic [ref=e297]: "5.3"
            - generic [ref=e298]: "⚠️ Lỗi: Keyword \"disney mickey friend\" không xuất hiện trong 100 từ đầu"
          - generic [ref=e299]:
            - generic [ref=e300]:
              - strong [ref=e301]: "100% ảnh có thuộc tính alt (thiếu: 7/22)"
              - generic [ref=e302]: "6.1"
            - generic [ref=e303]: "⚠️ Lỗi: Có 7 hình ảnh thiếu thuộc tính 'alt'"
          - generic [ref=e304]:
            - generic [ref=e305]:
              - strong [ref=e306]: Có ảnh chứa keyword "disney mickey friend" trong alt
              - generic [ref=e307]: "6.2"
            - generic [ref=e308]: "⚠️ Lỗi: Không có ảnh nào có alt chứa keyword \"disney mickey friend\""
          - generic [ref=e309]:
            - generic [ref=e310]:
              - strong [ref=e311]: "Anchor text chất lượng (lỗi: 7)"
              - generic [ref=e312]: "7.3"
            - generic [ref=e313]: "⚠️ Lỗi: 7 link có anchor text không tốt: \"\" → /, \"\" → /, \"\" → /, \"\" → /, \"\" → //zalo.me/3664144181122308942, \"\" → //m.me/1042686802417049, \"\" → //zalo.me/3664144181122308942"
          - generic [ref=e314]:
            - generic [ref=e315]:
              - strong [ref=e316]: "Open Graph: og:title=✔, og:description=✘"
              - generic [ref=e317]: "8.6"
            - generic [ref=e318]: "⚠️ Lỗi: Thiếu og:description"
          - generic [ref=e319]:
            - generic [ref=e320]:
              - strong [ref=e321]: "Twitter Card tags: 0 thẻ"
              - generic [ref=e322]: "8.7"
            - generic [ref=e323]: "⚠️ Lỗi: Trang thiếu Twitter Card tags"
```

# Test source

```ts
  60  |                         "text/plain"
  61  |                     );
  62  |                     throw new Error(errorMessage); // Ép Allure đánh ❌ cho step này
  63  |                 });
  64  |             } catch {
  65  |                 // Nuốt lỗi — test tiếp tục chạy bình thường
  66  |             }
  67  |         }
  68  |     }
  69  | 
  70  |     /** Lấy điểm hiện tại (0–100) */
  71  |     get score(): number {
  72  |         if (this.totalChecks === 0) return 100;
  73  |         return Math.round((this.passedChecks / this.totalChecks) * 100);
  74  |     }
  75  | 
  76  |     /** Lấy thống kê chi tiết */
  77  |     get stats() {
  78  |         return {
  79  |             total: this.totalChecks,
  80  |             passed: this.passedChecks,
  81  |             failed: this.totalChecks - this.passedChecks,
  82  |             score: this.score,
  83  |             failures: [...this.failures],
  84  |         };
  85  |     }
  86  | 
  87  |     async finalizeScore(page: Page, threshold = 70): Promise<void> {
  88  |         const { total, passed, failed, score, failures } = this.stats;
  89  | 
  90  |         // Xác định trạng thái
  91  |         const isPass = score >= threshold;
  92  |         const statusText = isPass ? "PASS" : "FAIL";
  93  | 
  94  |         // Thang điểm SEO mới
  95  |         let scoreLabel: string;
  96  |         let statusIcon: string;
  97  |         if (score >= 93) {
  98  |             scoreLabel = "XUẤT SẮC";
  99  |             statusIcon = "💎";
  100 |         } else if (score >= 77) {
  101 |             scoreLabel = "TỐT";
  102 |             statusIcon = "🟢";
  103 |         } else if (score >= 65) {
  104 |             scoreLabel = "KHÁ";
  105 |             statusIcon = "🟡";
  106 |         } else if (score >= 50) {
  107 |             scoreLabel = "TRUNG BÌNH";
  108 |             statusIcon = "🟠";
  109 |         } else {
  110 |             scoreLabel = "KÉM";
  111 |             statusIcon = "🔴";
  112 |         }
  113 | 
  114 |         // Tạo báo cáo tổng kết dạng text
  115 |         const summaryLines = [
  116 |             `══════════════════════════════════════`,
  117 |             `   ${statusIcon} KẾT QUẢ CHẤM ĐIỂM SEO`,
  118 |             `══════════════════════════════════════`,
  119 |             `   Điểm số:     ${score}/100`,
  120 |             `   Đánh giá:    ${scoreLabel}`,
  121 |             `   Ngưỡng đạt:  ${threshold}%`,
  122 |             `   Kết quả:     ${statusText}`,
  123 |             `──────────────────────────────────────`,
  124 |             `   Tổng tiêu chí:  ${total}`,
  125 |             `   ✅ Đạt:          ${passed}`,
  126 |             `   ❌ Không đạt:    ${failed}`,
  127 |             `══════════════════════════════════════`,
  128 |         ];
  129 | 
  130 |         if (failures.length > 0) {
  131 |             summaryLines.push(``, `📋 CHI TIẾT LỖI:`);
  132 |             failures.forEach((f, i) => {
  133 |                 summaryLines.push(`   ${i + 1}. [${f.step}]`);
  134 |                 summaryLines.push(`      → ${f.message}`);
  135 |             });
  136 |         }
  137 | 
  138 |         const summaryText = summaryLines.join("\n");
  139 | 
  140 |         // Step cuối cùng — hiển thị bảng điểm + quyết định PASS/FAIL
  141 |         await customStep(
  142 |             page,
  143 |             `13. 🏆 Kết quả chấm điểm SEO: ${score}/100 — ${statusText} (${scoreLabel})`,
  144 |             async () => {
  145 |                 // Đính kèm bảng điểm text
  146 |                 await allure.attachment(
  147 |                     "Bảng điểm SEO",
  148 |                     Buffer.from(summaryText, "utf-8"),
  149 |                     "text/plain"
  150 |                 );
  151 | 
  152 |                 // Gắn description vào Test Case trên Allure
  153 |                 await allure.description(
  154 |                     `[${statusText}] Điểm SEO: ${score}/100 | Đạt: ${passed}/${total} tiêu chí | Ngưỡng: ${threshold}%\n\n` +
  155 |                     `${scoreLabel}`
  156 |                 );
  157 | 
  158 |                 // 🚀 ĐÂY LÀ DÒNG DUY NHẤT quyết định Test PASS hay FAIL
  159 |                 if (!isPass) {
> 160 |                     throw new Error(
      |                           ^ Error: ❌ FAIL — Điểm SEO 58/100 dưới ngưỡng 70%. Có 16/38 tiêu chí không đạt.
  161 |                         `❌ FAIL — Điểm SEO ${score}/100 dưới ngưỡng ${threshold}%. ` +
  162 |                         `Có ${failed}/${total} tiêu chí không đạt.`
  163 |                     );
  164 |                 }
  165 |             },
  166 |             { screenshot: true }
  167 |         );
  168 |     }
  169 | }
```