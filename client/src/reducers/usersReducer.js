import { USERS_LOADED, ADD_USER, DELETE_USER, USERS_LOADING } from "../actions/types";
const initialState = {
    loading: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case USERS_LOADING:
            return {
                ...state,
                loading: true
            }
        case USERS_LOADED:
            return { ...state, users: action.payload, loading: false }

        case ADD_USER:
            return {
                users: [...state.users, action.payload], loading: false
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user._id !== action.payload)
            }
        default:
            return state;
    }
};
