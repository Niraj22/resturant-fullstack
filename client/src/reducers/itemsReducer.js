import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";
const initialState = {
    loading: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return { ...state, items: action.payload, loading: false }
        case ADD_ITEM:
            return { ...state, items: [...state.items, action.payload], loading: false }
        case DELETE_ITEM:
            return { ...state, items: action.payload, loading: false }
        default:
            return state;
    }
};
