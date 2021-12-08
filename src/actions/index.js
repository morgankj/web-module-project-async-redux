export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
import axios from 'axios';

import { API_KEY } from '../constants';

export const getTrendingGifs = () => {
    return(dispatch) => {
        dispatch(fetchStart);
        axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=20`)
            .then(res => {
                dispatch(fetchSuccess(res.data.data));
            })
            .catch(err => {
                dispatch(fetchFail(err));
            });
    }
}

export const fetchStart = () => {
    return({ type: FETCH_START });
}

export const fetchSuccess = (trendingGifs) => {
    return({ type: FETCH_SUCCESS, payload: trendingGifs });
}

export const fetchFail = (error) => {
    return({ type: FETCH_FAIL, payload: error });
}