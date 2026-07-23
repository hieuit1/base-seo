# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo-advanced.spec.ts >> SEO TIÊU CHUẨN CHUYÊN SÂU (ADVANCED) — PHẦN B >> [Advanced] Kiểm tra SEO chuyên sâu: ÁO BA LỖ
- Location: tests/seo-advanced.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 50/100 dưới ngưỡng 60%. Có 17/34 tiêu chí không đạt.
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
    - list [ref=e103]:
      - listitem [ref=e104]:
        - link "Trang chủ" [ref=e105] [cursor=pointer]:
          - /url: /
      - listitem [ref=e106]:
        - text: /
        - generic [ref=e107]: ÁO BA LỖ
    - generic [ref=e110]:
      - img "ÁO BA LỖ" [ref=e113]
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
        - generic [ref=e120]:
          - generic [ref=e122]:
            - link "Áo Tanktop Nam ICONDENIM Coastal Knit" [ref=e124] [cursor=pointer]:
              - /url: /products/ao-tanktop-nam-icondenim-coastal-knit
              - img "Áo Tanktop Nam ICONDENIM Coastal Knit" [ref=e125]
            - generic [ref=e126]:
              - heading "Áo Tanktop Nam ICONDENIM Coastal Knit" [level=3] [ref=e127]:
                - link "Áo Tanktop Nam ICONDENIM Coastal Knit" [ref=e128] [cursor=pointer]:
                  - /url: /products/ao-tanktop-nam-icondenim-coastal-knit
              - img [ref=e131]:
                - generic [ref=e132]: Hàng Mới
              - generic [ref=e133]:
                - generic [ref=e134]:
                  - paragraph [ref=e135]: 249,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e137] [cursor=pointer]:
                    - generic [ref=e138]:
                      - img "Thêm vào giỏ" [ref=e139]
                      - img "Thêm vào giỏ" [ref=e140]
                - list
          - generic [ref=e142]:
            - link "Áo Tanktop Nam RUNPOW Pro Swift" [ref=e144] [cursor=pointer]:
              - /url: /products/ao-tanktop-nam-runpow-pro-swift
              - img "Áo Tanktop Nam RUNPOW Pro Swift" [ref=e145]
            - generic [ref=e147]: 21%
            - generic [ref=e148]:
              - heading "Áo Tanktop Nam RUNPOW Pro Swift" [level=3] [ref=e149]:
                - link "Áo Tanktop Nam RUNPOW Pro Swift" [ref=e150] [cursor=pointer]:
                  - /url: /products/ao-tanktop-nam-runpow-pro-swift
              - img [ref=e153]:
                - generic [ref=e155]: Sale
              - generic [ref=e156]:
                - generic [ref=e157]:
                  - paragraph [ref=e158]:
                    - text: 229,000₫
                    - deletion [ref=e159]: 289,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e161] [cursor=pointer]:
                    - generic [ref=e162]:
                      - img "Thêm vào giỏ" [ref=e163]
                      - img "Thêm vào giỏ" [ref=e164]
                - list
          - generic [ref=e166]:
            - link "Áo Tanktop Nam RUNPOW Movefree" [ref=e168] [cursor=pointer]:
              - /url: /products/ao-tanktop-runpow-movefree
              - img "Áo Tanktop Nam RUNPOW Movefree" [ref=e169]
            - generic [ref=e171]: 21%
            - generic [ref=e172]:
              - heading "Áo Tanktop Nam RUNPOW Movefree" [level=3] [ref=e173]:
                - link "Áo Tanktop Nam RUNPOW Movefree" [ref=e174] [cursor=pointer]:
                  - /url: /products/ao-tanktop-runpow-movefree
              - img [ref=e177]:
                - generic [ref=e179]: Sale
              - generic [ref=e180]:
                - generic [ref=e181]:
                  - paragraph [ref=e182]:
                    - text: 229,000₫
                    - deletion [ref=e183]: 289,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e185] [cursor=pointer]:
                    - generic [ref=e186]:
                      - img "Thêm vào giỏ" [ref=e187]
                      - img "Thêm vào giỏ" [ref=e188]
                - list
          - generic [ref=e190]:
            - link "Áo Tanktop Nam RUNPOW In Camo" [ref=e192] [cursor=pointer]:
              - /url: /products/ao-tanktop-nam-runpow-in-camo
              - img "Áo Tanktop Nam RUNPOW In Camo" [ref=e193]
            - generic [ref=e195]: 20%
            - generic [ref=e196]:
              - heading "Áo Tanktop Nam RUNPOW In Camo" [level=3] [ref=e197]:
                - link "Áo Tanktop Nam RUNPOW In Camo" [ref=e198] [cursor=pointer]:
                  - /url: /products/ao-tanktop-nam-runpow-in-camo
              - img [ref=e201]:
                - generic [ref=e203]: Sale
              - generic [ref=e204]:
                - generic [ref=e205]:
                  - paragraph [ref=e206]:
                    - text: 239,000₫
                    - deletion [ref=e207]: 299,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e209] [cursor=pointer]:
                    - generic [ref=e210]:
                      - img "Thêm vào giỏ" [ref=e211]
                      - img "Thêm vào giỏ" [ref=e212]
                - list
          - generic [ref=e214]:
            - link "Áo Tanktop Nam ICONDENIM Blackcourt" [ref=e216] [cursor=pointer]:
              - /url: /products/ao-tanktop-nam-icondenim-blackcourt
              - img "Áo Tanktop Nam ICONDENIM Blackcourt" [ref=e217]
            - generic [ref=e218]:
              - heading "Áo Tanktop Nam ICONDENIM Blackcourt" [level=3] [ref=e219]:
                - link "Áo Tanktop Nam ICONDENIM Blackcourt" [ref=e220] [cursor=pointer]:
                  - /url: /products/ao-tanktop-nam-icondenim-blackcourt
              - img [ref=e223]:
                - generic [ref=e224]: Hàng Mới
              - generic [ref=e225]:
                - generic [ref=e226]:
                  - paragraph [ref=e227]: 299,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e229] [cursor=pointer]:
                    - generic [ref=e230]:
                      - img "Thêm vào giỏ" [ref=e231]
                      - img "Thêm vào giỏ" [ref=e232]
                - list
          - generic [ref=e234]:
            - link "Áo Tanktop Nam ICONDENIM Steel Fade" [ref=e236] [cursor=pointer]:
              - /url: /products/ao-tanktop-nam-icondenim-steel-fade
              - img "Áo Tanktop Nam ICONDENIM Steel Fade" [ref=e237]
            - generic [ref=e238]:
              - heading "Áo Tanktop Nam ICONDENIM Steel Fade" [level=3] [ref=e239]:
                - link "Áo Tanktop Nam ICONDENIM Steel Fade" [ref=e240] [cursor=pointer]:
                  - /url: /products/ao-tanktop-nam-icondenim-steel-fade
              - img [ref=e243]:
                - generic [ref=e244]: Hàng Mới
              - generic [ref=e245]:
                - generic [ref=e246]:
                  - paragraph [ref=e247]: 299,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e249] [cursor=pointer]:
                    - generic [ref=e250]:
                      - img "Thêm vào giỏ" [ref=e251]
                      - img "Thêm vào giỏ" [ref=e252]
                - list
          - generic [ref=e254]:
            - link "Set Đồ Nam Ngắn ICDN Nova Form Regular" [ref=e256] [cursor=pointer]:
              - /url: /products/set-do-nam-ngan-icdn-nova-form-regular
              - img "Set Đồ Nam Ngắn ICDN Nova Form Regular" [ref=e257]
            - generic [ref=e259]: 40%
            - generic [ref=e260]:
              - heading "Set Đồ Nam Ngắn ICDN Nova Form Regular" [level=3] [ref=e261]:
                - link "Set Đồ Nam Ngắn ICDN Nova Form Regular" [ref=e262] [cursor=pointer]:
                  - /url: /products/set-do-nam-ngan-icdn-nova-form-regular
              - img [ref=e265]:
                - generic [ref=e267]: Sale
              - generic [ref=e268]:
                - generic [ref=e269]:
                  - paragraph [ref=e270]: 149,000₫ ~ 298,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e272] [cursor=pointer]:
                    - generic [ref=e273]:
                      - img "Thêm vào giỏ" [ref=e274]
                      - img "Thêm vào giỏ" [ref=e275]
                - list
          - generic [ref=e277]:
            - link "Áo Tanktop Nam ICONDENIM Rust" [ref=e279] [cursor=pointer]:
              - /url: /products/ao-tanktop-nam-icondenim-rust
              - img "Áo Tanktop Nam ICONDENIM Rust" [ref=e280]
            - generic [ref=e282]: 47%
            - generic [ref=e283]:
              - heading "Áo Tanktop Nam ICONDENIM Rust" [level=3] [ref=e284]:
                - link "Áo Tanktop Nam ICONDENIM Rust" [ref=e285] [cursor=pointer]:
                  - /url: /products/ao-tanktop-nam-icondenim-rust
              - img [ref=e288]:
                - generic [ref=e290]: Sale
              - generic [ref=e291]:
                - generic [ref=e292]:
                  - paragraph [ref=e293]:
                    - text: 149,000₫
                    - deletion [ref=e294]: 279,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e296] [cursor=pointer]:
                    - generic [ref=e297]:
                      - img "Thêm vào giỏ" [ref=e298]
                      - img "Thêm vào giỏ" [ref=e299]
                - list
          - generic [ref=e301]:
            - link "Áo Tank Top RUNPOW Aero Jacquard" [ref=e303] [cursor=pointer]:
              - /url: /products/ao-tank-top-runpow-aero-jacquard
              - img "Áo Tank Top RUNPOW Aero Jacquard" [ref=e304]
            - generic [ref=e306]: 32%
            - generic [ref=e307]:
              - heading "Áo Tank Top RUNPOW Aero Jacquard" [level=3] [ref=e308]:
                - link "Áo Tank Top RUNPOW Aero Jacquard" [ref=e309] [cursor=pointer]:
                  - /url: /products/ao-tank-top-runpow-aero-jacquard
              - img [ref=e312]:
                - generic [ref=e314]: Sale
              - generic [ref=e315]:
                - generic [ref=e316]:
                  - paragraph [ref=e317]:
                    - text: 149,000₫
                    - deletion [ref=e318]: 219,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e320] [cursor=pointer]:
                    - generic [ref=e321]:
                      - img "Thêm vào giỏ" [ref=e322]
                      - img "Thêm vào giỏ" [ref=e323]
                - list
          - generic [ref=e325]:
            - link "Áo Tank Top Nam Daily Tank Form Regular" [ref=e327] [cursor=pointer]:
              - /url: /products/ao-tank-top-nam-daily-tank-form-regular
              - img "Áo Tank Top Nam Daily Tank Form Regular" [ref=e328]
            - generic [ref=e330]: 55%
            - generic [ref=e331]:
              - heading "Áo Tank Top Nam Daily Tank Form Regular" [level=3] [ref=e332]:
                - link "Áo Tank Top Nam Daily Tank Form Regular" [ref=e333] [cursor=pointer]:
                  - /url: /products/ao-tank-top-nam-daily-tank-form-regular
              - img [ref=e336]:
                - generic [ref=e338]: Hot Deal
              - generic [ref=e339]:
                - generic [ref=e340]:
                  - paragraph [ref=e341]:
                    - text: 99,000₫
                    - deletion [ref=e342]: 219,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e344] [cursor=pointer]:
                    - generic [ref=e345]:
                      - img "Thêm vào giỏ" [ref=e346]
                      - img "Thêm vào giỏ" [ref=e347]
                - list
          - generic [ref=e349]:
            - link "Áo Tank Top Nam ICONDENIM Mesh Sundaze Rush" [ref=e351] [cursor=pointer]:
              - /url: /products/ao-tank-top-nam-icondenim-mesh-sundaze-rush
              - img "Áo Tank Top Nam ICONDENIM Mesh Sundaze Rush" [ref=e352]
            - generic [ref=e354]: 48%
            - generic [ref=e355]:
              - heading "Áo Tank Top Nam ICONDENIM Mesh Sundaze Rush" [level=3] [ref=e356]:
                - link "Áo Tank Top Nam ICONDENIM Mesh Sundaze Rush" [ref=e357] [cursor=pointer]:
                  - /url: /products/ao-tank-top-nam-icondenim-mesh-sundaze-rush
              - generic:
                - generic:
                  - img
              - generic [ref=e358]:
                - generic [ref=e359]:
                  - paragraph [ref=e360]:
                    - text: 99,000₫
                    - deletion [ref=e361]: 190,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e363] [cursor=pointer]:
                    - generic [ref=e364]:
                      - img "Thêm vào giỏ" [ref=e365]
                      - img "Thêm vào giỏ" [ref=e366]
                - list
          - generic [ref=e368]:
            - link "Áo Tanktop Nam RUNPOW In NatureStride Form Regular" [ref=e370] [cursor=pointer]:
              - /url: /products/a-o-tanktop-nam-runpow-in-naturestride
              - img "Áo Tanktop Nam RUNPOW In NatureStride Form Regular" [ref=e371]
            - generic [ref=e373]: 32%
            - generic [ref=e374]:
              - heading "Áo Tanktop Nam RUNPOW In NatureStride" [level=3] [ref=e375]:
                - link "Áo Tanktop Nam RUNPOW In NatureStride" [ref=e376] [cursor=pointer]:
                  - /url: /products/a-o-tanktop-nam-runpow-in-naturestride
              - generic:
                - generic:
                  - img
              - generic [ref=e377]:
                - generic [ref=e378]:
                  - paragraph [ref=e379]:
                    - text: 149,000₫
                    - deletion [ref=e380]: 219,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e382] [cursor=pointer]:
                    - generic [ref=e383]:
                      - img "Thêm vào giỏ" [ref=e384]
                      - img "Thêm vào giỏ" [ref=e385]
                - list
        - generic:
          - paragraph
        - generic [ref=e386]:
          - 'heading "FAQ – Áo Tank Top Nam 160STORE: Thoáng mát, năng động, tôn dáng" [level=2] [ref=e387]'
          - paragraph [ref=e388]: Áo tank top tại 160STORE được thiết kế cho nam giới yêu thích sự thoải mái, năng động và phong cách thể thao. Phom dáng ôm vừa vai – ngực, dễ cử động và phù hợp từ tập luyện đến dạo phố ngày hè.
          - button "Áo tank top tại 160STORE phù hợp với ai? ▾" [ref=e390] [cursor=pointer]
          - button "Chất liệu áo tank top có thấm hút tốt không? ▾" [ref=e392] [cursor=pointer]
          - button "Tôi có thể mặc tank top ra ngoài không hay chỉ nên mặc khi tập? ▾" [ref=e394] [cursor=pointer]
          - button "Cách chọn size tank top cho vừa vặn? ▾" [ref=e396] [cursor=pointer]
          - button "Tank top có bị giãn cổ hoặc bai sau khi giặt không? ▾" [ref=e398] [cursor=pointer]
          - button "Có được đổi size nếu mặc không vừa không? ▾" [ref=e400] [cursor=pointer]
          - button "Chính sách bảo hành của 160STORE cho áo tank top là gì? ▾" [ref=e402] [cursor=pointer]
          - button "Có ưu đãi hoặc tích điểm cho khách hàng mua áo tank top không? ▾" [ref=e404] [cursor=pointer]
        - generic [ref=e405]:
          - generic [ref=e406]:
            - paragraph [ref=e407]: Mang hơi thở trẻ trung, hiện đại, áo tank top luôn là lựa chọn hoàn hảo cho những ai yêu thích sự năng động. Áo tank top còn có thể biến hóa với đa dạng kiểu dáng, chất liệu, bạn dễ dàng phối với mọi phong cách. Hãy tham khảo bài viết sau để khám phá nhiều điều thú vị và kinh nghiệm chọn áo ba lỗ phù hợp nhất cho mình!
            - heading "Áo Tanktop là gì?" [level=2] [ref=e408]:
              - strong [ref=e409]: Áo Tanktop là gì?
            - paragraph [ref=e410]: Áo tanktop, hay còn gọi là áo ba lỗ, là loại áo thun không tay với thiết kế đặc trưng. Mẫu áo này có đặc điểm cổ tròn và phần tay áo được may sát nách hoặc khoét sâu xuống phần thân.
            - paragraph [ref=e411]: Tanktop được sử dụng nhiều từ khoảng năm 1800 bởi các vận động viên khi luyện tập và thi đấu. Đó là nhờ khả năng có thể đem lại cảm giác thoải mái, tiện dụng cho người mặc. Đến đầu thế kỷ 20, tanktop được các nhà quân sự chú ý đến và trở thành quân trang của Hải Quân Hoa Kỳ. Dần dần, tanktop trở nên phổ biến và được cả nam, nữ yêu thích trong việc phối hợp trang phục hằng ngày.
            - paragraph [ref=e412]:
              - img "Áo tank top được ra đời từ lâu và trở thành biểu tượng của phong cách thời trang năng động" [ref=e413]
            - paragraph [ref=e414]:
              - emphasis [ref=e415]: Áo tank top được ra đời từ lâu và trở thành biểu tượng của phong cách thời trang năng động
            - heading "Những ưu điểm của áo thun ba lỗ Tanktop" [level=2] [ref=e416]:
              - strong [ref=e417]: Những ưu điểm của áo thun ba lỗ Tanktop
            - paragraph [ref=e418]: "Với thiết kế đơn giản, phần thân áo không tay, áo tank top sở hữu vô số ưu điểm, chẳng hạn như:"
            - list [ref=e419]:
              - listitem [ref=e420]:
                - strong [ref=e421]: "Thoáng mát và thoải mái:"
                - text: Thiết kế không tay thoáng khí, không làm tích tụ mồ hôi, mang lại cảm giác thoải mái và dễ chịu cho người mặc.
              - listitem [ref=e422]:
                - strong [ref=e423]: "Chất liệu đa dạng:"
                - text: Mỗi chất liệu đều mang đến những ưu điểm riêng, đáp ứng nhu cầu và sở thích của từng người.
              - listitem [ref=e424]:
                - strong [ref=e425]: "Dễ dàng phối đồ:"
                - text: Tanktop là item thời trang vô cùng linh hoạt, dễ dàng phối đồ với nhiều phong cách khác nhau.
              - listitem [ref=e426]:
                - strong [ref=e427]: "Phù hợp cho nhiều hoạt động:"
                - text: Tanktop không chỉ là trang phục thường ngày mà còn phù hợp nhiều hoạt động khác nhau như tập thể thao, đi chơi, đi biển,...
            - generic [ref=e428]: "Áo thun ba lỗ nam tại 160Store:"
            - iframe [ref=e431]:
              - generic [active] [ref=f1e1]:
                - generic "YouTube Video Player" [ref=f1e3]
                - generic [ref=f1e5]:
                  - generic:
                    - generic:
                      - button "Play video" [ref=f1e10] [cursor=pointer]
                      - button "Hide player controls" [ref=f1e12] [cursor=pointer]
                      - generic [ref=f1e14]:
                        - generic [ref=f1e19]:
                          - generic [ref=f1e20]:
                            - link "Áo Tanktop ICONDENIM Orgnls Logo" [ref=f1e21] [cursor=pointer]:
                              - /url: https://www.youtube.com/watch?v=A53T-oMi6GE
                            - link "Storehanghieu 160" [ref=f1e22] [cursor=pointer]:
                              - /url: /channel/UC8eG9Q88rszo9zzME3kjZSA
                              - generic [ref=f1e23]: Storehanghieu 160
                          - generic [ref=f1e24]:
                            - button [ref=f1e25] [cursor=pointer]
                            - generic [ref=f1e27]:
                              - generic: Storehanghieu 160
                              - generic: 159 subscribers
                        - generic [ref=f1e28]:
                          - button "Share" [ref=f1e31] [cursor=pointer]:
                            - generic [ref=f1e35]:
                              - img
                          - link "Watch on YouTube" [ref=f1e42] [cursor=pointer]:
                            - /url: https://www.youtube.com/watch?v=A53T-oMi6GE
                            - generic [ref=f1e45]:
                              - text: Watch on
                              - img [ref=f1e47]:
                                - generic [ref=f1e49]:
                                  - img
            - paragraph [ref=e432]
            - heading "Các kiểu áo Tanktop phổ biến hiện nay" [level=2] [ref=e433]:
              - strong [ref=e434]: Các kiểu áo Tanktop phổ biến hiện nay
            - paragraph [ref=e435]: Dưới đây là một số kiểu Tanktop phổ biến hiện nay, giúp bạn tô điểm cho bản thân thêm cá tính và sành điệu.
            - heading "Tanktop Body" [level=3] [ref=e436]:
              - strong [ref=e437]: Tanktop Body
            - paragraph [ref=e438]: Tanktop Body sở hữu thiết kế mạnh mẽ với form dáng ôm sát, cổ tròn và tay áo sát nách. Chất liệu cotton hoặc tổng hợp co giãn tốt, giúp tôn dáng và mang đến sự thoải mái tối đa cho người mặc. Tanktop Body thường được ưa chuộng bởi các chàng trai yêu thích phong cách bụi bặm, đường phố hoặc thể thao.
            - paragraph [ref=e439]:
              - img "Áo Tanktop Body phù hợp với những chàng trai mạnh mẽ, bụi bặm" [ref=e440]
            - paragraph [ref=e441]:
              - emphasis [ref=e442]: Áo Tanktop Body phù hợp với những chàng trai mạnh mẽ, bụi bặm
            - heading "Áo thun nam không tay (Sleeveless Shirt)" [level=3] [ref=e443]:
              - strong [ref=e444]: Áo thun nam không tay (Sleeveless Shirt)
            - paragraph [ref=e445]: Nổi bật bởi sự thanh lịch và tinh tế, Sleeveless Shirt là lựa chọn hoàn hảo cho những ai yêu thích phong cách công sở. Thiết kế cổ cao, tay sát nách và form dáng rộng rãi tạo cảm giác thanh lịch và chuyên nghiệp. Chất liệu cotton hoặc linen mềm mại, thoáng mát mang đến sự thoải mái suốt ngày dài.
            - paragraph [ref=e446]:
              - img "Thiết kế áo thun nam không tay với cổ cao, thanh lịch" [ref=e447]
            - paragraph [ref=e448]:
              - emphasis [ref=e449]: Thiết kế áo thun nam không tay với cổ cao, thanh lịch
            - heading "Áo ba lỗ nam (Muscle shirt)" [level=3] [ref=e450]:
              - strong [ref=e451]: Áo ba lỗ nam (Muscle shirt)
            - paragraph [ref=e452]: Áo ba lỗ là dòng áo tank top gym, sở hữu thiết kế ôm sát, khoe trọn nét cơ bắp mạnh mẽ. Chất liệu cotton co giãn tốt giúp bạn dễ dàng vận động mà không cảm thấy gò bó. Muscle shirt được ưa chuộng bởi các chàng trai yêu thích gym, thể thao hoặc muốn thể hiện sự nam tính, khỏe khoắn của mình.
            - heading "Áo Tanktop lưới" [level=3] [ref=e453]:
              - strong [ref=e454]: Áo Tanktop lưới
            - paragraph [ref=e455]: Mang hơi thở hiện đại và phóng khoáng, áo Tanktop lưới thu hút mọi ánh nhìn bởi sự quyến rũ, táo bạo. Chất liệu lưới mỏng nhẹ, thoáng mát giúp bạn cảm thấy thoải mái trong những ngày hè nóng bức. Họa tiết lưới đa dạng giúp bạn dễ dàng lựa chọn trang phục phù hợp với sở thích và cá tính riêng.
            - paragraph [ref=e456]:
              - img "Áo tank top lưới thoáng mát, đem lại sự thoải mái cho người mặc" [ref=e457]
            - paragraph [ref=e458]:
              - emphasis [ref=e459]: Áo tank top lưới thoáng mát, đem lại sự thoải mái cho người mặc
            - heading "Cách mặc áo tank top nam đẹp" [level=2] [ref=e460]:
              - strong [ref=e461]: Cách mặc áo tank top nam đẹp
            - paragraph [ref=e462]: "Với sự linh hoạt và tiện dụng, áo tank top có thể dễ dàng phối hợp với nhiều loại trang phục khác nhau. Dưới đây là một số gợi ý về cách mặc áo tank top nam đẹp mà bạn có thể tham khảo:"
            - heading "Áo Tanktop và quần Short" [level=3] [ref=e463]:
              - strong [ref=e464]: Áo Tanktop và quần Short
            - paragraph [ref=e465]: Tanktop phối hợp với quần short kaki hoặc jean là bộ đôi hoàn hảo cho ngày hè oi ả nhờ sự thoải mái, năng động. Bạn có thể chọn Tanktop trơn màu hoặc họa tiết bắt mắt để thể hiện cá tính riêng.
            - paragraph [ref=e466]:
              - img "Phối áo tanktop và quần short kaki linh hoạt, năng động cho ngày hè" [ref=e467]
            - paragraph [ref=e468]:
              - emphasis [ref=e469]: Phối áo tanktop và quần short jeans linh hoạt, năng động cho ngày hè
            - heading "Áo Tanktop và quần Jeans" [level=3] [ref=e470]:
              - strong [ref=e471]: Áo Tanktop và quần Jeans
            - paragraph [ref=e472]: Tanktop basic phối cùng quần Jeans rách gối hoặc ôm sát là một sự kết hợp phá cách đầy cá tính. Bạn có thể tạo điểm nhấn bằng áo tank top nam layer với áo sơ mi và quần Jeans để trông sành điệu, cá tính.
            - paragraph [ref=e473]:
              - img "Phối áo tanktop và quần jeans đầy cá tính" [ref=e474]
            - paragraph [ref=e475]:
              - emphasis [ref=e476]: Phối áo tanktop và quần jeans đầy cá tính
            - heading "Áo Tanktop và quần Jogger" [level=3] [ref=e477]:
              - strong [ref=e478]: Áo Tanktop và quần Jogger
            - paragraph [ref=e479]: Áo thun ba lỗ và quần jogger là bộ đôi hoàn hảo cho những chàng trai yêu thích phong cách năng động, cá tính. Phối áo thun ba lỗ cổ tròn basic hoặc cổ tim với quần Jogger để tôn lên sự gọn gàng của phần vai và ngực. Sự kết hợp này không chỉ mang lại sự tiện dụng mà còn giúp phô diễn vẻ đẹp hình thể một cách tinh tế.
            - heading "Chuỗi cửa hàng thời trang nam phân phối áo Tanktop cao cấp - 160STORE" [level=2] [ref=e480]:
              - strong [ref=e481]: Chuỗi cửa hàng thời trang nam phân phối áo Tanktop cao cấp - 160STORE
            - paragraph [ref=e482]: Là thương hiệu thời trang nam uy tín, 160STORE tự hào mang đến cho khách hàng những chiếc áo tank top chất lượng cao. Với thiết kế hiện đại, trẻ trung cùng chất liệu cao cấp, 160STORE giúp bạn tự tin thể hiện bản thân mọi lúc mọi nơi. 160STORE luôn cam kết mang đến những sản phẩm chất lượng cao với giá cả hợp lý cùng dịch vụ khách hàng chuyên nghiệp.
            - paragraph [ref=e483]:
              - img "160STORE là thương hiệu thời trang nam uy tín, chuyên cung cấp các mẫu áo tanktop chất lượng" [ref=e484]
            - paragraph [ref=e485]:
              - emphasis [ref=e486]: 160STORE là thương hiệu thời trang nam uy tín, chuyên cung cấp các mẫu áo tanktop chất lượng
            - paragraph [ref=e487]: Với những ưu điểm vượt trội về mẫu mã, kiểu dáng, áo tank top 160STORE tự tin là lựa chọn hoàn hảo cho bạn. Nếu bạn yêu thích những thiết kế áo tank top và là tín đồ của phong cách thời trang năng động. Hãy đến với 160STORE để sở hữu cho mình một chiếc áo tanktop để khẳng định phong cách và cá tính riêng biệt. Đừng bỏ lỡ cơ hội sở hữu những chiếc áo tanktop tuyệt vời này tại 160STORE!
          - button "Xem thêm" [ref=e489] [cursor=pointer]
  - generic [ref=e493]:
    - generic [ref=e494]:
      - paragraph [ref=e495]: Đăng kí nhận tin
      - generic [ref=e497]:
        - generic [ref=e498]:
          - text: 
          - textbox "Email" [ref=e499]
        - button "Đăng ký" [ref=e500] [cursor=pointer]:
          - generic [ref=e501]: 
          - text: Đăng ký
    - list [ref=e503]:
      - listitem [ref=e504]:
        - link "Liên hệ với chúng tôi qua Zalo" [ref=e505] [cursor=pointer]:
          - /url: //zalo.me/3664144181122308942
          - img "Liên hệ với chúng tôi qua Zalo" [ref=e506]
      - listitem [ref=e507]:
        - link [ref=e508] [cursor=pointer]:
          - /url: https://www.youtube.com/@storehanghieu1608
          - generic [ref=e509]: 
      - listitem [ref=e510]:
        - link [ref=e511] [cursor=pointer]:
          - /url: https://www.instagram.com/160store
          - generic [ref=e512]: 
      - listitem [ref=e513]:
        - link [ref=e514] [cursor=pointer]:
          - /url: https://www.facebook.com/160store
          - generic [ref=e515]: 
  - contentinfo [ref=e516]:
    - generic [ref=e518]:
      - generic [ref=e519]:
        - generic [ref=e520]:
          - generic [ref=e522]: Giới thiệu
          - generic [ref=e523]:
            - paragraph [ref=e524]: 160STORE - Chuỗi Phân Phối Thời Trang Nam Chuẩn Hiệu
            - list [ref=e525]:
              - listitem [ref=e526]:
                - generic [ref=e527]: 
                - link "02871006789" [ref=e528] [cursor=pointer]:
                  - /url: tel:02871006789
              - listitem [ref=e529]:
                - generic [ref=e530]: 
                - link "cs@160store.com" [ref=e531] [cursor=pointer]:
                  - /url: mailto:cs@160store.com
              - listitem [ref=e532]:
                - generic [ref=e533]: 
                - generic [ref=e534]: "Giờ mở cửa : 08:30 - 22:00"
              - listitem [ref=e535]:
                - generic [ref=e536]: 
                - generic [ref=e537]: Nhân viên tư vấn phản hồi tin nhắn đến 24:00 (Mỗi ngày)
              - listitem [ref=e538]:
                - link [ref=e539] [cursor=pointer]:
                  - /url: http://online.gov.vn/Home/WebDetails/121880
                  - img [ref=e540]
              - listitem [ref=e541]:
                - link "DMCA.com Protection Status" [ref=e542] [cursor=pointer]:
                  - /url: https://www.dmca.com/Protection/Status.aspx?ID=9049de26-d97b-48dc-ab97-1e5fcb221fba&refurl=https://160store.com/collections/ba-lo
                  - img "DMCA.com Protection Status" [ref=e543]
        - generic [ref=e544]:
          - generic [ref=e546]: CHÍNH SÁCH
          - list [ref=e548]:
            - listitem [ref=e549]:
              - link "Hướng dẫn đặt hàng" [ref=e550] [cursor=pointer]:
                - /url: /pages/huong-dan-dat-hang
            - listitem [ref=e551]:
              - paragraph [ref=e554] [cursor=pointer]: Chính sách
        - generic [ref=e556]:
          - link "ĐỊA CHỈ CỬA HÀNG (20 CH)" [ref=e559] [cursor=pointer]:
            - /url: https://www.160store.com/pages/lien-he
          - generic [ref=e561]:
            - generic [ref=e562]:
              - generic [ref=e563]:
                - img [ref=e564]
                - paragraph [ref=e565]: HỒ CHÍ MINH (10 CH)
              - paragraph [ref=e566]: 274 Ba Cu, Phường Vũng Tàu, TP.HCM
            - generic [ref=e567]:
              - generic [ref=e568]:
                - img [ref=e569]
                - paragraph [ref=e570]:
                  - text: HÀ NỘI (2 CH)
                  - generic [ref=e571]: New
              - paragraph [ref=e572]: 27 Tôn Đức Thắng - P. Văn Miếu - Quốc Tử Giám; TP. Hà Nội
            - generic [ref=e573]:
              - generic [ref=e574]:
                - img [ref=e575]
                - paragraph [ref=e576]: CẦN THƠ (2 CH)
              - paragraph [ref=e577]: Số 35 Trần Phú, Phường Ninh Kiều, TP.Cần Thơ
            - generic [ref=e578]:
              - generic [ref=e579]:
                - img [ref=e580]
                - paragraph [ref=e581]: ĐÀ NẴNG (2 CH)
              - paragraph [ref=e582]: 332 Đ. Lê Duẩn, Phường Thanh Khê, TP.Đà Nẵng
            - link "XEM TẤT CẢ CỬA HÀNG" [ref=e584] [cursor=pointer]:
              - /url: https://www.160store.com/pages/lien-he
        - generic [ref=e587]:
          - generic [ref=e588]: PHƯƠNG THỨC THANH TOÁN
          - generic [ref=e589]:
            - img "Image Spay" [ref=e590]
            - img "Image VNPay" [ref=e591]
            - img "Image Cod" [ref=e592]
      - generic [ref=e597]: BẢN QUYỀN THUỘC VỀ 160STORE
  - list [ref=e599]
  - button "back to top" [ref=e601] [cursor=pointer]:
    - img [ref=e602]
    - text: back to top
  - paragraph [ref=e608]: Bạn chưa chọn size sản phẩm!
  - generic:
    - generic:
      - generic: 🔬 BÁO CÁO SEO CHUYÊN SÂU
      - generic: "Phần B: Advanced"
    - generic:
      - generic:
        - generic:
          - generic:
            - generic:
              - generic: "47"
              - generic: ADV
          - generic: KÉM
        - generic:
          - generic:
            - generic: "Trang:"
            - strong: ÁO BA LỖ
          - generic:
            - generic: "Đạt:"
            - strong: 15/32
      - generic [ref=e609]:
        - generic [ref=e610]: "❌ Lỗi cần khắc phục (17):"
        - generic [ref=e611]:
          - generic [ref=e612]:
            - generic [ref=e613]: E-E-A-T
            - generic [ref=e614]: 1/5
          - generic [ref=e615]:
            - generic [ref=e616]:
              - generic [ref=e617]: "Thông tin tác giả: Thiếu"
              - generic [ref=e618]: B2.1
            - generic [ref=e619]: ⚠️ Thiếu thông tin tác giả
          - generic [ref=e620]:
            - generic [ref=e621]:
              - generic [ref=e622]: "Ngày đăng (datePublished): Thiếu"
              - generic [ref=e623]: B2.2
            - generic [ref=e624]: ⚠️ Thiếu ngày đăng bài
          - generic [ref=e625]:
            - generic [ref=e626]:
              - generic [ref=e627]: "Ngày cập nhật (dateModified): Thiếu"
              - generic [ref=e628]: B2.3
            - generic [ref=e629]: ⚠️ Thiếu ngày cập nhật
          - generic [ref=e630]:
            - generic [ref=e631]:
              - generic [ref=e632]: "Trust Pages: 0/8 tồn tại"
              - generic [ref=e633]: B2.4
            - generic [ref=e634]: ⚠️ Chỉ 0 trust pages
        - generic [ref=e635]:
          - generic [ref=e636]:
            - generic [ref=e637]: Schema
            - generic [ref=e638]: 2/4
          - generic [ref=e639]:
            - generic [ref=e640]:
              - generic [ref=e641]: "Schema types: [ClothingStore, WebSite, FAQPage]"
              - generic [ref=e642]: B3.1
            - generic [ref=e643]: "⚠️ Thiếu types: Organization, BreadcrumbList"
          - generic [ref=e644]:
            - generic [ref=e645]:
              - generic [ref=e646]: "BreadcrumbList Schema: Thiếu"
              - generic [ref=e647]: B3.4
            - generic [ref=e648]: ⚠️ Thiếu BreadcrumbList Schema
        - generic [ref=e649]:
          - generic [ref=e650]:
            - generic [ref=e651]: Linking
            - generic [ref=e652]: 1/2
          - generic [ref=e653]:
            - generic [ref=e654]:
              - generic [ref=e655]: "Breadcrumb Schema: Thiếu"
              - generic [ref=e656]: B5.2
            - generic [ref=e657]: ⚠️ Thiếu BreadcrumbList Schema
        - generic [ref=e658]:
          - generic [ref=e659]:
            - generic [ref=e660]: Performance
            - generic [ref=e661]: 3/7
          - generic [ref=e662]:
            - generic [ref=e663]:
              - generic [ref=e664]: "DOM Size: 1712 (max: 1500)"
              - generic [ref=e665]: B6.2
            - generic [ref=e666]: "⚠️ DOM quá lớn: 1712"
          - generic [ref=e667]:
            - generic [ref=e668]:
              - generic [ref=e669]: "Lazy Load: 32/77 (42%)"
              - generic [ref=e670]: B6.5
            - generic [ref=e671]: ⚠️ Chỉ 42% lazy
          - generic [ref=e672]:
            - generic [ref=e673]:
              - generic [ref=e674]: "Font: swap=✘, preload=0"
              - generic [ref=e675]: B6.6
            - generic [ref=e676]: ⚠️ Font chưa tối ưu
          - generic [ref=e677]:
            - generic [ref=e678]:
              - generic [ref=e679]: "Responsive Images: 25/113 (22%)"
              - generic [ref=e680]: B6.7
            - generic [ref=e681]: ⚠️ Chỉ 22% có srcset
        - generic [ref=e682]:
          - generic [ref=e683]:
            - generic [ref=e684]: UX
            - generic [ref=e685]: 3/4
          - generic [ref=e686]:
            - generic [ref=e687]:
              - generic [ref=e688]: "ARIA thiếu: 41 phần tử"
              - generic [ref=e689]: B7.3
            - generic [ref=e690]: ⚠️ 41 phần tử thiếu ARIA
        - generic [ref=e691]:
          - generic [ref=e692]:
            - generic [ref=e693]: URL
            - generic [ref=e694]: 1/4
          - generic [ref=e695]:
            - generic [ref=e696]:
              - generic [ref=e697]: "WWW Redirect: Lỗi"
              - generic [ref=e698]: B8.1
            - generic [ref=e699]: ⚠️ www redirect sai
          - generic [ref=e700]:
            - generic [ref=e701]:
              - generic [ref=e702]: "HTTPS Redirect: Lỗi"
              - generic [ref=e703]: B8.2
            - generic [ref=e704]: ⚠️ HTTPS redirect sai
          - generic [ref=e705]:
            - generic [ref=e706]:
              - generic [ref=e707]: "Trailing Slash: Lỗi"
              - generic [ref=e708]: B8.3
            - generic [ref=e709]: ⚠️ Trailing slash không nhất quán
        - generic [ref=e710]:
          - generic [ref=e711]:
            - generic [ref=e712]: CrUX
            - generic [ref=e713]: 0/2
          - generic [ref=e714]:
            - generic [ref=e715]:
              - generic [ref=e716]: "LCP (Thực tế): 12245ms"
              - generic [ref=e717]: API.3
            - generic [ref=e718]: ⚠️ LCP chậm (12245ms)
          - generic [ref=e719]:
            - generic [ref=e720]:
              - generic [ref=e721]: "CLS (Thực tế): 0.123"
              - generic [ref=e722]: API.4
            - generic [ref=e723]: ⚠️ CLS cao (0.123)
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 50/100 dưới ngưỡng 60%. Có 17/34 tiêu chí không đạt.
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