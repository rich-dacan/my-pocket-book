import React from "react";
import { Heading, NativeBaseProvider, StatusBar, VStack } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold_Italic,
} from "@expo-google-fonts/roboto";
import { THEME } from "./src/styles/theme";
import Loading from "./src/components/Loading";
import Routes from "./src/routes";

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

      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
};

export default App;
