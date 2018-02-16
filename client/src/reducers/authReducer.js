import {
  REGISTER,
  REGISTER_FAILED,
  LOGIN,
  LOGIN_FAILED,
  LOGOUT,
  CLEAR_AUTH_ERRORS,
  UPDATE_HIGHSCORE
} from "../actions/types";

import _ from "lodash";

const defaultState = {
  user: {},
  loggedIn: false,
  errorMessage: ""
};

export default function(state = defaultState, action) {
  Object.freeze(state);
  switch (action.type) {
    case REGISTER:
      return _.merge({}, state, {
        loggedIn: true,
        user: action.payload,
        errorMessage: ""
      });
    case REGISTER_FAILED:
      return _.merge({}, state, {
        loggedIn: false,
        user: {},
        errorMessage: action.payload
      });
    case LOGIN:
      return _.merge({}, state, {
        loggedIn: true,
        user: action.payload,
        errorMessage: ""
      });
    case LOGIN_FAILED:
      return _.merge({}, state, {
        loggedIn: false,
        user: {},
        errorMessage: action.payload
      });
    case LOGOUT:
      return _.merge({}, state, defaultState);
    case CLEAR_AUTH_ERRORS:
      return _.merge({}, state, {
        errorMessage: ""
      });
    case UPDATE_HIGHSCORE:
      console.log("reducer new score data", action.payload);
      let newHighScore = action.payload.highscore
      let newState = _.merge({}, state, {
        highscore: newHighScore
      });
      console.log("highscore reducer new state", newState);
      return newState;
    default:
      return state;
  }
}
