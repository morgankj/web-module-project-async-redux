export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
import axios from 'axios';

export const getTrendingGifs = () => {
    return(dispatch) => {
        dispatch(fetchStart);
        axios.get(`http://dragon-age-api.herokuapp.com/api/v1/characters?perPage=40`)
            .then(res => {
                dispatch(fetchSuccess(res.data));
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