import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import MainStackParamList from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type DetailsProps = NativeStackScreenProps<MainStackParamList>;

const TodoDetails = ({ navigation }: DetailsProps) => {
  return (
    <View
      style={{ height: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <Text>Details</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text
          style={{
            backgroundColor: "green",
            borderWidth: 0,
            padding: 10,
            borderRadius: 10,
          }}
        >
          Ini Tombol
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoDetails;
const style = StyleSheet.create({});
