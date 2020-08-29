import { GET_SELECTED_ITEMS, SELECTED_ITEMS_LOADING } from "../actions/types";
const initialState = {
    loading: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_ITEMS_LOADING:
            return { items: null }
        case GET_SELECTED_ITEMS:
            return { ...state, items: action.payload.data, loading: false }
        default:
            return state;
    }
};
