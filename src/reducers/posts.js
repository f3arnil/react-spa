import {
    STATUS_ERROR,
    STATUS_LOADING,
    STATUS_DONE,
    GET_POST_REQUEST,
    GET_POST_SUCCESS,
    GET_POST_FAILURE,
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE,
    GET_PAGEPOSTS_REQUEST,
    GET_PAGEPOSTS_SUCCESS,
    GET_PAGEPOSTS_FAILURE,
} from 'actions/actionConstants';

export const post = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_POST_FAILURE:
            return {
                ...state,
                status: STATUS_ERROR
            };

        case GET_POST_REQUEST:
            return {
                ...state,
                status: STATUS_LOADING
            };

        case GET_POST_SUCCESS:
            return {
                ...state,
                status: STATUS_DONE,
                items: payload
            };

        default:
            return state;
    }
};

export const posts = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_POSTS_FAILURE:
            return {
                ...state,
                status: STATUS_ERROR
            };

        case GET_POSTS_REQUEST:
            return {
                ...state,
                status: STATUS_LOADING
            };

        case GET_POSTS_SUCCESS:
            return {
                ...state,
                status: STATUS_DONE,
                items: payload
            };

        default:
            return state;
    }
};

export const pageposts = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_PAGEPOSTS_FAILURE:
            return {
                ...state,
                status: STATUS_ERROR
            };

        case GET_PAGEPOSTS_REQUEST:
            return {
                ...state,
                status: STATUS_LOADING
            };

        case GET_PAGEPOSTS_SUCCESS:
            return {
                ...state,
                status: STATUS_DONE,
                items: payload
            };

        default:
            return state;
    }
};
