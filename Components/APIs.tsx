import React, { FC, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  ScrollView,
} from "react-native";
import axios from "axios";

type Article = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
type Response = {
  status: string;
  totalResults: number;
  articles: Article[];
};
export default function APIs() {
  const [data, setData] = useState<Article[]>([]);
  const baseURL = "https://newsapi.org/v2";
  const getAPI = () => {
    axios<Response>({
      method: "GET",
      url: `${baseURL}/everything?q=bitcoin&apiKey=a3b3c67033654067ad569de67bcda5dd`,
    })
      .then((res) => setData(res.data.articles))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <View>
      <Text>APIs</Text>
      <Button title="GET" onPress={getAPI} />
      {data.length > 0 && (
        <FlatList
          data={data}
          ListEmptyComponent={() => <Text> No Data</Text>}
          renderItem={({ item }) => (
            <View>
              <Text>Id:{item.title}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      {/* <ScrollView>
        {data.map((item, index) => {
          return (
            <View key={item.title}>
              <Text>{item.title}</Text>
            </View>
          );
        })}
      </ScrollView> */}
    </View>
  );
}
