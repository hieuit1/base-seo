# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo.spec.ts >> SEO TIÊU CHUẨN CƠ BẢN CHO WEB >> Kiểm tra SEO Onpage: Quần Short Nam RUNPOW Aero Twin
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
            - option "Hồ Chí Minh"
            - option "Hà Nội"
            - option "Đồng Nai"
            - option "Cần Thơ"
            - option "Đà Nẵng"
            - option "Đắk Lắk"
            - option "Bình Dương"
            - option "Tiền Giang"
            - option "Kiên Giang"
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
        - generic [ref=e110]: Quần Short Nam RUNPOW Aero Twin
    - generic [ref=e111]:
      - generic [ref=e113]:
        - generic [ref=e115]:
          - generic [ref=e117]:
            - generic [ref=e118] [cursor=pointer]:
              - generic:
                - link "Quần Short Nam RUNPOW Aero Twin" [ref=e120]:
                  - /url: javascript:void(0)
                  - img "Quần Short Nam RUNPOW Aero Twin" [ref=e121]
                - link "Quần Short Nam RUNPOW Aero Twin" [ref=e123]:
                  - /url: javascript:void(0)
                  - img "Quần Short Nam RUNPOW Aero Twin" [ref=e124]
                - link "Quần Short Nam RUNPOW Aero Twin" [ref=e126]:
                  - /url: javascript:void(0)
                  - img "Quần Short Nam RUNPOW Aero Twin" [ref=e127]
                - link "Quần Short Nam RUNPOW Aero Twin" [ref=e129]:
                  - /url: javascript:void(0)
                  - img "Quần Short Nam RUNPOW Aero Twin" [ref=e130]
                - link "Quần Short Nam RUNPOW Aero Twin" [ref=e132]:
                  - /url: javascript:void(0)
                  - img "Quần Short Nam RUNPOW Aero Twin" [ref=e133]
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
                - link [ref=e156]:
                  - /url: javascript:void(0)
                  - img [ref=e157]
                - link [ref=e159]:
                  - /url: javascript:void(0)
                  - img [ref=e160]
                - link [ref=e162]:
                  - /url: javascript:void(0)
                  - img [ref=e163]
            - button "Next" [ref=e164] [cursor=pointer]
          - generic [ref=e166]:
            - generic [ref=e167] [cursor=pointer]:
              - generic:
                - link "Quần Short Nam RUNPOW Aero Twin" [ref=e169]:
                  - /url: //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-10_17cbfd4c1dc14c44b21e3101b99dae44_1024x1024.jpg
                  - img "Quần Short Nam RUNPOW Aero Twin" [ref=e170]
                - link [ref=e172]:
                  - /url: //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-1_f4a518360a324893a0dd44dc0bea2e43_1024x1024.jpg
                  - img [ref=e173]
                - link [ref=e175]:
                  - /url: //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-5_c2e002aec7c347c1b0056a79e8b0966b_1024x1024.jpg
                  - img [ref=e176]
                - link [ref=e178]:
                  - /url: //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-8_3e86bc46d15f493cbaa699bfee2de329_1024x1024.jpg
                  - img [ref=e179]
                - link [ref=e181]:
                  - /url: //cdn.hstatic.net/products/1000253775/sq-qstn-regular-c-runpow_e540c2f4307147c3857e7b9d3852ae9b_1024x1024.jpg
                  - img [ref=e182]
                - link [ref=e184]:
                  - /url: //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-2_88ce46a8855343faa7e015145f506c30_1024x1024.jpg
                  - img [ref=e185]
                - link [ref=e187]:
                  - /url: //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-3_93ebb439d926483aa02ec52ab4637912_1024x1024.jpg
                  - img [ref=e188]
                - link [ref=e190]:
                  - /url: //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-4_b9313ee1a0ca46998a59721a0068f10c_1024x1024.jpg
                  - img [ref=e191]
                - link [ref=e193]:
                  - /url: //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-6_167e4057f6e742a5b428b4bc54b9b79d_1024x1024.jpg
                  - img [ref=e194]
                - link [ref=e196]:
                  - /url: //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-7_483606631b0e43a793ed8e4c0a526495_1024x1024.jpg
                  - img [ref=e197]
                - link [ref=e199]:
                  - /url: //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-9_2a154330c69c4634b3192e923f9b5e3c_1024x1024.jpg
                  - img [ref=e200]
                - link [ref=e202]:
                  - /url: //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-11_d496c2bd593b4c5c9cc5a7b93c5a4881_1024x1024.jpg
                  - img [ref=e203]
                - link [ref=e205]:
                  - /url: //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-12_d500becd4ddd4d5c9cb9f6904adc0ced_1024x1024.jpg
                  - img [ref=e206]
                - link [ref=e208]:
                  - /url: //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-13_7b64804a4136497fbad77f92857ef6ce_1024x1024.jpg
                  - img [ref=e209]
                - link [ref=e211]:
                  - /url: //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-14_9eeb2e976eba4c40afd17ae5916af325_1024x1024.jpg
                  - img [ref=e212]
            - button "Next" [ref=e213] [cursor=pointer]: ❯ Next
        - generic [ref=e214]:
          - generic [ref=e215]:
            - generic [ref=e217]:
              - heading "Quần Short Nam RUNPOW Aero Twin Còn hàng" [level=1] [ref=e219]
              - generic [ref=e222]:
                - generic [ref=e223]:
                  - img [ref=e225]
                  - img [ref=e227]
                - generic [ref=e229]:
                  - img [ref=e231]
                  - img [ref=e233]
                - generic [ref=e235]:
                  - img [ref=e237]
                  - img [ref=e239]
                - generic [ref=e241]:
                  - img [ref=e243]
                  - img [ref=e245]
                - generic [ref=e247]:
                  - img [ref=e249]
                  - img [ref=e251]
              - generic [ref=e254]:
                - generic [ref=e255]:
                  - text: "Loại:"
                  - link "Quần Short" [ref=e256] [cursor=pointer]:
                    - /url: /collections/types?q=quan-short
                - generic [ref=e257]: "|"
                - generic [ref=e258]: "MSP: QSRP0042-01"
              - generic [ref=e259]:
                - generic [ref=e260]: 359,000₫
                - deletion [ref=e262]: 449,000₫
            - generic [ref=e264]:
              - heading "Áo Hoodie Don KHUYẾN MÃI - ONLY ONLINE" [level=3] [ref=e265]:
                - img "Áo Hoodie Don" [ref=e266]
                - text: KHUYẾN MÃI - ONLY ONLINE
              - list [ref=e268]:
                - listitem [ref=e269]:
                  - generic [ref=e270]: 🔥 Ưu đãi 20% tất cả sản phẩm RUNPOW
              - list [ref=e272]:
                - listitem [ref=e273]:
                  - generic [ref=e274]: 🔥 Mua sản phẩm RUNPOW từ 799K tặng ngay túi thể thao chuyên dụng
              - list [ref=e276]:
                - listitem [ref=e277]:
                  - generic [ref=e278]:
                    - text: Nhập mã
                    - strong [ref=e279]: JUL20
                    - text: GIẢM 20K đơn từ 419K
              - list [ref=e281]:
                - listitem [ref=e282]:
                  - generic [ref=e283]:
                    - text: Nhập mã
                    - strong [ref=e284]: JUL50
                    - text: GIẢM 50K đơn từ 699K
              - list [ref=e286]:
                - listitem [ref=e287]:
                  - generic [ref=e288]:
                    - text: Nhập mã
                    - strong [ref=e289]: JUL80
                    - text: GIẢM 80K đơn từ 999K
              - list [ref=e291]:
                - listitem [ref=e292]:
                  - generic [ref=e293]:
                    - text: Nhập mã
                    - strong [ref=e294]: JUL120
                    - text: GIẢM 120K đơn từ 1399K
              - list [ref=e296]:
                - listitem [ref=e297]:
                  - generic [ref=e298]:
                    - strong [ref=e299]: FREESHIP
                    - text: đơn từ 399K
            - generic [ref=e300]:
              - heading "Mã giảm giá bạn có thể sử dụng:" [level=4] [ref=e301]
              - generic [ref=e302]:
                - button "JUL20" [ref=e304] [cursor=pointer]
                - button "JUL50" [ref=e306] [cursor=pointer]
                - button "JUL80" [ref=e308] [cursor=pointer]
                - button "JUL120" [ref=e310] [cursor=pointer]
            - generic:
              - generic:
                - generic:
                  - generic:
                    - generic [ref=e311]:
                      - generic [ref=e312]:
                        - text: "Màu sắc:"
                        - generic [ref=e313]: Đen
                      - generic [ref=e314]:
                        - generic [ref=e317] [cursor=pointer]: Đen
                        - generic [ref=e320] [cursor=pointer]: Xám Đậm
                    - generic [ref=e321]:
                      - generic [ref=e322]:
                        - text: "Kích thước:"
                        - generic [ref=e323]: S
                        - link "Hướng dẫn chọn size" [ref=e324] [cursor=pointer]:
                          - /url: javascript:void(0)
                          - img [ref=e325]
                          - generic [ref=e326]: Hướng dẫn chọn size
                      - generic [ref=e327]:
                        - generic [ref=e329] [cursor=pointer]:
                          - text: S
                          - img [ref=e330]
                        - generic [ref=e332] [cursor=pointer]: M
                        - generic [ref=e334] [cursor=pointer]: L
                        - generic [ref=e336] [cursor=pointer]: XL
            - generic [ref=e337]:
              - generic [ref=e338]:
                - generic [ref=e339]:
                  - button "–" [ref=e340] [cursor=pointer]
                  - textbox [ref=e341]: "1"
                  - button "+" [ref=e342] [cursor=pointer]
                - generic [ref=e344]:
                  - button "Thêm vào giỏ" [ref=e346] [cursor=pointer]:
                    - generic [ref=e347]: Thêm vào giỏ
                  - button "Mua ngay" [ref=e349] [cursor=pointer]
              - generic [ref=e350]:
                - paragraph [ref=e351] [cursor=pointer]:
                  - img "store" [ref=e352]
                  - text: Có 19 cửa hàng còn sản phẩm này
                  - button "+" [ref=e353]
                - text:                                                         
          - generic [ref=e355]:
            - generic [ref=e358]: Đổi hàng tận nhà trong vòng 15 ngày
            - generic [ref=e361]: Miễn phí vận chuyển đơn từ 399K
            - generic [ref=e364]: Bảo hành trong vòng 30 ngày
            - generic [ref=e367]: Hotline 0287.100.6789 hỗ trợ từ 8h30-24h
            - generic [ref=e370]: Giao hàng toàn quốc
            - generic [ref=e373]: Giảm thêm KHTT đến 15%
        - generic [ref=e376]:
          - tablist [ref=e377]:
            - tab "Mô tả" [selected] [ref=e378] [cursor=pointer]
            - tab "Chính Sách Giao Hàng" [selected] [ref=e379] [cursor=pointer]
            - tab "Chính Sách Đổi Hàng" [selected] [ref=e380] [cursor=pointer]
          - tabpanel [ref=e381]:
            - text: –
            - generic [ref=e382]:
              - heading "RUNPOW COLLECTION" [level=3] [ref=e383]:
                - strong [ref=e384]: RUNPOW COLLECTION
              - heading "160STORE – Quần Short Nam RUNPOW Aero Twin" [level=3] [ref=e385]:
                - strong [ref=e386]: 160STORE – Quần Short Nam RUNPOW Aero Twin
              - list [ref=e387]:
                - listitem [ref=e388]:
                  - strong [ref=e389]: "Thành phần chính:"
                  - text: 97% Poly - 3% Elastane
                - listitem [ref=e390]:
                  - strong [ref=e391]: "Vải lót quần trong:"
                  - text: 90% Poly - 10% Spandex
                - listitem [ref=e392]:
                  - strong [ref=e393]: "Form:"
                  - text: Quần short 2in1 Regular
                - listitem [ref=e394]:
                  - strong [ref=e395]: "Màu sắc:"
                  - text: Đen, Xám nhạt
              - separator [ref=e396]
              - paragraph [ref=e397]
              - paragraph [ref=e398]:
                - text: ►
                - strong [ref=e399]: CHẤT LIỆU CO GIÃN NHẸ THOÁNG
              - paragraph [ref=e400]: Vải chính 97% Poly - 3% Elastane nhẹ, thoáng khí và co giãn linh hoạt, kết hợp lớp lót quần trong 90% Poly - 10% Spandex giúp tăng độ ôm hỗ trợ khi vận động mà vẫn giữ cảm giác thoải mái khi mặc.
              - paragraph [ref=e401]:
                - text: ►
                - strong [ref=e402]: KỸ THUẬT THIẾT KẾ
              - paragraph [ref=e403]: Thiết kế 2 lớp với quần ngoài dáng short thể thao và lớp lót boxer bên trong giúp tăng độ linh hoạt khi di chuyển. Lưng thun bản 4.5cm được xử lý ép seam gọn, dây rút luồn bên trong tạo cảm giác gọn gàng. Thân trước có 2 cụm chữ RUN và POW in phản quang xám đậm, tạo điểm nhấn mạnh mẽ.
              - paragraph [ref=e404]: Thân sau có chi tiết FlexiDry in silicon cùng màu vải chính và dây treo khăn tập đặt giữa lưng, tối ưu cho mọi nhu cầu. Túi trong có ngăn đựng điện thoại bên trái người mặc, tiện hơn khi chạy bộ hoặc tập luyện.
              - paragraph [ref=e405]:
                - text: ►
                - strong [ref=e406]: FORM REGULAR 2IN1 LINH HOẠT
              - paragraph [ref=e407]: Form regular 2in1 mặc thoải mái, không bó sát nhưng vẫn giữ được độ gọn cần có của quần thể thao. Lớp lót bên trong giúp cố định tốt hơn khi vận động, phù hợp cho gym, running, training hoặc mặc casual năng động. Dễ phối cùng áo tank top, áo thun thể thao hoặc áo khoác nhẹ để hoàn thiện phong cách khỏe, gọn và hiện đại.
        - generic [ref=e409]:
          - generic [ref=e410]:
            - heading "ĐÁNH GIÁ SẢN PHẨM" [level=3] [ref=e411]
            - list [ref=e414]:
              - listitem [ref=e415]:
                - checkbox "5" [checked] [ref=e416] [cursor=pointer]
                - generic [ref=e417] [cursor=pointer]:
                  - generic [ref=e418]: "5"
                  - generic [ref=e419]:
                    - generic [ref=e420]: ★
                    - generic [ref=e421]: ★
                    - generic [ref=e422]: ★
                    - generic [ref=e423]: ★
                    - generic [ref=e424]: ★
              - listitem [ref=e425]:
                - checkbox "4" [ref=e426] [cursor=pointer]
                - generic [ref=e427] [cursor=pointer]:
                  - generic [ref=e428]: "4"
                  - generic [ref=e429]:
                    - generic [ref=e430]: ★
                    - generic [ref=e431]: ★
                    - generic [ref=e432]: ★
                    - generic [ref=e433]: ★
                    - generic [ref=e434]: ★
              - listitem [ref=e435]:
                - checkbox "3" [ref=e436] [cursor=pointer]
                - generic [ref=e437] [cursor=pointer]:
                  - generic [ref=e438]: "3"
                  - generic [ref=e439]:
                    - generic [ref=e440]: ★
                    - generic [ref=e441]: ★
                    - generic [ref=e442]: ★
                    - generic [ref=e443]: ★
                    - generic [ref=e444]: ★
              - listitem [ref=e445]:
                - checkbox "2" [ref=e446] [cursor=pointer]
                - generic [ref=e447] [cursor=pointer]:
                  - generic [ref=e448]: "2"
                  - generic [ref=e449]:
                    - generic [ref=e450]: ★
                    - generic [ref=e451]: ★
                    - generic [ref=e452]: ★
                    - generic [ref=e453]: ★
                    - generic [ref=e454]: ★
              - listitem [ref=e455]:
                - checkbox "1" [ref=e456] [cursor=pointer]
                - generic [ref=e457] [cursor=pointer]:
                  - generic [ref=e458]: "1"
                  - generic [ref=e459]:
                    - generic [ref=e460]: ★
                    - generic [ref=e461]: ★
                    - generic [ref=e462]: ★
                    - generic [ref=e463]: ★
                    - generic [ref=e464]: ★
          - generic [ref=e465]:
            - generic [ref=e466]:
              - generic [ref=e467]: "0"
              - generic [ref=e468]:
                - generic [ref=e469]:
                  - img [ref=e471]
                  - img [ref=e473]
                - generic [ref=e475]:
                  - img [ref=e477]
                  - img [ref=e479]
                - generic [ref=e481]:
                  - img [ref=e483]
                  - img [ref=e485]
                - generic [ref=e487]:
                  - img [ref=e489]
                  - img [ref=e491]
                - generic [ref=e493]:
                  - img [ref=e495]
                  - img [ref=e497]
            - list [ref=e501]:
              - listitem [ref=e502] [cursor=pointer]: Tất cả đánh giá (0)
            - generic:
              - list
            - text: 
        - generic [ref=e505]:
          - generic [ref=e506]:
            - heading "Sản phẩm liên quan" [level=2] [ref=e507]:
              - generic [ref=e508]: Sản phẩm liên quan
            - paragraph [ref=e509]: ///
          - generic [ref=e510]:
            - generic [ref=e512] [cursor=pointer]:
              - tabpanel [ref=e513]:
                - generic [ref=e514]:
                  - link "Quần Short Nam ICONDENIM Tropical Mono" [ref=e516]:
                    - /url: /products/quan-short-nam-icondenim-tropical-mono
                    - img "Quần Short Nam ICONDENIM Tropical Mono" [ref=e517]
                  - generic [ref=e518]:
                    - heading "Quần Short Nam ICONDENIM Tropical Mono" [level=3] [ref=e519]:
                      - link "Quần Short Nam ICONDENIM Tropical Mono" [ref=e520]:
                        - /url: /products/quan-short-nam-icondenim-tropical-mono
                    - img [ref=e523]:
                      - generic [ref=e524]: Hàng Mới
                    - generic [ref=e525]:
                      - generic [ref=e526]:
                        - paragraph [ref=e527]: 299,000₫
                        - generic:
                          - button "Btn Quickview":
                            - img "Btn Quickview"
                        - button "Thêm vào giỏ Thêm vào giỏ" [ref=e529]:
                          - generic [ref=e530]:
                            - img "Thêm vào giỏ" [ref=e531]
                            - img "Thêm vào giỏ" [ref=e532]
                      - list
              - tabpanel [ref=e533]:
                - generic [ref=e534]:
                  - link "Quần Short Nam Pique ICONDENIM Heatwave" [ref=e536]:
                    - /url: /products/quan-short-nam-pique-icondenim-heatwave
                    - img "Quần Short Nam Pique ICONDENIM Heatwave" [ref=e537]
                  - generic [ref=e538]:
                    - heading "Quần Short Nam Pique ICONDENIM Heatwave" [level=3] [ref=e539]:
                      - link "Quần Short Nam Pique ICONDENIM Heatwave" [ref=e540]:
                        - /url: /products/quan-short-nam-pique-icondenim-heatwave
                    - img [ref=e543]:
                      - generic [ref=e544]: Hàng Mới
                    - generic [ref=e545]:
                      - generic [ref=e546]:
                        - paragraph [ref=e547]: 349,000₫
                        - generic:
                          - button "Btn Quickview":
                            - img "Btn Quickview"
                        - button "Thêm vào giỏ Thêm vào giỏ" [ref=e549]:
                          - generic [ref=e550]:
                            - img "Thêm vào giỏ" [ref=e551]
                            - img "Thêm vào giỏ" [ref=e552]
                      - list
              - tabpanel [ref=e553]:
                - generic [ref=e554]:
                  - link "Quần Short Nam ICONDENIM Striped" [ref=e556]:
                    - /url: /products/quan-short-nam-icondenim-striped
                    - img "Quần Short Nam ICONDENIM Striped" [ref=e557]
                  - generic [ref=e558]:
                    - heading "Quần Short Nam ICONDENIM Striped" [level=3] [ref=e559]:
                      - link "Quần Short Nam ICONDENIM Striped" [ref=e560]:
                        - /url: /products/quan-short-nam-icondenim-striped
                    - img [ref=e563]:
                      - generic [ref=e564]: Hàng Mới
                    - generic [ref=e565]:
                      - generic [ref=e566]:
                        - paragraph [ref=e567]: 379,000₫
                        - generic:
                          - button "Btn Quickview":
                            - img "Btn Quickview"
                        - button "Thêm vào giỏ Thêm vào giỏ" [ref=e569]:
                          - generic [ref=e570]:
                            - img "Thêm vào giỏ" [ref=e571]
                            - img "Thêm vào giỏ" [ref=e572]
                      - list
              - tabpanel [ref=e573]:
                - generic [ref=e574]:
                  - link "Quần Short Nam ICONDENIM Soft Mark" [ref=e576]:
                    - /url: /products/quan-short-nam-icondenim-soft-mark
                    - img "Quần Short Nam ICONDENIM Soft Mark" [ref=e577]
                  - generic [ref=e578]:
                    - heading "Quần Short Nam ICONDENIM Soft Mark" [level=3] [ref=e579]:
                      - link "Quần Short Nam ICONDENIM Soft Mark" [ref=e580]:
                        - /url: /products/quan-short-nam-icondenim-soft-mark
                    - img [ref=e583]:
                      - generic [ref=e584]: Hàng Mới
                    - generic [ref=e585]:
                      - generic [ref=e586]:
                        - paragraph [ref=e587]: 329,000₫
                        - generic:
                          - button "Btn Quickview":
                            - img "Btn Quickview"
                        - button "Thêm vào giỏ Thêm vào giỏ" [ref=e589]:
                          - generic [ref=e590]:
                            - img "Thêm vào giỏ" [ref=e591]
                            - img "Thêm vào giỏ" [ref=e592]
                      - list
              - tabpanel [ref=e593]:
                - generic [ref=e594]:
                  - link [ref=e596]:
                    - /url: /products/quan-short-linen-nam-icondenim-azura
                    - img [ref=e597]
                  - generic [ref=e598]:
                    - heading [level=3] [ref=e599]:
                      - link [ref=e600]:
                        - /url: /products/quan-short-linen-nam-icondenim-azura
                        - text: Quần Short Linen Nam ICONDENIM Azura
                    - img [ref=e603]:
                      - generic [ref=e604]: Hàng Mới
                    - generic [ref=e606]:
                      - paragraph [ref=e607]: 379,000₫
                      - button [ref=e609]:
                        - generic [ref=e610]:
                          - img [ref=e611]
                          - img [ref=e612]
              - tabpanel [ref=e613]:
                - generic [ref=e614]:
                  - link [ref=e616]:
                    - /url: /products/quan-short-nam-runpow-in-camo
                    - img [ref=e617]
                  - generic [ref=e619]: 21%
                  - generic [ref=e620]:
                    - heading [level=3] [ref=e621]:
                      - link [ref=e622]:
                        - /url: /products/quan-short-nam-runpow-in-camo
                        - text: Quần Short Nam RUNPOW In Camo
                    - img [ref=e625]:
                      - generic [ref=e627]: Giá trải nghiệm
                    - generic [ref=e629]:
                      - paragraph [ref=e630]:
                        - text: 379,000₫
                        - deletion [ref=e631]: 479,000₫
                      - button [ref=e633]:
                        - generic [ref=e634]:
                          - img [ref=e635]
                          - img [ref=e636]
              - tabpanel [ref=e637]:
                - generic [ref=e638]:
                  - link [ref=e640]:
                    - /url: /products/quan-short-nam-runpow-aero-twin
                    - img [ref=e641]
                  - generic [ref=e643]: 20%
                  - generic [ref=e644]:
                    - heading [level=3] [ref=e645]:
                      - link [ref=e646]:
                        - /url: /products/quan-short-nam-runpow-aero-twin
                        - text: Quần Short Nam RUNPOW Aero Twin
                    - img [ref=e649]:
                      - generic [ref=e651]: Giá trải nghiệm
                    - generic [ref=e653]:
                      - paragraph [ref=e654]:
                        - text: 359,000₫
                        - deletion [ref=e655]: 449,000₫
                      - button [ref=e657]:
                        - generic [ref=e658]:
                          - img [ref=e659]
                          - img [ref=e660]
              - tabpanel [ref=e661]:
                - generic [ref=e662]:
                  - link [ref=e664]:
                    - /url: /products/quan-short-kaki-nam-icondenim-scisp
                    - img [ref=e665]
                  - generic [ref=e666]:
                    - heading [level=3] [ref=e667]:
                      - link [ref=e668]:
                        - /url: /products/quan-short-kaki-nam-icondenim-scisp
                        - text: Quần Short Kaki Nam ICONDENIM Scisp
                    - img [ref=e671]:
                      - generic [ref=e672]: Hàng Mới
                    - generic [ref=e674]:
                      - paragraph [ref=e675]: 349,000₫
                      - button [ref=e677]:
                        - generic [ref=e678]:
                          - img [ref=e679]
                          - img [ref=e680]
              - tabpanel [ref=e681]:
                - generic [ref=e682]:
                  - link [ref=e684]:
                    - /url: /products/quan-short-nam-icondenim-zephyr
                    - img [ref=e685]
                  - generic [ref=e686]:
                    - heading [level=3] [ref=e687]:
                      - link [ref=e688]:
                        - /url: /products/quan-short-nam-icondenim-zephyr
                        - text: Quần Short Nam ICONDENIM Zephyr
                    - img [ref=e691]:
                      - generic [ref=e692]: Hàng Mới
                    - generic [ref=e694]:
                      - paragraph [ref=e695]: 249,000₫
                      - button [ref=e697]:
                        - generic [ref=e698]:
                          - img [ref=e699]
                          - img [ref=e700]
              - tabpanel [ref=e701]:
                - generic [ref=e702]:
                  - link [ref=e704]:
                    - /url: /products/quan-short-nam-icondenim-insignia-id
                    - img [ref=e705]
                  - generic [ref=e706]:
                    - heading [level=3] [ref=e707]:
                      - link [ref=e708]:
                        - /url: /products/quan-short-nam-icondenim-insignia-id
                        - text: Quần Short Nam ICONDENIM Insignia ID
                    - img [ref=e711]:
                      - generic [ref=e712]: Hàng Mới
                    - generic [ref=e714]:
                      - paragraph [ref=e715]: 379,000₫
                      - button [ref=e717]:
                        - generic [ref=e718]:
                          - img [ref=e719]
                          - img [ref=e720]
            - button "Next" [ref=e721] [cursor=pointer]
            - tablist [ref=e725]:
              - tab "1 of 3" [selected] [ref=e726] [cursor=pointer]: "1"
              - tab "2 of 3" [ref=e727] [cursor=pointer]: "2"
              - tab "3 of 3" [ref=e728] [cursor=pointer]: "3"
      - generic [ref=e729]:
        - generic [ref=e730]:
          - heading "Đánh giá" [level=4] [ref=e731]
          - link "" [ref=e732] [cursor=pointer]:
            - /url: javascript:void(0)
            - generic [ref=e733]: 
        - generic [ref=e734]:
          - generic [ref=e735]:
            - generic [ref=e736]:
              - generic [ref=e738]: "0"
              - generic [ref=e739]:
                - generic [ref=e740]: 
                - generic [ref=e741]: 
                - generic [ref=e742]: 
                - generic [ref=e743]: 
                - generic [ref=e744]: 
            - generic [ref=e746]:
              - heading "Hàng có vừa không?" [level=4] [ref=e747]
              - generic [ref=e748]:
                - generic [ref=e749]:
                  - generic [ref=e750]: Nhỏ
                  - generic [ref=e752]: 0%
                - generic [ref=e753]:
                  - generic [ref=e754]: Đúng với kích thước
                  - generic [ref=e756]: 0%
                - generic [ref=e757]:
                  - generic [ref=e758]: Lớn
                  - generic [ref=e760]: 0%
          - generic [ref=e761]:
            - list [ref=e763]:
              - listitem [ref=e764]:
                - generic [ref=e765]: Tất cả
              - listitem [ref=e766]:
                - generic [ref=e767]: Có hình ảnh
            - list [ref=e769]:
              - listitem [ref=e770]:
                - generic [ref=e772]:
                  - generic [ref=e773]: 
                  - generic [ref=e774]: 
                  - generic [ref=e775]: 
                  - generic [ref=e776]: 
                  - generic [ref=e777]: 
              - listitem [ref=e778]:
                - generic [ref=e780]:
                  - generic [ref=e781]: 
                  - generic [ref=e782]: 
                  - generic [ref=e783]: 
                  - generic [ref=e784]: 
              - listitem [ref=e785]:
                - generic [ref=e787]:
                  - generic [ref=e788]: 
                  - generic [ref=e789]: 
                  - generic [ref=e790]: 
              - listitem [ref=e791]:
                - generic [ref=e793]:
                  - generic [ref=e794]: 
                  - generic [ref=e795]: 
              - listitem [ref=e796]:
                - generic [ref=e799]: 
          - list [ref=e801]:
            - listitem [ref=e802]: Xem thêm
          - generic [ref=e803]:
            - generic [ref=e804]:
              - link "" [ref=e805] [cursor=pointer]:
                - /url: javascript:void(0)
                - generic [ref=e806]: 
              - heading "Bộ lọc" [level=3] [ref=e807]
            - generic [ref=e808]:
              - list [ref=e810]:
                - listitem [ref=e811]:
                  - generic [ref=e812]: Đen-0042
                - listitem [ref=e813]:
                  - generic [ref=e814]: Xám Đậm-0042
              - list [ref=e816]:
                - listitem [ref=e817]:
                  - generic [ref=e818]: S
                - listitem [ref=e819]:
                  - generic [ref=e820]: M
                - listitem [ref=e821]:
                  - generic [ref=e822]: L
                - listitem [ref=e823]:
                  - generic [ref=e824]: XL
              - list [ref=e826]:
                - listitem [ref=e827]:
                  - generic [ref=e828]:
                    - text: "5"
                    - generic [ref=e829]: 
                - listitem [ref=e830]:
                  - generic [ref=e831]:
                    - text: "4"
                    - generic [ref=e832]: 
                - listitem [ref=e833]:
                  - generic [ref=e834]:
                    - text: "3"
                    - generic [ref=e835]: 
                - listitem [ref=e836]:
                  - generic [ref=e837]:
                    - text: "2"
                    - generic [ref=e838]: 
                - listitem [ref=e839]:
                  - generic [ref=e840]:
                    - text: "1"
                    - generic [ref=e841]: 
            - generic [ref=e843]:
              - link [ref=e844] [cursor=pointer]:
                - /url: javascript:void(0)
                - generic [ref=e845]: 
              - link "Đã xong" [ref=e846] [cursor=pointer]:
                - /url: javascript:void(0)
      - text:                                                         
  - generic [ref=e850]:
    - generic [ref=e851]:
      - paragraph [ref=e852]: Đăng kí nhận tin
      - generic [ref=e854]:
        - generic [ref=e855]:
          - text: 
          - textbox "Email" [ref=e856]
        - button "Đăng ký" [ref=e857] [cursor=pointer]:
          - generic [ref=e858]: 
          - text: Đăng ký
    - list [ref=e860]:
      - listitem [ref=e861]:
        - link "Liên hệ với chúng tôi qua Zalo" [ref=e862] [cursor=pointer]:
          - /url: //zalo.me/3664144181122308942
          - img "Liên hệ với chúng tôi qua Zalo" [ref=e863]
      - listitem [ref=e864]:
        - link [ref=e865] [cursor=pointer]:
          - /url: https://www.youtube.com/@storehanghieu1608
          - generic [ref=e866]: 
      - listitem [ref=e867]:
        - link [ref=e868] [cursor=pointer]:
          - /url: https://www.instagram.com/160store
          - generic [ref=e869]: 
      - listitem [ref=e870]:
        - link [ref=e871] [cursor=pointer]:
          - /url: https://www.facebook.com/160store
          - generic [ref=e872]: 
  - contentinfo [ref=e873]:
    - generic [ref=e875]:
      - generic [ref=e876]:
        - generic [ref=e877]:
          - generic [ref=e879]: Giới thiệu
          - generic [ref=e880]:
            - paragraph [ref=e881]: 160STORE - Chuỗi Phân Phối Thời Trang Nam Chuẩn Hiệu
            - list [ref=e882]:
              - listitem [ref=e883]:
                - generic [ref=e884]: 
                - link "02871006789" [ref=e885] [cursor=pointer]:
                  - /url: tel:02871006789
              - listitem [ref=e886]:
                - generic [ref=e887]: 
                - link "cs@160store.com" [ref=e888] [cursor=pointer]:
                  - /url: mailto:cs@160store.com
              - listitem [ref=e889]:
                - generic [ref=e890]: 
                - generic [ref=e891]: "Giờ mở cửa : 08:30 - 22:00"
              - listitem [ref=e892]:
                - generic [ref=e893]: 
                - generic [ref=e894]: Nhân viên tư vấn phản hồi tin nhắn đến 24:00 (Mỗi ngày)
              - listitem [ref=e895]:
                - link [ref=e896] [cursor=pointer]:
                  - /url: http://online.gov.vn/nen-tang/1a643809-3f92-4419-944d-c2d4fdffb78b
                  - img [ref=e897]
              - listitem [ref=e898]:
                - link "DMCA.com Protection Status" [ref=e899] [cursor=pointer]:
                  - /url: https://www.dmca.com/Protection/Status.aspx?ID=9049de26-d97b-48dc-ab97-1e5fcb221fba&refurl=https://160store.com/products/quan-short-nam-runpow-aero-twin
                  - img "DMCA.com Protection Status" [ref=e900]
        - generic [ref=e901]:
          - generic [ref=e903]: CHÍNH SÁCH
          - list [ref=e905]:
            - listitem [ref=e906]:
              - link "Hướng dẫn đặt hàng" [ref=e907] [cursor=pointer]:
                - /url: /pages/huong-dan-dat-hang
            - listitem [ref=e908]:
              - paragraph [ref=e911] [cursor=pointer]: Chính sách
        - generic [ref=e913]:
          - link "ĐỊA CHỈ CỬA HÀNG (20 CH)" [ref=e916] [cursor=pointer]:
            - /url: https://www.160store.com/pages/lien-he
          - generic [ref=e918]:
            - generic [ref=e919]:
              - generic [ref=e920]:
                - img [ref=e921]
                - paragraph [ref=e922]: HỒ CHÍ MINH (10 CH)
              - paragraph [ref=e923]: 274 Ba Cu, Phường Vũng Tàu, TP.HCM
            - generic [ref=e924]:
              - generic [ref=e925]:
                - img [ref=e926]
                - paragraph [ref=e927]:
                  - text: HÀ NỘI (2 CH)
                  - generic [ref=e928]: New
              - paragraph [ref=e929]: 27 Tôn Đức Thắng - P. Văn Miếu - Quốc Tử Giám; TP. Hà Nội
            - generic [ref=e930]:
              - generic [ref=e931]:
                - img [ref=e932]
                - paragraph [ref=e933]: CẦN THƠ (2 CH)
              - paragraph [ref=e934]: Số 35 Trần Phú, Phường Ninh Kiều, TP.Cần Thơ
            - generic [ref=e935]:
              - generic [ref=e936]:
                - img [ref=e937]
                - paragraph [ref=e938]: ĐÀ NẴNG (2 CH)
              - paragraph [ref=e939]: 332 Đ. Lê Duẩn, Phường Thanh Khê, TP.Đà Nẵng
            - link "XEM TẤT CẢ CỬA HÀNG" [ref=e941] [cursor=pointer]:
              - /url: https://www.160store.com/pages/lien-he
        - generic [ref=e944]:
          - generic [ref=e945]: PHƯƠNG THỨC THANH TOÁN
          - generic [ref=e946]:
            - img "Image Spay" [ref=e947]
            - img "Image VNPay" [ref=e948]
            - img "Image Cod" [ref=e949]
      - generic [ref=e954]: BẢN QUYỀN THUỘC VỀ 160STORE
  - list [ref=e956]
  - text: 
  - button "back to top" [ref=e958] [cursor=pointer]:
    - img [ref=e959]
    - text: back to top
  - paragraph [ref=e965]: Bạn chưa chọn size sản phẩm!
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
            - strong: Quần Short Nam RUNPOW Aero Twin
          - generic:
            - generic: "Từ khóa chính:"
            - strong: quần short nam runpow
          - generic:
            - generic: "Tiêu chí đạt:"
            - strong: 26/38
      - generic:
        - generic: "❌ Chi tiết lỗi cần khắc phục (12):"
        - generic:
          - generic:
            - generic:
              - strong: "1.2 — Độ dài Title: 31 ký tự (chuẩn: 40–65)"
              - generic: "1.2"
            - generic: "⚠️ Lỗi: Title quá ngắn hoặc quá dài (31 ký tự), cần 40–65"
          - generic:
            - generic:
              - strong: "2.2 — Độ dài Meta: 195 ký tự (chuẩn: 120–160)"
              - generic: "2.2"
            - generic: "⚠️ Lỗi: Meta description quá ngắn hoặc quá dài (195 ký tự), cần 120–160"
          - generic:
            - generic:
              - strong: 2.3 — Meta description chứa keyword "quần short nam runpow"
              - generic: "2.3"
            - generic: "⚠️ Lỗi: Meta description không chứa keyword \"quần short nam runpow\""
          - generic:
            - generic:
              - strong: "3.1 — Trang có đúng 1 thẻ H1 (hiện tại: 58 thẻ)"
              - generic: "3.1"
            - generic: "⚠️ Lỗi: Trang có 58 thẻ H1, bắt buộc đúng 1 thẻ duy nhất!"
          - generic:
            - generic:
              - strong: 3.3 — Heading phân cấp hợp lệ (2 lỗi)
              - generic: "3.3"
            - generic: "⚠️ Lỗi: Heading phân cấp sai: Nhảy cấp từ H1 → H3 (\"KHUYẾN MÃI - ONLY ONLINE\"); Nhảy cấp từ H2 → H4 (\"Đánh giá\")"
          - generic:
            - generic:
              - strong: 4.2 — URL chứa keyword slug "quần-short-nam-runpow"
              - generic: "4.2"
            - generic: "⚠️ Lỗi: URL \"/products/quan-short-nam-runpow-aero-twin\" không chứa keyword \"quần-short-nam-runpow\""
          - generic:
            - generic:
              - strong: "5.2 — Mật độ keyword: 0.16% (chuẩn: 0.5%–2.5%)"
              - generic: "5.2"
            - generic: "⚠️ Lỗi: Mật độ keyword quá thấp: 0.16%, cần ≥ 0.5%"
          - generic:
            - generic:
              - strong: 5.3 — Keyword "quần short nam runpow" xuất hiện trong 100 từ đầu
              - generic: "5.3"
            - generic: "⚠️ Lỗi: Keyword \"quần short nam runpow\" không xuất hiện trong 100 từ đầu"
          - generic:
            - generic:
              - strong: "6.1 — 100% ảnh có thuộc tính alt (thiếu: 29/74)"
              - generic: "6.1"
            - generic: "⚠️ Lỗi: Có 29 hình ảnh thiếu thuộc tính 'alt'"
          - generic:
            - generic:
              - strong: "7.3 — Anchor text chất lượng (lỗi: 22)"
              - generic: "7.3"
            - generic: "⚠️ Lỗi: 22 link có anchor text không tốt: \"\" → /, \"\" → /, \"\" → /, \"\" → /, \"\" → //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-10_17cbfd4c1dc14c44b21e3101b99dae44_1024x1024.jpg, \"\" → //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-1_f4a518360a324893a0dd44dc0bea2e43_1024x1024.jpg, \"\" → //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-5_c2e002aec7c347c1b0056a79e8b0966b_1024x1024.jpg, \"\" → //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-8_3e86bc46d15f493cbaa699bfee2de329_1024x1024.jpg, \"\" → //cdn.hstatic.net/products/1000253775/sq-qstn-regular-c-runpow_e540c2f4307147c3857e7b9d3852ae9b_1024x1024.jpg, \"\" → //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-2_88ce46a8855343faa7e015145f506c30_1024x1024.jpg, \"\" → //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-3_93ebb439d926483aa02ec52ab4637912_1024x1024.jpg, \"\" → //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-4_b9313ee1a0ca46998a59721a0068f10c_1024x1024.jpg, \"\" → //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-6_167e4057f6e742a5b428b4bc54b9b79d_1024x1024.jpg, \"\" → //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-7_483606631b0e43a793ed8e4c0a526495_1024x1024.jpg, \"\" → //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-9_2a154330c69c4634b3192e923f9b5e3c_1024x1024.jpg, \"\" → //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-11_d496c2bd593b4c5c9cc5a7b93c5a4881_1024x1024.jpg, \"\" → //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-12_d500becd4ddd4d5c9cb9f6904adc0ced_1024x1024.jpg, \"\" → //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-13_7b64804a4136497fbad77f92857ef6ce_1024x1024.jpg, \"\" → //cdn.hstatic.net/products/1000253775/quan-short-nam-runpow-aero-twin-14_9eeb2e976eba4c40afd17ae5916af325_1024x1024.jpg, \"\" → //zalo.me/3664144181122308942, \"\" → //m.me/1042686802417049, \"\" → //zalo.me/3664144181122308942"
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