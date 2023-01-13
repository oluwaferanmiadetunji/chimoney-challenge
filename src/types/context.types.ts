import { ProductType } from "./product.types";

export type ProductContextType = {
  products: ProductType[];
  cart: any[];
  addProductToCart: (product: ProductType) => void;
  removeProductFromCart: (productId: number) => void;
};

export type ItemType = {
  id: number | string;
  qty: number;
};
