import React, { useEffect, useState } from 'react';

// GraphQLクエリ
const GET_FOODS_QUERY = `
  query GetFoods($start: Int!, $limit: Int!) {
    foods(start: $start, limit: $limit) {
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

const ApolloPage = () => {
  const [foods, setFoods] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch('http://localhost:4000/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: GET_FOODS_QUERY,
            variables: { start: 0, limit: 10 },
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setFoods(result.data.foods.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchFoods();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Foods</h1>
      <ul>
        {foods.map((food) => (
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

export default ApolloPage;
