import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";

const Filter = () => {
  return (
    <Box as="form" w={"100%"}>
      <InputGroup>
        <InputLeftElement cursor={"pointer"}>
          <Tooltip
            label={"Search Unsplash"}
            bg="rgb(56, 56, 56)"
            color="white"
            hasArrow
            placement="bottom-start"
            w={"100px"}
            h={"20px"}
            fontSize={"11px"}
          >
            <Button
              bg={"transparent"}
              borderRadius={"24px"}
              _hover={{ background: "transparent" }}
              type={"submit"}
            >
              <SearchIcon color={"#767676"}/>
            </Button>
          </Tooltip>
        </InputLeftElement>

        <Input
          focusBorderColor="transparent"
          color={'black'}
          fontFamily={"system-ui"}
          fontSize={"15px"}
          className="placeholder"
          borderRadius={"24px"}
          outline={"none"}
          border={"0.5px solid transparent"}
          bg={"#EEEEEE"}
          w={"100%"}
          placeholder={"Search high-resolution images"}
          required
        />
      </InputGroup>
    </Box>
  );
};

export default Filter;
