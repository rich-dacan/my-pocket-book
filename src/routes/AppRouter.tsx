import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

const AppRouter = () => {
  return (
    <Navigator>
      <Screen name="home" component={Home} />
    </Navigator>
  );
};

export default AppRouter;
