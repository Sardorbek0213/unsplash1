import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { EditorialContext } from "./context/EditorialContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
      <RouterProvider router={router} />
  </ChakraProvider>
);
