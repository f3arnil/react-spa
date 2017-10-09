import {
    GET_SIGN_REQUEST,
    GET_SIGN_SUCCESS,
    GET_SIGN_FAILURE,
} from './actionConstants';
import { SubmissionError } from 'redux-form';

const getSignRequest = () => {
    return {
        type: GET_SIGN_REQUEST
    };
};

const getSignSuccess = (users) => {
    return {
        type: GET_SIGN_SUCCESS,
        payload: users
    };
};

const getSignFailure = (error) => {
    return {
        type: GET_SIGN_FAILURE,
        payload: error
    };
};

export const getSign = (values, dispatch) => {
    const url = './data.json';

    dispatch(getSignRequest());

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            return response;
        })
        .then((response) => response.json())
        .then((users) => {
            const usersArr = (users.users).map((user) => user.email);
            if(!usersArr.includes(values.username)) {
                throw new SubmissionError({
                    _error: 'Login failed, user with such email does not exist'
                });
            } else users.users.map((user) => {
                if (user.email === values.username) {
                    if (!(user.password === values.password)) {
                        throw new SubmissionError({
                            _error: 'Login failed, wrong password!'
                        });
                    } else {
                        dispatch(getSignSuccess(user));
                    }
                }
            });
        })
        .catch((response) => dispatch(getSignFailure(response)));
};
