import produce from "immer";
import React, { createContext, useReducer, Reducer } from "react";
import { DEFAULT_CURRENCY } from "../utils/constants";
import { ICartContextProps, ICartItem, ICartState } from "../utils/interfaces";
import { CartAction } from "../utils/types";

export const CartContext = createContext({} as ICartContextProps);

const reducer = (state: ICartState, action: CartAction) => {
  switch (action.type) {
    case "add_item":
      const product = state.cartItems.find(
        (item) => item.product.id === action.product.id
      );
      if (product) {
        product.quantity = ++product.quantity;
      } else {
        state.cartItems.push({ product: action.product, quantity: 1 });
      }
      break;
    case "remove_item":
      state.cartItems = state.cartItems.filter(
        (item) => item.product.id !== action.id
      );
      break;
    case "change_currency":
      let updatedCart = [] as ICartItem[];
      if (action.products) {
        if (state.cartItems && state.cartItems.length > 0) {
          state.cartItems.forEach((cartItem) => {
            let match = action.products.find(
              (product) => product.id === cartItem.product.id
            );
            if (match) {
              updatedCart.push({
                ...cartItem,
                product: { ...cartItem.product, price: match.price },
              });
            }
          });
        }
      }
      state = { ...state, currency: action.currency, cartItems: updatedCart };
      return state;
    case "decrement_item":
      const decrementProduct = state.cartItems.find(
        (item) => item.product.id === action.id
      );
      if (decrementProduct) {
        if (decrementProduct.quantity === 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.product.id !== action.id
          );
        } else {
          decrementProduct.quantity = --decrementProduct.quantity;
        }
      }
      break;
    default:
      return state;
  }
};
const CartContextProvider = (props: any) => {
  const [state, dispatch] = useReducer<Reducer<ICartState, CartAction>>(
    produce(reducer),
    {
      cartItems: [],
      currency: DEFAULT_CURRENCY,
    }
  );

  const { children } = props;
  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        currency: state.currency ?? DEFAULT_CURRENCY,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
