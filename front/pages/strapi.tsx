import React, { useEffect, useState } from 'react';
import Main from '../src/components/strapi/Main';

// Strapiから取得する食品データの型定義をここに保持
type Food = {
  id: number;
  attributes: {
    foodname: string;
    description: string;
    price: number;
  };
};

// APIから取得する応答の型定義をここに保持
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
      const pageSize = 6;
      const response = await fetch(`http://localhost:4000/api/foods?_limit=${pageSize}&_start=${(currentPage - 1) * pageSize}`);
      const result: ApiResponse = await response.json();
      setFoods(result.data);
      setTotalPages(Math.ceil(result.meta.pagination.total / pageSize));
    };

    fetchData();
  }, [currentPage]);

  return <Main foods={foods} currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />;
}
