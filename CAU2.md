# Câu 2 — State, Sự kiện, Nâng trạng thái

**Môn:** INT.7.18 – Web FrontEnd nâng cao | **Sinh viên:** Phạm Văn Quân (2401ITA023)

---

## Nội dung thực hiện (Câu 2 — 2,5 điểm)

### C2.1 — Nút "Đặt món" trong MonAnCard
- Thêm nút `"Đặt món"` vào mỗi thẻ món
- Nút bị **vô hiệu hóa** (`disabled`) khi `daHet = true`
- Bấm nút → gọi `onDat(mon.id)`

### C2.2 — State `gio` và hàm `datMon` trong App
- Tạo state `gio` là mảng `[{ id, soLuong }]`
- Hàm `handleDatMon(id)`:
  - Món chưa có → thêm `{ id, soLuong: 1 }`
  - Đã có → tăng `soLuong` thêm 1 (không thêm dòng mới)
- Cập nhật **bất biến**, không sửa trực tiếp mảng cũ

### C2.3 — Tổng phần hiển thị ở Header
- Tính `tongPhan` **trực tiếp** từ `gio` (`gio.reduce(...)`)
- **KHÔNG** tạo state riêng
- Truyền vào `<Header tongPhan={tongPhan} />`
- Hiển thị trong `<span data-testid="tong-phan">`

### C2.4 — Chọn thẻ món (dang-chon)
- Bấm vào thẻ → thẻ đó được chọn, thêm class `"dang-chon"`
- State `idDangChon` lưu ở `App`
- Bấm nút **"Đặt món"** bên trong thẻ **KHÔNG** làm đổi món đang chọn (chặn nổi bọt bằng `e.stopPropagation()`)

---

## Kết quả mong đợi
- Bấm "Đặt món" Bún bò Huế 2 lần, Bánh bèo 1 lần:
  - Header: Giỏ: **[3]** phần
  - Giỏ hàng: `"Bún bò Huế × 2 — 90.000 đ"` và `"Bánh bèo × 1 — 30.000 đ"`
- Bấm vào thẻ Bánh bèo → thẻ có **viền xanh**
- Bấm "Đặt món" ở Nem lụi → **viền xanh vẫn ở Bánh bèo**

---

## File liên quan
| File | Vai trò |
|------|---------|
| `src/App.jsx` | State `gio`, `idDangChon`, hàm `handleDatMon`, `handleChonMon` |
| `src/components/Header.jsx` | Hiển thị `tongPhan` với `data-testid="tong-phan"` |
| `src/components/MonAnCard.jsx` | Nút "Đặt món", `e.stopPropagation()`, class `"dang-chon"` |
| `src/components/DanhSachMon.jsx` | Truyền props `onChon`, `onDat` |
