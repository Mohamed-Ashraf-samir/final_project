import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Our_Shop from "./Our Shop/Our_Shop";
import Product_details from "./Product-details/Product_details"
import Contact from "./Contact/Contact"
import Login from "./Login/Login";
import Shopping from "./Shopping/Shopping";
import AllCart from "./Cart/AllCart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "Our_Shop",
    element: <Our_Shop/>,
  },
  {
    path: "product-details",
    element: <Product_details/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
  {
    path: "Login",
    element: <Login/>,
  },
  {
    path: "Shopping",
    element: <Shopping/>,
  },
  {
    path: "Cart",
    element: <AllCart/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);