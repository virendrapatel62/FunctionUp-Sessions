import { api } from "./api";

export function fetchTweets() {
  return api.get("/tweets.json").then((response) => response.data);
}
