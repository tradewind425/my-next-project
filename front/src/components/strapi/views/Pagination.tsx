// src/components/strapi/views/Pagination.tsx
import React from 'react';

// ページネーションのプロパティの型定義
interface PaginationProps {
  currentPage: number; // 現在のページ番号
  totalPages: number;  // 総ページ数
  setCurrentPage: (page: number) => void; // ページ番号を設定する関数
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className="flex mt-8 justify-center space-x-2">
      {/* "前のページ"ボタン。最初のページ以外で表示 */}
      {currentPage > 1 && (
        <button
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          前のページ
        </button>
      )}
      {/* 各ページ番号ボタン。選択されているページは色が異なる */}
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={`px-3 py-1 rounded ${i + 1 === currentPage ? 'bg-green-700 text-white' : 'bg-green-300 text-green-900'} hover:bg-green-600`}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      {/* "次のページ"ボタン。最後のページ以外で表示 */}
      {currentPage < totalPages && (
        <button
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          次のページ
        </button>
      )}
    </div>
  );
};

export default Pagination;
