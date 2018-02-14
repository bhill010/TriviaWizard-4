import { combineReducers } from 'redux';
import authReducer from './authReducer';
import persistReducer from './persistReducer';

export default combineReducers({
  auth: authReducer,
  persist: persistReducer
});
