# Dự án kết thúc môn - Bloom Beauty

Đây là website bán mỹ phẩm và chăm sóc da được xây dựng bằng HTML, CSS và JavaScript thuần. Dự án có cấu trúc rõ ràng, dễ mở rộng và phù hợp để nộp bài kết thúc môn thiết kế web.

## 1. Cấu trúc thư mục

```text
.
├── assets/
│   └── thesis/
│       └── template_thesis.dotx
├── css/
│   └── style.css
├── html/
│   ├── chi-tiet.html
│   ├── gio-hang.html
│   ├── gioi-thieu.html
│   ├── lien-he.html
│   ├── san-pham.html
│   ├── tai-khoan.html
│   ├── thanh-toan.html
│   └── yeu-thich.html
├── js/
│   └── script.js
├── index.html
└── README.md
```

## 2. Vai trò của từng thư mục

- `assets/`: Lưu hình ảnh, tài liệu và mẫu báo cáo.
- `css/`: Chứa file định dạng giao diện chính của website.
- `html/`: Chứa các trang con như sản phẩm, giỏ hàng, thanh toán, liên hệ.
- `js/`: Chứa logic tương tác như lọc sản phẩm, giỏ hàng, yêu thích, xem nhanh.
- `index.html`: Trang chủ của website.
- `README.md`: Tài liệu mô tả dự án.

## 3. Chức năng chính

- Hiển thị danh mục, sản phẩm nổi bật, sản phẩm mới và flash sale.
- Lọc sản phẩm theo từ khóa, danh mục, thương hiệu, loại da và giá.
- Sắp xếp sản phẩm theo độ phổ biến, ngày mới, giá tăng hoặc giá giảm.
- Xem nhanh sản phẩm bằng modal.
- Thêm sản phẩm vào giỏ hàng.
- Thêm sản phẩm vào danh sách yêu thích.
- Áp dụng voucher mẫu `BLOOM10`.
- Chuyển đổi giao diện sáng/tối.
- Gửi form liên hệ, đăng nhập mẫu và thanh toán mẫu.

## 4. Ghi chú bảo trì

- Dữ liệu sản phẩm đang được khai báo trong `js/script.js`.
- Giao diện chính nằm trong `css/style.css` và đã được chia theo từng khu vực rõ ràng.
- Các trang HTML dùng chung header, footer, thư viện font, icon và file JavaScript.
- Khi thêm sản phẩm mới, chỉ cần thêm object mới vào mảng `products` trong file JavaScript.
- Khi đổi thông tin cửa hàng, nên cập nhật đồng bộ ở footer các trang.

## 5. Triển khai GitHub Pages

1. Đẩy toàn bộ mã nguồn lên GitHub.
2. Vào phần Settings của repository.
3. Mở mục Pages.
4. Chọn nhánh `main` và thư mục gốc.
5. Lưu cấu hình và chờ GitHub tạo liên kết website.

Liên kết GitHub Pages thường có dạng:

```text
https://<ten-tai-khoan>.github.io/<ten-repository>/
```

## 6. Thông tin sinh viên

```text
Họ và tên: Đinh Thị Mỹ Quyên
Mã số sinh viên: 110125141
Lớp: DA25TTA
Tên đề tài: Thiết kế website bán mỹ phẩm Bloom Beauty
Liên kết GitHub repository:https://github.com/TKW-22526/final-test-web-design-dinhthimyquyen950-stack.git
Liên kết GitHub Pages:https://tkw-22526.github.io/final-test-web-design-dinhthimyquyen950-stack/
```
