import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Pages from "../pages";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDictionary } from "../hooks/useDictionary";

const Tab = createBottomTabNavigator();

export const AppRouter = () => {
  const { navigation: navigationLabel } = useDictionary();

  return (
    <Tab.Navigator initialRouteName="Feed">
      <Tab.Screen
        name="Feed"
        component={Pages.Home}
        options={{
          headerShown: false,
          tabBarLabel: navigationLabel.destinations,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="map-marker-radius"
              color={color}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Budget"
        component={Pages.Home}
        options={{
          headerShown: false,
          tabBarLabel: navigationLabel.budget,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cash" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="sobre"
        component={Pages.About}
        options={{
          headerShown: false,
          tabBarLabel: navigationLabel.aboutUs,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Pages.Home}
        options={{
          headerShown: false,
          tabBarLabel: navigationLabel.login,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
