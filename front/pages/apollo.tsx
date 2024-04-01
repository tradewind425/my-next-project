import React from 'react';
import { ApolloClient, InMemoryCache, gql, useQuery, ApolloProvider } from '@apollo/client';

// Apollo Clientのインスタンスを作成
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // ここにGraphQLエンドポイントを指定
  cache: new InMemoryCache(),
});

// GraphQLクエリの定義
const GET_FOODS_QUERY = gql`
  query GetFoods {
    foods {
      data {
        id
        attributes {
          foodname
          description
          price
        }
      }
    }
  }
`;

const Foods = () => {
  const { data, loading, error } = useQuery(GET_FOODS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Foods</h1>
      <ul>
        {data.foods.data.map(({ id, attributes }) => (
          <li key={id}>
            <h2>{attributes.foodname}</h2>
            <p>{attributes.description}</p>
            <p>Price: {attributes.price}円</p>
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
