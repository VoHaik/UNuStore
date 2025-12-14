# Mặt Trời Ú Nu - Website Bán Hàng Len Handmade

Website bán hàng đơn giản chuyên về sản phẩm len handmade, được xây dựng bằng HTML, CSS, JavaScript thuần.

## 📋 Mô tả dự án

Mặt Trời Ú Nu là website thương mại điện tử đơn giản chuyên cung cấp các sản phẩm len handmade như gấu bông, hoa len, móc khóa và set tự làm. Website được thiết kế với giao diện thân thiện, dễ sử dụng và có đầy đủ các chức năng cơ bản của một trang bán hàng.

## ✨ Tính năng chính

### 1. Trang chủ (index.html)
- Banner carousel hiển thị sản phẩm nổi bật
- Danh mục sản phẩm (4 loại: Gấu bông, Hoa len, Móc khóa, Set tự làm)
- Sản phẩm nổi bật
- Phần giới thiệu về shop
- Đánh giá từ khách hàng

### 2. Trang sản phẩm (products.html)
- Hiển thị tất cả sản phẩm theo danh mục
- Bộ lọc:
  - Lọc theo danh mục
  - Lọc theo khoảng giá
  - Sắp xếp (theo tên, giá)
- Hiển thị dạng lưới/danh sách

### 3. Trang chi tiết sản phẩm (product-detail.html)
- Hiển thị ảnh sản phẩm với thumbnail
- Thông tin chi tiết sản phẩm
- Chọn kích thước (với giá khác nhau)
- Tùy chọn đóng gói quà (+10.000đ)
- Chọn số lượng
- Tính tổng tiền tự động
- Thêm vào giỏ hàng / Mua ngay
- Tab thông tin: Mô tả, Chất liệu, Chính sách, Bảo quản
- Sản phẩm liên quan

### 4. Trang giỏ hàng (cart.html)
- Hiển thị danh sách sản phẩm trong giỏ
- Sửa số lượng sản phẩm
- Xóa sản phẩm khỏi giỏ
- Tính tổng tiền tự động
- Áp dụng mã giảm giá
- Tóm tắt đơn hàng
- Nút thanh toán

### 5. Trang thanh toán (checkout.html)
- Form nhập thông tin khách hàng:
  - Họ tên, số điện thoại, email
  - Địa chỉ giao hàng (tỉnh/thành, quận/huyện, phường/xã)
  - Ghi chú đơn hàng
- Chọn phương thức thanh toán:
  - COD (Thanh toán khi nhận hàng)
  - Chuyển khoản ngân hàng
  - Ví điện tử MoMo
- Hiển thị tóm tắt đơn hàng
- Xác nhận đặt hàng
- Thông báo thành công với mã đơn hàng

### 6. Trang thông tin
- **Giới thiệu (about.html)**: Câu chuyện, sứ mệnh, tầm nhìn, giá trị cốt lõi
- **Chính sách (policies.html)**: Đổi trả, bảo hành, hoàn tiền, vận chuyển, thanh toán, bảo mật
- **Hướng dẫn bảo quản (care-guide.html)**: Chi tiết cách bảo quản sản phẩm len

## 🛠️ Công nghệ sử dụng

- **HTML5**: Cấu trúc trang web
- **CSS3**: Styling và animations
- **JavaScript (Vanilla)**: Xử lý logic, không sử dụng framework
- **Bootstrap 5**: Framework CSS cho responsive design
- **Font Awesome**: Icons
- **LocalStorage**: Lưu trữ giỏ hàng và đơn hàng

## 📁 Cấu trúc thư mục

```
WebBanHangDonGian/
│
├── index.html              # Trang chủ
├── products.html           # Danh sách sản phẩm
├── product-detail.html     # Chi tiết sản phẩm
├── cart.html               # Giỏ hàng
├── checkout.html           # Thanh toán
├── about.html              # Giới thiệu
├── policies.html           # Chính sách
├── care-guide.html         # Hướng dẫn bảo quản
│
├── styles.css              # CSS tùy chỉnh
├── app.js                  # JavaScript chính
│
├── image_Product/          # Thư mục chứa ảnh sản phẩm
│   ├── gau/               # Ảnh gấu bông
│   ├── HoaLen/            # Ảnh hoa len
│   ├── MocKhoa/           # Ảnh móc khóa
│   └── TuLam/             # Ảnh set tự làm
│
└── README.md              # File này
```

## 🚀 Hướng dẫn sử dụng

### Cách 1: Mở trực tiếp bằng trình duyệt

1. Giải nén hoặc clone project
2. Mở file `index.html` bằng trình duyệt web (Chrome, Firefox, Edge, Safari...)
3. Bắt đầu duyệt website

### Cách 2: Sử dụng Live Server (Khuyến nghị)

1. Cài đặt VS Code
2. Cài extension "Live Server"
3. Click chuột phải vào `index.html` → "Open with Live Server"
4. Website sẽ tự động mở tại `http://localhost:5500`

### Cách 3: Deploy lên GitHub Pages (Miễn phí)

1. Tạo repository mới trên GitHub
2. Upload toàn bộ code lên repository
3. Vào Settings → Pages
4. Chọn branch `main` và folder `/ (root)`
5. Lưu và đợi vài phút
6. Truy cập website qua link GitHub Pages

## 📱 Responsive Design

