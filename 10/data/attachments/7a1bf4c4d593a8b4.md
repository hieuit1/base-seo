# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo.spec.ts >> SEO TIÊU CHUẨN CƠ BẢN CHO WEB >> Kiểm tra SEO Onpage: Set Đồ Nam ICONDENIM Lunary
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
            - option "Hồ Chí Minh"
            - option "Đồng Nai"
            - option "Cần Thơ"
            - option "Đà Nẵng"
            - option "Tiền Giang"
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
        - link "Đồ Hè" [ref=e108] [cursor=pointer]:
          - /url: https://160store.com/collections/do-he-nam
      - listitem [ref=e109]:
        - text: /
        - generic [ref=e110]: Set Đồ Nam ICONDENIM Lunary
    - generic [ref=e111]:
      - generic [ref=e113]:
        - generic [ref=e115]:
          - generic [ref=e117]:
            - generic [ref=e118] [cursor=pointer]:
              - generic:
                - link "Set Đồ Nam ICONDENIM Lunary" [ref=e120]:
                  - /url: javascript:void(0)
                  - img "Set Đồ Nam ICONDENIM Lunary" [ref=e121]
                - link "Set Đồ Nam ICONDENIM Lunary" [ref=e123]:
                  - /url: javascript:void(0)
                  - img "Set Đồ Nam ICONDENIM Lunary" [ref=e124]
                - link "Set Đồ Nam ICONDENIM Lunary" [ref=e126]:
                  - /url: javascript:void(0)
                  - img "Set Đồ Nam ICONDENIM Lunary" [ref=e127]
                - link "Set Đồ Nam ICONDENIM Lunary" [ref=e129]:
                  - /url: javascript:void(0)
                  - img "Set Đồ Nam ICONDENIM Lunary" [ref=e130]
                - link "Set Đồ Nam ICONDENIM Lunary" [ref=e132]:
                  - /url: javascript:void(0)
                  - img "Set Đồ Nam ICONDENIM Lunary" [ref=e133]
                - link [ref=e135]:
                  - /url: javascript:void(0)
                  - img [ref=e136]
                - link [ref=e138]:
                  - /url: javascript:void(0)
                  - img [ref=e139]
                - link [ref=e141]:
                  - /url: javascript:void(0)
                  - img [ref=e142]
                - link [ref=e144]:
                  - /url: javascript:void(0)
                  - img [ref=e145]
                - link [ref=e147]:
                  - /url: javascript:void(0)
                  - img [ref=e148]
                - link [ref=e150]:
                  - /url: javascript:void(0)
                  - img [ref=e151]
                - link [ref=e153]:
                  - /url: javascript:void(0)
                  - img [ref=e154]
            - button "Next" [ref=e155] [cursor=pointer]
          - generic [ref=e157]:
            - generic [ref=e158] [cursor=pointer]:
              - generic:
                - link "Set Đồ Nam ICONDENIM Lunary" [ref=e160]:
                  - /url: //cdn.hstatic.net/products/1000253775/set-bo-nam-icondenim-lunary-4_56b2867bbc2644759cbca702f1acf408_1024x1024.jpg
                  - img "Set Đồ Nam ICONDENIM Lunary" [ref=e161]
                - link [ref=e163]:
                  - /url: //cdn.hstatic.net/products/1000253775/set-bo-nam-icondenim-lunary-1_b7129327a430453792a8b84a58626a5b_1024x1024.jpg
                  - img [ref=e164]
                - link [ref=e166]:
                  - /url: //cdn.hstatic.net/products/1000253775/set-bo-nam-icondenim-lunary-11_2c5d946e000c4b8c9485ac45fed259e8_1024x1024.jpg
                  - img [ref=e167]
                - link [ref=e169]:
                  - /url: //cdn.hstatic.net/products/1000253775/set-bo-nam-icondenim-lunary-6_b832c31f808245d0ba451f9349927662_1024x1024.jpg
                  - img [ref=e170]
                - link [ref=e172]:
                  - /url: //cdn.hstatic.net/products/1000253775/smtn-boxy_97146171b83d41fca96c2ed68070b5b6_1024x1024.png
                  - img [ref=e173]
                - link [ref=e175]:
                  - /url: //cdn.hstatic.net/products/1000253775/short-lung-thun_regular_ae7e8d2050a942b499e45377f8d50f7c_1024x1024.png
                  - img [ref=e176]
                - link [ref=e178]:
                  - /url: //cdn.hstatic.net/products/1000253775/set-bo-nam-icondenim-lunary-2_d5280ca7097d492ab438f8c23880f223_1024x1024.jpg
                  - img [ref=e179]
                - link [ref=e181]:
                  - /url: //cdn.hstatic.net/products/1000253775/set-bo-nam-icondenim-lunary-3_f8b0022be85b48e99b99ca188ea96fa3_1024x1024.jpg
                  - img [ref=e182]
                - link [ref=e184]:
                  - /url: //cdn.hstatic.net/products/1000253775/set-bo-nam-icondenim-lunary-5_addaeda2d6824882925175c2c1f79d6b_1024x1024.jpg
                  - img [ref=e185]
                - link [ref=e187]:
                  - /url: //cdn.hstatic.net/products/1000253775/set-bo-nam-icondenim-lunary-8_0fa391eea36f44b1b122519a06d5cd8d_1024x1024.jpg
                  - img [ref=e188]
                - link [ref=e190]:
                  - /url: //cdn.hstatic.net/products/1000253775/set-bo-nam-icondenim-lunary-12_f3ab87daab114c2d8e9a34331593b9d8_1024x1024.jpg
                  - img [ref=e191]
                - link [ref=e193]:
                  - /url: //cdn.hstatic.net/products/1000253775/set-bo-nam-icondenim-lunary-14_26673e45b5054910beb8376492279009_1024x1024.jpg
                  - img [ref=e194]
            - button "Next" [ref=e195] [cursor=pointer]: ❯ Next
        - generic [ref=e196]:
          - generic [ref=e197]:
            - generic [ref=e199]:
              - heading "Set Đồ Nam ICONDENIM Lunary Còn hàng" [level=1] [ref=e201]
              - generic [ref=e204]:
                - generic [ref=e205]:
                  - img [ref=e207]
                  - img [ref=e209]
                - generic [ref=e211]:
                  - img [ref=e213]
                  - img [ref=e215]
                - generic [ref=e217]:
                  - img [ref=e219]
                  - img [ref=e221]
                - generic [ref=e223]:
                  - img [ref=e225]
                  - img [ref=e227]
                - generic [ref=e229]:
                  - img [ref=e231]
                  - img [ref=e233]
              - generic [ref=e236]:
                - generic [ref=e237]:
                  - text: "Loại:"
                  - link "Set Áo quần" [ref=e238] [cursor=pointer]:
                    - /url: /collections/types?q=set-ao-quan
                - generic [ref=e239]: "|"
                - generic [ref=e240]: "MSP: SEID0104-03"
              - generic [ref=e242]: 399,000₫ ~ 828,000₫
            - generic [ref=e244]:
              - heading "Áo Hoodie Don KHUYẾN MÃI - ONLY ONLINE" [level=3] [ref=e245]:
                - img "Áo Hoodie Don" [ref=e246]
                - text: KHUYẾN MÃI - ONLY ONLINE
              - list [ref=e248]:
                - listitem [ref=e249]:
                  - generic [ref=e250]:
                    - text: Nhập mã
                    - strong [ref=e251]: JUL20
                    - text: GIẢM 20K đơn từ 419K
              - list [ref=e253]:
                - listitem [ref=e254]:
                  - generic [ref=e255]:
                    - text: Nhập mã
                    - strong [ref=e256]: JUL50
                    - text: GIẢM 50K đơn từ 699K
              - list [ref=e258]:
                - listitem [ref=e259]:
                  - generic [ref=e260]:
                    - text: Nhập mã
                    - strong [ref=e261]: JUL80
                    - text: GIẢM 80K đơn từ 999K
              - list [ref=e263]:
                - listitem [ref=e264]:
                  - generic [ref=e265]:
                    - text: Nhập mã
                    - strong [ref=e266]: JUL120
                    - text: GIẢM 120K đơn từ 1399K
              - list [ref=e268]:
                - listitem [ref=e269]:
                  - generic [ref=e270]:
                    - strong [ref=e271]: FREESHIP
                    - text: đơn từ 399K
            - generic [ref=e272]:
              - heading "Mã giảm giá bạn có thể sử dụng:" [level=4] [ref=e273]
              - generic [ref=e274]:
                - button "JUL20" [ref=e276] [cursor=pointer]
                - button "JUL50" [ref=e278] [cursor=pointer]
                - button "JUL80" [ref=e280] [cursor=pointer]
                - button "JUL120" [ref=e282] [cursor=pointer]
            - generic [ref=e283]:
              - generic [ref=e286]:
                - generic [ref=e287]:
                  - generic [ref=e288]: "Màu sắc:"
                  - generic [ref=e289]: Mua riêng lẻ
                  - generic [ref=e290]:
                    - generic [ref=e293] [cursor=pointer]: Áo Sơmi Xanh
                    - generic [ref=e296] [cursor=pointer]: Quần Short Xanh
                - generic [ref=e297]:
                  - generic [ref=e298]:
                    - text: "Kích thước:"
                    - link "Hướng dẫn chọn size" [ref=e299] [cursor=pointer]:
                      - /url: javascript:void(0)
                      - img [ref=e300]
                      - generic [ref=e301]: Hướng dẫn chọn size
                  - generic [ref=e302]:
                    - generic [ref=e304] [cursor=pointer]: S
                    - generic [ref=e306] [cursor=pointer]: M
                    - generic [ref=e308] [cursor=pointer]: L
                    - generic [ref=e310] [cursor=pointer]: XL
              - generic [ref=e311]:
                - generic [ref=e312]: Mua theo bộ
                - generic [ref=e316] [cursor=pointer]: Áo Sơmi Xanh
            - generic [ref=e317]:
              - generic [ref=e318]:
                - generic [ref=e319]:
                  - button "–" [ref=e320] [cursor=pointer]
                  - textbox [ref=e321]: "1"
                  - button "+" [ref=e322] [cursor=pointer]
                - generic [ref=e326] [cursor=pointer]: Vui lòng chọn size và màu
              - generic [ref=e328]:
                - paragraph [ref=e329] [cursor=pointer]:
                  - img "store" [ref=e330]
                  - text: Có 11 cửa hàng còn sản phẩm này
                  - button "+" [ref=e331]
                - text:                                 
          - generic [ref=e333]:
            - generic [ref=e336]: Đổi hàng tận nhà trong vòng 15 ngày
            - generic [ref=e339]: Miễn phí vận chuyển đơn từ 399K
            - generic [ref=e342]: Bảo hành trong vòng 30 ngày
            - generic [ref=e345]: Hotline 0287.100.6789 hỗ trợ từ 8h30-24h
            - generic [ref=e348]: Giao hàng toàn quốc
            - generic [ref=e351]: Giảm thêm KHTT đến 15%
        - generic [ref=e354]:
          - tablist [ref=e355]:
            - tab "Mô tả" [selected] [ref=e356] [cursor=pointer]
            - tab "Chính Sách Giao Hàng" [selected] [ref=e357] [cursor=pointer]
            - tab "Chính Sách Đổi Hàng" [selected] [ref=e358] [cursor=pointer]
          - tabpanel [ref=e359]:
            - text: –
            - generic [ref=e360]:
              - heading "160STORE - Set Bộ Nam ICONDENIM Lunary" [level=3] [ref=e361]:
                - strong [ref=e362]: 160STORE - Set Bộ Nam ICONDENIM Lunary
              - list [ref=e363]:
                - listitem [ref=e364]:
                  - strong [ref=e365]: "Chất liệu:"
                  - text: Jacquard Jean (70% cotton, 14% viscose, 16% polyester)
                - listitem [ref=e366]:
                  - strong [ref=e367]: "Form:"
                  - text: Áo Boxy – Quần Regular
              - generic [ref=e368]:
                - separator [ref=e369]
                - paragraph [ref=e370]
              - paragraph [ref=e371]:
                - text: ►
                - strong [ref=e372]: CHẤT LIỆU JACQUARD JEAN – MỀM & THOẢI MÁI
              - paragraph [ref=e373]: Chất vải jacquard jean xử lý wash nhẹ tạo bề mặt mềm, thoáng và không quá cứng như denim truyền thống. Khi mặc cho cảm giác nhẹ người, phù hợp mặc hàng ngày.
              - paragraph [ref=e374]:
                - text: ►
                - strong [ref=e375]: FORM ÁO BOXY – THOẢI MÁI, PHONG CÁCH TRẺ TRUNG
              - paragraph [ref=e376]: Áo sơ mi tay ngắn form boxy mang lại dáng áo rộng vừa, rơi thẳng từ vai xuống thân, tạo cảm giác thoáng mát và phóng khoáng. Dễ mặc đơn hoặc khoác ngoài áo thun, phù hợp với phong cách casual, nghỉ dưỡng hoặc streetwear nhẹ.
              - paragraph [ref=e377]:
                - text: ►
                - strong [ref=e378]: QUẦN SHORT REGULAR – DỄ PHỐI, ỨNG DỤNG CAO
              - paragraph [ref=e379]: Quần short form regular vừa vặn, không ôm sát, giúp tổng thể set cân đối khi mặc cùng áo boxy. Có thể phối trọn set để tạo outfit đồng bộ, hoặc tách lẻ quần với áo thun, tanktop hay sơ mi trơn cho nhiều hoàn cảnh sử dụng khác nhau.
              - paragraph [ref=e380]
              - paragraph [ref=e381]: "####"
              - paragraph [ref=e382]
        - generic [ref=e384]:
          - generic [ref=e385]:
            - heading "ĐÁNH GIÁ SẢN PHẨM" [level=3] [ref=e386]
            - list [ref=e389]:
              - listitem [ref=e390]:
                - checkbox "5" [checked] [ref=e391] [cursor=pointer]
                - generic [ref=e392] [cursor=pointer]:
                  - generic [ref=e393]: "5"
                  - generic [ref=e394]:
                    - generic [ref=e395]: ★
                    - generic [ref=e396]: ★
                    - generic [ref=e397]: ★
                    - generic [ref=e398]: ★
                    - generic [ref=e399]: ★
              - listitem [ref=e400]:
                - checkbox "4" [ref=e401] [cursor=pointer]
                - generic [ref=e402] [cursor=pointer]:
                  - generic [ref=e403]: "4"
                  - generic [ref=e404]:
                    - generic [ref=e405]: ★
                    - generic [ref=e406]: ★
                    - generic [ref=e407]: ★
                    - generic [ref=e408]: ★
                    - generic [ref=e409]: ★
              - listitem [ref=e410]:
                - checkbox "3" [ref=e411] [cursor=pointer]
                - generic [ref=e412] [cursor=pointer]:
                  - generic [ref=e413]: "3"
                  - generic [ref=e414]:
                    - generic [ref=e415]: ★
                    - generic [ref=e416]: ★
                    - generic [ref=e417]: ★
                    - generic [ref=e418]: ★
                    - generic [ref=e419]: ★
              - listitem [ref=e420]:
                - checkbox "2" [ref=e421] [cursor=pointer]
                - generic [ref=e422] [cursor=pointer]:
                  - generic [ref=e423]: "2"
                  - generic [ref=e424]:
                    - generic [ref=e425]: ★
                    - generic [ref=e426]: ★
                    - generic [ref=e427]: ★
                    - generic [ref=e428]: ★
                    - generic [ref=e429]: ★
              - listitem [ref=e430]:
                - checkbox "1" [ref=e431] [cursor=pointer]
                - generic [ref=e432] [cursor=pointer]:
                  - generic [ref=e433]: "1"
                  - generic [ref=e434]:
                    - generic [ref=e435]: ★
                    - generic [ref=e436]: ★
                    - generic [ref=e437]: ★
                    - generic [ref=e438]: ★
                    - generic [ref=e439]: ★
          - generic [ref=e440]:
            - generic [ref=e441]:
              - generic [ref=e442]: "0"
              - generic [ref=e443]:
                - generic [ref=e444]:
                  - img [ref=e446]
                  - img [ref=e448]
                - generic [ref=e450]:
                  - img [ref=e452]
                  - img [ref=e454]
                - generic [ref=e456]:
                  - img [ref=e458]
                  - img [ref=e460]
                - generic [ref=e462]:
                  - img [ref=e464]
                  - img [ref=e466]
                - generic [ref=e468]:
                  - img [ref=e470]
                  - img [ref=e472]
            - list [ref=e476]:
              - listitem [ref=e477] [cursor=pointer]: Tất cả đánh giá (0)
            - generic:
              - list
            - text: 
        - generic [ref=e480]:
          - generic [ref=e481]:
            - heading "Sản phẩm liên quan" [level=2] [ref=e482]:
              - generic [ref=e483]: Sản phẩm liên quan
            - paragraph [ref=e484]: ///
          - generic [ref=e485]:
            - generic [ref=e487] [cursor=pointer]:
              - tabpanel [ref=e488]:
                - generic [ref=e489]:
                  - link "Set Áo Quần Nam ICONDENIM Lazy Fish" [ref=e491]:
                    - /url: /products/set-ao-quan-nam-icondenim-lazy-fish
                    - img "Set Áo Quần Nam ICONDENIM Lazy Fish" [ref=e492]
                  - generic [ref=e493]:
                    - heading "Set Áo Quần Nam ICONDENIM Lazy Fish" [level=3] [ref=e494]:
                      - link "Set Áo Quần Nam ICONDENIM Lazy Fish" [ref=e495]:
                        - /url: /products/set-ao-quan-nam-icondenim-lazy-fish
                    - img [ref=e498]:
                      - generic [ref=e499]: Hàng Mới
                    - generic [ref=e500]:
                      - generic [ref=e501]:
                        - paragraph [ref=e502]: 329,000₫ ~ 678,000₫
                        - generic:
                          - button "Btn Quickview":
                            - img "Btn Quickview"
                        - button "Thêm vào giỏ Thêm vào giỏ" [ref=e504]:
                          - generic [ref=e505]:
                            - img "Thêm vào giỏ" [ref=e506]
                            - img "Thêm vào giỏ" [ref=e507]
                      - list
              - tabpanel [ref=e508]:
                - generic [ref=e509]:
                  - link "Set Áo Quần Nam ICONDENIM Edgestitch" [ref=e511]:
                    - /url: /products/set-ao-quan-nam-icondenim-edgestitch
                    - img "Set Áo Quần Nam ICONDENIM Edgestitch" [ref=e512]
                  - generic [ref=e513]:
                    - heading "Set Áo Quần Nam ICONDENIM Edgestitch" [level=3] [ref=e514]:
                      - link "Set Áo Quần Nam ICONDENIM Edgestitch" [ref=e515]:
                        - /url: /products/set-ao-quan-nam-icondenim-edgestitch
                    - img [ref=e518]:
                      - generic [ref=e519]: Hàng Mới
                    - generic [ref=e520]:
                      - generic [ref=e521]:
                        - paragraph [ref=e522]: 349,000₫ ~ 728,000₫
                        - generic:
                          - button "Btn Quickview":
                            - img "Btn Quickview"
                        - button "Thêm vào giỏ Thêm vào giỏ" [ref=e524]:
                          - generic [ref=e525]:
                            - img "Thêm vào giỏ" [ref=e526]
                            - img "Thêm vào giỏ" [ref=e527]
                      - list
              - tabpanel [ref=e528]:
                - generic [ref=e529]:
                  - link "Set Đồ Nam Ngắn ICONDENIM Orgnls" [ref=e531]:
                    - /url: /products/set-do-nam-ngan-icondenim-orgnls
                    - img "Set Đồ Nam Ngắn ICONDENIM Orgnls" [ref=e532]
                  - generic [ref=e533]:
                    - heading "Set Đồ Nam Ngắn ICONDENIM Orgnls" [level=3] [ref=e534]:
                      - link "Set Đồ Nam Ngắn ICONDENIM Orgnls" [ref=e535]:
                        - /url: /products/set-do-nam-ngan-icondenim-orgnls
                    - img [ref=e538]:
                      - generic [ref=e539]: Hàng Mới
                    - generic [ref=e540]:
                      - generic [ref=e541]:
                        - paragraph [ref=e542]: 299,000₫ ~ 648,000₫
                        - generic:
                          - button "Btn Quickview":
                            - img "Btn Quickview"
                        - button "Thêm vào giỏ Thêm vào giỏ" [ref=e544]:
                          - generic [ref=e545]:
                            - img "Thêm vào giỏ" [ref=e546]
                            - img "Thêm vào giỏ" [ref=e547]
                      - list
              - tabpanel [ref=e548]:
                - generic [ref=e549]:
                  - link "Set Đồ Nam ICONDENIM Lunary" [ref=e551]:
                    - /url: /products/set-do-nam-icondenim-lunary
                    - img "Set Đồ Nam ICONDENIM Lunary" [ref=e552]
                  - generic [ref=e553]:
                    - heading "Set Đồ Nam ICONDENIM Lunary" [level=3] [ref=e554]:
                      - link "Set Đồ Nam ICONDENIM Lunary" [ref=e555]:
                        - /url: /products/set-do-nam-icondenim-lunary
                    - img [ref=e558]:
                      - generic [ref=e559]: Hàng Mới
                    - generic [ref=e560]:
                      - generic [ref=e561]:
                        - paragraph [ref=e562]: 399,000₫ ~ 828,000₫
                        - generic:
                          - button "Btn Quickview":
                            - img "Btn Quickview"
                        - button "Thêm vào giỏ Thêm vào giỏ" [ref=e564]:
                          - generic [ref=e565]:
                            - img "Thêm vào giỏ" [ref=e566]
                            - img "Thêm vào giỏ" [ref=e567]
                      - list
              - tabpanel [ref=e568]:
                - generic [ref=e569]:
                  - link [ref=e571]:
                    - /url: /products/set-do-nam-icondenim-distance
                    - img [ref=e572]
                  - generic [ref=e574]: 20%
                  - generic [ref=e575]:
                    - heading [level=3] [ref=e576]:
                      - link [ref=e577]:
                        - /url: /products/set-do-nam-icondenim-distance
                        - text: Set Đồ Nam ICONDENIM Distance
                    - img [ref=e580]:
                      - generic [ref=e582]: Sale
                    - generic [ref=e584]:
                      - paragraph [ref=e585]: 319,200₫ ~ 662,400₫
                      - button [ref=e587]:
                        - generic [ref=e588]:
                          - img [ref=e589]
                          - img [ref=e590]
              - tabpanel [ref=e591]:
                - generic [ref=e592]:
                  - link [ref=e594]:
                    - /url: /products/set-do-nam-icondenim-orgnls-2
                    - img [ref=e595]
                  - generic [ref=e596]:
                    - heading [level=3] [ref=e597]:
                      - link [ref=e598]:
                        - /url: /products/set-do-nam-icondenim-orgnls-2
                        - text: Set Đồ Nam ICONDENIM ORGNLS
                    - img [ref=e601]:
                      - generic [ref=e602]: Hàng Mới
                    - generic [ref=e604]:
                      - paragraph [ref=e605]: 349,000₫ ~ 728,000₫
                      - button [ref=e607]:
                        - generic [ref=e608]:
                          - img [ref=e609]
                          - img [ref=e610]
              - tabpanel [ref=e611]:
                - generic [ref=e612]:
                  - link [ref=e614]:
                    - /url: /products/set-do-nam-icondenim-cool-super-star-bear
                    - img [ref=e615]
                  - generic [ref=e617]: 40%
                  - generic [ref=e618]:
                    - heading [level=3] [ref=e619]:
                      - link [ref=e620]:
                        - /url: /products/set-do-nam-icondenim-cool-super-star-bear
                        - text: Set Đồ Nam ICONDENIM Cool Super Star Bear
                    - img [ref=e623]:
                      - generic [ref=e625]: Sale
                    - generic [ref=e627]:
                      - paragraph [ref=e628]: 199,000₫ ~ 398,000₫
                      - button [ref=e630]:
                        - generic [ref=e631]:
                          - img [ref=e632]
                          - img [ref=e633]
              - tabpanel [ref=e634]:
                - generic [ref=e635]:
                  - link [ref=e637]:
                    - /url: /products/set-do-nam-icondenim-orgnls-1
                    - img [ref=e638]
                  - generic [ref=e639]:
                    - heading [level=3] [ref=e640]:
                      - link [ref=e641]:
                        - /url: /products/set-do-nam-icondenim-orgnls-1
                        - text: Set Đồ Nam ICONDENIM Orgnls
                    - img [ref=e644]:
                      - generic [ref=e645]: Hàng Mới
                    - generic [ref=e647]:
                      - paragraph [ref=e648]: 349,000₫ ~ 698,000₫
                      - button [ref=e650]:
                        - generic [ref=e651]:
                          - img [ref=e652]
                          - img [ref=e653]
              - tabpanel [ref=e654]:
                - generic [ref=e655]:
                  - link [ref=e657]:
                    - /url: /products/set-do-nam-icondenim-golden-script
                    - img [ref=e658]
                  - generic [ref=e660]: 50%
                  - generic [ref=e661]:
                    - heading [level=3] [ref=e662]:
                      - link [ref=e663]:
                        - /url: /products/set-do-nam-icondenim-golden-script
                        - text: Set Đồ Nam ICONDENIM Golden Script
                    - img [ref=e666]:
                      - generic [ref=e668]: Hot Deal
                    - generic [ref=e670]:
                      - paragraph [ref=e671]: 149,000₫ ~ 298,000₫
                      - button [ref=e673]:
                        - generic [ref=e674]:
                          - img [ref=e675]
                          - img [ref=e676]
              - tabpanel [ref=e677]:
                - generic [ref=e678]:
                  - link [ref=e680]:
                    - /url: /products/set-do-nam-icondenim-orgnls-est-19
                    - img [ref=e681]
                  - generic [ref=e683]: 33%
                  - generic [ref=e684]:
                    - heading [level=3] [ref=e685]:
                      - link [ref=e686]:
                        - /url: /products/set-do-nam-icondenim-orgnls-est-19
                        - text: Set Đồ Nam ICONDENIM ORGNLS EST.19
                    - img [ref=e689]:
                      - generic [ref=e691]: Sale
                    - generic [ref=e693]:
                      - paragraph [ref=e694]: 149,000₫ ~ 348,000₫
                      - button [ref=e696]:
                        - generic [ref=e697]:
                          - img [ref=e698]
                          - img [ref=e699]
            - button "Next" [ref=e700] [cursor=pointer]
            - tablist [ref=e704]:
              - tab "1 of 3" [selected] [ref=e705] [cursor=pointer]: "1"
              - tab "2 of 3" [ref=e706] [cursor=pointer]: "2"
              - tab "3 of 3" [ref=e707] [cursor=pointer]: "3"
      - generic [ref=e708]:
        - generic [ref=e709]:
          - heading "Đánh giá" [level=4] [ref=e710]
          - link "" [ref=e711] [cursor=pointer]:
            - /url: javascript:void(0)
            - generic [ref=e712]: 
        - generic [ref=e713]:
          - generic [ref=e714]:
            - generic [ref=e715]:
              - generic [ref=e717]: "0"
              - generic [ref=e718]:
                - generic [ref=e719]: 
                - generic [ref=e720]: 
                - generic [ref=e721]: 
                - generic [ref=e722]: 
                - generic [ref=e723]: 
            - generic [ref=e725]:
              - heading "Hàng có vừa không?" [level=4] [ref=e726]
              - generic [ref=e727]:
                - generic [ref=e728]:
                  - generic [ref=e729]: Nhỏ
                  - generic [ref=e731]: 0%
                - generic [ref=e732]:
                  - generic [ref=e733]: Đúng với kích thước
                  - generic [ref=e735]: 0%
                - generic [ref=e736]:
                  - generic [ref=e737]: Lớn
                  - generic [ref=e739]: 0%
          - generic [ref=e740]:
            - list [ref=e742]:
              - listitem [ref=e743]:
                - generic [ref=e744]: Tất cả
              - listitem [ref=e745]:
                - generic [ref=e746]: Có hình ảnh
            - list [ref=e748]:
              - listitem [ref=e749]:
                - generic [ref=e751]:
                  - generic [ref=e752]: 
                  - generic [ref=e753]: 
                  - generic [ref=e754]: 
                  - generic [ref=e755]: 
                  - generic [ref=e756]: 
              - listitem [ref=e757]:
                - generic [ref=e759]:
                  - generic [ref=e760]: 
                  - generic [ref=e761]: 
                  - generic [ref=e762]: 
                  - generic [ref=e763]: 
              - listitem [ref=e764]:
                - generic [ref=e766]:
                  - generic [ref=e767]: 
                  - generic [ref=e768]: 
                  - generic [ref=e769]: 
              - listitem [ref=e770]:
                - generic [ref=e772]:
                  - generic [ref=e773]: 
                  - generic [ref=e774]: 
              - listitem [ref=e775]:
                - generic [ref=e778]: 
          - list [ref=e780]:
            - listitem [ref=e781]: Xem thêm
          - generic [ref=e782]:
            - generic [ref=e783]:
              - link "" [ref=e784] [cursor=pointer]:
                - /url: javascript:void(0)
                - generic [ref=e785]: 
              - heading "Bộ lọc" [level=3] [ref=e786]
            - generic [ref=e787]:
              - list [ref=e789]:
                - listitem [ref=e790]:
                  - generic [ref=e791]: Áo Sơmi Xanh-0104
                - listitem [ref=e792]:
                  - generic [ref=e793]: Quần Short Xanh-0104
              - list [ref=e795]:
                - listitem [ref=e796]:
                  - generic [ref=e797]: S
                - listitem [ref=e798]:
                  - generic [ref=e799]: M
                - listitem [ref=e800]:
                  - generic [ref=e801]: L
                - listitem [ref=e802]:
                  - generic [ref=e803]: XL
              - list [ref=e805]:
                - listitem [ref=e806]:
                  - generic [ref=e807]:
                    - text: "5"
                    - generic [ref=e808]: 
                - listitem [ref=e809]:
                  - generic [ref=e810]:
                    - text: "4"
                    - generic [ref=e811]: 
                - listitem [ref=e812]:
                  - generic [ref=e813]:
                    - text: "3"
                    - generic [ref=e814]: 
                - listitem [ref=e815]:
                  - generic [ref=e816]:
                    - text: "2"
                    - generic [ref=e817]: 
                - listitem [ref=e818]:
                  - generic [ref=e819]:
                    - text: "1"
                    - generic [ref=e820]: 
            - generic [ref=e822]:
              - link [ref=e823] [cursor=pointer]:
                - /url: javascript:void(0)
                - generic [ref=e824]: 
              - link "Đã xong" [ref=e825] [cursor=pointer]:
                - /url: javascript:void(0)
      - text:                                 
  - generic [ref=e829]:
    - generic [ref=e830]:
      - paragraph [ref=e831]: Đăng kí nhận tin
      - generic [ref=e833]:
        - generic [ref=e834]:
          - text: 
          - textbox "Email" [ref=e835]
        - button "Đăng ký" [ref=e836] [cursor=pointer]:
          - generic [ref=e837]: 
          - text: Đăng ký
    - list [ref=e839]:
      - listitem [ref=e840]:
        - link "Liên hệ với chúng tôi qua Zalo" [ref=e841] [cursor=pointer]:
          - /url: //zalo.me/3664144181122308942
          - img "Liên hệ với chúng tôi qua Zalo" [ref=e842]
      - listitem [ref=e843]:
        - link [ref=e844] [cursor=pointer]:
          - /url: https://www.youtube.com/@storehanghieu1608
          - generic [ref=e845]: 
      - listitem [ref=e846]:
        - link [ref=e847] [cursor=pointer]:
          - /url: https://www.instagram.com/160store
          - generic [ref=e848]: 
      - listitem [ref=e849]:
        - link [ref=e850] [cursor=pointer]:
          - /url: https://www.facebook.com/160store
          - generic [ref=e851]: 
  - contentinfo [ref=e852]:
    - generic [ref=e854]:
      - generic [ref=e855]:
        - generic [ref=e856]:
          - generic [ref=e858]: Giới thiệu
          - generic [ref=e859]:
            - paragraph [ref=e860]: 160STORE - Chuỗi Phân Phối Thời Trang Nam Chuẩn Hiệu
            - list [ref=e861]:
              - listitem [ref=e862]:
                - generic [ref=e863]: 
                - link "02871006789" [ref=e864] [cursor=pointer]:
                  - /url: tel:02871006789
              - listitem [ref=e865]:
                - generic [ref=e866]: 
                - link "cs@160store.com" [ref=e867] [cursor=pointer]:
                  - /url: mailto:cs@160store.com
              - listitem [ref=e868]:
                - generic [ref=e869]: 
                - generic [ref=e870]: "Giờ mở cửa : 08:30 - 22:00"
              - listitem [ref=e871]:
                - generic [ref=e872]: 
                - generic [ref=e873]: Nhân viên tư vấn phản hồi tin nhắn đến 24:00 (Mỗi ngày)
              - listitem [ref=e874]:
                - link [ref=e875] [cursor=pointer]:
                  - /url: http://online.gov.vn/nen-tang/1a643809-3f92-4419-944d-c2d4fdffb78b
                  - img [ref=e876]
              - listitem [ref=e877]:
                - link "DMCA.com Protection Status" [ref=e878] [cursor=pointer]:
                  - /url: https://www.dmca.com/Protection/Status.aspx?ID=9049de26-d97b-48dc-ab97-1e5fcb221fba&refurl=https://160store.com/products/set-do-nam-icondenim-lunary
                  - img "DMCA.com Protection Status" [ref=e879]
        - generic [ref=e880]:
          - generic [ref=e882]: CHÍNH SÁCH
          - list [ref=e884]:
            - listitem [ref=e885]:
              - link "Hướng dẫn đặt hàng" [ref=e886] [cursor=pointer]:
                - /url: /pages/huong-dan-dat-hang
            - listitem [ref=e887]:
              - paragraph [ref=e890] [cursor=pointer]: Chính sách
        - generic [ref=e892]:
          - link "ĐỊA CHỈ CỬA HÀNG (20 CH)" [ref=e895] [cursor=pointer]:
            - /url: https://www.160store.com/pages/lien-he
          - generic [ref=e897]:
            - generic [ref=e898]:
              - generic [ref=e899]:
                - img [ref=e900]
                - paragraph [ref=e901]: HỒ CHÍ MINH (10 CH)
              - paragraph [ref=e902]: 274 Ba Cu, Phường Vũng Tàu, TP.HCM
            - generic [ref=e903]:
              - generic [ref=e904]:
                - img [ref=e905]
                - paragraph [ref=e906]:
                  - text: HÀ NỘI (2 CH)
                  - generic [ref=e907]: New
              - paragraph [ref=e908]: 27 Tôn Đức Thắng - P. Văn Miếu - Quốc Tử Giám; TP. Hà Nội
            - generic [ref=e909]:
              - generic [ref=e910]:
                - img [ref=e911]
                - paragraph [ref=e912]: CẦN THƠ (2 CH)
              - paragraph [ref=e913]: Số 35 Trần Phú, Phường Ninh Kiều, TP.Cần Thơ
            - generic [ref=e914]:
              - generic [ref=e915]:
                - img [ref=e916]
                - paragraph [ref=e917]: ĐÀ NẴNG (2 CH)
              - paragraph [ref=e918]: 332 Đ. Lê Duẩn, Phường Thanh Khê, TP.Đà Nẵng
            - link "XEM TẤT CẢ CỬA HÀNG" [ref=e920] [cursor=pointer]:
              - /url: https://www.160store.com/pages/lien-he
        - generic [ref=e923]:
          - generic [ref=e924]: PHƯƠNG THỨC THANH TOÁN
          - generic [ref=e925]:
            - img "Image Spay" [ref=e926]
            - img "Image VNPay" [ref=e927]
            - img "Image Cod" [ref=e928]
      - generic [ref=e933]: BẢN QUYỀN THUỘC VỀ 160STORE
  - list [ref=e935]
  - text: 
  - button "back to top" [ref=e937] [cursor=pointer]:
    - img [ref=e938]
    - text: back to top
  - paragraph [ref=e944]: Bạn chưa chọn size sản phẩm!
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
            - strong: Set Đồ Nam ICONDENIM Lunary
          - generic:
            - generic: "Từ khóa chính:"
            - strong: set đồ nam icondenim
          - generic:
            - generic: "Tiêu chí đạt:"
            - strong: 26/38
      - generic:
        - generic: "❌ Chi tiết lỗi cần khắc phục (12):"
        - generic:
          - generic:
            - generic:
              - strong: "1.2 — Độ dài Title: 27 ký tự (chuẩn: 40–65)"
              - generic: "1.2"
            - generic: "⚠️ Lỗi: Title quá ngắn hoặc quá dài (27 ký tự), cần 40–65"
          - generic:
            - generic:
              - strong: "2.2 — Độ dài Meta: 234 ký tự (chuẩn: 120–160)"
              - generic: "2.2"
            - generic: "⚠️ Lỗi: Meta description quá ngắn hoặc quá dài (234 ký tự), cần 120–160"
          - generic:
            - generic:
              - strong: 2.3 — Meta description chứa keyword "set đồ nam icondenim"
              - generic: "2.3"
            - generic: "⚠️ Lỗi: Meta description không chứa keyword \"set đồ nam icondenim\""
          - generic:
            - generic:
              - strong: "3.1 — Trang có đúng 1 thẻ H1 (hiện tại: 59 thẻ)"
              - generic: "3.1"
            - generic: "⚠️ Lỗi: Trang có 59 thẻ H1, bắt buộc đúng 1 thẻ duy nhất!"
          - generic:
            - generic:
              - strong: 3.3 — Heading phân cấp hợp lệ (2 lỗi)
              - generic: "3.3"
            - generic: "⚠️ Lỗi: Heading phân cấp sai: Nhảy cấp từ H1 → H3 (\"KHUYẾN MÃI - ONLY ONLINE\"); Nhảy cấp từ H2 → H4 (\"Đánh giá\")"
          - generic:
            - generic:
              - strong: 4.2 — URL chứa keyword slug "set-đồ-nam-icondenim"
              - generic: "4.2"
            - generic: "⚠️ Lỗi: URL \"/products/set-do-nam-icondenim-lunary\" không chứa keyword \"set-đồ-nam-icondenim\""
          - generic:
            - generic:
              - strong: "5.2 — Mật độ keyword: 0.12% (chuẩn: 0.5%–2.5%)"
              - generic: "5.2"
            - generic: "⚠️ Lỗi: Mật độ keyword quá thấp: 0.12%, cần ≥ 0.5%"
          - generic:
            - generic:
              - strong: 5.3 — Keyword "set đồ nam icondenim" xuất hiện trong 100 từ đầu
              - generic: "5.3"
            - generic: "⚠️ Lỗi: Keyword \"set đồ nam icondenim\" không xuất hiện trong 100 từ đầu"
          - generic:
            - generic:
              - strong: "6.1 — 100% ảnh có thuộc tính alt (thiếu: 33/72)"
              - generic: "6.1"
            - generic: "⚠️ Lỗi: Có 33 hình ảnh thiếu thuộc tính 'alt'"
          - generic:
            - generic:
              - strong: "7.3 — Anchor text chất lượng (lỗi: 19)"
              - generic: "7.3"
            - generic: "⚠️ Lỗi: 19 link có anchor text không tốt: \"\" → /, \"\" → /, \"\" → /, \"\" → /, \"\" → //cdn.hstatic.net/products/1000253775/set-bo-nam-icondenim-lunary-4_56b2867bbc2644759cbca702f1acf408_1024x1024.jpg, \"\" → //cdn.hstatic.net/products/1000253775/set-bo-nam-icondenim-lunary-1_b7129327a430453792a8b84a58626a5b_1024x1024.jpg, \"\" → //cdn.hstatic.net/products/1000253775/set-bo-nam-icondenim-lunary-11_2c5d946e000c4b8c9485ac45fed259e8_1024x1024.jpg, \"\" → //cdn.hstatic.net/products/1000253775/set-bo-nam-icondenim-lunary-6_b832c31f808245d0ba451f9349927662_1024x1024.jpg, \"\" → //cdn.hstatic.net/products/1000253775/smtn-boxy_97146171b83d41fca96c2ed68070b5b6_1024x1024.png, \"\" → //cdn.hstatic.net/products/1000253775/short-lung-thun_regular_ae7e8d2050a942b499e45377f8d50f7c_1024x1024.png, \"\" → //cdn.hstatic.net/products/1000253775/set-bo-nam-icondenim-lunary-2_d5280ca7097d492ab438f8c23880f223_1024x1024.jpg, \"\" → //cdn.hstatic.net/products/1000253775/set-bo-nam-icondenim-lunary-3_f8b0022be85b48e99b99ca188ea96fa3_1024x1024.jpg, \"\" → //cdn.hstatic.net/products/1000253775/set-bo-nam-icondenim-lunary-5_addaeda2d6824882925175c2c1f79d6b_1024x1024.jpg, \"\" → //cdn.hstatic.net/products/1000253775/set-bo-nam-icondenim-lunary-8_0fa391eea36f44b1b122519a06d5cd8d_1024x1024.jpg, \"\" → //cdn.hstatic.net/products/1000253775/set-bo-nam-icondenim-lunary-12_f3ab87daab114c2d8e9a34331593b9d8_1024x1024.jpg, \"\" → //cdn.hstatic.net/products/1000253775/set-bo-nam-icondenim-lunary-14_26673e45b5054910beb8376492279009_1024x1024.jpg, \"\" → //zalo.me/3664144181122308942, \"\" → //m.me/1042686802417049, \"\" → //zalo.me/3664144181122308942"
          - generic:
            - generic:
              - strong: "8.7 — Twitter Card tags: 0 thẻ"
              - generic: "8.7"
            - generic: "⚠️ Lỗi: Trang thiếu Twitter Card tags"
          - generic:
            - generic:
              - strong: "11.2 — Mixed Content: 2 tài nguyên HTTP"
              - generic: "11.2"
            - generic: "⚠️ Lỗi: Phát hiện 2 tài nguyên HTTP trên HTTPS"
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