//pagenationの実装は現状難しいのであきらめる
//graphQL APIの使用ポイントを別途考える
//→記述が少ない点など

import React from 'react';
import { ApolloClient, InMemoryCache, useQuery, ApolloProvider } from '@apollo/client';
import { GET_FOODS_QUERY } from '../graphql/GetFoods'; // GetFoods.tsからクエリをインポート

// Apollo Clientのインスタンスを作成
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // GraphQLエンドポイントを指定
  cache: new InMemoryCache(),
});

// 取得するデータの型定義
interface FoodAttributes {
  foodname: string;
  description: string;
  price: number;
}

interface Food {
  id: string;
  attributes: FoodAttributes;
}

const Foods = () => {
  const { data, loading, error } = useQuery(GET_FOODS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Foods</h1>
      <ul>
        {data?.foods?.data.map((food: Food) => (
          <li key={food.id}>
            <h2>{food.attributes.foodname}</h2>
            <p>{food.attributes.description}</p>
            <p>Price: {food.attributes.price}円</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ApolloPage = () => {
  return (
    <ApolloProvider client={client}>
      <Foods />
    </ApolloProvider>
  );
};

export default ApolloPage;
