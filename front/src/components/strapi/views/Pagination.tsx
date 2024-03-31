import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className="flex mt-8">
      {currentPage > 1 && (
        <button className="mx-1 px-4 py-2 bg-green-500 text-white rounded-lg" onClick={() => setCurrentPage(currentPage - 1)}>前のページ</button>
      )}
      {Array.from({ length: totalPages }, (_, i) => (
        <button key={i} className={`mx-1 px-4 py-2 rounded-lg ${i + 1 === currentPage ? 'bg-green-700 text-white' : 'bg-green-300 text-green-900'}`} onClick={() => setCurrentPage(i + 1)}>
          {i + 1}
        </button>
      ))}
      {currentPage < totalPages && (
        <button className="mx-1 px-4 py-2 bg-green-500 text-white rounded-lg" onClick={() => setCurrentPage(currentPage + 1)}>次のページ</button>
      )}
    </div>
  );
};

export default Pagination;
