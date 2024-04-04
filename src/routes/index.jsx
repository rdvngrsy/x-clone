import { createBrowserRouter } from "react-router-dom";

import Explore from "../pages/explore";
import Notifications from "../pages/notifications";
import Home from "../pages/home";
import NotFound from "../pages/not-found";
import MainLayout from "../layouts/main";
import Profile from "../pages/profile";
import Messages from "../pages/messages";
import Lists from "../pages/lists";
import Bookmarks from "../pages/bookmarks";
import Communities from "../pages/communities";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "lists",
        element: <Lists />,
      },
      {
        path: "bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "communities",
        element: <Communities />,
      },
      {
        path: "/:slug",
        element: <Profile />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
