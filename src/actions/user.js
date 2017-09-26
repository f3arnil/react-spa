import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
} from './actionConstants';

const url = '/data.json';

const getUserRequest = () => {
    return {
        type: GET_USER_REQUEST
    };
};

const getUserSuccess = (user) => {
    return {
        type: GET_USER_SUCCESS,
        payload: user
    };
};

const getUserFailure = () => {
    return {
        type: GET_USER_FAILURE
    };
};

export const loadUser = (userId) => {
    return (dispatch) => {
        dispatch(getUserRequest());

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((response) => {
                response.users.map((user) => {
                    if (userId == user.id) {
                        dispatch(getUserSuccess(user));
                    }
                });
            })
            .catch((response) => dispatch(getUserFailure(response)));
    };
};
