import React, { useEffect, useState } from 'react';
import { Food } from './types/types';
import Header from './views/Header';
import MainBox from './views/Mainbox';
import Contents from './views/Contents';
import Pagination from './views/Pagination'; // Paginationコンポーネントをインポート

interface MainProps {
  foods: Food[];
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const Main: React.FC<MainProps> = ({ foods, currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <div className="flex flex-col items-center justify-center h-full">
        <MainBox />
        
        <Contents foods={foods} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Main;
