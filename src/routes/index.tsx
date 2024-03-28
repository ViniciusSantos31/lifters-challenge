import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
]);

export default function RoutesApp() {
  return <RouterProvider router={router} />;
}
