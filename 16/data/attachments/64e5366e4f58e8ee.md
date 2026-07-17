# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo.spec.ts >> SEO TIÊU CHUẨN CƠ BẢN CHO WEB >> Kiểm tra SEO Onpage: Hàng bán chạy Best Seller
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
        - generic [ref=e107]: HÀNG BÁN CHẠY - BEST SELLER
    - generic [ref=e110]:
      - img "HÀNG BÁN CHẠY - BEST SELLER" [ref=e113]
      - generic [ref=e115]:
        - heading "ƯU ĐÃI - ONLY ONLINE" [level=2] [ref=e117]
        - generic [ref=e119]:
          - generic [ref=e121] [cursor=pointer]:
            - strong [ref=e123]: JUL20
            - generic [ref=e124]:
              - generic [ref=e125]:
                - generic [ref=e127]: Giảm 20K
                - text: đơn từ 419K (Only Online)
              - generic [ref=e128]:
                - generic [ref=e129]:
                  - generic [ref=e130]:
                    - text: "Mã:"
                    - strong [ref=e131]: JUL20
                  - generic [ref=e132]: "HSD: 31/07/2026"
                - button "Sao chép mã" [ref=e134]
          - generic [ref=e136] [cursor=pointer]:
            - strong [ref=e138]: JUL50
            - generic [ref=e139]:
              - generic [ref=e140]:
                - generic [ref=e142]: Giảm 50K
                - text: đơn từ 699K (Only Online)
              - generic [ref=e143]:
                - generic [ref=e144]:
                  - generic [ref=e145]:
                    - text: "Mã:"
                    - strong [ref=e146]: JUL50
                  - generic [ref=e147]: "HSD: 31/07/2026"
                - button "Sao chép mã" [ref=e149]
          - generic [ref=e151] [cursor=pointer]:
            - strong [ref=e153]: JUL80
            - generic [ref=e154]:
              - generic [ref=e155]:
                - generic [ref=e157]: Giảm 80K
                - text: đơn từ 999K (Only Online)
              - generic [ref=e158]:
                - generic [ref=e159]:
                  - generic [ref=e160]:
                    - text: "Mã:"
                    - strong [ref=e161]: JUL80
                  - generic [ref=e162]: "HSD: 31/07/2026"
                - button "Sao chép mã" [ref=e164]
          - generic [ref=e166] [cursor=pointer]:
            - strong [ref=e168]: JUL120
            - generic [ref=e169]:
              - generic [ref=e170]:
                - generic [ref=e172]: Giảm 120K
                - text: đơn từ 1399K (Only Online)
              - generic [ref=e173]:
                - generic [ref=e174]:
                  - generic [ref=e175]:
                    - text: "Mã:"
                    - strong [ref=e176]: JUL120
                  - generic [ref=e177]: "HSD: 31/07/2026"
                - button "Sao chép mã" [ref=e179]
      - generic [ref=e181]:
        - generic [ref=e184]:
          - text: "Sắp xếp:"
          - combobox [ref=e185] [cursor=pointer]:
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
        - generic [ref=e186]:
          - generic [ref=e188]:
            - link "Quần Short Linen Nam ICONDENIM Azura" [ref=e190] [cursor=pointer]:
              - /url: /products/quan-short-linen-nam-icondenim-azura
              - img "Quần Short Linen Nam ICONDENIM Azura" [ref=e191]
            - generic [ref=e192]:
              - heading "Quần Short Linen Nam ICONDENIM Azura" [level=3] [ref=e193]:
                - link "Quần Short Linen Nam ICONDENIM Azura" [ref=e194] [cursor=pointer]:
                  - /url: /products/quan-short-linen-nam-icondenim-azura
              - img [ref=e197]:
                - generic [ref=e198]: Hàng Mới
              - generic [ref=e199]:
                - generic [ref=e200]:
                  - paragraph [ref=e201]: 379,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e203] [cursor=pointer]:
                    - generic [ref=e204]:
                      - img "Thêm vào giỏ" [ref=e205]
                      - img "Thêm vào giỏ" [ref=e206]
                - list
          - generic [ref=e208]:
            - link "Quần Short Kaki Nam ICONDENIM Scisp" [ref=e210] [cursor=pointer]:
              - /url: /products/quan-short-kaki-nam-icondenim-scisp
              - img "Quần Short Kaki Nam ICONDENIM Scisp" [ref=e211]
            - generic [ref=e212]:
              - heading "Quần Short Kaki Nam ICONDENIM Scisp" [level=3] [ref=e213]:
                - link "Quần Short Kaki Nam ICONDENIM Scisp" [ref=e214] [cursor=pointer]:
                  - /url: /products/quan-short-kaki-nam-icondenim-scisp
              - img [ref=e217]:
                - generic [ref=e218]: Hàng Mới
              - generic [ref=e219]:
                - generic [ref=e220]:
                  - paragraph [ref=e221]: 349,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e223] [cursor=pointer]:
                    - generic [ref=e224]:
                      - img "Thêm vào giỏ" [ref=e225]
                      - img "Thêm vào giỏ" [ref=e226]
                - list
          - generic [ref=e228]:
            - link "Quần Short Nam ICONDENIM Striped" [ref=e230] [cursor=pointer]:
              - /url: /products/quan-short-nam-icondenim-striped
              - img "Quần Short Nam ICONDENIM Striped" [ref=e231]
            - generic [ref=e232]:
              - heading "Quần Short Nam ICONDENIM Striped" [level=3] [ref=e233]:
                - link "Quần Short Nam ICONDENIM Striped" [ref=e234] [cursor=pointer]:
                  - /url: /products/quan-short-nam-icondenim-striped
              - img [ref=e237]:
                - generic [ref=e238]: Hàng Mới
              - generic [ref=e239]:
                - generic [ref=e240]:
                  - paragraph [ref=e241]: 379,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e243] [cursor=pointer]:
                    - generic [ref=e244]:
                      - img "Thêm vào giỏ" [ref=e245]
                      - img "Thêm vào giỏ" [ref=e246]
                - list
          - generic [ref=e248]:
            - link "Áo Polo Nam Procool ICONDENIM Seam Sealing" [ref=e250] [cursor=pointer]:
              - /url: /products/ao-polo-procool-icondenim-slim-fit-seam-sealing
              - img "Áo Polo Nam Procool ICONDENIM Seam Sealing" [ref=e251]
            - generic [ref=e252]:
              - heading "Áo Polo Nam ProCOOL ICONDENIM Seam Sealing" [level=3] [ref=e253]:
                - link "Áo Polo Nam ProCOOL ICONDENIM Seam Sealing" [ref=e254] [cursor=pointer]:
                  - /url: /products/ao-polo-procool-icondenim-slim-fit-seam-sealing
              - img [ref=e257]:
                - generic [ref=e259]: Siêu Mát
              - generic [ref=e260]:
                - generic [ref=e261]:
                  - paragraph [ref=e262]: 389,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e264] [cursor=pointer]:
                    - generic [ref=e265]:
                      - img "Thêm vào giỏ" [ref=e266]
                      - img "Thêm vào giỏ" [ref=e267]
                - list
          - generic [ref=e269]:
            - link "Áo Thun Nam ICONDENIM Ice Field" [ref=e271] [cursor=pointer]:
              - /url: /products/ao-thun-nam-icondenim-ice-field
              - img "Áo Thun Nam ICONDENIM Ice Field" [ref=e272]
            - generic [ref=e274]: 15%
            - generic [ref=e275]:
              - heading "Áo Thun Nam ICONDENIM Ice Field" [level=3] [ref=e276]:
                - link "Áo Thun Nam ICONDENIM Ice Field" [ref=e277] [cursor=pointer]:
                  - /url: /products/ao-thun-nam-icondenim-ice-field
              - img [ref=e280]:
                - generic [ref=e282]: Sale
              - generic [ref=e283]:
                - generic [ref=e284]:
                  - paragraph [ref=e285]:
                    - text: 339,000₫
                    - deletion [ref=e286]: 399,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e288] [cursor=pointer]:
                    - generic [ref=e289]:
                      - img "Thêm vào giỏ" [ref=e290]
                      - img "Thêm vào giỏ" [ref=e291]
                - list
          - generic [ref=e293]:
            - link "Áo Polo Nam ICONDENIM Textured Knit" [ref=e295] [cursor=pointer]:
              - /url: /products/ao-polo-nam-icondenim-textured-knit
              - img "Áo Polo Nam ICONDENIM Textured Knit" [ref=e296]
            - generic [ref=e297]:
              - heading "Áo Polo Nam ICONDENIM Textured Knit" [level=3] [ref=e298]:
                - link "Áo Polo Nam ICONDENIM Textured Knit" [ref=e299] [cursor=pointer]:
                  - /url: /products/ao-polo-nam-icondenim-textured-knit
              - img [ref=e302]:
                - generic [ref=e303]: Hàng Mới
              - generic [ref=e304]:
                - generic [ref=e305]:
                  - paragraph [ref=e306]: 379,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e308] [cursor=pointer]:
                    - generic [ref=e309]:
                      - img "Thêm vào giỏ" [ref=e310]
                      - img "Thêm vào giỏ" [ref=e311]
                - list
          - generic [ref=e313]:
            - link "Áo Polo Nam ICONDENIM Quarter Zip" [ref=e315] [cursor=pointer]:
              - /url: /products/ao-polo-nam-icondenim-quarter-zip
              - img "Áo Polo Nam ICONDENIM Quarter Zip" [ref=e316]
            - generic [ref=e317]:
              - heading "Áo Polo Nam ICONDENIM Quarter Zip" [level=3] [ref=e318]:
                - link "Áo Polo Nam ICONDENIM Quarter Zip" [ref=e319] [cursor=pointer]:
                  - /url: /products/ao-polo-nam-icondenim-quarter-zip
              - img [ref=e322]:
                - generic [ref=e323]: Hàng Mới
              - generic [ref=e324]:
                - generic [ref=e325]:
                  - paragraph [ref=e326]: 379,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e328] [cursor=pointer]:
                    - generic [ref=e329]:
                      - img "Thêm vào giỏ" [ref=e330]
                      - img "Thêm vào giỏ" [ref=e331]
                - list
          - generic [ref=e333]:
            - link "Áo Thun Nam ICONDENIM Blue Paradise" [ref=e335] [cursor=pointer]:
              - /url: /products/ao-thun-nam-icondenim-blue-paradise
              - img "Áo Thun Nam ICONDENIM Blue Paradise" [ref=e336]
            - generic [ref=e337]:
              - heading "Áo Thun Nam ICONDENIM Blue Paradise" [level=3] [ref=e338]:
                - link "Áo Thun Nam ICONDENIM Blue Paradise" [ref=e339] [cursor=pointer]:
                  - /url: /products/ao-thun-nam-icondenim-blue-paradise
              - img [ref=e342]:
                - generic [ref=e343]: Hàng Mới
              - generic [ref=e344]:
                - generic [ref=e345]:
                  - paragraph [ref=e346]: 329,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e348] [cursor=pointer]:
                    - generic [ref=e349]:
                      - img "Thêm vào giỏ" [ref=e350]
                      - img "Thêm vào giỏ" [ref=e351]
                - list
          - generic [ref=e353]:
            - link "Áo Sơ Mi Nam Tay Dài ICONDENIM Sandveil" [ref=e355] [cursor=pointer]:
              - /url: /products/ao-so-mi-nam-tay-dai-icondenim-sandveil
              - img "Áo Sơ Mi Nam Tay Dài ICONDENIM Sandveil" [ref=e356]
            - generic [ref=e357]:
              - heading "Áo Sơ Mi Nam Tay Dài ICONDENIM Sandveil" [level=3] [ref=e358]:
                - link "Áo Sơ Mi Nam Tay Dài ICONDENIM Sandveil" [ref=e359] [cursor=pointer]:
                  - /url: /products/ao-so-mi-nam-tay-dai-icondenim-sandveil
              - img [ref=e362]:
                - generic [ref=e363]: Hàng Mới
              - generic [ref=e364]:
                - generic [ref=e365]:
                  - paragraph [ref=e366]: 399,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e368] [cursor=pointer]:
                    - generic [ref=e369]:
                      - img "Thêm vào giỏ" [ref=e370]
                      - img "Thêm vào giỏ" [ref=e371]
                - list
          - generic [ref=e373]:
            - link "Áo Polo Nam ICONDENIM Essence" [ref=e375] [cursor=pointer]:
              - /url: /products/ao-polo-nam-icondenim-essence
              - img "Áo Polo Nam ICONDENIM Essence" [ref=e376]
            - generic [ref=e377]:
              - heading "Áo Polo Nam ICONDENIM Essence" [level=3] [ref=e378]:
                - link "Áo Polo Nam ICONDENIM Essence" [ref=e379] [cursor=pointer]:
                  - /url: /products/ao-polo-nam-icondenim-essence
              - img [ref=e382]:
                - generic [ref=e383]: Hàng Mới
              - generic [ref=e384]:
                - generic [ref=e385]:
                  - paragraph [ref=e386]: 349,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e388] [cursor=pointer]:
                    - generic [ref=e389]:
                      - img "Thêm vào giỏ" [ref=e390]
                      - img "Thêm vào giỏ" [ref=e391]
                - list
          - generic [ref=e393]:
            - link "Áo Thun Nam ICONDENIM Archive" [ref=e395] [cursor=pointer]:
              - /url: /products/ao-thun-nam-icondenim-archive
              - img "Áo Thun Nam ICONDENIM Archive" [ref=e396]
            - generic [ref=e397]:
              - heading "Áo Thun Nam ICONDENIM Archive" [level=3] [ref=e398]:
                - link "Áo Thun Nam ICONDENIM Archive" [ref=e399] [cursor=pointer]:
                  - /url: /products/ao-thun-nam-icondenim-archive
              - generic:
                - generic:
                  - img
              - generic [ref=e400]:
                - generic [ref=e401]:
                  - paragraph [ref=e402]: 329,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e404] [cursor=pointer]:
                    - generic [ref=e405]:
                      - img "Thêm vào giỏ" [ref=e406]
                      - img "Thêm vào giỏ" [ref=e407]
                - list
          - generic [ref=e409]:
            - link "Quần Short Jean Nam ICONDENIM Classic" [ref=e411] [cursor=pointer]:
              - /url: /products/quan-short-nam-jean-icondenim-classic
              - img "Quần Short Jean Nam ICONDENIM Classic" [ref=e412]
            - generic [ref=e413]:
              - heading "Quần Short Jean Nam ICONDENIM Classic" [level=3] [ref=e414]:
                - link "Quần Short Jean Nam ICONDENIM Classic" [ref=e415] [cursor=pointer]:
                  - /url: /products/quan-short-nam-jean-icondenim-classic
              - generic:
                - generic:
                  - img
              - generic [ref=e416]:
                - generic [ref=e417]:
                  - paragraph [ref=e418]: 350,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e420] [cursor=pointer]:
                    - generic [ref=e421]:
                      - img "Thêm vào giỏ" [ref=e422]
                      - img "Thêm vào giỏ" [ref=e423]
                - list
          - generic [ref=e425]:
            - link "Áo Sơ Mi Nam Tay Ngắn Linen Cuban ICONDENIM Sandrift" [ref=e427] [cursor=pointer]:
              - /url: /products/ao-so-mi-nam-tay-ngan-linen-cuban-icondenim-sandrift
              - img "Áo Sơ Mi Nam Tay Ngắn Linen Cuban ICONDENIM Sandrift" [ref=e428]
            - generic [ref=e429]:
              - heading "Áo Sơ Mi Nam Tay Ngắn Linen Cuban ICONDENIM Sandrift" [level=3] [ref=e430]:
                - link "Áo Sơ Mi Nam Tay Ngắn Linen Cuban ICONDENIM Sandrift" [ref=e431] [cursor=pointer]:
                  - /url: /products/ao-so-mi-nam-tay-ngan-linen-cuban-icondenim-sandrift
              - generic:
                - generic:
                  - img
              - generic [ref=e432]:
                - generic [ref=e433]:
                  - paragraph [ref=e434]: 379,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e436] [cursor=pointer]:
                    - generic [ref=e437]:
                      - img "Thêm vào giỏ" [ref=e438]
                      - img "Thêm vào giỏ" [ref=e439]
                - list
          - generic [ref=e441]:
            - link "Quần Short Nam ICONDENIM Tropical Mono" [ref=e443] [cursor=pointer]:
              - /url: /products/quan-short-nam-icondenim-tropical-mono
              - img "Quần Short Nam ICONDENIM Tropical Mono" [ref=e444]
            - generic [ref=e445]:
              - heading "Quần Short Nam ICONDENIM Tropical Mono" [level=3] [ref=e446]:
                - link "Quần Short Nam ICONDENIM Tropical Mono" [ref=e447] [cursor=pointer]:
                  - /url: /products/quan-short-nam-icondenim-tropical-mono
              - generic:
                - generic:
                  - img
              - generic [ref=e448]:
                - generic [ref=e449]:
                  - paragraph [ref=e450]: 299,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e452] [cursor=pointer]:
                    - generic [ref=e453]:
                      - img "Thêm vào giỏ" [ref=e454]
                      - img "Thêm vào giỏ" [ref=e455]
                - list
          - generic [ref=e457]:
            - link "Áo Thun Nam ICONDENIM Homefield" [ref=e459] [cursor=pointer]:
              - /url: /products/ao-thun-nam-icondenim-homefield
              - img "Áo Thun Nam ICONDENIM Homefield" [ref=e460]
            - generic [ref=e461]:
              - heading "Áo Thun Nam ICONDENIM Homefield" [level=3] [ref=e462]:
                - link "Áo Thun Nam ICONDENIM Homefield" [ref=e463] [cursor=pointer]:
                  - /url: /products/ao-thun-nam-icondenim-homefield
              - generic:
                - generic:
                  - img
              - generic [ref=e464]:
                - generic [ref=e465]:
                  - paragraph [ref=e466]: 379,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e468] [cursor=pointer]:
                    - generic [ref=e469]:
                      - img "Thêm vào giỏ" [ref=e470]
                      - img "Thêm vào giỏ" [ref=e471]
                - list
          - generic [ref=e473]:
            - link "Set Áo Quần Nam ICONDENIM Lazy Fish" [ref=e475] [cursor=pointer]:
              - /url: /products/set-ao-quan-nam-icondenim-lazy-fish
              - img "Set Áo Quần Nam ICONDENIM Lazy Fish" [ref=e476]
            - generic [ref=e477]:
              - heading "Set Áo Quần Nam ICONDENIM Lazy Fish" [level=3] [ref=e478]:
                - link "Set Áo Quần Nam ICONDENIM Lazy Fish" [ref=e479] [cursor=pointer]:
                  - /url: /products/set-ao-quan-nam-icondenim-lazy-fish
              - generic:
                - generic:
                  - img
              - generic [ref=e480]:
                - generic [ref=e481]:
                  - paragraph [ref=e482]: 329,000₫ ~ 678,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e484] [cursor=pointer]:
                    - generic [ref=e485]:
                      - img "Thêm vào giỏ" [ref=e486]
                      - img "Thêm vào giỏ" [ref=e487]
                - list
          - generic [ref=e489]:
            - link "Quần Kaki Nam ICONDENIM Simple" [ref=e491] [cursor=pointer]:
              - /url: /products/quan-kaki-nam-icondenim-simple
              - img "Quần Kaki Nam ICONDENIM Simple" [ref=e492]
            - generic [ref=e493]:
              - heading "Quần Kaki Nam ICONDENIM Simple" [level=3] [ref=e494]:
                - link "Quần Kaki Nam ICONDENIM Simple" [ref=e495] [cursor=pointer]:
                  - /url: /products/quan-kaki-nam-icondenim-simple
              - generic:
                - generic:
                  - img
              - generic [ref=e496]:
                - generic [ref=e497]:
                  - paragraph [ref=e498]: 529,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e500] [cursor=pointer]:
                    - generic [ref=e501]:
                      - img "Thêm vào giỏ" [ref=e502]
                      - img "Thêm vào giỏ" [ref=e503]
                - list
          - generic [ref=e505]:
            - link "Áo Thun Nam ICONDENIM Riviera Stripe" [ref=e507] [cursor=pointer]:
              - /url: /products/ao-thun-nam-icondenim-riviera-stripe
              - img "Áo Thun Nam ICONDENIM Riviera Stripe" [ref=e508]
            - generic [ref=e509]:
              - heading "Áo Thun Nam ICONDENIM Riviera Stripe" [level=3] [ref=e510]:
                - link "Áo Thun Nam ICONDENIM Riviera Stripe" [ref=e511] [cursor=pointer]:
                  - /url: /products/ao-thun-nam-icondenim-riviera-stripe
              - generic:
                - generic:
                  - img
              - generic [ref=e512]:
                - generic [ref=e513]:
                  - paragraph [ref=e514]: 329,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e516] [cursor=pointer]:
                    - generic [ref=e517]:
                      - img "Thêm vào giỏ" [ref=e518]
                      - img "Thêm vào giỏ" [ref=e519]
                - list
          - generic [ref=e521]:
            - link "Áo Sơ Mi Nam Tay Ngắn Cuban ICONDENIM Riviera Knit" [ref=e523] [cursor=pointer]:
              - /url: /products/ao-so-mi-nam-tay-ngan-cuban-icondenim-riviera-knit
              - img "Áo Sơ Mi Nam Tay Ngắn Cuban ICONDENIM Riviera Knit" [ref=e524]
            - generic [ref=e525]:
              - heading "Áo Sơ Mi Nam Tay Ngắn Cuban ICONDENIM Riviera Knit" [level=3] [ref=e526]:
                - link "Áo Sơ Mi Nam Tay Ngắn Cuban ICONDENIM Riviera Knit" [ref=e527] [cursor=pointer]:
                  - /url: /products/ao-so-mi-nam-tay-ngan-cuban-icondenim-riviera-knit
              - generic:
                - generic:
                  - img
              - generic [ref=e528]:
                - generic [ref=e529]:
                  - paragraph [ref=e530]: 349,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e532] [cursor=pointer]:
                    - generic [ref=e533]:
                      - img "Thêm vào giỏ" [ref=e534]
                      - img "Thêm vào giỏ" [ref=e535]
                - list
          - generic [ref=e537]:
            - link "Áo Sơ Mi Nam Tay Ngắn Linen Cuban ICONDENIM Littoral" [ref=e539] [cursor=pointer]:
              - /url: /products/ao-so-mi-nam-tay-ngan-linen-cuban-icondenim-littoral
              - img "Áo Sơ Mi Nam Tay Ngắn Linen Cuban ICONDENIM Littoral" [ref=e540]
            - generic [ref=e541]:
              - heading "Áo Sơ Mi Nam Tay Ngắn Linen Cuban ICONDENIM Littoral" [level=3] [ref=e542]:
                - link "Áo Sơ Mi Nam Tay Ngắn Linen Cuban ICONDENIM Littoral" [ref=e543] [cursor=pointer]:
                  - /url: /products/ao-so-mi-nam-tay-ngan-linen-cuban-icondenim-littoral
              - generic:
                - generic:
                  - img
              - generic [ref=e544]:
                - generic [ref=e545]:
                  - paragraph [ref=e546]: 379,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e548] [cursor=pointer]:
                    - generic [ref=e549]:
                      - img "Thêm vào giỏ" [ref=e550]
                      - img "Thêm vào giỏ" [ref=e551]
                - list
          - generic [ref=e553]:
            - link "Áo Thun Nam ICONDENIM Arch" [ref=e555] [cursor=pointer]:
              - /url: /products/ao-thun-nam-icondenim-arch
              - img "Áo Thun Nam ICONDENIM Arch" [ref=e556]
            - generic [ref=e557]:
              - heading "Áo Thun Nam ICONDENIM Arch" [level=3] [ref=e558]:
                - link "Áo Thun Nam ICONDENIM Arch" [ref=e559] [cursor=pointer]:
                  - /url: /products/ao-thun-nam-icondenim-arch
              - generic:
                - generic:
                  - img
              - generic [ref=e560]:
                - generic [ref=e561]:
                  - paragraph [ref=e562]: 329,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e564] [cursor=pointer]:
                    - generic [ref=e565]:
                      - img "Thêm vào giỏ" [ref=e566]
                      - img "Thêm vào giỏ" [ref=e567]
                - list
          - generic [ref=e569]:
            - link "Áo Thun Nam ICONDENIM Atelier" [ref=e571] [cursor=pointer]:
              - /url: /products/ao-thun-nam-icondenim-atelier-1
              - img "Áo Thun Nam ICONDENIM Atelier" [ref=e572]
            - generic [ref=e573]:
              - heading "Áo Thun Nam ICONDENIM Atelier" [level=3] [ref=e574]:
                - link "Áo Thun Nam ICONDENIM Atelier" [ref=e575] [cursor=pointer]:
                  - /url: /products/ao-thun-nam-icondenim-atelier-1
              - generic:
                - generic:
                  - img
              - generic [ref=e576]:
                - generic [ref=e577]:
                  - paragraph [ref=e578]: 329,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e580] [cursor=pointer]:
                    - generic [ref=e581]:
                      - img "Thêm vào giỏ" [ref=e582]
                      - img "Thêm vào giỏ" [ref=e583]
                - list
          - generic [ref=e585]:
            - link "Áo Thun Nam ICONDENIM Flux" [ref=e587] [cursor=pointer]:
              - /url: /products/ao-thun-nam-icondenim-flux
              - img "Áo Thun Nam ICONDENIM Flux" [ref=e588]
            - generic [ref=e589]:
              - heading "Áo Thun Nam ICONDENIM Flux" [level=3] [ref=e590]:
                - link "Áo Thun Nam ICONDENIM Flux" [ref=e591] [cursor=pointer]:
                  - /url: /products/ao-thun-nam-icondenim-flux
              - generic:
                - generic:
                  - img
              - generic [ref=e592]:
                - generic [ref=e593]:
                  - paragraph [ref=e594]: 329,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e596] [cursor=pointer]:
                    - generic [ref=e597]:
                      - img "Thêm vào giỏ" [ref=e598]
                      - img "Thêm vào giỏ" [ref=e599]
                - list
          - generic [ref=e601]:
            - link "Áo Sơ Mi Nam ICONDENIM Workday Ease" [ref=e603] [cursor=pointer]:
              - /url: /products/ao-so-mi-nam-icondenim-workday-ease
              - img "Áo Sơ Mi Nam ICONDENIM Workday Ease" [ref=e604]
            - generic [ref=e605]:
              - heading "Áo Sơ Mi Nam ICONDENIM Workday Ease" [level=3] [ref=e606]:
                - link "Áo Sơ Mi Nam ICONDENIM Workday Ease" [ref=e607] [cursor=pointer]:
                  - /url: /products/ao-so-mi-nam-icondenim-workday-ease
              - generic:
                - generic:
                  - img
              - generic [ref=e608]:
                - generic [ref=e609]:
                  - paragraph [ref=e610]: 399,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e612] [cursor=pointer]:
                    - generic [ref=e613]:
                      - img "Thêm vào giỏ" [ref=e614]
                      - img "Thêm vào giỏ" [ref=e615]
                - list
          - generic [ref=e617]:
            - link "Quần Tây Nam ICONDENIM Zenith" [ref=e619] [cursor=pointer]:
              - /url: /products/quan-tay-nam-icondenim-zenith
              - img "Quần Tây Nam ICONDENIM Zenith" [ref=e620]
            - generic [ref=e621]:
              - heading "Quần Tây Nam ICONDENIM Zenith" [level=3] [ref=e622]:
                - link "Quần Tây Nam ICONDENIM Zenith" [ref=e623] [cursor=pointer]:
                  - /url: /products/quan-tay-nam-icondenim-zenith
              - generic:
                - generic:
                  - img
              - generic [ref=e624]:
                - generic [ref=e625]:
                  - paragraph [ref=e626]: 429,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e628] [cursor=pointer]:
                    - generic [ref=e629]:
                      - img "Thêm vào giỏ" [ref=e630]
                      - img "Thêm vào giỏ" [ref=e631]
                - list
          - generic [ref=e633]:
            - link "Set Đồ Nam ICONDENIM Jacquard Jean" [ref=e635] [cursor=pointer]:
              - /url: /products/set-do-nam-icondenim-jacquard-jean
              - img "Set Đồ Nam ICONDENIM Jacquard Jean" [ref=e636]
            - generic [ref=e637]:
              - heading "Set Đồ Nam ICONDENIM Jacquard Jean" [level=3] [ref=e638]:
                - link "Set Đồ Nam ICONDENIM Jacquard Jean" [ref=e639] [cursor=pointer]:
                  - /url: /products/set-do-nam-icondenim-jacquard-jean
              - generic:
                - generic:
                  - img
              - generic [ref=e640]:
                - generic [ref=e641]:
                  - paragraph [ref=e642]: 349,000₫ ~ 698,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e644] [cursor=pointer]:
                    - generic [ref=e645]:
                      - img "Thêm vào giỏ" [ref=e646]
                      - img "Thêm vào giỏ" [ref=e647]
                - list
          - generic [ref=e649]:
            - link "Quần Tây Nam ICONDENIM City Straight" [ref=e651] [cursor=pointer]:
              - /url: /products/quan-tay-nam-icondenim-city-straight
              - img "Quần Tây Nam ICONDENIM City Straight" [ref=e652]
            - generic [ref=e653]:
              - heading "Quần Tây Nam ICONDENIM City Straight" [level=3] [ref=e654]:
                - link "Quần Tây Nam ICONDENIM City Straight" [ref=e655] [cursor=pointer]:
                  - /url: /products/quan-tay-nam-icondenim-city-straight
              - generic:
                - generic:
                  - img
              - generic [ref=e656]:
                - generic [ref=e657]:
                  - paragraph [ref=e658]: 449,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e660] [cursor=pointer]:
                    - generic [ref=e661]:
                      - img "Thêm vào giỏ" [ref=e662]
                      - img "Thêm vào giỏ" [ref=e663]
                - list
          - generic [ref=e665]:
            - link "Quần Jean Nam ICON105 Lightweight™ Straight Fit Light Blue" [ref=e667] [cursor=pointer]:
              - /url: /products/quan-jeans-nam-icon105-lightweight-straight-fit-light-blue
              - img "Quần Jean Nam ICON105 Lightweight™ Straight Fit Light Blue" [ref=e668]
            - generic [ref=e669]:
              - heading "Quần Jeans Nam ICON105 Lightweight™ Straight Fit Light Blue" [level=3] [ref=e670]:
                - link "Quần Jeans Nam ICON105 Lightweight™ Straight Fit Light Blue" [ref=e671] [cursor=pointer]:
                  - /url: /products/quan-jeans-nam-icon105-lightweight-straight-fit-light-blue
              - img [ref=e674]:
                - generic [ref=e676]: Siêu Nhẹ
              - generic [ref=e677]:
                - generic [ref=e678]:
                  - paragraph [ref=e679]: 599,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e681] [cursor=pointer]:
                    - generic [ref=e682]:
                      - img "Thêm vào giỏ" [ref=e683]
                      - img "Thêm vào giỏ" [ref=e684]
                - list
          - generic [ref=e686]:
            - link "Quần Kaki Nam ICONDENIM Sandfold" [ref=e688] [cursor=pointer]:
              - /url: /products/quan-kaki-nam-icondenim-sandfold
              - img "Quần Kaki Nam ICONDENIM Sandfold" [ref=e689]
            - generic [ref=e690]:
              - heading "Quần Kaki Nam ICONDENIM Sandfold" [level=3] [ref=e691]:
                - link "Quần Kaki Nam ICONDENIM Sandfold" [ref=e692] [cursor=pointer]:
                  - /url: /products/quan-kaki-nam-icondenim-sandfold
              - generic:
                - generic:
                  - img
              - generic [ref=e693]:
                - generic [ref=e694]:
                  - paragraph [ref=e695]: 449,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e697] [cursor=pointer]:
                    - generic [ref=e698]:
                      - img "Thêm vào giỏ" [ref=e699]
                      - img "Thêm vào giỏ" [ref=e700]
                - list
          - generic [ref=e702]:
            - link "Áo Polo Nam ICONDENIM Mono" [ref=e704] [cursor=pointer]:
              - /url: /products/ao-polo-nam-icondenim-mono
              - img "Áo Polo Nam ICONDENIM Mono" [ref=e705]
            - generic [ref=e706]:
              - heading "Áo Polo Nam ICONDENIM Mono" [level=3] [ref=e707]:
                - link "Áo Polo Nam ICONDENIM Mono" [ref=e708] [cursor=pointer]:
                  - /url: /products/ao-polo-nam-icondenim-mono
              - generic:
                - generic:
                  - img
              - generic [ref=e709]:
                - generic [ref=e710]:
                  - paragraph [ref=e711]: 429,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e713] [cursor=pointer]:
                    - generic [ref=e714]:
                      - img "Thêm vào giỏ" [ref=e715]
                      - img "Thêm vào giỏ" [ref=e716]
                - list
        - generic [ref=e717]:
          - button "Xem thêm" [ref=e718] [cursor=pointer]
          - paragraph
        - text: 
  - generic [ref=e722]:
    - generic [ref=e723]:
      - paragraph [ref=e724]: Đăng kí nhận tin
      - generic [ref=e726]:
        - generic [ref=e727]:
          - text: 
          - textbox "Email" [ref=e728]
        - button "Đăng ký" [ref=e729] [cursor=pointer]:
          - generic [ref=e730]: 
          - text: Đăng ký
    - list [ref=e732]:
      - listitem [ref=e733]:
        - link "Liên hệ với chúng tôi qua Zalo" [ref=e734] [cursor=pointer]:
          - /url: //zalo.me/3664144181122308942
          - img "Liên hệ với chúng tôi qua Zalo" [ref=e735]
      - listitem [ref=e736]:
        - link [ref=e737] [cursor=pointer]:
          - /url: https://www.youtube.com/@storehanghieu1608
          - generic [ref=e738]: 
      - listitem [ref=e739]:
        - link [ref=e740] [cursor=pointer]:
          - /url: https://www.instagram.com/160store
          - generic [ref=e741]: 
      - listitem [ref=e742]:
        - link [ref=e743] [cursor=pointer]:
          - /url: https://www.facebook.com/160store
          - generic [ref=e744]: 
  - contentinfo [ref=e745]:
    - generic [ref=e747]:
      - generic [ref=e748]:
        - generic [ref=e749]:
          - generic [ref=e751]: Giới thiệu
          - generic [ref=e752]:
            - paragraph [ref=e753]: 160STORE - Chuỗi Phân Phối Thời Trang Nam Chuẩn Hiệu
            - list [ref=e754]:
              - listitem [ref=e755]:
                - generic [ref=e756]: 
                - link "02871006789" [ref=e757] [cursor=pointer]:
                  - /url: tel:02871006789
              - listitem [ref=e758]:
                - generic [ref=e759]: 
                - link "cs@160store.com" [ref=e760] [cursor=pointer]:
                  - /url: mailto:cs@160store.com
              - listitem [ref=e761]:
                - generic [ref=e762]: 
                - generic [ref=e763]: "Giờ mở cửa : 08:30 - 22:00"
              - listitem [ref=e764]:
                - generic [ref=e765]: 
                - generic [ref=e766]: Nhân viên tư vấn phản hồi tin nhắn đến 24:00 (Mỗi ngày)
              - listitem [ref=e767]:
                - link [ref=e768] [cursor=pointer]:
                  - /url: http://online.gov.vn/Home/WebDetails/121880
                  - img [ref=e769]
              - listitem [ref=e770]:
                - link "DMCA.com Protection Status" [ref=e771] [cursor=pointer]:
                  - /url: https://www.dmca.com/Protection/Status.aspx?ID=9049de26-d97b-48dc-ab97-1e5fcb221fba&refurl=https://160store.com/collections/hang-ban-chay-best-seller
                  - img "DMCA.com Protection Status" [ref=e772]
        - generic [ref=e773]:
          - generic [ref=e775]: CHÍNH SÁCH
          - list [ref=e777]:
            - listitem [ref=e778]:
              - link "Hướng dẫn đặt hàng" [ref=e779] [cursor=pointer]:
                - /url: /pages/huong-dan-dat-hang
            - listitem [ref=e780]:
              - paragraph [ref=e783] [cursor=pointer]: Chính sách
        - generic [ref=e785]:
          - link "ĐỊA CHỈ CỬA HÀNG (20 CH)" [ref=e788] [cursor=pointer]:
            - /url: https://www.160store.com/pages/lien-he
          - generic [ref=e790]:
            - generic [ref=e791]:
              - generic [ref=e792]:
                - img [ref=e793]
                - paragraph [ref=e794]: HỒ CHÍ MINH (10 CH)
              - paragraph [ref=e795]: 274 Ba Cu, Phường Vũng Tàu, TP.HCM
            - generic [ref=e796]:
              - generic [ref=e797]:
                - img [ref=e798]
                - paragraph [ref=e799]:
                  - text: HÀ NỘI (2 CH)
                  - generic [ref=e800]: New
              - paragraph [ref=e801]: 27 Tôn Đức Thắng - P. Văn Miếu - Quốc Tử Giám; TP. Hà Nội
            - generic [ref=e802]:
              - generic [ref=e803]:
                - img [ref=e804]
                - paragraph [ref=e805]: CẦN THƠ (2 CH)
              - paragraph [ref=e806]: Số 35 Trần Phú, Phường Ninh Kiều, TP.Cần Thơ
            - generic [ref=e807]:
              - generic [ref=e808]:
                - img [ref=e809]
                - paragraph [ref=e810]: ĐÀ NẴNG (2 CH)
              - paragraph [ref=e811]: 332 Đ. Lê Duẩn, Phường Thanh Khê, TP.Đà Nẵng
            - link "XEM TẤT CẢ CỬA HÀNG" [ref=e813] [cursor=pointer]:
              - /url: https://www.160store.com/pages/lien-he
        - generic [ref=e816]:
          - generic [ref=e817]: PHƯƠNG THỨC THANH TOÁN
          - generic [ref=e818]:
            - img "Image Spay" [ref=e819]
            - img "Image VNPay" [ref=e820]
            - img "Image Cod" [ref=e821]
      - generic [ref=e826]: BẢN QUYỀN THUỘC VỀ 160STORE
  - list [ref=e828]
  - button "back to top" [ref=e830] [cursor=pointer]:
    - img [ref=e831]
    - text: back to top
  - paragraph [ref=e837]: Bạn chưa chọn size sản phẩm!
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
            - strong: Hàng bán chạy Best Seller
          - generic:
            - generic: "Từ khóa chính:"
            - strong: hàng bán chạy best seller
          - generic:
            - generic: "Tiêu chí đạt:"
            - strong: 26/38
      - generic [ref=e838]:
        - generic [ref=e839]: "❌ Chi tiết lỗi cần khắc phục (12):"
        - generic [ref=e840]:
          - generic [ref=e841]:
            - generic [ref=e842]:
              - strong [ref=e843]: "1.2 — Độ dài Title: 27 ký tự (chuẩn: 40–65)"
              - generic [ref=e844]: "1.2"
            - generic [ref=e845]: "⚠️ Lỗi: Title quá ngắn hoặc quá dài (27 ký tự), cần 40–65"
          - generic [ref=e846]:
            - generic [ref=e847]:
              - strong [ref=e848]: 1.3 — Title chứa keyword "hàng bán chạy best seller"
              - generic [ref=e849]: "1.3"
            - generic [ref=e850]: "⚠️ Lỗi: Title không chứa keyword \"hàng bán chạy best seller\""
          - generic [ref=e851]:
            - generic [ref=e852]:
              - strong [ref=e853]: "1.4 — Keyword nằm ở nửa đầu Title (vị trí: N/A)"
              - generic [ref=e854]: "1.4"
            - generic [ref=e855]: "⚠️ Lỗi: Bỏ qua — keyword \"hàng bán chạy best seller\" không có trong Title"
          - generic [ref=e856]:
            - generic [ref=e857]:
              - strong [ref=e858]: 2.3 — Meta description chứa keyword "hàng bán chạy best seller"
              - generic [ref=e859]: "2.3"
            - generic [ref=e860]: "⚠️ Lỗi: Meta description không chứa keyword \"hàng bán chạy best seller\""
          - generic [ref=e861]:
            - generic [ref=e862]:
              - strong [ref=e863]: "3.1 — Trang có đúng 1 thẻ H1 (hiện tại: 0 thẻ)"
              - generic [ref=e864]: "3.1"
            - generic [ref=e865]: "⚠️ Lỗi: Trang không có thẻ H1 nào!"
          - generic [ref=e866]:
            - generic [ref=e867]:
              - strong [ref=e868]: 3.2 — H1 chứa keyword "hàng bán chạy best seller"
              - generic [ref=e869]: "3.2"
            - generic [ref=e870]: "⚠️ Lỗi: Không có H1 để kiểm tra"
          - generic [ref=e871]:
            - generic [ref=e872]:
              - strong [ref=e873]: "5.2 — Mật độ keyword: 0.00% (chuẩn: 0.5%–2.5%)"
              - generic [ref=e874]: "5.2"
            - generic [ref=e875]: "⚠️ Lỗi: Mật độ keyword quá thấp: 0.00%, cần ≥ 0.5%"
          - generic [ref=e876]:
            - generic [ref=e877]:
              - strong [ref=e878]: 5.3 — Keyword "hàng bán chạy best seller" xuất hiện trong 100 từ đầu
              - generic [ref=e879]: "5.3"
            - generic [ref=e880]: "⚠️ Lỗi: Keyword \"hàng bán chạy best seller\" không xuất hiện trong 100 từ đầu"
          - generic [ref=e881]:
            - generic [ref=e882]:
              - strong [ref=e883]: "6.1 — 100% ảnh có thuộc tính alt (thiếu: 7/240)"
              - generic [ref=e884]: "6.1"
            - generic [ref=e885]: "⚠️ Lỗi: Có 7 hình ảnh thiếu thuộc tính 'alt'"
          - generic [ref=e886]:
            - generic [ref=e887]:
              - strong [ref=e888]: 6.2 — Có ảnh chứa keyword "hàng bán chạy best seller" trong alt
              - generic [ref=e889]: "6.2"
            - generic [ref=e890]: "⚠️ Lỗi: Không có ảnh nào có alt chứa keyword \"hàng bán chạy best seller\""
          - generic [ref=e891]:
            - generic [ref=e892]:
              - strong [ref=e893]: "7.3 — Anchor text chất lượng (lỗi: 37)"
              - generic [ref=e894]: "7.3"
            - generic [ref=e895]: "⚠️ Lỗi: 37 link có anchor text không tốt: \"\" → /, \"\" → /, \"\" → /, \"\" → /, \"\" → /products/quan-short-linen-nam-icondenim-azura, \"\" → /products/quan-short-kaki-nam-icondenim-scisp, \"\" → /products/quan-short-nam-icondenim-striped, \"\" → /products/ao-polo-procool-icondenim-slim-fit-seam-sealing, \"\" → /products/ao-polo-nam-icondenim-textured-knit, \"\" → /products/ao-polo-nam-icondenim-quarter-zip, \"\" → /products/ao-thun-nam-icondenim-blue-paradise, \"\" → /products/ao-so-mi-nam-tay-dai-icondenim-sandveil, \"\" → /products/ao-polo-nam-icondenim-essence, \"\" → /products/ao-thun-nam-icondenim-archive, \"\" → /products/quan-short-nam-jean-icondenim-classic, \"\" → /products/ao-so-mi-nam-tay-ngan-linen-cuban-icondenim-sandrift, \"\" → /products/quan-short-nam-icondenim-tropical-mono, \"\" → /products/ao-thun-nam-icondenim-homefield, \"\" → /products/set-ao-quan-nam-icondenim-lazy-fish, \"\" → /products/quan-kaki-nam-icondenim-simple, \"\" → /products/ao-thun-nam-icondenim-riviera-stripe, \"\" → /products/ao-so-mi-nam-tay-ngan-cuban-icondenim-riviera-knit, \"\" → /products/ao-so-mi-nam-tay-ngan-linen-cuban-icondenim-littoral, \"\" → /products/ao-thun-nam-icondenim-arch, \"\" → /products/ao-thun-nam-icondenim-atelier-1, \"\" → /products/ao-thun-nam-icondenim-flux, \"\" → /products/ao-so-mi-nam-icondenim-workday-ease, \"\" → /products/quan-tay-nam-icondenim-zenith, \"\" → /products/set-do-nam-icondenim-jacquard-jean, \"\" → /products/quan-tay-nam-icondenim-city-straight, \"\" → /products/quan-jeans-nam-icon105-lightweight-straight-fit-light-blue, \"\" → /products/quan-kaki-nam-icondenim-sandfold, \"\" → /products/ao-polo-nam-icondenim-mono, \"\" → /collections/hang-ban-chay-best-seller?page=2, \"\" → //zalo.me/3664144181122308942, \"\" → //m.me/1042686802417049, \"\" → //zalo.me/3664144181122308942"
          - generic [ref=e896]:
            - generic [ref=e897]:
              - strong [ref=e898]: "8.7 — Twitter Card tags: 0 thẻ"
              - generic [ref=e899]: "8.7"
            - generic [ref=e900]: "⚠️ Lỗi: Trang thiếu Twitter Card tags"
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 68/100 dưới ngưỡng 70%. Có 12/38 tiêu chí không đạt.
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