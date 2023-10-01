import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";

const layout = () => {
  return (
    <>
        <Header />
      <Box as={'main'}>
        <Outlet />
      </Box>
    </>
  );
};

export default layout;
