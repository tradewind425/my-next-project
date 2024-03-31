import React, { useEffect, useState } from 'react';
import { Food } from './types/types'; // 型定義のパスを適宜修正
import Header from './views/Header'; // Headerコンポーネントのインポート
import MainBox from './views/Mainbox'; // MainBoxコンポーネントのインポート

interface MainProps {
  foods: Food[];
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const Main: React.FC<MainProps> = ({ foods, currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header /> {/* ヘッダーコンポーネントの使用 */}
      
      <div className="flex flex-col items-center justify-center h-full">
        <MainBox /> {/* メインボックスコンポーネントの使用 */}
        
        {/* コンテンツセクション */}
        <div className="grid grid-cols-3 gap-4 p-4 max-w-6xl">
          {foods.map((food) => (
            <div key={food.id} className="bg-green-500 rounded-lg shadow-md text-white p-4 min-h-64">
              <h2 className="text-xl font-semibold">{food.attributes.foodname}</h2>
              <p>{food.attributes.description}</p>
              <p className="mt-auto">Price: {food.attributes.price}円（税抜）</p>
            </div>
          ))}
        </div>

        {/* ページネーション */}
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
      </div>
    </div>
  );
};

export default Main;
