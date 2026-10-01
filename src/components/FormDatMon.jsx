import React, { useState, useRef, useEffect } from 'react';

/**
 * Biểu mẫu thông tin nhận món có kiểm chứng
 * @param {Object} props
 * @param {Function} props.onGui - Hàm gọi khi gửi đơn hợp lệ
 * @param {boolean} props.choPhepGui - Trạng thái cho phép bấm nút gửi đơn
 */
export default function FormDatMon({ onGui, choPhepGui = false }) {
  // C4.1: State kiểm soát biểu mẫu
  const [hoTen, setHoTen] = useState('');
  const [soDienThoai, setSoDienThoai] = useState('');
  const [ghiChu, setGhiChu] = useState('');
  const [loi, setLoi] = useState({});

  // C3.4: useRef và useEffect để ô "Họ tên" tự có con trỏ mỗi khi form vừa hiện
  const hoTenInputRef = useRef(null);

  useEffect(() => {
    if (hoTenInputRef.current) {
      hoTenInputRef.current.focus();
    }
  }, []);

  // C4.1: Hàm kiểm tra tính hợp lệ của từng trường
  const kiemTra = (tenTruong, giaTri) => {
    const val = (giaTri ?? '').trim();

    if (tenTruong === 'hoTen') {
      // Họ tên cần ít nhất 2 ký tự
      if (val.length < 2) {
        return 'Họ tên cần ít nhất 2 ký tự';
      }
    }

    if (tenTruong === 'soDienThoai') {
      // Số điện thoại gồm 10 chữ số, bắt đầu bằng 0
      const sdtHopLe = /^0\d{9}$/.test(val);
      if (!sdtHopLe) {
        return 'Số điện thoại gồm 10 chữ số, bắt đầu bằng 0';
      }
    }

    return '';
  };

  // C4.1: Dùng chung một hàm xử lý thay đổi giá trị
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'hoTen') setHoTen(value);
    if (name === 'soDienThoai') setSoDienThoai(value);
    if (name === 'ghiChu') setGhiChu(value);

    // Nếu ô đó đang có lỗi và người dùng sửa hợp lệ thì xóa lỗi
    if (loi[name]) {
      const thongBaoLoi = kiemTra(name, value);
      if (!thongBaoLoi) {
        setLoi((prev) => {
          const capNhat = { ...prev };
          delete capNhat[name];
          return capNhat;
        });
      }
    }
  };

  // C4.1: Kiểm tra từng ô khi rời ô (onBlur)
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const thongBaoLoi = kiemTra(name, value);
    setLoi((prev) => ({
      ...prev,
      [name]: thongBaoLoi,
    }));
  };

  // C4.1: Kiểm tra cả hai ô khi gửi (onSubmit)
  const handleSubmit = (e) => {
    e.preventDefault();

    const loiHoTen = kiemTra('hoTen', hoTen);
    const loiSdt = kiemTra('soDienThoai', soDienThoai);

    const loiTongHop = {};
    if (loiHoTen) loiTongHop.hoTen = loiHoTen;
    if (loiSdt) loiTongHop.soDienThoai = loiSdt;

    setLoi(loiTongHop);

    // Gửi khi còn lỗi: chặn tải lại trang và KHÔNG gọi onGui
    if (loiHoTen || loiSdt) {
      return;
    }

    // Gửi hợp lệ: gọi onGui với giá trị đã cắt khoảng trắng hai đầu
    if (onGui) {
      onGui({
        hoTen: hoTen.trim(),
        soDienThoai: soDienThoai.trim(),
        ghiChu: ghiChu.trim(),
      });
    }
  };

  return (
    <form className="form-dat-mon" onSubmit={handleSubmit} noValidate>
      {/* Ô Họ tên */}
      <div className="form-group">
        <label htmlFor="hoTen" className="form-label">
          Họ tên <span className="bat-buoc">*</span>
        </label>
        <input
          id="hoTen"
          name="hoTen"
          type="text"
          ref={hoTenInputRef}
          value={hoTen}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input ${loi.hoTen ? 'input-loi' : ''}`}
          placeholder="Ví dụ: Minh Anh"
        />
        {/* Quy ước bắt buộc: Lỗi hiện dưới ô tương ứng trong <p className="loi" role="alert"> */}
        {loi.hoTen && (
          <p className="loi" role="alert">
            {loi.hoTen}
          </p>
        )}
      </div>

      {/* Ô Số điện thoại */}
      <div className="form-group">
        <label htmlFor="soDienThoai" className="form-label">
          Số điện thoại <span className="bat-buoc">*</span>
        </label>
        <input
          id="soDienThoai"
          name="soDienThoai"
          type="tel"
          value={soDienThoai}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input ${loi.soDienThoai ? 'input-loi' : ''}`}
          placeholder="Ví dụ: 0912345678"
        />
        {loi.soDienThoai && (
          <p className="loi" role="alert">
            {loi.soDienThoai}
          </p>
        )}
      </div>

      {/* Ô Ghi chú */}
      <div className="form-group">
        <label htmlFor="ghiChu" className="form-label">
          Ghi chú
        </label>
        <textarea
          id="ghiChu"
          name="ghiChu"
          rows={3}
          value={ghiChu}
          onChange={handleChange}
          className="form-input form-textarea"
          placeholder="Yêu cầu thêm (ít cay, không rau mùi, ...)"
        />
      </div>

      {/* C4.3 & Quy ước bắt buộc: Nút đúng chữ "Gửi đơn", chỉ bấm được khi choPhepGui = true */}
      <button
        type="submit"
        disabled={!choPhepGui}
        className="btn-gui-don"
      >
        Gửi đơn
      </button>
    </form>
  );
}
