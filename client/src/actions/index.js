import axios from "axios";
import {
  REGISTER,
  REGISTER_FAILED,
  LOGIN,
  LOGIN_FAILED,
  LOGOUT,
  CLEAR_AUTH_ERRORS
} from "./types";

export const register = (username, password, cb) => {
  return dispatch => {
    axios
      .post("/api/register", { username, password })
      .then(response => {
        dispatch({ type: REGISTER, payload: response.data });
        // cb("/users");
      })
      .catch(err => {
        dispatch({ type: REGISTER_FAILED, payload: err.response.data });
        // cb("/register");
      });
  };
};

export const login = (username, password, cb) => {
  return dispatch => {
    axios
      .post("/api/login", { username, password })
      .then(response => {
        dispatch({ type: LOGIN, payload: response.data });
        // cb("/users");
      })
      .catch(err => {
        dispatch({ type: LOGIN_FAILED, payload: err.response.data });
        // cb("/login");
      });
  };
};

export const clearAuthErrors = () => {
  return dispatch => {
    dispatch({ type: CLEAR_AUTH_ERRORS });
  };
};

export const logout = cb => {
  return dispatch => {
    axios.get("/api/logout").then(response => {
      dispatch({ type: LOGOUT, payload: response.data });
      // cb("/users");
    });
  };
};
