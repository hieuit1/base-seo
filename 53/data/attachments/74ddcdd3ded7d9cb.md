# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo.spec.ts >> SEO TIÊU CHUẨN CƠ BẢN CHO WEB >> Kiểm tra SEO Onpage: Dịch vụ
- Location: tests/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 68/100 dưới ngưỡng 70%. Có 20/62 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e7]:
      - link "Tòa nhà văn phòng BM Tower | Cho thuê văn phòng tại Bình Dương" [ref=e9] [cursor=pointer]:
        - /url: https://thuevanphongbinhduong.com/
        - img "Tòa nhà văn phòng BM Tower | Cho thuê văn phòng tại Bình Dương" [ref=e10]
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "Trang chủ" [ref=e13] [cursor=pointer]:
            - /url: ""
        - listitem [ref=e14]:
          - link "Giới thiệu" [ref=e15] [cursor=pointer]:
            - /url: gioi-thieu
        - listitem [ref=e16]:
          - link "Văn phòng cho thuê" [ref=e17] [cursor=pointer]:
            - /url: dich-vu
        - listitem [ref=e18]:
          - link "Tiện ích" [ref=e19] [cursor=pointer]:
            - /url: tien-ich
        - listitem [ref=e20]:
          - link "Hoạt động" [ref=e21] [cursor=pointer]:
            - /url: hoat-dong
        - listitem [ref=e22]:
          - link "Liên hệ" [ref=e23] [cursor=pointer]:
            - /url: lien-he
      - link "phone 0949616161" [ref=e25] [cursor=pointer]:
        - /url: tel:0949616161
        - img "phone" [ref=e26]
        - generic [ref=e27]: "0949616161"
    - list [ref=e30]:
      - listitem [ref=e31]:
        - link "Trang chủ" [ref=e32] [cursor=pointer]:
          - /url: https://thuevanphongbinhduong.com/
          - img [ref=e33]
          - generic [ref=e35]: Trang chủ
      - listitem [ref=e36]:
        - text: /
        - link "Văn phòng cho thuê" [ref=e37] [cursor=pointer]:
          - /url: https://thuevanphongbinhduong.com/dich-vu
    - generic [ref=e41]:
      - heading "Tất cả văn phòng cho thuê" [level=2] [ref=e43]
      - generic [ref=e44]:
        - generic [ref=e47]:
          - link "Văn phòng tiêu chuẩn" [ref=e49] [cursor=pointer]:
            - /url: van-phong-tieu-chuan
            - img "Văn phòng tiêu chuẩn" [ref=e50]
          - generic [ref=e52]:
            - heading "Văn phòng tiêu chuẩn" [level=3] [ref=e54]:
              - link "Văn phòng tiêu chuẩn" [ref=e55] [cursor=pointer]:
                - /url: van-phong-tieu-chuan
            - paragraph [ref=e57]: Không gian sáng thoáng, bố cục dễ tùy biến, phù hợp cho doanh nghiệp cần sự linh hoạt và hiệu quả vận hành.
            - generic [ref=e58]:
              - generic [ref=e59]:
                - img [ref=e60]
                - generic [ref=e62]:
                  - strong [ref=e63]: "Diện tích:"
                  - text: 2000m²
              - generic [ref=e64]:
                - img [ref=e65]
                - generic [ref=e67]:
                  - strong [ref=e68]: "Giá thuê:"
                  - text: Từ 1.000.000VNĐ/m²
        - generic [ref=e71]:
          - link "Cho thuê văn phòng sáng tạo" [ref=e73] [cursor=pointer]:
            - /url: van-phong-sang-tao
            - img "Cho thuê văn phòng sáng tạo" [ref=e74]
          - generic [ref=e76]:
            - heading "Cho thuê văn phòng sáng tạo" [level=3] [ref=e78]:
              - link "Cho thuê văn phòng sáng tạo" [ref=e79] [cursor=pointer]:
                - /url: van-phong-sang-tao
            - paragraph [ref=e81]: Trong kỷ nguyên kinh tế số, môi trường làm việc không chỉ là nơi đặt những chiếc bàn ghế, mà còn là bệ phóng cho sự sáng tạo và đổi mới. Việc lựa chọn một không gian làm việc lý tưởng đóng vai trò then chốt trong việc định hình văn hóa doanh nghiệp và thúc đẩy hiệu suất làm việc của đội ngũ nhân sự. Cho thuê văn phòng sáng tạo tại BM Tower chính là giải pháp tối ưu, mang đến không gian làm việc hiện đại, linh hoạt và tràn đầy cảm hứng cho mọi doanh nghiệp.
            - generic [ref=e82]:
              - generic [ref=e83]:
                - img [ref=e84]
                - generic [ref=e86]:
                  - strong [ref=e87]: "Diện tích:"
                  - text: 2000m²
              - generic [ref=e88]:
                - img [ref=e89]
                - generic [ref=e91]:
                  - strong [ref=e92]: "Giá thuê:"
                  - text: Từ 1.000.000VNĐ/m²
        - generic [ref=e95]:
          - link "Cho thuê văn phòng cao cấp" [ref=e97] [cursor=pointer]:
            - /url: van-phong-cao-cap
            - img "Cho thuê văn phòng cao cấp" [ref=e98]
          - generic [ref=e100]:
            - heading "Cho thuê văn phòng cao cấp" [level=3] [ref=e102]:
              - link "Cho thuê văn phòng cao cấp" [ref=e103] [cursor=pointer]:
                - /url: van-phong-cao-cap
            - paragraph [ref=e105]: Không gian sáng thoáng, bố cục dễ tùy biến, phù hợp cho doanh nghiệp cần sự linh hoạt và hiệu quả vận hành.
            - generic [ref=e106]:
              - generic [ref=e107]:
                - img [ref=e108]
                - generic [ref=e110]:
                  - strong [ref=e111]: "Diện tích:"
                  - text: 2000m²
              - generic [ref=e112]:
                - img [ref=e113]
                - generic [ref=e115]:
                  - strong [ref=e116]: "Giá thuê:"
                  - text: Từ 180.000VNĐ/m²
        - generic [ref=e119]:
          - link "Văn phòng tiêu chuẩn 1" [ref=e121] [cursor=pointer]:
            - /url: van-phong-tieu-chuan-1
            - img "Văn phòng tiêu chuẩn 1" [ref=e122]
          - generic [ref=e124]:
            - heading "Văn phòng tiêu chuẩn 1" [level=3] [ref=e126]:
              - link "Văn phòng tiêu chuẩn 1" [ref=e127] [cursor=pointer]:
                - /url: van-phong-tieu-chuan-1
            - paragraph [ref=e129]: Tọa lạc tại vị trí trung tâm, tòa nhà cung cấp đa dạng các loại hình văn phòng và phòng họp, đáp ứng nhu cầu của mọi loại hình doanh nghiệp, từ startup non trẻ đến các công ty đã có chỗ đứng trên thị trường.
            - generic [ref=e130]:
              - generic [ref=e131]:
                - img [ref=e132]
                - generic [ref=e134]:
                  - strong [ref=e135]: "Diện tích:"
                  - text: 2000m²
              - generic [ref=e136]:
                - img [ref=e137]
                - generic [ref=e139]:
                  - strong [ref=e140]: "Giá thuê:"
                  - text: Từ 10.000.000VNĐ/m²
        - generic [ref=e143]:
          - link "Văn phòng tiêu chuẩn 2" [ref=e145] [cursor=pointer]:
            - /url: van-phong-tieu-chuan-2
            - img "Văn phòng tiêu chuẩn 2" [ref=e146]
          - generic [ref=e148]:
            - heading "Văn phòng tiêu chuẩn 2" [level=3] [ref=e150]:
              - link "Văn phòng tiêu chuẩn 2" [ref=e151] [cursor=pointer]:
                - /url: van-phong-tieu-chuan-2
            - paragraph [ref=e153]: Tầng 7, BM ToweTrong nhịp sống hối hả của Thành phố Hồ Chí Minh, việc tìm kiếm một địa điểm đặt trụ sở không chỉ là tìm một không gian vật lý, mà còn là tìm một môi trường làm việc lý tưởng, phản ánh sự chuyên nghiệp và tầm nhìn của doanh nghiệp, 330, khu 7 hiệp thành, thành phố thủ dầu một, tỉnh bình dươngr
            - generic [ref=e154]:
              - generic [ref=e155]:
                - img [ref=e156]
                - generic [ref=e158]:
                  - strong [ref=e159]: "Diện tích:"
                  - text: 2000m²
              - generic [ref=e160]:
                - img [ref=e161]
                - generic [ref=e163]:
                  - strong [ref=e164]: "Giá thuê:"
                  - text: Từ 10.000.000VNĐ/m²
        - generic [ref=e167]:
          - link "Phòng họp cho thuê theo giờ" [ref=e169] [cursor=pointer]:
            - /url: phong-hop-cho-thue-theo-gio
            - img "Phòng họp cho thuê theo giờ" [ref=e170]
          - generic [ref=e172]:
            - heading "Phòng họp cho thuê theo giờ" [level=3] [ref=e174]:
              - link "Phòng họp cho thuê theo giờ" [ref=e175] [cursor=pointer]:
                - /url: phong-hop-cho-thue-theo-gio
            - paragraph [ref=e177]: Việc thuê phòng họp theo giờ giải quyết nhiều vấn đề mà các hình thức thuê truyền thống khó lòng đáp ứng.
            - generic [ref=e178]:
              - generic [ref=e179]:
                - img [ref=e180]
                - generic [ref=e182]:
                  - strong [ref=e183]: "Diện tích:"
                  - text: 2000m2
              - generic [ref=e184]:
                - img [ref=e185]
                - generic [ref=e187]:
                  - strong [ref=e188]: "Giá thuê:"
                  - text: Từ 10.000.000VNĐ/m²
    - generic [ref=e189]:
      - generic:
        - generic:
          - generic:
            - generic:
              - link "Tòa nhà văn phòng BM Tower | Cho thuê văn phòng tại Bình Dương":
                - /url: https://thuevanphongbinhduong.com/
                - img "Tòa nhà văn phòng BM Tower | Cho thuê văn phòng tại Bình Dương"
              - generic:
                - paragraph: Vị trí chiến lược của BM Tower không chỉ mang lại lợi thế về giao thông mà còn nâng tầm hình ảnh thương hiệu, tạo ấn tượng tốt với khách hàng và đối tác.
            - generic:
              - generic:
                - generic:
                  - paragraph: Về BM TOWER
                  - list:
                    - listitem:
                      - link "Giới thiệu":
                        - /url: gioi-thieu
                    - listitem:
                      - link "Văn phòng cho thuê":
                        - /url: dich-vu
                    - listitem:
                      - link "Hoạt động":
                        - /url: hoat-dong
                    - listitem:
                      - link "Tiện ích":
                        - /url: tien-ich
                    - listitem:
                      - link "Liên hệ":
                        - /url: lien-he
                - generic:
                  - paragraph: Chính sách khách hàng
                  - list:
                    - listitem:
                      - link "Chính sách bảo mật":
                        - /url: chinh-sach-bao-mat
                    - listitem:
                      - link "Chính sách tư vấn":
                        - /url: chinh-sach-tu-van
                    - listitem:
                      - link "Chính sách hỗ trợ":
                        - /url: chinh-sach-ho-tro
                    - listitem:
                      - link "Chính sác chăm sóc":
                        - /url: chinh-sac-cham-soc
      - generic [ref=e193]: Copyright ©2026 BM TOWER. All Right Reserved. Thiết kế web MIMA
    - generic [ref=e194]:
      - 'link "Call me: 0949616161" [ref=e195] [cursor=pointer]':
        - /url: tel:0949616161
        - img [ref=e199]
        - generic [ref=e202]: "Call me: 0949616161"
      - 'link "Zalo: 0949616161" [ref=e203] [cursor=pointer]':
        - /url: https://zalo.me/0949616161
        - img [ref=e207]
        - generic [ref=e208]: "Zalo: 0949616161"
  - generic:
    - generic:
      - generic: 🎯 BÁO CÁO SEO AUDIT CHUYÊN SÂU
      - generic: "Phần A: On-page cơ bản"
    - generic:
      - generic: ══ KẾT QUẢ CHẤM ĐIỂM SEO ══
      - generic:
        - generic:
          - generic:
            - generic:
              - generic: "70"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 70/100
          - generic:
            - generic: "Đánh giá:"
            - strong: 🟡 KHÁ
          - generic:
            - generic: "Ngưỡng đạt:"
            - generic: 70%
          - generic:
            - generic: "Kết quả:"
            - generic: ✅ PASS
      - generic:
        - generic:
          - generic: "56"
          - generic: Tổng tiêu chí
        - generic:
          - generic: ✅ 39
          - generic: Đạt
        - generic:
          - generic: ❌ 17
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: Dịch vụ
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: Dịch vụ văn phòng
    - generic [ref=e209]:
      - generic [ref=e210]: "❌ Chi tiết lỗi cần khắc phục (17/56):"
      - generic [ref=e211]:
        - generic [ref=e212]:
          - generic [ref=e213]: Title
          - generic [ref=e214]: 2/5
        - generic [ref=e215]:
          - generic [ref=e216]:
            - strong [ref=e217]: "Độ dài Title: 18 ký tự (chuẩn: 50–60)"
            - generic [ref=e218]: "1.2"
          - generic [ref=e219]: ⚠️ Title quá ngắn hoặc quá dài (18 ký tự), cần 50–60
        - generic [ref=e220]:
          - generic [ref=e221]:
            - strong [ref=e222]: Title chứa keyword "Dịch vụ văn phòng"
            - generic [ref=e223]: "1.3"
          - generic [ref=e224]: ⚠️ Title không chứa keyword "Dịch vụ văn phòng"
        - generic [ref=e225]:
          - generic [ref=e226]:
            - strong [ref=e227]: "Keyword nằm ở nửa đầu Title (vị trí: N/A)"
            - generic [ref=e228]: "1.4"
          - generic [ref=e229]: ⚠️ Keyword "Dịch vụ văn phòng" không có trong Title
      - generic [ref=e230]:
        - generic [ref=e231]:
          - generic [ref=e232]: Meta Description
          - generic [ref=e233]: 1/4
        - generic [ref=e234]:
          - generic [ref=e235]:
            - strong [ref=e236]: Meta description tồn tại (Không tìm thấy)
            - generic [ref=e237]: "2.1"
          - generic [ref=e238]: ⚠️ Thẻ không tồn tại hoặc rỗng!
        - generic [ref=e239]:
          - generic [ref=e240]:
            - strong [ref=e241]: "Độ dài Meta: 0 ký tự (chuẩn: 120–160)"
            - generic [ref=e242]: "2.2"
          - generic [ref=e243]: ⚠️ Không thể đo — Meta description không tồn tại
        - generic [ref=e244]:
          - generic [ref=e245]:
            - strong [ref=e246]: Meta description chứa keyword "Dịch vụ văn phòng"
            - generic [ref=e247]: "2.3"
          - generic [ref=e248]: ⚠️ Không thể kiểm tra — Meta description không tồn tại
      - generic [ref=e249]:
        - generic [ref=e250]:
          - generic [ref=e251]: Heading Structure
          - generic [ref=e252]: 3/4
        - generic [ref=e253]:
          - generic [ref=e254]:
            - strong [ref=e255]: H1 chứa keyword "Dịch vụ văn phòng"
            - generic [ref=e256]: "3.2"
          - generic [ref=e257]: ⚠️ H1 "Văn phòng cho thuê" không chứa keyword "Dịch vụ văn phòng"
      - generic [ref=e258]:
        - generic [ref=e259]:
          - generic [ref=e260]: URL Structure
          - generic [ref=e261]: 4/5
        - generic [ref=e262]:
          - generic [ref=e263]:
            - strong [ref=e264]: URL chứa keyword slug "dich-vu-van-phong"
            - generic [ref=e265]: "4.2"
          - generic [ref=e266]: ⚠️ URL "/dich-vu" không chứa keyword "dich-vu-van-phong"
      - generic [ref=e267]:
        - generic [ref=e268]:
          - generic [ref=e269]: Images
          - generic [ref=e270]: 3/6
        - generic [ref=e271]:
          - generic [ref=e272]:
            - strong [ref=e273]: Có ảnh chứa keyword "Dịch vụ văn phòng" trong alt
            - generic [ref=e274]: "6.2"
          - generic [ref=e275]: ⚠️ Không có ảnh nào có alt chứa keyword "Dịch vụ văn phòng"
        - generic [ref=e276]:
          - generic [ref=e277]:
            - strong [ref=e278]: "Ảnh có width/height: 3/9 (cần ≥ 80%)"
            - generic [ref=e279]: "6.3"
          - generic [ref=e280]: ⚠️ Chỉ 3/9 ảnh có width/height, cần ≥ 8
        - generic [ref=e281]:
          - generic [ref=e282]:
            - strong [ref=e283]: "Định dạng ảnh tối ưu (WebP/AVIF): 67% (cần ≥ 80%)"
            - generic [ref=e284]: "6.5"
          - generic [ref=e285]: "⚠️ Tỷ lệ ảnh WebP/AVIF quá thấp: 6/9 ảnh (67%)"
      - generic [ref=e286]:
        - generic [ref=e287]:
          - generic [ref=e288]: Links
          - generic [ref=e289]: 4/5
        - generic [ref=e290]:
          - generic [ref=e291]:
            - strong [ref=e292]: "Anchor text chất lượng (lỗi: 1)"
            - generic [ref=e293]: "7.3"
          - generic [ref=e294]: ⚠️ 1 link có anchor text không tốt
      - generic [ref=e295]:
        - generic [ref=e296]:
          - generic [ref=e297]: Technical SEO
          - generic [ref=e298]: 8/9
        - generic [ref=e299]:
          - generic [ref=e300]:
            - strong [ref=e301]: "Open Graph: og:title=✔, og:description=✘, og:image=✘"
            - generic [ref=e302]: "8.6"
          - generic [ref=e303]: ⚠️ og:description, og:image — Link không có thumbnail khi share trên social media
      - generic [ref=e304]:
        - generic [ref=e305]:
          - generic [ref=e306]: Mobile
          - generic [ref=e307]: 2/3
        - generic [ref=e308]:
          - generic [ref=e309]:
            - strong [ref=e310]: "Touch targets đủ lớn (≥ 48x48px): 9 lỗi"
            - generic [ref=e311]: "9.3"
          - generic [ref=e312]: ⚠️ Phát hiện 9 nút/link có kích thước quá nhỏ (< 48x48px)
      - generic [ref=e313]:
        - generic [ref=e314]:
          - generic [ref=e315]: Page Optimization
          - generic [ref=e316]: 4/7
        - generic [ref=e317]:
          - generic [ref=e318]:
            - strong [ref=e319]: "Browser caching (Cache-Control): ✘"
            - generic [ref=e320]: "10.2"
          - generic [ref=e321]: "⚠️ Cache header chưa tối ưu hoặc bị disable: no-store, no-cache, must-revalidate"
        - generic [ref=e322]:
          - generic [ref=e323]:
            - strong [ref=e324]: "LCP: 3776ms (< 2500ms)"
            - generic [ref=e325]: "10.6"
          - generic [ref=e326]: "⚠️ LCP quá cao: 3776ms (chuẩn: < 2.5s)"
        - generic [ref=e327]:
          - generic [ref=e328]:
            - strong [ref=e329]: "CLS: 0.243 (< 0.1)"
            - generic [ref=e330]: "10.8"
          - generic [ref=e331]: "⚠️ CLS quá cao: 0.243 (chuẩn: < 0.1)"
