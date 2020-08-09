import { GET_CATEGORIES, ADD_CATEGORIES, DELETE_CATEGORIES } from "../actions/types";
const initialState = {
  loading: false
}
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...state, items: action.payload, loading: false }
    case ADD_CATEGORIES:
      return {
        ...state,
        items: [action.payload, ...state.items]
      }
    case DELETE_CATEGORIES:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      }
    default:
      return state;
  }
};
