import axios from "axios";
import {
  GET_CATEGORIES,
  CATEGORIES_LOADING,
  ADD_CATEGORIES,
  DELETE_CATEGORIES,
} from "./types";
import { returnErrors } from "./errorActions";
import { tokenConfig } from "./authActions";
export const GetCategories = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios
    .get("/api/categories")
    .then((res) =>
      dispatch({
        type: GET_CATEGORIES,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const addCategory = (item) => (dispatch, getState) => {
  axios
    .post("/api/categories", item, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: ADD_CATEGORIES,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const deleteCategory = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/categories/${id}`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: DELETE_CATEGORIES,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const setItemsLoading = () => {
  return {
    type: CATEGORIES_LOADING,
  };
};
