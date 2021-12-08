import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions';

const initialState = {
    trendingGifs: [],
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_START):
            return({
                ...state,
                trendingGifs: [],
                isFetching: true,
                error: ''
            })
        case(FETCH_SUCCESS):
            return({
                ...state,
                trendingGifs: action.payload,
                isFetching: false,
                error: ''
            })
        case(FETCH_FAIL):
            return({
                ...state,
                trendingGifs: [],
                isFetching: false,
                error: action.payload
            })
        default:
            return state;
    }
};