import {createBrowserRouter} from "react-router-dom"
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

import BlogCategory from "../pages/BlogCategory/BlogCategory";
import DashBoardLayout from "../layout/DashBoardLayout";
import DashBoardHome from "../pages/dashBoard/DashBoardHome";
import AddBlog from "../pages/dashBoard/AddBlog";
import EditBlog from "../pages/dashBoard/EditBlog";
import AllBlogs from "../pages/dashBoard/AllBlogs";
import UserProfile from "../pages/dashBoard/UserProfile";
import ManageBlogs from "../pages/dashBoard/ManageBlogs";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/all-blogs"),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/category",
        element: <BlogCategory />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        index: true,
        element: <DashBoardHome />,
      },
      {
        path: "add-blog",
        element: <AddBlog />,
      },
      {
        path: "edit-blog/:id",
        element: <EditBlog />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all-blogs${params.id}`),
      },
      {
        path: "manage-blogs",
        element: <ManageBlogs />,
        loader: () => fetch("http://localhost:5000/all-blogs"),
      },
      {
        path: "all-blogs",
        element: <AllBlogs />,
      },
      {
        path: "user-profile",
        element: <UserProfile />,
      },
    ],
  },
]);
