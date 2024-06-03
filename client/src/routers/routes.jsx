import {createBrowserRouter} from "react-router-dom"
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "/contact",
        element:<Contact/>,
      },
      {
        path: "/about",
        element:<About/>,
      },
      {
        path: "/login",
        element:<Login/>,
      },
      {
        path: "/register",
        element:<Register/>,
      },
    ]
  },
]);
