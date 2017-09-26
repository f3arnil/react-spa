import {
    STATUS_ERROR,
    STATUS_LOADING,
    STATUS_DONE,
    GET_TAGS_REQUEST,
    GET_TAGS_SUCCESS,
    GET_TAGS_FAILURE,
} from 'actions/actionConstants';

export const tags = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_TAGS_FAILURE:
            return {
                ...state,
                status: STATUS_ERROR
            };

        case GET_TAGS_REQUEST:
            return {
                ...state,
                status: STATUS_LOADING
            };

        case GET_TAGS_SUCCESS:
            return {
                ...state,
                status: STATUS_DONE,
                items: payload
            };

        default:
            return state;
    }
};
