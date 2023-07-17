import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
//import home
import Home from "../screens/Home";
import Details from "../screens/TodoDetails";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import News from "../screens/News";
import NewsDetails from "../screens/NewsDetails";
import TodoDetails from "../screens/TodoDetails";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {/*screen here */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={"black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name={focused ? "newspaper" : "newspaper-outline"}
              size={size}
              color={"black"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={BottomTabNavigator} />
      <Stack.Screen name="TodoDetails" component={TodoDetails} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
    </Stack.Navigator>
  );
};

export default MainStack;

const style = StyleSheet.create({});
