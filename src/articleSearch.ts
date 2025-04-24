import axios from "axios";
import { Images } from "./components/App/App.types";

export const fetchArticles = async (
  search: string,
  currentPage: number
): Promise<Images[]> => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query: search,
      client_id: "Ewp05EUG89SyiK4LzjpwiPOBgXjxifFsUZCZAkufwuo",
      page: currentPage,
      per_page: 12,
    },
  });
  return response.data.results;
};
