# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo-advanced.spec.ts >> SEO TIÊU CHUẨN CHUYÊN SÂU (ADVANCED) — PHẦN B >> [Advanced] Kiểm tra SEO chuyên sâu: Trang chủ (Home Page)
- Location: tests/seo-advanced.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 47/100 dưới ngưỡng 60%. Có 17/32 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e7]:
      - link "Tòa nhà văn phòng BM Tower | Cho thuê văn phòng tại Bình Dương" [ref=e9] [cursor=pointer]:
        - /url: https://thuevanphongbinhduong.com/
        - img "Tòa nhà văn phòng BM Tower | Cho thuê văn phòng tại Bình Dương" [ref=e10]
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "Trang chủ" [ref=e13] [cursor=pointer]:
            - /url: ""
        - listitem [ref=e14]:
          - link "Giới thiệu" [ref=e15] [cursor=pointer]:
            - /url: gioi-thieu
        - listitem [ref=e16]:
          - link "Văn phòng cho thuê" [ref=e17] [cursor=pointer]:
            - /url: dich-vu
        - listitem [ref=e18]:
          - link "Tiện ích" [ref=e19] [cursor=pointer]:
            - /url: tien-ich
        - listitem [ref=e20]:
          - link "Hoạt động" [ref=e21] [cursor=pointer]:
            - /url: hoat-dong
        - listitem [ref=e22]:
          - link "Liên hệ" [ref=e23] [cursor=pointer]:
            - /url: lien-he
      - link "phone 0949616161" [ref=e25] [cursor=pointer]:
        - /url: tel:0949616161
        - img "phone" [ref=e26]
        - generic [ref=e27]: "0949616161"
    - generic [ref=e31]:
      - button "Previous" [ref=e32] [cursor=pointer]: ←Previous
      - listbox [ref=e34]:
        - option [ref=e35]
        - option [ref=e38]:
          - link [ref=e39] [cursor=pointer]:
            - /url: ""
            - img [ref=e41]
      - button "Next" [ref=e42] [cursor=pointer]: →Next
    - generic [ref=e43]:
      - generic [ref=e46]:
        - generic [ref=e48]:
          - paragraph [ref=e49]:
            - generic [ref=e50]: "5"
            - generic [ref=e51]: +
          - generic [ref=e52]: Năm kinh nghiệm vận hành và quản lý
        - generic [ref=e54]:
          - paragraph [ref=e55]:
            - generic [ref=e56]: "24"
            - generic [ref=e57]: /7
          - generic [ref=e58]: An ninh & hỗ trợ kỹ thuật
        - generic [ref=e60]:
          - paragraph [ref=e61]:
            - generic [ref=e62]: "95"
            - generic [ref=e63]: "%"
          - generic [ref=e64]: Tỷ lệ lấp đầy ổn định
        - generic [ref=e66]:
          - paragraph [ref=e67]:
            - generic [ref=e68]: "10"
            - generic [ref=e69]: +
          - generic [ref=e70]: Doanh nghiệp tin tưởng lựa cho
      - generic [ref=e73]:
        - img "Tòa nhà BMTower" [ref=e76]
        - generic [ref=e77]:
          - generic [ref=e78]: Về chúng tôi
          - heading "Tòa nhà BMTower" [level=2] [ref=e80]
          - paragraph [ref=e82]: Khi nhắc đến văn phòng cho thuê tại khu vực Bình Dương, không thể không nhắc đến BM Tower. Tòa nhà tọa lạc tại địa chỉ đắc địa 330 Nguyễn Văn Trỗi, phường Phú Lợi – một trong những trục đường huyết mạch, giao lộ quan trọng nối liền các trung tâm kinh tế trọng điểm. Việc đặt trụ sở tại đây giúp doanh nghiệp khẳng định vị thế thương hiệu, đồng thời tạo điều kiện thuận lợi tối đa cho việc giao thương, kết nối với khách hàng và đối tác chiến lược.
          - link "Xem thêm xem thêm" [ref=e83] [cursor=pointer]:
            - /url: gioi-thieu
            - text: Xem thêm
            - img "xem thêm" [ref=e84]
      - generic [ref=e86]:
        - generic [ref=e87]:
          - heading "Dịch vụ" [level=2] [ref=e89]
          - paragraph [ref=e90]: Lựa chọn lý tưởng cho những doanh nghiệp đang tìm kiếm một môi trường làm việc chỉn chu, hiện đại và giàu cảm hứng.
        - generic [ref=e93]:
          - generic [ref=e95]:
            - link "Văn phòng cho thuê" [ref=e97] [cursor=pointer]:
              - /url: van-phong-cho-thue
            - generic [ref=e98]:
              - generic [ref=e99]: "1"
              - heading "Văn phòng cho thuê" [level=3] [ref=e102]
              - paragraph [ref=e104]: BM Tower không chỉ là một tòa nhà văn phòng, mà còn là một hệ sinh thái hỗ trợ sự phát triển bền vững của doanh nghiệp. Chúng tôi tự hào mang đến một giải pháp văn phòng cho thuê đáp ứng mọi tiêu chí khắt khe nhất.
          - generic [ref=e106]:
            - link "Thuê phòng họp theo giờ" [ref=e108] [cursor=pointer]:
              - /url: thue-phong-hop-theo-gio
            - generic [ref=e109]:
              - generic [ref=e110]: "2"
              - heading "Thuê phòng họp theo giờ" [level=3] [ref=e113]
              - paragraph [ref=e115]: Tìm kiếm một không gian phù hợp để họp hành, gặp gỡ đối tác, hay tổ chức các buổi workshop ngắn hạn đang trở thành nhu cầu thiết yếu trong môi trường kinh doanh năng động.
          - generic [ref=e117]:
            - link "Setup dịch vụ văn phòng" [ref=e119] [cursor=pointer]:
              - /url: setup-dich-vu-van-phong
            - generic [ref=e120]:
              - generic [ref=e121]: "3"
              - heading "Setup dịch vụ văn phòng" [level=3] [ref=e124]
              - paragraph [ref=e126]: Dịch vụ Setup Văn Phòng trọn gói giúp doanh nghiệp xây dựng không gian làm việc chuyên nghiệp, đồng bộ và sẵn sàng vận hành ngay từ ngày đầu.
      - generic [ref=e128]:
        - heading "Văn phòng cho thuê" [level=2] [ref=e130]
        - generic [ref=e131]:
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic:
                    - link "Cho thuê văn phòng sáng tạo":
                      - /url: van-phong-sang-tao
                  - generic:
                    - generic:
                      - generic:
                        - heading "Cho thuê văn phòng sáng tạo" [level=3]:
                          - link "Cho thuê văn phòng sáng tạo":
                            - /url: van-phong-sang-tao
                      - generic:
                        - paragraph: Trong kỷ nguyên kinh tế số, môi trường làm việc không chỉ là nơi đặt những chiếc bàn ghế, mà còn là bệ phóng cho sự sáng tạo và đổi mới. Việc lựa chọn một không gian làm việc lý tưởng đóng vai trò then chốt trong việc định hình văn hóa doanh nghiệp và thúc đẩy hiệu suất làm việc của đội ngũ nhân sự. Cho thuê văn phòng sáng tạo tại BM Tower chính là giải pháp tối ưu, mang đến không gian làm việc hiện đại, linh hoạt và tràn đầy cảm hứng cho mọi doanh nghiệp.
                      - generic:
                        - generic:
                          - img
                          - generic:
                            - strong: "Diện tích:"
                            - text: 2000m²
                        - generic:
                          - img
                          - generic:
                            - strong: "Giá thuê:"
                            - text: Từ 1.000.000VNĐ/m²
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic:
                    - link "Cho thuê văn phòng cao cấp":
                      - /url: van-phong-cao-cap
                  - generic:
                    - generic:
                      - generic:
                        - heading "Cho thuê văn phòng cao cấp" [level=3]:
                          - link "Cho thuê văn phòng cao cấp":
                            - /url: van-phong-cao-cap
                      - generic:
                        - paragraph: Không gian sáng thoáng, bố cục dễ tùy biến, phù hợp cho doanh nghiệp cần sự linh hoạt và hiệu quả vận hành.
                      - generic:
                        - generic:
                          - img
                          - generic:
                            - strong: "Diện tích:"
                            - text: 2000m²
                        - generic:
                          - img
                          - generic:
                            - strong: "Giá thuê:"
                            - text: Từ 180.000VNĐ/m²
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic:
                    - link "Phòng họp cho thuê theo giờ":
                      - /url: phong-hop-cho-thue-theo-gio
                  - generic:
                    - generic:
                      - generic:
                        - heading "Phòng họp cho thuê theo giờ" [level=3]:
                          - link "Phòng họp cho thuê theo giờ":
                            - /url: phong-hop-cho-thue-theo-gio
                      - generic:
                        - paragraph: Việc thuê phòng họp theo giờ giải quyết nhiều vấn đề mà các hình thức thuê truyền thống khó lòng đáp ứng.
                      - generic:
                        - generic:
                          - img
                          - generic:
                            - strong: "Diện tích:"
                            - text: 2000m2
                        - generic:
                          - img
                          - generic:
                            - strong: "Giá thuê:"
                            - text: Từ 10.000.000VNĐ/m²
        - link "Xem tất cả xem thêm" [ref=e133] [cursor=pointer]:
          - /url: dich-vu
          - text: Xem tất cả
          - img "xem thêm" [ref=e134]
      - generic [ref=e136]:
        - heading "Tiện ích đồng hành" [level=2] [ref=e138]
        - generic [ref=e139]:
          - generic [ref=e141]:
            - generic:
              - generic: "01."
              - generic:
                - generic:
                  - heading "Cho thuê văn phòng tại Thủ Dầu Một" [level=3]
                - paragraph: Ngoài nhu cầu về văn phòng cố định, các doanh nghiệp thường xuyên có nhu cầu thuê phòng họp cho các cuộc họp nội bộ, họp với đối tác, hội thảo, đào tạo. Thủ Dầu Một cũng cung cấp nhiều lựa chọn cho thuê phòng họp với các quy mô và trang thiết bị khác nhau.
            - generic:
              - generic: "02."
              - generic:
                - generic:
                  - heading "Phòng họp theo giờ Bình Dương" [level=3]
                - paragraph: Các doanh nghiệp nhỏ, startup, hay các công ty có văn phòng chính ở xa thường xuyên cần thuê phòng họp theo giờ để tiết kiệm chi phí, tối ưu hóa lịch trình và đảm bảo tính chuyên nghiệp khi làm việc với khách hàng, đối tác.
            - generic:
              - generic: "03."
              - generic:
                - generic:
                  - heading "Coworking Space Bình Dương" [level=3]
                - paragraph: Mô hình coworking space, với ưu điểm về chi phí thấp, môi trường kết nối cộng đồng và tiện ích dùng chung, đã và đang thu hút sự quan tâm. Tuy nhiên, khi một doanh nghiệp phát triển đến một quy mô nhất định, hoặc yêu cầu tính riêng tư, bảo mật cao hơn, một văn phòng riêng biệt trong một tòa nhà chuyên nghiệp lại trở thành ưu tiên hàng đầu.
          - generic:
            - generic:
              - generic:
                - link "Cho thuê văn phòng tại Thủ Dầu Một":
                  - /url: https://thuevanphongbinhduong.com/upload/news/cho-thue-van-phong-tai-thu-dau-mot-4903.jpg
                  - img "Cho thuê văn phòng tại Thủ Dầu Một"
      - generic [ref=e144]:
        - generic:
          - generic:
            - heading "Hoạt động tại toàn nhà" [level=2]
          - paragraph: Từ các cuộc họp chiến lược, hoạt động gắn kết đội ngũ đến những buổi thuyết trình đột phá, BM Tower là sân chơi hoàn hảo cho doanh nghiệp phát triển.
          - generic:
            - link "Chương trình huấn luyện tại tòa nhà BM Tower Không gian họp tối ưu với trang thiết bị hiện đại, tạo điều kiện lý tưởng cho những thảo luận sâu sắc.":
              - /url: cuoc-hop-chien-luoc
              - generic:
                - generic:
                  - heading "Chương trình huấn luyện tại tòa nhà BM Tower" [level=3]
                - generic: Không gian họp tối ưu với trang thiết bị hiện đại, tạo điều kiện lý tưởng cho những thảo luận sâu sắc.
        - generic [ref=e146]:
          - generic:
            - link "Gắn kết đội ngũ Sự gắn kết đội ngũ không chỉ giúp tăng cường hiệu suất làm việc, mà còn tạo ra một không khí làm việc tích cực, giảm thiểu xung đột và giữ chân nhân tài.":
              - /url: gan-ket-doi-ngu
              - generic:
                - generic:
                  - heading "Gắn kết đội ngũ" [level=3]
                - generic: Sự gắn kết đội ngũ không chỉ giúp tăng cường hiệu suất làm việc, mà còn tạo ra một không khí làm việc tích cực, giảm thiểu xung đột và giữ chân nhân tài.
          - generic:
            - link "Thuyết trình đỉnh cao Một bài thuyết trình thành công có thể mang về hợp đồng chất lượng, thuyết phục ban lãnh đạo duyệt một dự án quan trọng, hay đơn giản là xây dựng hình ảnh chuyên nghiệp, đáng tin cậy cho bản thân và doanh nghiệp.":
              - /url: thuyet-trinh-dinh-cao
              - generic:
                - generic:
                  - heading "Thuyết trình đỉnh cao" [level=3]
                - generic: Một bài thuyết trình thành công có thể mang về hợp đồng chất lượng, thuyết phục ban lãnh đạo duyệt một dự án quan trọng, hay đơn giản là xây dựng hình ảnh chuyên nghiệp, đáng tin cậy cho bản thân và doanh nghiệp.
      - generic [ref=e148]:
        - img "Tòa nhà văn phòng BM Tower | Cho thuê văn phòng tại Bình Dương" [ref=e150]
        - heading "Cảm nhận từ khách hàng" [level=2] [ref=e152]
        - paragraph [ref=e153]: Sự hài lòng của các doanh nghiệp đối tác là minh chứng cho chất lượng, tính chuyên nghiệp và giá trị bền vững mà BM Tower mang lại.
        - generic [ref=e154]:
          - generic [ref=e155]:
            - generic:
              - generic: Điều khiến tôi ấn tượng tại BM Tower không chỉ là cơ sở vật chất mà còn là chất lượng dịch vụ. Đội ngũ hỗ trợ rất nhiệt tình, chuyên nghiệp và luôn sẵn sàng giúp đỡ khi cần. Trải nghiệm làm việc ở đây rất thoải mái và đáng tin cậy.
              - generic:
                - generic:
                  - heading "Đinh Huyền Trang" [level=3]
                  - paragraph: CEO ATA Media
          - generic [ref=e156]:
            - generic:
              - generic: Tôi cần một văn phòng làm việc chuyên nghiệp, không gian nghiêm túc và đầy đủ trang thiết bị. BM Tower đã đáp ứng đúng những gì tôi mong đợi. Không gian thoải mái, tiện nghi và rất phù hợp để làm việc. Tôi rất hài lòng với trải nghiệm tại đây.
              - generic:
                - generic:
                  - heading "Trần Thị Linh" [level=3]
                  - paragraph: Tổng giám đốc, Finance & Consulting
          - generic [ref=e157]:
            - generic:
              - generic: BM Tower mang đến cho chúng tôi không chỉ một địa chỉ làm việc chuyên nghiệp, mà còn là đối tác đáng tin cậy trong hành trình phát triển.
              - generic:
                - generic:
                  - heading "Nguyễn Văn An" [level=3]
                  - paragraph: Giám đốc điều hành, Tech Solutions
      - generic [ref=e160]:
        - generic:
          - paragraph: BM Tower nổi lên như một địa chỉ đáng tin cậy, đáp ứng những tiêu chí khắt khe nhất của doanh nghiệp. Tọa lạc tại vị trí đắc địa, BM Tower không chỉ cung cấp không gian làm việc lý tưởng mà còn mang đến nhiều giá trị vượt trội khác.
        - generic:
          - generic:
            - heading "Liên hệ tư vấn" [level=2]
            - generic:
              - generic: Tìm kiếm không gian phù hợp cho doanh nghiệp của bạn?
            - generic:
              - generic:
                - generic:
                  - generic:
                    - generic: Họ và tên
                    - textbox "Họ và tên":
                      - /placeholder: Nhập họ và tên
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - generic: Email
                        - textbox "Email":
                          - /placeholder: Nhập email
                  - generic:
                    - generic:
                      - generic:
                        - generic: Số điện thoại
                        - textbox "Số điện thoại":
                          - /placeholder: Nhập số điện thoại
                - button "Gửi thông tin" [disabled]:
                  - generic:
                    - img
                  - generic: Gửi thông tin
      - generic [ref=e162]:
        - heading "Câu hỏi thường gặp" [level=2] [ref=e164]
        - generic [ref=e167]:
          - generic:
            - heading "01 Làm thế nào để đặt lịch tham quan hoặc thuê văn phòng?" [level=3]:
              - button "01 Làm thế nào để đặt lịch tham quan hoặc thuê văn phòng?":
                - generic: "01"
                - generic: Làm thế nào để đặt lịch tham quan hoặc thuê văn phòng?
          - generic:
            - heading "02 Văn phòng có hỗ trợ đăng ký địa chỉ doanh nghiệp không?" [level=3]:
              - button "02 Văn phòng có hỗ trợ đăng ký địa chỉ doanh nghiệp không?":
                - generic: "02"
                - generic: Văn phòng có hỗ trợ đăng ký địa chỉ doanh nghiệp không?
          - generic:
            - heading "03 Tôi có thể sử dụng phòng họp khi thuê văn phòng không?" [level=3]:
              - button "03 Tôi có thể sử dụng phòng họp khi thuê văn phòng không?":
                - generic: "03"
                - generic: Tôi có thể sử dụng phòng họp khi thuê văn phòng không?
          - generic:
            - heading "04 Chi phí thuê văn phòng đã bao gồm những tiện ích nào?" [level=3]:
              - button "04 Chi phí thuê văn phòng đã bao gồm những tiện ích nào?":
                - generic: "04"
                - generic: Chi phí thuê văn phòng đã bao gồm những tiện ích nào?
          - generic:
            - heading "05 Văn phòng có thể thuê theo giờ, ngày và tháng không?" [level=3]:
              - button "05 Văn phòng có thể thuê theo giờ, ngày và tháng không?":
                - generic: "05"
                - generic: Văn phòng có thể thuê theo giờ, ngày và tháng không?
        - generic [ref=e170]:
          - paragraph [ref=e171]: Trong hành trình tìm kiếm một "bến đỗ" lý tưởng cho doanh nghiệp, nơi hội tụ đủ yếu tố từ vị trí chiến lược, không gian chuyên nghiệp đến dịch vụ tận tâm, BM Tower chính là lời giải hoàn hảo. Tọa lạc tại trái tim của Bình Dương, tòa nhà không chỉ là nơi làm việc, mà còn là bệ phóng vững chắc giúp thương hiệu của bạn vươn tầm cao mới, kiến tạo nên những giá trị bền vững và thành công rực rỡ.
          - 'heading "Tầm nhìn chiến lược tại BM Tower: Định nghĩa lại không gian làm việc hiện đại" [level=2] [ref=e172]'
          - paragraph [ref=e173]: Khi nhắc đến văn phòng cho thuê tại khu vực Bình Dương, không thể không nhắc đến BM Tower. Tòa nhà tọa lạc tại địa chỉ đắc địa 330 Nguyễn Văn Trỗi, phường Phú Lợi – một trong những trục đường huyết mạch, giao lộ quan trọng nối liền các trung tâm kinh tế trọng điểm. Việc đặt trụ sở tại đây giúp doanh nghiệp khẳng định vị thế thương hiệu, đồng thời tạo điều kiện thuận lợi tối đa cho việc giao thương, kết nối với khách hàng và đối tác chiến lược.
          - paragraph [ref=e174]:
            - generic [ref=e175]:
              - text: Với quy mô 6 tầng thiết kế tinh tế, BM Tower mang đến một làn gió mới cho thị trường văn phòng cho thuê. Không gian tại đây được quy hoạch bài bản, tối ưu hóa công năng sử dụng, đảm bảo sự thông thoáng và tràn đầy ánh sáng tự nhiên. Mọi chi tiết kiến trúc đều được chăm chút kỹ lưỡng để tạo ra môi trường làm việc
              - strong [ref=e176]: truyền cảm hứng
              - text: ", nơi sự sáng tạo không bao giờ bị giới hạn."
          - heading "Giải pháp văn phòng cho thuê linh hoạt cho mọi quy mô doanh nghiệp" [level=2] [ref=e177]
          - paragraph [ref=e178]: Chúng tôi thấu hiểu rằng mỗi doanh nghiệp đều có những nhu cầu riêng biệt về không gian vận hành. Chính vì vậy, BM Tower cung cấp đa dạng các gói dịch vụ văn phòng cho thuê với diện tích linh hoạt, phù hợp từ các doanh nghiệp khởi nghiệp, các đội nhóm nhỏ cho đến các văn phòng đại diện quy mô lớn. Sự linh hoạt trong diện tích và thời hạn hợp đồng giúp khách hàng dễ dàng kiểm soát chi phí vận hành mà vẫn duy trì được hình ảnh chuyên nghiệp đẳng cấp.
          - heading "Thiết kế thông minh và tiện ích đồng bộ" [level=3] [ref=e179]
          - list [ref=e180]:
            - listitem [ref=e181]: Hệ thống cơ sở hạ tầng đạt chuẩn hiện đại, an ninh 24/7.
            - listitem [ref=e182]: Không gian sảnh tiếp khách sang trọng, tạo ấn tượng mạnh mẽ cho khách hàng ngay từ lần đầu ghé thăm.
            - listitem [ref=e183]: Hệ thống thang máy tốc độ cao, đảm bảo lưu thông thuận tiện trong tòa nhà 6 tầng.
            - listitem [ref=e184]: Hệ thống điều hòa trung tâm, internet tốc độ cao và nguồn điện dự phòng ổn định.
          - heading "Dịch vụ cho thuê phòng họp đẳng cấp – Nơi những ý tưởng lớn được kết nối" [level=2] [ref=e185]
          - paragraph [ref=e186]: Sự thành công của một buổi hội thảo, một buổi ký kết hợp đồng hay một cuộc họp chiến lược phụ thuộc rất nhiều vào không gian tổ chức. Thấu hiểu điều đó, BM Tower phát triển dịch vụ cho thuê phòng họp được trang bị đầy đủ các thiết bị công nghệ trình chiếu hiện đại nhất. Đây không chỉ là một không gian kín, mà là "chiến trường" trí tuệ, nơi các quyết định quan trọng được đưa ra trong sự thoải mái và tập trung cao độ.
          - paragraph [ref=e187]: Cho thuê phòng họp tại BM Tower cung cấp nhiều lựa chọn về cấu hình bàn ghế, từ phong cách hội nghị chuyên nghiệp đến không gian brainstorming sáng tạo. Với dịch vụ hỗ trợ tận tâm, chúng tôi cam kết mang lại trải nghiệm chuyên nghiệp nhất cho mọi cuộc họp của bạn.
          - heading "Tối ưu mặt bằng kinh doanh cho sự bứt phá thị trường" [level=2] [ref=e188]
          - paragraph [ref=e189]: Bên cạnh văn phòng cho thuê, BM Tower còn cung cấp các giải pháp mặt bằng kinh doanh tại tầng trệt, phù hợp cho showroom, văn phòng giao dịch hoặc cửa hàng trưng bày. Vị trí 330 Nguyễn Văn Trỗi giúp doanh nghiệp tiếp cận nguồn khách hàng dồi dào, tăng cường khả năng nhận diện thương hiệu một cách hiệu quả. Đây chính là "điểm chạm" thương mại hoàn hảo để doanh nghiệp của bạn trở nên nổi bật giữa thị trường sôi động tại Bình Dương.
          - heading "Tại sao nên chọn BM Tower làm đối tác đồng hành?" [level=2] [ref=e190]
          - paragraph [ref=e191]:
            - generic [ref=e192]:
              - text: Sự khác biệt của chúng tôi không chỉ nằm ở những bức tường hay trang thiết bị, mà nằm ở
              - strong [ref=e193]: tinh thần phục vụ
              - text: . Chúng tôi xem mỗi khách hàng là một đối tác dài hạn. Tại BM Tower, sự hài lòng của doanh nghiệp chính là thước đo thành công của chúng tôi. Chúng tôi không chỉ cung cấp không gian, chúng tôi cung cấp giải pháp, sự hỗ trợ và cam kết đồng hành cùng sự phát triển của bạn trên con đường kinh doanh đầy thách thức.
          - paragraph [ref=e194]:
            - generic [ref=e195]:
              - text: Với phương châm
              - strong [ref=e196]: Uy tín - Chuyên nghiệp - Hiệu quả
              - text: ", BM Tower đã và đang trở thành địa chỉ tin cậy cho hàng loạt doanh nghiệp trong và ngoài nước. Đừng để không gian làm việc hạn chế tầm nhìn chiến lược của bạn. Hãy liên hệ ngay với chúng tôi để sở hữu văn phòng lý tưởng và khẳng định vị thế thương hiệu ngay hôm nay."
          - heading "Thông tin liên hệ" [level=2] [ref=e197]
          - paragraph [ref=e198]:
            - generic [ref=e199]:
              - text: "Chúng tôi luôn sẵn sàng lắng nghe và tư vấn giải pháp phù hợp nhất cho nhu cầu của bạn. Hãy kết nối ngay với chúng tôi qua các kênh thông tin dưới đây:"
              - text: "Hotline: 0949616161"
              - text: "Điện thoại: 0949616161"
              - text: "Email: bmtower@gmail.com"
              - text: "Website: thuevanphongbinhduong.com"
          - link "Xem thêm bài viết xem thêm" [ref=e202] [cursor=pointer]:
            - /url: javascript:;
            - generic [ref=e203]:
              - text: Xem thêm bài viết
              - img "xem thêm" [ref=e204]
    - generic [ref=e211]:
      - generic:
        - generic:
          - generic:
            - generic:
              - link "Tòa nhà văn phòng BM Tower | Cho thuê văn phòng tại Bình Dương":
                - /url: https://thuevanphongbinhduong.com/
                - img "Tòa nhà văn phòng BM Tower | Cho thuê văn phòng tại Bình Dương"
              - generic:
                - paragraph: Vị trí chiến lược của BM Tower không chỉ mang lại lợi thế về giao thông mà còn nâng tầm hình ảnh thương hiệu, tạo ấn tượng tốt với khách hàng và đối tác.
            - generic:
              - generic:
                - generic:
                  - paragraph: Về BM TOWER
                  - list:
                    - listitem:
                      - link "Giới thiệu":
                        - /url: gioi-thieu
                    - listitem:
                      - link "Văn phòng cho thuê":
                        - /url: dich-vu
                    - listitem:
                      - link "Hoạt động":
                        - /url: hoat-dong
                    - listitem:
                      - link "Tiện ích":
                        - /url: tien-ich
                    - listitem:
                      - link "Liên hệ":
                        - /url: lien-he
                - generic:
                  - paragraph: Chính sách khách hàng
                  - list:
                    - listitem:
                      - link "Chính sách bảo mật":
                        - /url: chinh-sach-bao-mat
                    - listitem:
                      - link "Chính sách tư vấn":
                        - /url: chinh-sach-tu-van
                    - listitem:
                      - link "Chính sách hỗ trợ":
                        - /url: chinh-sach-ho-tro
                    - listitem:
                      - link "Chính sác chăm sóc":
                        - /url: chinh-sac-cham-soc
      - generic [ref=e215]: Copyright ©2026 BM TOWER. All Right Reserved. Thiết kế web MIMA
    - generic [ref=e216]:
      - 'link "Call me: 0949616161" [ref=e217] [cursor=pointer]':
        - /url: tel:0949616161
        - img [ref=e221]
        - generic [ref=e224]: "Call me: 0949616161"
      - 'link "Zalo: 0949616161" [ref=e225] [cursor=pointer]':
        - /url: https://zalo.me/0949616161
        - img [ref=e229]
        - generic [ref=e230]: "Zalo: 0949616161"
  - generic:
    - generic:
      - generic: 🔬 BÁO CÁO SEO CHUYÊN SÂU
      - generic: "Phần B: Advanced"
    - generic:
      - generic:
        - generic:
          - generic:
            - generic:
              - generic: "43"
              - generic: ADV
          - generic: KÉM
        - generic:
          - generic:
            - generic: "Trang:"
            - strong: Trang chủ (Home Page)
          - generic:
            - generic: "Đạt:"
            - strong: 13/30
      - generic [ref=e231]:
        - generic [ref=e232]: "❌ Lỗi cần khắc phục (17):"
        - generic [ref=e233]:
          - generic [ref=e234]:
            - generic [ref=e235]: E-E-A-T
            - generic [ref=e236]: 2/5
          - generic [ref=e237]:
            - generic [ref=e238]:
              - generic [ref=e239]: "Ngày đăng (datePublished): Thiếu"
              - generic [ref=e240]: B2.2
            - generic [ref=e241]: ⚠️ Thiếu ngày đăng bài
          - generic [ref=e242]:
            - generic [ref=e243]:
              - generic [ref=e244]: "Ngày cập nhật (dateModified): Thiếu"
              - generic [ref=e245]: B2.3
            - generic [ref=e246]: ⚠️ Thiếu ngày cập nhật
          - generic [ref=e247]:
            - generic [ref=e248]:
              - generic [ref=e249]: "Trust Pages: 0/8 tồn tại"
              - generic [ref=e250]: B2.4
            - generic [ref=e251]: ⚠️ Chỉ 0 trust pages
        - generic [ref=e252]:
          - generic [ref=e253]:
            - generic [ref=e254]: Schema
            - generic [ref=e255]: 0/4
          - generic [ref=e256]:
            - generic [ref=e257]:
              - generic [ref=e258]: "Schema types: [Article, Organization, FAQPage]"
              - generic [ref=e259]: B3.1
            - generic [ref=e260]: "⚠️ Thiếu types: BreadcrumbList"
          - generic [ref=e261]:
            - generic [ref=e262]:
              - generic [ref=e263]: Schema required fields
              - generic [ref=e264]: B3.2
            - generic [ref=e265]: "⚠️ Article: thiếu fields [datePublished]"
          - generic [ref=e266]:
            - generic [ref=e267]:
              - generic [ref=e268]: Schema cú pháp (1 lỗi)
              - generic [ref=e269]: B3.3
            - generic [ref=e270]: "⚠️ Article: thiếu fields [datePublished]"
          - generic [ref=e271]:
            - generic [ref=e272]:
              - generic [ref=e273]: "BreadcrumbList Schema: Thiếu"
              - generic [ref=e274]: B3.4
            - generic [ref=e275]: ⚠️ Thiếu BreadcrumbList Schema
        - generic [ref=e276]:
          - generic [ref=e277]:
            - generic [ref=e278]: Linking
            - generic [ref=e279]: 0/2
          - generic [ref=e280]:
            - generic [ref=e281]:
              - generic [ref=e282]: "Breadcrumb: Thiếu"
              - generic [ref=e283]: B5.1
            - generic [ref=e284]: ⚠️ Thiếu breadcrumb
          - generic [ref=e285]:
            - generic [ref=e286]:
              - generic [ref=e287]: "Breadcrumb Schema: Thiếu"
              - generic [ref=e288]: B5.2
            - generic [ref=e289]: ⚠️ Thiếu BreadcrumbList Schema
        - generic [ref=e290]:
          - generic [ref=e291]:
            - generic [ref=e292]: Performance
            - generic [ref=e293]: 3/7
          - generic [ref=e294]:
            - generic [ref=e295]:
              - generic [ref=e296]: "Resource Hints: preload=0, preconnect=0"
              - generic [ref=e297]: B6.4
            - generic [ref=e298]: ⚠️ Thiếu resource hints
          - generic [ref=e299]:
            - generic [ref=e300]:
              - generic [ref=e301]: "Lazy Load: 4/20 (20%)"
              - generic [ref=e302]: B6.5
            - generic [ref=e303]: ⚠️ Chỉ 20% lazy
          - generic [ref=e304]:
            - generic [ref=e305]:
              - generic [ref=e306]: "Font: swap=✘, preload=0"
              - generic [ref=e307]: B6.6
            - generic [ref=e308]: ⚠️ Font chưa tối ưu
          - generic [ref=e309]:
            - generic [ref=e310]:
              - generic [ref=e311]: "Responsive Images: 0/24 (0%)"
              - generic [ref=e312]: B6.7
            - generic [ref=e313]: ⚠️ Chỉ 0% có srcset
        - generic [ref=e314]:
          - generic [ref=e315]:
            - generic [ref=e316]: UX
            - generic [ref=e317]: 3/4
          - generic [ref=e318]:
            - generic [ref=e319]:
              - generic [ref=e320]: "ARIA thiếu: 9 phần tử"
              - generic [ref=e321]: B7.3
            - generic [ref=e322]: ⚠️ 9 phần tử thiếu ARIA
        - generic [ref=e323]:
          - generic [ref=e324]:
            - generic [ref=e325]: URL
            - generic [ref=e326]: 1/4
          - generic [ref=e327]:
            - generic [ref=e328]:
              - generic [ref=e329]: "WWW Redirect: Lỗi"
              - generic [ref=e330]: B8.1
            - generic [ref=e331]: ⚠️ www redirect sai
          - generic [ref=e332]:
            - generic [ref=e333]:
              - generic [ref=e334]: "HTTPS Redirect: Lỗi"
              - generic [ref=e335]: B8.2
            - generic [ref=e336]: ⚠️ HTTPS redirect sai
          - generic [ref=e337]:
            - generic [ref=e338]:
              - generic [ref=e339]: "HSTS: Thiếu"
              - generic [ref=e340]: B8.4
            - generic [ref=e341]: ⚠️ Thiếu HSTS header
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 47/100 dưới ngưỡng 60%. Có 17/32 tiêu chí không đạt.
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