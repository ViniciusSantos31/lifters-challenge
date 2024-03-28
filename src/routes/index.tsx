import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Checkout } from "../pages/Checkout";
import { Home } from "../pages/Home";
import { Product } from "../pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:slug",
    element: <Product />,
  },
  {
    path: "/checkout",
    element: <Checkout />
  }
]);

export default function RoutesApp() {
  return <RouterProvider router={router} />;
}
