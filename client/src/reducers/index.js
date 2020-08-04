import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import Categories from "./getCategoriesReducer";
export default combineReducers({
  Categories: Categories,
  form: formReducer,
});
