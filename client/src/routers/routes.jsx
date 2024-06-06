import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

import DashBoardLayout from "../layout/DashBoardLayout";
import BlogCategory from "../pages/BlogCategory/BlogCategory";
import AddBlog from "../pages/dashBoard/AddBlog";
import AllBlogs from "../pages/dashBoard/AllBlogs";
import DashBoardHome from "../pages/dashBoard/DashBoardHome";
import EditBlog from "../pages/dashBoard/EditBlog";
import ManageBlogs from "../pages/dashBoard/ManageBlogs";
import UserProfile from "../pages/dashBoard/UserProfile";
import SingleBlog from "../pages/singleBlogPost/SingleBlog";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/single-blog/:id",
        element: <SingleBlog />,
        loader: ({ params }) =>
          fetch(`https://update-blog-api.vercel.app/all-blogs/${params.id}`),
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
          fetch(`https://update-blog-api.vercel.app/all-blogs${params.id}`),
      },
      {
        path: "manage-blogs",
        element: <ManageBlogs />,
        loader: () => fetch("https://update-blog-api.vercel.app/all-blogs"),
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
