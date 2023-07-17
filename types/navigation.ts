import { NavigationProp, Route } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type MainStackParamList = {
  Home: undefined;
  TodoDetails: undefined;
  News: undefined;
  NewsDetails: {
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
  NewsScreen: undefined;
};

export default MainStackParamList;

// export type ComponentNavigationProps={
//   navigation: NavigationProp<Route>
// }
