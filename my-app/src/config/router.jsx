import { createBrowserRouter, Navigate } from "react-router";
import { Layout } from "../pages/Layout";
import { UserList } from "../pages/UserList";


export const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Navigate to="/board" replace/>
      },
      {
        path: "board",
        lazy: async () => {
          const { Board, boardLoader } = await import("../pages/Board")
          return { element: <Board />, loader: boardLoader }
        }
      },
      {
        path: "users",
        element: <UserList />
      }
    ]
  },
]);
