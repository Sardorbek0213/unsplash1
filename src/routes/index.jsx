import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Editorial from '../pages/Editorial'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Editorial />,
      },
    ],
  },
]);
