import { useState, useEffect } from 'react';

/**
 * Hook tùy biến lưu trữ dữ liệu vào localStorage
 * @param {string} khoa - Khóa lưu trữ trong localStorage
 * @param {any} giaTriDau - Giá trị khởi tạo mặc định nếu chưa có
 * @returns {[any, Function]} [giaTri, setGiaTri]
 */
export default function useLocalStorage(khoa, giaTriDau) {
  // C3.3: Khởi tạo lười (lazy initialization) để chỉ đọc localStorage ở lần kết xuất đầu
  const [giaTri, setGiaTri] = useState(() => {
    try {
      const duLieuLuu = localStorage.getItem(khoa);
      if (duLieuLuu !== null) {
        return JSON.parse(duLieuLuu);
      }
      return giaTriDau;
    } catch (error) {
      // Dữ liệu hỏng thì dùng giaTriDau chứ không để ứng dụng sập
      console.warn(`Lỗi phân tích localStorage cho khóa "${khoa}":`, error);
      return giaTriDau;
    }
  });

  // Mỗi khi khoa hoặc giaTri thay đổi thì đồng bộ ghi lại vào localStorage
  useEffect(() => {
    try {
      localStorage.setItem(khoa, JSON.stringify(giaTri));
    } catch (error) {
      console.error(`Không thể ghi vào localStorage cho khóa "${khoa}":`, error);
    }
  }, [khoa, giaTri]);

  return [giaTri, setGiaTri];
}
