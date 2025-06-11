import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { RootStackParamList, DrawerParamList } from "./types";

import HomeScreen from "./screens/HomeScreen";
import RecipeScreen from "./screens/RecipeScreen";
import SearchScreen from "./screens/SearchScreen";
import MyRecipesScreen from "./screens/MyRecipesScreen";
import RecipesCategoryScreen from "./screens/RecipesCategoryScreen";
import Header from "./components/Header";
import HeaderBack from "./components/HeaderBack";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import favorites from "./reducers/favorites";

const store = configureStore({
  reducer: { favorites },
});

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Search"
      screenOptions={{
        header: (props) => <Header {...props} />,
        drawerActiveTintColor: "#655074",
        drawerType: "back",
      }}
    >
      <Drawer.Screen name="Search" component={SearchScreen} />
      <Drawer.Screen name="My recipes" component={MyRecipesScreen} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Recipe"
            component={RecipeScreen}
            options={{ header: (props) => <HeaderBack {...props} /> }}
          />
          <Stack.Screen
            name="Category"
            component={RecipesCategoryScreen}
            options={{ header: (props) => <HeaderBack {...props} /> }}
          />
          <Stack.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
