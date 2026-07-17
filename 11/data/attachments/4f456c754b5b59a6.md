# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo.spec.ts >> SEO TIÊU CHUẨN CƠ BẢN CHO WEB >> Kiểm tra SEO Onpage: SET QUẦN ÁO
- Location: tests/seo.spec.ts:18:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 68/100 dưới ngưỡng 70%. Có 12/38 tiêu chí không đạt.
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
    - list [ref=e104]:
      - listitem [ref=e105]:
        - link "Trang chủ" [ref=e106] [cursor=pointer]:
          - /url: /
      - listitem [ref=e107]:
        - text: /
        - generic [ref=e108]: SET ÁO QUẦN
    - generic [ref=e111]:
      - img "SET ÁO QUẦN" [ref=e114]
      - generic [ref=e116]:
        - generic [ref=e119]:
          - text: "Sắp xếp:"
          - combobox [ref=e120] [cursor=pointer]:
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
        - generic [ref=e121]:
          - generic [ref=e123]:
            - link "Set Áo Quần Nam ICONDENIM Lazy Fish" [ref=e125] [cursor=pointer]:
              - /url: /products/set-ao-quan-nam-icondenim-lazy-fish
              - img "Set Áo Quần Nam ICONDENIM Lazy Fish" [ref=e126]
            - generic [ref=e127]:
              - heading "Set Áo Quần Nam ICONDENIM Lazy Fish" [level=3] [ref=e128]:
                - link "Set Áo Quần Nam ICONDENIM Lazy Fish" [ref=e129] [cursor=pointer]:
                  - /url: /products/set-ao-quan-nam-icondenim-lazy-fish
              - img [ref=e132]:
                - generic [ref=e133]: Hàng Mới
              - generic [ref=e134]:
                - generic [ref=e135]:
                  - paragraph [ref=e136]: 329,000₫ ~ 678,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e138] [cursor=pointer]:
                    - generic [ref=e139]:
                      - img "Thêm vào giỏ" [ref=e140]
                      - img "Thêm vào giỏ" [ref=e141]
                - list
          - generic [ref=e143]:
            - link "Set Áo Quần Nam ICONDENIM Edgestitch" [ref=e145] [cursor=pointer]:
              - /url: /products/set-ao-quan-nam-icondenim-edgestitch
              - img "Set Áo Quần Nam ICONDENIM Edgestitch" [ref=e146]
            - generic [ref=e147]:
              - heading "Set Áo Quần Nam ICONDENIM Edgestitch" [level=3] [ref=e148]:
                - link "Set Áo Quần Nam ICONDENIM Edgestitch" [ref=e149] [cursor=pointer]:
                  - /url: /products/set-ao-quan-nam-icondenim-edgestitch
              - img [ref=e152]:
                - generic [ref=e153]: Hàng Mới
              - generic [ref=e154]:
                - generic [ref=e155]:
                  - paragraph [ref=e156]: 349,000₫ ~ 728,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e158] [cursor=pointer]:
                    - generic [ref=e159]:
                      - img "Thêm vào giỏ" [ref=e160]
                      - img "Thêm vào giỏ" [ref=e161]
                - list
          - generic [ref=e163]:
            - link "Set Đồ Nam Ngắn ICONDENIM Orgnls" [ref=e165] [cursor=pointer]:
              - /url: /products/set-do-nam-ngan-icondenim-orgnls
              - img "Set Đồ Nam Ngắn ICONDENIM Orgnls" [ref=e166]
            - generic [ref=e167]:
              - heading "Set Đồ Nam Ngắn ICONDENIM Orgnls" [level=3] [ref=e168]:
                - link "Set Đồ Nam Ngắn ICONDENIM Orgnls" [ref=e169] [cursor=pointer]:
                  - /url: /products/set-do-nam-ngan-icondenim-orgnls
              - img [ref=e172]:
                - generic [ref=e173]: Hàng Mới
              - generic [ref=e174]:
                - generic [ref=e175]:
                  - paragraph [ref=e176]: 299,000₫ ~ 648,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e178] [cursor=pointer]:
                    - generic [ref=e179]:
                      - img "Thêm vào giỏ" [ref=e180]
                      - img "Thêm vào giỏ" [ref=e181]
                - list
          - generic [ref=e183]:
            - link "Set Đồ Nam ICONDENIM Lunary" [ref=e185] [cursor=pointer]:
              - /url: /products/set-do-nam-icondenim-lunary
              - img "Set Đồ Nam ICONDENIM Lunary" [ref=e186]
            - generic [ref=e187]:
              - heading "Set Đồ Nam ICONDENIM Lunary" [level=3] [ref=e188]:
                - link "Set Đồ Nam ICONDENIM Lunary" [ref=e189] [cursor=pointer]:
                  - /url: /products/set-do-nam-icondenim-lunary
              - img [ref=e192]:
                - generic [ref=e193]: Hàng Mới
              - generic [ref=e194]:
                - generic [ref=e195]:
                  - paragraph [ref=e196]: 399,000₫ ~ 828,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e198] [cursor=pointer]:
                    - generic [ref=e199]:
                      - img "Thêm vào giỏ" [ref=e200]
                      - img "Thêm vào giỏ" [ref=e201]
                - list
          - generic [ref=e203]:
            - link "Set Đồ Nam ICONDENIM ORGNLS" [ref=e205] [cursor=pointer]:
              - /url: /products/set-do-nam-icondenim-orgnls-2
              - img "Set Đồ Nam ICONDENIM ORGNLS" [ref=e206]
            - generic [ref=e207]:
              - heading "Set Đồ Nam ICONDENIM ORGNLS" [level=3] [ref=e208]:
                - link "Set Đồ Nam ICONDENIM ORGNLS" [ref=e209] [cursor=pointer]:
                  - /url: /products/set-do-nam-icondenim-orgnls-2
              - img [ref=e212]:
                - generic [ref=e213]: Hàng Mới
              - generic [ref=e214]:
                - generic [ref=e215]:
                  - paragraph [ref=e216]: 349,000₫ ~ 728,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e218] [cursor=pointer]:
                    - generic [ref=e219]:
                      - img "Thêm vào giỏ" [ref=e220]
                      - img "Thêm vào giỏ" [ref=e221]
                - list
          - generic [ref=e223]:
            - link "Set Đồ Nam ICONDENIM Orgnls" [ref=e225] [cursor=pointer]:
              - /url: /products/set-do-nam-icondenim-orgnls-1
              - img "Set Đồ Nam ICONDENIM Orgnls" [ref=e226]
            - generic [ref=e227]:
              - heading "Set Đồ Nam ICONDENIM Orgnls" [level=3] [ref=e228]:
                - link "Set Đồ Nam ICONDENIM Orgnls" [ref=e229] [cursor=pointer]:
                  - /url: /products/set-do-nam-icondenim-orgnls-1
              - img [ref=e232]:
                - generic [ref=e233]: Hàng Mới
              - generic [ref=e234]:
                - generic [ref=e235]:
                  - paragraph [ref=e236]: 349,000₫ ~ 698,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e238] [cursor=pointer]:
                    - generic [ref=e239]:
                      - img "Thêm vào giỏ" [ref=e240]
                      - img "Thêm vào giỏ" [ref=e241]
                - list
          - generic [ref=e243]:
            - link "Set Đồ Nam ICONDENIM Distance" [ref=e245] [cursor=pointer]:
              - /url: /products/set-do-nam-icondenim-distance
              - img "Set Đồ Nam ICONDENIM Distance" [ref=e246]
            - generic [ref=e248]: 20%
            - generic [ref=e249]:
              - heading "Set Đồ Nam ICONDENIM Distance" [level=3] [ref=e250]:
                - link "Set Đồ Nam ICONDENIM Distance" [ref=e251] [cursor=pointer]:
                  - /url: /products/set-do-nam-icondenim-distance
              - img [ref=e254]:
                - generic [ref=e256]: Sale
              - generic [ref=e257]:
                - generic [ref=e258]:
                  - paragraph [ref=e259]: 319,200₫ ~ 662,400₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e261] [cursor=pointer]:
                    - generic [ref=e262]:
                      - img "Thêm vào giỏ" [ref=e263]
                      - img "Thêm vào giỏ" [ref=e264]
                - list
          - generic [ref=e266]:
            - link "Set Đồ Nam ICONDENIM Cool Super Star Bear" [ref=e268] [cursor=pointer]:
              - /url: /products/set-do-nam-icondenim-cool-super-star-bear
              - img "Set Đồ Nam ICONDENIM Cool Super Star Bear" [ref=e269]
            - generic [ref=e271]: 40%
            - generic [ref=e272]:
              - heading "Set Đồ Nam ICONDENIM Cool Super Star Bear" [level=3] [ref=e273]:
                - link "Set Đồ Nam ICONDENIM Cool Super Star Bear" [ref=e274] [cursor=pointer]:
                  - /url: /products/set-do-nam-icondenim-cool-super-star-bear
              - img [ref=e277]:
                - generic [ref=e279]: Sale
              - generic [ref=e280]:
                - generic [ref=e281]:
                  - paragraph [ref=e282]: 199,000₫ ~ 398,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e284] [cursor=pointer]:
                    - generic [ref=e285]:
                      - img "Thêm vào giỏ" [ref=e286]
                      - img "Thêm vào giỏ" [ref=e287]
                - list
          - generic [ref=e289]:
            - link "Set Đồ Nam ICONDENIM ORGNLS EST.19 Form Regular" [ref=e291] [cursor=pointer]:
              - /url: /products/set-do-nam-icondenim-orgnls-est-19
              - img "Set Đồ Nam ICONDENIM ORGNLS EST.19 Form Regular" [ref=e292]
            - generic [ref=e294]: 33%
            - generic [ref=e295]:
              - heading "Set Đồ Nam ICONDENIM ORGNLS EST.19" [level=3] [ref=e296]:
                - link "Set Đồ Nam ICONDENIM ORGNLS EST.19" [ref=e297] [cursor=pointer]:
                  - /url: /products/set-do-nam-icondenim-orgnls-est-19
              - img [ref=e300]:
                - generic [ref=e302]: Sale
              - generic [ref=e303]:
                - generic [ref=e304]:
                  - paragraph [ref=e305]: 149,000₫ ~ 348,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e307] [cursor=pointer]:
                    - generic [ref=e308]:
                      - img "Thêm vào giỏ" [ref=e309]
                      - img "Thêm vào giỏ" [ref=e310]
                - list
          - generic [ref=e312]:
            - link "Set Đồ Nam ICONDENIM Block Stripe Form Regular" [ref=e314] [cursor=pointer]:
              - /url: /products/set-do-nam-icondenim-block-stripe-form-regular
              - img "Set Đồ Nam ICONDENIM Block Stripe Form Regular" [ref=e315]
            - generic [ref=e317]: 40%
            - generic [ref=e318]:
              - heading "Set Đồ Nam ICONDENIM Block Stripe" [level=3] [ref=e319]:
                - link "Set Đồ Nam ICONDENIM Block Stripe" [ref=e320] [cursor=pointer]:
                  - /url: /products/set-do-nam-icondenim-block-stripe-form-regular
              - img [ref=e323]:
                - generic [ref=e325]: Sale
              - generic [ref=e326]:
                - generic [ref=e327]:
                  - paragraph [ref=e328]: 199,000₫ ~ 398,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e330] [cursor=pointer]:
                    - generic [ref=e331]:
                      - img "Thêm vào giỏ" [ref=e332]
                      - img "Thêm vào giỏ" [ref=e333]
                - list
          - generic [ref=e335]:
            - link "Set Đồ Nam ICONDENIM Golden Script" [ref=e337] [cursor=pointer]:
              - /url: /products/set-do-nam-icondenim-golden-script
              - img "Set Đồ Nam ICONDENIM Golden Script" [ref=e338]
            - generic [ref=e340]: 50%
            - generic [ref=e341]:
              - heading "Set Đồ Nam ICONDENIM Golden Script" [level=3] [ref=e342]:
                - link "Set Đồ Nam ICONDENIM Golden Script" [ref=e343] [cursor=pointer]:
                  - /url: /products/set-do-nam-icondenim-golden-script
              - img [ref=e346]:
                - generic [ref=e348]: Hot Deal
              - generic [ref=e349]:
                - generic [ref=e350]:
                  - paragraph [ref=e351]: 149,000₫ ~ 298,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e353] [cursor=pointer]:
                    - generic [ref=e354]:
                      - img "Thêm vào giỏ" [ref=e355]
                      - img "Thêm vào giỏ" [ref=e356]
                - list
          - generic [ref=e358]:
            - link "Set Đồ Nam Ngắn ICDN Nova Form Regular" [ref=e360] [cursor=pointer]:
              - /url: /products/set-do-nam-ngan-icdn-nova-form-regular
              - img "Set Đồ Nam Ngắn ICDN Nova Form Regular" [ref=e361]
            - generic [ref=e363]: 40%
            - generic [ref=e364]:
              - heading "Set Đồ Nam Ngắn ICDN Nova Form Regular" [level=3] [ref=e365]:
                - link "Set Đồ Nam Ngắn ICDN Nova Form Regular" [ref=e366] [cursor=pointer]:
                  - /url: /products/set-do-nam-ngan-icdn-nova-form-regular
              - generic:
                - generic:
                  - img
              - generic [ref=e367]:
                - generic [ref=e368]:
                  - paragraph [ref=e369]: 149,000₫ ~ 298,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e371] [cursor=pointer]:
                    - generic [ref=e372]:
                      - img "Thêm vào giỏ" [ref=e373]
                      - img "Thêm vào giỏ" [ref=e374]
                - list
          - generic [ref=e376]:
            - link "Set Đồ Nam Oxford Vignette ICDN Star" [ref=e378] [cursor=pointer]:
              - /url: /products/set-do-nam-icondenim-oxford-vignette-icdn-star
              - img "Set Đồ Nam Oxford Vignette ICDN Star" [ref=e379]
            - generic [ref=e381]: 24%
            - generic [ref=e382]:
              - heading "Set Đồ Nam ICONDENIM Oxford Vignette ICDN Star" [level=3] [ref=e383]:
                - link "Set Đồ Nam ICONDENIM Oxford Vignette ICDN Star" [ref=e384] [cursor=pointer]:
                  - /url: /products/set-do-nam-icondenim-oxford-vignette-icdn-star
              - generic:
                - generic:
                  - img
              - generic [ref=e385]:
                - generic [ref=e386]:
                  - paragraph [ref=e387]: 249,000₫ ~ 498,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e389] [cursor=pointer]:
                    - generic [ref=e390]:
                      - img "Thêm vào giỏ" [ref=e391]
                      - img "Thêm vào giỏ" [ref=e392]
                - list
          - generic [ref=e394]:
            - link "Set Đồ Nam ICONDENIM Jacquard Jean" [ref=e396] [cursor=pointer]:
              - /url: /products/set-do-nam-icondenim-jacquard-jean
              - img "Set Đồ Nam ICONDENIM Jacquard Jean" [ref=e397]
            - generic [ref=e398]:
              - heading "Set Đồ Nam ICONDENIM Jacquard Jean" [level=3] [ref=e399]:
                - link "Set Đồ Nam ICONDENIM Jacquard Jean" [ref=e400] [cursor=pointer]:
                  - /url: /products/set-do-nam-icondenim-jacquard-jean
              - generic:
                - generic:
                  - img
              - generic [ref=e401]:
                - generic [ref=e402]:
                  - paragraph [ref=e403]: 349,000₫ ~ 698,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e405] [cursor=pointer]:
                    - generic [ref=e406]:
                      - img "Thêm vào giỏ" [ref=e407]
                      - img "Thêm vào giỏ" [ref=e408]
                - list
          - generic [ref=e410]:
            - link "set-do-nam-icondenim-icdn-panelplay" [ref=e412] [cursor=pointer]:
              - /url: /products/set-do-nam-icondenim-icdn-panelplay
              - img "set-do-nam-icondenim-icdn-panelplay" [ref=e413]
            - generic [ref=e415]: 33%
            - generic [ref=e416]:
              - heading "Set Đồ Nam ICONDENIM ICDN PanelPlay" [level=3] [ref=e417]:
                - link "Set Đồ Nam ICONDENIM ICDN PanelPlay" [ref=e418] [cursor=pointer]:
                  - /url: /products/set-do-nam-icondenim-icdn-panelplay
              - generic:
                - generic:
                  - img
              - generic [ref=e419]:
                - generic [ref=e420]:
                  - paragraph [ref=e421]: 199,000₫ ~ 398,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e423] [cursor=pointer]:
                    - generic [ref=e424]:
                      - img "Thêm vào giỏ" [ref=e425]
                      - img "Thêm vào giỏ" [ref=e426]
                - list
          - generic [ref=e428]:
            - link "Set Đồ Nam ICONDENIM Embroidered Essence" [ref=e430] [cursor=pointer]:
              - /url: /products/set-do-icondenim-embroidered-essence
              - img "Set Đồ Nam ICONDENIM Embroidered Essence" [ref=e431]
            - generic [ref=e433]: 63%
            - generic [ref=e434]:
              - heading "Set Đồ Nam ICONDENIM Embroidered Essence" [level=3] [ref=e435]:
                - link "Set Đồ Nam ICONDENIM Embroidered Essence" [ref=e436] [cursor=pointer]:
                  - /url: /products/set-do-icondenim-embroidered-essence
              - img [ref=e439]:
                - generic [ref=e441]: Hot Deal
              - generic [ref=e442]:
                - generic [ref=e443]:
                  - paragraph [ref=e444]: 149,000₫ ~ 298,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e446] [cursor=pointer]:
                    - generic [ref=e447]:
                      - img "Thêm vào giỏ" [ref=e448]
                      - img "Thêm vào giỏ" [ref=e449]
                - list
          - generic [ref=e451]:
            - link "Set Đồ Nam ICONDENIM Denim Printed Sack Type chính diện" [ref=e453] [cursor=pointer]:
              - /url: /products/set-do-icondenim-denim-printed-sack-type
              - img "Set Đồ Nam ICONDENIM Denim Printed Sack Type chính diện" [ref=e454]
            - generic [ref=e456]: 53%
            - generic [ref=e457]:
              - heading "Set Đồ Nam ICONDENIM Denim Printed Sack Type" [level=3] [ref=e458]:
                - link "Set Đồ Nam ICONDENIM Denim Printed Sack Type" [ref=e459] [cursor=pointer]:
                  - /url: /products/set-do-icondenim-denim-printed-sack-type
              - img [ref=e462]:
                - generic [ref=e464]: Hot Deal
              - generic [ref=e465]:
                - generic [ref=e466]:
                  - paragraph [ref=e467]: 199,000₫ ~ 398,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e469] [cursor=pointer]:
                    - generic [ref=e470]:
                      - img "Thêm vào giỏ" [ref=e471]
                      - img "Thêm vào giỏ" [ref=e472]
                - list
        - generic:
          - paragraph
        - generic [ref=e473]:
          - 'heading "FAQ – Quần Áo Nam 160STORE: Chuẩn form, dễ mặc, cập nhật xu hướng" [level=2] [ref=e474]'
          - paragraph [ref=e475]: 160STORE là chuỗi thời trang nam toàn quốc với định hướng “All About Menswear” – cung cấp đầy đủ items thời trang cho nam giới. Mỗi sản phẩm được thiết kế tối ưu cho vóc dáng nam Việt, chất liệu bền bỉ – thoải mái – dễ phối, luôn cập nhật theo xu hướng mới nhất.
          - button "Quần áo nam tại 160STORE có gì đặc biệt? ▾" [ref=e477] [cursor=pointer]
          - button "160STORE phân phối những thương hiệu nào? ▾" [ref=e479] [cursor=pointer]
          - button "160STORE có cập nhật sản phẩm thường xuyên không? ▾" [ref=e481] [cursor=pointer]
          - button "Cách chọn size quần áo nam tại 160STORE thế nào cho chuẩn? ▾" [ref=e483] [cursor=pointer]
          - button "160STORE có dòng quần co giãn thoải mái như đồ thể thao không? ▾" [ref=e485] [cursor=pointer]
          - button "160STORE có chính sách đổi trả không? ▾" [ref=e487] [cursor=pointer]
  - generic [ref=e491]:
    - generic [ref=e492]:
      - paragraph [ref=e493]: Đăng kí nhận tin
      - generic [ref=e495]:
        - generic [ref=e496]:
          - text: 
          - textbox "Email" [ref=e497]
        - button "Đăng ký" [ref=e498] [cursor=pointer]:
          - generic [ref=e499]: 
          - text: Đăng ký
    - list [ref=e501]:
      - listitem [ref=e502]:
        - link "Liên hệ với chúng tôi qua Zalo" [ref=e503] [cursor=pointer]:
          - /url: //zalo.me/3664144181122308942
          - img "Liên hệ với chúng tôi qua Zalo" [ref=e504]
      - listitem [ref=e505]:
        - link [ref=e506] [cursor=pointer]:
          - /url: https://www.youtube.com/@storehanghieu1608
          - generic [ref=e507]: 
      - listitem [ref=e508]:
        - link [ref=e509] [cursor=pointer]:
          - /url: https://www.instagram.com/160store
          - generic [ref=e510]: 
      - listitem [ref=e511]:
        - link [ref=e512] [cursor=pointer]:
          - /url: https://www.facebook.com/160store
          - generic [ref=e513]: 
  - contentinfo [ref=e514]:
    - generic [ref=e516]:
      - generic [ref=e517]:
        - generic [ref=e518]:
          - generic [ref=e520]: Giới thiệu
          - generic [ref=e521]:
            - paragraph [ref=e522]: 160STORE - Chuỗi Phân Phối Thời Trang Nam Chuẩn Hiệu
            - list [ref=e523]:
              - listitem [ref=e524]:
                - generic [ref=e525]: 
                - link "02871006789" [ref=e526] [cursor=pointer]:
                  - /url: tel:02871006789
              - listitem [ref=e527]:
                - generic [ref=e528]: 
                - link "cs@160store.com" [ref=e529] [cursor=pointer]:
                  - /url: mailto:cs@160store.com
              - listitem [ref=e530]:
                - generic [ref=e531]: 
                - generic [ref=e532]: "Giờ mở cửa : 08:30 - 22:00"
              - listitem [ref=e533]:
                - generic [ref=e534]: 
                - generic [ref=e535]: Nhân viên tư vấn phản hồi tin nhắn đến 24:00 (Mỗi ngày)
              - listitem [ref=e536]:
                - link [ref=e537] [cursor=pointer]:
                  - /url: http://online.gov.vn/nen-tang/1a643809-3f92-4419-944d-c2d4fdffb78b
                  - img [ref=e538]
              - listitem [ref=e539]:
                - link "DMCA.com Protection Status" [ref=e540] [cursor=pointer]:
                  - /url: https://www.dmca.com/Protection/Status.aspx?ID=9049de26-d97b-48dc-ab97-1e5fcb221fba&refurl=https://160store.com/collections/tracksuit
                  - img "DMCA.com Protection Status" [ref=e541]
        - generic [ref=e542]:
          - generic [ref=e544]: CHÍNH SÁCH
          - list [ref=e546]:
            - listitem [ref=e547]:
              - link "Hướng dẫn đặt hàng" [ref=e548] [cursor=pointer]:
                - /url: /pages/huong-dan-dat-hang
            - listitem [ref=e549]:
              - paragraph [ref=e552] [cursor=pointer]: Chính sách
        - generic [ref=e554]:
          - link "ĐỊA CHỈ CỬA HÀNG (20 CH)" [ref=e557] [cursor=pointer]:
            - /url: https://www.160store.com/pages/lien-he
          - generic [ref=e559]:
            - generic [ref=e560]:
              - generic [ref=e561]:
                - img [ref=e562]
                - paragraph [ref=e563]: HỒ CHÍ MINH (10 CH)
              - paragraph [ref=e564]: 274 Ba Cu, Phường Vũng Tàu, TP.HCM
            - generic [ref=e565]:
              - generic [ref=e566]:
                - img [ref=e567]
                - paragraph [ref=e568]:
                  - text: HÀ NỘI (2 CH)
                  - generic [ref=e569]: New
              - paragraph [ref=e570]: 27 Tôn Đức Thắng - P. Văn Miếu - Quốc Tử Giám; TP. Hà Nội
            - generic [ref=e571]:
              - generic [ref=e572]:
                - img [ref=e573]
                - paragraph [ref=e574]: CẦN THƠ (2 CH)
              - paragraph [ref=e575]: Số 35 Trần Phú, Phường Ninh Kiều, TP.Cần Thơ
            - generic [ref=e576]:
              - generic [ref=e577]:
                - img [ref=e578]
                - paragraph [ref=e579]: ĐÀ NẴNG (2 CH)
              - paragraph [ref=e580]: 332 Đ. Lê Duẩn, Phường Thanh Khê, TP.Đà Nẵng
            - link "XEM TẤT CẢ CỬA HÀNG" [ref=e582] [cursor=pointer]:
              - /url: https://www.160store.com/pages/lien-he
        - generic [ref=e585]:
          - generic [ref=e586]: PHƯƠNG THỨC THANH TOÁN
          - generic [ref=e587]:
            - img "Image Spay" [ref=e588]
            - img "Image VNPay" [ref=e589]
            - img "Image Cod" [ref=e590]
      - generic [ref=e595]: BẢN QUYỀN THUỘC VỀ 160STORE
  - list [ref=e597]
  - button "back to top" [ref=e599] [cursor=pointer]:
    - img [ref=e600]
    - text: back to top
  - paragraph [ref=e606]: Bạn chưa chọn size sản phẩm!
  - generic:
    - generic:
      - generic: 🎯 BÁO CÁO SEO AUDIT CHUYÊN SÂU
      - generic: "Phần A: On-page cơ bản"
    - generic:
      - generic:
        - generic:
          - generic:
            - generic:
              - generic: "68"
              - generic: SEO
          - generic: KHÁ
        - generic:
          - generic:
            - generic: "Trang phân tích:"
            - strong: SET QUẦN ÁO
          - generic:
            - generic: "Từ khóa chính:"
            - strong: set quần áo
          - generic:
            - generic: "Tiêu chí đạt:"
            - strong: 26/38
      - generic:
        - generic: "❌ Chi tiết lỗi cần khắc phục (12):"
        - generic:
          - generic:
            - generic:
              - strong: 1.3 — Title chứa keyword "set quần áo"
              - generic: "1.3"
            - generic: "⚠️ Lỗi: Title không chứa keyword \"set quần áo\""
          - generic:
            - generic:
              - strong: "1.4 — Keyword nằm ở nửa đầu Title (vị trí: N/A)"
              - generic: "1.4"
            - generic: "⚠️ Lỗi: Bỏ qua — keyword \"set quần áo\" không có trong Title"
          - generic:
            - generic:
              - strong: 2.3 — Meta description chứa keyword "set quần áo"
              - generic: "2.3"
            - generic: "⚠️ Lỗi: Meta description không chứa keyword \"set quần áo\""
          - generic:
            - generic:
              - strong: "3.1 — Trang có đúng 1 thẻ H1 (hiện tại: 0 thẻ)"
              - generic: "3.1"
            - generic: "⚠️ Lỗi: Trang không có thẻ H1 nào!"
          - generic:
            - generic:
              - strong: 3.2 — H1 chứa keyword "set quần áo"
              - generic: "3.2"
            - generic: "⚠️ Lỗi: Không có H1 để kiểm tra"
          - generic:
            - generic:
              - strong: 4.2 — URL chứa keyword slug "set-quần-áo"
              - generic: "4.2"
            - generic: "⚠️ Lỗi: URL \"/collections/tracksuit\" không chứa keyword \"set-quần-áo\""
          - generic:
            - generic:
              - strong: "5.2 — Mật độ keyword: 0.29% (chuẩn: 0.5%–2.5%)"
              - generic: "5.2"
            - generic: "⚠️ Lỗi: Mật độ keyword quá thấp: 0.29%, cần ≥ 0.5%"
          - generic:
            - generic:
              - strong: 5.3 — Keyword "set quần áo" xuất hiện trong 100 từ đầu
              - generic: "5.3"
            - generic: "⚠️ Lỗi: Keyword \"set quần áo\" không xuất hiện trong 100 từ đầu"
          - generic:
            - generic:
              - strong: "6.1 — 100% ảnh có thuộc tính alt (thiếu: 9/143)"
              - generic: "6.1"
            - generic: "⚠️ Lỗi: Có 9 hình ảnh thiếu thuộc tính 'alt'"
          - generic:
            - generic:
              - strong: 6.2 — Có ảnh chứa keyword "set quần áo" trong alt
              - generic: "6.2"
            - generic: "⚠️ Lỗi: Không có ảnh nào có alt chứa keyword \"set quần áo\""
          - generic:
            - generic:
              - strong: "7.3 — Anchor text chất lượng (lỗi: 14)"
              - generic: "7.3"
            - generic: "⚠️ Lỗi: 14 link có anchor text không tốt: \"\" → /, \"\" → /, \"\" → /, \"\" → /, \"\" → /products/set-ao-quan-nam-icondenim-lazy-fish, \"\" → /products/set-ao-quan-nam-icondenim-edgestitch, \"\" → /products/set-do-nam-ngan-icondenim-orgnls, \"\" → /products/set-do-nam-icondenim-lunary, \"\" → /products/set-do-nam-icondenim-orgnls-2, \"\" → /products/set-do-nam-icondenim-orgnls-1, \"\" → /products/set-do-nam-icondenim-jacquard-jean, \"\" → //zalo.me/3664144181122308942, \"\" → //m.me/1042686802417049, \"\" → //zalo.me/3664144181122308942"
          - generic:
            - generic:
              - strong: "8.7 — Twitter Card tags: 0 thẻ"
              - generic: "8.7"
            - generic: "⚠️ Lỗi: Trang thiếu Twitter Card tags"
