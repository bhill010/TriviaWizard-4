import _ from "lodash";
import { CREATE_HIGHSCORE, FETCH_HIGHSCORES } from "../actions/types";

const defaultState = {
  highscores: []
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case CREATE_HIGHSCORE:
      var newState = state.highscores;
      newState.push(action.payload);
      newState = _.merge({}, state, newState);
      return newState;
    case FETCH_HIGHSCORES:
      var newState = _.merge({}, state, { highscores: action.payload });
      return newState;
    default:
      return state;
  }
}
