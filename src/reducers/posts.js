import _ from "lodash";

import { FETCH_POSTS, FETCH_POST } from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      const data = action.payload.data;
      return {
        ...state,
        [data.id]: data
      };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}
