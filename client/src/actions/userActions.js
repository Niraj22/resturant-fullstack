import axios from 'axios'
import { USERS_LOADING, USERS_LOADED, ADD_USER, DELETE_USER } from './types'
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

export const addUser = (item) => (dispatch, getState) => {
    axios.post('/api/users', item, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: ADD_USER,
                payload: res.data
            })
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const deleteUser = (id) => (dispatch, getState) => {
    axios.delete(`/api/users/${id}`, tokenConfig(getState))
        .then(res => dispatch({
            type: DELETE_USER,
            payload: id
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const setItemsLoading = () => {
    return {
        type: USERS_LOADING,
    }
}