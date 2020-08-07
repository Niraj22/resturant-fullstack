import { combineReducers } from "redux";
import Categories from "./getCategoriesReducer";
import errorReducer from './errorReducers'
import authReducer from './authReducer'
export default combineReducers({
  Categories: Categories,
  error: errorReducer,
  auth: authReducer
});
