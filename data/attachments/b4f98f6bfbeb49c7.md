# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo.spec.ts >> SEO TIÊU CHUẨN CƠ BẢN CHO WEB >> Kiểm tra SEO Onpage: Văn phòng cho thuê (/van-phong-cho-thue)
- Location: tests/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 67/100 dưới ngưỡng 70%. Có 19/58 tiêu chí không đạt.
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
    - list [ref=e30]:
      - listitem [ref=e31]:
        - link "Trang chủ" [ref=e32] [cursor=pointer]:
          - /url: https://thuevanphongbinhduong.com/
          - img [ref=e33]
          - generic [ref=e35]: Trang chủ
      - listitem [ref=e36]:
        - text: /
        - link "Văn phòng cho thuê" [ref=e37] [cursor=pointer]:
          - /url: https://thuevanphongbinhduong.com/dich-vu
      - listitem [ref=e38]:
        - text: /
        - link "Văn phòng cho thuê" [ref=e39] [cursor=pointer]:
          - /url: https://thuevanphongbinhduong.com/van-phong-cho-thue
    - generic [ref=e43]:
      - heading "Dịch vụ Văn phòng cho thuê" [level=2] [ref=e45]
      - generic [ref=e47]:
        - generic [ref=e50]:
          - link "Văn phòng tiêu chuẩn" [ref=e52] [cursor=pointer]:
            - /url: van-phong-tieu-chuan
            - img "Văn phòng tiêu chuẩn" [ref=e53]
          - generic [ref=e55]:
            - heading "Văn phòng tiêu chuẩn" [level=3] [ref=e57]:
              - link "Văn phòng tiêu chuẩn" [ref=e58] [cursor=pointer]:
                - /url: van-phong-tieu-chuan
            - paragraph [ref=e60]: Không gian sáng thoáng, bố cục dễ tùy biến, phù hợp cho doanh nghiệp cần sự linh hoạt và hiệu quả vận hành.
            - generic [ref=e61]:
              - generic [ref=e62]:
                - img [ref=e63]
                - generic [ref=e65]:
                  - strong [ref=e66]: "Diện tích:"
                  - text: 2000m²
              - generic [ref=e67]:
                - img [ref=e68]
                - generic [ref=e70]:
                  - strong [ref=e71]: "Giá thuê:"
                  - text: Từ 1.000.000VNĐ/m²
        - generic [ref=e74]:
          - link "Cho thuê văn phòng sáng tạo" [ref=e76] [cursor=pointer]:
            - /url: van-phong-sang-tao
            - img "Cho thuê văn phòng sáng tạo" [ref=e77]
          - generic [ref=e79]:
            - heading "Cho thuê văn phòng sáng tạo" [level=3] [ref=e81]:
              - link "Cho thuê văn phòng sáng tạo" [ref=e82] [cursor=pointer]:
                - /url: van-phong-sang-tao
            - paragraph [ref=e84]: Trong kỷ nguyên kinh tế số, môi trường làm việc không chỉ là nơi đặt những chiếc bàn ghế, mà còn là bệ phóng cho sự sáng tạo và đổi mới. Việc lựa chọn một không gian làm việc lý tưởng đóng vai trò then chốt trong việc định hình văn hóa doanh nghiệp và thúc đẩy hiệu suất làm việc của đội ngũ nhân sự. Cho thuê văn phòng sáng tạo tại BM Tower chính là giải pháp tối ưu, mang đến không gian làm việc hiện đại, linh hoạt và tràn đầy cảm hứng cho mọi doanh nghiệp.
            - generic [ref=e85]:
              - generic [ref=e86]:
                - img [ref=e87]
                - generic [ref=e89]:
                  - strong [ref=e90]: "Diện tích:"
                  - text: 2000m²
              - generic [ref=e91]:
                - img [ref=e92]
                - generic [ref=e94]:
                  - strong [ref=e95]: "Giá thuê:"
                  - text: Từ 1.000.000VNĐ/m²
        - generic [ref=e98]:
          - link "Cho thuê văn phòng cao cấp" [ref=e100] [cursor=pointer]:
            - /url: van-phong-cao-cap
            - img "Cho thuê văn phòng cao cấp" [ref=e101]
          - generic [ref=e103]:
            - heading "Cho thuê văn phòng cao cấp" [level=3] [ref=e105]:
              - link "Cho thuê văn phòng cao cấp" [ref=e106] [cursor=pointer]:
                - /url: van-phong-cao-cap
            - paragraph [ref=e108]: Không gian sáng thoáng, bố cục dễ tùy biến, phù hợp cho doanh nghiệp cần sự linh hoạt và hiệu quả vận hành.
            - generic [ref=e109]:
              - generic [ref=e110]:
                - img [ref=e111]
                - generic [ref=e113]:
                  - strong [ref=e114]: "Diện tích:"
                  - text: 2000m²
              - generic [ref=e115]:
                - img [ref=e116]
                - generic [ref=e118]:
                  - strong [ref=e119]: "Giá thuê:"
                  - text: Từ 180.000VNĐ/m²
        - generic:
          - generic:
            - generic:
              - generic:
                - link "Văn phòng tiêu chuẩn 1":
                  - /url: van-phong-tieu-chuan-1
                  - img "Văn phòng tiêu chuẩn 1"
              - generic:
                - generic:
                  - generic:
                    - heading "Văn phòng tiêu chuẩn 1" [level=3]:
                      - link "Văn phòng tiêu chuẩn 1":
                        - /url: van-phong-tieu-chuan-1
                  - generic:
                    - paragraph: Tọa lạc tại vị trí trung tâm, tòa nhà cung cấp đa dạng các loại hình văn phòng và phòng họp, đáp ứng nhu cầu của mọi loại hình doanh nghiệp, từ startup non trẻ đến các công ty đã có chỗ đứng trên thị trường.
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
                        - text: Từ 10.000.000VNĐ/m²
        - generic:
          - generic:
            - generic:
              - generic:
                - link "Văn phòng tiêu chuẩn 2":
                  - /url: van-phong-tieu-chuan-2
                  - img "Văn phòng tiêu chuẩn 2"
              - generic:
                - generic:
                  - generic:
                    - heading "Văn phòng tiêu chuẩn 2" [level=3]:
                      - link "Văn phòng tiêu chuẩn 2":
                        - /url: van-phong-tieu-chuan-2
                  - generic:
                    - paragraph: Tầng 7, BM ToweTrong nhịp sống hối hả của Thành phố Hồ Chí Minh, việc tìm kiếm một địa điểm đặt trụ sở không chỉ là tìm một không gian vật lý, mà còn là tìm một môi trường làm việc lý tưởng, phản ánh sự chuyên nghiệp và tầm nhìn của doanh nghiệp, 330, khu 7 hiệp thành, thành phố thủ dầu một, tỉnh bình dươngr
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
                        - text: Từ 10.000.000VNĐ/m²
      - generic [ref=e121]:
        - paragraph [ref=e122]: Chào mừng bạn đến với BM Tower, điểm đến lý tưởng cho nhu cầu văn phòng cho thuê chuyên nghiệp ngay tại trung tâm Phường Phú Lợi, Thành phố Hồ Chí Minh (khu vực Thủ Dầu Một cũ của Bình Dương). Chúng tôi mang đến giải pháp làm việc toàn diện, sẵn sàng để bạn “vào làm việc ngay” với đầy đủ tiện nghi, chi phí tối ưu và đảm bảo pháp lý vững chắc. Nếu bạn đang tìm kiếm một không gian làm việc thuận tiện, hiện đại để đặt trụ sở, mở chi nhánh hay phát triển trung tâm đào tạo, BM Tower chính là câu trả lời.
        - 'heading "BM Tower: Vị trí Đắc địa và Tiện ích Vượt trội tại Phú Lợi, TP. Hồ Chí Minh" [level=2] [ref=e123]'
        - paragraph [ref=e124]: Tìm kiếm một văn phòng cho thuê tại Phường Phú Lợi, TP. Hồ Chí Minh không chỉ đơn thuần là tìm một địa điểm, mà còn là tìm kiếm một môi trường làm việc thúc đẩy sự phát triển. BM Tower tọa lạc tại vị trí chiến lược, dễ dàng kết nối giao thông và thuận tiện cho việc đón tiếp khách hàng, đối tác.
        - heading "Vị trí trung tâm, kết nối dễ dàng" [level=3] [ref=e125]
        - paragraph [ref=e126]: Nằm ngay tại trung tâm Phường Phú Lợi, TP. Hồ Chí Minh (trước đây là khu vực Thủ Dầu Một, Bình Dương), BM Tower mang đến lợi thế tiếp cận tuyệt vời. Vị trí này không chỉ giúp doanh nghiệp dễ dàng giao dịch, gặp gỡ khách hàng mà còn tạo dựng hình ảnh chuyên nghiệp, uy tín. Việc di chuyển đến các khu vực lân cận hay trung tâm thành phố cũng trở nên nhanh chóng nhờ hệ thống giao thông thuận tiện.
        - heading "Tiện ích toàn diện cho mọi nhu cầu" [level=3] [ref=e127]
        - paragraph [ref=e128]: Tại BM Tower, chúng tôi hiểu rằng mỗi doanh nghiệp có những yêu cầu riêng biệt. Vì vậy, tòa nhà cung cấp các lựa chọn diện tích linh hoạt, từ 50m² đến 500m², phù hợp với quy mô và giai đoạn phát triển của nhiều loại hình kinh doanh khác nhau.
        - list [ref=e129]:
          - listitem [ref=e130]:
            - strong [ref=e131]: "Chỗ đậu xe rộng rãi:"
            - text: Đảm bảo sự thoải mái cho nhân viên và khách hàng.
          - listitem [ref=e132]:
            - strong [ref=e133]: "Internet tốc độ cao:"
            - text: Đáp ứng nhu cầu làm việc, trao đổi thông tin liên tục và hiệu quả.
          - listitem [ref=e134]:
            - strong [ref=e135]: "Hệ thống máy lạnh, bảo vệ 24/7:"
            - text: Duy trì môi trường làm việc mát mẻ, an toàn và chuyên nghiệp.
          - listitem [ref=e136]:
            - strong [ref=e137]: "Dịch vụ vệ sinh:"
            - text: Đảm bảo không gian luôn sạch sẽ, thoáng đãng.
          - listitem [ref=e138]:
            - strong [ref=e139]: "Hỗ trợ pháp lý và xuất hóa đơn VAT:"
            - text: Giúp doanh nghiệp hoàn tất thủ tục nhanh chóng, minh bạch.
        - heading "Giải pháp Văn phòng Hiện đại và Linh hoạt" [level=2] [ref=e140]
        - paragraph [ref=e141]: BM Tower không chỉ là một tòa nhà văn phòng, mà còn là một hệ sinh thái hỗ trợ sự phát triển bền vững của doanh nghiệp. Chúng tôi tự hào mang đến một giải pháp văn phòng cho thuê đáp ứng mọi tiêu chí khắt khe nhất.
        - heading "Phù hợp với đa dạng loại hình doanh nghiệp" [level=3] [ref=e142]
        - paragraph [ref=e143]: "Chúng tôi chào đón mọi loại hình kinh doanh, đặc biệt là các đơn vị đang tìm kiếm một không gian làm việc chuyên nghiệp tại khu vực này:"
        - list [ref=e144]:
          - listitem [ref=e145]:
            - strong [ref=e146]: "Công ty mới thành lập:"
            - text: Cần một khởi đầu thuận lợi với chi phí hợp lý.
          - listitem [ref=e147]:
            - strong [ref=e148]: "Doanh nghiệp vừa và nhỏ (SMEs):"
            - text: Tìm kiếm sự linh hoạt về diện tích và chi phí vận hành.
          - listitem [ref=e149]:
            - strong [ref=e150]: "Văn phòng đại diện:"
            - text: Cần một địa chỉ uy tín để giao dịch và đại diện cho công ty mẹ.
          - listitem [ref=e151]:
            - strong [ref=e152]: "Chi nhánh công ty:"
            - text: Mở rộng hoạt động kinh doanh tại thị trường tiềm năng.
          - listitem [ref=e153]:
            - strong [ref=e154]: "Các trung tâm, hệ thống ngoại ngữ:"
            - text: Cần không gian đào tạo hiện đại, dễ tiếp cận học viên.
        - heading "Dịch vụ cho thuê phòng họp tiện lợi" [level=3] [ref=e155]
        - paragraph [ref=e156]: Bên cạnh các giải pháp văn phòng cố định, BM Tower còn cung cấp dịch vụ cho thuê phòng họp chuyên nghiệp. Dù bạn cần một không gian nhỏ cho cuộc họp nội bộ, buổi phỏng vấn hay một hội trường lớn hơn cho sự kiện đào tạo, hội thảo, chúng tôi đều có thể đáp ứng. Các phòng họp được trang bị đầy đủ thiết bị hiện đại như máy chiếu, màn hình, hệ thống âm thanh, bàn ghế tiện nghi, đảm bảo buổi họp diễn ra suôn sẻ và hiệu quả. Đây là lựa chọn tuyệt vời cho các doanh nghiệp không có sẵn phòng họp hoặc cần không gian riêng biệt, chuyên nghiệp cho các dịp quan trọng.
        - heading "An toàn và Pháp lý vững vàng" [level=3] [ref=e157]
        - paragraph [ref=e158]: Sự an toàn và tuân thủ pháp lý luôn là ưu tiên hàng đầu tại BM Tower. Tòa nhà được trang bị hệ thống phòng cháy chữa cháy đạt chuẩn, đảm bảo an toàn tối đa cho mọi người và tài sản bên trong. Hồ sơ pháp lý của tòa nhà và các dịch vụ cho thuê văn phòng đều đầy đủ, minh bạch, mang đến sự yên tâm tuyệt đối cho khách hàng khi đặt trụ sở hoặc hoạt động kinh doanh tại đây.
        - heading "Lợi ích khi chọn BM Tower" [level=2] [ref=e159]
        - paragraph [ref=e160]: Việc lựa chọn BM Tower làm địa điểm đặt văn phòng mang lại nhiều lợi ích thiết thực, giúp doanh nghiệp tối ưu hóa hoạt động và giảm thiểu chi phí không cần thiết.
        - heading "Tiết kiệm chi phí đầu tư ban đầu" [level=3] [ref=e161]
        - paragraph [ref=e162]: Thay vì phải bỏ ra khoản đầu tư lớn để mua hoặc xây dựng văn phòng riêng, các doanh nghiệp có thể thuê văn phòng tại BM Tower với chi phí hợp lý hơn nhiều. Điều này đặc biệt quan trọng đối với các startup và doanh nghiệp vừa và nhỏ, giúp họ tập trung nguồn lực tài chính vào hoạt động kinh doanh cốt lõi. Gói dịch vụ trọn gói đầy đủ tiện nghi của chúng tôi bao gồm cả chi phí quản lý, bảo trì, vệ sinh, giúp bạn dự trù ngân sách hiệu quả hơn.
        - heading "Linh hoạt thay đổi quy mô" [level=3] [ref=e163]
        - paragraph [ref=e164]: Khi doanh nghiệp phát triển hoặc có những thay đổi về quy mô nhân sự, nhu cầu về diện tích văn phòng cũng sẽ thay đổi theo. BM Tower cung cấp sự linh hoạt này, cho phép bạn dễ dàng nâng cấp hoặc thay đổi không gian thuê khi cần thiết mà không gặp nhiều ràng buộc.
        - heading "Tập trung vào hoạt động kinh doanh" [level=3] [ref=e165]
        - paragraph [ref=e166]: Với các dịch vụ tiện ích và hạ tầng sẵn có, doanh nghiệp có thể ngay lập tức bắt tay vào công việc mà không mất thời gian và công sức cho việc thiết lập, sửa chữa hay trang bị nội thất văn phòng. Đội ngũ quản lý tòa nhà luôn sẵn sàng hỗ trợ giải quyết các vấn đề phát sinh, giúp bạn hoàn toàn tập trung vào mục tiêu kinh doanh.
        - heading "Lời kết" [level=2] [ref=e167]
        - paragraph [ref=e168]: BM Tower tự hào là địa chỉ tin cậy cho nhu cầu văn phòng cho thuê và cho thuê phòng họp tại Phường Phú Lợi, TP. Hồ Chí Minh. Với vị trí đắc địa, hệ thống tiện ích hiện đại, không gian làm việc linh hoạt, an toàn và dịch vụ chuyên nghiệp, chúng tôi cam kết mang đến sự hài lòng tối đa cho mọi khách hàng. Hãy liên hệ ngay với chúng tôi để tìm hiểu thêm về các gói dịch vụ và chọn cho mình không gian làm việc lý tưởng nhất.
        - paragraph [ref=e169]:
          - strong [ref=e170]: THÔNG TIN LIÊN HỆ
          - text: Tòa nhà văn phòng BM Tower | Cho thuê văn phòng tại Bình Dương
          - text: "Địa chỉ: 330 Nguyễn Văn Trỗi, Phường Phú Lợi, Thủ Dầu Một, Bình Dương, TPHCM"
          - text: "Hotline: 0949616161"
          - text: "Điện thoại: 0949616161"
          - text: "Email: bmtower@gmail.com"
          - text: "Website: thuevanphongbinhduong.com"
        - link "Xem thêm xem thêm" [ref=e173] [cursor=pointer]:
          - /url: javascript:;
          - generic [ref=e174]:
            - text: Xem thêm
            - img "xem thêm" [ref=e175]
    - generic [ref=e182]:
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
      - generic [ref=e186]: Copyright ©2026 BM TOWER. All Right Reserved. Thiết kế web MIMA
    - generic [ref=e187]:
      - 'link "Call me: 0949616161" [ref=e188] [cursor=pointer]':
        - /url: tel:0949616161
        - img [ref=e192]
        - generic [ref=e195]: "Call me: 0949616161"
      - 'link "Zalo: 0949616161" [ref=e196] [cursor=pointer]':
        - /url: https://zalo.me/0949616161
        - img [ref=e200]
        - generic [ref=e201]: "Zalo: 0949616161"
  - generic:
    - generic:
      - generic: 🎯 BÁO CÁO SEO AUDIT CHUYÊN SÂU
      - generic: "Phần A: On-page cơ bản"
    - generic:
      - generic: ══ KẾT QUẢ CHẤM ĐIỂM SEO ══
      - generic:
        - generic:
          - generic:
            - generic:
              - generic: "66"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 66/100
          - generic:
            - generic: "Đánh giá:"
            - strong: 🟡 KHÁ
          - generic:
            - generic: "Ngưỡng đạt:"
            - generic: 70%
          - generic:
            - generic: "Kết quả:"
            - generic: ❌ FAIL
      - generic:
        - generic:
          - generic: "56"
          - generic: Tổng tiêu chí
        - generic:
          - generic: ✅ 37
          - generic: Đạt
        - generic:
          - generic: ❌ 19
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: Văn phòng cho thuê
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: Keyword chưa xác định
    - generic [ref=e202]:
      - generic [ref=e203]: "❌ Chi tiết lỗi cần khắc phục (19/56):"
      - generic [ref=e204]:
        - generic [ref=e205]:
          - generic [ref=e206]: Title
          - generic [ref=e207]: 2/5
        - generic [ref=e208]:
          - generic [ref=e209]:
            - strong [ref=e210]: "Độ dài Title: 18 ký tự (chuẩn: 50–60)"
            - generic [ref=e211]: "1.2"
          - generic [ref=e212]: ⚠️ Title quá ngắn hoặc quá dài (18 ký tự), cần 50–60
        - generic [ref=e213]:
          - generic [ref=e214]:
            - strong [ref=e215]: Title chứa keyword "Keyword chưa xác định"
            - generic [ref=e216]: "1.3"
          - generic [ref=e217]: ⚠️ Title không chứa keyword "Keyword chưa xác định"
        - generic [ref=e218]:
          - generic [ref=e219]:
            - strong [ref=e220]: "Keyword nằm ở nửa đầu Title (vị trí: N/A)"
            - generic [ref=e221]: "1.4"
          - generic [ref=e222]: ⚠️ Keyword "Keyword chưa xác định" không có trong Title
      - generic [ref=e223]:
        - generic [ref=e224]:
          - generic [ref=e225]: Meta Description
          - generic [ref=e226]: 1/4
        - generic [ref=e227]:
          - generic [ref=e228]:
            - strong [ref=e229]: Meta description tồn tại (Không tìm thấy)
            - generic [ref=e230]: "2.1"
          - generic [ref=e231]: ⚠️ Thẻ không tồn tại hoặc rỗng!
        - generic [ref=e232]:
          - generic [ref=e233]:
            - strong [ref=e234]: "Độ dài Meta: 0 ký tự (chuẩn: 120–160)"
            - generic [ref=e235]: "2.2"
          - generic [ref=e236]: ⚠️ Không thể đo — Meta description không tồn tại
        - generic [ref=e237]:
          - generic [ref=e238]:
            - strong [ref=e239]: Meta description chứa keyword "Keyword chưa xác định"
            - generic [ref=e240]: "2.3"
          - generic [ref=e241]: ⚠️ Không thể kiểm tra — Meta description không tồn tại
      - generic [ref=e242]:
        - generic [ref=e243]:
          - generic [ref=e244]: Heading Structure
          - generic [ref=e245]: 3/4
        - generic [ref=e246]:
          - generic [ref=e247]:
            - strong [ref=e248]: H1 chứa keyword "Keyword chưa xác định"
            - generic [ref=e249]: "3.2"
          - generic [ref=e250]: ⚠️ H1 "Văn phòng cho thuê" không chứa keyword "Keyword chưa xác định"
      - generic [ref=e251]:
        - generic [ref=e252]:
          - generic [ref=e253]: URL Structure
          - generic [ref=e254]: 4/5
        - generic [ref=e255]:
          - generic [ref=e256]:
            - strong [ref=e257]: URL chứa keyword slug "keyword-chua-xac-dinh"
            - generic [ref=e258]: "4.2"
          - generic [ref=e259]: ⚠️ URL "/van-phong-cho-thue" không chứa keyword "keyword-chua-xac-dinh"
      - generic [ref=e260]:
        - generic [ref=e261]:
          - generic [ref=e262]: Content
          - generic [ref=e263]: 4/6
        - generic [ref=e264]:
          - generic [ref=e265]:
            - strong [ref=e266]: "Mật độ keyword: 0.00% (chuẩn: 0.5%–2.5%)"
            - generic [ref=e267]: "5.2"
          - generic [ref=e268]: "⚠️ Mật độ keyword quá thấp: 0.00%, cần ≥ 0.5%"
        - generic [ref=e269]:
          - generic [ref=e270]:
            - strong [ref=e271]: Keyword "Keyword chưa xác định" xuất hiện trong 100 từ đầu
            - generic [ref=e272]: "5.3"
          - generic [ref=e273]: ⚠️ Keyword "Keyword chưa xác định" không xuất hiện trong 100 từ đầu
      - generic [ref=e274]:
        - generic [ref=e275]:
          - generic [ref=e276]: Images
          - generic [ref=e277]: 3/6
        - generic [ref=e278]:
          - generic [ref=e279]:
            - strong [ref=e280]: Có ảnh chứa keyword "Keyword chưa xác định" trong alt
            - generic [ref=e281]: "6.2"
          - generic [ref=e282]: ⚠️ Không có ảnh nào có alt chứa keyword "Keyword chưa xác định"
        - generic [ref=e283]:
          - generic [ref=e284]:
            - strong [ref=e285]: "Ảnh có width/height: 3/9 (cần ≥ 80%)"
            - generic [ref=e286]: "6.3"
          - generic [ref=e287]: ⚠️ Chỉ 3/9 ảnh có width/height, cần ≥ 8
        - generic [ref=e288]:
          - generic [ref=e289]:
            - strong [ref=e290]: "Định dạng ảnh tối ưu (WebP/AVIF): 56% (cần ≥ 80%)"
            - generic [ref=e291]: "6.5"
          - generic [ref=e292]: "⚠️ Tỷ lệ ảnh WebP/AVIF quá thấp: 5/9 ảnh (56%)"
      - generic [ref=e293]:
        - generic [ref=e294]:
          - generic [ref=e295]: Links
          - generic [ref=e296]: 4/5
        - generic [ref=e297]:
          - generic [ref=e298]:
            - strong [ref=e299]: "Anchor text chất lượng (lỗi: 1)"
            - generic [ref=e300]: "7.3"
          - generic [ref=e301]: ⚠️ 1 link có anchor text không tốt
      - generic [ref=e302]:
        - generic [ref=e303]:
          - generic [ref=e304]: Technical SEO
          - generic [ref=e305]: 8/9
        - generic [ref=e306]:
          - generic [ref=e307]:
            - strong [ref=e308]: "Open Graph: og:title=✔, og:description=✘, og:image=✔"
            - generic [ref=e309]: "8.6"
          - generic [ref=e310]: ⚠️ og:description — Link không có thumbnail khi share trên social media
      - generic [ref=e311]:
        - generic [ref=e312]:
          - generic [ref=e313]: Mobile
          - generic [ref=e314]: 2/3
        - generic [ref=e315]:
          - generic [ref=e316]:
            - strong [ref=e317]: "Touch targets đủ lớn (≥ 48x48px): 15 lỗi"
            - generic [ref=e318]: "9.3"
          - generic [ref=e319]: ⚠️ Phát hiện 15 nút/link có kích thước quá nhỏ (< 48x48px)
      - generic [ref=e320]:
        - generic [ref=e321]:
          - generic [ref=e322]: Page Optimization
          - generic [ref=e323]: 4/7
        - generic [ref=e324]:
          - generic [ref=e325]:
            - strong [ref=e326]: "Browser caching (Cache-Control): ✘"
            - generic [ref=e327]: "10.2"
          - generic [ref=e328]: "⚠️ Cache header chưa tối ưu hoặc bị disable: no-store, no-cache, must-revalidate"
        - generic [ref=e329]:
          - generic [ref=e330]:
            - strong [ref=e331]: "LCP: 3172ms (< 2500ms)"
            - generic [ref=e332]: "10.6"
          - generic [ref=e333]: "⚠️ LCP quá cao: 3172ms (chuẩn: < 2.5s)"
        - generic [ref=e334]:
          - generic [ref=e335]:
            - strong [ref=e336]: "CLS: 0.237 (< 0.1)"
            - generic [ref=e337]: "10.8"
          - generic [ref=e338]: "⚠️ CLS quá cao: 0.237 (chuẩn: < 0.1)"
