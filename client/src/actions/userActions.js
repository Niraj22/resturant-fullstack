import axios from 'axios'
import { GET_USERS, USERS_LOADING, USERS_LOADED, ADD_USERS, DELETE_USER } from './types'
import { returnErrors } from './errorActions'
import { tokenConfig } from './authActions'
export const GetUsers = () => (dispatch, getState) => {
    dispatch(setItemsLoading())
    axios.get('/api/auth/user/all', tokenConfig(getState)).then(res => {
        dispatch({
            type: USERS_LOADED,
            payload: res.data
        }
        )
    })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const setItemsLoading = () => {
    return {
        type: USERS_LOADING,
    }
}