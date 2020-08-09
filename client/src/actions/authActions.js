import axios from 'axios'
import { returnErrors } from './errorActions'
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS
} from './types'

//*check token and load user
export const loadUser = () => (dispatch, getState) => {
    //user loading
    dispatch({ type: USER_LOADING })

    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({ type: AUTH_ERROR })
        });
}

//*log in user
export const login = ({ email, password }) => dispatch => {
    //headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    //request body
    const body = JSON.stringify({ email, password })
    axios.post('/api/auth', body, config).then(res => dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
    }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'))
            dispatch({
                type: LOGIN_FAIL
            })
        })

}

//*logout user 
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}



//!setup config headers and token
export const tokenConfig = getState => {
    //get token from local storage
    const token = getState().auth.token
    //add it to the header
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    //if there is a token add to header
    if (token) {
        config.headers['x-auth-token'] = token;
    }
    return config
}