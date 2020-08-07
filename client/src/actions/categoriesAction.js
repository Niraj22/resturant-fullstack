import axios from 'axios'
import { GET_CATEGORIES, CATEGORIES_LOADING } from './types'
import { returnErrors } from './errorActions'
export const GetCategories = () => dispatch => {
    dispatch(setItemsLoading())
    axios.get('/api/categories').then(res => dispatch({
        type: GET_CATEGORIES,
        payload: res.data
    }
    ))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))

}

export const setItemsLoading = () => {
    return {
        type: CATEGORIES_LOADING,
    }
}