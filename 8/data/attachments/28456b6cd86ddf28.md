# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo.spec.ts >> SEO TIÊU CHUẨN CƠ BẢN CHO WEB >> Kiểm tra SEO Onpage: Áo ni - sweater
- Location: tests/seo.spec.ts:16:9

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
        - generic [ref=e108]: ÁO NỈ - SWEATER
    - generic [ref=e111]:
      - img "ÁO NỈ - SWEATER" [ref=e114]
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
            - link "Set Đồ Nam ICONDENIM Distance" [ref=e125] [cursor=pointer]:
              - /url: /products/set-do-nam-icondenim-distance
              - img "Set Đồ Nam ICONDENIM Distance" [ref=e126]
            - generic [ref=e128]: 20%
            - generic [ref=e129]:
              - heading "Set Đồ Nam ICONDENIM Distance" [level=3] [ref=e130]:
                - link "Set Đồ Nam ICONDENIM Distance" [ref=e131] [cursor=pointer]:
                  - /url: /products/set-do-nam-icondenim-distance
              - img [ref=e134]:
                - generic [ref=e136]: Sale
              - generic [ref=e137]:
                - generic [ref=e138]:
                  - paragraph [ref=e139]: 319,200₫ ~ 662,400₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e141] [cursor=pointer]:
                    - generic [ref=e142]:
                      - img "Thêm vào giỏ" [ref=e143]
                      - img "Thêm vào giỏ" [ref=e144]
                - list
          - generic [ref=e146]:
            - link "Áo Sweatshirt Nam MICONDENIM Challenge" [ref=e148] [cursor=pointer]:
              - /url: /products/ao-sweatshirt-nam-icondenim-challenge
              - img "Áo Sweatshirt Nam MICONDENIM Challenge" [ref=e149]
            - generic [ref=e151]: 33%
            - generic [ref=e152]:
              - heading "Áo Sweatshirt Nam MICONDENIM Challenge" [level=3] [ref=e153]:
                - link "Áo Sweatshirt Nam MICONDENIM Challenge" [ref=e154] [cursor=pointer]:
                  - /url: /products/ao-sweatshirt-nam-icondenim-challenge
              - img [ref=e157]:
                - generic [ref=e159]: Sale
              - generic [ref=e160]:
                - generic [ref=e161]:
                  - paragraph [ref=e162]:
                    - text: 299,000₫
                    - deletion [ref=e163]: 449,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e165] [cursor=pointer]:
                    - generic [ref=e166]:
                      - img "Thêm vào giỏ" [ref=e167]
                      - img "Thêm vào giỏ" [ref=e168]
                - list
          - generic [ref=e170]:
            - link "Áo Sweatshirt Nam ICONDENIM Dallas" [ref=e172] [cursor=pointer]:
              - /url: /products/ao-sweatshirt-nam-icondenim-dallas
              - img "Áo Sweatshirt Nam ICONDENIM Dallas" [ref=e173]
            - generic [ref=e175]: 33%
            - generic [ref=e176]:
              - heading "Áo Sweatshirt Nam ICONDENIM Dallas" [level=3] [ref=e177]:
                - link "Áo Sweatshirt Nam ICONDENIM Dallas" [ref=e178] [cursor=pointer]:
                  - /url: /products/ao-sweatshirt-nam-icondenim-dallas
              - img [ref=e181]:
                - generic [ref=e183]: Sale
              - generic [ref=e184]:
                - generic [ref=e185]:
                  - paragraph [ref=e186]:
                    - text: 299,000₫
                    - deletion [ref=e187]: 449,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e189] [cursor=pointer]:
                    - generic [ref=e190]:
                      - img "Thêm vào giỏ" [ref=e191]
                      - img "Thêm vào giỏ" [ref=e192]
                - list
          - generic [ref=e194]:
            - link "ao-sweatshirt-nam-icondenim-dynamic" [ref=e196] [cursor=pointer]:
              - /url: /products/ao-sweatshirt-nam-icondenim-dynamic
              - img "ao-sweatshirt-nam-icondenim-dynamic" [ref=e197]
            - generic [ref=e199]: 40%
            - generic [ref=e200]:
              - heading "Áo Sweatshirt Nam ICONDENIM Dynamic" [level=3] [ref=e201]:
                - link "Áo Sweatshirt Nam ICONDENIM Dynamic" [ref=e202] [cursor=pointer]:
                  - /url: /products/ao-sweatshirt-nam-icondenim-dynamic
              - img [ref=e205]:
                - generic [ref=e207]: Sale
              - generic [ref=e208]:
                - generic [ref=e209]:
                  - paragraph [ref=e210]:
                    - text: 299,000₫
                    - deletion [ref=e211]: 499,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e213] [cursor=pointer]:
                    - generic [ref=e214]:
                      - img "Thêm vào giỏ" [ref=e215]
                      - img "Thêm vào giỏ" [ref=e216]
                - list
          - generic [ref=e218]:
            - link "Áo Sweatshirt Nam ICONDENIM Varsity States" [ref=e220] [cursor=pointer]:
              - /url: /products/ao-sweatshirt-nam-icondenim-varsity-states
              - img "Áo Sweatshirt Nam ICONDENIM Varsity States" [ref=e221]
            - generic [ref=e223]: 25%
            - generic [ref=e224]:
              - heading "Áo Sweatshirt Nam ICONDENIM Varsity States" [level=3] [ref=e225]:
                - link "Áo Sweatshirt Nam ICONDENIM Varsity States" [ref=e226] [cursor=pointer]:
                  - /url: /products/ao-sweatshirt-nam-icondenim-varsity-states
              - img [ref=e229]:
                - generic [ref=e231]: Sale
              - generic [ref=e232]:
                - generic [ref=e233]:
                  - paragraph [ref=e234]:
                    - text: 299,000₫
                    - deletion [ref=e235]: 399,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e237] [cursor=pointer]:
                    - generic [ref=e238]:
                      - img "Thêm vào giỏ" [ref=e239]
                      - img "Thêm vào giỏ" [ref=e240]
                - list
          - generic [ref=e242]:
            - link "Áo Sweatshirt Nam ICONDENIM Intramural" [ref=e244] [cursor=pointer]:
              - /url: /products/ao-sweatshirt-nam-icondenim-intramural
              - img "Áo Sweatshirt Nam ICONDENIM Intramural" [ref=e245]
            - generic [ref=e247]: 15%
            - generic [ref=e248]:
              - heading "Áo Nỉ Sweatshirt Nam ICONDENIM Intramural" [level=3] [ref=e249]:
                - link "Áo Nỉ Sweatshirt Nam ICONDENIM Intramural" [ref=e250] [cursor=pointer]:
                  - /url: /products/ao-sweatshirt-nam-icondenim-intramural
              - img [ref=e253]:
                - generic [ref=e255]: Sale
              - generic [ref=e256]:
                - generic [ref=e257]:
                  - paragraph [ref=e258]:
                    - text: 322,000₫
                    - deletion [ref=e259]: 379,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e261] [cursor=pointer]:
                    - generic [ref=e262]:
                      - img "Thêm vào giỏ" [ref=e263]
                      - img "Thêm vào giỏ" [ref=e264]
                - list
          - generic [ref=e266]:
            - link "Áo Sweatshirt Nam ICONDENIM Track Life" [ref=e268] [cursor=pointer]:
              - /url: /products/ao-sweatshirt-nam-icondenim-track-life
              - img "Áo Sweatshirt Nam ICONDENIM Track Life" [ref=e269]
            - generic [ref=e271]: 34%
            - generic [ref=e272]:
              - heading "Áo Nỉ Sweatshirt Nam ICONDENIM Track Life" [level=3] [ref=e273]:
                - link "Áo Nỉ Sweatshirt Nam ICONDENIM Track Life" [ref=e274] [cursor=pointer]:
                  - /url: /products/ao-sweatshirt-nam-icondenim-track-life
              - img [ref=e277]:
                - generic [ref=e279]: Sale
              - generic [ref=e280]:
                - generic [ref=e281]:
                  - paragraph [ref=e282]:
                    - text: 249,000₫
                    - deletion [ref=e283]: 379,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e285] [cursor=pointer]:
                    - generic [ref=e286]:
                      - img "Thêm vào giỏ" [ref=e287]
                      - img "Thêm vào giỏ" [ref=e288]
                - list
          - generic [ref=e290]:
            - link "Áo Nỉ Nam ICONDENIM Mickey & Friends Bring The Bold Form Regular" [ref=e292] [cursor=pointer]:
              - /url: /products/ao-sweatshirt-icondenim-ft-disney-bring-the-bold
              - img "Áo Nỉ Nam ICONDENIM Mickey & Friends Bring The Bold Form Regular" [ref=e293]
            - generic [ref=e295]: 45%
            - generic [ref=e296]:
              - heading "Áo Nỉ Nam ICONDENIM Mickey & Friends Bring The Bold Form Regular" [level=3] [ref=e297]:
                - link "Áo Nỉ Nam ICONDENIM Mickey & Friends Bring The Bold Form Regular" [ref=e298] [cursor=pointer]:
                  - /url: /products/ao-sweatshirt-icondenim-ft-disney-bring-the-bold
              - img [ref=e301]:
                - generic [ref=e303]: Sale
              - generic [ref=e304]:
                - generic [ref=e305]:
                  - paragraph [ref=e306]:
                    - text: 249,000₫
                    - deletion [ref=e307]: 449,000₫
                  - generic:
                    - button "Btn Quickview":
                      - img "Btn Quickview"
                  - button "Thêm vào giỏ Thêm vào giỏ" [ref=e309] [cursor=pointer]:
                    - generic [ref=e310]:
                      - img "Thêm vào giỏ" [ref=e311]
                      - img "Thêm vào giỏ" [ref=e312]
                - list
        - generic:
          - paragraph
        - generic [ref=e313]:
          - generic [ref=e314]:
            - paragraph [ref=e315]: Trong những ngày se lạnh, áo Sweater chính là "người bạn đồng hành" lý tưởng, mang đến sự ấm áp, tạo phong cách ấn tượng. 160STORE tự hào là điểm đến cho những ai đang tìm kiếm những chiếc áo nỉ - Sweater hoàn hảo. Cùng tìm hiểu về loại áo này trong bài viết sau bạn nhé!
            - heading "Áo Sweater là gì?" [level=2] [ref=e316]:
              - strong [ref=e317]: Áo Sweater là gì?
            - paragraph [ref=e318]: Từ lâu, áo Sweater len rất phổ biến tại nhiều quốc gia có khí hậu lạnh nhờ sự ấm áp và tính tiện dụng. Áo Sweater ngày nay được làm từ nhiều chất liệu khác nhau như len, nỉ, cotton, thun, tạo nên hàng ngàn sự lựa chọn.
            - paragraph [ref=e319]: Đặc trưng của áo Sweater là thiết kế chui đầu, dài tay, không có mũ, bo thun ở cổ tay, cổ áo và gấu áo. Đặc điểm không mũ này của áo nỉ Sweater cũng là dấu hiệu để phân biệt với áo hoodie. Với sự đa dạng về màu sắc, họa tiết và kiểu dáng, áo Sweater dễ dàng phối hợp với nhiều trang phục khác nhau.
            - paragraph [ref=e320]:
              - img "Áo Sweater có thiết kế chui đầu, dài tay, không mũ và bo thun ở cổ tay, cổ áo, gấu áo" [ref=e321]
            - paragraph [ref=e322]:
              - emphasis [ref=e323]: Áo Sweater có thiết kế chui đầu, dài tay, không mũ và bo thun ở cổ tay, cổ áo, gấu áo
            - heading "Cách phối đồ cùng áo Sweater cực chất" [level=2] [ref=e324]:
              - strong [ref=e325]: Cách phối đồ cùng áo Sweater cực chất
            - paragraph [ref=e326]: Là món đồ "must-have" cho mùa thu đông, áo nỉ không chỉ giữ ấm mà còn giúp bạn có những set đồ cá tính. Dưới đây là một số cách phối đồ cực chất với áo nỉ.
            - heading "Áo nỉ Sweater và áo sơ mi" [level=3] [ref=e327]:
              - strong [ref=e328]: Áo nỉ Sweater và áo sơ mi
            - paragraph [ref=e329]: Đây là sự kết hợp cổ điển nhưng không bao giờ lỗi mốt. Áo khoác Sweater với áo sơ mi tạo nên phong cách layering đầy ấn tượng. Bạn có thể chọn áo Sweater trơn hoặc họa tiết, kết hợp cùng áo sơ mi trắng basic hoặc họa tiết để tạo điểm nhấn.
            - paragraph [ref=e330]:
              - img "Phối áo nỉ Sweater và áo sơ mi" [ref=e331]
            - paragraph [ref=e332]:
              - emphasis [ref=e333]: Phối áo nỉ Sweater và áo sơ mi
            - heading "Áo Sweater và quần ống rộng" [level=3] [ref=e334]:
              - strong [ref=e335]: Áo Sweater và quần ống rộng
            - paragraph [ref=e336]: Sự kết hợp giữa áo nỉ và quần ống rộng là xu hướng thời trang được ưa chuộng trong những năm gần đây. Phong cách này mang đến sự trẻ trung, năng động, không kém phần thời thượng, giúp phái mạnh tự tin khẳng định cá tính riêng.
            - paragraph [ref=e337]: Áo nỉ với chất liệu mềm mại cùng quần ống rộng sẽ tạo cảm giác thoải mái khi vận động. Sự kết hợp này còn phá vỡ những quy tắc thời trang truyền thống, mang đến vẻ ngoài độc đáo, thu hút cho phái mạnh. Đặc biệt, bộ đôi này cũng phù hợp với hầu hết mọi vóc dáng, giúp che đi khuyết điểm cơ thể một cách hiệu quả.
            - heading "Áo Sweater và quần Jogger" [level=3] [ref=e338]:
              - strong [ref=e339]: Áo Sweater và quần Jogger
            - paragraph [ref=e340]: Sự kết hợp giữa áo Sweater và quần jogger nam ngày càng trở nên phổ biến nhờ chất liệu mềm mại, co giãn tốt. Nhờ kiểu dáng rộng rãi, không bó sát mà bạn có thể dễ dàng di chuyển, thoải mái hoạt động với set Sweater và jogger. Set đồ này cũng phù hợp cho nhiều hoàn cảnh khác nhau, từ đi chơi, dạo phố, tập thể thao đến đi học, đi làm.
            - paragraph [ref=e341]:
              - img "Áo Sweater và quần Jogger năng động" [ref=e342]
            - paragraph [ref=e343]:
              - emphasis [ref=e344]: Áo Sweater và quần Jogger năng động
            - heading "Áo Sweater và quần Jeans" [level=3] [ref=e345]:
              - strong [ref=e346]: Áo Sweater và quần Jeans
            - paragraph [ref=e347]: Áo Sweater form rộng và quần jeans là biểu tượng thời trang của nam giới, đại diện cho phong cách năng động, trẻ trung. Ngày nay, bộ đôi này đã được biến tấu với nhiều kiểu dáng, mẫu mã đa dạng, phù hợp với mọi hoàn cảnh. Từ phong cách thường ngày đến thanh lịch, sự kết hợp này đều có thể đáp ứng nhu cầu của phái mạnh.
            - paragraph [ref=e348]: Ngoài ra, set đồ này còn thể hiện gu thẩm mỹ của người mặc. Cách phối đồ sáng tạo với những phụ kiện khác nhau sẽ giúp bạn tạo điểm nhấn và thu hút mọi ánh nhìn.
            - paragraph [ref=e349]:
              - img "Phối áo Sweater với quần Jeans" [ref=e350]
            - paragraph [ref=e351]:
              - emphasis [ref=e352]: Phối áo Sweater với quần Jeans
            - heading "Các mẫu và màu áo Sweater được nam giới ưa chuộng nhất" [level=2] [ref=e353]:
              - strong [ref=e354]: Các mẫu và màu áo Sweater được nam giới ưa chuộng nhất
            - paragraph [ref=e355]: "Áo Sweater luôn được các chàng trai săn đón bởi sự ấm áp, thoải mái và dễ dàng phối đồ. Dưới đây là một số mẫu và màu áo Sweater được nam giới ưa chuộng nhất hiện nay:"
            - heading "Áo Sweater đen" [level=3] [ref=e356]:
              - strong [ref=e357]: Áo Sweater đen
            - paragraph [ref=e358]: Sức hút của áo Sweater đen nằm ở sự đơn giản nhưng tinh tế. Gam màu đen tuyền tuy tối giản nhưng lại toát lên vẻ đẹp mạnh mẽ, lịch lãm, dễ dàng kết hợp với mọi phong cách. Với khả năng phối đồ linh hoạt, áo Sweater đen có thể kết hợp với quần jean, kaki, jogger để tạo nên phong cách năng động. Khi cần sự lịch lãm, hãy kết hợp Sweater đen với quần âu và áo sơ mi.
            - paragraph [ref=e359]:
              - img "Mẫu áo Sweater đen đầy cá tính" [ref=e360]
            - paragraph [ref=e361]:
              - emphasis [ref=e362]: Mẫu áo Sweater đen đầy cá tính
            - heading "Áo Sweater trắng" [level=3] [ref=e363]:
              - strong [ref=e364]: Áo Sweater trắng
            - paragraph [ref=e365]: Tương tự như Sweater đen, màu trắng cũng được ưu tiên bởi sự linh hoạt, dễ phối đồ và tôn lên vẻ ngoài thanh lịch. Về kiểu dáng, áo Sweater trắng có đa dạng mẫu mã để đáp ứng mọi sở thích và phong cách. Áo Sweater cổ tròn basic là lựa chọn an toàn và dễ phối đồ nhất. Áo cổ tim lại mang nét trẻ trung, năng động.
            - paragraph [ref=e366]: Bạn có thể phối áo trắng với quần jean xanh và giày sneaker trắng cho những buổi dạo phố. Để thêm phần cá tính, bạn có thể phối áo Sweater trắng với quần jogger, áo thun basic và boots da. Nếu muốn trông lịch lãm, trang trọng hơn, hãy kết hợp với quần âu, áo sơ mi và giày tây.
            - heading "Áo Sweater đỏ" [level=3] [ref=e367]:
              - strong [ref=e368]: Áo Sweater đỏ
            - paragraph [ref=e369]: Sở hữu gam màu rực rỡ, áo Sweater đỏ toát lên sự tự tin, cá tính, giúp phái mạnh khẳng định phong cách riêng. Gam màu này cũng là biểu tượng cho sự may mắn, nhiệt huyết, thu hút và tạo ấn tượng mạnh mẽ trong mọi hoàn cảnh.
            - heading "Áo Sweater màu be" [level=3] [ref=e370]:
              - strong [ref=e371]: Áo Sweater màu be
            - paragraph [ref=e372]: Màu be sở hữu sự nhẹ nhàng, ấm áp, dễ dàng kết hợp với nhiều phong cách thời trang khác nhau. Một chiếc áo Sweater màu be đơn giản có thể được phối cùng quần jeans, chinos, jogger để tạo nên set đồ casual năng động. Với những ưu điểm về màu sắc, kiểu dáng, áo Sweater màu be xứng đáng có mặt trong mọi tủ đồ của mọi nam giới.
            - paragraph [ref=e373]:
              - img "Áo Sweater màu be năng động" [ref=e374]
            - paragraph [ref=e375]:
              - emphasis [ref=e376]: Áo Sweater màu be năng động
            - heading "Cách chọn size áo nỉ Sweater" [level=2] [ref=e377]:
              - strong [ref=e378]: Cách chọn size áo nỉ Sweater
            - paragraph [ref=e379]: "Chọn size áo Sweater phù hợp không chỉ giúp bạn thoải mái mà còn tôn lên vóc dáng, tạo phong cách thời trang riêng biệt. Tuy nhiên, để lựa chọn size áo chính xác, bạn nên đến trực tiếp cửa hàng thử áo. Ngoài ra, có thể dựa vào số đo cơ thể và tham khảo bảng size áo khi chọn áo Sweater:"
            - paragraph [ref=e380]:
              - img "Bảng size áo nỉ sweater" [ref=e381]
            - paragraph [ref=e382]:
              - emphasis [ref=e383]: Bảng size áo Sweater chuẩn cho bạn tham khảo
            - heading "Chuỗi cửa hàng phân phối áo Sweater local brand - 160STORE" [level=2] [ref=e384]:
              - strong [ref=e385]: Chuỗi cửa hàng phân phối áo Sweater local brand - 160STORE
            - paragraph [ref=e386]: 160STORE là chuỗi phân phối áo Sweater chất lượng, được trau chuốt tỉ mỉ từ thiết kế đến chất liệu. Các thiết kế trẻ trung, năng động, phù hợp với mọi lứa tuổi và phong cách. Bạn sẽ dễ dàng lựa chọn được những chiếc áo Sweater ưng ý để tự tin thể hiện cá tính riêng của mình. Hãy đến với 160STORE để trải nghiệm những sản phẩm áo Sweater chất lượng cao và dịch vụ khách hàng chuyên nghiệp.
            - paragraph [ref=e387]:
              - img "Cửa hàng phân phối áo Sweater local brand" [ref=e388]
            - paragraph [ref=e389]:
              - emphasis [ref=e390]: Đến với 160STORE để trải nghiệm không gian mua sắm hiện đại
            - paragraph [ref=e391]: Với sự đa dạng về kiểu dáng, chất liệu, màu sắc, áo Sweater tại 160STORE luôn đáp ứng mọi nhu cầu, sở thích của bạn. Dù bạn muốn tìm kiếm một chiếc áo Sweater ấm áp hay item cá tính, chúng tôi luôn có sản phẩm phù hợp dành cho bạn. Hãy truy cập website của 160STORE hoặc đến trực tiếp cửa hàng để khám phá thêm nhiều mẫu áo Sweater mới nhất!
          - button "Xem thêm" [ref=e393] [cursor=pointer]
  - generic [ref=e397]:
    - generic [ref=e398]:
      - paragraph [ref=e399]: Đăng kí nhận tin
      - generic [ref=e401]:
        - generic [ref=e402]:
          - text: 
          - textbox "Email" [ref=e403]
        - button "Đăng ký" [ref=e404] [cursor=pointer]:
          - generic [ref=e405]: 
          - text: Đăng ký
    - list [ref=e407]:
      - listitem [ref=e408]:
        - link "Liên hệ với chúng tôi qua Zalo" [ref=e409] [cursor=pointer]:
          - /url: //zalo.me/3664144181122308942
          - img "Liên hệ với chúng tôi qua Zalo" [ref=e410]
      - listitem [ref=e411]:
        - link [ref=e412] [cursor=pointer]:
          - /url: https://www.youtube.com/@storehanghieu1608
          - generic [ref=e413]: 
      - listitem [ref=e414]:
        - link [ref=e415] [cursor=pointer]:
          - /url: https://www.instagram.com/160store
          - generic [ref=e416]: 
      - listitem [ref=e417]:
        - link [ref=e418] [cursor=pointer]:
          - /url: https://www.facebook.com/160store
          - generic [ref=e419]: 
  - contentinfo [ref=e420]:
    - generic [ref=e422]:
      - generic [ref=e423]:
        - generic [ref=e424]:
          - generic [ref=e426]: Giới thiệu
          - generic [ref=e427]:
            - paragraph [ref=e428]: 160STORE - Chuỗi Phân Phối Thời Trang Nam Chuẩn Hiệu
            - list [ref=e429]:
              - listitem [ref=e430]:
                - generic [ref=e431]: 
                - link "02871006789" [ref=e432] [cursor=pointer]:
                  - /url: tel:02871006789
              - listitem [ref=e433]:
                - generic [ref=e434]: 
                - link "cs@160store.com" [ref=e435] [cursor=pointer]:
                  - /url: mailto:cs@160store.com
              - listitem [ref=e436]:
                - generic [ref=e437]: 
                - generic [ref=e438]: "Giờ mở cửa : 08:30 - 22:00"
              - listitem [ref=e439]:
                - generic [ref=e440]: 
                - generic [ref=e441]: Nhân viên tư vấn phản hồi tin nhắn đến 24:00 (Mỗi ngày)
              - listitem [ref=e442]:
                - link [ref=e443] [cursor=pointer]:
                  - /url: http://online.gov.vn/nen-tang/1a643809-3f92-4419-944d-c2d4fdffb78b
                  - img [ref=e444]
              - listitem [ref=e445]:
                - link "DMCA.com Protection Status" [ref=e446] [cursor=pointer]:
                  - /url: https://www.dmca.com/Protection/Status.aspx?ID=9049de26-d97b-48dc-ab97-1e5fcb221fba&refurl=https://160store.com/collections/ao-ni-sweater
                  - img "DMCA.com Protection Status" [ref=e447]
        - generic [ref=e448]:
          - generic [ref=e450]: CHÍNH SÁCH
          - list [ref=e452]:
            - listitem [ref=e453]:
              - link "Hướng dẫn đặt hàng" [ref=e454] [cursor=pointer]:
                - /url: /pages/huong-dan-dat-hang
            - listitem [ref=e455]:
              - paragraph [ref=e458] [cursor=pointer]: Chính sách
        - generic [ref=e460]:
          - link "ĐỊA CHỈ CỬA HÀNG (20 CH)" [ref=e463] [cursor=pointer]:
            - /url: https://www.160store.com/pages/lien-he
          - generic [ref=e465]:
            - generic [ref=e466]:
              - generic [ref=e467]:
                - img [ref=e468]
                - paragraph [ref=e469]: HỒ CHÍ MINH (10 CH)
              - paragraph [ref=e470]: 274 Ba Cu, Phường Vũng Tàu, TP.HCM
            - generic [ref=e471]:
              - generic [ref=e472]:
                - img [ref=e473]
                - paragraph [ref=e474]:
                  - text: HÀ NỘI (2 CH)
                  - generic [ref=e475]: New
              - paragraph [ref=e476]: 27 Tôn Đức Thắng - P. Văn Miếu - Quốc Tử Giám; TP. Hà Nội
            - generic [ref=e477]:
              - generic [ref=e478]:
                - img [ref=e479]
                - paragraph [ref=e480]: CẦN THƠ (2 CH)
              - paragraph [ref=e481]: Số 35 Trần Phú, Phường Ninh Kiều, TP.Cần Thơ
            - generic [ref=e482]:
              - generic [ref=e483]:
                - img [ref=e484]
                - paragraph [ref=e485]: ĐÀ NẴNG (2 CH)
              - paragraph [ref=e486]: 332 Đ. Lê Duẩn, Phường Thanh Khê, TP.Đà Nẵng
            - link "XEM TẤT CẢ CỬA HÀNG" [ref=e488] [cursor=pointer]:
              - /url: https://www.160store.com/pages/lien-he
        - generic [ref=e491]:
          - generic [ref=e492]: PHƯƠNG THỨC THANH TOÁN
          - generic [ref=e493]:
            - img "Image Spay" [ref=e494]
            - img "Image VNPay" [ref=e495]
            - img "Image Cod" [ref=e496]
      - generic [ref=e501]: BẢN QUYỀN THUỘC VỀ 160STORE
  - list [ref=e503]
  - button "back to top" [ref=e505] [cursor=pointer]:
    - img [ref=e506]
    - text: back to top
  - paragraph [ref=e512]: Bạn chưa chọn size sản phẩm!
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
            - strong: Áo ni - sweater
          - generic:
            - generic: "Từ khóa chính:"
            - strong: áo ni - sweater
          - generic:
            - generic: "Tiêu chí đạt:"
            - strong: 25/38
      - generic:
        - generic: "❌ Chi tiết lỗi cần khắc phục (13):"
        - generic:
          - generic:
            - generic:
              - strong: 1.3 — Title chứa keyword "áo ni - sweater"
              - generic: "1.3"
            - generic: "⚠️ Lỗi: Title không chứa keyword \"áo ni - sweater\""
          - generic:
            - generic:
              - strong: "1.4 — Keyword nằm ở nửa đầu Title (vị trí: N/A)"
              - generic: "1.4"
            - generic: "⚠️ Lỗi: Bỏ qua — keyword \"áo ni - sweater\" không có trong Title"
          - generic:
            - generic:
              - strong: "2.2 — Độ dài Meta: 179 ký tự (chuẩn: 120–160)"
              - generic: "2.2"
            - generic: "⚠️ Lỗi: Meta description quá ngắn hoặc quá dài (179 ký tự), cần 120–160"
          - generic:
            - generic:
              - strong: 2.3 — Meta description chứa keyword "áo ni - sweater"
              - generic: "2.3"
            - generic: "⚠️ Lỗi: Meta description không chứa keyword \"áo ni - sweater\""
          - generic:
            - generic:
              - strong: "3.1 — Trang có đúng 1 thẻ H1 (hiện tại: 0 thẻ)"
              - generic: "3.1"
            - generic: "⚠️ Lỗi: Trang không có thẻ H1 nào!"
          - generic:
            - generic:
              - strong: 3.2 — H1 chứa keyword "áo ni - sweater"
              - generic: "3.2"
            - generic: "⚠️ Lỗi: Không có H1 để kiểm tra"
          - generic:
            - generic:
              - strong: 4.2 — URL chứa keyword slug "áo-ni---sweater"
              - generic: "4.2"
            - generic: "⚠️ Lỗi: URL \"/collections/ao-ni-sweater\" không chứa keyword \"áo-ni---sweater\""
          - generic:
            - generic:
              - strong: "5.2 — Mật độ keyword: 0.00% (chuẩn: 0.5%–2.5%)"
              - generic: "5.2"
            - generic: "⚠️ Lỗi: Mật độ keyword quá thấp: 0.00%, cần ≥ 0.5%"
          - generic:
            - generic:
              - strong: 5.3 — Keyword "áo ni - sweater" xuất hiện trong 100 từ đầu
              - generic: "5.3"
            - generic: "⚠️ Lỗi: Keyword \"áo ni - sweater\" không xuất hiện trong 100 từ đầu"
          - generic:
            - generic:
              - strong: "6.1 — 100% ảnh có thuộc tính alt (thiếu: 9/88)"
              - generic: "6.1"
            - generic: "⚠️ Lỗi: Có 9 hình ảnh thiếu thuộc tính 'alt'"
          - generic:
            - generic:
              - strong: 6.2 — Có ảnh chứa keyword "áo ni - sweater" trong alt
              - generic: "6.2"
            - generic: "⚠️ Lỗi: Không có ảnh nào có alt chứa keyword \"áo ni - sweater\""
          - generic:
            - generic:
              - strong: "7.3 — Anchor text chất lượng (lỗi: 7)"
              - generic: "7.3"
            - generic: "⚠️ Lỗi: 7 link có anchor text không tốt: \"\" → /, \"\" → /, \"\" → /, \"\" → /, \"\" → //zalo.me/3664144181122308942, \"\" → //m.me/1042686802417049, \"\" → //zalo.me/3664144181122308942"
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