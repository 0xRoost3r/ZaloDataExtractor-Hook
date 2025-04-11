<h1 align="center"><img src="./images/icon-384.png" width="22px"> ZaloDataExtractor-Hook</h1>
<img align='right' src="./images/icon-384.png" width="75" height="75">

## Giới thiệu
**ZaloDataExtractor-Hook** là một tiện ích mở rộng (extension) giúp người dùng đăng ký dùng thử ZaHook một cách nhanh chóng và thuận tiện. Extension này sẽ tự động thu thập các thông tin cần thiết từ Zalo Web và gửi yêu cầu dùng thử.

## Tính năng

- **Tự động thu thập thông tin:** IMEI, Cookies, và User-Agent từ Zalo Web
- **Giao diện đơn giản:** Chỉ cần điền số điện thoại và nhấn nút đăng ký
- **Tích hợp với ZaHook:** Tự động gửi yêu cầu dùng thử đến hệ thống

## Hướng dẫn cài đặt

```bash
git clone https://github.com/JustKemForFun/ZaloDataExtractor-Hook/
```

1. Tải extension về máy:
   - Clone hoặc tải repository này về máy
   - Giải nén nếu tải file zip

2. Cài đặt extension:
   - Mở Chrome/Edge và truy cập `chrome://extensions/` (Chrome) hoặc `edge://extensions/` (Edge)
   - Bật "**Developer mode**" ở góc phải trên
   - Nhấn "**Load unpacked**" và chọn thư mục chứa extension vừa tải về

## Cách sử dụng

1. **Bước 1: Đăng nhập Zalo Web**
   - Truy cập và đăng nhập vào Zalo Web (https://chat.zalo.me)
   - Đảm bảo đã đăng nhập thành công

2. **Bước 2: Kích hoạt extension**
   - Nhấn vào biểu tượng ZaloDataExtractor-Hook trên thanh extension
   - Chờ Pop-up hiển thị đầy đủ thông tin (IMEI, Cookies, User-Agent)

3. **Bước 3: Đăng ký dùng thử**
   - Điền số điện thoại vào ô "Phone"
   - Nhấn nút "Request Trial" để gửi yêu cầu dùng thử

## Xử lý sự cố

Nếu bạn gặp vấn đề khi sử dụng extension:
- Đảm bảo đã đăng nhập Zalo Web thành công
- Thử làm mới trang bằng nút "Refresh Page"
- Kiểm tra kết nối internet
- Nếu vẫn gặp lỗi, vui lòng [tạo issue](https://github.com/JustKemForFun/ZaloDataExtractor-Hook/issues)

## Contributors

Chúng tôi luôn chào đón sự đóng góp từ cộng đồng.

| Tên               | GitHub Profile                              | Avatar                                 |
|--------------------|---------------------------------------------|----------------------------------------|
|     Hoàng Hào      | [Kem](https://www.github.com/JustKemForFun) | <img src="https://avatars.githubusercontent.com/u/136668112" alt="Hoàng Hào" width="50" height="50" /> |

## License

Dự án này được cấp phép theo giấy phép MIT - xem file [LICENSE](LICENSE) để biết thêm chi tiết.