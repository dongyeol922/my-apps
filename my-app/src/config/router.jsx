import { createBrowserRouter } from "react-router";
import { Layout } from "../pages/Layout";
import { Board } from "../pages/Board";
import { UserList } from "../pages/UserList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "board",
        element: <Board />
      },
      {
        path: "users",
        element: <UserList />
      }
    ]
  },
]);
