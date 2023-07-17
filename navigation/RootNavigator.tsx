import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MainStack from "./MainStack";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default RootNavigator;

const style = StyleSheet.create({});
