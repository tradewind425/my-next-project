import React, { useEffect, useState } from 'react';

// Simplified GraphQL query without pagination variables
const GET_FOODS_QUERY = `
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
            // Removed variables object since it's not needed for this simplified query
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        // Ensure proper access to nested data based on the updated query structure
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
        {foods.map(({ id, attributes: { foodname, description, price } }) => (
          <li key={id}>
            <h2>{foodname}</h2>
            <p>{description}</p>
            <p>Price: {price}円</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApolloPage;
