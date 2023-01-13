import React, { useReducer, useState, useEffect } from "react";
import ProductContext from "context/ProductContext";
import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  DELETE_PRODUCT,
  productsReducer,
  CLEAR_CART,
} from "context/reducers";
import { ProductType } from "types/product.types";
import { toast } from "react-toastify";
import { getItem } from "utils/storage";
import { getProducts } from "utils/api";

const GlobalState = (props: { children: React.ReactNode }) => {
  const getInitialState = () => {
    const cart = getItem("cart");

    return {
      cart,
    };
  };
  const [loading, setLoading] = useState(false);

  const [cart] = useState(getInitialState().cart);

  const [products, setProducts] = useState<ProductType[]>([]);
  const [cartState, dispatch] = useReducer(productsReducer, { cart });

  const addProductToCart = (product: ProductType) => {
    dispatch({ type: ADD_PRODUCT, product: product });
    toast.success("Item added to cart successfully");
  };

  const removeProductFromCart = (productId: string) => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
    toast.warn("Item removed from cart");
  };

  const deleteItemFromCart = (productId: string) => {
    dispatch({ type: DELETE_PRODUCT, productId: productId });
    toast.warn("Item deleted from cart");
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await getProducts();

      setProducts(response);
      setLoading(false);
    })();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        cart: cartState.cart,
        clearCart,
        addProductToCart,
        removeProductFromCart,
        deleteItemFromCart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default GlobalState;
