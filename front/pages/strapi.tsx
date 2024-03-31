import React, { useEffect, useState } from 'react';

// Strapiから取得する食品データの型定義
type Food = {
  id: number;
  attributes: {
    foodname: string;
    description: string;
    price: number;
  };
};

// APIから取得する応答の型定義
type ApiResponse = {
  data: Food[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export default function StrapiPage() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      // ページサイズはここで調整
      const pageSize = 6;
      const response = await fetch(`http://localhost:4000/api/foods?_limit=${pageSize}&_start=${(currentPage - 1) * pageSize}`);
      const result: ApiResponse = await response.json();
      setFoods(result.data);
      // 総ページ数の設定
      setTotalPages(Math.ceil(result.meta.pagination.total / pageSize));
    };

    fetchData();
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ヘッダー */}
      <header className="w-full py-5 px-6 bg-green-500 text-white flex justify-between items-center">
        <h1 className="text-xl font-bold">Bar Fractal</h1>
        <div className="space-y-2">
          <div className="w-8 h-0.5 bg-white"></div>
          <div className="w-8 h-0.5 bg-white"></div>
          <div className="w-8 h-0.5 bg-white"></div>
        </div>
      </header>

      {/* コンテンツセクション */}
      <div className="flex flex-col items-center justify-center h-full">
        <div className="bg-green-300 text-white p-64 rounded-lg shadow-lg mb-8 max-w-6xl">
          <h2 className="text-3xl font-bold">Hello World</h2>
        </div>

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
}
