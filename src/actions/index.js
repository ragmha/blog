import axios from "axios";

import { FETCH_POSTS, ROOT_URL, API_KEY } from "../constants";

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  console.log("Request: ", request);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
