import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const TopNewsUrl =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=a3b3c67033654067ad569de67bcda5dd";

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

export const useTopNews = () => {
  const TopNews = async () => {
    const response = await axios.get<Response>(TopNewsUrl);
    console.log(response.data);
    return response.data;
  };

  return useQuery(["TopNews"], TopNews);
};
