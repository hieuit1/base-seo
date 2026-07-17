# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo.spec.ts >> SEO TIÊU CHUẨN CƠ BẢN CHO WEB >> Kiểm tra SEO Onpage: Hàng bán chạy Best Seller
- Location: tests/seo.spec.ts:18:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 66/100 dưới ngưỡng 70%. Có 13/38 tiêu chí không đạt.
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
        - generic [ref=e108]: HÀNG BÁN CHẠY - BEST SELLER
    - generic [ref=e111]:
      - img "HÀNG BÁN CHẠY - BEST SELLER" [ref=e114]
      - generic [ref=e116]:
        - heading "ƯU ĐÃI - ONLY ONLINE" [level=2] [ref=e118]
        - generic [ref=e120]:
          - generic [ref=e122] [cursor=pointer]:
            - strong [ref=e124]: JUL20
            - generic [ref=e125]:
              - generic [ref=e126]:
                - generic [ref=e128]: Giảm 20K
                - text: đơn từ 419K (Only Online)
              - generic [ref=e129]:
                - generic [ref=e130]:
                  - generic [ref=e131]:
                    - text: "Mã:"
                    - strong [ref=e132]: JUL20
                  - generic [ref=e133]: "HSD: 31/07/2026"
                - button "Sao chép mã" [ref=e135]
          - generic [ref=e137] [cursor=pointer]:
            - strong [ref=e139]: JUL50
            - generic [ref=e140]:
              - generic [ref=e141]:
                - generic [ref=e143]: Giảm 50K
                - text: đơn từ 699K (Only Online)
              - generic [ref=e144]:
                - generic [ref=e145]:
                  - generic [ref=e146]:
                    - text: "Mã:"
                    - strong [ref=e147]: JUL50
                  - generic [ref=e148]: "HSD: 31/07/2026"
                - button "Sao chép mã" [ref=e150]
          - generic [ref=e152] [cursor=pointer]:
            - strong [ref=e154]: JUL80
            - generic [ref=e155]:
              - generic [ref=e156]:
                - generic [ref=e158]: Giảm 80K
                - text: đơn từ 999K (Only Online)
              - generic [ref=e159]:
                - generic [ref=e160]:
                  - generic [ref=e161]:
                    - text: "Mã:"
                    - strong [ref=e162]: JUL80
                  - generic [ref=e163]: "HSD: 31/07/2026"
                - button "Sao chép mã" [ref=e165]
          - generic [ref=e167] [cursor=pointer]:
            - strong [ref=e169]: JUL120
            - generic [ref=e170]:
              - generic [ref=e171]:
                - generic [ref=e173]: Giảm 120K
                - text: đơn từ 1399K (Only Online)
              - generic [ref=e174]:
                - generic [ref=e175]:
                  - generic [ref=e176]:
                    - text: "Mã:"
                    - strong [ref=e177]: JUL120
                  - generic [ref=e178]: "HSD: 31/07/2026"
                - button "Sao chép mã" [ref=e180]
      - generic [ref=e182]:
        - generic [ref=e185]:
          - text: "Sắp xếp:"
          - combobox [ref=e186] [cursor=pointer]:
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
        - generic [ref=e187]:
          - generic [ref=e189]:
            - link "Quần Short Linen Nam ICONDENIM Azura" [ref=e191] [cursor=pointer]:
              - /url: /products/quan-short-linen-nam-icondenim-azura
              - img "Quần Short Linen Nam ICONDENIM Azura" [ref=e192]
            - generic [ref=e193]:
              - heading "Quần Short Linen Nam ICONDENIM Azura" [level=3] [ref=e194]:
                - link "Quần Short Linen Nam ICONDENIM Azura" [ref=e195] [cursor=pointer]:
                  - /url: /products/quan-short-linen-nam-icondenim-azura
              - img [ref=e198]:
                - generic [ref=e199]: Hàng Mới
              - generic [ref=e200]:
                - generic [ref=e201]:
                  - paragraph [ref=e202]: 379,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e204] [cursor=pointer]:
                    - generic [ref=e205]:
                      - img "Thêm vào giỏ" [ref=e206]
                      - img "Thêm vào giỏ" [ref=e207]
                - list
          - generic [ref=e209]:
            - link "Quần Short Kaki Nam ICONDENIM Scisp" [ref=e211] [cursor=pointer]:
              - /url: /products/quan-short-kaki-nam-icondenim-scisp
              - img "Quần Short Kaki Nam ICONDENIM Scisp" [ref=e212]
            - generic [ref=e213]:
              - heading "Quần Short Kaki Nam ICONDENIM Scisp" [level=3] [ref=e214]:
                - link "Quần Short Kaki Nam ICONDENIM Scisp" [ref=e215] [cursor=pointer]:
                  - /url: /products/quan-short-kaki-nam-icondenim-scisp
              - img [ref=e218]:
                - generic [ref=e219]: Hàng Mới
              - generic [ref=e220]:
                - generic [ref=e221]:
                  - paragraph [ref=e222]: 349,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e224] [cursor=pointer]:
                    - generic [ref=e225]:
                      - img "Thêm vào giỏ" [ref=e226]
                      - img "Thêm vào giỏ" [ref=e227]
                - list
          - generic [ref=e229]:
            - link "Quần Short Nam ICONDENIM Striped" [ref=e231] [cursor=pointer]:
              - /url: /products/quan-short-nam-icondenim-striped
              - img "Quần Short Nam ICONDENIM Striped" [ref=e232]
            - generic [ref=e233]:
              - heading "Quần Short Nam ICONDENIM Striped" [level=3] [ref=e234]:
                - link "Quần Short Nam ICONDENIM Striped" [ref=e235] [cursor=pointer]:
                  - /url: /products/quan-short-nam-icondenim-striped
              - img [ref=e238]:
                - generic [ref=e239]: Hàng Mới
              - generic [ref=e240]:
                - generic [ref=e241]:
                  - paragraph [ref=e242]: 379,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e244] [cursor=pointer]:
                    - generic [ref=e245]:
                      - img "Thêm vào giỏ" [ref=e246]
                      - img "Thêm vào giỏ" [ref=e247]
                - list
          - generic [ref=e249]:
            - link "Áo Polo Nam Procool ICONDENIM Seam Sealing" [ref=e251] [cursor=pointer]:
              - /url: /products/ao-polo-procool-icondenim-slim-fit-seam-sealing
              - img "Áo Polo Nam Procool ICONDENIM Seam Sealing" [ref=e252]
            - generic [ref=e253]:
              - heading "Áo Polo Nam ProCOOL ICONDENIM Seam Sealing" [level=3] [ref=e254]:
                - link "Áo Polo Nam ProCOOL ICONDENIM Seam Sealing" [ref=e255] [cursor=pointer]:
                  - /url: /products/ao-polo-procool-icondenim-slim-fit-seam-sealing
              - img [ref=e258]:
                - generic [ref=e260]: Siêu Mát
              - generic [ref=e261]:
                - generic [ref=e262]:
                  - paragraph [ref=e263]: 389,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e265] [cursor=pointer]:
                    - generic [ref=e266]:
                      - img "Thêm vào giỏ" [ref=e267]
                      - img "Thêm vào giỏ" [ref=e268]
                - list
          - generic [ref=e270]:
            - link "Áo Thun Nam ICONDENIM Ice Field" [ref=e272] [cursor=pointer]:
              - /url: /products/ao-thun-nam-icondenim-ice-field
              - img "Áo Thun Nam ICONDENIM Ice Field" [ref=e273]
            - generic [ref=e275]: 15%
            - generic [ref=e276]:
              - heading "Áo Thun Nam ICONDENIM Ice Field" [level=3] [ref=e277]:
                - link "Áo Thun Nam ICONDENIM Ice Field" [ref=e278] [cursor=pointer]:
                  - /url: /products/ao-thun-nam-icondenim-ice-field
              - img [ref=e281]:
                - generic [ref=e283]: Sale
              - generic [ref=e284]:
                - generic [ref=e285]:
                  - paragraph [ref=e286]:
                    - text: 339,000₫
                    - deletion [ref=e287]: 399,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e289] [cursor=pointer]:
                    - generic [ref=e290]:
                      - img "Thêm vào giỏ" [ref=e291]
                      - img "Thêm vào giỏ" [ref=e292]
                - list
          - generic [ref=e294]:
            - link "Áo Polo Nam ICONDENIM Textured Knit" [ref=e296] [cursor=pointer]:
              - /url: /products/ao-polo-nam-icondenim-textured-knit
              - img "Áo Polo Nam ICONDENIM Textured Knit" [ref=e297]
            - generic [ref=e298]:
              - heading "Áo Polo Nam ICONDENIM Textured Knit" [level=3] [ref=e299]:
                - link "Áo Polo Nam ICONDENIM Textured Knit" [ref=e300] [cursor=pointer]:
                  - /url: /products/ao-polo-nam-icondenim-textured-knit
              - img [ref=e303]:
                - generic [ref=e304]: Hàng Mới
              - generic [ref=e305]:
                - generic [ref=e306]:
                  - paragraph [ref=e307]: 379,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e309] [cursor=pointer]:
                    - generic [ref=e310]:
                      - img "Thêm vào giỏ" [ref=e311]
                      - img "Thêm vào giỏ" [ref=e312]
                - list
          - generic [ref=e314]:
            - link "Áo Polo Nam ICONDENIM Quarter Zip" [ref=e316] [cursor=pointer]:
              - /url: /products/ao-polo-nam-icondenim-quarter-zip
              - img "Áo Polo Nam ICONDENIM Quarter Zip" [ref=e317]
            - generic [ref=e318]:
              - heading "Áo Polo Nam ICONDENIM Quarter Zip" [level=3] [ref=e319]:
                - link "Áo Polo Nam ICONDENIM Quarter Zip" [ref=e320] [cursor=pointer]:
                  - /url: /products/ao-polo-nam-icondenim-quarter-zip
              - img [ref=e323]:
                - generic [ref=e324]: Hàng Mới
              - generic [ref=e325]:
                - generic [ref=e326]:
                  - paragraph [ref=e327]: 379,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e329] [cursor=pointer]:
                    - generic [ref=e330]:
                      - img "Thêm vào giỏ" [ref=e331]
                      - img "Thêm vào giỏ" [ref=e332]
                - list
          - generic [ref=e334]:
            - link "Áo Thun Nam ICONDENIM Blue Paradise" [ref=e336] [cursor=pointer]:
              - /url: /products/ao-thun-nam-icondenim-blue-paradise
              - img "Áo Thun Nam ICONDENIM Blue Paradise" [ref=e337]
            - generic [ref=e338]:
              - heading "Áo Thun Nam ICONDENIM Blue Paradise" [level=3] [ref=e339]:
                - link "Áo Thun Nam ICONDENIM Blue Paradise" [ref=e340] [cursor=pointer]:
                  - /url: /products/ao-thun-nam-icondenim-blue-paradise
              - img [ref=e343]:
                - generic [ref=e344]: Hàng Mới
              - generic [ref=e345]:
                - generic [ref=e346]:
                  - paragraph [ref=e347]: 329,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e349] [cursor=pointer]:
                    - generic [ref=e350]:
                      - img "Thêm vào giỏ" [ref=e351]
                      - img "Thêm vào giỏ" [ref=e352]
                - list
          - generic [ref=e354]:
            - link "Áo Sơ Mi Nam Tay Dài ICONDENIM Sandveil" [ref=e356] [cursor=pointer]:
              - /url: /products/ao-so-mi-nam-tay-dai-icondenim-sandveil
              - img "Áo Sơ Mi Nam Tay Dài ICONDENIM Sandveil" [ref=e357]
            - generic [ref=e358]:
              - heading "Áo Sơ Mi Nam Tay Dài ICONDENIM Sandveil" [level=3] [ref=e359]:
                - link "Áo Sơ Mi Nam Tay Dài ICONDENIM Sandveil" [ref=e360] [cursor=pointer]:
                  - /url: /products/ao-so-mi-nam-tay-dai-icondenim-sandveil
              - img [ref=e363]:
                - generic [ref=e364]: Hàng Mới
              - generic [ref=e365]:
                - generic [ref=e366]:
                  - paragraph [ref=e367]: 399,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e369] [cursor=pointer]:
                    - generic [ref=e370]:
                      - img "Thêm vào giỏ" [ref=e371]
                      - img "Thêm vào giỏ" [ref=e372]
                - list
          - generic [ref=e374]:
            - link "Áo Polo Nam ICONDENIM Essence" [ref=e376] [cursor=pointer]:
              - /url: /products/ao-polo-nam-icondenim-essence
              - img "Áo Polo Nam ICONDENIM Essence" [ref=e377]
            - generic [ref=e378]:
              - heading "Áo Polo Nam ICONDENIM Essence" [level=3] [ref=e379]:
                - link "Áo Polo Nam ICONDENIM Essence" [ref=e380] [cursor=pointer]:
                  - /url: /products/ao-polo-nam-icondenim-essence
              - img [ref=e383]:
                - generic [ref=e384]: Hàng Mới
              - generic [ref=e385]:
                - generic [ref=e386]:
                  - paragraph [ref=e387]: 349,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e389] [cursor=pointer]:
                    - generic [ref=e390]:
                      - img "Thêm vào giỏ" [ref=e391]
                      - img "Thêm vào giỏ" [ref=e392]
                - list
          - generic [ref=e394]:
            - link "Áo Thun Nam ICONDENIM Archive" [ref=e396] [cursor=pointer]:
              - /url: /products/ao-thun-nam-icondenim-archive
              - img "Áo Thun Nam ICONDENIM Archive" [ref=e397]
            - generic [ref=e398]:
              - heading "Áo Thun Nam ICONDENIM Archive" [level=3] [ref=e399]:
                - link "Áo Thun Nam ICONDENIM Archive" [ref=e400] [cursor=pointer]:
                  - /url: /products/ao-thun-nam-icondenim-archive
              - generic:
                - generic:
                  - img
              - generic [ref=e401]:
                - generic [ref=e402]:
                  - paragraph [ref=e403]: 329,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e405] [cursor=pointer]:
                    - generic [ref=e406]:
                      - img "Thêm vào giỏ" [ref=e407]
                      - img "Thêm vào giỏ" [ref=e408]
                - list
          - generic [ref=e410]:
            - link "Quần Short Jean Nam ICONDENIM Classic" [ref=e412] [cursor=pointer]:
              - /url: /products/quan-short-nam-jean-icondenim-classic
              - img "Quần Short Jean Nam ICONDENIM Classic" [ref=e413]
            - generic [ref=e414]:
              - heading "Quần Short Jean Nam ICONDENIM Classic" [level=3] [ref=e415]:
                - link "Quần Short Jean Nam ICONDENIM Classic" [ref=e416] [cursor=pointer]:
                  - /url: /products/quan-short-nam-jean-icondenim-classic
              - generic:
                - generic:
                  - img
              - generic [ref=e417]:
                - generic [ref=e418]:
                  - paragraph [ref=e419]: 350,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e421] [cursor=pointer]:
                    - generic [ref=e422]:
                      - img "Thêm vào giỏ" [ref=e423]
                      - img "Thêm vào giỏ" [ref=e424]
                - list
          - generic [ref=e426]:
            - link "Áo Sơ Mi Nam Tay Ngắn Linen Cuban ICONDENIM Sandrift" [ref=e428] [cursor=pointer]:
              - /url: /products/ao-so-mi-nam-tay-ngan-linen-cuban-icondenim-sandrift
              - img "Áo Sơ Mi Nam Tay Ngắn Linen Cuban ICONDENIM Sandrift" [ref=e429]
            - generic [ref=e430]:
              - heading "Áo Sơ Mi Nam Tay Ngắn Linen Cuban ICONDENIM Sandrift" [level=3] [ref=e431]:
                - link "Áo Sơ Mi Nam Tay Ngắn Linen Cuban ICONDENIM Sandrift" [ref=e432] [cursor=pointer]:
                  - /url: /products/ao-so-mi-nam-tay-ngan-linen-cuban-icondenim-sandrift
              - generic:
                - generic:
                  - img
              - generic [ref=e433]:
                - generic [ref=e434]:
                  - paragraph [ref=e435]: 379,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e437] [cursor=pointer]:
                    - generic [ref=e438]:
                      - img "Thêm vào giỏ" [ref=e439]
                      - img "Thêm vào giỏ" [ref=e440]
                - list
          - generic [ref=e442]:
            - link "Quần Short Nam ICONDENIM Tropical Mono" [ref=e444] [cursor=pointer]:
              - /url: /products/quan-short-nam-icondenim-tropical-mono
              - img "Quần Short Nam ICONDENIM Tropical Mono" [ref=e445]
            - generic [ref=e446]:
              - heading "Quần Short Nam ICONDENIM Tropical Mono" [level=3] [ref=e447]:
                - link "Quần Short Nam ICONDENIM Tropical Mono" [ref=e448] [cursor=pointer]:
                  - /url: /products/quan-short-nam-icondenim-tropical-mono
              - generic:
                - generic:
                  - img
              - generic [ref=e449]:
                - generic [ref=e450]:
                  - paragraph [ref=e451]: 299,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e453] [cursor=pointer]:
                    - generic [ref=e454]:
                      - img "Thêm vào giỏ" [ref=e455]
                      - img "Thêm vào giỏ" [ref=e456]
                - list
          - generic [ref=e458]:
            - link "Áo Thun Nam ICONDENIM Homefield" [ref=e460] [cursor=pointer]:
              - /url: /products/ao-thun-nam-icondenim-homefield
              - img "Áo Thun Nam ICONDENIM Homefield" [ref=e461]
            - generic [ref=e462]:
              - heading "Áo Thun Nam ICONDENIM Homefield" [level=3] [ref=e463]:
                - link "Áo Thun Nam ICONDENIM Homefield" [ref=e464] [cursor=pointer]:
                  - /url: /products/ao-thun-nam-icondenim-homefield
              - generic:
                - generic:
                  - img
              - generic [ref=e465]:
                - generic [ref=e466]:
                  - paragraph [ref=e467]: 379,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e469] [cursor=pointer]:
                    - generic [ref=e470]:
                      - img "Thêm vào giỏ" [ref=e471]
                      - img "Thêm vào giỏ" [ref=e472]
                - list
          - generic [ref=e474]:
            - link "Set Áo Quần Nam ICONDENIM Lazy Fish" [ref=e476] [cursor=pointer]:
              - /url: /products/set-ao-quan-nam-icondenim-lazy-fish
              - img "Set Áo Quần Nam ICONDENIM Lazy Fish" [ref=e477]
            - generic [ref=e478]:
              - heading "Set Áo Quần Nam ICONDENIM Lazy Fish" [level=3] [ref=e479]:
                - link "Set Áo Quần Nam ICONDENIM Lazy Fish" [ref=e480] [cursor=pointer]:
                  - /url: /products/set-ao-quan-nam-icondenim-lazy-fish
              - generic:
                - generic:
                  - img
              - generic [ref=e481]:
                - generic [ref=e482]:
                  - paragraph [ref=e483]: 329,000₫ ~ 678,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e485] [cursor=pointer]:
                    - generic [ref=e486]:
                      - img "Thêm vào giỏ" [ref=e487]
                      - img "Thêm vào giỏ" [ref=e488]
                - list
          - generic [ref=e490]:
            - link "Quần Kaki Nam ICONDENIM Simple" [ref=e492] [cursor=pointer]:
              - /url: /products/quan-kaki-nam-icondenim-simple
              - img "Quần Kaki Nam ICONDENIM Simple" [ref=e493]
            - generic [ref=e494]:
              - heading "Quần Kaki Nam ICONDENIM Simple" [level=3] [ref=e495]:
                - link "Quần Kaki Nam ICONDENIM Simple" [ref=e496] [cursor=pointer]:
                  - /url: /products/quan-kaki-nam-icondenim-simple
              - generic:
                - generic:
                  - img
              - generic [ref=e497]:
                - generic [ref=e498]:
                  - paragraph [ref=e499]: 529,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e501] [cursor=pointer]:
                    - generic [ref=e502]:
                      - img "Thêm vào giỏ" [ref=e503]
                      - img "Thêm vào giỏ" [ref=e504]
                - list
          - generic [ref=e506]:
            - link "Áo Thun Nam ICONDENIM Riviera Stripe" [ref=e508] [cursor=pointer]:
              - /url: /products/ao-thun-nam-icondenim-riviera-stripe
              - img "Áo Thun Nam ICONDENIM Riviera Stripe" [ref=e509]
            - generic [ref=e510]:
              - heading "Áo Thun Nam ICONDENIM Riviera Stripe" [level=3] [ref=e511]:
                - link "Áo Thun Nam ICONDENIM Riviera Stripe" [ref=e512] [cursor=pointer]:
                  - /url: /products/ao-thun-nam-icondenim-riviera-stripe
              - generic:
                - generic:
                  - img
              - generic [ref=e513]:
                - generic [ref=e514]:
                  - paragraph [ref=e515]: 329,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e517] [cursor=pointer]:
                    - generic [ref=e518]:
                      - img "Thêm vào giỏ" [ref=e519]
                      - img "Thêm vào giỏ" [ref=e520]
                - list
          - generic [ref=e522]:
            - link "Áo Sơ Mi Nam Tay Ngắn Cuban ICONDENIM Riviera Knit" [ref=e524] [cursor=pointer]:
              - /url: /products/ao-so-mi-nam-tay-ngan-cuban-icondenim-riviera-knit
              - img "Áo Sơ Mi Nam Tay Ngắn Cuban ICONDENIM Riviera Knit" [ref=e525]
            - generic [ref=e526]:
              - heading "Áo Sơ Mi Nam Tay Ngắn Cuban ICONDENIM Riviera Knit" [level=3] [ref=e527]:
                - link "Áo Sơ Mi Nam Tay Ngắn Cuban ICONDENIM Riviera Knit" [ref=e528] [cursor=pointer]:
                  - /url: /products/ao-so-mi-nam-tay-ngan-cuban-icondenim-riviera-knit
              - generic:
                - generic:
                  - img
              - generic [ref=e529]:
                - generic [ref=e530]:
                  - paragraph [ref=e531]: 349,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e533] [cursor=pointer]:
                    - generic [ref=e534]:
                      - img "Thêm vào giỏ" [ref=e535]
                      - img "Thêm vào giỏ" [ref=e536]
                - list
          - generic [ref=e538]:
            - link "Áo Sơ Mi Nam Tay Ngắn Linen Cuban ICONDENIM Littoral" [ref=e540] [cursor=pointer]:
              - /url: /products/ao-so-mi-nam-tay-ngan-linen-cuban-icondenim-littoral
              - img "Áo Sơ Mi Nam Tay Ngắn Linen Cuban ICONDENIM Littoral" [ref=e541]
            - generic [ref=e542]:
              - heading "Áo Sơ Mi Nam Tay Ngắn Linen Cuban ICONDENIM Littoral" [level=3] [ref=e543]:
                - link "Áo Sơ Mi Nam Tay Ngắn Linen Cuban ICONDENIM Littoral" [ref=e544] [cursor=pointer]:
                  - /url: /products/ao-so-mi-nam-tay-ngan-linen-cuban-icondenim-littoral
              - generic:
                - generic:
                  - img
              - generic [ref=e545]:
                - generic [ref=e546]:
                  - paragraph [ref=e547]: 379,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e549] [cursor=pointer]:
                    - generic [ref=e550]:
                      - img "Thêm vào giỏ" [ref=e551]
                      - img "Thêm vào giỏ" [ref=e552]
                - list
          - generic [ref=e554]:
            - link "Áo Thun Nam ICONDENIM Arch" [ref=e556] [cursor=pointer]:
              - /url: /products/ao-thun-nam-icondenim-arch
              - img "Áo Thun Nam ICONDENIM Arch" [ref=e557]
            - generic [ref=e558]:
              - heading "Áo Thun Nam ICONDENIM Arch" [level=3] [ref=e559]:
                - link "Áo Thun Nam ICONDENIM Arch" [ref=e560] [cursor=pointer]:
                  - /url: /products/ao-thun-nam-icondenim-arch
              - generic:
                - generic:
                  - img
              - generic [ref=e561]:
                - generic [ref=e562]:
                  - paragraph [ref=e563]: 329,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e565] [cursor=pointer]:
                    - generic [ref=e566]:
                      - img "Thêm vào giỏ" [ref=e567]
                      - img "Thêm vào giỏ" [ref=e568]
                - list
          - generic [ref=e570]:
            - link "Áo Thun Nam ICONDENIM Atelier" [ref=e572] [cursor=pointer]:
              - /url: /products/ao-thun-nam-icondenim-atelier-1
              - img "Áo Thun Nam ICONDENIM Atelier" [ref=e573]
            - generic [ref=e574]:
              - heading "Áo Thun Nam ICONDENIM Atelier" [level=3] [ref=e575]:
                - link "Áo Thun Nam ICONDENIM Atelier" [ref=e576] [cursor=pointer]:
                  - /url: /products/ao-thun-nam-icondenim-atelier-1
              - generic:
                - generic:
                  - img
              - generic [ref=e577]:
                - generic [ref=e578]:
                  - paragraph [ref=e579]: 329,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e581] [cursor=pointer]:
                    - generic [ref=e582]:
                      - img "Thêm vào giỏ" [ref=e583]
                      - img "Thêm vào giỏ" [ref=e584]
                - list
          - generic [ref=e586]:
            - link "Áo Thun Nam ICONDENIM Flux" [ref=e588] [cursor=pointer]:
              - /url: /products/ao-thun-nam-icondenim-flux
              - img "Áo Thun Nam ICONDENIM Flux" [ref=e589]
            - generic [ref=e590]:
              - heading "Áo Thun Nam ICONDENIM Flux" [level=3] [ref=e591]:
                - link "Áo Thun Nam ICONDENIM Flux" [ref=e592] [cursor=pointer]:
                  - /url: /products/ao-thun-nam-icondenim-flux
              - generic:
                - generic:
                  - img
              - generic [ref=e593]:
                - generic [ref=e594]:
                  - paragraph [ref=e595]: 329,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e597] [cursor=pointer]:
                    - generic [ref=e598]:
                      - img "Thêm vào giỏ" [ref=e599]
                      - img "Thêm vào giỏ" [ref=e600]
                - list
          - generic [ref=e602]:
            - link "Áo Sơ Mi Nam ICONDENIM Workday Ease" [ref=e604] [cursor=pointer]:
              - /url: /products/ao-so-mi-nam-icondenim-workday-ease
              - img "Áo Sơ Mi Nam ICONDENIM Workday Ease" [ref=e605]
            - generic [ref=e606]:
              - heading "Áo Sơ Mi Nam ICONDENIM Workday Ease" [level=3] [ref=e607]:
                - link "Áo Sơ Mi Nam ICONDENIM Workday Ease" [ref=e608] [cursor=pointer]:
                  - /url: /products/ao-so-mi-nam-icondenim-workday-ease
              - generic:
                - generic:
                  - img
              - generic [ref=e609]:
                - generic [ref=e610]:
                  - paragraph [ref=e611]: 399,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e613] [cursor=pointer]:
                    - generic [ref=e614]:
                      - img "Thêm vào giỏ" [ref=e615]
                      - img "Thêm vào giỏ" [ref=e616]
                - list
          - generic [ref=e618]:
            - link "Quần Tây Nam ICONDENIM Zenith" [ref=e620] [cursor=pointer]:
              - /url: /products/quan-tay-nam-icondenim-zenith
              - img "Quần Tây Nam ICONDENIM Zenith" [ref=e621]
            - generic [ref=e622]:
              - heading "Quần Tây Nam ICONDENIM Zenith" [level=3] [ref=e623]:
                - link "Quần Tây Nam ICONDENIM Zenith" [ref=e624] [cursor=pointer]:
                  - /url: /products/quan-tay-nam-icondenim-zenith
              - generic:
                - generic:
                  - img
              - generic [ref=e625]:
                - generic [ref=e626]:
                  - paragraph [ref=e627]: 429,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e629] [cursor=pointer]:
                    - generic [ref=e630]:
                      - img "Thêm vào giỏ" [ref=e631]
                      - img "Thêm vào giỏ" [ref=e632]
                - list
          - generic [ref=e634]:
            - link "Set Đồ Nam ICONDENIM Jacquard Jean" [ref=e636] [cursor=pointer]:
              - /url: /products/set-do-nam-icondenim-jacquard-jean
              - img "Set Đồ Nam ICONDENIM Jacquard Jean" [ref=e637]
            - generic [ref=e638]:
              - heading "Set Đồ Nam ICONDENIM Jacquard Jean" [level=3] [ref=e639]:
                - link "Set Đồ Nam ICONDENIM Jacquard Jean" [ref=e640] [cursor=pointer]:
                  - /url: /products/set-do-nam-icondenim-jacquard-jean
              - generic:
                - generic:
                  - img
              - generic [ref=e641]:
                - generic [ref=e642]:
                  - paragraph [ref=e643]: 349,000₫ ~ 698,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e645] [cursor=pointer]:
                    - generic [ref=e646]:
                      - img "Thêm vào giỏ" [ref=e647]
                      - img "Thêm vào giỏ" [ref=e648]
                - list
          - generic [ref=e650]:
            - link "Quần Tây Nam ICONDENIM City Straight" [ref=e652] [cursor=pointer]:
              - /url: /products/quan-tay-nam-icondenim-city-straight
              - img "Quần Tây Nam ICONDENIM City Straight" [ref=e653]
            - generic [ref=e654]:
              - heading "Quần Tây Nam ICONDENIM City Straight" [level=3] [ref=e655]:
                - link "Quần Tây Nam ICONDENIM City Straight" [ref=e656] [cursor=pointer]:
                  - /url: /products/quan-tay-nam-icondenim-city-straight
              - generic:
                - generic:
                  - img
              - generic [ref=e657]:
                - generic [ref=e658]:
                  - paragraph [ref=e659]: 449,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e661] [cursor=pointer]:
                    - generic [ref=e662]:
                      - img "Thêm vào giỏ" [ref=e663]
                      - img "Thêm vào giỏ" [ref=e664]
                - list
          - generic [ref=e666]:
            - link "Quần Jean Nam ICON105 Lightweight™ Straight Fit Light Blue" [ref=e668] [cursor=pointer]:
              - /url: /products/quan-jeans-nam-icon105-lightweight-straight-fit-light-blue
              - img "Quần Jean Nam ICON105 Lightweight™ Straight Fit Light Blue" [ref=e669]
            - generic [ref=e670]:
              - heading "Quần Jeans Nam ICON105 Lightweight™ Straight Fit Light Blue" [level=3] [ref=e671]:
                - link "Quần Jeans Nam ICON105 Lightweight™ Straight Fit Light Blue" [ref=e672] [cursor=pointer]:
                  - /url: /products/quan-jeans-nam-icon105-lightweight-straight-fit-light-blue
              - img [ref=e675]:
                - generic [ref=e677]: Siêu Nhẹ
              - generic [ref=e678]:
                - generic [ref=e679]:
                  - paragraph [ref=e680]: 599,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e682] [cursor=pointer]:
                    - generic [ref=e683]:
                      - img "Thêm vào giỏ" [ref=e684]
                      - img "Thêm vào giỏ" [ref=e685]
                - list
          - generic [ref=e687]:
            - link "Quần Kaki Nam ICONDENIM Sandfold" [ref=e689] [cursor=pointer]:
              - /url: /products/quan-kaki-nam-icondenim-sandfold
              - img "Quần Kaki Nam ICONDENIM Sandfold" [ref=e690]
            - generic [ref=e691]:
              - heading "Quần Kaki Nam ICONDENIM Sandfold" [level=3] [ref=e692]:
                - link "Quần Kaki Nam ICONDENIM Sandfold" [ref=e693] [cursor=pointer]:
                  - /url: /products/quan-kaki-nam-icondenim-sandfold
              - generic:
                - generic:
                  - img
              - generic [ref=e694]:
                - generic [ref=e695]:
                  - paragraph [ref=e696]: 449,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e698] [cursor=pointer]:
                    - generic [ref=e699]:
                      - img "Thêm vào giỏ" [ref=e700]
                      - img "Thêm vào giỏ" [ref=e701]
                - list
          - generic [ref=e703]:
            - link "Áo Polo Nam ICONDENIM Mono" [ref=e705] [cursor=pointer]:
              - /url: /products/ao-polo-nam-icondenim-mono
              - img "Áo Polo Nam ICONDENIM Mono" [ref=e706]
            - generic [ref=e707]:
              - heading "Áo Polo Nam ICONDENIM Mono" [level=3] [ref=e708]:
                - link "Áo Polo Nam ICONDENIM Mono" [ref=e709] [cursor=pointer]:
                  - /url: /products/ao-polo-nam-icondenim-mono
              - generic:
                - generic:
                  - img
              - generic [ref=e710]:
                - generic [ref=e711]:
                  - paragraph [ref=e712]: 429,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e714] [cursor=pointer]:
                    - generic [ref=e715]:
                      - img "Thêm vào giỏ" [ref=e716]
                      - img "Thêm vào giỏ" [ref=e717]
                - list
        - generic [ref=e718]:
          - button "Xem thêm" [ref=e719] [cursor=pointer]
          - paragraph
        - text: 
  - generic [ref=e723]:
    - generic [ref=e724]:
      - paragraph [ref=e725]: Đăng kí nhận tin
      - generic [ref=e727]:
        - generic [ref=e728]:
          - text: 
          - textbox "Email" [ref=e729]
        - button "Đăng ký" [ref=e730] [cursor=pointer]:
          - generic [ref=e731]: 
          - text: Đăng ký
    - list [ref=e733]:
      - listitem [ref=e734]:
        - link "Liên hệ với chúng tôi qua Zalo" [ref=e735] [cursor=pointer]:
          - /url: //zalo.me/3664144181122308942
          - img "Liên hệ với chúng tôi qua Zalo" [ref=e736]
      - listitem [ref=e737]:
        - link [ref=e738] [cursor=pointer]:
          - /url: https://www.youtube.com/@storehanghieu1608
          - generic [ref=e739]: 
      - listitem [ref=e740]:
        - link [ref=e741] [cursor=pointer]:
          - /url: https://www.instagram.com/160store
          - generic [ref=e742]: 
      - listitem [ref=e743]:
        - link [ref=e744] [cursor=pointer]:
          - /url: https://www.facebook.com/160store
          - generic [ref=e745]: 
  - contentinfo [ref=e746]:
    - generic [ref=e748]:
      - generic [ref=e749]:
        - generic [ref=e750]:
          - generic [ref=e752]: Giới thiệu
          - generic [ref=e753]:
            - paragraph [ref=e754]: 160STORE - Chuỗi Phân Phối Thời Trang Nam Chuẩn Hiệu
            - list [ref=e755]:
              - listitem [ref=e756]:
                - generic [ref=e757]: 
                - link "02871006789" [ref=e758] [cursor=pointer]:
                  - /url: tel:02871006789
              - listitem [ref=e759]:
                - generic [ref=e760]: 
                - link "cs@160store.com" [ref=e761] [cursor=pointer]:
                  - /url: mailto:cs@160store.com
              - listitem [ref=e762]:
                - generic [ref=e763]: 
                - generic [ref=e764]: "Giờ mở cửa : 08:30 - 22:00"
              - listitem [ref=e765]:
                - generic [ref=e766]: 
                - generic [ref=e767]: Nhân viên tư vấn phản hồi tin nhắn đến 24:00 (Mỗi ngày)
              - listitem [ref=e768]:
                - link [ref=e769] [cursor=pointer]:
                  - /url: http://online.gov.vn/nen-tang/1a643809-3f92-4419-944d-c2d4fdffb78b
                  - img [ref=e770]
              - listitem [ref=e771]:
                - link "DMCA.com Protection Status" [ref=e772] [cursor=pointer]:
                  - /url: https://www.dmca.com/Protection/Status.aspx?ID=9049de26-d97b-48dc-ab97-1e5fcb221fba&refurl=https://160store.com/collections/hang-ban-chay-best-seller
                  - img "DMCA.com Protection Status" [ref=e773]
        - generic [ref=e774]:
          - generic [ref=e776]: CHÍNH SÁCH
          - list [ref=e778]:
            - listitem [ref=e779]:
              - link "Hướng dẫn đặt hàng" [ref=e780] [cursor=pointer]:
                - /url: /pages/huong-dan-dat-hang
            - listitem [ref=e781]:
              - paragraph [ref=e784] [cursor=pointer]: Chính sách
        - generic [ref=e786]:
          - link "ĐỊA CHỈ CỬA HÀNG (20 CH)" [ref=e789] [cursor=pointer]:
            - /url: https://www.160store.com/pages/lien-he
          - generic [ref=e791]:
            - generic [ref=e792]:
              - generic [ref=e793]:
                - img [ref=e794]
                - paragraph [ref=e795]: HỒ CHÍ MINH (10 CH)
              - paragraph [ref=e796]: 274 Ba Cu, Phường Vũng Tàu, TP.HCM
            - generic [ref=e797]:
              - generic [ref=e798]:
                - img [ref=e799]
                - paragraph [ref=e800]:
                  - text: HÀ NỘI (2 CH)
                  - generic [ref=e801]: New
              - paragraph [ref=e802]: 27 Tôn Đức Thắng - P. Văn Miếu - Quốc Tử Giám; TP. Hà Nội
            - generic [ref=e803]:
              - generic [ref=e804]:
                - img [ref=e805]
                - paragraph [ref=e806]: CẦN THƠ (2 CH)
              - paragraph [ref=e807]: Số 35 Trần Phú, Phường Ninh Kiều, TP.Cần Thơ
            - generic [ref=e808]:
              - generic [ref=e809]:
                - img [ref=e810]
                - paragraph [ref=e811]: ĐÀ NẴNG (2 CH)
              - paragraph [ref=e812]: 332 Đ. Lê Duẩn, Phường Thanh Khê, TP.Đà Nẵng
            - link "XEM TẤT CẢ CỬA HÀNG" [ref=e814] [cursor=pointer]:
              - /url: https://www.160store.com/pages/lien-he
        - generic [ref=e817]:
          - generic [ref=e818]: PHƯƠNG THỨC THANH TOÁN
          - generic [ref=e819]:
            - img "Image Spay" [ref=e820]
            - img "Image VNPay" [ref=e821]
            - img "Image Cod" [ref=e822]
      - generic [ref=e827]: BẢN QUYỀN THUỘC VỀ 160STORE
  - list [ref=e829]
  - button "back to top" [ref=e831] [cursor=pointer]:
    - img [ref=e832]
    - text: back to top
  - paragraph [ref=e838]: Bạn chưa chọn size sản phẩm!
  - generic:
    - generic:
      - generic: 🎯 BÁO CÁO SEO AUDIT CHUYÊN SÂU
      - generic: "Phần A: On-page cơ bản"
    - generic:
      - generic:
        - generic:
          - generic:
            - generic:
              - generic: "66"
              - generic: SEO
          - generic: KHÁ
        - generic:
          - generic:
            - generic: "Trang phân tích:"
            - strong: Hàng bán chạy Best Seller
          - generic:
            - generic: "Từ khóa chính:"
            - strong: hàng bán chạy best seller
          - generic:
            - generic: "Tiêu chí đạt:"
            - strong: 25/38
      - generic:
        - generic: "❌ Chi tiết lỗi cần khắc phục (13):"
        - generic:
          - generic:
            - generic:
              - strong: "1.2 — Độ dài Title: 27 ký tự (chuẩn: 40–65)"
              - generic: "1.2"
            - generic: "⚠️ Lỗi: Title quá ngắn hoặc quá dài (27 ký tự), cần 40–65"
          - generic:
            - generic:
              - strong: 1.3 — Title chứa keyword "hàng bán chạy best seller"
              - generic: "1.3"
            - generic: "⚠️ Lỗi: Title không chứa keyword \"hàng bán chạy best seller\""
          - generic:
            - generic:
              - strong: "1.4 — Keyword nằm ở nửa đầu Title (vị trí: N/A)"
              - generic: "1.4"
            - generic: "⚠️ Lỗi: Bỏ qua — keyword \"hàng bán chạy best seller\" không có trong Title"
          - generic:
            - generic:
              - strong: 2.3 — Meta description chứa keyword "hàng bán chạy best seller"
              - generic: "2.3"
            - generic: "⚠️ Lỗi: Meta description không chứa keyword \"hàng bán chạy best seller\""
          - generic:
            - generic:
              - strong: "3.1 — Trang có đúng 1 thẻ H1 (hiện tại: 0 thẻ)"
              - generic: "3.1"
            - generic: "⚠️ Lỗi: Trang không có thẻ H1 nào!"
          - generic:
            - generic:
              - strong: 3.2 — H1 chứa keyword "hàng bán chạy best seller"
              - generic: "3.2"
            - generic: "⚠️ Lỗi: Không có H1 để kiểm tra"
          - generic:
            - generic:
              - strong: 4.2 — URL chứa keyword slug "hàng-bán-chạy-best-seller"
              - generic: "4.2"
            - generic: "⚠️ Lỗi: URL \"/collections/hang-ban-chay-best-seller\" không chứa keyword \"hàng-bán-chạy-best-seller\""
          - generic:
            - generic:
              - strong: "5.2 — Mật độ keyword: 0.00% (chuẩn: 0.5%–2.5%)"
              - generic: "5.2"
            - generic: "⚠️ Lỗi: Mật độ keyword quá thấp: 0.00%, cần ≥ 0.5%"
          - generic:
            - generic:
              - strong: 5.3 — Keyword "hàng bán chạy best seller" xuất hiện trong 100 từ đầu
              - generic: "5.3"
            - generic: "⚠️ Lỗi: Keyword \"hàng bán chạy best seller\" không xuất hiện trong 100 từ đầu"
          - generic:
            - generic:
              - strong: "6.1 — 100% ảnh có thuộc tính alt (thiếu: 9/242)"
              - generic: "6.1"
            - generic: "⚠️ Lỗi: Có 9 hình ảnh thiếu thuộc tính 'alt'"
          - generic:
            - generic:
              - strong: 6.2 — Có ảnh chứa keyword "hàng bán chạy best seller" trong alt
              - generic: "6.2"
            - generic: "⚠️ Lỗi: Không có ảnh nào có alt chứa keyword \"hàng bán chạy best seller\""
          - generic:
            - generic:
              - strong: "7.3 — Anchor text chất lượng (lỗi: 37)"
              - generic: "7.3"
            - generic: "⚠️ Lỗi: 37 link có anchor text không tốt: \"\" → /, \"\" → /, \"\" → /, \"\" → /, \"\" → /products/quan-short-linen-nam-icondenim-azura, \"\" → /products/quan-short-kaki-nam-icondenim-scisp, \"\" → /products/quan-short-nam-icondenim-striped, \"\" → /products/ao-polo-procool-icondenim-slim-fit-seam-sealing, \"\" → /products/ao-polo-nam-icondenim-textured-knit, \"\" → /products/ao-polo-nam-icondenim-quarter-zip, \"\" → /products/ao-thun-nam-icondenim-blue-paradise, \"\" → /products/ao-so-mi-nam-tay-dai-icondenim-sandveil, \"\" → /products/ao-polo-nam-icondenim-essence, \"\" → /products/ao-thun-nam-icondenim-archive, \"\" → /products/quan-short-nam-jean-icondenim-classic, \"\" → /products/ao-so-mi-nam-tay-ngan-linen-cuban-icondenim-sandrift, \"\" → /products/quan-short-nam-icondenim-tropical-mono, \"\" → /products/ao-thun-nam-icondenim-homefield, \"\" → /products/set-ao-quan-nam-icondenim-lazy-fish, \"\" → /products/quan-kaki-nam-icondenim-simple, \"\" → /products/ao-thun-nam-icondenim-riviera-stripe, \"\" → /products/ao-so-mi-nam-tay-ngan-cuban-icondenim-riviera-knit, \"\" → /products/ao-so-mi-nam-tay-ngan-linen-cuban-icondenim-littoral, \"\" → /products/ao-thun-nam-icondenim-arch, \"\" → /products/ao-thun-nam-icondenim-atelier-1, \"\" → /products/ao-thun-nam-icondenim-flux, \"\" → /products/ao-so-mi-nam-icondenim-workday-ease, \"\" → /products/quan-tay-nam-icondenim-zenith, \"\" → /products/set-do-nam-icondenim-jacquard-jean, \"\" → /products/quan-tay-nam-icondenim-city-straight, \"\" → /products/quan-jeans-nam-icon105-lightweight-straight-fit-light-blue, \"\" → /products/quan-kaki-nam-icondenim-sandfold, \"\" → /products/ao-polo-nam-icondenim-mono, \"\" → /collections/hang-ban-chay-best-seller?page=2, \"\" → //zalo.me/3664144181122308942, \"\" → //m.me/1042686802417049, \"\" → //zalo.me/3664144181122308942"
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 66/100 dưới ngưỡng 70%. Có 13/38 tiêu chí không đạt.
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