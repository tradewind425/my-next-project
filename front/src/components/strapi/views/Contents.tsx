import React from 'react';
import { Food } from '../types/types'; // 型定義のパスを適宜修正

interface ContentsProps {
  foods: Food[];
}

const Contents: React.FC<ContentsProps> = ({ foods }) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 max-w-6xl">
      {foods.map((food) => (
        <div key={food.id} className="bg-green-500 rounded-lg shadow-md text-white p-4 min-h-64">
          <h2 className="text-xl font-semibold">{food.attributes.foodname}</h2>
          <p>{food.attributes.description}</p>
          <p className="mt-auto">Price: {food.attributes.price}円（税抜）</p>
        </div>
      ))}
    </div>
  );
};

export default Contents;
