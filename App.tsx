import React from "react";
import { Heading, NativeBaseProvider, StatusBar, VStack } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold_Italic,
} from "@expo-google-fonts/roboto";
import { THEME } from "./src/styles/theme";
import Loading from "./src/components/Loading";

const App = (): JSX.Element => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold_Italic,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? (
        <VStack flex={1} bg={"gray.700"} alignItems={"center"} px={8} py={24}>
          <Heading color="gray.100" size="4xl" mt={20} mb={6}>
            Welcome to NativeBase!
          </Heading>
        </VStack>
      ) : (
        <Loading />
      )}
    </NativeBaseProvider>
  );
};

export default App;
