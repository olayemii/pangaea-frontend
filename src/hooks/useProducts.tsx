import { useCallback, useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { DEFAULT_CURRENCY } from "../utils/constants";
import { IProductContextProps } from "../utils/interfaces";

const useProducts = () => {
  const { getProducts, products } =
    useContext<IProductContextProps>(ProductContext);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(true);

  const doFetchProducts = useCallback(
    async (currency?: string) => {
      setLoadingProducts(true);
      await getProducts(currency ?? DEFAULT_CURRENCY);
      setLoadingProducts(false);
    },
    [getProducts]
  );

  // const updateProducts = (products: IProduct[]) => {
  //   console.log("Updating products");
  //   setProducts([]);
  // };

  return {
    loadingProducts,
    getProducts,
    products,
    doFetchProducts,
  };
};
export default useProducts;
