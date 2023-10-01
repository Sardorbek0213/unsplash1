import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Editorial/Header";
import Photos from "../components/Editorial/Photos";

const HomePage = () => {
  return (
    <Box>
      <Header />
      <Photos />
    </Box>
  );
};

export default HomePage;
