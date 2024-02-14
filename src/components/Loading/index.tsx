import { Center, Spinner } from "native-base";
import React, { ReactElement } from "react";

const Loading = (): ReactElement => {
  return (
    <Center flex={1} bg="gray.800">
      <Spinner color="secondary.200" size={"lg"} />
    </Center>
  );
};

export default Loading;
