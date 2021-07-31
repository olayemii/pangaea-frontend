import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
  query GetProducts($currency: Currency) {
    products {
      id
      title
      image_url
      price(currency: $currency)
    }
  }
`;
