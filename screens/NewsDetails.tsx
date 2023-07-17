import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import MainStackParamList from "../types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type NavigationProps = NativeStackNavigationProp<MainStackParamList>;

const NewsDetails = () => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View
      style={{ height: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <Text>News Details</Text>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text
          style={{
            backgroundColor: "red",
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

export default NewsDetails;
const style = StyleSheet.create({});
