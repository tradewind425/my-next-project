// queries/GetFoods.ts
import { gql } from '@apollo/client';

export const GET_FOODS_QUERY = gql`
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
