import React from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold_Italic,
} from "@expo-google-fonts/roboto";
import { Text } from "react-native";

const App = (): JSX.Element => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold_Italic,
  });

  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Text>Open up App.tsx to start working on your app!</Text>
    </NativeBaseProvider>
  );
};

export default App;
