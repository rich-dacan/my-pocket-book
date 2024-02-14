import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import AppRouter from "./AppRouter";
import SignIn from "../screens/SignIn";

const Routes = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<boolean>(false);

  return (
    <NavigationContainer>
      {!user ? <AppRouter /> : <SignIn />}
    </NavigationContainer>
  );
};

export default Routes;
