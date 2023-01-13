import React, { useReducer, useState, useEffect } from "react";
import ProductContext from "context/ProductContext";
import { ADD_PRODUCT, REMOVE_PRODUCT, productsReducer } from "context/reducers";
import { ProductType } from "types/product.types";
import { toast } from "react-toastify";
import { getItem } from "utils/storage";
import dummyData from "./r.json";

const GlobalState = (props: { children: React.ReactNode }) => {
  const getInitialState = () => {
    const cart = getItem("cart");

    return {
      cart,
    };
  };

  const [cart] = useState(getInitialState().cart);

  const [products, setProducts] = useState<ProductType[]>([]);
  const [cartState, dispatch] = useReducer(productsReducer, { cart });

  const addProductToCart = (product: ProductType) => {
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCT, product: product });

      toast.success("Item added to cart successfully");
    }, 500);
  };

  const removeProductFromCart = (productId: number) => {
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT, productId: productId });

      toast.warn("Item removed from cart");
    }, 500);
  };

  useEffect(() => {
    setProducts(dummyData);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        cart: cartState.cart,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default GlobalState;
