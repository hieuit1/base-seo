# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo.spec.ts >> SEO TIÊU CHUẨN CƠ BẢN CHO WEB >> Kiểm tra SEO Onpage: Cho thuê phòng họp Thủ Dầu Một Bình Dương (/cho-thue-phong-hop-thu-dau-mot-binh-duong)
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
        - link "Tiện ích" [ref=e37] [cursor=pointer]:
          - /url: https://thuevanphongbinhduong.com/tien-ich
      - listitem [ref=e38]:
        - text: /
        - link "Cho thuê phòng họp Thủ Dầu Một Bình Dương" [ref=e39] [cursor=pointer]:
          - /url: https://thuevanphongbinhduong.com/cho-thue-phong-hop-thu-dau-mot-binh-duong
    - generic [ref=e41]:
      - generic [ref=e42]:
        - generic [ref=e43]:
          - heading "Chi tiết Cho thuê phòng họp Thủ Dầu Một Bình Dương" [level=2] [ref=e45]
          - generic [ref=e46]:
            - img [ref=e47]
            - generic [ref=e50]: 41 Lượt xem
          - generic [ref=e52]:
            - generic [ref=e53] [cursor=pointer]:
              - img [ref=e54]
              - text: Mục lục
              - img [ref=e57]
            - text: ▾ ▾ ▾ ▾ ▾
          - text: ▾ ▾ ▾ ▾ ▾
          - generic [ref=e59]:
            - paragraph [ref=e60]:
              - text: Tìm kiếm một không gian chuyên nghiệp để tổ chức các cuộc họp quan trọng tại Thủ Dầu Một, Bình Dương? Bài viết này sẽ cung cấp cho bạn thông tin chi tiết về dịch vụ
              - strong [ref=e61]: cho thuê phòng họp Thủ Dầu Một
              - text: Bình Dương , đặc biệt là tại cao ốc văn phòng BM Tower . Với vị trí đắc địa, tiện ích đầy đủ và chi phí hợp lý, BM Tower hứa hẹn sẽ là lựa chọn tối ưu cho mọi nhu cầu hội họp của doanh nghiệp bạn. Đừng bỏ lỡ những phân tích chuyên sâu về các yếu tố cần cân nhắc khi lựa chọn phòng họp, cũng như những lợi ích vượt trội mà BM Tower mang lại.
            - heading "Tổng quan về thị trường cho thuê phòng họp tại Thủ Dầu Một, Bình Dương" [level=2] [ref=e62]
            - paragraph [ref=e63]:
              - text: Thành phố Thủ Dầu Một, Bình Dương, đang ngày càng khẳng định vị thế là một trung tâm kinh tế năng động của khu vực phía Nam. Sự phát triển mạnh mẽ của các khu công nghiệp, cụm công nghiệp cùng với làn sóng đầu tư trong và ngoài nước đã kéo theo nhu cầu lớn về không gian làm việc và hội họp chuyên nghiệp. Trong bối cảnh đó, dịch vụ
              - strong [ref=e64]: cho thuê phòng họp Thủ Dầu Một
              - text: Bình Dương trở nên thiết yếu hơn bao giờ hết.
            - paragraph [ref=e65]: Các doanh nghiệp, dù là startup non trẻ hay tập đoàn lớn, đều cần những không gian linh hoạt, tiện nghi để tổ chức các buổi họp chiến lược, gặp gỡ đối tác, đào tạo nhân viên hay thuyết trình dự án. Một phòng họp đạt chuẩn không chỉ thể hiện sự chuyên nghiệp của công ty mà còn góp phần tạo nên hiệu quả và thành công cho các cuộc thảo luận.
            - paragraph [ref=e66]: "Tuy nhiên, việc tìm kiếm một địa điểm phù hợp với các tiêu chí về vị trí, trang thiết bị, sức chứa và chi phí không phải lúc nào cũng dễ dàng. Bài viết này sẽ đi sâu vào việc phân tích các yếu tố cần lưu ý và giới thiệu một giải pháp nổi bật: cao ốc văn phòng BM Tower ."
            - 'heading "BM Tower: Điểm đến lý tưởng cho dịch vụ cho thuê phòng họp Thủ Dầu Một" [level=2] [ref=e67]'
            - paragraph [ref=e68]: Tọa lạc tại vị trí chiến lược trên đường Nguyễn Văn Trỗi, Thành phố Thủ Dầu Một, Bình Dương, BM Tower là một cao ốc văn phòng hạng C được thiết kế hiện đại, đáp ứng đa dạng nhu cầu về không gian làm việc và hội họp.
            - heading "Vị trí đắc địa và khả năng kết nối" [level=3] [ref=e69]
            - paragraph [ref=e70]: "Địa chỉ cụ thể của BM Tower là 330 Nguyễn Văn Trỗi, Phường Phú Lợi, Thủ Dầu Một. Vị trí này không chỉ thuận tiện cho việc di chuyển mà còn mang ý nghĩa chiến lược:"
            - list [ref=e71]:
              - listitem [ref=e72]:
                - strong [ref=e73]: "Cửa ngõ huyết mạch:"
                - text: Tòa nhà nằm ở vị trí được xem là cửa ngõ quan trọng kết nối với các khu công nghiệp lớn tại Bình Dương, tạo điều kiện thuận lợi cho các doanh nghiệp có hoạt động kinh doanh, sản xuất tại đây.
              - listitem [ref=e74]:
                - strong [ref=e75]: "Giao thông thuận tiện:"
                - text: BM Tower dễ dàng kết nối với các tuyến đường giao thông huyết mạch như Đại lộ Bình Dương và Ngô Gia Tự. Điều này giúp việc đi lại, đón tiếp đối tác, khách hàng trở nên nhanh chóng và hiệu quả.
              - listitem [ref=e76]:
                - strong [ref=e77]: "Khu vực sầm uất:"
                - text: Đối diện tòa nhà là trung tâm thương mại Becamex, một khu vực tập trung nhiều tiện ích, dịch vụ, ngân hàng, nhà hàng, tạo nên một môi trường làm việc và giao dịch sôi động, chuyên nghiệp.
            - heading "Kiến trúc và cơ sở hạ tầng" [level=3] [ref=e78]
            - paragraph [ref=e79]: BM Tower có quy mô xây dựng gồm 1 trệt và 4 tầng sử dụng làm văn phòng cho thuê, cùng với 1 tầng hầm để xe. Tòa nhà được thiết kế với diện tích sàn 740 m², tổng diện tích sử dụng lên đến 5000 m², mang đến không gian rộng rãi và linh hoạt.
            - list [ref=e80]:
              - listitem [ref=e81]:
                - strong [ref=e82]: "Thiết kế hiện đại:"
                - text: Tòa nhà được xây dựng với kết cấu vững chắc, mang phong cách hiện đại, phù hợp với tiêu chuẩn của một cao ốc văn phòng chuyên nghiệp.
              - listitem [ref=e83]:
                - strong [ref=e84]: "Tầng trệt đa năng:"
                - text: Tầng trệt được bố trí hợp lý, vừa làm sảnh lễ tân đón tiếp chuyên nghiệp, vừa có không gian đậu xe thuận tiện cho nhân viên và khách đến giao dịch.
              - listitem [ref=e85]:
                - strong [ref=e86]: "Diện tích sàn linh hoạt:"
                - text: Với diện tích sàn 740 m², BM Tower cho phép chủ đầu tư linh hoạt trong việc phân chia và cho thuê các diện tích văn phòng khác nhau, đáp ứng nhu cầu đa dạng của từng loại hình doanh nghiệp, từ các startup nhỏ đến các công ty quy mô lớn.
            - heading "Tiện ích và dịch vụ hỗ trợ" [level=3] [ref=e87]
            - paragraph [ref=e88]: "Hiểu rõ nhu cầu của khách hàng, BM Tower cung cấp đầy đủ các tiện ích và dịch vụ nhằm mang lại trải nghiệm tốt nhất:"
            - list [ref=e89]:
              - listitem [ref=e90]:
                - strong [ref=e91]: "Hệ thống thang máy:"
                - text: Tòa nhà được trang bị 1 thang máy hoạt động hiệu quả, giúp việc di chuyển giữa các tầng nhanh chóng và dễ dàng.
              - listitem [ref=e92]:
                - strong [ref=e93]: "Bãi đậu xe:"
                - text: Cung cấp chỗ đậu xe miễn phí cho cả xe máy và ô tô, giúp giải quyết nỗi lo về chỗ đậu xe cho nhân viên và khách hàng.
              - listitem [ref=e94]:
                - strong [ref=e95]: "Nhà vệ sinh:"
                - text: Mỗi tầng đều có hệ thống nhà vệ sinh nam, nữ riêng biệt, đảm bảo sự sạch sẽ và tiện nghi.
              - listitem [ref=e96]:
                - strong [ref=e97]: "An ninh 24/7:"
                - text: Đội ngũ bảo vệ chuyên nghiệp túc trực 24/24, đảm bảo an ninh, an toàn cho tài sản và hoạt động của các doanh nghiệp bên trong tòa nhà.
              - listitem [ref=e98]:
                - strong [ref=e99]: "Hệ thống PCCC:"
                - text: Trang bị hệ thống phòng cháy chữa cháy hiện đại, đạt tiêu chuẩn, đảm bảo an toàn tối đa.
              - listitem [ref=e100]:
                - strong [ref=e101]: "Dịch vụ chuyên nghiệp:"
                - text: Đội ngũ quản lý và vận hành tòa nhà luôn sẵn sàng hỗ trợ, giải quyết các vấn đề phát sinh một cách nhanh chóng và hiệu quả.
            - 'heading "Dịch vụ cho thuê phòng họp tại BM Tower: Giải pháp toàn diện" [level=2] [ref=e102]'
            - paragraph [ref=e103]:
              - text: Bên cạnh việc cung cấp không gian văn phòng cho thuê, BM Tower còn đặc biệt chú trọng đến nhu cầu tổ chức các sự kiện, hội họp thông qua dịch vụ
              - strong [ref=e104]: cho thuê phòng họp Thủ Dầu Một
              - text: Bình Dương chuyên nghiệp.
            - heading "Các loại hình phòng họp và sức chứa" [level=3] [ref=e105]
            - paragraph [ref=e106]: "BM Tower cung cấp nhiều lựa chọn phòng họp với sức chứa đa dạng, phù hợp với mọi quy mô sự kiện:"
            - list [ref=e107]:
              - listitem [ref=e108]:
                - strong [ref=e109]: "Phòng họp nhỏ (Boardroom):"
                - text: Thường dành cho các cuộc họp nội bộ, họp ban giám đốc, hoặc các buổi thảo luận kín với số lượng từ 5-15 người. Các phòng này thường có bàn họp lớn, ghế ngồi thoải mái, và các thiết bị cơ bản.
              - listitem [ref=e110]:
                - strong [ref=e111]: "Phòng họp vừa (Meeting Room):"
                - text: Phù hợp cho các buổi đào tạo, workshop, hoặc các cuộc họp với đối tác với sức chứa từ 20-50 người. Phòng được trang bị đầy đủ màn hình, máy chiếu, bảng trắng.
              - listitem [ref=e112]:
                - strong [ref=e113]: "Phòng hội thảo lớn (Seminar Room/Conference Room):"
                - text: Dành cho các sự kiện quy mô lớn hơn như hội thảo khách hàng, ra mắt sản phẩm, với sức chứa có thể lên đến 100 người hoặc hơn tùy theo cách bố trí. Các phòng này thường có không gian rộng rãi, hệ thống âm thanh, ánh sáng chuyên nghiệp.
            - paragraph [ref=e114]: Chủ đầu tư tại BM Tower luôn sẵn sàng hỗ trợ khách hàng trong việc tư vấn và bố trí mặt bằng phòng họp sao cho phù hợp nhất với yêu cầu cụ thể của từng buổi họp, đảm bảo sự thoải mái và hiệu quả.
            - heading "Trang thiết bị hiện đại" [level=3] [ref=e115]
            - paragraph [ref=e116]: "Một phòng họp hiệu quả không thể thiếu các trang thiết bị công nghệ hỗ trợ. Tại BM Tower , chúng tôi cam kết cung cấp:"
            - list [ref=e117]:
              - listitem [ref=e118]:
                - strong [ref=e119]: "Hệ thống âm thanh, ánh sáng:"
                - text: Đảm bảo âm thanh rõ ràng, ánh sáng phù hợp, tạo không khí chuyên nghiệp.
              - listitem [ref=e120]:
                - strong [ref=e121]: "Máy chiếu, màn hình:"
                - text: Cung cấp các thiết bị trình chiếu hiện đại, sắc nét để phục vụ bài thuyết trình.
              - listitem [ref=e122]:
                - strong [ref=e123]: "Bảng trắng, bút viết:"
                - text: Hỗ trợ ghi chú, phác thảo ý tưởng.
              - listitem [ref=e124]:
                - strong [ref=e125]: "Kết nối Internet tốc độ cao:"
                - text: Wi-Fi ổn định, đáp ứng nhu cầu làm việc, trao đổi thông tin trực tuyến.
              - listitem [ref=e126]:
                - strong [ref=e127]: "Hệ thống điều hòa không khí:"
                - text: Duy trì nhiệt độ lý tưởng, tạo sự thoải mái cho người tham dự.
              - listitem [ref=e128]:
                - strong [ref=e129]: "Nước uống, trà/cà phê:"
                - text: Cung cấp dịch vụ phục vụ nước uống, hoặc có thể bố trí thêm trà, cà phê theo yêu cầu.
            - heading "Lợi ích khi thuê phòng họp tại BM Tower" [level=3] [ref=e130]
            - paragraph [ref=e131]:
              - text: Lựa chọn dịch vụ
              - strong [ref=e132]: cho thuê phòng họp Thủ Dầu Một
              - text: "Bình Dương tại BM Tower mang lại nhiều lợi ích thiết thực:"
            - list [ref=e133]:
              - listitem [ref=e134]:
                - strong [ref=e135]: "Tiết kiệm chi phí:"
                - text: So với việc đầu tư xây dựng và trang bị một phòng họp riêng, việc thuê phòng họp theo nhu cầu giúp doanh nghiệp tiết kiệm đáng kể chi phí đầu tư ban đầu và chi phí vận hành, bảo trì.
              - listitem [ref=e136]:
                - strong [ref=e137]: "Linh hoạt về thời gian và không gian:"
                - text: Doanh nghiệp có thể thuê phòng họp theo giờ, theo ngày, hoặc theo hợp đồng dài hạn, tùy thuộc vào tần suất và quy mô các cuộc họp. Sức chứa cũng có thể điều chỉnh theo từng sự kiện cụ thể.
              - listitem [ref=e138]:
                - strong [ref=e139]: "Nâng cao hình ảnh chuyên nghiệp:"
                - text: Một phòng họp hiện đại, tiện nghi tại một cao ốc văn phòng uy tín như BM Tower sẽ giúp nâng cao đáng kể hình ảnh chuyên nghiệp của doanh nghiệp trong mắt đối tác và khách hàng.
              - listitem [ref=e140]:
                - strong [ref=e141]: "Tập trung vào công việc chính:"
                - text: Doanh nghiệp không cần bận tâm đến việc quản lý, bảo trì phòng họp, hệ thống thiết bị. Thay vào đó, toàn bộ nguồn lực có thể tập trung vào hoạt động kinh doanh cốt lõi.
              - listitem [ref=e142]:
                - strong [ref=e143]: "Vị trí thuận lợi:"
                - text: Dễ dàng tiếp cận, tiết kiệm thời gian di chuyển cho cả người tổ chức và người tham dự.
            - heading "Các yếu tố cần cân nhắc khi lựa chọn phòng họp" [level=2] [ref=e144]
            - paragraph [ref=e145]:
              - text: Khi có nhu cầu
              - strong [ref=e146]: cho thuê phòng họp Thủ Dầu Một
              - text: "Bình Dương , doanh nghiệp cần xem xét kỹ lưỡng các yếu tố sau để đảm bảo lựa chọn được địa điểm phù hợp nhất:"
            - heading "1. Mục đích và quy mô cuộc họp" [level=3] [ref=e147]
            - paragraph [ref=e148]: "Đây là yếu tố quan trọng nhất. Hãy xác định rõ:"
            - list [ref=e149]:
              - listitem [ref=e150]:
                - strong [ref=e151]: "Số lượng người tham dự dự kiến:"
                - text: Từ đó chọn phòng có sức chứa phù hợp, tránh quá chật chội hoặc quá trống trải.
              - listitem [ref=e152]:
                - strong [ref=e153]: "Tính chất cuộc họp:"
                - text: Là buổi họp chiến lược nội bộ, buổi đào tạo, hội thảo khách hàng, hay đàm phán với đối tác? Tính chất này sẽ ảnh hưởng đến cách bố trí phòng, yêu cầu về trang thiết bị và không khí chung.
            - heading "2. Vị trí và khả năng tiếp cận" [level=3] [ref=e154]
            - paragraph [ref=e155]: Một phòng họp ở vị trí dễ tìm, gần các tuyến giao thông chính sẽ giúp tiết kiệm thời gian di chuyển và tạo ấn tượng tốt. Đặc biệt, nếu có nhiều người tham dự ở các khu vực khác nhau, việc lựa chọn địa điểm thuận tiện cho tất cả mọi người là rất quan trọng.
            - heading "3. Trang thiết bị và công nghệ" [level=3] [ref=e156]
            - paragraph [ref=e157]: Kiểm tra kỹ các thiết bị cần thiết như máy chiếu, màn hình, hệ thống âm thanh, kết nối internet, bảng trắng, micro (nếu cần). Đảm bảo chúng hoạt động tốt và phù hợp với yêu cầu của buổi họp.
            - heading "4. Tiện nghi và dịch vụ đi kèm" [level=3] [ref=e158]
            - paragraph [ref=e159]: Xem xét các tiện nghi khác như bãi đậu xe, khu vực chờ, dịch vụ lễ tân, nước uống, wifi. Các yếu tố này tuy nhỏ nhưng có thể ảnh hưởng đến sự thoải mái và hiệu quả của cuộc họp.
            - heading "5. Chi phí thuê" [level=3] [ref=e160]
            - paragraph [ref=e161]: So sánh giá thuê của các địa điểm khác nhau, làm rõ các khoản chi phí bao gồm những gì (thuê phòng, thiết bị, dịch vụ đi kèm, phụ phí ngoài giờ...). Cân nhắc xem mức giá có phù hợp với ngân sách của công ty hay không.
            - heading "6. Thời hạn thuê" [level=3] [ref=e162]
            - paragraph [ref=e163]: Doanh nghiệp có thể có nhu cầu thuê phòng họp đột xuất, theo giờ, theo ngày, hoặc thuê định kỳ. Hãy trao đổi rõ về các gói thuê và chính sách linh hoạt của đơn vị cung cấp.
            - 'heading "BM Tower: Hơn cả một nơi cho thuê phòng họp" [level=2] [ref=e164]'
            - paragraph [ref=e165]:
              - text: BM Tower không chỉ đơn thuần là một địa điểm
              - strong [ref=e166]: cho thuê phòng họp Thủ Dầu Một
              - text: "Bình Dương . Tòa nhà còn cung cấp các sản phẩm và dịch vụ đa dạng khác, đáp ứng toàn diện nhu cầu của các doanh nghiệp:"
            - heading "1. Cho thuê văn phòng chuyên nghiệp" [level=3] [ref=e167]
            - paragraph [ref=e168]: Với tổng diện tích sàn lên đến 5000 m², BM Tower cung cấp các không gian văn phòng cho thuê linh hoạt về diện tích. Các doanh nghiệp có thể lựa chọn diện tích phù hợp với quy mô hoạt động, từ văn phòng nhỏ cho startup đến văn phòng lớn cho các tập đoàn. Chủ đầu tư sẵn sàng hỗ trợ việc phân chia mặt bằng để tối ưu hóa không gian sử dụng.
            - heading "2. Cho thuê mặt bằng kinh doanh" [level=3] [ref=e169]
            - paragraph [ref=e170]: Vị trí đắc địa, giao thông thuận tiện, đối diện trung tâm thương mại sầm uất khiến BM Tower trở thành địa điểm lý tưởng cho các loại hình kinh doanh bán lẻ, dịch vụ, hoặc văn phòng đại diện.
            - heading "3. Các ưu đãi và chi phí hợp lý" [level=3] [ref=e171]
            - paragraph [ref=e172]: "BM Tower mang đến một gói chi phí cạnh tranh và nhiều ưu đãi hấp dẫn:"
            - list [ref=e173]:
              - listitem [ref=e174]:
                - strong [ref=e175]: "Giá thuê:"
                - text: 170.000 VNĐ/m² (mức giá tham khảo, có thể thay đổi tùy diện tích và thời hạn thuê).
              - listitem [ref=e176]:
                - strong [ref=e177]: "Phí quản lý, phí xe máy, phí ô tô, phí ngoài giờ, tiền điện lạnh:"
                - text: Miễn phí. Đây là một lợi thế lớn giúp doanh nghiệp giảm bớt gánh nặng chi phí vận hành.
              - listitem [ref=e178]:
                - strong [ref=e179]: "Tiền điện:"
                - text: 3.500 VNĐ/kWh (theo quy định).
              - listitem [ref=e180]:
                - strong [ref=e181]: "Thời hạn thuê tối thiểu:"
                - text: 2 năm.
              - listitem [ref=e182]:
                - strong [ref=e183]: "Đặt cọc:"
                - text: 3 tháng.
              - listitem [ref=e184]:
                - strong [ref=e185]: "Thanh toán theo:"
                - text: Tháng.
            - paragraph [ref=e186]: Việc miễn phí nhiều loại phí dịch vụ như phí quản lý, phí gửi xe, phí ngoài giờ giúp BM Tower trở thành một trong những lựa chọn kinh tế và hiệu quả nhất cho các doanh nghiệp tại Bình Dương.
            - 'heading "BM Coffee: Không gian kết nối và thư giãn" [level=2] [ref=e187]'
            - paragraph [ref=e188]: "Trong khuôn viên hoặc gần BM Tower có thể có các dịch vụ đi kèm như BM Coffee . Đây không chỉ là nơi để thưởng thức đồ uống mà còn là không gian lý tưởng để:"
            - list [ref=e189]:
              - listitem [ref=e190]: Tổ chức các cuộc gặp gỡ không chính thức, tạo không khí thoải mái trước hoặc sau các cuộc họp quan trọng.
              - listitem [ref=e191]: Nhân viên có thể thư giãn, nạp năng lượng trong giờ nghỉ.
              - listitem [ref=e192]: Kết nối, giao lưu với các doanh nghiệp khác đang hoạt động trong tòa nhà hoặc khu vực lân cận.
            - paragraph [ref=e193]: Sự hiện diện của BM Coffee góp phần hoàn thiện hệ sinh thái tiện ích, mang lại sự thuận tiện và trải nghiệm tốt hơn cho cộng đồng doanh nghiệp tại BM Tower .
            - heading "Lời khuyên cho doanh nghiệp khi thuê phòng họp" [level=2] [ref=e194]
            - paragraph [ref=e195]: "Để tối ưu hóa hiệu quả của các cuộc họp và đảm bảo sự hài lòng, ngoài việc lựa chọn địa điểm uy tín như BM Tower , doanh nghiệp nên lưu ý:"
            - list [ref=e196]:
              - listitem [ref=e197]:
                - strong [ref=e198]: "Chuẩn bị kỹ lưỡng nội dung:"
                - text: Lên agenda chi tiết, chuẩn bị tài liệu, báo cáo cần thiết.
              - listitem [ref=e199]:
                - strong [ref=e200]: "Thông báo rõ ràng:"
                - text: Gửi lời mời họp với đầy đủ thông tin về thời gian, địa điểm, nội dung chính và các yêu cầu (nếu có) đến người tham dự.
              - listitem [ref=e201]:
                - strong [ref=e202]: "Phân công vai trò:"
                - text: Xác định người điều phối, thư ký ghi biên bản để cuộc họp diễn ra mạch lạc và hiệu quả.
              - listitem [ref=e203]:
                - strong [ref=e204]: "Kiểm tra thiết bị trước:"
                - text: Luôn kiểm tra hoạt động của máy chiếu, âm thanh, micro trước khi cuộc họp bắt đầu để tránh gián đoạn.
              - listitem [ref=e205]:
                - strong [ref=e206]: "Quản lý thời gian:"
                - text: Tuân thủ thời gian bắt đầu và kết thúc cuộc họp đã định.
            - heading "Kết luận" [level=2] [ref=e207]
            - paragraph [ref=e208]:
              - text: Nhu cầu về không gian họp chuyên nghiệp, tiện nghi và linh hoạt tại Thủ Dầu Một, Bình Dương ngày càng tăng cao. BM Tower nổi lên như một giải pháp toàn diện, cung cấp dịch vụ
              - strong [ref=e209]: cho thuê phòng họp Thủ Dầu Một
              - text: Bình Dương chất lượng, bên cạnh các dịch vụ cho thuê văn phòng và mặt bằng kinh doanh. Với vị trí đắc địa, cơ sở hạ tầng hiện đại, trang thiết bị đầy đủ và mức chi phí hợp lý, BM Tower cam kết mang đến sự hài lòng và hỗ trợ tối đa cho sự phát triển của các doanh nghiệp.
            - paragraph [ref=e210]: Nếu quý công ty đang tìm kiếm một địa điểm uy tín để tổ chức các sự kiện, hội họp quan trọng, đừng ngần ngại liên hệ với BM Tower để được tư vấn chi tiết và nhận báo giá tốt nhất.
            - separator [ref=e211]
            - heading "THÔNG TIN LIÊN HỆ" [level=3] [ref=e212]
            - paragraph [ref=e213]:
              - strong [ref=e214]: Tòa nhà văn phòng BM Tower
              - text: "| Cho thuê văn phòng tại Bình Dương"
            - paragraph [ref=e215]: "Địa chỉ: 330 Nguyễn Văn Trỗi, Phường Phú Lợi, Thủ Dầu Một, Bình Dương, TPHCM"
            - paragraph [ref=e216]: "Hotline: 0949616161"
            - paragraph [ref=e217]: "Điện thoại: 0949616161"
            - paragraph [ref=e218]: "Email: bmtower@gmail.com"
            - paragraph [ref=e219]
        - generic [ref=e222]:
          - generic [ref=e224]:
            - paragraph [ref=e225]:
              - link "Cho thuê văn phòng tại Thủ Dầu Một" [ref=e226] [cursor=pointer]:
                - /url: cho-thue-van-phong-tai-thu-dau-mot
                - img "Cho thuê văn phòng tại Thủ Dầu Một" [ref=e227]
            - generic [ref=e228]:
              - heading "Cho thuê văn phòng tại Thủ Dầu Một" [level=3] [ref=e230]:
                - link "Cho thuê văn phòng tại Thủ Dầu Một" [ref=e231] [cursor=pointer]:
                  - /url: cho-thue-van-phong-tai-thu-dau-mot
              - paragraph [ref=e232]: Ngoài nhu cầu về văn phòng cố định, các doanh nghiệp thường xuyên có nhu cầu thuê phòng họp cho các cuộc họp nội bộ, họp với đối tác, hội thảo, đào tạo. Thủ Dầu Một cũng cung cấp nhiều lựa chọn cho thuê phòng họp với các quy mô và trang thiết bị khác nhau.
              - link "Xem thêm bài viết " [ref=e233] [cursor=pointer]:
                - /url: cho-thue-van-phong-tai-thu-dau-mot
                - text: Xem thêm bài viết
                - generic [ref=e234]: 
          - generic [ref=e236]:
            - paragraph [ref=e237]:
              - link "Phòng họp theo giờ Bình Dương" [ref=e238] [cursor=pointer]:
                - /url: phong-hop-theo-gio-binh-duong
                - img "Phòng họp theo giờ Bình Dương" [ref=e239]
            - generic [ref=e240]:
              - heading "Phòng họp theo giờ Bình Dương" [level=3] [ref=e242]:
                - link "Phòng họp theo giờ Bình Dương" [ref=e243] [cursor=pointer]:
                  - /url: phong-hop-theo-gio-binh-duong
              - paragraph [ref=e244]: Các doanh nghiệp nhỏ, startup, hay các công ty có văn phòng chính ở xa thường xuyên cần thuê phòng họp theo giờ để tiết kiệm chi phí, tối ưu hóa lịch trình và đảm bảo tính chuyên nghiệp khi làm việc với khách hàng, đối tác.
              - link "Xem thêm bài viết " [ref=e245] [cursor=pointer]:
                - /url: phong-hop-theo-gio-binh-duong
                - text: Xem thêm bài viết
                - generic [ref=e246]: 
          - generic [ref=e247]:
            - generic:
              - paragraph:
                - link "Coworking Space Bình Dương":
                  - /url: coworking-space-binh-duong
                  - img "Coworking Space Bình Dương"
              - generic:
                - generic:
                  - heading "Coworking Space Bình Dương" [level=3]:
                    - link "Coworking Space Bình Dương":
                      - /url: coworking-space-binh-duong
                - paragraph: Mô hình coworking space, với ưu điểm về chi phí thấp, môi trường kết nối cộng đồng và tiện ích dùng chung, đã và đang thu hút sự quan tâm. Tuy nhiên, khi một doanh nghiệp phát triển đến một quy mô nhất định, hoặc yêu cầu tính riêng tư, bảo mật cao hơn, một văn phòng riêng biệt trong một tòa nhà chuyên nghiệp lại trở thành ưu tiên hàng đầu.
                - link "Xem thêm bài viết ":
                  - /url: coworking-space-binh-duong
                  - text: Xem thêm bài viết
                  - generic: 
          - generic [ref=e248]:
            - generic:
              - paragraph:
                - link "Phòng họp hội thảo Bình Dương":
                  - /url: phong-hop-hoi-thao-binh-duong
              - generic:
                - generic:
                  - heading "Phòng họp hội thảo Bình Dương" [level=3]:
                    - link "Phòng họp hội thảo Bình Dương":
                      - /url: phong-hop-hoi-thao-binh-duong
                - paragraph: Một phòng họp đạt chuẩn không chỉ là nơi diễn ra các cuộc thảo luận, đàm phán, mà còn là bộ mặt đại diện cho sự chuyên nghiệp và uy tín của doanh nghiệp.
                - link "Xem thêm bài viết ":
                  - /url: phong-hop-hoi-thao-binh-duong
                  - text: Xem thêm bài viết
                  - generic: 
          - generic [ref=e249]:
            - generic:
              - paragraph:
                - link "Cho thuê phòng họp Bình Dương":
                  - /url: cho-thue-phong-hop-binh-duong
              - generic:
                - generic:
                  - heading "Cho thuê phòng họp Bình Dương" [level=3]:
                    - link "Cho thuê phòng họp Bình Dương":
                      - /url: cho-thue-phong-hop-binh-duong
                - paragraph: "Việc tự đầu tư xây dựng hoặc trang bị một phòng họp tiêu chuẩn đòi hỏi chi phí ban đầu lớn, thời gian thiết lập và quản lý. Thuê phòng họp mang lại nhiều lợi ích thiết thực, đặc biệt với các doanh nghiệp vừa và nhỏ, startup hoặc các công ty có nhu cầu sử dụng không thường xuyên:"
                - link "Xem thêm bài viết ":
                  - /url: cho-thue-phong-hop-binh-duong
                  - text: Xem thêm bài viết
                  - generic: 
          - generic [ref=e250]:
            - generic:
              - paragraph:
                - link "Thuê văn phòng Bình Dương":
                  - /url: thue-van-phong-binh-duong
              - generic:
                - generic:
                  - heading "Thuê văn phòng Bình Dương" [level=3]:
                    - link "Thuê văn phòng Bình Dương":
                      - /url: thue-van-phong-binh-duong
                - paragraph: Không phải ngẫu nhiên mà Bình Dương trở thành điểm đến hấp dẫn cho các doanh nghiệp, đặc biệt là startup trong những năm gần đây. Tỉnh này sở hữu nhiều yếu tố thuận lợi mà các địa phương khác khó có được.
                - link "Xem thêm bài viết ":
                  - /url: thue-van-phong-binh-duong
                  - text: Xem thêm bài viết
                  - generic: 
      - text:      
    - generic [ref=e251]:
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
      - generic [ref=e255]: Copyright ©2026 BM TOWER. All Right Reserved. Thiết kế web MIMA
    - generic [ref=e256]:
      - 'link "Call me: 0949616161" [ref=e257] [cursor=pointer]':
        - /url: tel:0949616161
        - img [ref=e261]
        - generic [ref=e264]: "Call me: 0949616161"
      - 'link "Zalo: 0949616161" [ref=e265] [cursor=pointer]':
        - /url: https://zalo.me/0949616161
        - img [ref=e269]
        - generic [ref=e270]: "Zalo: 0949616161"
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
          - strong: Cho thuê phòng họp Thủ Dầu Một Bình Dương
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: Keyword chưa xác định
    - generic [ref=e271]:
      - generic [ref=e272]: "❌ Chi tiết lỗi cần khắc phục (19/56):"
      - generic [ref=e273]:
        - generic [ref=e274]:
          - generic [ref=e275]: Title
          - generic [ref=e276]: 2/5
        - generic [ref=e277]:
          - generic [ref=e278]:
            - strong [ref=e279]: "Độ dài Title: 41 ký tự (chuẩn: 50–60)"
            - generic [ref=e280]: "1.2"
          - generic [ref=e281]: ⚠️ Title quá ngắn hoặc quá dài (41 ký tự), cần 50–60
        - generic [ref=e282]:
          - generic [ref=e283]:
            - strong [ref=e284]: Title chứa keyword "Keyword chưa xác định"
            - generic [ref=e285]: "1.3"
          - generic [ref=e286]: ⚠️ Title không chứa keyword "Keyword chưa xác định"
        - generic [ref=e287]:
          - generic [ref=e288]:
            - strong [ref=e289]: "Keyword nằm ở nửa đầu Title (vị trí: N/A)"
            - generic [ref=e290]: "1.4"
          - generic [ref=e291]: ⚠️ Keyword "Keyword chưa xác định" không có trong Title
      - generic [ref=e292]:
        - generic [ref=e293]:
          - generic [ref=e294]: Meta Description
          - generic [ref=e295]: 1/4
        - generic [ref=e296]:
          - generic [ref=e297]:
            - strong [ref=e298]: Meta description tồn tại (Không tìm thấy)
            - generic [ref=e299]: "2.1"
          - generic [ref=e300]: ⚠️ Thẻ không tồn tại hoặc rỗng!
        - generic [ref=e301]:
          - generic [ref=e302]:
            - strong [ref=e303]: "Độ dài Meta: 0 ký tự (chuẩn: 120–160)"
            - generic [ref=e304]: "2.2"
          - generic [ref=e305]: ⚠️ Không thể đo — Meta description không tồn tại
        - generic [ref=e306]:
          - generic [ref=e307]:
            - strong [ref=e308]: Meta description chứa keyword "Keyword chưa xác định"
            - generic [ref=e309]: "2.3"
          - generic [ref=e310]: ⚠️ Không thể kiểm tra — Meta description không tồn tại
      - generic [ref=e311]:
        - generic [ref=e312]:
          - generic [ref=e313]: Heading Structure
          - generic [ref=e314]: 3/4
        - generic [ref=e315]:
          - generic [ref=e316]:
            - strong [ref=e317]: H1 chứa keyword "Keyword chưa xác định"
            - generic [ref=e318]: "3.2"
          - generic [ref=e319]: ⚠️ H1 "Cho thuê phòng họp Thủ Dầu Một Bình Dương" không chứa keyword "Keyword chưa xác định"
      - generic [ref=e320]:
        - generic [ref=e321]:
          - generic [ref=e322]: URL Structure
          - generic [ref=e323]: 4/5
        - generic [ref=e324]:
          - generic [ref=e325]:
            - strong [ref=e326]: URL chứa keyword slug "keyword-chua-xac-dinh"
            - generic [ref=e327]: "4.2"
          - generic [ref=e328]: ⚠️ URL "/cho-thue-phong-hop-thu-dau-mot-binh-duong" không chứa keyword "keyword-chua-xac-dinh"
      - generic [ref=e329]:
        - generic [ref=e330]:
          - generic [ref=e331]: Content
          - generic [ref=e332]: 4/6
        - generic [ref=e333]:
          - generic [ref=e334]:
            - strong [ref=e335]: "Mật độ keyword: 0.00% (chuẩn: 0.5%–2.5%)"
            - generic [ref=e336]: "5.2"
          - generic [ref=e337]: "⚠️ Mật độ keyword quá thấp: 0.00%, cần ≥ 0.5%"
        - generic [ref=e338]:
          - generic [ref=e339]:
            - strong [ref=e340]: Keyword "Keyword chưa xác định" xuất hiện trong 100 từ đầu
            - generic [ref=e341]: "5.3"
          - generic [ref=e342]: ⚠️ Keyword "Keyword chưa xác định" không xuất hiện trong 100 từ đầu
      - generic [ref=e343]:
        - generic [ref=e344]:
          - generic [ref=e345]: Images
          - generic [ref=e346]: 3/6
        - generic [ref=e347]:
          - generic [ref=e348]:
            - strong [ref=e349]: Có ảnh chứa keyword "Keyword chưa xác định" trong alt
            - generic [ref=e350]: "6.2"
          - generic [ref=e351]: ⚠️ Không có ảnh nào có alt chứa keyword "Keyword chưa xác định"
        - generic [ref=e352]:
          - generic [ref=e353]:
            - strong [ref=e354]: "Ảnh có width/height: 3/15 (cần ≥ 80%)"
            - generic [ref=e355]: "6.3"
          - generic [ref=e356]: ⚠️ Chỉ 3/15 ảnh có width/height, cần ≥ 12
        - generic [ref=e357]:
          - generic [ref=e358]:
            - strong [ref=e359]: "Định dạng ảnh tối ưu (WebP/AVIF): 20% (cần ≥ 80%)"
            - generic [ref=e360]: "6.5"
          - generic [ref=e361]: "⚠️ Tỷ lệ ảnh WebP/AVIF quá thấp: 3/15 ảnh (20%)"
      - generic [ref=e362]:
        - generic [ref=e363]:
          - generic [ref=e364]: Links
          - generic [ref=e365]: 4/5
        - generic [ref=e366]:
          - generic [ref=e367]:
            - strong [ref=e368]: "Anchor text chất lượng (lỗi: 1)"
            - generic [ref=e369]: "7.3"
          - generic [ref=e370]: ⚠️ 1 link có anchor text không tốt
      - generic [ref=e371]:
        - generic [ref=e372]:
          - generic [ref=e373]: Technical SEO
          - generic [ref=e374]: 8/9
        - generic [ref=e375]:
          - generic [ref=e376]:
            - strong [ref=e377]: "Open Graph: og:title=✔, og:description=✘, og:image=✔"
            - generic [ref=e378]: "8.6"
          - generic [ref=e379]: ⚠️ og:description — Link không có thumbnail khi share trên social media
      - generic [ref=e380]:
        - generic [ref=e381]:
          - generic [ref=e382]: Mobile
          - generic [ref=e383]: 2/3
        - generic [ref=e384]:
          - generic [ref=e385]:
            - strong [ref=e386]: "Touch targets đủ lớn (≥ 48x48px): 15 lỗi"
            - generic [ref=e387]: "9.3"
          - generic [ref=e388]: ⚠️ Phát hiện 15 nút/link có kích thước quá nhỏ (< 48x48px)
      - generic [ref=e389]:
        - generic [ref=e390]:
          - generic [ref=e391]: Page Optimization
          - generic [ref=e392]: 4/7
        - generic [ref=e393]:
          - generic [ref=e394]:
            - strong [ref=e395]: "Browser caching (Cache-Control): ✘"
            - generic [ref=e396]: "10.2"
          - generic [ref=e397]: "⚠️ Cache header chưa tối ưu hoặc bị disable: no-store, no-cache, must-revalidate"
        - generic [ref=e398]:
          - generic [ref=e399]:
            - strong [ref=e400]: "LCP: 3184ms (< 2500ms)"
            - generic [ref=e401]: "10.6"
          - generic [ref=e402]: "⚠️ LCP quá cao: 3184ms (chuẩn: < 2.5s)"
        - generic [ref=e403]:
          - generic [ref=e404]:
            - strong [ref=e405]: "CLS: 0.132 (< 0.1)"
            - generic [ref=e406]: "10.8"
          - generic [ref=e407]: "⚠️ CLS quá cao: 0.132 (chuẩn: < 0.1)"
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