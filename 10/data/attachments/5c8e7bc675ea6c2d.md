# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo.spec.ts >> SEO TIÊU CHUẨN CƠ BẢN CHO WEB >> Kiểm tra SEO Onpage: Set Đồ Nam ICONDENIM ICDN PanelPlay
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
            - option "Hồ Chí Minh"
            - option "Đồng Nai"
            - option "Đà Nẵng"
            - option "Hà Nội"
            - option "Cần Thơ"
            - option "Bình Dương"
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
        - generic [ref=e110]: Set Đồ Nam ICONDENIM ICDN PanelPlay
    - generic [ref=e111]:
      - generic [ref=e113]:
        - generic [ref=e115]:
          - generic [ref=e117]:
            - generic [ref=e118] [cursor=pointer]:
              - generic:
                - link [ref=e120]:
                  - /url: javascript:void(0)
                  - img [ref=e121]
                  - img [ref=e122]
                - link "Set Đồ Nam ICONDENIM ICDN PanelPlay" [ref=e124]:
                  - /url: javascript:void(0)
                  - img "Set Đồ Nam ICONDENIM ICDN PanelPlay" [ref=e125]
                - link "Set Đồ Nam ICONDENIM ICDN PanelPlay" [ref=e127]:
                  - /url: javascript:void(0)
                  - img "Set Đồ Nam ICONDENIM ICDN PanelPlay" [ref=e128]
                - link "Set Đồ Nam ICONDENIM ICDN PanelPlay" [ref=e130]:
                  - /url: javascript:void(0)
                  - img "Set Đồ Nam ICONDENIM ICDN PanelPlay" [ref=e131]
                - link "Set Đồ Nam ICONDENIM ICDN PanelPlay" [ref=e133]:
                  - /url: javascript:void(0)
                  - img "Set Đồ Nam ICONDENIM ICDN PanelPlay" [ref=e134]
                - link [ref=e136]:
                  - /url: javascript:void(0)
                  - img [ref=e137]
                - link [ref=e139]:
                  - /url: javascript:void(0)
                  - img [ref=e140]
                - link [ref=e142]:
                  - /url: javascript:void(0)
                  - img [ref=e143]
                - link [ref=e145]:
                  - /url: javascript:void(0)
                  - img [ref=e146]
                - link [ref=e148]:
                  - /url: javascript:void(0)
                  - img [ref=e149]
                - link [ref=e151]:
                  - /url: javascript:void(0)
                  - img [ref=e152]
            - button "Next" [ref=e153] [cursor=pointer]
          - generic [ref=e155]:
            - generic [ref=e156] [cursor=pointer]:
              - generic:
                - link "YouTube video player" [ref=e158]:
                  - /url: https://www.youtube.com/embed/cFdd0BRZ7Kk?controls=1&start=0&rel=0&autoplay=1&mute=1&loop=1&autohide=1&showinfo=1&playlist=cFdd0BRZ7Kk
                  - iframe [ref=e159]:
                    - generic "YouTube Video Player" [ref=f6e3]:
                      - alert [ref=f6e5]:
                        - generic [ref=f6e6]:
                          - generic [ref=f6e7]:
                            - img
                          - generic [ref=f6e8]:
                            - generic [ref=f6e9]: Sign in to confirm you’re not a bot
                            - generic [ref=f6e10]:
                              - generic [ref=f6e11]:
                                - text: This helps protect our community.
                                - link "Learn more" [ref=f6e12] [cursor=pointer]:
                                  - /url: https://support.google.com/youtube/answer/3037019#zippy=%2Ccheck-that-youre-signed-into-youtube
                              - generic [ref=f6e13]: Sign in
                        - link "Visit YouTube to search for more videos" [ref=f6e14] [cursor=pointer]:
                          - /url: https://www.youtube.com
                          - img
                - link [ref=e161]:
                  - /url: //product.hstatic.net/1000253775/product/160_set_bo_081-10_6ce372768e004cfa81e18cc0d1268f8c_1024x1024.jpg
                  - img [ref=e162]
                - link [ref=e164]:
                  - /url: //product.hstatic.net/1000253775/product/160_set_bo_081-12_00b4618c98244346a8bfcb311975874e_1024x1024.jpg
                  - img [ref=e165]
                - link [ref=e167]:
                  - /url: //product.hstatic.net/1000253775/product/160_set_bo_081-13_7ec12c7b13d1488ea7525301a2b1d093_1024x1024.jpg
                  - img [ref=e168]
                - link [ref=e170]:
                  - /url: //cdn.hstatic.net/products/1000253775/ao-thun-form-regular_a09b5bf2266044c3a74cd0777b01a82f_1024x1024.png
                  - img [ref=e171]
                - link [ref=e173]:
                  - /url: //product.hstatic.net/1000253775/product/160_set_bo_081-3_6749f4ff887642a7a497c03381828d78_1024x1024.jpg
                  - img [ref=e174]
                - link [ref=e176]:
                  - /url: //cdn.hstatic.net/products/1000253775/quan-short-lung-thun-form-regular_ef5c8b8d0ef44acf969c6938cf1dbdd5_1024x1024.png
                  - img [ref=e177]
                - link [ref=e179]:
                  - /url: //product.hstatic.net/1000253775/product/160_set_bo_081-4_5ab7a3e7a4214555a3db30c31f4d8097_1024x1024.jpg
                  - img [ref=e180]
                - link [ref=e182]:
                  - /url: //product.hstatic.net/1000253775/product/160_set_bo_081-6_5c872e374c1e48ca81f24577d7110715_1024x1024.jpg
                  - img [ref=e183]
                - link [ref=e185]:
                  - /url: //product.hstatic.net/1000253775/product/160_set_bo_081-1_22503d36dfc24db18e6f4745737fed06_1024x1024.jpg
                  - img [ref=e186]
                - link [ref=e188]:
                  - /url: //product.hstatic.net/1000253775/product/160_set_bo_081-11_3dbf248365e545cbb517579adaed9db2_1024x1024.jpg
                  - img [ref=e189]
            - button "Next" [ref=e190] [cursor=pointer]: ❯ Next
        - generic [ref=e191]:
          - generic [ref=e192]:
            - generic [ref=e194]:
              - heading "Set Đồ Nam ICONDENIM ICDN PanelPlay Còn hàng" [level=1] [ref=e196]
              - generic [ref=e199]:
                - generic [ref=e200]:
                  - img [ref=e202]
                  - img [ref=e204]
                - generic [ref=e206]:
                  - img [ref=e208]
                  - img [ref=e210]
                - generic [ref=e212]:
                  - img [ref=e214]
                  - img [ref=e216]
                - generic [ref=e218]:
                  - img [ref=e220]
                  - img [ref=e222]
                - generic [ref=e224]:
                  - img [ref=e226]
                  - img [ref=e228]
              - generic [ref=e231]:
                - generic [ref=e232]:
                  - text: "Loại:"
                  - link "Set Áo quần" [ref=e233] [cursor=pointer]:
                    - /url: /collections/types?q=set-ao-quan
                - generic [ref=e234]: "|"
                - generic [ref=e235]: "MSP: SEID0081-05"
              - generic [ref=e236]:
                - generic [ref=e237]: 199,000₫ ~ 398,000₫
                - generic [ref=e238]: 33%
            - generic [ref=e240]:
              - heading "Áo Hoodie Don KHUYẾN MÃI - ONLY ONLINE" [level=3] [ref=e241]:
                - img "Áo Hoodie Don" [ref=e242]
                - text: KHUYẾN MÃI - ONLY ONLINE
              - list [ref=e244]:
                - listitem [ref=e245]:
                  - generic [ref=e246]:
                    - text: Nhập mã
                    - strong [ref=e247]: JUL20
                    - text: GIẢM 20K đơn từ 419K
              - list [ref=e249]:
                - listitem [ref=e250]:
                  - generic [ref=e251]:
                    - text: Nhập mã
                    - strong [ref=e252]: JUL50
                    - text: GIẢM 50K đơn từ 699K
              - list [ref=e254]:
                - listitem [ref=e255]:
                  - generic [ref=e256]:
                    - text: Nhập mã
                    - strong [ref=e257]: JUL80
                    - text: GIẢM 80K đơn từ 999K
              - list [ref=e259]:
                - listitem [ref=e260]:
                  - generic [ref=e261]:
                    - text: Nhập mã
                    - strong [ref=e262]: JUL120
                    - text: GIẢM 120K đơn từ 1399K
              - list [ref=e264]:
                - listitem [ref=e265]:
                  - generic [ref=e266]:
                    - strong [ref=e267]: FREESHIP
                    - text: đơn từ 399K
            - generic [ref=e268]:
              - heading "Mã giảm giá bạn có thể sử dụng:" [level=4] [ref=e269]
              - generic [ref=e270]:
                - button "JUL20" [ref=e272] [cursor=pointer]
                - button "JUL50" [ref=e274] [cursor=pointer]
                - button "JUL80" [ref=e276] [cursor=pointer]
                - button "JUL120" [ref=e278] [cursor=pointer]
            - generic [ref=e279]:
              - generic [ref=e282]:
                - generic [ref=e283]:
                  - generic [ref=e284]: "Màu sắc:"
                  - generic [ref=e285]: Mua riêng lẻ
                  - generic [ref=e286]:
                    - generic [ref=e289] [cursor=pointer]: Áo Thun Trắng
                    - generic [ref=e292] [cursor=pointer]: Quần Short Xanh Navy
                - generic [ref=e293]:
                  - generic [ref=e294]:
                    - text: "Kích thước:"
                    - link "Hướng dẫn chọn size" [ref=e295] [cursor=pointer]:
                      - /url: javascript:void(0)
                      - img [ref=e296]
                      - generic [ref=e297]: Hướng dẫn chọn size
                  - generic [ref=e298]:
                    - generic [ref=e300] [cursor=pointer]: S
                    - generic [ref=e302] [cursor=pointer]: M
                    - generic [ref=e304] [cursor=pointer]: L
                    - generic [ref=e306] [cursor=pointer]: XL
              - generic [ref=e307]:
                - generic [ref=e308]: Mua theo bộ
                - generic [ref=e312] [cursor=pointer]: Áo Thun Trắng
            - generic [ref=e313]:
              - generic [ref=e314]:
                - generic [ref=e315]:
                  - button "–" [ref=e316] [cursor=pointer]
                  - textbox [ref=e317]: "1"
                  - button "+" [ref=e318] [cursor=pointer]
                - generic [ref=e322] [cursor=pointer]: Vui lòng chọn size và màu
              - generic [ref=e324]:
                - paragraph [ref=e325] [cursor=pointer]:
                  - img "store" [ref=e326]
                  - text: Có 14 cửa hàng còn sản phẩm này
                  - button "+" [ref=e327]
                - text:                                          
          - generic [ref=e329]:
            - generic [ref=e332]: Miễn phí vận chuyển đơn từ 399K
            - generic [ref=e335]: Hotline 0287.100.6789 hỗ trợ từ 8h30-24h
            - generic [ref=e338]: Giao hàng toàn quốc
            - generic [ref=e341]: Giảm thêm KHTT đến 15%
        - generic [ref=e344]:
          - tablist [ref=e345]:
            - tab "Mô tả" [selected] [ref=e346] [cursor=pointer]
            - tab "Chính Sách Giao Hàng" [selected] [ref=e347] [cursor=pointer]
            - tab "Chính Sách Đổi Hàng" [selected] [ref=e348] [cursor=pointer]
          - tabpanel [ref=e349]:
            - text: –
            - generic [ref=e350]:
              - paragraph [ref=e351]:
                - strong [ref=e352]: 160STORE - Set Đồ Nam ICONDENIM ICND Panelplay
              - list [ref=e353]:
                - listitem [ref=e354]:
                  - strong [ref=e355]: "Chất liệu Áo:"
                  - text: Cotton
                - listitem [ref=e356]:
                  - strong [ref=e357]: "Chất liệu Quần:"
                  - text: Nỉ chân cua TC
                - listitem [ref=e358]:
                  - strong [ref=e359]: "Form:"
                  - text: Regular
              - separator [ref=e360]
              - paragraph [ref=e361]
              - paragraph [ref=e362]:
                - strong [ref=e363]: ▶️CHẤT VẢI THOÁNG MÁT, MẶC ÊM CẢ NGÀY
              - paragraph [ref=e364]: Áo sử dụng chất vải cotton mềm mại, mịn tay và thấm hút tốt, giúp cơ thể luôn khô thoáng trong ngày dài vận động. Quần short nỉ chân cua co giãn nhẹ, giữ form tốt, mang lại cảm giác dễ chịu cho từng chuyển động.
              - paragraph [ref=e365]:
                - strong [ref=e366]: ▶️ THIẾT KẾ PHỐI MÀU NĂNG ĐỘNG
              - paragraph [ref=e367]: Set đồ nổi bật với các chi tiết phối màu đối lập ở bo cổ, tay áo và lai quần – tạo hiệu ứng thị giác nổi bật, trẻ trung. Logo ICND thêu nổi sắc nét trước ngực và ở thân quần, tăng độ nhận diện và nhấn mạnh tinh thần thể thao thời thượng.
              - paragraph [ref=e368]:
                - strong [ref=e369]: ▶️ FORM REGULAR DỄ MẶC – LINH HOẠT TRONG MỌI HOẠT ĐỘNG
              - paragraph [ref=e370]: Form regular thoải mái, không ôm bó, dễ phối cùng giày sneaker, áo khoác nhẹ hoặc mũ lưỡi trai. Phù hợp để mặc đi dạo phố, tập luyện thể thao hoặc khi ở nhà nhưng vẫn giữ sự được nét chỉn chu và năng động.
              - paragraph [ref=e371]
              - strong [ref=e372]: 🔍SEID0081
              - paragraph [ref=e373]: "####"
        - generic [ref=e375]:
          - generic [ref=e376]:
            - heading "ĐÁNH GIÁ SẢN PHẨM" [level=3] [ref=e377]
            - list [ref=e380]:
              - listitem [ref=e381]:
                - checkbox "5" [checked] [ref=e382] [cursor=pointer]
                - generic [ref=e383] [cursor=pointer]:
                  - generic [ref=e384]: "5"
                  - generic [ref=e385]:
                    - generic [ref=e386]: ★
                    - generic [ref=e387]: ★
                    - generic [ref=e388]: ★
                    - generic [ref=e389]: ★
                    - generic [ref=e390]: ★
              - listitem [ref=e391]:
                - checkbox "4" [ref=e392] [cursor=pointer]
                - generic [ref=e393] [cursor=pointer]:
                  - generic [ref=e394]: "4"
                  - generic [ref=e395]:
                    - generic [ref=e396]: ★
                    - generic [ref=e397]: ★
                    - generic [ref=e398]: ★
                    - generic [ref=e399]: ★
                    - generic [ref=e400]: ★
              - listitem [ref=e401]:
                - checkbox "3" [ref=e402] [cursor=pointer]
                - generic [ref=e403] [cursor=pointer]:
                  - generic [ref=e404]: "3"
                  - generic [ref=e405]:
                    - generic [ref=e406]: ★
                    - generic [ref=e407]: ★
                    - generic [ref=e408]: ★
                    - generic [ref=e409]: ★
                    - generic [ref=e410]: ★
              - listitem [ref=e411]:
                - checkbox "2" [ref=e412] [cursor=pointer]
                - generic [ref=e413] [cursor=pointer]:
                  - generic [ref=e414]: "2"
                  - generic [ref=e415]:
                    - generic [ref=e416]: ★
                    - generic [ref=e417]: ★
                    - generic [ref=e418]: ★
                    - generic [ref=e419]: ★
                    - generic [ref=e420]: ★
              - listitem [ref=e421]:
                - checkbox "1" [ref=e422] [cursor=pointer]
                - generic [ref=e423] [cursor=pointer]:
                  - generic [ref=e424]: "1"
                  - generic [ref=e425]:
                    - generic [ref=e426]: ★
                    - generic [ref=e427]: ★
                    - generic [ref=e428]: ★
                    - generic [ref=e429]: ★
                    - generic [ref=e430]: ★
          - generic [ref=e431]:
            - generic [ref=e432]:
              - generic [ref=e433]: "0"
              - generic [ref=e434]:
                - generic [ref=e435]:
                  - img [ref=e437]
                  - img [ref=e439]
                - generic [ref=e441]:
                  - img [ref=e443]
                  - img [ref=e445]
                - generic [ref=e447]:
                  - img [ref=e449]
                  - img [ref=e451]
                - generic [ref=e453]:
                  - img [ref=e455]
                  - img [ref=e457]
                - generic [ref=e459]:
                  - img [ref=e461]
                  - img [ref=e463]
            - list [ref=e467]:
              - listitem [ref=e468] [cursor=pointer]: Tất cả đánh giá (0)
            - generic:
              - list
            - text: 
        - generic [ref=e471]:
          - generic [ref=e472]:
            - heading "Sản phẩm liên quan" [level=2] [ref=e473]:
              - generic [ref=e474]: Sản phẩm liên quan
            - paragraph [ref=e475]: ///
          - generic [ref=e476]:
            - generic [ref=e478] [cursor=pointer]:
              - tabpanel [ref=e479]:
                - generic [ref=e480]:
                  - link "Set Áo Quần Nam ICONDENIM Lazy Fish" [ref=e482]:
                    - /url: /products/set-ao-quan-nam-icondenim-lazy-fish
                    - img "Set Áo Quần Nam ICONDENIM Lazy Fish" [ref=e483]
                  - generic [ref=e484]:
                    - heading "Set Áo Quần Nam ICONDENIM Lazy Fish" [level=3] [ref=e485]:
                      - link "Set Áo Quần Nam ICONDENIM Lazy Fish" [ref=e486]:
                        - /url: /products/set-ao-quan-nam-icondenim-lazy-fish
                    - img [ref=e489]:
                      - generic [ref=e490]: Hàng Mới
                    - generic [ref=e491]:
                      - generic [ref=e492]:
                        - paragraph [ref=e493]: 329,000₫ ~ 678,000₫
                        - generic:
                          - button "Btn Quickview":
                            - img "Btn Quickview"
                        - button "Thêm vào giỏ Thêm vào giỏ" [ref=e495]:
                          - generic [ref=e496]:
                            - img "Thêm vào giỏ" [ref=e497]
                            - img "Thêm vào giỏ" [ref=e498]
                      - list
              - tabpanel [ref=e499]:
                - generic [ref=e500]:
                  - link "Set Áo Quần Nam ICONDENIM Edgestitch" [ref=e502]:
                    - /url: /products/set-ao-quan-nam-icondenim-edgestitch
                    - img "Set Áo Quần Nam ICONDENIM Edgestitch" [ref=e503]
                  - generic [ref=e504]:
                    - heading "Set Áo Quần Nam ICONDENIM Edgestitch" [level=3] [ref=e505]:
                      - link "Set Áo Quần Nam ICONDENIM Edgestitch" [ref=e506]:
                        - /url: /products/set-ao-quan-nam-icondenim-edgestitch
                    - img [ref=e509]:
                      - generic [ref=e510]: Hàng Mới
                    - generic [ref=e511]:
                      - generic [ref=e512]:
                        - paragraph [ref=e513]: 349,000₫ ~ 728,000₫
                        - generic:
                          - button "Btn Quickview":
                            - img "Btn Quickview"
                        - button "Thêm vào giỏ Thêm vào giỏ" [ref=e515]:
                          - generic [ref=e516]:
                            - img "Thêm vào giỏ" [ref=e517]
                            - img "Thêm vào giỏ" [ref=e518]
                      - list
              - tabpanel [ref=e519]:
                - generic [ref=e520]:
                  - link "Set Đồ Nam Ngắn ICONDENIM Orgnls" [ref=e522]:
                    - /url: /products/set-do-nam-ngan-icondenim-orgnls
                    - img "Set Đồ Nam Ngắn ICONDENIM Orgnls" [ref=e523]
                  - generic [ref=e524]:
                    - heading "Set Đồ Nam Ngắn ICONDENIM Orgnls" [level=3] [ref=e525]:
                      - link "Set Đồ Nam Ngắn ICONDENIM Orgnls" [ref=e526]:
                        - /url: /products/set-do-nam-ngan-icondenim-orgnls
                    - img [ref=e529]:
                      - generic [ref=e530]: Hàng Mới
                    - generic [ref=e531]:
                      - generic [ref=e532]:
                        - paragraph [ref=e533]: 299,000₫ ~ 648,000₫
                        - generic:
                          - button "Btn Quickview":
                            - img "Btn Quickview"
                        - button "Thêm vào giỏ Thêm vào giỏ" [ref=e535]:
                          - generic [ref=e536]:
                            - img "Thêm vào giỏ" [ref=e537]
                            - img "Thêm vào giỏ" [ref=e538]
                      - list
              - tabpanel [ref=e539]:
                - generic [ref=e540]:
                  - link "Set Đồ Nam ICONDENIM Lunary" [ref=e542]:
                    - /url: /products/set-do-nam-icondenim-lunary
                    - img "Set Đồ Nam ICONDENIM Lunary" [ref=e543]
                  - generic [ref=e544]:
                    - heading "Set Đồ Nam ICONDENIM Lunary" [level=3] [ref=e545]:
                      - link "Set Đồ Nam ICONDENIM Lunary" [ref=e546]:
                        - /url: /products/set-do-nam-icondenim-lunary
                    - img [ref=e549]:
                      - generic [ref=e550]: Hàng Mới
                    - generic [ref=e551]:
                      - generic [ref=e552]:
                        - paragraph [ref=e553]: 399,000₫ ~ 828,000₫
                        - generic:
                          - button "Btn Quickview":
                            - img "Btn Quickview"
                        - button "Thêm vào giỏ Thêm vào giỏ" [ref=e555]:
                          - generic [ref=e556]:
                            - img "Thêm vào giỏ" [ref=e557]
                            - img "Thêm vào giỏ" [ref=e558]
                      - list
              - tabpanel [ref=e559]:
                - generic [ref=e560]:
                  - link [ref=e562]:
                    - /url: /products/set-do-nam-icondenim-distance
                    - img [ref=e563]
                  - generic [ref=e565]: 20%
                  - generic [ref=e566]:
                    - heading [level=3] [ref=e567]:
                      - link [ref=e568]:
                        - /url: /products/set-do-nam-icondenim-distance
                        - text: Set Đồ Nam ICONDENIM Distance
                    - img [ref=e571]:
                      - generic [ref=e573]: Sale
                    - generic [ref=e575]:
                      - paragraph [ref=e576]: 319,200₫ ~ 662,400₫
                      - button [ref=e578]:
                        - generic [ref=e579]:
                          - img [ref=e580]
                          - img [ref=e581]
              - tabpanel [ref=e582]:
                - generic [ref=e583]:
                  - link [ref=e585]:
                    - /url: /products/set-do-nam-icondenim-orgnls-2
                    - img [ref=e586]
                  - generic [ref=e587]:
                    - heading [level=3] [ref=e588]:
                      - link [ref=e589]:
                        - /url: /products/set-do-nam-icondenim-orgnls-2
                        - text: Set Đồ Nam ICONDENIM ORGNLS
                    - img [ref=e592]:
                      - generic [ref=e593]: Hàng Mới
                    - generic [ref=e595]:
                      - paragraph [ref=e596]: 349,000₫ ~ 728,000₫
                      - button [ref=e598]:
                        - generic [ref=e599]:
                          - img [ref=e600]
                          - img [ref=e601]
              - tabpanel [ref=e602]:
                - generic [ref=e603]:
                  - link [ref=e605]:
                    - /url: /products/set-do-nam-icondenim-cool-super-star-bear
                    - img [ref=e606]
                  - generic [ref=e608]: 40%
                  - generic [ref=e609]:
                    - heading [level=3] [ref=e610]:
                      - link [ref=e611]:
                        - /url: /products/set-do-nam-icondenim-cool-super-star-bear
                        - text: Set Đồ Nam ICONDENIM Cool Super Star Bear
                    - img [ref=e614]:
                      - generic [ref=e616]: Sale
                    - generic [ref=e618]:
                      - paragraph [ref=e619]: 199,000₫ ~ 398,000₫
                      - button [ref=e621]:
                        - generic [ref=e622]:
                          - img [ref=e623]
                          - img [ref=e624]
              - tabpanel [ref=e625]:
                - generic [ref=e626]:
                  - link [ref=e628]:
                    - /url: /products/set-do-nam-icondenim-orgnls-1
                    - img [ref=e629]
                  - generic [ref=e630]:
                    - heading [level=3] [ref=e631]:
                      - link [ref=e632]:
                        - /url: /products/set-do-nam-icondenim-orgnls-1
                        - text: Set Đồ Nam ICONDENIM Orgnls
                    - img [ref=e635]:
                      - generic [ref=e636]: Hàng Mới
                    - generic [ref=e638]:
                      - paragraph [ref=e639]: 349,000₫ ~ 698,000₫
                      - button [ref=e641]:
                        - generic [ref=e642]:
                          - img [ref=e643]
                          - img [ref=e644]
              - tabpanel [ref=e645]:
                - generic [ref=e646]:
                  - link [ref=e648]:
                    - /url: /products/set-do-nam-icondenim-golden-script
                    - img [ref=e649]
                  - generic [ref=e651]: 50%
                  - generic [ref=e652]:
                    - heading [level=3] [ref=e653]:
                      - link [ref=e654]:
                        - /url: /products/set-do-nam-icondenim-golden-script
                        - text: Set Đồ Nam ICONDENIM Golden Script
                    - img [ref=e657]:
                      - generic [ref=e659]: Hot Deal
                    - generic [ref=e661]:
                      - paragraph [ref=e662]: 149,000₫ ~ 298,000₫
                      - button [ref=e664]:
                        - generic [ref=e665]:
                          - img [ref=e666]
                          - img [ref=e667]
              - tabpanel [ref=e668]:
                - generic [ref=e669]:
                  - link [ref=e671]:
                    - /url: /products/set-do-nam-icondenim-orgnls-est-19
                    - img [ref=e672]
                  - generic [ref=e674]: 33%
                  - generic [ref=e675]:
                    - heading [level=3] [ref=e676]:
                      - link [ref=e677]:
                        - /url: /products/set-do-nam-icondenim-orgnls-est-19
                        - text: Set Đồ Nam ICONDENIM ORGNLS EST.19
                    - img [ref=e680]:
                      - generic [ref=e682]: Sale
                    - generic [ref=e684]:
                      - paragraph [ref=e685]: 149,000₫ ~ 348,000₫
                      - button [ref=e687]:
                        - generic [ref=e688]:
                          - img [ref=e689]
                          - img [ref=e690]
            - button "Next" [ref=e691] [cursor=pointer]
            - tablist [ref=e695]:
              - tab "1 of 3" [selected] [ref=e696] [cursor=pointer]: "1"
              - tab "2 of 3" [ref=e697] [cursor=pointer]: "2"
              - tab "3 of 3" [ref=e698] [cursor=pointer]: "3"
      - generic [ref=e699]:
        - generic [ref=e700]:
          - heading "Đánh giá" [level=4] [ref=e701]
          - link "" [ref=e702] [cursor=pointer]:
            - /url: javascript:void(0)
            - generic [ref=e703]: 
        - generic [ref=e704]:
          - generic [ref=e705]:
            - generic [ref=e706]:
              - generic [ref=e708]: "0"
              - generic [ref=e709]:
                - generic [ref=e710]: 
                - generic [ref=e711]: 
                - generic [ref=e712]: 
                - generic [ref=e713]: 
                - generic [ref=e714]: 
            - generic [ref=e716]:
              - heading "Hàng có vừa không?" [level=4] [ref=e717]
              - generic [ref=e718]:
                - generic [ref=e719]:
                  - generic [ref=e720]: Nhỏ
                  - generic [ref=e722]: 0%
                - generic [ref=e723]:
                  - generic [ref=e724]: Đúng với kích thước
                  - generic [ref=e726]: 0%
                - generic [ref=e727]:
                  - generic [ref=e728]: Lớn
                  - generic [ref=e730]: 0%
          - generic [ref=e731]:
            - list [ref=e733]:
              - listitem [ref=e734]:
                - generic [ref=e735]: Tất cả
              - listitem [ref=e736]:
                - generic [ref=e737]: Có hình ảnh
            - list [ref=e739]:
              - listitem [ref=e740]:
                - generic [ref=e742]:
                  - generic [ref=e743]: 
                  - generic [ref=e744]: 
                  - generic [ref=e745]: 
                  - generic [ref=e746]: 
                  - generic [ref=e747]: 
              - listitem [ref=e748]:
                - generic [ref=e750]:
                  - generic [ref=e751]: 
                  - generic [ref=e752]: 
                  - generic [ref=e753]: 
                  - generic [ref=e754]: 
              - listitem [ref=e755]:
                - generic [ref=e757]:
                  - generic [ref=e758]: 
                  - generic [ref=e759]: 
                  - generic [ref=e760]: 
              - listitem [ref=e761]:
                - generic [ref=e763]:
                  - generic [ref=e764]: 
                  - generic [ref=e765]: 
              - listitem [ref=e766]:
                - generic [ref=e769]: 
          - list [ref=e771]:
            - listitem [ref=e772]: Xem thêm
          - generic [ref=e773]:
            - generic [ref=e774]:
              - link "" [ref=e775] [cursor=pointer]:
                - /url: javascript:void(0)
                - generic [ref=e776]: 
              - heading "Bộ lọc" [level=3] [ref=e777]
            - generic [ref=e778]:
              - list [ref=e780]:
                - listitem [ref=e781]:
                  - generic [ref=e782]: Áo Thun Trắng-0081
                - listitem [ref=e783]:
                  - generic [ref=e784]: Quần Short Xanh Navy-0081
              - list [ref=e786]:
                - listitem [ref=e787]:
                  - generic [ref=e788]: S
                - listitem [ref=e789]:
                  - generic [ref=e790]: M
                - listitem [ref=e791]:
                  - generic [ref=e792]: L
                - listitem [ref=e793]:
                  - generic [ref=e794]: XL
              - list [ref=e796]:
                - listitem [ref=e797]:
                  - generic [ref=e798]:
                    - text: "5"
                    - generic [ref=e799]: 
                - listitem [ref=e800]:
                  - generic [ref=e801]:
                    - text: "4"
                    - generic [ref=e802]: 
                - listitem [ref=e803]:
                  - generic [ref=e804]:
                    - text: "3"
                    - generic [ref=e805]: 
                - listitem [ref=e806]:
                  - generic [ref=e807]:
                    - text: "2"
                    - generic [ref=e808]: 
                - listitem [ref=e809]:
                  - generic [ref=e810]:
                    - text: "1"
                    - generic [ref=e811]: 
            - generic [ref=e813]:
              - link [ref=e814] [cursor=pointer]:
                - /url: javascript:void(0)
                - generic [ref=e815]: 
              - link "Đã xong" [ref=e816] [cursor=pointer]:
                - /url: javascript:void(0)
      - text:                                          
  - generic [ref=e820]:
    - generic [ref=e821]:
      - paragraph [ref=e822]: Đăng kí nhận tin
      - generic [ref=e824]:
        - generic [ref=e825]:
          - text: 
          - textbox "Email" [ref=e826]
        - button "Đăng ký" [ref=e827] [cursor=pointer]:
          - generic [ref=e828]: 
          - text: Đăng ký
    - list [ref=e830]:
      - listitem [ref=e831]:
        - link "Liên hệ với chúng tôi qua Zalo" [ref=e832] [cursor=pointer]:
          - /url: //zalo.me/3664144181122308942
          - img "Liên hệ với chúng tôi qua Zalo" [ref=e833]
      - listitem [ref=e834]:
        - link [ref=e835] [cursor=pointer]:
          - /url: https://www.youtube.com/@storehanghieu1608
          - generic [ref=e836]: 
      - listitem [ref=e837]:
        - link [ref=e838] [cursor=pointer]:
          - /url: https://www.instagram.com/160store
          - generic [ref=e839]: 
      - listitem [ref=e840]:
        - link [ref=e841] [cursor=pointer]:
          - /url: https://www.facebook.com/160store
          - generic [ref=e842]: 
  - contentinfo [ref=e843]:
    - generic [ref=e845]:
      - generic [ref=e846]:
        - generic [ref=e847]:
          - generic [ref=e849]: Giới thiệu
          - generic [ref=e850]:
            - paragraph [ref=e851]: 160STORE - Chuỗi Phân Phối Thời Trang Nam Chuẩn Hiệu
            - list [ref=e852]:
              - listitem [ref=e853]:
                - generic [ref=e854]: 
                - link "02871006789" [ref=e855] [cursor=pointer]:
                  - /url: tel:02871006789
              - listitem [ref=e856]:
                - generic [ref=e857]: 
                - link "cs@160store.com" [ref=e858] [cursor=pointer]:
                  - /url: mailto:cs@160store.com
              - listitem [ref=e859]:
                - generic [ref=e860]: 
                - generic [ref=e861]: "Giờ mở cửa : 08:30 - 22:00"
              - listitem [ref=e862]:
                - generic [ref=e863]: 
                - generic [ref=e864]: Nhân viên tư vấn phản hồi tin nhắn đến 24:00 (Mỗi ngày)
              - listitem [ref=e865]:
                - link [ref=e866] [cursor=pointer]:
                  - /url: http://online.gov.vn/nen-tang/1a643809-3f92-4419-944d-c2d4fdffb78b
                  - img [ref=e867]
              - listitem [ref=e868]:
                - link "DMCA.com Protection Status" [ref=e869] [cursor=pointer]:
                  - /url: https://www.dmca.com/Protection/Status.aspx?ID=9049de26-d97b-48dc-ab97-1e5fcb221fba&refurl=https://160store.com/products/set-do-nam-icondenim-icdn-panelplay
                  - img "DMCA.com Protection Status" [ref=e870]
        - generic [ref=e871]:
          - generic [ref=e873]: CHÍNH SÁCH
          - list [ref=e875]:
            - listitem [ref=e876]:
              - link "Hướng dẫn đặt hàng" [ref=e877] [cursor=pointer]:
                - /url: /pages/huong-dan-dat-hang
            - listitem [ref=e878]:
              - paragraph [ref=e881] [cursor=pointer]: Chính sách
        - generic [ref=e883]:
          - link "ĐỊA CHỈ CỬA HÀNG (20 CH)" [ref=e886] [cursor=pointer]:
            - /url: https://www.160store.com/pages/lien-he
          - generic [ref=e888]:
            - generic [ref=e889]:
              - generic [ref=e890]:
                - img [ref=e891]
                - paragraph [ref=e892]: HỒ CHÍ MINH (10 CH)
              - paragraph [ref=e893]: 274 Ba Cu, Phường Vũng Tàu, TP.HCM
            - generic [ref=e894]:
              - generic [ref=e895]:
                - img [ref=e896]
                - paragraph [ref=e897]:
                  - text: HÀ NỘI (2 CH)
                  - generic [ref=e898]: New
              - paragraph [ref=e899]: 27 Tôn Đức Thắng - P. Văn Miếu - Quốc Tử Giám; TP. Hà Nội
            - generic [ref=e900]:
              - generic [ref=e901]:
                - img [ref=e902]
                - paragraph [ref=e903]: CẦN THƠ (2 CH)
              - paragraph [ref=e904]: Số 35 Trần Phú, Phường Ninh Kiều, TP.Cần Thơ
            - generic [ref=e905]:
              - generic [ref=e906]:
                - img [ref=e907]
                - paragraph [ref=e908]: ĐÀ NẴNG (2 CH)
              - paragraph [ref=e909]: 332 Đ. Lê Duẩn, Phường Thanh Khê, TP.Đà Nẵng
            - link "XEM TẤT CẢ CỬA HÀNG" [ref=e911] [cursor=pointer]:
              - /url: https://www.160store.com/pages/lien-he
        - generic [ref=e914]:
          - generic [ref=e915]: PHƯƠNG THỨC THANH TOÁN
          - generic [ref=e916]:
            - img "Image Spay" [ref=e917]
            - img "Image VNPay" [ref=e918]
            - img "Image Cod" [ref=e919]
      - generic [ref=e924]: BẢN QUYỀN THUỘC VỀ 160STORE
  - list [ref=e926]
  - text: 
  - button "back to top" [ref=e928] [cursor=pointer]:
    - img [ref=e929]
    - text: back to top
  - paragraph [ref=e935]: Bạn chưa chọn size sản phẩm!
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
            - strong: Set Đồ Nam ICONDENIM ICDN PanelPlay
          - generic:
            - generic: "Từ khóa chính:"
            - strong: set đồ nam icondenim
          - generic:
            - generic: "Tiêu chí đạt:"
            - strong: 22/38
      - generic:
        - generic: "❌ Chi tiết lỗi cần khắc phục (16):"
        - generic:
          - generic:
            - generic:
              - strong: "1.2 — Độ dài Title: 37 ký tự (chuẩn: 40–65)"
              - generic: "1.2"
            - generic: "⚠️ Lỗi: Title quá ngắn hoặc quá dài (37 ký tự), cần 40–65"
          - generic:
            - generic:
              - strong: 1.3 — Title chứa keyword "set đồ nam icondenim"
              - generic: "1.3"
            - generic: "⚠️ Lỗi: Title không chứa keyword \"set đồ nam icondenim\""
          - generic:
            - generic:
              - strong: "1.4 — Keyword nằm ở nửa đầu Title (vị trí: N/A)"
              - generic: "1.4"
            - generic: "⚠️ Lỗi: Bỏ qua — keyword \"set đồ nam icondenim\" không có trong Title"
          - generic:
            - generic:
              - strong: "2.2 — Độ dài Meta: 178 ký tự (chuẩn: 120–160)"
              - generic: "2.2"
            - generic: "⚠️ Lỗi: Meta description quá ngắn hoặc quá dài (178 ký tự), cần 120–160"
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
              - strong: 3.2 — H1 chứa keyword "set đồ nam icondenim"
              - generic: "3.2"
            - generic: "⚠️ Lỗi: H1 \"Set Đồ Nam ICONDENIM ICDN PanelPlay\" không chứa keyword \"set đồ nam icondenim\""
          - generic:
            - generic:
              - strong: 3.3 — Heading phân cấp hợp lệ (2 lỗi)
              - generic: "3.3"
            - generic: "⚠️ Lỗi: Heading phân cấp sai: Nhảy cấp từ H1 → H3 (\"KHUYẾN MÃI - ONLY ONLINE\"); Nhảy cấp từ H2 → H4 (\"Đánh giá\")"
          - generic:
            - generic:
              - strong: 4.2 — URL chứa keyword slug "set-đồ-nam-icondenim"
              - generic: "4.2"
            - generic: "⚠️ Lỗi: URL \"/products/set-do-nam-icondenim-icdn-panelplay\" không chứa keyword \"set-đồ-nam-icondenim\""
          - generic:
            - generic:
              - strong: "5.2 — Mật độ keyword: 0.04% (chuẩn: 0.5%–2.5%)"
              - generic: "5.2"
            - generic: "⚠️ Lỗi: Mật độ keyword quá thấp: 0.04%, cần ≥ 0.5%"
          - generic:
            - generic:
              - strong: 5.3 — Keyword "set đồ nam icondenim" xuất hiện trong 100 từ đầu
              - generic: "5.3"
            - generic: "⚠️ Lỗi: Keyword \"set đồ nam icondenim\" không xuất hiện trong 100 từ đầu"
          - generic:
            - generic:
              - strong: "6.1 — 100% ảnh có thuộc tính alt (thiếu: 33/68)"
              - generic: "6.1"
            - generic: "⚠️ Lỗi: Có 33 hình ảnh thiếu thuộc tính 'alt'"
          - generic:
            - generic:
              - strong: 6.2 — Có ảnh chứa keyword "set đồ nam icondenim" trong alt
              - generic: "6.2"
            - generic: "⚠️ Lỗi: Không có ảnh nào có alt chứa keyword \"set đồ nam icondenim\""
          - generic:
            - generic:
              - strong: "7.3 — Anchor text chất lượng (lỗi: 17)"
              - generic: "7.3"
            - generic: "⚠️ Lỗi: 17 link có anchor text không tốt: \"\" → /, \"\" → /, \"\" → /, \"\" → /, \"\" → //product.hstatic.net/1000253775/product/160_set_bo_081-10_6ce372768e004cfa81e18cc0d1268f8c_1024x1024.jpg, \"\" → //product.hstatic.net/1000253775/product/160_set_bo_081-12_00b4618c98244346a8bfcb311975874e_1024x1024.jpg, \"\" → //product.hstatic.net/1000253775/product/160_set_bo_081-13_7ec12c7b13d1488ea7525301a2b1d093_1024x1024.jpg, \"\" → //cdn.hstatic.net/products/1000253775/ao-thun-form-regular_a09b5bf2266044c3a74cd0777b01a82f_1024x1024.png, \"\" → //product.hstatic.net/1000253775/product/160_set_bo_081-3_6749f4ff887642a7a497c03381828d78_1024x1024.jpg, \"\" → //cdn.hstatic.net/products/1000253775/quan-short-lung-thun-form-regular_ef5c8b8d0ef44acf969c6938cf1dbdd5_1024x1024.png, \"\" → //product.hstatic.net/1000253775/product/160_set_bo_081-4_5ab7a3e7a4214555a3db30c31f4d8097_1024x1024.jpg, \"\" → //product.hstatic.net/1000253775/product/160_set_bo_081-6_5c872e374c1e48ca81f24577d7110715_1024x1024.jpg, \"\" → //product.hstatic.net/1000253775/product/160_set_bo_081-1_22503d36dfc24db18e6f4745737fed06_1024x1024.jpg, \"\" → //product.hstatic.net/1000253775/product/160_set_bo_081-11_3dbf248365e545cbb517579adaed9db2_1024x1024.jpg, \"\" → //zalo.me/3664144181122308942, \"\" → //m.me/1042686802417049, \"\" → //zalo.me/3664144181122308942"
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