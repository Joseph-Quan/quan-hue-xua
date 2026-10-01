import React, { useMemo } from 'react';
import { dinhDangGia } from '../utils/dinhDangGia';

/**
 * Thành phần hiển thị giỏ hàng
 * @param {Object} props
 * @param {Array} props.gio - Danh sách { id, soLuong }
 * @param {Array} props.dsMon - Danh sách tất cả món ăn
 */
export default function GioHang({ gio = [], dsMon = [] }) {
  // C3.1: Tính danh sách dòng hàng và tổng tiền bằng useMemo, chỉ tính lại khi gio hoặc dsMon đổi
  const { dongHangList, tongTien } = useMemo(() => {
    const danhSach = gio.map((item) => {
      const mon = dsMon.find((m) => m.id === item.id);
      const ten = mon ? (mon.ten || mon.name) : `Món #${item.id}`;
      const donGia = mon ? (mon.gia ?? mon.price ?? 0) : 0;
      const thanhTien = donGia * item.soLuong;
      return {
        id: item.id,
        ten,
        soLuong: item.soLuong,
        thanhTien,
      };
    });

    const tong = danhSach.reduce((sum, item) => sum + item.thanhTien, 0);

    return {
      dongHangList: danhSach,
      tongTien: tong,
    };
  }, [gio, dsMon]);

  return (
    // Quy ước bắt buộc: Vùng ngoài cùng có data-testid="gio-hang"
    <div className="gio-hang-container" data-testid="gio-hang">
      {/* C3.1: Khi giỏ rỗng hiện "Giỏ hàng trống" thay cho danh sách */}
      {gio.length === 0 ? (
        <p className="gio-hang-trong">Giỏ hàng trống</p>
      ) : (
        <>
          {/* Quy ước bắt buộc: Mỗi dòng là một <li> dạng "Tên × số lượng — thành tiền" */}
          <ul className="gio-hang-danh-sach">
            {dongHangList.map((dong) => (
              <li key={dong.id} className="gio-hang-dong">
                <span className="dong-ten">{dong.ten}</span>
                <span className="dong-chi-tiet">
                  {' × '}
                  {dong.soLuong}
                  {' — '}
                  {dinhDangGia(dong.thanhTien)}
                </span>
              </li>
            ))}
          </ul>

          <div className="gio-hang-tong">
            <span className="tong-nhan">Tổng cộng:</span>
            {/* Quy ước bắt buộc: Tổng tiền trong thẻ data-testid="tong-tien" */}
            <span className="tong-gia-tri" data-testid="tong-tien">
              {dinhDangGia(tongTien)}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
