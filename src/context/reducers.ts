import { ProductType } from "types/product.types";
import { saveItem, removeItem } from "utils/storage";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CLEAR_CART = "CLEAR_CART";

const addProductToCart = (product: ProductType, state: any) => {
  const updatedCart = [...state.cart];
  let totalPrice = state.totalPrice;

  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.productId === product.productId
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  totalPrice += product.price;

  saveItem("cart", updatedCart);
  return { ...state, cart: updatedCart, totalPrice };
};

const removeProductFromCart = (productId: number, state: any) => {
  const updatedCart = [...state.cart];
  let totalPrice = state.totalPrice;
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.productId === productId
  );

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  updatedItem.quantity--;
  totalPrice -= updatedItem.price;

  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  saveItem("cart", updatedCart);
  return { ...state, cart: updatedCart, totalPrice };
};

const clearCart = (_: null, state: any) => {
  removeItem("cart");
  return {
    ...state,
    cart: [],
  };
};

const deleteItemFromCart = (productId: number, state: any) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.productId === productId
  );

  updatedCart.splice(updatedItemIndex, 1);
  saveItem("cart", updatedCart);
  return { ...state, cart: updatedCart };
};

export const productsReducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);
    case DELETE_PRODUCT:
      return deleteItemFromCart(action.productId, state);
    case CLEAR_CART:
      return clearCart(action.productId, state);
    default:
      return state;
  }
};
