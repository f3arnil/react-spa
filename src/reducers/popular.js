import {
    STATUS_ERROR,
    STATUS_LOADING,
    STATUS_DONE,
    GET_POPULAR_REQUEST,
    GET_POPULAR_SUCCESS,
    GET_POPULAR_FAILURE,
} from '../actions/actionConstants';

export const popular = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_POPULAR_FAILURE:
            return {
                ...state,
                status: STATUS_ERROR
            };

        case GET_POPULAR_REQUEST:
            return {
                ...state,
                status: STATUS_LOADING
            };

        case GET_POPULAR_SUCCESS:
            return {
                ...state,
                status: STATUS_DONE,
                items: payload
            };

        default:
            return state;
    }
};
