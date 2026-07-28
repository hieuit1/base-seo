# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo.spec.ts >> SEO TIÊU CHUẨN CƠ BẢN CHO WEB >> Kiểm tra SEO Onpage: Thuyết trình đỉnh cao (/thuyet-trinh-dinh-cao)
- Location: tests/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 69/100 dưới ngưỡng 70%. Có 18/58 tiêu chí không đạt.
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
        - link "Hoạt động" [ref=e37] [cursor=pointer]:
          - /url: https://thuevanphongbinhduong.com/hoat-dong
      - listitem [ref=e38]:
        - text: /
        - link "Thuyết trình đỉnh cao" [ref=e39] [cursor=pointer]:
          - /url: https://thuevanphongbinhduong.com/thuyet-trinh-dinh-cao
    - generic [ref=e41]:
      - generic [ref=e42]:
        - generic [ref=e43]:
          - heading "Chi tiết Thuyết trình đỉnh cao" [level=2] [ref=e45]
          - generic [ref=e46]:
            - img [ref=e47]
            - generic [ref=e50]: 142 Lượt xem
          - generic [ref=e52]:
            - generic [ref=e53] [cursor=pointer]:
              - img [ref=e54]
              - text: Mục lục
              - img [ref=e57]
            - text: ▾
          - text: ▾
          - generic [ref=e59]:
            - 'heading "Thuyết trình đỉnh cao: Chìa khóa mở cánh cửa thành công" [level=2] [ref=e60]'
            - paragraph [ref=e61]: Bạn đã bao giờ cảm thấy bế tắc khi đứng trước một đám đông, dù đã chuẩn bị kỹ lưỡng nhưng lời nói vẫn vấp váp, ý tưởng cứ thế tan biến? Bạn có bao giờ tiếc nuối vì những cơ hội đáng lẽ thuộc về mình lại vuột mất chỉ vì không đủ sức thuyết phục? Hay đơn giản là những đóng góp của bạn cứ lặng lẽ trôi qua mà không nhận được sự ghi nhận xứng đáng? Nếu những câu hỏi này khiến bạn trăn trở, thì đây chính là bài viết dành cho bạn. Nắm vững kỹ năng thuyết trình đỉnh cao không chỉ giúp bạn ghi điểm trong công việc mà còn mở ra vô vàn cơ hội trong cuộc sống. Nó không chỉ là việc nói cho hay, mà là nghệ thuật truyền tải thông điệp, khơi gợi cảm xúc và lay động lòng người.
            - heading "Tại sao kỹ năng thuyết trình lại quan trọng đến vậy?" [level=3] [ref=e62]
            - paragraph [ref=e63]: Trong môi trường làm việc hiện đại, đặc biệt là các lĩnh vực như cho thuê văn phòng hay cho thuê phòng họp, khả năng trình bày ý tưởng, giới thiệu sản phẩm, hay đàm phán hợp đồng đóng vai trò then chốt. Một bài thuyết trình thành công có thể mang về hợp đồng béo bở, thuyết phục ban lãnh đạo duyệt một dự án quan trọng, hay đơn giản là xây dựng hình ảnh chuyên nghiệp, đáng tin cậy cho bản thân và doanh nghiệp. Hãy tưởng tượng bạn đang giới thiệu một mặt bằng kinh doanh đắc địa cho một khách hàng tiềm năng. Nếu bạn có thể diễn đạt trôi chảy, chỉ ra được những ưu điểm vượt trội, phác họa viễn cảnh kinh doanh thành công và trả lời mọi thắc mắc một cách tự tin, khả năng chốt giao dịch sẽ cao hơn gấp bội. Ngược lại, một bài thuyết trình nhạt nhòa, thiếu sức sống có thể khiến khách hàng mất hứng, bỏ qua cơ hội đầu tư vàng. Tương tự, khi bạn cho thuê văn phòng, việc trình bày về tiện ích, vị trí, dịch vụ đi kèm sao cho hấp dẫn, làm nổi bật lợi thế cạnh tranh là vô cùng quan trọng. Một bài thuyết trình tốt sẽ giúp khách hàng hình dung rõ ràng về không gian làm việc lý tưởng, từ đó đưa ra quyết định nhanh chóng.
            - heading "Bí quyết xây dựng bài thuyết trình đỉnh cao" [level=3] [ref=e64]
            - paragraph [ref=e65]: Để đạt được sự đỉnh cao trong thuyết trình, bạn cần kết hợp nhiều yếu tố, từ chuẩn bị nội dung, kỹ thuật trình bày đến khả năng tương tác với khán giả.
            - heading "1. Chuẩn bị nội dung sâu sắc và logic" [level=4] [ref=e66]
            - heading "a. Hiểu rõ đối tượng mục tiêu" [level=5] [ref=e67]
            - paragraph [ref=e68]: "Trước khi bắt tay vào soạn bài, hãy tự hỏi: Khán giả của tôi là ai? Họ quan tâm điều gì? Kiến thức nền tảng của họ về vấn đề này đến đâu? Việc này giúp bạn điều chỉnh ngôn ngữ, mức độ chi tiết và cách tiếp cận sao cho phù hợp nhất. Ví dụ, khi cho thuê phòng họp cho các doanh nghiệp công nghệ, bạn cần nhấn mạnh vào các thiết bị hiện đại, kết nối internet tốc độ cao, còn với các công ty sự kiện, yếu tố không gian linh hoạt, sức chứa và dịch vụ hỗ trợ sẽ được ưu tiên."
            - heading "b. Cấu trúc bài thuyết trình khoa học" [level=5] [ref=e69]
            - paragraph [ref=e70]: "Một bài thuyết trình hiệu quả thường tuân theo cấu trúc 3 phần: * Mở bài: Thu hút sự chú ý ngay từ đầu bằng một câu chuyện, một câu hỏi gợi mở, hoặc một số liệu ấn tượng. Nêu rõ mục đích và nội dung chính của bài thuyết trình. * Thân bài: Trình bày các luận điểm một cách rõ ràng, logic, có dẫn chứng cụ thể. Sử dụng các phương pháp trực quan như hình ảnh, biểu đồ để minh họa. Chia nhỏ nội dung thành các phần dễ theo dõi. * Kết bài: Tóm tắt lại các ý chính, đưa ra lời kêu gọi hành động (Call to Action) hoặc để lại thông điệp đáng nhớ."
            - heading "c. Luyện tập, luyện tập và luyện tập" [level=5] [ref=e71]
            - paragraph [ref=e72]: Nội dung hay đến đâu cũng cần được truyền tải một cách trôi chảy. Hãy dành thời gian luyện tập trước gương, ghi âm hoặc quay video lại để tự đánh giá và chỉnh sửa. Luyện tập giúp bạn làm quen với từng câu chữ, kiểm soát thời gian và giảm thiểu tối đa tình trạng quên bài.
            - heading "2. Nghệ thuật trình bày thu hút" [level=4] [ref=e73]
            - heading "a. Ngôn ngữ cơ thể tự tin" [level=5] [ref=e74]
            - paragraph [ref=e75]: Ánh mắt giao tiếp là cầu nối quan trọng nhất. Hãy nhìn vào mắt khán giả một cách tự nhiên, không nhìn chằm chằm hay né tránh. Tư thế đứng thẳng, vai mở rộng, cử chỉ tay minh họa phù hợp sẽ tạo cảm giác bạn làm chủ sân khấu. Tránh các thói quen xấu như khoanh tay, rung chân, hay nghịch tóc.
            - heading "b. Giọng nói truyền cảm và có điểm nhấn" [level=5] [ref=e76]
            - paragraph [ref=e77]: Thay đổi ngữ điệu, tốc độ nói để bài thuyết trình không bị đều đều, nhàm chán. Nhấn mạnh vào những từ khóa quan trọng, những thông điệp cốt lõi. Tạm dừng đúng lúc để khán giả có thời gian tiếp nhận thông tin và suy ngẫm. Sự im lặng có chủ đích đôi khi còn mạnh mẽ hơn bất kỳ lời nói nào.
            - heading "c. Sử dụng công cụ hỗ trợ hiệu quả" [level=5] [ref=e78]
            - paragraph [ref=e79]: Slideshow, video, hay các đạo cụ trình bày chỉ nên là công cụ hỗ trợ, không phải là nhân vật chính. Thiết kế slide đơn giản, dễ đọc, tránh nhồi nhét quá nhiều chữ. Hình ảnh và biểu đồ cần sắc nét, liên quan trực tiếp đến nội dung bạn đang nói. Đừng bao giờ quay lưng lại với khán giả để đọc nội dung trên màn hình.
            - heading "3. Tương tác và kết nối với khán giả" [level=4] [ref=e80]
            - heading "a. Lắng nghe và thấu hiểu" [level=5] [ref=e81]
            - paragraph [ref=e82]: Hãy sẵn sàng lắng nghe những câu hỏi, ý kiến từ khán giả. Thể hiện sự tôn trọng và ghi nhận mọi đóng góp, ngay cả khi bạn không đồng tình. Nếu có thắc mắc, hãy đặt câu hỏi ngược lại để làm rõ vấn đề.
            - heading "b. Xử lý câu hỏi khó một cách khéo léo" [level=5] [ref=e83]
            - paragraph [ref=e84]: Không phải lúc nào bạn cũng có câu trả lời hoàn hảo cho mọi câu hỏi. Nếu gặp tình huống này, đừng ngại ngần thừa nhận và hứa sẽ tìm câu trả lời sau. Hoặc bạn có thể khéo léo lái câu hỏi sang một khía cạnh khác mà bạn nắm vững hơn.
            - heading "c. Tạo dựng không khí cởi mở" [level=5] [ref=e85]
            - paragraph [ref=e86]: Sự hài hước (phù hợp với ngữ cảnh) có thể giúp giảm bớt căng thẳng và tạo sự gần gũi. Hãy biến bài thuyết trình thành một cuộc trò chuyện hai chiều, nơi mọi người cùng chia sẻ và học hỏi.
            - heading "Thuyết trình đỉnh cao trong lĩnh vực cho thuê văn phòng và phòng họp" [level=3] [ref=e87]
            - paragraph [ref=e88]: "Trong ngành cho thuê văn phòng và cho thuê phòng họp, kỹ năng thuyết trình không chỉ dừng lại ở việc giới thiệu sản phẩm mà còn là cách bạn xây dựng niềm tin và mối quan hệ với khách hàng. Khi tư vấn một văn phòng cho thuê, bạn không chỉ bán không gian mà còn bán giải pháp cho vấn đề của khách hàng. Bài thuyết trình của bạn cần thể hiện sự am hiểu về nhu cầu của họ: quy mô công ty, ngành nghề kinh doanh, văn hóa doanh nghiệp, ngân sách dự kiến. Từ đó, bạn có thể gợi ý những văn phòng cho thuê phù hợp nhất, nêu bật những lợi ích mà không gian đó mang lại cho sự phát triển của họ. Đối với dịch vụ cho thuê phòng họp, bài thuyết trình cần tập trung vào tính chuyên nghiệp, tiện nghi và sự linh hoạt. Khách hàng thường tìm đến các dịch vụ này để tổ chức các cuộc họp quan trọng, hội thảo, đào tạo. Do đó, bạn cần nhấn mạnh vào: * Trang thiết bị hiện đại (máy chiếu, màn hình, hệ thống âm thanh, internet tốc độ cao). * Không gian được bài trí chuyên nghiệp, tạo cảm hứng làm việc. * Các gói dịch vụ hỗ trợ đi kèm (tea break, lễ tân, bảo vệ). * Khả năng tùy chỉnh không gian theo yêu cầu cụ thể. Một bài thuyết trình tốt sẽ giúp khách hàng cảm thấy yên tâm và tin tưởng vào khả năng đáp ứng mọi nhu cầu của bạn. Họ sẽ cảm nhận được sự chuyên nghiệp, tận tâm và mong muốn mang đến những gì tốt nhất cho khách hàng của mình."
            - heading "Lời kết" [level=3] [ref=e89]
            - paragraph [ref=e90]: "Thuyết trình đỉnh cao là một hành trình rèn luyện không ngừng nghỉ. Nó đòi hỏi sự chuẩn bị kỹ lưỡng, tư duy logic, khả năng diễn đạt và sự tự tin. Đừng nản lòng nếu những lần đầu tiên chưa được như ý. Hãy xem mỗi bài thuyết trình là một cơ hội để học hỏi, cải thiện. Khi bạn chinh phục được nghệ thuật này, cánh cửa thành công sẽ rộng mở, mang đến cho bạn nhiều cơ hội hơn trong sự nghiệp và cuộc sống. --- Tòa nhà văn phòng BM Tower | Cho thuê văn phòng tại Bình Dương Địa chỉ: 330 Nguyễn Văn Trỗi, Phường Phú Lợi, Thủ Dầu Một, Bình Dương, TPHCM Hotline: 0949616161 Điện thoại: 0949616161 Email: bmtower@gmail.com Website: thuevanphongbinhduong.com"
        - generic [ref=e93]:
          - generic [ref=e95]:
            - paragraph [ref=e96]:
              - link "Cafe Doanh Nhân" [ref=e97] [cursor=pointer]:
                - /url: cafe-doanh-nhan
                - img "Cafe Doanh Nhân" [ref=e98]
            - generic [ref=e99]:
              - heading "Cafe Doanh Nhân" [level=3] [ref=e101]:
                - link "Cafe Doanh Nhân" [ref=e102] [cursor=pointer]:
                  - /url: cafe-doanh-nhan
              - paragraph [ref=e103]: Cafe Doanh Nhân không chỉ đơn thuần là một điểm hẹn thưởng thức đồ uống, mà còn là một môi trường lý tưởng, nơi quy tụ những nhà lãnh đạo, nhà quản lý, những người đang trên hành trình chinh phục thành công.
              - link "Xem thêm bài viết " [ref=e104] [cursor=pointer]:
                - /url: cafe-doanh-nhan
                - text: Xem thêm bài viết
                - generic [ref=e105]: 
          - generic [ref=e107]:
            - paragraph [ref=e108]:
              - link "Chương trình huấn luyện tại tòa nhà BM Tower" [ref=e109] [cursor=pointer]:
                - /url: cuoc-hop-chien-luoc
                - img "Chương trình huấn luyện tại tòa nhà BM Tower" [ref=e110]
            - generic [ref=e111]:
              - heading "Chương trình huấn luyện tại tòa nhà BM Tower" [level=3] [ref=e113]:
                - link "Chương trình huấn luyện tại tòa nhà BM Tower" [ref=e114] [cursor=pointer]:
                  - /url: cuoc-hop-chien-luoc
              - paragraph [ref=e115]: Không gian họp tối ưu với trang thiết bị hiện đại, tạo điều kiện lý tưởng cho những thảo luận sâu sắc.
              - link "Xem thêm bài viết " [ref=e116] [cursor=pointer]:
                - /url: cuoc-hop-chien-luoc
                - text: Xem thêm bài viết
                - generic [ref=e117]: 
          - generic [ref=e118]:
            - generic:
              - paragraph:
                - link "Gắn kết đội ngũ":
                  - /url: gan-ket-doi-ngu
                  - img "Gắn kết đội ngũ"
              - generic:
                - generic:
                  - heading "Gắn kết đội ngũ" [level=3]:
                    - link "Gắn kết đội ngũ":
                      - /url: gan-ket-doi-ngu
                - paragraph: Sự gắn kết đội ngũ không chỉ giúp tăng cường hiệu suất làm việc, mà còn tạo ra một không khí làm việc tích cực, giảm thiểu xung đột và giữ chân nhân tài.
                - link "Xem thêm bài viết ":
                  - /url: gan-ket-doi-ngu
                  - text: Xem thêm bài viết
                  - generic: 
      - text:   
    - generic [ref=e119]:
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
      - generic [ref=e123]: Copyright ©2026 BM TOWER. All Right Reserved. Thiết kế web MIMA
    - generic [ref=e124]:
      - 'link "Call me: 0949616161" [ref=e125] [cursor=pointer]':
        - /url: tel:0949616161
        - img [ref=e129]
        - generic [ref=e132]: "Call me: 0949616161"
      - 'link "Zalo: 0949616161" [ref=e133] [cursor=pointer]':
        - /url: https://zalo.me/0949616161
        - img [ref=e137]
        - generic [ref=e138]: "Zalo: 0949616161"
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
              - generic: "68"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 68/100
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
          - generic: ✅ 38
          - generic: Đạt
        - generic:
          - generic: ❌ 18
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: Thuyết trình đỉnh cao
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: Keyword chưa xác định
    - generic [ref=e139]:
      - generic [ref=e140]: "❌ Chi tiết lỗi cần khắc phục (18/56):"
      - generic [ref=e141]:
        - generic [ref=e142]:
          - generic [ref=e143]: Title
          - generic [ref=e144]: 2/5
        - generic [ref=e145]:
          - generic [ref=e146]:
            - strong [ref=e147]: "Độ dài Title: 21 ký tự (chuẩn: 50–60)"
            - generic [ref=e148]: "1.2"
          - generic [ref=e149]: ⚠️ Title quá ngắn hoặc quá dài (21 ký tự), cần 50–60
        - generic [ref=e150]:
          - generic [ref=e151]:
            - strong [ref=e152]: Title chứa keyword "Keyword chưa xác định"
            - generic [ref=e153]: "1.3"
          - generic [ref=e154]: ⚠️ Title không chứa keyword "Keyword chưa xác định"
        - generic [ref=e155]:
          - generic [ref=e156]:
            - strong [ref=e157]: "Keyword nằm ở nửa đầu Title (vị trí: N/A)"
            - generic [ref=e158]: "1.4"
          - generic [ref=e159]: ⚠️ Keyword "Keyword chưa xác định" không có trong Title
      - generic [ref=e160]:
        - generic [ref=e161]:
          - generic [ref=e162]: Meta Description
          - generic [ref=e163]: 1/4
        - generic [ref=e164]:
          - generic [ref=e165]:
            - strong [ref=e166]: Meta description tồn tại (Không tìm thấy)
            - generic [ref=e167]: "2.1"
          - generic [ref=e168]: ⚠️ Thẻ không tồn tại hoặc rỗng!
        - generic [ref=e169]:
          - generic [ref=e170]:
            - strong [ref=e171]: "Độ dài Meta: 0 ký tự (chuẩn: 120–160)"
            - generic [ref=e172]: "2.2"
          - generic [ref=e173]: ⚠️ Không thể đo — Meta description không tồn tại
        - generic [ref=e174]:
          - generic [ref=e175]:
            - strong [ref=e176]: Meta description chứa keyword "Keyword chưa xác định"
            - generic [ref=e177]: "2.3"
          - generic [ref=e178]: ⚠️ Không thể kiểm tra — Meta description không tồn tại
      - generic [ref=e179]:
        - generic [ref=e180]:
          - generic [ref=e181]: Heading Structure
          - generic [ref=e182]: 3/4
        - generic [ref=e183]:
          - generic [ref=e184]:
            - strong [ref=e185]: H1 chứa keyword "Keyword chưa xác định"
            - generic [ref=e186]: "3.2"
          - generic [ref=e187]: ⚠️ H1 "Thuyết trình đỉnh cao" không chứa keyword "Keyword chưa xác định"
      - generic [ref=e188]:
        - generic [ref=e189]:
          - generic [ref=e190]: URL Structure
          - generic [ref=e191]: 4/5
        - generic [ref=e192]:
          - generic [ref=e193]:
            - strong [ref=e194]: URL chứa keyword slug "keyword-chua-xac-dinh"
            - generic [ref=e195]: "4.2"
          - generic [ref=e196]: ⚠️ URL "/thuyet-trinh-dinh-cao" không chứa keyword "keyword-chua-xac-dinh"
      - generic [ref=e197]:
        - generic [ref=e198]:
          - generic [ref=e199]: Content
          - generic [ref=e200]: 4/6
        - generic [ref=e201]:
          - generic [ref=e202]:
            - strong [ref=e203]: "Mật độ keyword: 0.00% (chuẩn: 0.5%–2.5%)"
            - generic [ref=e204]: "5.2"
          - generic [ref=e205]: "⚠️ Mật độ keyword quá thấp: 0.00%, cần ≥ 0.5%"
        - generic [ref=e206]:
          - generic [ref=e207]:
            - strong [ref=e208]: Keyword "Keyword chưa xác định" xuất hiện trong 100 từ đầu
            - generic [ref=e209]: "5.3"
          - generic [ref=e210]: ⚠️ Keyword "Keyword chưa xác định" không xuất hiện trong 100 từ đầu
      - generic [ref=e211]:
        - generic [ref=e212]:
          - generic [ref=e213]: Images
          - generic [ref=e214]: 3/6
        - generic [ref=e215]:
          - generic [ref=e216]:
            - strong [ref=e217]: Có ảnh chứa keyword "Keyword chưa xác định" trong alt
            - generic [ref=e218]: "6.2"
          - generic [ref=e219]: ⚠️ Không có ảnh nào có alt chứa keyword "Keyword chưa xác định"
        - generic [ref=e220]:
          - generic [ref=e221]:
            - strong [ref=e222]: "Ảnh có width/height: 3/9 (cần ≥ 80%)"
            - generic [ref=e223]: "6.3"
          - generic [ref=e224]: ⚠️ Chỉ 3/9 ảnh có width/height, cần ≥ 8
        - generic [ref=e225]:
          - generic [ref=e226]:
            - strong [ref=e227]: "Định dạng ảnh tối ưu (WebP/AVIF): 33% (cần ≥ 80%)"
            - generic [ref=e228]: "6.5"
          - generic [ref=e229]: "⚠️ Tỷ lệ ảnh WebP/AVIF quá thấp: 3/9 ảnh (33%)"
      - generic [ref=e230]:
        - generic [ref=e231]:
          - generic [ref=e232]: Links
          - generic [ref=e233]: 4/5
        - generic [ref=e234]:
          - generic [ref=e235]:
            - strong [ref=e236]: "Anchor text chất lượng (lỗi: 1)"
            - generic [ref=e237]: "7.3"
          - generic [ref=e238]: ⚠️ 1 link có anchor text không tốt
      - generic [ref=e239]:
        - generic [ref=e240]:
          - generic [ref=e241]: Technical SEO
          - generic [ref=e242]: 8/9
        - generic [ref=e243]:
          - generic [ref=e244]:
            - strong [ref=e245]: "Open Graph: og:title=✔, og:description=✘, og:image=✔"
            - generic [ref=e246]: "8.6"
          - generic [ref=e247]: ⚠️ og:description — Link không có thumbnail khi share trên social media
      - generic [ref=e248]:
        - generic [ref=e249]:
          - generic [ref=e250]: Mobile
          - generic [ref=e251]: 2/3
        - generic [ref=e252]:
          - generic [ref=e253]:
            - strong [ref=e254]: "Touch targets đủ lớn (≥ 48x48px): 16 lỗi"
            - generic [ref=e255]: "9.3"
          - generic [ref=e256]: ⚠️ Phát hiện 16 nút/link có kích thước quá nhỏ (< 48x48px)
      - generic [ref=e257]:
        - generic [ref=e258]:
          - generic [ref=e259]: Page Optimization
          - generic [ref=e260]: 5/7
        - generic [ref=e261]:
          - generic [ref=e262]:
            - strong [ref=e263]: "Browser caching (Cache-Control): ✘"
            - generic [ref=e264]: "10.2"
          - generic [ref=e265]: "⚠️ Cache header chưa tối ưu hoặc bị disable: no-store, no-cache, must-revalidate"
        - generic [ref=e266]:
          - generic [ref=e267]:
            - strong [ref=e268]: "LCP: 3104ms (< 2500ms)"
            - generic [ref=e269]: "10.6"
          - generic [ref=e270]: "⚠️ LCP quá cao: 3104ms (chuẩn: < 2.5s)"
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 69/100 dưới ngưỡng 70%. Có 18/58 tiêu chí không đạt.
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