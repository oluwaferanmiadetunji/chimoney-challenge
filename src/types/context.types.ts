import { ProductType } from "./product.types";

export type ProductContextType = {
  products: ProductType[];
  cart: any[];
  addProductToCart: (product: ProductType) => void;
  removeProductFromCart: (productId: string) => void;
  deleteItemFromCart: (productId: string) => void;
  clearCart: () => void;
  loading: boolean;
};
