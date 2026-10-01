import React from 'react';

/**
 * Thành phần Khung (Container/Card) có tiêu đề và khe hành động
 * @param {Object} props
 * @param {string} props.tieuDe - Tiêu đề khối
 * @param {React.ReactNode} [props.hanhDong] - Hành động cạnh tiêu đề (ví dụ: nút bấm)
 * @param {React.ReactNode} props.children - Nội dung bên trong
 */
export default function Khung({ tieuDe, hanhDong, children }) {
  return (
    <section className="khung-card">
      <div className="khung-header">
        {/* Quy ước bắt buộc: Tiêu đề là thẻ <h2> */}
        <h2 className="khung-tieu-de">{tieuDe}</h2>
        {/* C4.2: nhận thêm prop hanhDong (đoạn JSX) và hiển thị cạnh tiêu đề */}
        {hanhDong && <div className="khung-hanh-dong">{hanhDong}</div>}
      </div>
      <div className="khung-noi-dung">{children}</div>
    </section>
  );
}
