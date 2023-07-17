import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTopNews } from "./GetHeadline";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import MainStackParamList from "../types/navigation";

type NavigationProps = NativeStackNavigationProp<MainStackParamList>;

const TopNews = () => {
  const { data, isLoading } = useTopNews();
  const navigation = useNavigation<NavigationProps>();
  if (isLoading) {
    return (
      <View
        style={{
          height: "50%",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    );
  }

  return (
    <View style={{}}>
      <Text
        style={{
          color: "grey",
          fontSize: 20,
          fontWeight: "bold",
          paddingHorizontal: 20,
        }}
      >
        Top Headlines
      </Text>
      <FlatList
        horizontal
        data={data?.articles.slice(10)}
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
                marginLeft: 20,
                padding: 10,
                borderRadius: 10,
                flexDirection: "row",
                height: 170,
                width: 300,
                borderWidth: 0.2,
              }}
            >
              <Image
                source={{
                  uri: item.urlToImage,
                }}
                style={{
                  width: 120,
                  height: 130,
                  alignSelf: "center",
                  borderRadius: 10,
                  marginVertical: 15,
                }}
              />
              <View style={{ padding: 10, maxWidth: 160 }}>
                <Text numberOfLines={1}>{item.author}</Text>
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
                <Text numberOfLines={1}>{item.publishedAt}</Text>

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

export default TopNews;
