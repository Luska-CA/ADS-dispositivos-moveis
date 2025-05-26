import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import SearchNavigator from "./SearchNavigator";

const Tab = createBottomTabNavigator();

function MainNavigator() {
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="Inicio"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Busca"
      component={SearchNavigation}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="search" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>;
}

export default MainNavigator;
