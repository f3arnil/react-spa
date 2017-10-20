import {
    STATUS_ERROR,
    STATUS_LOADING,
    STATUS_DONE,
    GET_COMMENTS_REQUEST,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILURE,
} from 'actions/actionConstants';

export const comments = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_COMMENTS_FAILURE:
            return {
                ...state,
                status: STATUS_ERROR
            };

        case GET_COMMENTS_REQUEST:
            return {
                ...state,
                status: STATUS_LOADING
            };

        case GET_COMMENTS_SUCCESS:
            return {
                ...state,
                status: STATUS_DONE,
                items: payload
            };

        case ADD_COMMENT_FAILURE:
            return {
                ...state,
                status: STATUS_ERROR
            };

        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                status: STATUS_LOADING
            };

        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                status: STATUS_DONE,
                items: payload
            };

        default:
            return state;
    }
};
