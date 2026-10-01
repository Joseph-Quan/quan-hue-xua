import React from 'react';
import MonAnCard from './MonAnCard';

/**
 * Danh sách hiển thị các món ăn
 * @param {Object} props
 * @param {Array} props.dsMon - Danh sách các món ăn
 * @param {number|string|null} props.idDangChon - ID món đang chọn
 * @param {Function} props.onChon - Hàm callback khi chọn món
 * @param {Function} props.onDat - Hàm callback khi đặt món
 */
export default function DanhSachMon({ dsMon = [], idDangChon, onChon, onDat }) {
  return (
    <div className="danh-sach-mon-grid">
      {/* C1.3: Kết xuất các món bằng .map(), dùng key id của món, truyền đủ props */}
      {dsMon.map((mon) => (
        <MonAnCard
          key={mon.id}
          mon={mon}
          dangChon={mon.id === idDangChon}
          onChon={() => onChon && onChon(mon.id)}
          onDat={onDat}
        />
      ))}
    </div>
  );
}
