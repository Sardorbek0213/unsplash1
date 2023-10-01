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
import Navbar from "./Navbar";

const Header = () => {
  return (
    <Box
      as={"header"}
      w={"100%"}
      h={"118px"}
      className={"header"}
      position={"sticky"}
      zIndex={999}
      top={0}
      userSelect={"none"}
      background={"white"}
    >
      <Box
        h={"62px"}
        as="nav"
        w={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={"20px"}
      >
        <HStack w={"100%"} spacing={"16px"}>
          <Link to={"/"}>
            <Image src={logo} />
          </Link>
          <Filter />
        </HStack>
        <HStack spacing={"25px"} pl={{ base: "10px", md: "32px" }}>
          <ChakraLink
            fontSize={"15px"}
            _hover={{ color: "black" }}
            to={"/explore"}
            color={"#767676"}
            as={Link}
            display={{ base: "none", lg: "block" }}
          >
            Explore
          </ChakraLink>
          <ChakraLink
            fontSize={"15px"}
            _hover={{ color: "black" }}
            to={"/advertise"}
            color={"#767676"}
            as={Link}
            display={{ base: "none", lg: "block" }}
          >
            Advertise
          </ChakraLink>
          <ChakraLink
            fontSize={"15px"}
            to={"/plus"}
            className={"nav_colorfulLink"}
            as={Link}
            color={"#767676"}
            display={{ base: "none", lg: "block" }}
          >
            Unsplash+
          </ChakraLink>
          <Text
            display={{ base: "none", lg: "block" }}
            w={"0.2px"}
            h={"32px"}
            background={"#D1D1D1"}
          ></Text>
          <ChakraLink
            fontSize={"15px"}
            _hover={{ color: "black" }}
            to={"/login"}
            color={"#767676"}
            as={Link}
            display={{ base: "none", md: "block" }}
          >
            Login
          </ChakraLink>
          <Button
            className="nav_button"
            h={"32px"}
            w={"fit-content"}
            px={"12px"}
            fontSize={"14px"}
            borderRadius={"4px"}
            border={"1px solid #D1D1D1"}
            variant="outline"
            color={"#767676"}
            fontWeight={400}
            display={{ base: "none", md: "block" }}
            _active={{ background: "white" }}
            _hover={{
              border: "1px solid black",
              color: "black",
              background: "white",
            }}
          >
            Submit a photo
          </Button>
          <BurgerMenu />
        </HStack>
      </Box>
      <Navbar />
    </Box>
  );
};

export default Header;
