import { combineReducers } from 'redux';
import authReducer from './authReducer';
import persistReducer from './persistReducer';
import questionReducer from './questionReducer';

export default combineReducers({
  auth: authReducer,
  persist: persistReducer,
  questions: questionReducer
});
