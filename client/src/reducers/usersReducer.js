import { USERS_LOADED } from "../actions/types";
const initialState = {
    loading: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case USERS_LOADED:
            return { ...state, users: action.payload, loading: false }
        default:
            return state;
    }
};
