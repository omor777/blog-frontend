import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import CreatePost from "../pages/create-post/CreatePost";
import PostLayout from "../layouts/PostLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <span>Error</span>,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/create-post",
    element: <PostLayout />,
  },
]);

export default router;
