import React, { ReactElement, useState } from "react";
import {
  HStack,
  Heading,
  IconButton,
  Image,
  VStack,
  useTheme,
} from "native-base";

import Logo from "../../assets/book-logo.png";
import { SignOut } from "phosphor-react-native";
import Filter from "../../components/Filters";

const Home = (): ReactElement => {
  const { colors } = useTheme();
  const [statusSelected, setStatusSelected] = useState<"reading" | "finished">(
    "reading"
  );

  return (
    <VStack flex={1} bg={"gray.800"} alignItems={"center"} px={8} py={24}>
      <HStack
        w="full"
        h={18}
        justifyContent="space-between"
        alignItems={"center"}
        bg={"gray.800"}
        borderBottomWidth={1}
        borderBottomStyle={"solid"}
        borderBottomColor={"gray.700"}
        // pt={6}
        pb={8}
        px={6}
      >
        <Image source={Logo} alt="Logo" resizeMode="contain" size={"sm"} />

        <IconButton
          icon={<SignOut size={28} color={colors.secondary[100]} />}
          onPress={() => {
            console.log("Sign Out");
          }}
        />
      </HStack>

      <HStack space={3} my={8}>
        <Filter
          title="Reading"
          type="reading"
          isActive={statusSelected === "reading"}
        />
        <Filter title="Finished" type="finished" />
      </HStack>

      <Heading color={"#fff"} my={8}>
        Home
      </Heading>
    </VStack>
  );
};

export default Home;
