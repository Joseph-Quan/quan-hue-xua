import React from 'react';
import { dinhDangGia } from '../utils/dinhDangGia';

/**
 * Thẻ hiển thị thông tin từng món ăn
 * @param {Object} props
 * @param {Object} props.mon - Thông tin món ăn
 * @param {boolean} props.dangChon - Trạng thái thẻ đang được chọn
 * @param {Function} props.onChon - Hàm xử lý khi bấm vào thẻ
 * @param {Function} props.onDat - Hàm xử lý khi bấm nút Đặt món
 */
export default function MonAnCard({ mon, dangChon, onChon, onDat }) {
  const tenMon = mon.ten || mon.name;
  const giaMon = mon.gia ?? mon.price ?? 0;
  const moTa = mon.moTa || mon.description;
  const daHet = Boolean(mon.daHet);
  const hinhAnh = mon.hinhAnh || mon.image;

  // C2.4: Bấm nút Đặt món không làm đổi món đang chọn (chặn nổi bọt)
  const handleDatMon = (e) => {
    e.stopPropagation();
    if (!daHet && onDat) {
      onDat(mon.id);
    }
  };

  return (
    // Quy ước bắt buộc & C2.4: Mỗi món là một <article>, thẻ đang chọn có thêm class "dang-chon"
    <article
      className={`mon-an-card ${dangChon ? 'dang-chon' : ''} ${daHet ? 'mon-da-het' : ''}`}
      onClick={onChon}
    >
      <div className="mon-an-img-wrapper">
        <img
          src={hinhAnh}
          alt={tenMon}
          className="mon-an-img"
          loading="lazy"
        />
        {/* C1.2 & Quy ước bắt buộc: nếu món đã hết hiện nhãn "Hết món" trong <span className="het-mon"> */}
        {daHet && <span className="het-mon">Hết món</span>}
      </div>

      <div className="mon-an-body">
        {/* Quy ước bắt buộc: <h3> chứa tên món */}
        <h3 className="mon-an-ten">{tenMon}</h3>

        {/* C1.2: Hiển thị mô tả món */}
        <p className="mon-an-mota">{moTa}</p>

        <div className="mon-an-footer">
          {/* C1.2: Hiển thị giá bằng hàm dinhDangGia có sẵn */}
          <span className="mon-an-gia">{dinhDangGia(giaMon)}</span>

          {/* C2.1: Thêm nút "Đặt món", vô hiệu hóa khi daHet, bấm nút gọi onDat(mon.id) */}
          <button
            type="button"
            className="btn-dat-mon"
            disabled={daHet}
            onClick={handleDatMon}
          >
            Đặt món
          </button>
        </div>
      </div>
    </article>
  );
}
