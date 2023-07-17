import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useGetNews } from "../Components/GetNews";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import MainStackParamList from "../types/navigation";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";

import Ionicons from "react-native-vector-icons/Ionicons";
import TopNews from "../Components/Headlines";

type NavigationProps = NativeStackNavigationProp<MainStackParamList>;

const News = () => {
  const { data, isLoading } = useGetNews();
  const navigation = useNavigation<NavigationProps>();
  const getContent = () => {
    return <ActivityIndicator size="small" />;
  };

  if (isLoading) {
    return (
      <View
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {getContent()}
      </View>
      // <Text style={{ justifyContent: "center", alignItems: "center" }}>
      //   Loading..
      // </Text>
    );
  }

  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <View
        style={{
          paddingBottom: 10,
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>News App</Text>
        <Ionicons
          name={"search"}
          size={30}
          color={"black"}
          style={{ marginTop: 10 }}
        />
      </View>
      {/* {data?.map((item) => (
        <View>
          <Text>{JSON.stringify(item)}</Text>
        </View>
      ))} */}

      {/*  Call TopNews */}
      <View>
        <TopNews />
      </View>

      <Text
        style={{
          color: "grey",
          fontSize: 20,
          fontWeight: "bold",
          paddingHorizontal: 20,
          paddingTop: 20,
        }}
      >
        Populer News
      </Text>
      <FlatList
        data={data?.articles}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("NewsDetails", {
                title: item.title,
                author: item.author,
                content: item.author,
                description: item.description,
                publishedAt: item.publishedAt,
                source: item.source,
                url: item.url,
                urlToImage: item.urlToImage,
              })
            }
          >
            <View
              style={{
                margin: 10,
                padding: 10,
                borderRadius: 10,
                flexDirection: "row",
                height: 150,
              }}
            >
              <Image
                source={{
                  uri: item.urlToImage,
                }}
                style={{
                  width: "35%",
                  height: "100%",
                  alignSelf: "center",
                  borderRadius: 20,
                  marginVertical: 15,
                }}
              />
              <View style={{ marginHorizontal: 15, width: "50%" }}>
                <Text>{item.author}</Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    // alignSelf: "center",
                    marginVertical: 2,
                  }}
                  numberOfLines={4}
                >
                  {item.title}
                </Text>
                <Text>{item.publishedAt}</Text>

                {/* <Text
                  numberOfLines={7}
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  {item.description}
                </Text> */}
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.title}
      />
      {/* <APIs /> */}
    </View>
  );
};

export default News;

const style = StyleSheet.create({});
