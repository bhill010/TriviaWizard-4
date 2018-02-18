import _ from "lodash";
import {
  FETCH_QUESTIONS,
  FETCH_QUESTION,
  DELETE_QUESTION
} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_QUESTION:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_QUESTIONS:
      return _.mapKeys(action.payload.data, "id");
    case DELETE_QUESTION:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
