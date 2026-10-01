# Quán Huế Xưa — Ứng dụng đặt món

## Thông tin sinh viên

| Trường | Thông tin |
|--------|-----------|
| Họ và tên | Phạm Văn Quân |
| Mã số sinh viên | 2401ITA023 |
| Lớp / Số máy | *(điền số máy)* |
| Môn học | INT.7.18 – Web FrontEnd nâng cao |
| Mã đề | 01 |

---

## Tự đánh giá

| Câu | Nội dung | Điểm tối đa | Tự chấm |
|-----|----------|-------------|---------|
| C1.1 | Tạo `.env`, Header đọc `VITE_TEN_QUAN` | 0,5 | 0,5 |
| C1.2 | `MonAnCard`: mô tả, giá, nhãn "Hết món" | 0,5 | 0,5 |
| C1.3 | `DanhSachMon`: render 8 món bằng `.map()` | 0,5 | 0,5 |
| C2.1 | Nút "Đặt món", vô hiệu khi hết | 0,5 | 0,5 |
| C2.2 | State `gio`, hàm `datMon`, cập nhật bất biến | 1,0 | 1,0 |
| C2.3 | `tongPhan` tính trực tiếp, hiển thị ở Header | 0,5 | 0,5 |
| C2.4 | Chọn thẻ (class "dang-chon"), chặn nổi bọt | 0,5 | 0,5 |
| C3.1 | `useMemo` tính `tongTien`, "Giỏ hàng trống" | 0,75 | 0,75 |
| C3.2 | `useEffect` cập nhật `document.title` | 0,5 | 0,5 |
| C3.3 | Hook `useLocalStorage` + lưu giỏ `"gio-hang"` | 0,75 | 0,75 |
| C3.4 | `useRef` + `useEffect` tự focus ô Họ tên | 0,5 | 0,5 |
| C4.1 | Biểu mẫu kiểm soát, validate onBlur/onSubmit | 1,25 | 1,25 |
| C4.2 | `Khung.jsx` nhận prop `hanhDong`, nút "Xóa giỏ hàng" | 0,5 | 0,5 |
| C4.3 | Nút "Gửi đơn" có điều kiện, thông báo, reset form | 0,75 | 0,75 |
| **Tổng** | | **9,0** | **9,0** |

---

## Khai báo sử dụng AI

Không

---

## Hướng dẫn chạy

```bash
npm install
npm run dev
# Mở http://localhost:5173
```

---

## Cấu trúc thư mục

```
src/
├── components/
│   ├── Header.jsx        # C1.1, C2.3
│   ├── MonAnCard.jsx     # C1.2, C2.1, C2.4
│   ├── DanhSachMon.jsx   # C1.3
│   ├── GioHang.jsx       # C3.1
│   ├── Khung.jsx         # C4.2
│   └── FormDatMon.jsx    # C3.4, C4.1, C4.3
├── hooks/
│   └── useLocalStorage.js  # C3.3
├── utils/
│   └── dinhDangGia.js
├── data/
│   └── menuData.js
└── App.jsx               # C2.2–C2.4, C3.2–C3.3, C4.2–C4.3
```
