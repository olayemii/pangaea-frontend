import { IProduct } from "./interfaces";

export type CartAction =
  | { type: "add_item"; product: IProduct }
  | { type: "remove_item"; id: number }
  | { type: "change_currency"; currency: string; products: IProduct[] }
  | { type: "decrement_item"; id: number };

export type ProductAction = { type: "set_products"; products: IProduct[] };
