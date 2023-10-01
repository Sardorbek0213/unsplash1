import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuList,
  Text,
  Link as ChakraLink,
  Tooltip,
  VStack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { BsFillBuildingsFill } from "react-icons/Bs";
import { BsFillPhoneFill } from "react-icons/Bs";
import {
  FaAngleDown,
  FaArrowDown,
  FaBook,
  FaFacebook,
  FaInstagram,
  FaLanguage,
  FaSatellite,
  FaTwitter,
} from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { menu } from "../../../utils/Header/Menu";
import Select from "./Select";

const BurgerMenu = () => {
  const navigate = useNavigate();
  return (
    <Menu>
      <MenuButton
        variant="unstyled"
        fontSize={"23px"}
        color={"#767676"}
        pl={{ base: "10px", md: "0" }}
      >
        <HamburgerIcon/>
      </MenuButton>
      <MenuList
        h={{ base: "fit-content", lg: "430px" }}
        w={{ base: "250px", sm: "fit-content", lg: "644px" }}
      >
        <Box p={"24px 32px 32px"} display={{ base: "none", lg: "flex" }}>
          <Box w={"100%"}>
            <List>
              <ListItem mb={"8px"} w={"100%"}>
                <HStack>
                  <Box as="span">
                    <BsFillBuildingsFill />
                  </Box>
                  <Text fontWeight={600}>Company</Text>
                </HStack>
              </ListItem>
            </List>
            <List>
              {menu.menuOne.map((item) => {
                return (
                  <ListItem pl={"25px"} w={"100%"}>
                    <ChakraLink
                      py={"6px"}
                      key={item.id}
                      to={item.path}
                      fontSize={"15px"}
                      _hover={{ color: "black" }}
                      color={"#767676"}
                      as={Link}
                      display={"inline-block"}
                      w={"100%"}
                    >
                      {item.title}
                    </ChakraLink>
                  </ListItem>
                );
              })}
            </List>
            <HStack pl={"25px"} py={"8px"} spacing={"20px"}>
              {menu.menuIcons.map((item) => {
                return (
                  <Tooltip
                    key={item.id}
                    bg="rgb(56, 56, 56)"
                    color="white"
                    hasArrow
                    placement="bottom-start"
                    w={"fit-content"}
                    h={"fit-content"}
                    py={"3px"}
                    fontSize={"11px"}
                    label={item.tooltip}
                  >
                    <ChakraLink as={"a"} target={"_blank"} href={item.link}>
                      <Box color={"#767676"} fontSize={"18px"}>
                        {item.icon}
                      </Box>
                    </ChakraLink>
                  </Tooltip>
                );
              })}
            </HStack>
          </Box>
          <List w={"100%"}>
            <ListItem mb={"8px"} w={"100%"}>
              <HStack>
                <Box as="span">
                  <BsFillPhoneFill />
                </Box>
                <Text fontWeight={600}>Product</Text>
              </HStack>
            </ListItem>
            {menu.menuTwo.map((item) => {
              return (
                <ListItem pl={"25px"} w={"100%"}>
                  <ChakraLink
                    py={"6px"}
                    key={item.id}
                    to={item.path}
                    fontSize={"15px"}
                    _hover={{ color: "black" }}
                    color={"#767676"}
                    as={Link}
                    display={"inline-block"}
                    w={"100%"}
                  >
                    {item.title}
                  </ChakraLink>
                </ListItem>
              );
            })}
          </List>
          <List w={"100%"}>
            <ListItem mb={"8px"} w={"100%"}>
              <HStack>
                <Box as="span">
                  <FaSatellite />
                </Box>
                <Text fontWeight={600}>Community</Text>
              </HStack>
            </ListItem>
            {menu.menuThree.map((item) => {
              return (
                <ListItem pl={"25px"} w={"100%"}>
                  <ChakraLink
                    py={"6px"}
                    key={item.id}
                    to={item.path}
                    fontSize={"15px"}
                    _hover={{ color: "black" }}
                    color={"#767676"}
                    as={Link}
                    w={"100%"}
                    display={"inline-block"}
                  >
                    {item.title}
                  </ChakraLink>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box
          h={"56px"}
          borderTop={"1px solid rgb(210, 210, 210)"}
          p={"16px 32px"}
          w={"100%"}
          display={{ base: "none", lg: "flex" }}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box display={"flex"} alignItems={"center"} gap={"24px"}>
            <ChakraLink
              as={Link}
              fontSize={"15px"}
              _hover={{ color: "black" }}
              color={"#767676"}
              to={"/licence"}
            >
              Licence
            </ChakraLink>
            <ChakraLink
              as={Link}
              fontSize={"15px"}
              _hover={{ color: "black" }}
              color={"#767676"}
              to={"/privacy"}
            >
              Privacy Policy
            </ChakraLink>
            <ChakraLink
              as={Link}
              fontSize={"15px"}
              _hover={{ color: "black" }}
              color={"#767676"}
              to={"/terms"}
            >
              Terms
            </ChakraLink>
            <ChakraLink
              as={Link}
              fontSize={"15px"}
              _hover={{ color: "black" }}
              color={"#767676"}
              to={"/security"}
            >
              Security
            </ChakraLink>
          </Box>
          <HStack spacing={"10px"}>
            <FaLanguage style={{ color: "#767676", fontSize: "30px" }} />
            <Select />
          </HStack>
        </Box>
        <Box display={{ base: "block", lg: "none" }}>
          <Box p={"14px"}>
            <Box
              pb={"8px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Menu>
                <MenuButton w={{ base: "200px", sm: "234px" }}>
                  <Box
                    w={"100%"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <HStack>
                      <Box as="span">
                        <BsFillBuildingsFill />
                      </Box>
                      <Text fontWeight={600}>Company</Text>
                    </HStack>
                    <FaAngleDown style={{ color: "#767676" }} />
                  </Box>
                </MenuButton>
                <List>
                  <MenuList>
                    {menu.menuOne.map((item) => {
                      return (
                        <ListItem pl={"25px"} w={"100%"}>
                          <ChakraLink
                            py={"6px"}
                            key={item.id}
                            to={item.path}
                            fontSize={"15px"}
                            _hover={{ color: "black" }}
                            color={"#767676"}
                            as={Link}
                            display={"inline-block"}
                            w={"100%"}
                          >
                            {item.title}
                          </ChakraLink>
                        </ListItem>
                      );
                    })}
                    <HStack pl={"25px"} py={"8px"} spacing={"20px"}>
                      {menu.menuIcons.map((item) => {
                        return (
                          <Tooltip
                            key={item.id}
                            bg="rgb(56, 56, 56)"
                            color="white"
                            hasArrow
                            placement="bottom-start"
                            w={"fit-content"}
                            h={"fit-content"}
                            py={"3px"}
                            fontSize={"11px"}
                            label={item.tooltip}
                          >
                            <ChakraLink
                              as={"a"}
                              target={"_blank"}
                              href={item.link}
                            >
                              <Box color={"#767676"} fontSize={"18px"}>
                                {item.icon}
                              </Box>
                            </ChakraLink>
                          </Tooltip>
                        );
                      })}
                    </HStack>
                  </MenuList>
                </List>
              </Menu>
            </Box>
            <Box
              py={"8px"}
              w={"100%"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Menu>
                <MenuButton w={{ base: "200px", sm: "234px" }}>
                  <Box
                    w={"100%"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <HStack>
                      <Box as="span">
                        <BsFillPhoneFill />
                      </Box>
                      <Text fontWeight={600}>Product</Text>
                    </HStack>
                    <FaAngleDown style={{ color: "#767676" }} />
                  </Box>
                </MenuButton>
                <List>
                  <MenuList>
                    <ListItem pl={"25px"} w={"100%"}>
                      <ChakraLink
                        py={"6px"}
                        to={"plus"}
                        fontSize={"15px"}
                        _hover={{ color: "black" }}
                        color={"#767676"}
                        as={Link}
                        display={"inline-block"}
                        w={"100%"}
                      >
                        Unsplash++
                      </ChakraLink>
                    </ListItem>
                    <ListItem pl={"25px"} w={"100%"}>
                      <ChakraLink
                        py={"6px"}
                        to={"/explore"}
                        fontSize={"15px"}
                        _hover={{ color: "black" }}
                        color={"#767676"}
                        as={Link}
                        display={"inline-block"}
                        w={"100%"}
                      >
                        Explore
                      </ChakraLink>
                    </ListItem>
                    {menu.menuTwo.map((item) => {
                      return (
                        <ListItem pl={"25px"} w={"100%"}>
                          <ChakraLink
                            py={"6px"}
                            key={item.id}
                            to={item.path}
                            fontSize={"15px"}
                            _hover={{ color: "black" }}
                            color={"#767676"}
                            as={Link}
                            display={"inline-block"}
                            w={"100%"}
                          >
                            {item.title}
                          </ChakraLink>
                        </ListItem>
                      );
                    })}
                  </MenuList>
                </List>
              </Menu>
            </Box>
            <Box
              py={"8px"}
              w={"100%"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Menu>
                <MenuButton w={{ base: "200px", sm: "234px" }}>
                  <Box
                    w={"100%"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <HStack>
                      <Box as="span">
                        <FaSatellite />
                      </Box>
                      <Text fontWeight={600}>Community</Text>
                    </HStack>
                    <FaAngleDown style={{ color: "#767676" }} />
                  </Box>
                </MenuButton>
                <List>
                  <MenuList>
                    {menu.menuThree.map((item) => {
                      return (
                        <ListItem pl={"25px"} w={"100%"}>
                          <ChakraLink
                            py={"6px"}
                            key={item.id}
                            to={item.path}
                            fontSize={"15px"}
                            _hover={{ color: "black" }}
                            color={"#767676"}
                            as={Link}
                            w={"100%"}
                            display={"inline-block"}
                          >
                            {item.title}
                          </ChakraLink>
                        </ListItem>
                      );
                    })}
                  </MenuList>
                </List>
              </Menu>
            </Box>
            <Box
              py={"8px"}
              w={"100%"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Menu>
                <MenuButton w={{ base: "200px", sm: "234px" }}>
                  <Box
                    w={"100%"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <HStack>
                      <Box as="span">
                        <FaBook />
                      </Box>
                      <Text fontWeight={600}>Legal</Text>
                    </HStack>
                    <FaAngleDown style={{ color: "#767676" }} />
                  </Box>
                </MenuButton>
                <List>
                  <MenuList>
                    <ListItem pl={"25px"} w={"100%"}>
                      <ChakraLink
                        py={"6px"}
                        to={"/licence"}
                        fontSize={"15px"}
                        _hover={{ color: "black" }}
                        color={"#767676"}
                        as={Link}
                        w={"100%"}
                        display={"inline-block"}
                      >
                        Licence
                      </ChakraLink>
                      <ChakraLink
                        py={"6px"}
                        to={"/privacy"}
                        fontSize={"15px"}
                        _hover={{ color: "black" }}
                        color={"#767676"}
                        as={Link}
                        w={"100%"}
                        display={"inline-block"}
                      >
                        Privacy Policy
                      </ChakraLink>
                      <ChakraLink
                        py={"6px"}
                        to={"/terms"}
                        fontSize={"15px"}
                        _hover={{ color: "black" }}
                        color={"#767676"}
                        as={Link}
                        w={"100%"}
                        display={"inline-block"}
                      >
                        Terms
                      </ChakraLink>
                      <ChakraLink
                        py={"6px"}
                        to={"/security"}
                        fontSize={"15px"}
                        _hover={{ color: "black" }}
                        color={"#767676"}
                        as={Link}
                        w={"100%"}
                        display={"inline-block"}
                      >
                        Security
                      </ChakraLink>
                    </ListItem>
                  </MenuList>
                </List>
              </Menu>
            </Box>
            <Box pt={"8px"} pl={{ base: "10px", md: "0px" }}>
              <Select />
            </Box>
          </Box>

          <Box
            borderTop={"1px solid rgb(210, 210, 210)"}
            p={"16px 24px 10px"}
            w={"100%"}
            display={{ base: "block", md: "none" }}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <HStack w={"100%"}>
              <Button
                className="nav_button"
                h={"32px"}
                w={"30%"}
                fontSize={"14px"}
                borderRadius={"4px"}
                border={"1px solid #D1D1D1"}
                variant="outline"
                color={"#767676"}
                fontWeight={400}
                _hover={{
                  border: "1px solid black",
                  color: "black",
                  background: "white",
                }}
                onClick={() => navigate("/login")}
                _active={{ background: "white" }}
              >
                Login
              </Button>
              <Button
                className="nav_button"
                h={"32px"}
                w={"70%"}
                fontSize={"14px"}
                borderRadius={"4px"}
                border={"1px solid #D1D1D1"}
                variant="outline"
                color={"#767676"}
                fontWeight={400}
                _active={{ background: "white" }}
                _hover={{
                  border: "1px solid black",
                  color: "black",
                  background: "white",
                }}
              >
                Submit a photo
              </Button>
            </HStack>
            <HStack pt={"12px"}>
              <Text color={"#767676"} fontSize={"15px"}>
                New to Unsplash?
              </Text>
              <ChakraLink
                as={Link}
                color={"#767676"}
                textDecoration={"underline"}
                fontSize={"15px"}
              >
                Sign up for free
              </ChakraLink>
            </HStack>
          </Box>
        </Box>
      </MenuList>
    </Menu>
  );
};

export default BurgerMenu;
