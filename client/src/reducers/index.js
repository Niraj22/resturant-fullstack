import { combineReducers } from "redux";
import Categories from "./CategoriesReducer";
import errorReducer from './errorReducers'
import authReducer from './authReducer'
import usersReducer from './usersReducer'
import itemsReducer from './itemsReducer'
export default combineReducers({
  Categories: Categories,
  error: errorReducer,
  auth: authReducer,
  users: usersReducer,
  items: itemsReducer
});
