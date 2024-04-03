// src/components/strapi/views/Pagination.tsx
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, setCurrentPage }) => {
  // ページネーションコントロールの表示範囲を計算
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);

  return (
    <div className="flex mt-8 justify-center space-x-2">
      {/* 最初のページへ */}
      {currentPage > 1 && (
        <button
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => setCurrentPage(1)}
        >
          最初のページ
        </button>
      )}

      {/* "前のページ"ボタン */}
      {currentPage > 1 && (
        <button
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          前のページ
        </button>
      )}

      {/* 近傍のページ番号 */}
      {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((page) => (
        <button
          key={page}
          className={`px-3 py-1 rounded ${page === currentPage ? 'bg-green-700 text-white' : 'bg-green-300 text-green-900'} hover:bg-green-600`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}

      {/* "次のページ"ボタン */}
      {currentPage < totalPages && (
        <button
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          次のページ
        </button>
      )}

      {/* 最後のページへ */}
      {currentPage < totalPages && (
        <button
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => setCurrentPage(totalPages)}
        >
          最後のページ
        </button>
      )}
    </div>
  );
};

export default Pagination;
