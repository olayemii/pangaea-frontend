import { CartAction } from "./types";

export interface IProduct {
  id: number;
  image_url: string;
  price: number;
  title: string;
  __typename: string;
}

export interface IProductContextProps {
  getProducts: (currency: string) => Promise<IProduct[]>;
  products: IProduct[];
  updateProducts: (products: IProduct[]) => void;
}

export interface IConfigContext {
  isOpen: boolean;
  toggleDrawer: () => void;
}

export interface DrawerProps {
  isOpen: boolean;
}

export interface ICartContextProps {
  cartItems: ICartItem[];
  dispatch: React.Dispatch<CartAction>;
  currency: string;
}

export interface ICartState {
  cartItems: ICartItem[];
  currency: string;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface IProductViewProps {
  product: IProduct;
}