```

# Test source

```ts
  61  |                         "text/plain"
  62  |                     );
  63  |                     throw new Error(errorMessage); // Ép Allure đánh ❌ cho step này
  64  |                 });
  65  |             } catch {
  66  |                 // Nuốt lỗi — test tiếp tục chạy bình thường
  67  |             }
  68  |         }
  69  |     }
  70  | 
  71  |     /** Lấy điểm hiện tại (0–100) */
  72  |     get score(): number {
  73  |         if (this.totalChecks === 0) return 100;
  74  |         return Math.round((this.passedChecks / this.totalChecks) * 100);
  75  |     }
  76  | 
  77  |     /** Lấy thống kê chi tiết */
  78  |     get stats() {
  79  |         return {
  80  |             total: this.totalChecks,
  81  |             passed: this.passedChecks,
  82  |             failed: this.totalChecks - this.passedChecks,
  83  |             score: this.score,
  84  |             failures: [...this.failures],
  85  |         };
  86  |     }
  87  | 
  88  |     async finalizeScore(page: Page, threshold = 70): Promise<void> {
  89  |         const { total, passed, failed, score, failures } = this.stats;
  90  | 
  91  |         // Xác định trạng thái
  92  |         const isPass = score >= threshold;
  93  |         const statusText = isPass ? "PASS" : "FAIL";
  94  | 
  95  |         // Thang điểm SEO mới
  96  |         let scoreLabel: string;
  97  |         let statusIcon: string;
  98  |         if (score >= 93) {
  99  |             scoreLabel = "XUẤT SẮC";
  100 |             statusIcon = "💎";
  101 |         } else if (score >= 77) {
  102 |             scoreLabel = "TỐT";
  103 |             statusIcon = "🟢";
  104 |         } else if (score >= 65) {
  105 |             scoreLabel = "KHÁ";
  106 |             statusIcon = "🟡";
  107 |         } else if (score >= 50) {
  108 |             scoreLabel = "TRUNG BÌNH";
  109 |             statusIcon = "🟠";
  110 |         } else {
  111 |             scoreLabel = "KÉM";
  112 |             statusIcon = "🔴";
  113 |         }
  114 | 
  115 |         // Tạo báo cáo tổng kết dạng text
  116 |         const summaryLines = [
  117 |             `══════════════════════════════════════`,
  118 |             `   ${statusIcon} KẾT QUẢ CHẤM ĐIỂM SEO`,
  119 |             `══════════════════════════════════════`,
  120 |             `   Điểm số:     ${score}/100`,
  121 |             `   Đánh giá:    ${scoreLabel}`,
  122 |             `   Ngưỡng đạt:  ${threshold}%`,
  123 |             `   Kết quả:     ${statusText}`,
  124 |             `──────────────────────────────────────`,
  125 |             `   Tổng tiêu chí:  ${total}`,
  126 |             `   ✅ Đạt:          ${passed}`,
  127 |             `   ❌ Không đạt:    ${failed}`,
  128 |             `══════════════════════════════════════`,
  129 |         ];
  130 | 
  131 |         if (failures.length > 0) {
  132 |             summaryLines.push(``, `📋 CHI TIẾT LỖI:`);
  133 |             failures.forEach((f, i) => {
  134 |                 summaryLines.push(`   ${i + 1}. [${f.step}]`);
  135 |                 summaryLines.push(`      → ${f.message}`);
  136 |             });
  137 |         }
  138 | 
  139 |         const summaryText = summaryLines.join("\n");
  140 | 
  141 |         // Step cuối cùng — hiển thị bảng điểm + quyết định PASS/FAIL
  142 |         await customStep(
  143 |             page,
  144 |             `13. 🏆 Kết quả chấm điểm SEO: ${score}/100 — ${statusText} (${scoreLabel})`,
  145 |             async () => {
  146 |                 // Đính kèm bảng điểm text
  147 |                 await allure.attachment(
  148 |                     "Bảng điểm SEO",
  149 |                     Buffer.from(summaryText, "utf-8"),
  150 |                     "text/plain"
  151 |                 );
  152 | 
  153 |                 // Gắn description vào Test Case trên Allure
  154 |                 await allure.description(
  155 |                     `[${statusText}] Điểm SEO: ${score}/100 | Đạt: ${passed}/${total} tiêu chí | Ngưỡng: ${threshold}%\n\n` +
  156 |                     `${scoreLabel}`
  157 |                 );
  158 | 
  159 |                 // 🚀 ĐÂY LÀ DÒNG DUY NHẤT quyết định Test PASS hay FAIL
  160 |                 if (!isPass) {
> 161 |                     throw new Error(
      |                           ^ Error: ❌ FAIL — Điểm SEO 68/100 dưới ngưỡng 70%. Có 12/38 tiêu chí không đạt.
  162 |                         `❌ FAIL — Điểm SEO ${score}/100 dưới ngưỡng ${threshold}%. ` +
  163 |                         `Có ${failed}/${total} tiêu chí không đạt.`
  164 |                     );
  165 |                 }
  166 |             },
  167 |             { screenshot: true }
  168 |         );
  169 |     }
  170 | }
```