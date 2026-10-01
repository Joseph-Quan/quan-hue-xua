import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import DanhSachMon from './components/DanhSachMon';
import GioHang from './components/GioHang';
import Khung from './components/Khung';
import FormDatMon from './components/FormDatMon';
import useLocalStorage from './hooks/useLocalStorage';
import { dsMon } from './data/menuData';

const namHienTai = new Date().getFullYear();

export default function App() {
  // C1.1: Đọc tên quán từ biến môi trường
  const tenQuan = import.meta.env.VITE_TEN_QUAN || 'Quán Huế Xưa';

  // C3.3: Sử dụng useLocalStorage cho giỏ hàng với khóa "gio-hang"
  const [gio, setGio] = useLocalStorage('gio-hang', []);

  // C2.4: State lưu id món đang chọn
  const [idDangChon, setIdDangChon] = useState(null);

  // C4.3: State hiển thị thông báo thành công và đặt lại form bằng key
  const [thongBao, setThongBao] = useState('');
  const [formKey, setFormKey] = useState(0);

  // C2.3: Tính tongPhan trực tiếp từ gio, KHÔNG tạo state riêng
  const tongPhan = gio.reduce((tong, item) => tong + item.soLuong, 0);

  // C3.2: Đồng bộ tiêu đề tab trình duyệt bằng useEffect
  useEffect(() => {
    if (tongPhan === 0) {
      document.title = tenQuan;
    } else {
      document.title = `(${tongPhan}) ${tenQuan}`;
    }
  }, [tongPhan, tenQuan]);

  // C2.2: Hàm đặt món, cập nhật mảng bất biến
  const handleDatMon = (id) => {
    setGio((prevGio) => {
      const monDaCo = prevGio.find((item) => item.id === id);
      if (monDaCo) {
        return prevGio.map((item) =>
          item.id === id ? { ...item, soLuong: item.soLuong + 1 } : item
        );
      }
      return [...prevGio, { id, soLuong: 1 }];
    });
  };

  // C2.4: Hàm chọn thẻ món
  const handleChonMon = (id) => {
    setIdDangChon(id);
  };

  // C4.2: Hàm làm rỗng giỏ hàng
  const handleXoaGioHang = () => {
    setGio([]);
  };

  // C4.3: Hàm gửi đơn hàng
  const handleGuiDon = (thongTinNhanMon) => {
    // Thông báo đúng định dạng: "Đã nhận đơn của <Họ tên>"
    setThongBao(`Đã nhận đơn của ${thongTinNhanMon.hoTen}`);
    // Làm rỗng giỏ
    setGio([]);
    // Đặt lại form bằng cách thay đổi key của FormDatMon
    setFormKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="app-layout">
      {/* C1.1 & C2.3: Header hiển thị tên quán và tongPhan */}
      <Header tongPhan={tongPhan} />

      <main className="app-main-content">
        <div className="app-container">
          {/* Thông báo gửi đơn thành công nếu có */}
          {thongBao && (
            <div className="thong-bao-wrapper">
              <p className="thong-bao-thanh-cong" role="status">
                🎉 {thongBao}
              </p>
            </div>
          )}

          <div className="app-grid-layout">
            {/* Cột trái: Danh sách thực đơn 8 món */}
            <div className="app-menu-column">
              <Khung tieuDe="Thực đơn xứ Huế">
                <DanhSachMon
                  dsMon={dsMon}
                  idDangChon={idDangChon}
                  onChon={handleChonMon}
                  onDat={handleDatMon}
                />
              </Khung>
            </div>

            {/* Cột phải: Giỏ hàng & Thông tin nhận món */}
            <aside className="app-side-column">
              {/* C4.2 & Quy ước bắt buộc: Khối "Giỏ hàng" có tiêu đề h2 đúng chữ "Giỏ hàng" và nút đúng chữ "Xóa giỏ hàng" */}
              <Khung
                tieuDe="Giỏ hàng"
                hanhDong={
                  <button
                    type="button"
                    className="btn-xoa-gio"
                    onClick={handleXoaGioHang}
                    title="Xóa toàn bộ món trong giỏ hàng"
                  >
                    Xóa giỏ hàng
                  </button>
                }
              >
                <GioHang gio={gio} dsMon={dsMon} />
              </Khung>

              {/* C4.1, C4.3: Thông tin nhận món */}
              <Khung tieuDe="Thông tin nhận món">
                <FormDatMon
                  key={formKey}
                  onGui={handleGuiDon}
                  choPhepGui={gio.length > 0}
                />
              </Khung>
            </aside>
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <div className="app-container footer-content">
          <p>© {namHienTai} Quán Huế Xưa · Tinh hoa ẩm thực cố đô Huế</p>
          <p className="footer-sub">INT.7.18 – Web FrontEnd nâng cao · Đề kiểm tra giữa kỳ</p>
        </div>
      </footer>
    </div>
  );
}