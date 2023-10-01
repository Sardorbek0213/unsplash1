import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import bg2 from "../../assets/images/header.jpg";
import Filter from "../../layout/header/Filter";
import { trending } from "../../utils/Trending";

const Header = () => {
  return (
    <Box
      h={{ base: "230px", sm: "310px", md: "594px" }}
      display={"flex"}
      alignItems={"center"}
      position={"relative"}
    >
      <Image
        draggable={"false"}
        userSelect={"none"}
        src={bg2}
        w={"100%"}
        h={"100%"}
        objectFit={"cover"}
        position={"absolute"}
        className={"header_img"}
      />
      <Container
        maxW={"1320px"}
        px={{ base: "12px", md: "120px", lg: "215px" }}
        position={"relative"}
        zIndex={100}
        color={"white"}
      >
        <svg
          width="195"
          height="45"
          viewBox="0 0 195 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.476 36.344C11.2374 36.344 9.30535 36.0373 7.68002 35.424C6.05468 34.78 4.70535 33.906 3.63202 32.802C2.58935 31.6673 1.80735 30.3333 1.28602 28.8C0.79535 27.236 0.550017 25.5187 0.550017 23.648V3.82201H7.72602V23.05C7.72602 24.338 7.86402 25.442 8.14002 26.362C8.44668 27.2513 8.84535 27.9873 9.33602 28.57C9.85735 29.122 10.4707 29.5207 11.176 29.766C11.912 30.0113 12.7094 30.134 13.568 30.134C15.316 30.134 16.7267 29.5973 17.8 28.524C18.904 27.4507 19.456 25.626 19.456 23.05V3.82201H26.632V23.648C26.632 25.5187 26.3714 27.236 25.85 28.8C25.3287 30.364 24.5314 31.7133 23.458 32.848C22.3847 33.952 21.02 34.8107 19.364 35.424C17.708 36.0373 15.7454 36.344 13.476 36.344ZM33.0735 12.332C34.2388 11.9947 35.7415 11.688 37.5815 11.412C39.4215 11.1053 41.3535 10.952 43.3775 10.952C45.4321 10.952 47.1341 11.228 48.4835 11.78C49.8635 12.3013 50.9521 13.0527 51.7495 14.034C52.5468 15.0153 53.1141 16.1807 53.4515 17.53C53.7888 18.8793 53.9575 20.382 53.9575 22.038V35.7H47.1035V22.866C47.1035 20.658 46.8121 19.094 46.2295 18.174C45.6468 17.254 44.5581 16.794 42.9635 16.794C42.4728 16.794 41.9515 16.8247 41.3995 16.886C40.8475 16.9167 40.3568 16.9627 39.9275 17.024V35.7H33.0735V12.332ZM67.1073 30.778C68.3647 30.778 69.254 30.6553 69.7753 30.41C70.2967 30.1647 70.5573 29.6893 70.5573 28.984C70.5573 28.432 70.22 27.9567 69.5453 27.558C68.8707 27.1287 67.8433 26.6533 66.4633 26.132C65.39 25.7333 64.4087 25.3193 63.5193 24.89C62.6607 24.4607 61.9247 23.9547 61.3113 23.372C60.698 22.7587 60.2227 22.038 59.8853 21.21C59.548 20.382 59.3793 19.3853 59.3793 18.22C59.3793 15.9507 60.2227 14.1567 61.9093 12.838C63.596 11.5193 65.9113 10.86 68.8553 10.86C70.3273 10.86 71.738 10.998 73.0873 11.274C74.4367 11.5193 75.51 11.7953 76.3073 12.102L75.1113 17.438C74.314 17.162 73.44 16.9167 72.4893 16.702C71.5693 16.4873 70.5267 16.38 69.3613 16.38C67.2147 16.38 66.1413 16.978 66.1413 18.174C66.1413 18.45 66.1873 18.6953 66.2793 18.91C66.3713 19.1247 66.5553 19.3393 66.8313 19.554C67.1073 19.738 67.4753 19.9527 67.9353 20.198C68.426 20.4127 69.0393 20.658 69.7753 20.934C71.278 21.486 72.52 22.038 73.5013 22.59C74.4827 23.1113 75.2493 23.694 75.8013 24.338C76.384 24.9513 76.7827 25.6413 76.9973 26.408C77.2427 27.1747 77.3653 28.064 77.3653 29.076C77.3653 31.468 76.4607 33.2773 74.6513 34.504C72.8727 35.7307 70.3427 36.344 67.0613 36.344C64.9147 36.344 63.1207 36.16 61.6793 35.792C60.2687 35.424 59.2873 35.1173 58.7353 34.872L59.8853 29.306C61.0507 29.766 62.2467 30.134 63.4733 30.41C64.7 30.6553 65.9113 30.778 67.1073 30.778ZM97.9895 23.786C97.9895 21.67 97.5142 19.9833 96.5635 18.726C95.6129 17.438 94.2022 16.794 92.3315 16.794C91.7182 16.794 91.1509 16.8247 90.6295 16.886C90.1082 16.9167 89.6789 16.9627 89.3415 17.024V29.398C89.7709 29.674 90.3229 29.904 90.9975 30.088C91.7029 30.272 92.4082 30.364 93.1135 30.364C96.3642 30.364 97.9895 28.1713 97.9895 23.786ZM104.982 23.602C104.982 25.4727 104.752 27.1747 104.292 28.708C103.832 30.2413 103.157 31.56 102.268 32.664C101.378 33.768 100.274 34.6267 98.9555 35.24C97.6369 35.8533 96.1189 36.16 94.4015 36.16C93.4509 36.16 92.5615 36.068 91.7335 35.884C90.9055 35.7 90.1082 35.4393 89.3415 35.102V44.21H82.4875V12.332C83.1009 12.148 83.8062 11.9793 84.6035 11.826C85.4009 11.642 86.2289 11.4887 87.0875 11.366C87.9769 11.2433 88.8662 11.1513 89.7555 11.09C90.6755 10.998 91.5495 10.952 92.3775 10.952C94.3709 10.952 96.1495 11.2587 97.7135 11.872C99.2775 12.4547 100.596 13.298 101.67 14.402C102.743 15.4753 103.556 16.794 104.108 18.358C104.69 19.922 104.982 21.67 104.982 23.602ZM119.909 36.16C117.916 36.1293 116.291 35.9147 115.033 35.516C113.807 35.1173 112.825 34.5653 112.089 33.86C111.384 33.124 110.893 32.25 110.617 31.238C110.372 30.1953 110.249 29.03 110.249 27.742V1.10801L117.103 0.00401115V26.362C117.103 26.9753 117.149 27.5273 117.241 28.018C117.333 28.5087 117.502 28.9227 117.747 29.26C118.023 29.5973 118.407 29.8733 118.897 30.088C119.388 30.3027 120.047 30.4407 120.875 30.502L119.909 36.16ZM134.724 30.916C135.398 30.916 136.042 30.9007 136.656 30.87C137.269 30.8393 137.76 30.7933 138.128 30.732V25.534C137.852 25.4727 137.438 25.4113 136.886 25.35C136.334 25.2887 135.828 25.258 135.368 25.258C134.724 25.258 134.11 25.304 133.528 25.396C132.976 25.4573 132.485 25.5953 132.056 25.81C131.626 26.0247 131.289 26.316 131.044 26.684C130.798 27.052 130.676 27.512 130.676 28.064C130.676 29.1373 131.028 29.8887 131.734 30.318C132.47 30.7167 133.466 30.916 134.724 30.916ZM134.172 10.86C136.196 10.86 137.882 11.09 139.232 11.55C140.581 12.01 141.654 12.6693 142.452 13.528C143.28 14.3867 143.862 15.4293 144.2 16.656C144.537 17.8827 144.706 19.2473 144.706 20.75V35.01C143.724 35.2247 142.36 35.47 140.612 35.746C138.864 36.0527 136.748 36.206 134.264 36.206C132.7 36.206 131.274 36.068 129.986 35.792C128.728 35.516 127.64 35.0713 126.72 34.458C125.8 33.814 125.094 32.986 124.604 31.974C124.113 30.962 123.868 29.72 123.868 28.248C123.868 26.8373 124.144 25.6413 124.696 24.66C125.278 23.6787 126.045 22.8967 126.996 22.314C127.946 21.7313 129.035 21.3173 130.262 21.072C131.488 20.796 132.761 20.658 134.08 20.658C134.969 20.658 135.751 20.704 136.426 20.796C137.131 20.8573 137.698 20.9493 138.128 21.072V20.428C138.128 19.2627 137.775 18.3273 137.07 17.622C136.364 16.9167 135.138 16.564 133.39 16.564C132.224 16.564 131.074 16.656 129.94 16.84C128.805 16.9933 127.824 17.2233 126.996 17.53L126.122 12.01C126.52 11.8873 127.011 11.7647 127.594 11.642C128.207 11.4887 128.866 11.366 129.572 11.274C130.277 11.1513 131.013 11.0593 131.78 10.998C132.577 10.906 133.374 10.86 134.172 10.86ZM157.85 30.778C159.107 30.778 159.996 30.6553 160.518 30.41C161.039 30.1647 161.3 29.6893 161.3 28.984C161.3 28.432 160.962 27.9567 160.288 27.558C159.613 27.1287 158.586 26.6533 157.206 26.132C156.132 25.7333 155.151 25.3193 154.262 24.89C153.403 24.4607 152.667 23.9547 152.054 23.372C151.44 22.7587 150.965 22.038 150.628 21.21C150.29 20.382 150.122 19.3853 150.122 18.22C150.122 15.9507 150.965 14.1567 152.652 12.838C154.338 11.5193 156.654 10.86 159.598 10.86C161.07 10.86 162.48 10.998 163.83 11.274C165.179 11.5193 166.252 11.7953 167.05 12.102L165.854 17.438C165.056 17.162 164.182 16.9167 163.232 16.702C162.312 16.4873 161.269 16.38 160.104 16.38C157.957 16.38 156.884 16.978 156.884 18.174C156.884 18.45 156.93 18.6953 157.022 18.91C157.114 19.1247 157.298 19.3393 157.574 19.554C157.85 19.738 158.218 19.9527 158.678 20.198C159.168 20.4127 159.782 20.658 160.518 20.934C162.02 21.486 163.262 22.038 164.244 22.59C165.225 23.1113 165.992 23.694 166.544 24.338C167.126 24.9513 167.525 25.6413 167.74 26.408C167.985 27.1747 168.108 28.064 168.108 29.076C168.108 31.468 167.203 33.2773 165.394 34.504C163.615 35.7307 161.085 36.344 157.804 36.344C155.657 36.344 153.863 36.16 152.422 35.792C151.011 35.424 150.03 35.1173 149.478 34.872L150.628 29.306C151.793 29.766 152.989 30.134 154.216 30.41C155.442 30.6553 156.654 30.778 157.85 30.778ZM173.23 35.7V1.10801L180.084 0.00401115V11.596C180.544 11.4427 181.126 11.3047 181.832 11.182C182.568 11.0287 183.273 10.952 183.948 10.952C185.91 10.952 187.536 11.228 188.824 11.78C190.142 12.3013 191.185 13.0527 191.952 14.034C192.749 15.0153 193.301 16.1807 193.608 17.53C193.945 18.8793 194.114 20.382 194.114 22.038V35.7H187.26V22.866C187.26 20.658 186.968 19.094 186.386 18.174C185.834 17.254 184.791 16.794 183.258 16.794C182.644 16.794 182.062 16.8553 181.51 16.978C180.988 17.07 180.513 17.1773 180.084 17.3V35.7H173.23Z"
            fill="white"
          />
        </svg>
        <Box mt={"16px"}>
          <Text fontSize={"18px"} fontFamily={"system-ui"}>
            The internet’s source for visuals.
          </Text>
          <Text fontFamily={"system-ui"} fontSize={"18px"} mb={"20px"}>
            Powered by creators everywhere.
          </Text>
          <Box display={{ base: "none", md: "flex" }}>
            <Filter />
          </Box>
          <HStack mt={"16px"} display={{ base: "none", md: "flex" }}>
            <Text fontSize={"15px"}>Trending:</Text>

            {trending.map((item) => {
              return (
                <ChakraLink
                  fontSize={"15px"}
                  color={"#FFFFFFCC"}
                  _hover={{ color: "white" }}
                  as={Link}
                  to={item.path}
                  key={item.id}
                >
                  {item.title}
                </ChakraLink>
              );
            })}
          </HStack>
        </Box>
      </Container>
      <Text
        userSelect={"none"}
        position={"absolute"}
        color={"#FFFFFFCC"}
        bottom={"20px"}
        left={"20px"}
        display={{ base: "none", md: "flex" }}
        gap={"5px"}
      >
        Photo
        <Text color={"#FFFFFF8C"}>by</Text>
        <ChakraLink as={Link} _hover={{ color: "white" }} to={"/@bro-spenser"}>
          Spenser Sembrat
        </ChakraLink>
      </Text>
      <Text
        userSelect={"none"}
        position={"absolute"}
        bottom={"20px"}
        left={"50%"}
        transform={"translateX(-50%)"}
        display={{ base: "none", lg: "flex" }}
        gap={"5px"}
        color={"#FFFFFF8C"}
      >
        Read more about the
        <ChakraLink
          color={"#FFFFFFCC"}
          as={Link}
          _hover={{ color: "white" }}
          to={"/licence"}
        >
          Unsplash License
        </ChakraLink>
      </Text>
    </Box>
  );
};

export default Header;