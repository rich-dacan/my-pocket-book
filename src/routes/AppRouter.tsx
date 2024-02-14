import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Details from "../screens/Detatils";
import AddBookForm from "../screens/AddBookForm";

const { Navigator, Screen } = createNativeStackNavigator();

const AppRouter = () => {
  return (
    <Navigator>
      <Screen name="home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="book-details"
        component={Details}
        options={{ headerShown: false }}
      />
      <Screen
        name="add-book"
        component={AddBookForm}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default AppRouter;
