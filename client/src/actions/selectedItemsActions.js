import axios from 'axios'
import { GET_SELECTED_ITEMS, SELECTED_ITEMS_LOADING } from './types'
import { returnErrors } from './errorActions'
export const GetItems = (id) => dispatch => {
    dispatch(setItemsLoading())
    axios.get(`/api/items/${id}`).then(res =>
        dispatch({
            type: GET_SELECTED_ITEMS,
            payload: res.data
        }
        )
    )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const setItemsLoading = () => {
    return {
        type: SELECTED_ITEMS_LOADING
    }
}