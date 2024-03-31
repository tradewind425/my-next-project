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
};

export default function StrapiPage() {
  // useStateを使用してfoods状態とsetFoods関数を定義（型注釈を追加）
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4000/api/foods');
      const result: ApiResponse = await response.json(); // 応答の型を明示
      console.log(result); // データの確認
      setFoods(result.data); // 応答のdataプロパティからfoods状態を更新
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Strapi Foods</h1>
      <ul>
        {foods.map((food) => (
          <li key={food.id}>
            <h2>{food.attributes.foodname}</h2> {/* foodnameを表示 */}
            <p>{food.attributes.description}</p> {/* descriptionを表示 */}
            <p>Price: {food.attributes.price}</p> {/* priceを表示 */}
          </li>
        ))}
      </ul>
    </div>
  );
}
