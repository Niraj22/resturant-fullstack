import { GET_ITEMS, ADD_ITEM } from "../actions/types";
const initialState = {
    loading: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return { ...state, items: action.payload, loading: false }
        case ADD_ITEM:
            return state

        default:
            return state;
    }
};
