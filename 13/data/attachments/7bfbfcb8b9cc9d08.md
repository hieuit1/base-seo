# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo.spec.ts >> SEO TIÊU CHUẨN CƠ BẢN CHO WEB >> Kiểm tra SEO Onpage: The Originals Legacy Collection
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
            - generic [ref=e84]:
              - img [ref=e85]
              - text: BST Hè 2026
        - listitem [ref=e86]:
          - link "OUTLET" [ref=e87] [cursor=pointer]:
            - /url: /collections/outlet
            - generic [ref=e88]: OUTLET
          - generic [ref=e89]: "-50%"
        - listitem [ref=e90]:
          - link "COLLECTION" [ref=e91] [cursor=pointer]:
            - /url: /
            - generic [ref=e92]: COLLECTION
        - listitem [ref=e94]:
          - link "JEANS" [ref=e95] [cursor=pointer]:
            - /url: /collections/quan-jeans
            - generic [ref=e96]: JEANS
        - listitem [ref=e98]:
          - link "TIN THỜI TRANG" [ref=e99] [cursor=pointer]:
            - /url: https://www.160store.com/blogs/all
            - generic [ref=e100]: TIN THỜI TRANG
  - text: + + + + + + + + +
  - main [ref=e101]:
    - text: /
    - generic [ref=e109]:
      - generic [ref=e111]:
        - link "Áo Thun Nam ICONDENIM Lusitano Legend" [ref=e113] [cursor=pointer]:
          - /url: /products/ao-thun-nam-icondenim-lusitano-legend
          - img "Áo Thun Nam ICONDENIM Lusitano Legend" [ref=e114]
        - generic [ref=e116]: 15%
        - generic [ref=e117]:
          - heading "Áo Thun Nam ICONDENIM Lusitano Legend" [level=3] [ref=e118]:
            - link "Áo Thun Nam ICONDENIM Lusitano Legend" [ref=e119] [cursor=pointer]:
              - /url: /products/ao-thun-nam-icondenim-lusitano-legend
          - img [ref=e122]:
            - generic [ref=e124]: Sale
          - generic [ref=e125]:
            - generic [ref=e126]:
              - paragraph [ref=e127]:
                - text: 339,000₫
                - deletion [ref=e128]: 399,000₫
              - generic:
                - button "Btn Quickview":
                  - img "Btn Quickview"
              - button "Thêm vào giỏ Thêm vào giỏ" [ref=e130] [cursor=pointer]:
                - generic [ref=e131]:
                  - img "Thêm vào giỏ" [ref=e132]
                  - img "Thêm vào giỏ" [ref=e133]
            - list
      - generic [ref=e135]:
        - link "Áo Thun Nam ICONDENIM Ice Field" [ref=e137] [cursor=pointer]:
          - /url: /products/ao-thun-nam-icondenim-ice-field
          - img "Áo Thun Nam ICONDENIM Ice Field" [ref=e138]
        - generic [ref=e140]: 15%
        - generic [ref=e141]:
          - heading "Áo Thun Nam ICONDENIM Ice Field" [level=3] [ref=e142]:
            - link "Áo Thun Nam ICONDENIM Ice Field" [ref=e143] [cursor=pointer]:
              - /url: /products/ao-thun-nam-icondenim-ice-field
          - img [ref=e146]:
            - generic [ref=e148]: Sale
          - generic [ref=e149]:
            - generic [ref=e150]:
              - paragraph [ref=e151]:
                - text: 339,000₫
                - deletion [ref=e152]: 399,000₫
              - generic:
                - button "Btn Quickview":
                  - img "Btn Quickview"
              - button "Thêm vào giỏ Thêm vào giỏ" [ref=e154] [cursor=pointer]:
                - generic [ref=e155]:
                  - img "Thêm vào giỏ" [ref=e156]
                  - img "Thêm vào giỏ" [ref=e157]
            - list
      - generic [ref=e159]:
        - link "Áo Thun Nam ICONDENIM Prime Seven" [ref=e161] [cursor=pointer]:
          - /url: /products/ao-thun-nam-icondenim-prime-seven
          - img "Áo Thun Nam ICONDENIM Prime Seven" [ref=e162]
        - generic [ref=e164]: 15%
        - generic [ref=e165]:
          - heading "Áo Thun Nam ICONDENIM Prime Seven" [level=3] [ref=e166]:
            - link "Áo Thun Nam ICONDENIM Prime Seven" [ref=e167] [cursor=pointer]:
              - /url: /products/ao-thun-nam-icondenim-prime-seven
          - img [ref=e170]:
            - generic [ref=e172]: Sale
          - generic [ref=e173]:
            - generic [ref=e174]:
              - paragraph [ref=e175]:
                - text: 322,000₫
                - deletion [ref=e176]: 379,000₫
              - generic:
                - button "Btn Quickview":
                  - img "Btn Quickview"
              - button "Thêm vào giỏ Thêm vào giỏ" [ref=e178] [cursor=pointer]:
                - generic [ref=e179]:
                  - img "Thêm vào giỏ" [ref=e180]
                  - img "Thêm vào giỏ" [ref=e181]
            - list
      - generic [ref=e183]:
        - link "Áo Thun Nam ICONDENIM Green Pitch" [ref=e185] [cursor=pointer]:
          - /url: /products/ao-thun-nam-icondenim-green-pitch
          - img "Áo Thun Nam ICONDENIM Green Pitch" [ref=e186]
        - generic [ref=e188]: 15%
        - generic [ref=e189]:
          - heading "Áo Thun Nam ICONDENIM Green Pitch" [level=3] [ref=e190]:
            - link "Áo Thun Nam ICONDENIM Green Pitch" [ref=e191] [cursor=pointer]:
              - /url: /products/ao-thun-nam-icondenim-green-pitch
          - img [ref=e194]:
            - generic [ref=e196]: Sale
          - generic [ref=e197]:
            - generic [ref=e198]:
              - paragraph [ref=e199]:
                - text: 339,000₫
                - deletion [ref=e200]: 399,000₫
              - generic:
                - button "Btn Quickview":
                  - img "Btn Quickview"
              - button "Thêm vào giỏ Thêm vào giỏ" [ref=e202] [cursor=pointer]:
                - generic [ref=e203]:
                  - img "Thêm vào giỏ" [ref=e204]
                  - img "Thêm vào giỏ" [ref=e205]
            - list
      - generic [ref=e207]:
        - link "Áo Thun Nam ICONDENIM Golden Squad" [ref=e209] [cursor=pointer]:
          - /url: /products/ao-thun-nam-icondenim-golden-squad
          - img "Áo Thun Nam ICONDENIM Golden Squad" [ref=e210]
        - generic [ref=e212]: 15%
        - generic [ref=e213]:
          - heading "Áo Thun Nam ICONDENIM Golden Squad" [level=3] [ref=e214]:
            - link "Áo Thun Nam ICONDENIM Golden Squad" [ref=e215] [cursor=pointer]:
              - /url: /products/ao-thun-nam-icondenim-golden-squad
          - img [ref=e218]:
            - generic [ref=e220]: Sale
          - generic [ref=e221]:
            - generic [ref=e222]:
              - paragraph [ref=e223]:
                - text: 322,000₫
                - deletion [ref=e224]: 379,000₫
              - generic:
                - button "Btn Quickview":
                  - img "Btn Quickview"
              - button "Thêm vào giỏ Thêm vào giỏ" [ref=e226] [cursor=pointer]:
                - generic [ref=e227]:
                  - img "Thêm vào giỏ" [ref=e228]
                  - img "Thêm vào giỏ" [ref=e229]
            - list
  - generic [ref=e251]:
    - generic [ref=e252]:
      - paragraph [ref=e253]: Đăng kí nhận tin
      - generic [ref=e255]:
        - generic [ref=e256]:
          - text: 
          - textbox "Email" [ref=e257]
        - button "Đăng ký" [ref=e258] [cursor=pointer]:
          - generic [ref=e259]: 
          - text: Đăng ký
    - list [ref=e261]:
      - listitem [ref=e262]:
        - link "Liên hệ với chúng tôi qua Zalo" [ref=e263] [cursor=pointer]:
          - /url: //zalo.me/3664144181122308942
          - img "Liên hệ với chúng tôi qua Zalo" [ref=e264]
      - listitem [ref=e265]:
        - link [ref=e266] [cursor=pointer]:
          - /url: https://www.youtube.com/@storehanghieu1608
          - generic [ref=e267]: 
      - listitem [ref=e268]:
        - link [ref=e269] [cursor=pointer]:
          - /url: https://www.instagram.com/160store
          - generic [ref=e270]: 
      - listitem [ref=e271]:
        - link [ref=e272] [cursor=pointer]:
          - /url: https://www.facebook.com/160store
          - generic [ref=e273]: 
  - contentinfo [ref=e274]:
    - generic [ref=e276]:
      - generic [ref=e277]:
        - generic [ref=e278]:
          - generic [ref=e280]: Giới thiệu
          - generic [ref=e281]:
            - paragraph [ref=e282]: 160STORE - Chuỗi Phân Phối Thời Trang Nam Chuẩn Hiệu
            - list [ref=e283]:
              - listitem [ref=e284]:
                - generic [ref=e285]: 
                - link "02871006789" [ref=e286] [cursor=pointer]:
                  - /url: tel:02871006789
              - listitem [ref=e287]:
                - generic [ref=e288]: 
                - link "cs@160store.com" [ref=e289] [cursor=pointer]:
                  - /url: mailto:cs@160store.com
              - listitem [ref=e290]:
                - generic [ref=e291]: 
                - generic [ref=e292]: "Giờ mở cửa : 08:30 - 22:00"
              - listitem [ref=e293]:
                - generic [ref=e294]: 
                - generic [ref=e295]: Nhân viên tư vấn phản hồi tin nhắn đến 24:00 (Mỗi ngày)
              - listitem [ref=e296]:
                - link [ref=e297] [cursor=pointer]:
                  - /url: http://online.gov.vn/nen-tang/1a643809-3f92-4419-944d-c2d4fdffb78b
                  - img [ref=e298]
              - listitem [ref=e299]:
                - link "DMCA.com Protection Status" [ref=e300] [cursor=pointer]:
                  - /url: https://www.dmca.com/Protection/Status.aspx?ID=9049de26-d97b-48dc-ab97-1e5fcb221fba&refurl=https://160store.com/collections/the-originals-legacy-2026
                  - img "DMCA.com Protection Status" [ref=e301]
        - generic [ref=e302]:
          - generic [ref=e304]: CHÍNH SÁCH
          - list [ref=e306]:
            - listitem [ref=e307]:
              - link "Hướng dẫn đặt hàng" [ref=e308] [cursor=pointer]:
                - /url: /pages/huong-dan-dat-hang
            - listitem [ref=e309]:
              - paragraph [ref=e312] [cursor=pointer]: Chính sách
        - generic [ref=e314]:
          - link "ĐỊA CHỈ CỬA HÀNG (20 CH)" [ref=e317] [cursor=pointer]:
            - /url: https://www.160store.com/pages/lien-he
          - generic [ref=e319]:
            - generic [ref=e320]:
              - generic [ref=e321]:
                - img [ref=e322]
                - paragraph [ref=e323]: HỒ CHÍ MINH (10 CH)
              - paragraph [ref=e324]: 274 Ba Cu, Phường Vũng Tàu, TP.HCM
            - generic [ref=e325]:
              - generic [ref=e326]:
                - img [ref=e327]
                - paragraph [ref=e328]:
                  - text: HÀ NỘI (2 CH)
                  - generic [ref=e329]: New
              - paragraph [ref=e330]: 27 Tôn Đức Thắng - P. Văn Miếu - Quốc Tử Giám; TP. Hà Nội
            - generic [ref=e331]:
              - generic [ref=e332]:
                - img [ref=e333]
                - paragraph [ref=e334]: CẦN THƠ (2 CH)
              - paragraph [ref=e335]: Số 35 Trần Phú, Phường Ninh Kiều, TP.Cần Thơ
            - generic [ref=e336]:
              - generic [ref=e337]:
                - img [ref=e338]
                - paragraph [ref=e339]: ĐÀ NẴNG (2 CH)
              - paragraph [ref=e340]: 332 Đ. Lê Duẩn, Phường Thanh Khê, TP.Đà Nẵng
            - link "XEM TẤT CẢ CỬA HÀNG" [ref=e342] [cursor=pointer]:
              - /url: https://www.160store.com/pages/lien-he
        - generic [ref=e345]:
          - generic [ref=e346]: PHƯƠNG THỨC THANH TOÁN
          - generic [ref=e347]:
            - img "Image Spay" [ref=e348]
            - img "Image VNPay" [ref=e349]
            - img "Image Cod" [ref=e350]
      - generic [ref=e355]: BẢN QUYỀN THUỘC VỀ 160STORE
  - list [ref=e357]
  - button "back to top" [ref=e359] [cursor=pointer]:
    - img [ref=e360]
    - text: back to top
  - paragraph [ref=e366]: Bạn chưa chọn size sản phẩm!
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
            - strong: The Originals Legacy Collection
          - generic:
            - generic: "Từ khóa chính:"
            - strong: the originals legacy collection
          - generic:
            - generic: "Tiêu chí đạt:"
            - strong: 22/38
      - generic [ref=e367]:
        - generic [ref=e368]: "❌ Chi tiết lỗi cần khắc phục (16):"
        - generic [ref=e369]:
          - generic [ref=e370]:
            - generic [ref=e371]:
              - strong [ref=e372]: "1.2 — Độ dài Title: 36 ký tự (chuẩn: 40–65)"
              - generic [ref=e373]: "1.2"
            - generic [ref=e374]: "⚠️ Lỗi: Title quá ngắn hoặc quá dài (36 ký tự), cần 40–65"
          - generic [ref=e375]:
            - generic [ref=e376]:
              - strong [ref=e377]: 1.3 — Title chứa keyword "the originals legacy collection"
              - generic [ref=e378]: "1.3"
            - generic [ref=e379]: "⚠️ Lỗi: Title không chứa keyword \"the originals legacy collection\""
          - generic [ref=e380]:
            - generic [ref=e381]:
              - strong [ref=e382]: "1.4 — Keyword nằm ở nửa đầu Title (vị trí: N/A)"
              - generic [ref=e383]: "1.4"
            - generic [ref=e384]: "⚠️ Lỗi: Bỏ qua — keyword \"the originals legacy collection\" không có trong Title"
          - generic [ref=e385]:
            - generic [ref=e386]:
              - strong [ref=e387]: 2.1 — Meta description tồn tại (Không tìm thấy)
              - generic [ref=e388]: "2.1"
            - generic [ref=e389]: "⚠️ Lỗi: Thẻ không tồn tại hoặc rỗng!"
          - generic [ref=e390]:
            - generic [ref=e391]:
              - strong [ref=e392]: "2.2 — Độ dài Meta: 0 ký tự (chuẩn: 120–160)"
              - generic [ref=e393]: "2.2"
            - generic [ref=e394]: "⚠️ Lỗi: Không thể đo — Meta description không tồn tại"
          - generic [ref=e395]:
            - generic [ref=e396]:
              - strong [ref=e397]: 2.3 — Meta description chứa keyword "the originals legacy collection"
              - generic [ref=e398]: "2.3"
            - generic [ref=e399]: "⚠️ Lỗi: Không thể kiểm tra — Meta description không tồn tại"
          - generic [ref=e400]:
            - generic [ref=e401]:
              - strong [ref=e402]: "3.1 — Trang có đúng 1 thẻ H1 (hiện tại: 0 thẻ)"
              - generic [ref=e403]: "3.1"
            - generic [ref=e404]: "⚠️ Lỗi: Trang không có thẻ H1 nào!"
          - generic [ref=e405]:
            - generic [ref=e406]:
              - strong [ref=e407]: 3.2 — H1 chứa keyword "the originals legacy collection"
              - generic [ref=e408]: "3.2"
            - generic [ref=e409]: "⚠️ Lỗi: Không có H1 để kiểm tra"
          - generic [ref=e410]:
            - generic [ref=e411]:
              - strong [ref=e412]: 4.2 — URL chứa keyword slug "the-originals-legacy-collection"
              - generic [ref=e413]: "4.2"
            - generic [ref=e414]: "⚠️ Lỗi: URL \"/collections/the-originals-legacy-2026\" không chứa keyword \"the-originals-legacy-collection\""
          - generic [ref=e415]:
            - generic [ref=e416]:
              - strong [ref=e417]: "5.2 — Mật độ keyword: 0.15% (chuẩn: 0.5%–2.5%)"
              - generic [ref=e418]: "5.2"
            - generic [ref=e419]: "⚠️ Lỗi: Mật độ keyword quá thấp: 0.15%, cần ≥ 0.5%"
          - generic [ref=e420]:
            - generic [ref=e421]:
              - strong [ref=e422]: 5.3 — Keyword "the originals legacy collection" xuất hiện trong 100 từ đầu
              - generic [ref=e423]: "5.3"
            - generic [ref=e424]: "⚠️ Lỗi: Keyword \"the originals legacy collection\" không xuất hiện trong 100 từ đầu"
          - generic [ref=e425]:
            - generic [ref=e426]:
              - strong [ref=e427]: "6.1 — 100% ảnh có thuộc tính alt (thiếu: 16/65)"
              - generic [ref=e428]: "6.1"
            - generic [ref=e429]: "⚠️ Lỗi: Có 16 hình ảnh thiếu thuộc tính 'alt'"
          - generic [ref=e430]:
            - generic [ref=e431]:
              - strong [ref=e432]: 6.2 — Có ảnh chứa keyword "the originals legacy collection" trong alt
              - generic [ref=e433]: "6.2"
            - generic [ref=e434]: "⚠️ Lỗi: Không có ảnh nào có alt chứa keyword \"the originals legacy collection\""
          - generic [ref=e435]:
            - generic [ref=e436]:
              - strong [ref=e437]: "7.3 — Anchor text chất lượng (lỗi: 7)"
              - generic [ref=e438]: "7.3"
            - generic [ref=e439]: "⚠️ Lỗi: 7 link có anchor text không tốt: \"\" → /, \"\" → /, \"\" → /, \"\" → /, \"\" → //zalo.me/3664144181122308942, \"\" → //m.me/1042686802417049, \"\" → //zalo.me/3664144181122308942"
          - generic [ref=e440]:
            - generic [ref=e441]:
              - strong [ref=e442]: "8.6 — Open Graph: og:title=✔, og:description=✘"
              - generic [ref=e443]: "8.6"
            - generic [ref=e444]: "⚠️ Lỗi: Thiếu og:description"
          - generic [ref=e445]:
            - generic [ref=e446]:
              - strong [ref=e447]: "8.7 — Twitter Card tags: 0 thẻ"
              - generic [ref=e448]: "8.7"
            - generic [ref=e449]: "⚠️ Lỗi: Trang thiếu Twitter Card tags"
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