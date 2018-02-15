import { combineReducers } from 'redux';
import authReducer from './authReducer';
import persistReducer from './persistReducer';
import questionReducer from './questionReducer';
import timerReducer from './timerReducer';

export default combineReducers({
  auth: authReducer,
  persist: persistReducer,
  questions: questionReducer,
  timer: timerReducer
});
