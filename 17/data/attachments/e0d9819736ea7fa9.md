# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo.spec.ts >> SEO TIÊU CHUẨN CƠ BẢN CHO WEB >> Kiểm tra SEO Onpage: ProCOOL | Siêu Mát
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
          - heading "MÁT LẠNH KHÔNG CẦN CẮM ĐIỆN VỚI PROCOOL JEANS" [level=3] [ref=e110]
          - paragraph [ref=e111]: Đây sẽ là dòng Jeans MÁT nhất, càng chuyển động, càng MÁT đến từ đội ngũ 𝐈𝐂𝐎𝐍𝐃𝐄𝐍𝐈𝐌®. Sở hữu công nghệ làm mát COOLMAX® đạt chuẩn chất lượng quốc tế, rất đáng để trải nghiệm
        - img "imgtext_img" [ref=e112]
    - generic [ref=e117]:
      - generic [ref=e119]:
        - link "quan-jeans-nam-procool-icondenim-dark-grey-form-slim" [ref=e121] [cursor=pointer]:
          - /url: /products/quan-jeans-nam-procool-icondenim-dark-grey-form-slim
          - img "quan-jeans-nam-procool-icondenim-dark-grey-form-slim" [ref=e122]
        - generic [ref=e123]:
          - heading "Quần Jeans Nam ProCOOL ICONDENIM Dark Grey Slim" [level=3] [ref=e124]:
            - link "Quần Jeans Nam ProCOOL ICONDENIM Dark Grey Slim" [ref=e125] [cursor=pointer]:
              - /url: /products/quan-jeans-nam-procool-icondenim-dark-grey-form-slim
          - img [ref=e128]:
            - generic [ref=e130]: Siêu Mát
          - generic [ref=e131]:
            - generic [ref=e132]:
              - paragraph [ref=e133]: 689,000₫
              - generic:
                - button "Btn Quickview":
                  - img "Btn Quickview"
              - button "Thêm vào giỏ Thêm vào giỏ" [ref=e135] [cursor=pointer]:
                - generic [ref=e136]:
                  - img "Thêm vào giỏ" [ref=e137]
                  - img "Thêm vào giỏ" [ref=e138]
            - list
      - generic [ref=e140]:
        - link "Quần Jeans Nam ProCOOL ICONDENIM Light grey Form Slim" [ref=e142] [cursor=pointer]:
          - /url: /products/quan-jeans-nam-procool-icondenim-light-grey-form-slim
          - img "Quần Jeans Nam ProCOOL ICONDENIM Light grey Form Slim" [ref=e143]
        - generic [ref=e144]:
          - heading "Quần Jeans Nam ProCOOL ICONDENIM Light grey Form Slim" [level=3] [ref=e145]:
            - link "Quần Jeans Nam ProCOOL ICONDENIM Light grey Form Slim" [ref=e146] [cursor=pointer]:
              - /url: /products/quan-jeans-nam-procool-icondenim-light-grey-form-slim
          - img [ref=e149]:
            - generic [ref=e151]: Siêu Mát
          - generic [ref=e152]:
            - generic [ref=e153]:
              - paragraph [ref=e154]: 689,000₫
              - generic:
                - button "Btn Quickview":
                  - img "Btn Quickview"
              - button "Thêm vào giỏ Thêm vào giỏ" [ref=e156] [cursor=pointer]:
                - generic [ref=e157]:
                  - img "Thêm vào giỏ" [ref=e158]
                  - img "Thêm vào giỏ" [ref=e159]
            - list
      - generic [ref=e161]:
        - link "Quần Jeans Nam ProCOOL ICONDENIM CoolMax Indigo Slim" [ref=e163] [cursor=pointer]:
          - /url: /products/quan-jeans-nam-procool-icondenim-coolmax-indigo-slim
          - img "Quần Jeans Nam ProCOOL ICONDENIM CoolMax Indigo Slim" [ref=e164]
        - generic [ref=e165]:
          - heading "Quần Jeans Nam ProCOOL ICONDENIM CoolMax Indigo Slim" [level=3] [ref=e166]:
            - link "Quần Jeans Nam ProCOOL ICONDENIM CoolMax Indigo Slim" [ref=e167] [cursor=pointer]:
              - /url: /products/quan-jeans-nam-procool-icondenim-coolmax-indigo-slim
          - img [ref=e170]:
            - generic [ref=e172]: Siêu Mát
          - generic [ref=e173]:
            - generic [ref=e174]:
              - paragraph [ref=e175]: 689,000₫
              - generic:
                - button "Btn Quickview":
                  - img "Btn Quickview"
              - button "Thêm vào giỏ Thêm vào giỏ" [ref=e177] [cursor=pointer]:
                - generic [ref=e178]:
                  - img "Thêm vào giỏ" [ref=e179]
                  - img "Thêm vào giỏ" [ref=e180]
            - list
      - generic [ref=e182]:
        - link "video_tensp" [ref=e184] [cursor=pointer]:
          - /url: /products/quan-jeans-nam-procool-icondenim-coolmax-sand-blue-slim
          - img "video_tensp" [ref=e185]
        - generic [ref=e186]:
          - heading "Quần Jeans Nam ProCOOL ICONDENIM CoolMax Sand Blue Slim" [level=3] [ref=e187]:
            - link "Quần Jeans Nam ProCOOL ICONDENIM CoolMax Sand Blue Slim" [ref=e188] [cursor=pointer]:
              - /url: /products/quan-jeans-nam-procool-icondenim-coolmax-sand-blue-slim
          - img [ref=e191]:
            - generic [ref=e193]: Siêu Mát
          - generic [ref=e194]:
            - generic [ref=e195]:
              - paragraph [ref=e196]: 689,000₫
              - generic:
                - button "Btn Quickview":
                  - img "Btn Quickview"
              - button "Thêm vào giỏ Thêm vào giỏ" [ref=e198] [cursor=pointer]:
                - generic [ref=e199]:
                  - img "Thêm vào giỏ" [ref=e200]
                  - img "Thêm vào giỏ" [ref=e201]
            - list
      - generic [ref=e203]:
        - link "video_tensp" [ref=e205] [cursor=pointer]:
          - /url: /products/quan-jeans-procool-icondenim-coolmax-performance-blue-slim
          - img "video_tensp" [ref=e206]
        - generic [ref=e207]:
          - heading "Quần Jeans Nam ProCOOL ICONDENIM CoolMax Performance Blue Slim" [level=3] [ref=e208]:
            - link "Quần Jeans Nam ProCOOL ICONDENIM CoolMax Performance Blue Slim" [ref=e209] [cursor=pointer]:
              - /url: /products/quan-jeans-procool-icondenim-coolmax-performance-blue-slim
          - img [ref=e212]:
            - generic [ref=e214]: Siêu Mát
          - generic [ref=e215]:
            - generic [ref=e216]:
              - paragraph [ref=e217]: 689,000₫
              - generic:
                - button "Btn Quickview":
                  - img "Btn Quickview"
              - button "Thêm vào giỏ Thêm vào giỏ" [ref=e219] [cursor=pointer]:
                - generic [ref=e220]:
                  - img "Thêm vào giỏ" [ref=e221]
                  - img "Thêm vào giỏ" [ref=e222]
            - list
      - generic [ref=e224]:
        - link "video_tensp" [ref=e226] [cursor=pointer]:
          - /url: /products/quan-jeans-nam-procool-icondenim-coolmax-dark-blue-slim
          - img "video_tensp" [ref=e227]
        - generic [ref=e228]:
          - heading "Quần Jeans Nam ProCOOL ICONDENIM CoolMax Dark Blue Slim" [level=3] [ref=e229]:
            - link "Quần Jeans Nam ProCOOL ICONDENIM CoolMax Dark Blue Slim" [ref=e230] [cursor=pointer]:
              - /url: /products/quan-jeans-nam-procool-icondenim-coolmax-dark-blue-slim
          - img [ref=e233]:
            - generic [ref=e235]: Siêu Mát
          - generic [ref=e236]:
            - generic [ref=e237]:
              - paragraph [ref=e238]: 689,000₫
              - generic:
                - button "Btn Quickview":
                  - img "Btn Quickview"
              - button "Thêm vào giỏ Thêm vào giỏ" [ref=e240] [cursor=pointer]:
                - generic [ref=e241]:
                  - img "Thêm vào giỏ" [ref=e242]
                  - img "Thêm vào giỏ" [ref=e243]
            - list
      - generic [ref=e245]:
        - link "video_tensp" [ref=e247] [cursor=pointer]:
          - /url: /products/quan-jeans-nam-procool-icondenim-coolmax-black-slim
          - img "video_tensp" [ref=e248]
        - generic [ref=e249]:
          - heading "Quần Jeans Nam ProCOOL ICONDENIM CoolMax Black Slim" [level=3] [ref=e250]:
            - link "Quần Jeans Nam ProCOOL ICONDENIM CoolMax Black Slim" [ref=e251] [cursor=pointer]:
              - /url: /products/quan-jeans-nam-procool-icondenim-coolmax-black-slim
          - img [ref=e254]:
            - generic [ref=e256]: Siêu Mát
          - generic [ref=e257]:
            - generic [ref=e258]:
              - paragraph [ref=e259]: 689,000₫
              - generic:
                - button "Btn Quickview":
                  - img "Btn Quickview"
              - button "Thêm vào giỏ Thêm vào giỏ" [ref=e261] [cursor=pointer]:
                - generic [ref=e262]:
                  - img "Thêm vào giỏ" [ref=e263]
                  - img "Thêm vào giỏ" [ref=e264]
            - list
      - generic [ref=e266]:
        - link "video_tensp" [ref=e268] [cursor=pointer]:
          - /url: /products/quan-jeans-nam-procool-icondenim-coolmax-light-blue-slim
          - img "video_tensp" [ref=e269]
        - generic [ref=e270]:
          - heading "Quần Jeans Nam ProCOOL ICONDENIM CoolMax Light Blue Slim" [level=3] [ref=e271]:
            - link "Quần Jeans Nam ProCOOL ICONDENIM CoolMax Light Blue Slim" [ref=e272] [cursor=pointer]:
              - /url: /products/quan-jeans-nam-procool-icondenim-coolmax-light-blue-slim
          - img [ref=e275]:
            - generic [ref=e277]: Siêu Mát
          - generic [ref=e278]:
            - generic [ref=e279]:
              - paragraph [ref=e280]: 689,000₫
              - generic:
                - button "Btn Quickview":
                  - img "Btn Quickview"
              - button "Thêm vào giỏ Thêm vào giỏ" [ref=e282] [cursor=pointer]:
                - generic [ref=e283]:
                  - img "Thêm vào giỏ" [ref=e284]
                  - img "Thêm vào giỏ" [ref=e285]
            - list
    - generic [ref=e287]:
      - img "Hinh anh cam hung" [ref=e289]
      - generic [ref=e292]:
        - generic [ref=e294]:
          - link "Áo Polo Nam ICONDENIM ProCOOL New Gen Seam Sealing" [ref=e296] [cursor=pointer]:
            - /url: /products/ao-polo-nam-icondenim-procool-new-gen-seam-sealing
            - img "Áo Polo Nam ICONDENIM ProCOOL New Gen Seam Sealing" [ref=e297]
          - generic [ref=e298]:
            - heading "Áo Polo Nam ICONDENIM ProCOOL New Gen Seam Sealing" [level=3] [ref=e299]:
              - link "Áo Polo Nam ICONDENIM ProCOOL New Gen Seam Sealing" [ref=e300] [cursor=pointer]:
                - /url: /products/ao-polo-nam-icondenim-procool-new-gen-seam-sealing
            - img [ref=e303]:
              - generic [ref=e305]: Siêu Mát
            - generic [ref=e306]:
              - generic [ref=e307]:
                - paragraph [ref=e308]: 399,000₫
                - generic:
                  - button "Btn Quickview":
                    - img "Btn Quickview"
                - button "Thêm vào giỏ Thêm vào giỏ" [ref=e310] [cursor=pointer]:
                  - generic [ref=e311]:
                    - img "Thêm vào giỏ" [ref=e312]
                    - img "Thêm vào giỏ" [ref=e313]
              - list
        - generic [ref=e315]:
          - link "Áo Polo Nam Procool ICONDENIM Seam Sealing" [ref=e317] [cursor=pointer]:
            - /url: /products/ao-polo-procool-icondenim-slim-fit-seam-sealing
            - img "Áo Polo Nam Procool ICONDENIM Seam Sealing" [ref=e318]
          - generic [ref=e319]:
            - heading "Áo Polo Nam ProCOOL ICONDENIM Seam Sealing" [level=3] [ref=e320]:
              - link "Áo Polo Nam ProCOOL ICONDENIM Seam Sealing" [ref=e321] [cursor=pointer]:
                - /url: /products/ao-polo-procool-icondenim-slim-fit-seam-sealing
            - img [ref=e324]:
              - generic [ref=e326]: Siêu Mát
            - generic [ref=e327]:
              - generic [ref=e328]:
                - paragraph [ref=e329]: 389,000₫
                - generic:
                  - button "Btn Quickview":
                    - img "Btn Quickview"
                - button "Thêm vào giỏ Thêm vào giỏ" [ref=e331] [cursor=pointer]:
                  - generic [ref=e332]:
                    - img "Thêm vào giỏ" [ref=e333]
                    - img "Thêm vào giỏ" [ref=e334]
              - list
        - generic [ref=e336]:
          - link "Áo Thun Nam Trơn ProCOOL New Gen Seam Sealing Form Slim Fit" [ref=e338] [cursor=pointer]:
            - /url: /products/ao-thun-nam-tron-procool-new-gen-form-slim-fit
            - img "Áo Thun Nam Trơn ProCOOL New Gen Seam Sealing Form Slim Fit" [ref=e339]
          - generic [ref=e340]:
            - heading "Áo Thun Nam Trơn ProCOOL New Gen Seam Sealing Form Slim Fit" [level=3] [ref=e341]:
              - link "Áo Thun Nam Trơn ProCOOL New Gen Seam Sealing Form Slim Fit" [ref=e342] [cursor=pointer]:
                - /url: /products/ao-thun-nam-tron-procool-new-gen-form-slim-fit
            - img [ref=e345]:
              - generic [ref=e347]: Siêu Mát
            - generic [ref=e348]:
              - generic [ref=e349]:
                - paragraph [ref=e350]: 329,000₫
                - generic:
                  - button "Btn Quickview":
                    - img "Btn Quickview"
                - button "Thêm vào giỏ Thêm vào giỏ" [ref=e352] [cursor=pointer]:
                  - generic [ref=e353]:
                    - img "Thêm vào giỏ" [ref=e354]
                    - img "Thêm vào giỏ" [ref=e355]
              - list
    - generic [ref=e357]:
      - img "Sản Phẩm Siêu Tính Năng" [ref=e359]
      - iframe [ref=e362]:
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
                      - link "[TechUrban®] ProCOOL™ Collection | \"MAX\" LẠNH - PRO COOL++" [ref=f1e21] [cursor=pointer]:
                        - /url: https://www.youtube.com/watch?v=5fWDLQ15j6U
                      - link "ICONDENIM®" [ref=f1e22] [cursor=pointer]:
                        - /url: /channel/UCHcZA_eIQygrUlXrwyLS08w
                        - generic [ref=f1e23]: ICONDENIM®
                    - generic [ref=f1e24]:
                      - button [ref=f1e25] [cursor=pointer]
                      - generic [ref=f1e27]:
                        - generic: ICONDENIM®
                        - generic: 1.39K subscribers
                  - generic [ref=f1e28]:
                    - button "Share" [ref=f1e31] [cursor=pointer]:
                      - generic [ref=f1e35]:
                        - img
                    - link "Watch on YouTube" [ref=f1e42] [cursor=pointer]:
                      - /url: https://www.youtube.com/watch?v=5fWDLQ15j6U
                      - generic [ref=f1e45]:
                        - text: Watch on
                        - img [ref=f1e47]:
                          - generic [ref=f1e49]:
                            - img
    - generic [ref=e364]:
      - generic [ref=e365]:
        - img
        - img [ref=e366]
      - img "Banner Lightweight Jeans" [ref=e368]
    - generic [ref=e370]:
      - img "Sản Phẩm Siêu Tính Năng" [ref=e372]
      - generic [ref=e373]:
        - generic [ref=e377] [cursor=pointer]:
          - link [ref=e379]:
            - /url: javascript:void(0)
          - link [ref=e381]:
            - /url: javascript:void(0)
          - link [ref=e383]:
            - /url: javascript:void(0)
          - link [ref=e385]:
            - /url: javascript:void(0)
          - link [ref=e387]:
            - /url: javascript:void(0)
        - button "Next" [ref=e401] [cursor=pointer]: ❯
    - img "Banner Deadpool" [ref=e404]
  - generic [ref=e408]:
    - generic [ref=e409]:
      - paragraph [ref=e410]: Đăng kí nhận tin
      - generic [ref=e412]:
        - generic [ref=e413]:
          - text: 
          - textbox "Email" [ref=e414]
        - button "Đăng ký" [ref=e415] [cursor=pointer]:
          - generic [ref=e416]: 
          - text: Đăng ký
    - list [ref=e418]:
      - listitem [ref=e419]:
        - link "Liên hệ với chúng tôi qua Zalo" [ref=e420] [cursor=pointer]:
          - /url: //zalo.me/3664144181122308942
          - img "Liên hệ với chúng tôi qua Zalo" [ref=e421]
      - listitem [ref=e422]:
        - link [ref=e423] [cursor=pointer]:
          - /url: https://www.youtube.com/@storehanghieu1608
          - generic [ref=e424]: 
      - listitem [ref=e425]:
        - link [ref=e426] [cursor=pointer]:
          - /url: https://www.instagram.com/160store
          - generic [ref=e427]: 
      - listitem [ref=e428]:
        - link [ref=e429] [cursor=pointer]:
          - /url: https://www.facebook.com/160store
          - generic [ref=e430]: 
  - contentinfo [ref=e431]:
    - generic [ref=e433]:
      - generic [ref=e434]:
        - generic [ref=e435]:
          - generic [ref=e437]: Giới thiệu
          - generic [ref=e438]:
            - paragraph [ref=e439]: 160STORE - Chuỗi Phân Phối Thời Trang Nam Chuẩn Hiệu
            - list [ref=e440]:
              - listitem [ref=e441]:
                - generic [ref=e442]: 
                - link "02871006789" [ref=e443] [cursor=pointer]:
                  - /url: tel:02871006789
              - listitem [ref=e444]:
                - generic [ref=e445]: 
                - link "cs@160store.com" [ref=e446] [cursor=pointer]:
                  - /url: mailto:cs@160store.com
              - listitem [ref=e447]:
                - generic [ref=e448]: 
                - generic [ref=e449]: "Giờ mở cửa : 08:30 - 22:00"
              - listitem [ref=e450]:
                - generic [ref=e451]: 
                - generic [ref=e452]: Nhân viên tư vấn phản hồi tin nhắn đến 24:00 (Mỗi ngày)
              - listitem [ref=e453]:
                - link [ref=e454] [cursor=pointer]:
                  - /url: http://online.gov.vn/Home/WebDetails/121880
                  - img [ref=e455]
              - listitem [ref=e456]:
                - link "DMCA.com Protection Status" [ref=e457] [cursor=pointer]:
                  - /url: https://www.dmca.com/Protection/Status.aspx?ID=9049de26-d97b-48dc-ab97-1e5fcb221fba&refurl=https://160store.com/collections/quan-jean-procool
                  - img "DMCA.com Protection Status" [ref=e458]
        - generic [ref=e459]:
          - generic [ref=e461]: CHÍNH SÁCH
          - list [ref=e463]:
            - listitem [ref=e464]:
              - link "Hướng dẫn đặt hàng" [ref=e465] [cursor=pointer]:
                - /url: /pages/huong-dan-dat-hang
            - listitem [ref=e466]:
              - paragraph [ref=e469] [cursor=pointer]: Chính sách
        - generic [ref=e471]:
          - link "ĐỊA CHỈ CỬA HÀNG (20 CH)" [ref=e474] [cursor=pointer]:
            - /url: https://www.160store.com/pages/lien-he
          - generic [ref=e476]:
            - generic [ref=e477]:
              - generic [ref=e478]:
                - img [ref=e479]
                - paragraph [ref=e480]: HỒ CHÍ MINH (10 CH)
              - paragraph [ref=e481]: 274 Ba Cu, Phường Vũng Tàu, TP.HCM
            - generic [ref=e482]:
              - generic [ref=e483]:
                - img [ref=e484]
                - paragraph [ref=e485]:
                  - text: HÀ NỘI (2 CH)
                  - generic [ref=e486]: New
              - paragraph [ref=e487]: 27 Tôn Đức Thắng - P. Văn Miếu - Quốc Tử Giám; TP. Hà Nội
            - generic [ref=e488]:
              - generic [ref=e489]:
                - img [ref=e490]
                - paragraph [ref=e491]: CẦN THƠ (2 CH)
              - paragraph [ref=e492]: Số 35 Trần Phú, Phường Ninh Kiều, TP.Cần Thơ
            - generic [ref=e493]:
              - generic [ref=e494]:
                - img [ref=e495]
                - paragraph [ref=e496]: ĐÀ NẴNG (2 CH)
              - paragraph [ref=e497]: 332 Đ. Lê Duẩn, Phường Thanh Khê, TP.Đà Nẵng
            - link "XEM TẤT CẢ CỬA HÀNG" [ref=e499] [cursor=pointer]:
              - /url: https://www.160store.com/pages/lien-he
        - generic [ref=e502]:
          - generic [ref=e503]: PHƯƠNG THỨC THANH TOÁN
          - generic [ref=e504]:
            - img "Image Spay" [ref=e505]
            - img "Image VNPay" [ref=e506]
            - img "Image Cod" [ref=e507]
      - generic [ref=e512]: BẢN QUYỀN THUỘC VỀ 160STORE
  - list [ref=e514]
  - button "back to top" [ref=e516] [cursor=pointer]:
    - img [ref=e517]
    - text: back to top
  - paragraph [ref=e523]: Bạn chưa chọn size sản phẩm!
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
            - strong: ProCOOL | Siêu Mát
          - generic:
            - generic: "Từ khóa chính:"
            - strong: procool siêu mát
          - generic:
            - generic: "Tiêu chí đạt:"
            - strong: 25/38
      - generic [ref=e524]:
        - generic [ref=e525]: "❌ Chi tiết lỗi cần khắc phục (13):"
        - generic [ref=e526]:
          - generic [ref=e527]:
            - generic [ref=e528]:
              - strong [ref=e529]: Title chứa keyword "procool siêu mát"
              - generic [ref=e530]: "1.3"
            - generic [ref=e531]: "⚠️ Lỗi: Title không chứa keyword \"procool siêu mát\""
          - generic [ref=e532]:
            - generic [ref=e533]:
              - strong [ref=e534]: "Keyword nằm ở nửa đầu Title (vị trí: N/A)"
              - generic [ref=e535]: "1.4"
            - generic [ref=e536]: "⚠️ Lỗi: Bỏ qua — keyword \"procool siêu mát\" không có trong Title"
          - generic [ref=e537]:
            - generic [ref=e538]:
              - strong [ref=e539]: "Độ dài Meta: 178 ký tự (chuẩn: 120–160)"
              - generic [ref=e540]: "2.2"
            - generic [ref=e541]: "⚠️ Lỗi: Meta description quá ngắn hoặc quá dài (178 ký tự), cần 120–160"
          - generic [ref=e542]:
            - generic [ref=e543]:
              - strong [ref=e544]: Meta description chứa keyword "procool siêu mát"
              - generic [ref=e545]: "2.3"
            - generic [ref=e546]: "⚠️ Lỗi: Meta description không chứa keyword \"procool siêu mát\""
          - generic [ref=e547]:
            - generic [ref=e548]:
              - strong [ref=e549]: "Trang có đúng 1 thẻ H1 (hiện tại: 0 thẻ)"
              - generic [ref=e550]: "3.1"
            - generic [ref=e551]: "⚠️ Lỗi: Trang không có thẻ H1 nào!"
          - generic [ref=e552]:
            - generic [ref=e553]:
              - strong [ref=e554]: H1 chứa keyword "procool siêu mát"
              - generic [ref=e555]: "3.2"
            - generic [ref=e556]: "⚠️ Lỗi: Không có H1 để kiểm tra"
          - generic [ref=e557]:
            - generic [ref=e558]:
              - strong [ref=e559]: URL chứa keyword slug "procool-sieu-mat"
              - generic [ref=e560]: "4.2"
            - generic [ref=e561]: "⚠️ Lỗi: URL \"/collections/quan-jean-procool\" không chứa keyword \"procool-sieu-mat\""
          - generic [ref=e562]:
            - generic [ref=e563]:
              - strong [ref=e564]: "Mật độ keyword: 0.00% (chuẩn: 0.5%–2.5%)"
              - generic [ref=e565]: "5.2"
            - generic [ref=e566]: "⚠️ Lỗi: Mật độ keyword quá thấp: 0.00%, cần ≥ 0.5%"
          - generic [ref=e567]:
            - generic [ref=e568]:
              - strong [ref=e569]: Keyword "procool siêu mát" xuất hiện trong 100 từ đầu
              - generic [ref=e570]: "5.3"
            - generic [ref=e571]: "⚠️ Lỗi: Keyword \"procool siêu mát\" không xuất hiện trong 100 từ đầu"
          - generic [ref=e572]:
            - generic [ref=e573]:
              - strong [ref=e574]: "100% ảnh có thuộc tính alt (thiếu: 20/118)"
              - generic [ref=e575]: "6.1"
            - generic [ref=e576]: "⚠️ Lỗi: Có 20 hình ảnh thiếu thuộc tính 'alt'"
          - generic [ref=e577]:
            - generic [ref=e578]:
              - strong [ref=e579]: Có ảnh chứa keyword "procool siêu mát" trong alt
              - generic [ref=e580]: "6.2"
            - generic [ref=e581]: "⚠️ Lỗi: Không có ảnh nào có alt chứa keyword \"procool siêu mát\""
          - generic [ref=e582]:
            - generic [ref=e583]:
              - strong [ref=e584]: "Anchor text chất lượng (lỗi: 18)"
              - generic [ref=e585]: "7.3"
            - generic [ref=e586]: "⚠️ Lỗi: 18 link có anchor text không tốt: \"\" → /, \"\" → /, \"\" → /, \"\" → /, \"\" → /products/quan-jeans-nam-procool-icondenim-dark-grey-form-slim, \"\" → /products/quan-jeans-nam-procool-icondenim-light-grey-form-slim, \"\" → /products/quan-jeans-nam-procool-icondenim-coolmax-indigo-slim, \"\" → /products/quan-jeans-nam-procool-icondenim-coolmax-sand-blue-slim, \"\" → /products/quan-jeans-procool-icondenim-coolmax-performance-blue-slim, \"\" → /products/quan-jeans-nam-procool-icondenim-coolmax-dark-blue-slim, \"\" → /products/quan-jeans-nam-procool-icondenim-coolmax-black-slim, \"\" → /products/quan-jeans-nam-procool-icondenim-coolmax-light-blue-slim, \"\" → /products/ao-polo-nam-icondenim-procool-new-gen-seam-sealing, \"\" → /products/ao-polo-procool-icondenim-slim-fit-seam-sealing, \"\" → /products/ao-thun-nam-tron-procool-new-gen-form-slim-fit, \"\" → //zalo.me/3664144181122308942, \"\" → //m.me/1042686802417049, \"\" → //zalo.me/3664144181122308942"
          - generic [ref=e587]:
            - generic [ref=e588]:
              - strong [ref=e589]: "Twitter Card tags: 0 thẻ"
              - generic [ref=e590]: "8.7"
            - generic [ref=e591]: "⚠️ Lỗi: Trang thiếu Twitter Card tags"
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 66/100 dưới ngưỡng 70%. Có 13/38 tiêu chí không đạt.
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