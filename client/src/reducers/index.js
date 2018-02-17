import { combineReducers } from 'redux';
import authReducer from './authReducer';
import persistReducer from './persistReducer';
import questionReducer from './questionReducer';
import timerReducer from './timerReducer';
import pointsReducer from './pointsReducer';
import highscoreReducer from './highscoreReducer';

export default combineReducers({
  auth: authReducer,
  persist: persistReducer,
  questions: questionReducer,
  timer: timerReducer,
  points: pointsReducer,
  highscores: highscoreReducer
});
