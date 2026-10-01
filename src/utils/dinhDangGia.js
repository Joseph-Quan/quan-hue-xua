/**
 * Hàm định dạng số tiền thành chuỗi tiền tệ Việt Nam (ví dụ: 45000 -> "45.000 đ")
 * @param {number} gia
 * @returns {string}
 */
export function dinhDangGia(gia) {
  if (typeof gia !== 'number' || isNaN(gia)) {
    return '0 đ';
  }
  return `${gia.toLocaleString('vi-VN')} đ`;
}

export default dinhDangGia;
