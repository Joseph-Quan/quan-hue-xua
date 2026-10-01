import React from 'react';

/**
 * Thành phần Header hiển thị tên quán và số lượng phần ăn trong giỏ
 * @param {Object} props
 * @param {number} props.tongPhan - Tổng số lượng phần trong giỏ hàng
 */
export default function Header({ tongPhan = 0 }) {
  // C1.1: Đọc tên quán từ biến môi trường qua import.meta.env, không viết cứng trong mã
  const tenQuan = import.meta.env.VITE_TEN_QUAN || 'Quán Huế Xưa';

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-brand">
          <span className="brand-badge">Ẩm thực Cố Đô</span>
          {/* C1.1 & Quy ước bắt buộc: Tên quán nằm trong thẻ <h1> */}
          <h1 className="header-title">{tenQuan}</h1>
          <p className="header-subtitle">Tinh hoa hương vị Cố Đô Huế tại bàn của bạn</p>
        </div>

        <div className="header-cart-info">
          <div className="cart-badge-container">
            <span className="cart-icon">🛒</span>
            <span className="cart-text">
              Giỏ:{' '}
              {/* C2.3 & Quy ước bắt buộc: Số phần trong giỏ nằm trong thẻ có data-testid="tong-phan" */}
              <span className="cart-count-box" data-testid="tong-phan">
                {tongPhan}
              </span>{' '}
              phần
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}