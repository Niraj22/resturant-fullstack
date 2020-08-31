import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "../actions/types";
const initialState = {
    loading: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_ITEMS:
            return { ...state, items: action.payload.data, loading: false, count: action.payload.count, pagination: action.payload.pagination, total: action.payload.total }
        case ADD_ITEM:
            return { ...state, items: [...state.items, action.payload], loading: false }
        case DELETE_ITEM:
            return { ...state, items: action.payload, loading: false }
        default:
            return state;
    }
};
