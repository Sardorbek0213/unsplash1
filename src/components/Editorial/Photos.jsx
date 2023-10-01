import { Box, Container, Image } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const Photos = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      await axios
        .get(
          "https://api.unsplash.com/photos/?client_id=uZnOv7oKqt__dw2HC3r0ply4Rcnjp2v_cUDLQ5QeGqA"
        )
        .then((res) => setData(res.data));
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container
      maxW={"1320px"}
      px={"20px"}
      className={"masonry"}
      marginTop={"48px"}
      gap={"24px"}
      pb={'50px'}
    >
      {data.map((item) => {
        return (
          <Image
            key={item.id}
            objectFit={"cover"}
            w={"100%"}
            src={item.urls.regular}
            mb={"24px"}
            draggable={"false"}
            userSelect={"none"}
          />
        );
      })}
    </Container>
  );
};

export default Photos;
