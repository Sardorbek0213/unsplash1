import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Image,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import BurgerMenu from "./burgerMenu/BurgerMenu";
import Filter from "./Filter";
import { navbar } from "../../utils/Header/Navbar";

const Navbar = () => {
  return (
    <Box
      as="nav"
      h={"56px"}
      maxW={"1296px"}
      display={"flex"}
      alignItems={"center"}
      gap={"24px"}
      px={"20px"}
      overflow={"hidden"}
    >
      {navbar.slice(0, 2).map((item) => {
        return (
          <ChakraLink
            h={"100%"}
            display={"flex"}
            alignItems={"center"}
            color={"#767676"}
            fontSize={"15px"}
            key={item.id}
            to={item.path}
            as={NavLink}
            _hover={{ color: "black" }}
          >
            {item.title}
          </ChakraLink>
        );
      })}
      <Text w={"0.2px"} h={"32px"} background={"#D1D1D1"} color={'transparent'}>|</Text>
      {navbar.slice(2).map((item) => {
        return (
          <ChakraLink
            h={"100%"}
            display={"flex"}
            alignItems={"center"}
            color={"#767676"}
            fontSize={"15px"}
            key={item.id}
            to={item.path}
            as={NavLink}
            _hover={{ color: "black" }}
          >
            {item.title}
          </ChakraLink>
        );
      })}
    </Box>
  );
};

export default Navbar;
