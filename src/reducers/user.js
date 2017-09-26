import {
    STATUS_ERROR,
    STATUS_LOADING,
    STATUS_DONE,
    GET_SIGN_REQUEST,
    GET_SIGN_SUCCESS,
    GET_SIGN_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
} from 'actions/actionConstants';

export const session = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_SIGN_FAILURE:
            return {
                ...state,
                status: STATUS_ERROR,
                data: payload
            };

        case GET_SIGN_REQUEST:
            return {
                ...state,
                status: STATUS_LOADING
            };

        case GET_SIGN_SUCCESS:
            return {
                ...state,
                status: STATUS_DONE,
                data: payload
            };
        default:
            return state;
    }
};

export const user = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_USER_FAILURE:
            return {
                ...state,
                status: STATUS_ERROR
            };

        case GET_USER_REQUEST:
            return {
                ...state,
                status: STATUS_LOADING
            };

        case GET_USER_SUCCESS:
            return {
                ...state,
                status: STATUS_DONE,
                data: payload
            };

        default:
            return state;
    }
};
