# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo-advanced.spec.ts >> SEO TIÊU CHUẨN CHUYÊN SÂU (ADVANCED) — PHẦN B >> [Advanced] Kiểm tra SEO chuyên sâu: AIRFLEX™
- Location: tests/seo-advanced.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 56/100 dưới ngưỡng 60%. Có 15/34 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e4]:
      - link "🏋️ RUNPOW COLLECTION CHÍNH THỨC MỞ BÁN TẠI 160STORE" [ref=e6] [cursor=pointer]:
        - /url: /
        - paragraph [ref=e7]:
          - strong [ref=e8]: 🏋️ RUNPOW COLLECTION CHÍNH THỨC MỞ BÁN TẠI 160STORE
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
            - /url: /collections/do-he-nam
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
    - text: /
    - generic [ref=e106]:
      - img "Hinh anh cam hung" [ref=e107]
      - generic [ref=e108]:
        - generic [ref=e109]:
          - heading "DÒNG SẢN PHẨM TIẾP THEO CỦA" [level=3] [ref=e110]
          - heading "GỌN NHẸ HÀNH TRANG, LINH HOẠT HÀNH TRÌNH" [level=2] [ref=e111]
          - paragraph [ref=e112]: AirFlex siêu gọn nhẹ với tổ hợp thành phần hiệu suất cao gồm TENCEL™, Filament, Recycled Poly, Spandex, kiểm soát cấu trúc sợi để đảm bảo nhẹ khi mặc – bền khi sử dụng – ổn định khi gấp, xếp. Giúp hành trang gọn lại, để hành trình linh hoạt hơn.
        - img "imgtext_img" [ref=e113]
    - generic [ref=e120]:
      - link "Quần Jeans Nam ICONDENIM Airflex Gọn Nhẹ Linh Hoạt Light Grey" [ref=e122] [cursor=pointer]:
        - /url: /products/quan-jeans-nam-icondenim-airflex-gon-nhe-linh-hoat-light-grey
        - img "Quần Jeans Nam ICONDENIM Airflex Gọn Nhẹ Linh Hoạt Light Grey" [ref=e123]
      - generic [ref=e124]:
        - heading "Quần Jeans Nam ICONDENIM Airflex Gọn Nhẹ Linh Hoạt Light Grey" [level=3] [ref=e125]:
          - link "Quần Jeans Nam ICONDENIM Airflex Gọn Nhẹ Linh Hoạt Light Grey" [ref=e126] [cursor=pointer]:
            - /url: /products/quan-jeans-nam-icondenim-airflex-gon-nhe-linh-hoat-light-grey
        - img [ref=e129]:
          - generic [ref=e131]: AIRFLEX
        - generic [ref=e132]:
          - generic [ref=e133]:
            - paragraph [ref=e134]: 599,000₫
            - generic:
              - button "Btn Quickview":
                - img "Btn Quickview"
            - button "Thêm vào giỏ Thêm vào giỏ" [ref=e136] [cursor=pointer]:
              - generic [ref=e137]:
                - img "Thêm vào giỏ" [ref=e138]
                - img "Thêm vào giỏ" [ref=e139]
          - list
    - generic [ref=e141]:
      - img "Hinh anh cam hung" [ref=e143]
      - generic [ref=e146]:
        - generic [ref=e148]:
          - link "Áo Khoác Gió Active Nam ICONDENIM Airflex Gọn Nhẹ Linh Hoạt" [ref=e150] [cursor=pointer]:
            - /url: /products/ao-khoac-gio-active-nam-icondenim-airflex-gon-nhe-linh-hoat
            - img "Áo Khoác Gió Active Nam ICONDENIM Airflex Gọn Nhẹ Linh Hoạt" [ref=e151]
          - generic [ref=e152]:
            - heading "Áo Khoác Gió Active Nam ICONDENIM Airflex Gọn Nhẹ Linh Hoạt" [level=3] [ref=e153]:
              - link "Áo Khoác Gió Active Nam ICONDENIM Airflex Gọn Nhẹ Linh Hoạt" [ref=e154] [cursor=pointer]:
                - /url: /products/ao-khoac-gio-active-nam-icondenim-airflex-gon-nhe-linh-hoat
            - img [ref=e157]:
              - generic [ref=e159]: AIRFLEX
            - generic [ref=e160]:
              - generic [ref=e161]:
                - paragraph [ref=e162]: 549,000₫
                - generic:
                  - button "Btn Quickview":
                    - img "Btn Quickview"
                - button "Thêm vào giỏ Thêm vào giỏ" [ref=e164] [cursor=pointer]:
                  - generic [ref=e165]:
                    - img "Thêm vào giỏ" [ref=e166]
                    - img "Thêm vào giỏ" [ref=e167]
              - list
        - generic [ref=e169]:
          - link "Quần Short Tây Nam ICONDENIM Airflex Gọn Nhẹ Linh Hoạt Multi-Task" [ref=e171] [cursor=pointer]:
            - /url: /products/quan-short-tay-nam-icondenim-airflex-gon-nhe-linh-hoat-multi-task
            - img "Quần Short Tây Nam ICONDENIM Airflex Gọn Nhẹ Linh Hoạt Multi-Task" [ref=e172]
          - generic [ref=e173]:
            - heading "Quần Short Tây Nam ICONDENIM Airflex Gọn Nhẹ Linh Hoạt Multi-Task" [level=3] [ref=e174]:
              - link "Quần Short Tây Nam ICONDENIM Airflex Gọn Nhẹ Linh Hoạt Multi-Task" [ref=e175] [cursor=pointer]:
                - /url: /products/quan-short-tay-nam-icondenim-airflex-gon-nhe-linh-hoat-multi-task
            - img [ref=e178]:
              - generic [ref=e180]: AIRFLEX
            - generic [ref=e181]:
              - generic [ref=e182]:
                - paragraph [ref=e183]: 429,000₫
                - generic:
                  - button "Btn Quickview":
                    - img "Btn Quickview"
                - button "Thêm vào giỏ Thêm vào giỏ" [ref=e185] [cursor=pointer]:
                  - generic [ref=e186]:
                    - img "Thêm vào giỏ" [ref=e187]
                    - img "Thêm vào giỏ" [ref=e188]
              - list
    - generic [ref=e190]:
      - generic [ref=e191]:
        - heading "Air Feeling" [level=2] [ref=e192]
        - paragraph [ref=e193]: Tổ hợp thành phần cải tiến hiệu suất
      - generic [ref=e194]:
        - article [ref=e195]:
          - generic [ref=e196]:
            - generic [ref=e197]:
              - generic [ref=e198]: 29%
              - generic [ref=e199]: TENCEL™
            - paragraph [ref=e200]: Là loại sợi sinh học có nguồn gốc từ bột gỗ, nổi bật ở cảm giác mặc và khả năng điều tiết nhiệt – ẩm.
        - article [ref=e201]:
          - generic [ref=e202]:
            - generic [ref=e203]:
              - generic [ref=e204]: 39%
              - generic [ref=e205]: Filament
            - paragraph [ref=e206]: Là sợi dài liên tục (khác với sợi ngắn như cotton), với cấu trúc dệt chéo để tăng độ bền, độ mượt, độ ổn định cho vải.
        - article [ref=e207]:
          - generic [ref=e208]:
            - generic [ref=e209]:
              - generic [ref=e210]: 90%
              - generic [ref=e211]: Recycle Poly
            - paragraph [ref=e212]: Là sợi polyester được tái chế từ chai nhựa PET hoặc phế liệu nhựa công nghiệp, sau đó xử lý lại để đạt chất lượng tương đương poly nguyên sinh.
  - generic [ref=e236]:
    - generic [ref=e237]:
      - paragraph [ref=e238]: Đăng kí nhận tin
      - generic [ref=e240]:
        - generic [ref=e241]:
          - text: 
          - textbox "Email" [ref=e242]
        - button "Đăng ký" [ref=e243] [cursor=pointer]:
          - generic [ref=e244]: 
          - text: Đăng ký
    - list [ref=e246]:
      - listitem [ref=e247]:
        - link "Liên hệ với chúng tôi qua Zalo" [ref=e248] [cursor=pointer]:
          - /url: //zalo.me/3664144181122308942
          - img "Liên hệ với chúng tôi qua Zalo" [ref=e249]
      - listitem [ref=e250]:
        - link [ref=e251] [cursor=pointer]:
          - /url: https://www.youtube.com/@storehanghieu1608
          - generic [ref=e252]: 
      - listitem [ref=e253]:
        - link [ref=e254] [cursor=pointer]:
          - /url: https://www.instagram.com/160store
          - generic [ref=e255]: 
      - listitem [ref=e256]:
        - link [ref=e257] [cursor=pointer]:
          - /url: https://www.facebook.com/160store
          - generic [ref=e258]: 
  - contentinfo [ref=e259]:
    - generic [ref=e261]:
      - generic [ref=e262]:
        - generic [ref=e263]:
          - generic [ref=e265]: Giới thiệu
          - generic [ref=e266]:
            - paragraph [ref=e267]: 160STORE - Chuỗi Phân Phối Thời Trang Nam Chuẩn Hiệu
            - list [ref=e268]:
              - listitem [ref=e269]:
                - generic [ref=e270]: 
                - link "02871006789" [ref=e271] [cursor=pointer]:
                  - /url: tel:02871006789
              - listitem [ref=e272]:
                - generic [ref=e273]: 
                - link "cs@160store.com" [ref=e274] [cursor=pointer]:
                  - /url: mailto:cs@160store.com
              - listitem [ref=e275]:
                - generic [ref=e276]: 
                - generic [ref=e277]: "Giờ mở cửa : 08:30 - 22:00"
              - listitem [ref=e278]:
                - generic [ref=e279]: 
                - generic [ref=e280]: Nhân viên tư vấn phản hồi tin nhắn đến 24:00 (Mỗi ngày)
              - listitem [ref=e281]:
                - link [ref=e282] [cursor=pointer]:
                  - /url: http://online.gov.vn/Home/WebDetails/121880
                  - img [ref=e283]
              - listitem [ref=e284]:
                - link "DMCA.com Protection Status" [ref=e285] [cursor=pointer]:
                  - /url: https://www.dmca.com/Protection/Status.aspx?ID=9049de26-d97b-48dc-ab97-1e5fcb221fba&refurl=https://160store.com/collections/airflex-jeans
                  - img "DMCA.com Protection Status" [ref=e286]
        - generic [ref=e287]:
          - generic [ref=e289]: CHÍNH SÁCH
          - list [ref=e291]:
            - listitem [ref=e292]:
              - link "Hướng dẫn đặt hàng" [ref=e293] [cursor=pointer]:
                - /url: /pages/huong-dan-dat-hang
            - listitem [ref=e294]:
              - paragraph [ref=e297] [cursor=pointer]: Chính sách
        - generic [ref=e299]:
          - link "ĐỊA CHỈ CỬA HÀNG (20 CH)" [ref=e302] [cursor=pointer]:
            - /url: https://www.160store.com/pages/lien-he
          - generic [ref=e304]:
            - generic [ref=e305]:
              - generic [ref=e306]:
                - img [ref=e307]
                - paragraph [ref=e308]: HỒ CHÍ MINH (10 CH)
              - paragraph [ref=e309]: 274 Ba Cu, Phường Vũng Tàu, TP.HCM
            - generic [ref=e310]:
              - generic [ref=e311]:
                - img [ref=e312]
                - paragraph [ref=e313]:
                  - text: HÀ NỘI (2 CH)
                  - generic [ref=e314]: New
              - paragraph [ref=e315]: 27 Tôn Đức Thắng - P. Văn Miếu - Quốc Tử Giám; TP. Hà Nội
            - generic [ref=e316]:
              - generic [ref=e317]:
                - img [ref=e318]
                - paragraph [ref=e319]: CẦN THƠ (2 CH)
              - paragraph [ref=e320]: Số 35 Trần Phú, Phường Ninh Kiều, TP.Cần Thơ
            - generic [ref=e321]:
              - generic [ref=e322]:
                - img [ref=e323]
                - paragraph [ref=e324]: ĐÀ NẴNG (2 CH)
              - paragraph [ref=e325]: 332 Đ. Lê Duẩn, Phường Thanh Khê, TP.Đà Nẵng
            - link "XEM TẤT CẢ CỬA HÀNG" [ref=e327] [cursor=pointer]:
              - /url: https://www.160store.com/pages/lien-he
        - generic [ref=e330]:
          - generic [ref=e331]: PHƯƠNG THỨC THANH TOÁN
          - generic [ref=e332]:
            - img "Image Spay" [ref=e333]
            - img "Image VNPay" [ref=e334]
            - img "Image Cod" [ref=e335]
      - generic [ref=e340]: BẢN QUYỀN THUỘC VỀ 160STORE
  - list [ref=e342]
  - button "back to top" [ref=e344] [cursor=pointer]:
    - img [ref=e345]
    - text: back to top
  - paragraph [ref=e351]: Bạn chưa chọn size sản phẩm!
  - generic:
    - generic:
      - generic: 🔬 BÁO CÁO SEO CHUYÊN SÂU
      - generic: "Phần B: Advanced"
    - generic:
      - generic:
        - generic:
          - generic:
            - generic:
              - generic: "53"
              - generic: ADV
          - generic: TRUNG BÌNH
        - generic:
          - generic:
            - generic: "Trang:"
            - strong: AIRFLEX™
          - generic:
            - generic: "Đạt:"
            - strong: 17/32
      - generic [ref=e352]:
        - generic [ref=e353]: "❌ Lỗi cần khắc phục (15):"
        - generic [ref=e354]:
          - generic [ref=e355]:
            - generic [ref=e356]: E-E-A-T
            - generic [ref=e357]: 1/5
          - generic [ref=e358]:
            - generic [ref=e359]:
              - generic [ref=e360]: "Thông tin tác giả: Thiếu"
              - generic [ref=e361]: B2.1
            - generic [ref=e362]: ⚠️ Thiếu thông tin tác giả
          - generic [ref=e363]:
            - generic [ref=e364]:
              - generic [ref=e365]: "Ngày đăng (datePublished): Thiếu"
              - generic [ref=e366]: B2.2
            - generic [ref=e367]: ⚠️ Thiếu ngày đăng bài
          - generic [ref=e368]:
            - generic [ref=e369]:
              - generic [ref=e370]: "Ngày cập nhật (dateModified): Thiếu"
              - generic [ref=e371]: B2.3
            - generic [ref=e372]: ⚠️ Thiếu ngày cập nhật
          - generic [ref=e373]:
            - generic [ref=e374]:
              - generic [ref=e375]: "Trust Pages: 0/8 tồn tại"
              - generic [ref=e376]: B2.4
            - generic [ref=e377]: ⚠️ Chỉ 0 trust pages
        - generic [ref=e378]:
          - generic [ref=e379]:
            - generic [ref=e380]: Schema
            - generic [ref=e381]: 2/4
          - generic [ref=e382]:
            - generic [ref=e383]:
              - generic [ref=e384]: "Schema types: [ClothingStore, WebSite]"
              - generic [ref=e385]: B3.1
            - generic [ref=e386]: "⚠️ Thiếu types: Organization, BreadcrumbList"
          - generic [ref=e387]:
            - generic [ref=e388]:
              - generic [ref=e389]: "BreadcrumbList Schema: Thiếu"
              - generic [ref=e390]: B3.4
            - generic [ref=e391]: ⚠️ Thiếu BreadcrumbList Schema
        - generic [ref=e392]:
          - generic [ref=e393]:
            - generic [ref=e394]: Linking
            - generic [ref=e395]: 1/2
          - generic [ref=e396]:
            - generic [ref=e397]:
              - generic [ref=e398]: "Breadcrumb Schema: Thiếu"
              - generic [ref=e399]: B5.2
            - generic [ref=e400]: ⚠️ Thiếu BreadcrumbList Schema
        - generic [ref=e401]:
          - generic [ref=e402]:
            - generic [ref=e403]: Performance
            - generic [ref=e404]: 4/7
          - generic [ref=e405]:
            - generic [ref=e406]:
              - generic [ref=e407]: "Lazy Load: 15/32 (47%)"
              - generic [ref=e408]: B6.5
            - generic [ref=e409]: ⚠️ Chỉ 47% lazy
          - generic [ref=e410]:
            - generic [ref=e411]:
              - generic [ref=e412]: "Font: swap=✘, preload=0"
              - generic [ref=e413]: B6.6
            - generic [ref=e414]: ⚠️ Font chưa tối ưu
          - generic [ref=e415]:
            - generic [ref=e416]:
              - generic [ref=e417]: "Responsive Images: 6/51 (12%)"
              - generic [ref=e418]: B6.7
            - generic [ref=e419]: ⚠️ Chỉ 12% có srcset
        - generic [ref=e420]:
          - generic [ref=e421]:
            - generic [ref=e422]: UX
            - generic [ref=e423]: 3/4
          - generic [ref=e424]:
            - generic [ref=e425]:
              - generic [ref=e426]: "ARIA thiếu: 32 phần tử"
              - generic [ref=e427]: B7.3
            - generic [ref=e428]: ⚠️ 32 phần tử thiếu ARIA
        - generic [ref=e429]:
          - generic [ref=e430]:
            - generic [ref=e431]: URL
            - generic [ref=e432]: 1/4
          - generic [ref=e433]:
            - generic [ref=e434]:
              - generic [ref=e435]: "WWW Redirect: Lỗi"
              - generic [ref=e436]: B8.1
            - generic [ref=e437]: ⚠️ www redirect sai
          - generic [ref=e438]:
            - generic [ref=e439]:
              - generic [ref=e440]: "HTTPS Redirect: Lỗi"
              - generic [ref=e441]: B8.2
            - generic [ref=e442]: ⚠️ HTTPS redirect sai
          - generic [ref=e443]:
            - generic [ref=e444]:
              - generic [ref=e445]: "Trailing Slash: Lỗi"
              - generic [ref=e446]: B8.3
            - generic [ref=e447]: ⚠️ Trailing slash không nhất quán
        - generic [ref=e448]:
          - generic [ref=e449]:
            - generic [ref=e450]: CrUX
            - generic [ref=e451]: 1/2
          - generic [ref=e452]:
            - generic [ref=e453]:
              - generic [ref=e454]: "LCP (Thực tế): 6486ms"
              - generic [ref=e455]: API.3
            - generic [ref=e456]: ⚠️ LCP chậm (6486ms)
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 56/100 dưới ngưỡng 60%. Có 15/34 tiêu chí không đạt.
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