Website được thiết kế responsive, hoạt động tốt trên:
- 💻 Desktop (1920px, 1366px, 1024px)
- 📱 Tablet (768px, 1024px)
- 📱 Mobile (375px, 414px, 768px)

## 🎨 Màu sắc chủ đạo

- **Primary**: #ff9eb5 (Hồng pastel)
- **Secondary**: #a5d6a7 (Xanh pastel)
- **Success**: #4caf50
- **Danger**: #f44336
- **Warning**: #ff9800
- **Info**: #2196f3

## 💾 Dữ liệu sản phẩm

Dữ liệu sản phẩm được lưu trữ trong file `app.js` dưới dạng mảng JavaScript. Bao gồm:

- **10 sản phẩm** được chia thành 4 danh mục
- Mỗi sản phẩm có:
  - ID, tên, mô tả
  - Danh mục
  - Giá và khoảng giá
  - Nhiều ảnh
  - Các kích thước với giá khác nhau
  - Trạng thái nổi bật

## 🛒 Chức năng giỏ hàng

- Sử dụng **LocalStorage** để lưu trữ
- Tự động cập nhật số lượng sản phẩm
- Tính toán tổng tiền tự động
- Hỗ trợ:
  - Thêm/xóa/sửa sản phẩm
  - Chọn size
  - Đóng gói quà
  - Mã giảm giá

## 💳 Mã giảm giá khả dụng

- `UNUNEW`: Giảm 10% cho khách hàng mới
- `UNU50K`: Giảm 50.000đ
- `FREESHIP`: Miễn phí vận chuyển

## 📝 Lưu ý

1. **Không có Backend**: Đây là website chỉ có Frontend, không kết nối với server thực
2. **Dữ liệu giả lập**: Tất cả dữ liệu đều là mô phỏng
3. **Thanh toán**: Chức năng thanh toán chỉ là demo, không kết nối thực tế
4. **Đơn hàng**: Đơn hàng được lưu trong LocalStorage của trình duyệt

## 🎓 Thông tin nhóm

**Lưu ý**: Vui lòng cập nhật thông tin thực tế của nhóm trong các file HTML (footer section):

- **Nhóm**: [Tên nhóm của bạn]
- **Thành viên**:
  - Nguyễn Văn A - 2021XXXX
  - Trần Thị B - 2021XXXX
  - Lê Văn C - 2021XXXX
- **Môn học**: [Tên môn học] - [Mã lớp]
- **Trường**: [Tên trường của bạn]

## 🔧 Tùy chỉnh

### Thay đổi màu sắc chủ đạo

Mở file `styles.css` và chỉnh sửa biến CSS:

```css
:root {
    --primary-color: #ff9eb5;    /* Màu chính */
    --secondary-color: #a5d6a7;  /* Màu phụ */
    /* ... */
}
```

### Thêm sản phẩm mới

Mở file `app.js` và thêm object vào mảng `products`:

```javascript
{
    id: 11,
    name: 'Tên sản phẩm',
    category: 'gau', // hoặc 'hoalen', 'mockhoa', 'tulam' (set tự làm)
    price: 100000,
    priceRange: '100.000đ - 200.000đ',
    description: 'Mô tả sản phẩm',
    image: 'đường/dẫn/ảnh.jpg',
    images: ['ảnh1.jpg', 'ảnh2.jpg'],
    sizes: [
        { name: 'Nhỏ', price: 100000 },
        { name: 'Vừa', price: 150000 },
        { name: 'Lớn', price: 200000 }
    ],
    featured: true // hoặc false
}
```

### Thêm/sửa thông tin footer

Tìm section `<footer>` trong các file HTML và chỉnh sửa nội dung.

## 🐛 Báo lỗi

Nếu phát hiện lỗi, vui lòng:
1. Kiểm tra Console trong Developer Tools (F12)
2. Đảm bảo đường dẫn ảnh chính xác
3. Xóa cache trình duyệt (Ctrl + Shift + Delete)
4. Thử trình duyệt khác

## 📞 Liên hệ

- **Email**: shopunu@example.com
- **Hotline**: 0123.456.789
- **Facebook**: fb.com/shopunu

## 📄 Giấy phép

Dự án này được tạo ra cho mục đích học tập, không sử dụng cho mục đích thương mại.

## 🎉 Tính năng nổi bật

- ✅ Giao diện đẹp mắt, hiện đại
- ✅ Responsive hoàn toàn
- ✅ Không cần cài đặt
- ✅ Không cần database
- ✅ Không cần server
- ✅ Dễ dàng tùy chỉnh
- ✅ Code sạch, dễ đọc
- ✅ Có đầy đủ chức năng cơ bản
- ✅ Hiệu ứng mượt mà
- ✅ SEO friendly

## 🚀 Phát triển thêm

Một số tính năng có thể mở rộng:

1. **Backend**: Kết nối với server Node.js/PHP
2. **Database**: Lưu trữ sản phẩm trong MySQL/MongoDB
3. **Authentication**: Đăng nhập/đăng ký người dùng
4. **Admin Panel**: Quản lý sản phẩm, đơn hàng
5. **Payment Gateway**: Tích hợp thanh toán thực (VNPay, Momo)
6. **Email**: Gửi email xác nhận đơn hàng
7. **Search**: Tìm kiếm sản phẩm nâng cao
8. **Reviews**: Đánh giá và bình luận sản phẩm
9. **Wishlist**: Danh sách yêu thích
10. **Chat**: Tích hợp chat với shop

---

**Chúc bạn thành công với dự án! 🎉**
