import React, { ReactElement } from "react";
import { VStack } from "native-base";
import Header from "../../components/Header";

const AddBookForm = (): ReactElement => {
  return (
    <VStack flex={1} bg={"gray.800"} p={6}>
      <Header title={"Add new book"} />
    </VStack>
  );
};

export default AddBookForm;
