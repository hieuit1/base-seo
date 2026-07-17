# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo.spec.ts >> SEO TIÊU CHUẨN CƠ BẢN CHO WEB >> Kiểm tra SEO Onpage: Runpow Collection 2026
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
    - list [ref=e104]:
      - listitem [ref=e105]:
        - link "Trang chủ" [ref=e106] [cursor=pointer]:
          - /url: /
      - listitem [ref=e107]:
        - text: /
        - generic [ref=e108]: Runpow
    - generic [ref=e111]:
      - img "Runpow" [ref=e114]
      - generic [ref=e116]:
        - generic [ref=e119]:
          - text: "Sắp xếp:"
          - combobox [ref=e120] [cursor=pointer]:
            - option "Sản phẩm nổi bật"
            - 'option "Giá: Tăng dần"'
            - 'option "Giá: Giảm dần"'
            - 'option "Tên: A-Z" [selected]'
            - 'option "Tên: Z-A"'
            - option "Cũ nhất"
            - option "Mới nhất"
            - option "Bán chạy nhất"
            - 'option "Tồn kho: Giảm dần"'
        - text: 
        - generic [ref=e121]:
          - generic [ref=e123]:
            - link "Áo Tank Top RUNPOW Aero Jacquard" [ref=e125] [cursor=pointer]:
              - /url: /products/ao-tank-top-runpow-aero-jacquard
              - img "Áo Tank Top RUNPOW Aero Jacquard" [ref=e126]
            - generic [ref=e128]: 32%
            - generic [ref=e129]:
              - heading "Áo Tank Top RUNPOW Aero Jacquard" [level=3] [ref=e130]:
                - link "Áo Tank Top RUNPOW Aero Jacquard" [ref=e131] [cursor=pointer]:
                  - /url: /products/ao-tank-top-runpow-aero-jacquard
              - img [ref=e134]:
                - generic [ref=e136]: Giá trải nghiệm
              - generic [ref=e137]:
                - generic [ref=e138]:
                  - paragraph [ref=e139]:
                    - text: 149,000₫
                    - deletion [ref=e140]: 219,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e142] [cursor=pointer]:
                    - generic [ref=e143]:
                      - img "Thêm vào giỏ" [ref=e144]
                      - img "Thêm vào giỏ" [ref=e145]
                - list
          - generic [ref=e147]:
            - link "Áo Tanktop Nam RUNPOW In Camo" [ref=e149] [cursor=pointer]:
              - /url: /products/ao-tanktop-nam-runpow-in-camo
              - img "Áo Tanktop Nam RUNPOW In Camo" [ref=e150]
            - generic [ref=e152]: 20%
            - generic [ref=e153]:
              - heading "Áo Tanktop Nam RUNPOW In Camo" [level=3] [ref=e154]:
                - link "Áo Tanktop Nam RUNPOW In Camo" [ref=e155] [cursor=pointer]:
                  - /url: /products/ao-tanktop-nam-runpow-in-camo
              - img [ref=e158]:
                - generic [ref=e160]: Giá trải nghiệm
              - generic [ref=e161]:
                - generic [ref=e162]:
                  - paragraph [ref=e163]:
                    - text: 239,000₫
                    - deletion [ref=e164]: 299,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e166] [cursor=pointer]:
                    - generic [ref=e167]:
                      - img "Thêm vào giỏ" [ref=e168]
                      - img "Thêm vào giỏ" [ref=e169]
                - list
          - generic [ref=e171]:
            - link "Áo Tanktop Nam RUNPOW Movefree" [ref=e173] [cursor=pointer]:
              - /url: /products/ao-tanktop-runpow-movefree
              - img "Áo Tanktop Nam RUNPOW Movefree" [ref=e174]
            - generic [ref=e176]: 21%
            - generic [ref=e177]:
              - heading "Áo Tanktop Nam RUNPOW Movefree" [level=3] [ref=e178]:
                - link "Áo Tanktop Nam RUNPOW Movefree" [ref=e179] [cursor=pointer]:
                  - /url: /products/ao-tanktop-runpow-movefree
              - img [ref=e182]:
                - generic [ref=e184]: Giá trải nghiệm
              - generic [ref=e185]:
                - generic [ref=e186]:
                  - paragraph [ref=e187]:
                    - text: 229,000₫
                    - deletion [ref=e188]: 289,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e190] [cursor=pointer]:
                    - generic [ref=e191]:
                      - img "Thêm vào giỏ" [ref=e192]
                      - img "Thêm vào giỏ" [ref=e193]
                - list
          - generic [ref=e195]:
            - link "Áo Tanktop Nam RUNPOW Pro Swift" [ref=e197] [cursor=pointer]:
              - /url: /products/ao-tanktop-nam-runpow-pro-swift
              - img "Áo Tanktop Nam RUNPOW Pro Swift" [ref=e198]
            - generic [ref=e200]: 21%
            - generic [ref=e201]:
              - heading "Áo Tanktop Nam RUNPOW Pro Swift" [level=3] [ref=e202]:
                - link "Áo Tanktop Nam RUNPOW Pro Swift" [ref=e203] [cursor=pointer]:
                  - /url: /products/ao-tanktop-nam-runpow-pro-swift
              - img [ref=e206]:
                - generic [ref=e208]: Giá trải nghiệm
              - generic [ref=e209]:
                - generic [ref=e210]:
                  - paragraph [ref=e211]:
                    - text: 229,000₫
                    - deletion [ref=e212]: 289,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e214] [cursor=pointer]:
                    - generic [ref=e215]:
                      - img "Thêm vào giỏ" [ref=e216]
                      - img "Thêm vào giỏ" [ref=e217]
                - list
          - generic [ref=e219]:
            - link "Áo Thun Nam RUNPOW Momentum" [ref=e221] [cursor=pointer]:
              - /url: /products/ao-thun-nam-runpow-momentum
              - img "Áo Thun Nam RUNPOW Momentum" [ref=e222]
            - generic [ref=e224]: 20%
            - generic [ref=e225]:
              - heading "Áo Thun Nam RUNPOW Momentum" [level=3] [ref=e226]:
                - link "Áo Thun Nam RUNPOW Momentum" [ref=e227] [cursor=pointer]:
                  - /url: /products/ao-thun-nam-runpow-momentum
              - img [ref=e230]:
                - generic [ref=e232]: Giá trải nghiệm
              - generic [ref=e233]:
                - generic [ref=e234]:
                  - paragraph [ref=e235]:
                    - text: 279,000₫
                    - deletion [ref=e236]: 349,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e238] [cursor=pointer]:
                    - generic [ref=e239]:
                      - img "Thêm vào giỏ" [ref=e240]
                      - img "Thêm vào giỏ" [ref=e241]
                - list
          - generic [ref=e243]:
            - link "Áo Thun Nam RUNPOW NatureStride Form regular" [ref=e245] [cursor=pointer]:
              - /url: /products/ao-thun-nam-runpow-naturestride
              - img "Áo Thun Nam RUNPOW NatureStride Form regular" [ref=e246]
            - generic [ref=e247]:
              - heading "Áo Thun Nam RUNPOW NatureStride" [level=3] [ref=e248]:
                - link "Áo Thun Nam RUNPOW NatureStride" [ref=e249] [cursor=pointer]:
                  - /url: /products/ao-thun-nam-runpow-naturestride
              - img [ref=e252]:
                - generic [ref=e253]: Hàng Mới
              - generic [ref=e254]:
                - generic [ref=e255]:
                  - paragraph [ref=e256]: 249,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e258] [cursor=pointer]:
                    - generic [ref=e259]:
                      - img "Thêm vào giỏ" [ref=e260]
                      - img "Thêm vào giỏ" [ref=e261]
                - list
          - generic [ref=e263]:
            - link "Áo Thun Nam RUNPOW Raglan Active" [ref=e265] [cursor=pointer]:
              - /url: /products/ao-thun-nam-runpow-raglan-active
              - img "Áo Thun Nam RUNPOW Raglan Active" [ref=e266]
            - generic [ref=e268]: 20%
            - generic [ref=e269]:
              - heading "Áo Thun Nam RUNPOW Raglan Active" [level=3] [ref=e270]:
                - link "Áo Thun Nam RUNPOW Raglan Active" [ref=e271] [cursor=pointer]:
                  - /url: /products/ao-thun-nam-runpow-raglan-active
              - img [ref=e274]:
                - generic [ref=e276]: Giá trải nghiệm
              - generic [ref=e277]:
                - generic [ref=e278]:
                  - paragraph [ref=e279]:
                    - text: 279,000₫
                    - deletion [ref=e280]: 349,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e282] [cursor=pointer]:
                    - generic [ref=e283]:
                      - img "Thêm vào giỏ" [ref=e284]
                      - img "Thêm vào giỏ" [ref=e285]
                - list
          - generic [ref=e287]:
            - link "Áo Thun Nam Thể Thao RUNPOW Aero Jacquard Form Slim" [ref=e289] [cursor=pointer]:
              - /url: /products/ao-thun-nam-the-thao-runpow-aero-jacquard
              - img "Áo Thun Nam Thể Thao RUNPOW Aero Jacquard Form Slim" [ref=e290]
            - generic [ref=e292]: 40%
            - generic [ref=e293]:
              - heading "Áo Thun Nam Thể Thao RUNPOW Aero Jacquard" [level=3] [ref=e294]:
                - link "Áo Thun Nam Thể Thao RUNPOW Aero Jacquard" [ref=e295] [cursor=pointer]:
                  - /url: /products/ao-thun-nam-the-thao-runpow-aero-jacquard
              - img [ref=e298]:
                - generic [ref=e300]: Giá trải nghiệm
              - generic [ref=e301]:
                - generic [ref=e302]:
                  - paragraph [ref=e303]:
                    - text: 149,000₫
                    - deletion [ref=e304]: 249,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e306] [cursor=pointer]:
                    - generic [ref=e307]:
                      - img "Thêm vào giỏ" [ref=e308]
                      - img "Thêm vào giỏ" [ref=e309]
                - list
          - generic [ref=e311]:
            - link "Áo Tanktop Nam RUNPOW In NatureStride Form Regular" [ref=e313] [cursor=pointer]:
              - /url: /products/a-o-tanktop-nam-runpow-in-naturestride
              - img "Áo Tanktop Nam RUNPOW In NatureStride Form Regular" [ref=e314]
            - generic [ref=e316]: 32%
            - generic [ref=e317]:
              - heading "Áo Tanktop Nam RUNPOW In NatureStride" [level=3] [ref=e318]:
                - link "Áo Tanktop Nam RUNPOW In NatureStride" [ref=e319] [cursor=pointer]:
                  - /url: /products/a-o-tanktop-nam-runpow-in-naturestride
              - img [ref=e322]:
                - generic [ref=e324]: Giá trải nghiệm
              - generic [ref=e325]:
                - generic [ref=e326]:
                  - paragraph [ref=e327]:
                    - text: 149,000₫
                    - deletion [ref=e328]: 219,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e330] [cursor=pointer]:
                    - generic [ref=e331]:
                      - img "Thêm vào giỏ" [ref=e332]
                      - img "Thêm vào giỏ" [ref=e333]
                - list
          - generic [ref=e335]:
            - link "Quần Jogger Nam RUNPOW Urban Stride" [ref=e337] [cursor=pointer]:
              - /url: /products/quan-jogger-nam-runpow-urban-stride
              - img "Quần Jogger Nam RUNPOW Urban Stride" [ref=e338]
            - generic [ref=e340]: 20%
            - generic [ref=e341]:
              - heading "Quần Jogger Nam RUNPOW Urban Stride" [level=3] [ref=e342]:
                - link "Quần Jogger Nam RUNPOW Urban Stride" [ref=e343] [cursor=pointer]:
                  - /url: /products/quan-jogger-nam-runpow-urban-stride
              - img [ref=e346]:
                - generic [ref=e348]: Giá trải nghiệm
              - generic [ref=e349]:
                - generic [ref=e350]:
                  - paragraph [ref=e351]:
                    - text: 429,000₫
                    - deletion [ref=e352]: 539,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e354] [cursor=pointer]:
                    - generic [ref=e355]:
                      - img "Thêm vào giỏ" [ref=e356]
                      - img "Thêm vào giỏ" [ref=e357]
                - list
          - generic [ref=e359]:
            - link "Quần Short Dù Nam RUNPOW Dual-Layer Performance" [ref=e361] [cursor=pointer]:
              - /url: /products/quan-short-du-runpow-dual-layer-performance
              - img "Quần Short Dù Nam RUNPOW Dual-Layer Performance" [ref=e362]
            - generic [ref=e364]: 29%
            - generic [ref=e365]:
              - heading "Quần Short Dù Nam RUNPOW Dual-Layer Performance" [level=3] [ref=e366]:
                - link "Quần Short Dù Nam RUNPOW Dual-Layer Performance" [ref=e367] [cursor=pointer]:
                  - /url: /products/quan-short-du-runpow-dual-layer-performance
              - img [ref=e370]:
                - generic [ref=e372]: Giá trải nghiệm
              - generic [ref=e373]:
                - generic [ref=e374]:
                  - paragraph [ref=e375]:
                    - text: 249,000₫
                    - deletion [ref=e376]: 349,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e378] [cursor=pointer]:
                    - generic [ref=e379]:
                      - img "Thêm vào giỏ" [ref=e380]
                      - img "Thêm vào giỏ" [ref=e381]
                - list
          - generic [ref=e383]:
            - link "Quần Short Dù Nam RUNPOW Premium Traning Kit" [ref=e385] [cursor=pointer]:
              - /url: /products/quan-short-du-nam-runpow-premium-traning-kit
              - img "Quần Short Dù Nam RUNPOW Premium Traning Kit" [ref=e386]
            - generic [ref=e387]:
              - heading "Quần Short Dù Nam RUNPOW Premium Traning Kit" [level=3] [ref=e388]:
                - link "Quần Short Dù Nam RUNPOW Premium Traning Kit" [ref=e389] [cursor=pointer]:
                  - /url: /products/quan-short-du-nam-runpow-premium-traning-kit
              - generic:
                - generic:
                  - img
              - generic [ref=e390]:
                - generic [ref=e391]:
                  - paragraph [ref=e392]: 350,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e394] [cursor=pointer]:
                    - generic [ref=e395]:
                      - img "Thêm vào giỏ" [ref=e396]
                      - img "Thêm vào giỏ" [ref=e397]
                - list
          - generic [ref=e399]:
            - link "Quần Short Nam 5' RUNPOW Flash Move" [ref=e401] [cursor=pointer]:
              - /url: /products/quan-short-nam-5-runpow-flash-move
              - img "Quần Short Nam 5' RUNPOW Flash Move" [ref=e402]
            - generic [ref=e403]:
              - heading "Quần Short Nam 5' RUNPOW Flash Move" [level=3] [ref=e404]:
                - link "Quần Short Nam 5' RUNPOW Flash Move" [ref=e405] [cursor=pointer]:
                  - /url: /products/quan-short-nam-5-runpow-flash-move
              - generic:
                - generic:
                  - img
              - generic [ref=e406]:
                - generic [ref=e407]:
                  - paragraph [ref=e408]: 299,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e410] [cursor=pointer]:
                    - generic [ref=e411]:
                      - img "Thêm vào giỏ" [ref=e412]
                      - img "Thêm vào giỏ" [ref=e413]
                - list
          - generic [ref=e415]:
            - link "Quần Short Nam RUNPOW Aero Twin" [ref=e417] [cursor=pointer]:
              - /url: /products/quan-short-nam-runpow-aero-twin
              - img "Quần Short Nam RUNPOW Aero Twin" [ref=e418]
            - generic [ref=e420]: 20%
            - generic [ref=e421]:
              - heading "Quần Short Nam RUNPOW Aero Twin" [level=3] [ref=e422]:
                - link "Quần Short Nam RUNPOW Aero Twin" [ref=e423] [cursor=pointer]:
                  - /url: /products/quan-short-nam-runpow-aero-twin
              - img [ref=e426]:
                - generic [ref=e428]: Giá trải nghiệm
              - generic [ref=e429]:
                - generic [ref=e430]:
                  - paragraph [ref=e431]:
                    - text: 359,000₫
                    - deletion [ref=e432]: 449,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e434] [cursor=pointer]:
                    - generic [ref=e435]:
                      - img "Thêm vào giỏ" [ref=e436]
                      - img "Thêm vào giỏ" [ref=e437]
                - list
          - generic [ref=e439]:
            - link "Quần Short Nam RUNPOW In Camo" [ref=e441] [cursor=pointer]:
              - /url: /products/quan-short-nam-runpow-in-camo
              - img "Quần Short Nam RUNPOW In Camo" [ref=e442]
            - generic [ref=e444]: 21%
            - generic [ref=e445]:
              - heading "Quần Short Nam RUNPOW In Camo" [level=3] [ref=e446]:
                - link "Quần Short Nam RUNPOW In Camo" [ref=e447] [cursor=pointer]:
                  - /url: /products/quan-short-nam-runpow-in-camo
              - img [ref=e450]:
                - generic [ref=e452]: Giá trải nghiệm
              - generic [ref=e453]:
                - generic [ref=e454]:
                  - paragraph [ref=e455]:
                    - text: 379,000₫
                    - deletion [ref=e456]: 479,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e458] [cursor=pointer]:
                    - generic [ref=e459]:
                      - img "Thêm vào giỏ" [ref=e460]
                      - img "Thêm vào giỏ" [ref=e461]
                - list
          - generic [ref=e463]:
            - link "Set Đồ Nam RUNPOW Airflow Mesh Jersey" [ref=e465] [cursor=pointer]:
              - /url: /products/set-do-nam-runpow-airflow-mesh-jersey
              - img "Set Đồ Nam RUNPOW Airflow Mesh Jersey" [ref=e466]
            - generic [ref=e468]: 22%
            - generic [ref=e469]:
              - heading "Set Đồ Nam RUNPOW Airflow Mesh Jersey" [level=3] [ref=e470]:
                - link "Set Đồ Nam RUNPOW Airflow Mesh Jersey" [ref=e471] [cursor=pointer]:
                  - /url: /products/set-do-nam-runpow-airflow-mesh-jersey
              - img [ref=e474]:
                - generic [ref=e476]: Giá trải nghiệm
              - generic [ref=e477]:
                - generic [ref=e478]:
                  - paragraph [ref=e479]: 179,000₫ ~ 428,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e481] [cursor=pointer]:
                    - generic [ref=e482]:
                      - img "Thêm vào giỏ" [ref=e483]
                      - img "Thêm vào giỏ" [ref=e484]
                - list
        - generic:
          - paragraph
  - generic [ref=e488]:
    - generic [ref=e489]:
      - paragraph [ref=e490]: Đăng kí nhận tin
      - generic [ref=e492]:
        - generic [ref=e493]:
          - text: 
          - textbox "Email" [ref=e494]
        - button "Đăng ký" [ref=e495] [cursor=pointer]:
          - generic [ref=e496]: 
          - text: Đăng ký
    - list [ref=e498]:
      - listitem [ref=e499]:
        - link "Liên hệ với chúng tôi qua Zalo" [ref=e500] [cursor=pointer]:
          - /url: //zalo.me/3664144181122308942
          - img "Liên hệ với chúng tôi qua Zalo" [ref=e501]
      - listitem [ref=e502]:
        - link [ref=e503] [cursor=pointer]:
          - /url: https://www.youtube.com/@storehanghieu1608
          - generic [ref=e504]: 
      - listitem [ref=e505]:
        - link [ref=e506] [cursor=pointer]:
          - /url: https://www.instagram.com/160store
          - generic [ref=e507]: 
      - listitem [ref=e508]:
        - link [ref=e509] [cursor=pointer]:
          - /url: https://www.facebook.com/160store
          - generic [ref=e510]: 
  - contentinfo [ref=e511]:
    - generic [ref=e513]:
      - generic [ref=e514]:
        - generic [ref=e515]:
          - generic [ref=e517]: Giới thiệu
          - generic [ref=e518]:
            - paragraph [ref=e519]: 160STORE - Chuỗi Phân Phối Thời Trang Nam Chuẩn Hiệu
            - list [ref=e520]:
              - listitem [ref=e521]:
                - generic [ref=e522]: 
                - link "02871006789" [ref=e523] [cursor=pointer]:
                  - /url: tel:02871006789
              - listitem [ref=e524]:
                - generic [ref=e525]: 
                - link "cs@160store.com" [ref=e526] [cursor=pointer]:
                  - /url: mailto:cs@160store.com
              - listitem [ref=e527]:
                - generic [ref=e528]: 
                - generic [ref=e529]: "Giờ mở cửa : 08:30 - 22:00"
              - listitem [ref=e530]:
                - generic [ref=e531]: 
                - generic [ref=e532]: Nhân viên tư vấn phản hồi tin nhắn đến 24:00 (Mỗi ngày)
              - listitem [ref=e533]:
                - link [ref=e534] [cursor=pointer]:
                  - /url: http://online.gov.vn/nen-tang/1a643809-3f92-4419-944d-c2d4fdffb78b
                  - img [ref=e535]
              - listitem [ref=e536]:
                - link "DMCA.com Protection Status" [ref=e537] [cursor=pointer]:
                  - /url: https://www.dmca.com/Protection/Status.aspx?ID=9049de26-d97b-48dc-ab97-1e5fcb221fba&refurl=https://160store.com/collections/runpow-26
                  - img "DMCA.com Protection Status" [ref=e538]
        - generic [ref=e539]:
          - generic [ref=e541]: CHÍNH SÁCH
          - list [ref=e543]:
            - listitem [ref=e544]:
              - link "Hướng dẫn đặt hàng" [ref=e545] [cursor=pointer]:
                - /url: /pages/huong-dan-dat-hang
            - listitem [ref=e546]:
              - paragraph [ref=e549] [cursor=pointer]: Chính sách
        - generic [ref=e551]:
          - link "ĐỊA CHỈ CỬA HÀNG (20 CH)" [ref=e554] [cursor=pointer]:
            - /url: https://www.160store.com/pages/lien-he
          - generic [ref=e556]:
            - generic [ref=e557]:
              - generic [ref=e558]:
                - img [ref=e559]
                - paragraph [ref=e560]: HỒ CHÍ MINH (10 CH)
              - paragraph [ref=e561]: 274 Ba Cu, Phường Vũng Tàu, TP.HCM
            - generic [ref=e562]:
              - generic [ref=e563]:
                - img [ref=e564]
                - paragraph [ref=e565]:
                  - text: HÀ NỘI (2 CH)
                  - generic [ref=e566]: New
              - paragraph [ref=e567]: 27 Tôn Đức Thắng - P. Văn Miếu - Quốc Tử Giám; TP. Hà Nội
            - generic [ref=e568]:
              - generic [ref=e569]:
                - img [ref=e570]
                - paragraph [ref=e571]: CẦN THƠ (2 CH)
              - paragraph [ref=e572]: Số 35 Trần Phú, Phường Ninh Kiều, TP.Cần Thơ
            - generic [ref=e573]:
              - generic [ref=e574]:
                - img [ref=e575]
                - paragraph [ref=e576]: ĐÀ NẴNG (2 CH)
              - paragraph [ref=e577]: 332 Đ. Lê Duẩn, Phường Thanh Khê, TP.Đà Nẵng
            - link "XEM TẤT CẢ CỬA HÀNG" [ref=e579] [cursor=pointer]:
              - /url: https://www.160store.com/pages/lien-he
        - generic [ref=e582]:
          - generic [ref=e583]: PHƯƠNG THỨC THANH TOÁN
          - generic [ref=e584]:
            - img "Image Spay" [ref=e585]
            - img "Image VNPay" [ref=e586]
            - img "Image Cod" [ref=e587]
      - generic [ref=e592]: BẢN QUYỀN THUỘC VỀ 160STORE
  - list [ref=e594]
  - button "back to top" [ref=e596] [cursor=pointer]:
    - img [ref=e597]
    - text: back to top
  - paragraph [ref=e603]: Bạn chưa chọn size sản phẩm!
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
            - strong: Runpow Collection 2026
          - generic:
            - generic: "Từ khóa chính:"
            - strong: runpow collection 2026
          - generic:
            - generic: "Tiêu chí đạt:"
            - strong: 22/38
      - generic [ref=e604]:
        - generic [ref=e605]: "❌ Chi tiết lỗi cần khắc phục (16):"
        - generic [ref=e606]:
          - generic [ref=e607]:
            - generic [ref=e608]:
              - strong [ref=e609]: "1.2 — Độ dài Title: 6 ký tự (chuẩn: 40–65)"
              - generic [ref=e610]: "1.2"
            - generic [ref=e611]: "⚠️ Lỗi: Title quá ngắn hoặc quá dài (6 ký tự), cần 40–65"
          - generic [ref=e612]:
            - generic [ref=e613]:
              - strong [ref=e614]: 1.3 — Title chứa keyword "runpow collection 2026"
              - generic [ref=e615]: "1.3"
            - generic [ref=e616]: "⚠️ Lỗi: Title không chứa keyword \"runpow collection 2026\""
          - generic [ref=e617]:
            - generic [ref=e618]:
              - strong [ref=e619]: "1.4 — Keyword nằm ở nửa đầu Title (vị trí: N/A)"
              - generic [ref=e620]: "1.4"
            - generic [ref=e621]: "⚠️ Lỗi: Bỏ qua — keyword \"runpow collection 2026\" không có trong Title"
          - generic [ref=e622]:
            - generic [ref=e623]:
              - strong [ref=e624]: 2.1 — Meta description tồn tại (Không tìm thấy)
              - generic [ref=e625]: "2.1"
            - generic [ref=e626]: "⚠️ Lỗi: Thẻ không tồn tại hoặc rỗng!"
          - generic [ref=e627]:
            - generic [ref=e628]:
              - strong [ref=e629]: "2.2 — Độ dài Meta: 0 ký tự (chuẩn: 120–160)"
              - generic [ref=e630]: "2.2"
            - generic [ref=e631]: "⚠️ Lỗi: Không thể đo — Meta description không tồn tại"
          - generic [ref=e632]:
            - generic [ref=e633]:
              - strong [ref=e634]: 2.3 — Meta description chứa keyword "runpow collection 2026"
              - generic [ref=e635]: "2.3"
            - generic [ref=e636]: "⚠️ Lỗi: Không thể kiểm tra — Meta description không tồn tại"
          - generic [ref=e637]:
            - generic [ref=e638]:
              - strong [ref=e639]: "3.1 — Trang có đúng 1 thẻ H1 (hiện tại: 0 thẻ)"
              - generic [ref=e640]: "3.1"
            - generic [ref=e641]: "⚠️ Lỗi: Trang không có thẻ H1 nào!"
          - generic [ref=e642]:
            - generic [ref=e643]:
              - strong [ref=e644]: 3.2 — H1 chứa keyword "runpow collection 2026"
              - generic [ref=e645]: "3.2"
            - generic [ref=e646]: "⚠️ Lỗi: Không có H1 để kiểm tra"
          - generic [ref=e647]:
            - generic [ref=e648]:
              - strong [ref=e649]: 4.2 — URL chứa keyword slug "runpow-collection-2026"
              - generic [ref=e650]: "4.2"
            - generic [ref=e651]: "⚠️ Lỗi: URL \"/collections/runpow-26\" không chứa keyword \"runpow-collection-2026\""
          - generic [ref=e652]:
            - generic [ref=e653]:
              - strong [ref=e654]: "5.2 — Mật độ keyword: 0.12% (chuẩn: 0.5%–2.5%)"
              - generic [ref=e655]: "5.2"
            - generic [ref=e656]: "⚠️ Lỗi: Mật độ keyword quá thấp: 0.12%, cần ≥ 0.5%"
          - generic [ref=e657]:
            - generic [ref=e658]:
              - strong [ref=e659]: 5.3 — Keyword "runpow collection 2026" xuất hiện trong 100 từ đầu
              - generic [ref=e660]: "5.3"
            - generic [ref=e661]: "⚠️ Lỗi: Keyword \"runpow collection 2026\" không xuất hiện trong 100 từ đầu"
          - generic [ref=e662]:
            - generic [ref=e663]:
              - strong [ref=e664]: "6.1 — 100% ảnh có thuộc tính alt (thiếu: 9/136)"
              - generic [ref=e665]: "6.1"
            - generic [ref=e666]: "⚠️ Lỗi: Có 9 hình ảnh thiếu thuộc tính 'alt'"
          - generic [ref=e667]:
            - generic [ref=e668]:
              - strong [ref=e669]: 6.2 — Có ảnh chứa keyword "runpow collection 2026" trong alt
              - generic [ref=e670]: "6.2"
            - generic [ref=e671]: "⚠️ Lỗi: Không có ảnh nào có alt chứa keyword \"runpow collection 2026\""
          - generic [ref=e672]:
            - generic [ref=e673]:
              - strong [ref=e674]: "7.3 — Anchor text chất lượng (lỗi: 10)"
              - generic [ref=e675]: "7.3"
            - generic [ref=e676]: "⚠️ Lỗi: 10 link có anchor text không tốt: \"\" → /, \"\" → /, \"\" → /, \"\" → /, \"\" → /products/ao-thun-nam-runpow-naturestride, \"\" → /products/quan-short-du-nam-runpow-premium-traning-kit, \"\" → /products/quan-short-nam-5-runpow-flash-move, \"\" → //zalo.me/3664144181122308942, \"\" → //m.me/1042686802417049, \"\" → //zalo.me/3664144181122308942"
          - generic [ref=e677]:
            - generic [ref=e678]:
              - strong [ref=e679]: "8.6 — Open Graph: og:title=✔, og:description=✘"
              - generic [ref=e680]: "8.6"
            - generic [ref=e681]: "⚠️ Lỗi: Thiếu og:description"
          - generic [ref=e682]:
            - generic [ref=e683]:
              - strong [ref=e684]: "8.7 — Twitter Card tags: 0 thẻ"
              - generic [ref=e685]: "8.7"
            - generic [ref=e686]: "⚠️ Lỗi: Trang thiếu Twitter Card tags"
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 58/100 dưới ngưỡng 70%. Có 16/38 tiêu chí không đạt.
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