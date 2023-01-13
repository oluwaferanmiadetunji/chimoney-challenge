import { createContext } from "react";
import { ProductType } from "types/product.types";
import { ProductContextType } from "types/context.types";

const ProductContext = createContext<ProductContextType>({
  products: [],
  cart: [],
  addProductToCart: (product: ProductType) => {},
  removeProductFromCart: (productId: number) => {},
});

export default ProductContext;
