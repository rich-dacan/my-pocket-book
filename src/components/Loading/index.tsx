import { Center, Spinner } from "native-base";
import React, { ReactElement } from "react";

const Loading = (): ReactElement => {
  return (
    <Center flex={1} bg="gray.700">
      <Spinner color="yellow.700" size={"lg"} />
    </Center>
  );
};

export default Loading;
