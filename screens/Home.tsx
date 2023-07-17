import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import MainStackParamList from "../types/navigation";
import { Colors } from "react-native/Libraries/NewAppScreen";
import TodoList from "../Components/TodoList";

type HomeProps = NativeStackScreenProps<MainStackParamList>;
const Home = ({ navigation }: HomeProps) => {
  return (
    <View style={style.container}>
      <TodoList />
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: "100%",
    width: "100%",
  },
  Buttons: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#A1C2F1",
    width: "100%",
  },
  Button: {
    backgroundColor: "grey",
    borderRadius: 10,
    maxWidth: 150,
    height: 40,
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    bottom: 0,
  },
});
