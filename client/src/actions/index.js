import { CREATE_STREAM } from "./types";
import { GET_CATEGORIES } from "./types";
import data from "../api/data";
export const LoginUser = (formValues) => async (dispatch) => {
  const response = await data.post("/api/user/login", formValues);
  console.log(response)
  dispatch({ type: CREATE_STREAM, payload: response.data });
};
export const GetCategories = () => async (dispatch) => {
  const response = await data.get("/api/categories/all");
  dispatch({ type: GET_CATEGORIES, payload: response.data });
};
