# Câu 3 — Hook (useMemo, useEffect, useRef, hook tùy biến)

**Môn:** INT.7.18 – Web FrontEnd nâng cao | **Sinh viên:** Phạm Văn Quân (2401ITA023)

---

## Nội dung thực hiện (Câu 3 — 2,5 điểm)

### C3.1 — useMemo tính tổng tiền trong GioHang
- Trong `GioHang.jsx`: tính `tongTien` bằng **`useMemo`**
- Chỉ tính lại khi `gio` hoặc `dsMon` thay đổi
- Khi giỏ rỗng: hiển thị đúng chữ **`"Giỏ hàng trống"`**
- Mỗi dòng là `<li>` dạng: `"Tên × số lượng — thành tiền"`
- Tổng tiền nằm trong `<span data-testid="tong-tien">`

### C3.2 — useEffect đồng bộ tiêu đề tab
- Trong `App.jsx`: dùng **`useEffect`** cập nhật `document.title`
- Giỏ rỗng → title = tên quán
- Có hàng → title = `"(n) Tên quán"` với n là tổng số phần

### C3.3 — Hook useLocalStorage (hook tùy biến)
- Viết hook `useLocalStorage(khoa, giaTriDau)` trong `hooks/useLocalStorage.js`
- Trả về `[giaTri, setGiaTri]` như `useState`
- **Khởi tạo lười**: đọc `localStorage` chỉ ở lần đầu
- Dữ liệu hỏng → dùng `giaTriDau` (bắt lỗi `JSON.parse`)
- Mỗi khi `giaTri` đổi → ghi lại vào `localStorage`
- `setGiaTri` vẫn nhận được hàm cập nhật
- Đổi state `gio` ở App sang `useLocalStorage("gio-hang", [])`

### C3.4 — useRef + useEffect để tự focus ô Họ tên
- Trong `FormDatMon.jsx`: dùng `useRef` tham chiếu ô nhập
- Dùng `useEffect(() => { ref.current.focus(); }, [])` để tự focus khi form hiện

---

## Kết quả mong đợi
- Đặt 3 phần → tab trình duyệt: **`"(3) Quán Huế Xưa"`**
- Xóa giỏ → tab về **`"Quán Huế Xưa"`**
- Đặt món → bấm **F5**: giỏ hàng **vẫn còn** (nhờ localStorage)
- Vừa mở trang: **con trỏ nhấp nháy** ở ô Họ tên

---

## File liên quan
| File | Vai trò |
|------|---------|
| `src/hooks/useLocalStorage.js` | Hook tùy biến lưu localStorage |
| `src/components/GioHang.jsx` | `useMemo` tổng tiền, "Giỏ hàng trống" |
| `src/components/FormDatMon.jsx` | `useRef` + `useEffect` tự focus |
| `src/App.jsx` | `useEffect` đồng bộ `document.title`, dùng `useLocalStorage` |
