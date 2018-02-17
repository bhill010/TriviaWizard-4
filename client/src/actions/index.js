import axios from "axios";
import {
  REGISTER,
  REGISTER_FAILED,
  LOGIN,
  LOGIN_FAILED,
  LOGOUT,
  CLEAR_AUTH_ERRORS,
  FETCH_QUESTIONS,
  FETCH_QUESTION,
  DELETE_QUESTION,
  TIMER_START,
  TIMER_RESET,
  TIMER_STOP,
  POINTS_GAIN,
  POINTS_RESET,
  CREATE_HIGHSCORE,
  UPDATE_HIGHSCORE,
  FETCH_HIGHSCORES
} from "./types";

const ROOT_URL = `https://qriusity.com/v1/questions`;
const PAGE_NUMBER = Math.floor(Math.random() * 2000);

export const register = (username, password, cb) => {
  return dispatch => {
    axios
      .post("/api/register", { username, password })
      .then(response => {
        dispatch({ type: REGISTER, payload: response.data });
        cb("/");
      })
      .catch(err => {
        dispatch({ type: REGISTER_FAILED, payload: err.response.data });
        cb("/register");
      });
  };
};

export const login = (username, password, cb) => {
  return dispatch => {
    axios
      .post("/api/login", { username, password })
      .then(response => {
        dispatch({ type: LOGIN, payload: response.data });
        cb("/gamemode");
      })
      .catch(err => {
        dispatch({ type: LOGIN_FAILED, payload: err.response.data });
        cb("/login");
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
      cb("/");
    });
  };
};

export const fetchQuestions = (pageNumber = PAGE_NUMBER) => {
  return dispatch => {
    axios.get(`${ROOT_URL}?page=${pageNumber}&limit=5`).then(response => {
      dispatch({ type: FETCH_QUESTIONS, payload: response });
    });
  };
};

export const fetchQuestion = id => {
  return dispatch => {
    axios.get(`${ROOT_URL}/${id}`).then(response => {
      dispatch({ type: FETCH_QUESTION, payload: response });
    });
  };
};

export const deleteQuestion = id => {
  return dispatch => {
    dispatch({ type: DELETE_QUESTION, payload: id });
  };
};

let timer = null;
export const timerStart = () => {
  // clearInterval(timer);
  return dispatch => {
    timer = setInterval(() => {
      dispatch({ type: TIMER_START });
    }, 1000);
  };
};

export const timerStop = () => {
  clearInterval(timer);
  return dispatch => {
    dispatch({ type: TIMER_STOP });
  };
};

export const timerReset = () => {
  return dispatch => {
    dispatch({ type: TIMER_RESET });
  };
};

export const pointsGain = () => {
  return dispatch => {
    dispatch({ type: POINTS_GAIN });
  };
};

export const pointsReset = () => {
  return dispatch => {
    dispatch({ type: POINTS_RESET });
  };
};

export const createHighScore = (highscore, ownerID, username) => {
  console.log("create high score action score :", highscore);
  return dispatch => {
    axios
      .post(`/api/user/${ownerID}/highscores`, { highscore, ownerID, username })
      .then(response => {
        dispatch({ type: CREATE_HIGHSCORE, payload: response.data });
      });
  };
};

export const updateHighScore = (highscore, ownerID, cb = null) => {
  console.log("update high score action called...");
  return dispatch => {
    axios
      .put(`/api/user/${ownerID}/highscores`, { highscore })
      .then(response => {
        console.log("update high score action response: ", response.data);
        dispatch({ type: UPDATE_HIGHSCORE, payload: response.data });
      });
  };
};

export const fetchHighScores = () => {
  return dispatch => {
    axios.get("/api/highscores").then(response => {
      dispatch({ type: FETCH_HIGHSCORES, payload: response.data });
    });
  };
};
