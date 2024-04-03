import React, { useEffect, useState } from 'react';
import Main from '../src/components/strapi/Main';
import { Food } from '../src/components/strapi/types/types';

// APIから取得する応答の型定義
type ApiResponse = {
  data: Food[];
  meta: {
    pagination: {
      page: number; // 現在のページ
      pageSize: number; // 1ページあたりのアイテム数
      pageCount: number; // 総ページ数
      total: number; // 総アイテム数
    };
  };
};

export default function StrapiPage() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const pageSize = 6; // 1ページあたりのコンテンツ数
    const fetchUrl = `http://localhost:4000/api/foods?pagination[pageSize]=${pageSize}&pagination[page]=${currentPage}`;
    
    const fetchData = async () => {
      const response = await fetch(fetchUrl);
      const result: ApiResponse = await response.json();
      setFoods(result.data);
      setTotalPages(result.meta.pagination.pageCount);
    };

    fetchData();
  }, [currentPage]);

  return (
    <Main foods={foods} currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
  );
}
