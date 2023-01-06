import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "src/constants";

const Cart = lazy(() => import("src/pages/cart"));
const Checkout = lazy(() => import("src/pages/checkout"));
const ProductDetails = lazy(() => import("src/pages/product-details"));
const Products = lazy(() => import("src/pages/products"));

const router = createBrowserRouter([
  {
    path: ROUTES.CART,
    element: <Cart />,
  },
  {
    path: ROUTES.CHECKOUT,
    element: <Checkout />,
  },
  {
    path: ROUTES.PRODUCTS,
    element: <Products />,
  },
  {
    path: ROUTES.PRODUCT_DETAILS,
    element: <ProductDetails />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
