import axios from "axios";

import { FETCH_POSTS, CREATE_POST, ROOT_URL, API_KEY } from "../constants";

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);
  return {
    type: CREATE_POST,
    payload: request
  };
}
