import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import { IProduct } from "../utils/interfaces";

const useCart = () => {
  const { cartItems, dispatch, currency } = useContext(CartContext);
  const { getProducts } = useContext(ProductContext);

  const doAddItem = (product: IProduct) => {
    dispatch({
      type: "add_item",
      product,
    });
  };

  const doRemoveItem = (id: number) => {
    dispatch({
      type: "remove_item",
      id,
    });
  };

  const doDecrementQuantity = (id: number) => {
    dispatch({
      type: "decrement_item",
      id,
    });
  };

  const doIncrementQuantity = (id: number) => {
    const currentProduct = cartItems.find((item) => item.product.id === id);
    if (currentProduct) {
      dispatch({
        type: "add_item",
        product: currentProduct.product,
      });
    }
  };

  const doGetCartTotal = (): number => {
    return cartItems.reduce<number>(
      (acc, cur) => (acc += cur.product.price * cur.quantity),
      0
    );
  };

  const doChangeCurrency = async (currency: string) => {
    const products: IProduct[] = await getProducts(currency);
    dispatch({
      type: "change_currency",
      currency,
      products,
    });
  };

  return {
    doAddItem,
    doRemoveItem,
    doDecrementQuantity,
    cartItems,
    doChangeCurrency,
    doGetCartTotal,
    currency,
    dispatch,
    doIncrementQuantity,
  };
};

export default useCart;
