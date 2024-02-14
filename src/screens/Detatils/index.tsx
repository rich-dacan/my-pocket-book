import React, { ReactElement } from "react";
import { VStack } from "native-base";
import Header from "../../components/Header";

const Details = (): ReactElement => {
  return (
    <VStack flex={1} bg={"gray.800"} p={6}>
      <Header title={"Book details"} />
    </VStack>
  );
};

export default Details;
