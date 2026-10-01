# Câu 4 — Biểu mẫu và thành phần kết hợp

**Môn:** INT.7.18 – Web FrontEnd nâng cao | **Sinh viên:** Phạm Văn Quân (2401ITA023)

---

## Nội dung thực hiện (Câu 4 — 2,5 điểm)

### C4.1 — FormDatMon biểu mẫu có kiểm soát (1,25 điểm)
- State kiểm soát: `hoTen`, `soDienThoai`, `ghiChu`, `loi`
- Dùng chung một hàm `handleChange` nhờ `e.target.name` và `e.target.value`
- **Kiểm tra khi rời ô** (`onBlur`): validate từng trường
- **Kiểm tra khi gửi** (`onSubmit`): validate tất cả trước khi gọi `onGui`
- Lỗi hiển thị trong `<p className="loi" role="alert">`
- Gửi khi còn lỗi: chặn `e.preventDefault()` và **KHÔNG** gọi `onGui`
- Gửi hợp lệ: gọi `onGui({ hoTen, soDienThoai, ghiChu })` với `.trim()`

**Quy tắc validate:**
| Trường | Điều kiện lỗi | Thông báo |
|--------|--------------|-----------|
| Họ tên | Ít hơn 2 ký tự | `"Họ tên cần ít nhất 2 ký tự"` |
| Số điện thoại | Không khớp `/^0\d{9}$/` | `"Số điện thoại gồm 10 chữ số, bắt đầu bằng 0"` |

### C4.2 — Khung.jsx nhận prop `hanhDong` + nút "Xóa giỏ hàng"
- `Khung.jsx` nhận thêm prop `hanhDong` (đoạn JSX)
- Hiển thị `hanhDong` cạnh tiêu đề `<h2>`
- Trong `App.jsx`: truyền vào khối "Giỏ hàng" nút **"Xóa giỏ hàng"** để làm rỗng giỏ

### C4.3 — Gửi đơn, thông báo, reset form bằng key (0,75 điểm)
- Nút **"Gửi đơn"** chỉ bấm được khi `choPhepGui = true`
- `App` truyền `choPhepGui = gio.length > 0`
- `handleGuiDon` trong App:
  1. Hiển thị `"Đã nhận đơn của <Họ tên>"` trong `<p role="status">`
  2. Làm rỗng giỏ (`setGio([])`)
  3. Đặt lại form bằng cách **đổi `key`** của `FormDatMon`

---

## Kết quả mong đợi
- Bấm "Gửi đơn" khi ô trống → **hai dòng lỗi đỏ**; `onGui` không được gọi
- Gõ `"A"` vào Họ tên → bấm sang ô khác → **lỗi hiện ngay** (chưa cần gửi)
- Giỏ có món + điền hợp lệ + Gửi đơn → `"Đã nhận đơn của Minh Anh"`; giỏ về 0; form trống
- Bấm "Xóa giỏ hàng" → giỏ về trống, Header về 0

---

## File liên quan
| File | Vai trò |
|------|---------|
| `src/components/FormDatMon.jsx` | Biểu mẫu kiểm soát, validate, `useRef` focus |
| `src/components/Khung.jsx` | Prop `hanhDong` cạnh tiêu đề |
| `src/App.jsx` | `handleGuiDon`, `choPhepGui`, `formKey`, `handleXoaGioHang` |
