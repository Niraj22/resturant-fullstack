import axios from 'axios'
import { GET_ITEMS, ADD_ITEM, ITEMS_LOADING } from './types'
import { returnErrors } from './errorActions'
import { tokenConfig } from './authActions'
export const GetItems = (page = 1) => dispatch => {
    dispatch(setItemsLoading())
    axios.get(`/api/items/?page=${page}&limit=6`).then(res =>
        dispatch({
            type: GET_ITEMS,
            payload: res.data
        }
        )
    )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}
export const PostItem = (item) => (dispatch, getState) => {
    axios.post('/api/items', item, tokenConfig(getState))
        .then(res => dispatch({
            type: ADD_ITEM,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}