```

# Test source

```ts
  80  |         return Math.round((this.passedChecks / this.totalChecks) * 100);
  81  |     }
  82  | 
  83  |     /** Lấy thống kê chi tiết */
  84  |     get stats() {
  85  |         return {
  86  |             total: this.totalChecks,
  87  |             passed: this.passedChecks,
  88  |             failed: this.totalChecks - this.passedChecks,
  89  |             score: this.score,
  90  |             failures: [...this.failures],
  91  |         };
  92  |     }
  93  | 
  94  |     async finalizeScore(page: Page, threshold = 70): Promise<void> {
  95  |         const { total, passed, failed, score, failures } = this.stats;
  96  | 
  97  |         // Xác định trạng thái
  98  |         const isPass = score >= threshold;
  99  |         const statusText = isPass ? "PASS" : "FAIL";
  100 | 
  101 |         // Thang điểm SEO mới
  102 |         let scoreLabel: string;
  103 |         let statusIcon: string;
  104 |         if (score >= 93) {
  105 |             scoreLabel = "XUẤT SẮC";
  106 |             statusIcon = "💎";
  107 |         } else if (score >= 77) {
  108 |             scoreLabel = "TỐT";
  109 |             statusIcon = "🟢";
  110 |         } else if (score >= 65) {
  111 |             scoreLabel = "KHÁ";
  112 |             statusIcon = "🟡";
  113 |         } else if (score >= 50) {
  114 |             scoreLabel = "TRUNG BÌNH";
  115 |             statusIcon = "🟠";
  116 |         } else {
  117 |             scoreLabel = "KÉM";
  118 |             statusIcon = "🔴";
  119 |         }
  120 | 
  121 |         // Tạo báo cáo tổng kết dạng text
  122 |         const summaryLines = [
  123 |             `══════════════════════════════════════`,
  124 |             `   ${statusIcon} KẾT QUẢ CHẤM ĐIỂM SEO`,
  125 |             `══════════════════════════════════════`,
  126 |             `   Điểm số:     ${score}/100`,
  127 |             `   Đánh giá:    ${scoreLabel}`,
  128 |             `   Ngưỡng đạt:  ${threshold}%`,
  129 |             `   Kết quả:     ${statusText}`,
  130 |             `──────────────────────────────────────`,
  131 |             `   Tổng tiêu chí:  ${total}`,
  132 |             `   ✅ Đạt:          ${passed}`,
  133 |             `   ❌ Không đạt:    ${failed}`,
  134 |             `══════════════════════════════════════`,
  135 |         ];
  136 | 
  137 |         if (failures.length > 0) {
  138 |             summaryLines.push(``, `📋 CHI TIẾT LỖI CẦN KHẮC PHỤC (${failed}/${total}):`);
  139 | 
  140 |             // Group errors by their assigned group
  141 |             const groupedFailures = failures.reduce((acc, f) => {
  142 |                 if (!acc[f.group]) acc[f.group] = [];
  143 |                 acc[f.group].push(f);
  144 |                 return acc;
  145 |             }, {} as Record<string, ScorecardFailure[]>);
  146 | 
  147 |             let globalIndex = 1;
  148 |             for (const [group, items] of Object.entries(groupedFailures)) {
  149 |                 summaryLines.push(`--- ${group.toUpperCase()} ---`);
  150 |                 items.forEach((f) => {
  151 |                     summaryLines.push(`   ${globalIndex}. [${f.step}]`);
  152 |                     summaryLines.push(`      → ${f.message}`);
  153 |                     globalIndex++;
  154 |                 });
  155 |             }
  156 |         }
  157 | 
  158 |         const summaryText = summaryLines.join("\n");
  159 | 
  160 |         // Step cuối cùng — hiển thị bảng điểm + quyết định PASS/FAIL
  161 |         await customStep(
  162 |             page,
  163 |             `13. 🏆 Kết quả chấm điểm SEO: ${score}/100 — ${statusText} (${scoreLabel})`,
  164 |             async () => {
  165 |                 // Đính kèm bảng điểm text
  166 |                 await allure.attachment(
  167 |                     "Bảng điểm SEO",
  168 |                     Buffer.from(summaryText, "utf-8"),
  169 |                     "text/plain"
  170 |                 );
  171 | 
  172 |                 // Gắn description vào Test Case trên Allure
  173 |                 await allure.description(
  174 |                     `[${statusText}] Điểm SEO: ${score}/100 | Đạt: ${passed}/${total} tiêu chí | Ngưỡng: ${threshold}%\n\n` +
  175 |                     `${scoreLabel}`
  176 |                 );
  177 | 
  178 |                 // 🚀 ĐÂY LÀ DÒNG DUY NHẤT quyết định Test PASS hay FAIL
  179 |                 if (!isPass) {
> 180 |                     throw new Error(
      |                           ^ Error: ❌ FAIL — Điểm SEO 67/100 dưới ngưỡng 70%. Có 19/58 tiêu chí không đạt.
  181 |                         `❌ FAIL — Điểm SEO ${score}/100 dưới ngưỡng ${threshold}%. ` +
  182 |                         `Có ${failed}/${total} tiêu chí không đạt.`
  183 |                     );
  184 |                 }
  185 |             },
  186 |             { screenshot: true }
  187 |         );
  188 |     }
  189 | }
```