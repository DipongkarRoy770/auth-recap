import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Order from "../components/Order";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <div className="text-center">Page not Found || 404</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path:'order',
        element:<PrivateRoutes><Order></Order></PrivateRoutes>
      }
    ]
  },
]);