```

# Test source

```ts
  80  |         return Math.round((this.passedChecks / this.totalChecks) * 100);
  81  |     }
  82  | 
  83  |     /** Lấy thống kê chi tiết */
  84  |     get stats() {
  85  |         return {
  86  |             total: this.totalChecks,
  87  |             passed: this.passedChecks,
  88  |             failed: this.totalChecks - this.passedChecks,
  89  |             score: this.score,
  90  |             failures: [...this.failures],
  91  |         };
  92  |     }
  93  | 
  94  |     async finalizeScore(page: Page, threshold = 70): Promise<void> {
  95  |         const { total, passed, failed, score, failures } = this.stats;
  96  | 
  97  |         // Xác định trạng thái
  98  |         const isPass = score >= threshold;
  99  |         const statusText = isPass ? "PASS" : "FAIL";
  100 | 
  101 |         // Thang điểm SEO mới
  102 |         let scoreLabel: string;
  103 |         let statusIcon: string;
  104 |         if (score >= 93) {
  105 |             scoreLabel = "XUẤT SẮC";
  106 |             statusIcon = "💎";
  107 |         } else if (score >= 77) {
  108 |             scoreLabel = "TỐT";
  109 |             statusIcon = "🟢";
  110 |         } else if (score >= 65) {
  111 |             scoreLabel = "KHÁ";
  112 |             statusIcon = "🟡";
  113 |         } else if (score >= 50) {
  114 |             scoreLabel = "TRUNG BÌNH";
  115 |             statusIcon = "🟠";
  116 |         } else {
  117 |             scoreLabel = "KÉM";
  118 |             statusIcon = "🔴";
  119 |         }
  120 | 
  121 |         // Tạo báo cáo tổng kết dạng text
  122 |         const summaryLines = [
  123 |             `══════════════════════════════════════`,
  124 |             `   ${statusIcon} KẾT QUẢ CHẤM ĐIỂM SEO`,
  125 |             `══════════════════════════════════════`,
  126 |             `   Điểm số:     ${score}/100`,
  127 |             `   Đánh giá:    ${scoreLabel}`,
  128 |             `   Ngưỡng đạt:  ${threshold}%`,
  129 |             `   Kết quả:     ${statusText}`,
  130 |             `──────────────────────────────────────`,
  131 |             `   Tổng tiêu chí:  ${total}`,
  132 |             `   ✅ Đạt:          ${passed}`,
  133 |             `   ❌ Không đạt:    ${failed}`,
  134 |             `══════════════════════════════════════`,
  135 |         ];
  136 | 
  137 |         if (failures.length > 0) {
  138 |             summaryLines.push(``, `📋 CHI TIẾT LỖI CẦN KHẮC PHỤC (${failed}/${total}):`);
  139 | 
  140 |             // Group errors by their assigned group
  141 |             const groupedFailures = failures.reduce((acc, f) => {
  142 |                 if (!acc[f.group]) acc[f.group] = [];
  143 |                 acc[f.group].push(f);
  144 |                 return acc;
  145 |             }, {} as Record<string, ScorecardFailure[]>);
  146 | 
  147 |             let globalIndex = 1;
  148 |             for (const [group, items] of Object.entries(groupedFailures)) {
  149 |                 summaryLines.push(`--- ${group.toUpperCase()} ---`);
  150 |                 items.forEach((f) => {
  151 |                     summaryLines.push(`   ${globalIndex}. [${f.step}]`);
  152 |                     summaryLines.push(`      → ${f.message}`);
  153 |                     globalIndex++;
  154 |                 });
  155 |             }
  156 |         }
  157 | 
  158 |         const summaryText = summaryLines.join("\n");
  159 | 
  160 |         // Step cuối cùng — hiển thị bảng điểm + quyết định PASS/FAIL
  161 |         await customStep(
  162 |             page,
  163 |             `13. 🏆 Kết quả chấm điểm SEO: ${score}/100 — ${statusText} (${scoreLabel})`,
  164 |             async () => {
  165 |                 // Đính kèm bảng điểm text
  166 |                 await allure.attachment(
  167 |                     "Bảng điểm SEO",
  168 |                     Buffer.from(summaryText, "utf-8"),
  169 |                     "text/plain"
  170 |                 );
  171 | 
  172 |                 // Gắn description vào Test Case trên Allure
  173 |                 await allure.description(
  174 |                     `[${statusText}] Điểm SEO: ${score}/100 | Đạt: ${passed}/${total} tiêu chí | Ngưỡng: ${threshold}%\n\n` +
  175 |                     `${scoreLabel}`
  176 |                 );
  177 | 
  178 |                 // 🚀 ĐÂY LÀ DÒNG DUY NHẤT quyết định Test PASS hay FAIL
  179 |                 if (!isPass) {
> 180 |                     throw new Error(
      |                           ^ Error: ❌ FAIL — Điểm SEO 68/100 dưới ngưỡng 70%. Có 20/62 tiêu chí không đạt.
  181 |                         `❌ FAIL — Điểm SEO ${score}/100 dưới ngưỡng ${threshold}%. ` +
  182 |                         `Có ${failed}/${total} tiêu chí không đạt.`
  183 |                     );
  184 |                 }
  185 |             },
  186 |             { screenshot: true }
  187 |         );
  188 |     }
  189 | }
```