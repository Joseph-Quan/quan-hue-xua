# Câu 1 — Biến môi trường, Component, Danh sách

**Môn:** INT.7.18 – Web FrontEnd nâng cao | **Sinh viên:** Phạm Văn Quân (2401ITA023)

---

## Nội dung thực hiện (Câu 1 — 1,5 điểm)

### C1.1 — Header đọc tên quán từ `.env`
- Tạo file `.env` với `VITE_TEN_QUAN=Quán Huế Xưa`
- `Header.jsx` đọc giá trị qua `import.meta.env.VITE_TEN_QUAN` và hiển thị trong thẻ `<h1>`
- **Không viết cứng** tên quán trong mã nguồn

### C1.2 — MonAnCard hiển thị đầy đủ thông tin
- Hiển thị **mô tả món** (`moTa`)
- Hiển thị **giá** qua hàm `dinhDangGia()` → dạng `"45.000 đ"`
- Nếu `daHet = true`: hiển thị nhãn `"Hết món"` trong `<span className="het-mon">`

### C1.3 — DanhSachMon render 8 món bằng `.map()`
- Kết xuất tất cả 8 món từ `dsMon` bằng `.map()`
- Dùng `key={mon.id}` hợp lệ
- Truyền đủ props: `mon`, `dangChon`, `onChon`, `onDat`

---

## Kết quả mong đợi
- Tiêu đề trang: **"Quán Huế Xưa"** (đọc từ `.env`)
- Hiển thị **8 thẻ món**
- Thẻ **"Bánh bột lọc"** và **"Chè bắp"** có nhãn đỏ **"Hết món"**
- Mỗi thẻ có giá dạng `"45.000 đ"` và mô tả

---

## File liên quan
| File | Vai trò |
|------|---------|
| `.env` | Khai báo `VITE_TEN_QUAN` |
| `src/components/Header.jsx` | Đọc biến môi trường, hiển thị `<h1>` |
| `src/components/MonAnCard.jsx` | Hiển thị thẻ món với đầy đủ thông tin |
| `src/components/DanhSachMon.jsx` | Render danh sách món bằng `.map()` |
| `src/utils/dinhDangGia.js` | Hàm định dạng giá tiền |
| `src/data/menuData.js` | Dữ liệu 8 món ăn |
