import { ApolloQueryResult } from "@apollo/client";
import produce from "immer";
import React, { createContext, Reducer, useCallback, useReducer } from "react";
import { client } from "../gql";
import { GET_ALL_PRODUCTS } from "../gql/queries/product";
import { DEFAULT_CURRENCY } from "../utils/constants";
import { IProduct, IProductContextProps } from "../utils/interfaces";
import { ProductAction } from "../utils/types";

export const ProductContext = createContext({} as IProductContextProps);

const reducer = (state: IProduct[], action: ProductAction) => {
  switch (action.type) {
    case "set_products":
      return action.products;
    default:
      return state;
  }
};

const ProductContextProvider = (props: any) => {
  const [state, dispatch] = useReducer<Reducer<IProduct[], ProductAction>>(
    produce(reducer),
    []
  );
  const { children } = props;
  const getProducts = useCallback(
    async (currency: string): Promise<IProduct[]> => {
      try {
        const res: ApolloQueryResult<{ products: IProduct[] }> =
          await client.query({
            query: GET_ALL_PRODUCTS,
            variables: { currency: currency ?? DEFAULT_CURRENCY },
          });
        const products: IProduct[] = res.data.products;
        dispatch({
          type: "set_products",
          products,
        });

        return products;
      } catch (e) {
        // TODO: handleErrors
        return [];
      }
    },
    []
  );

  const updateProducts = (products: IProduct[]) => {
    dispatch({
      type: "set_products",
      products,
    });
  };

  return (
    <ProductContext.Provider
      value={{ getProducts, products: state, updateProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
