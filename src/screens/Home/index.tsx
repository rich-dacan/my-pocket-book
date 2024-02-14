import { Heading, VStack } from "native-base";
import React, { ReactElement } from "react";

const Home = (): ReactElement => {
  return (
    <VStack flex={1} bg={"gray.700"} alignItems={"center"} px={8} py={24}>
      <Heading color={"#fff"} mb={8}>
        Home
      </Heading>
    </VStack>
  );
};

export default Home;
