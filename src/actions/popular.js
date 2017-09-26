import {
    GET_POPULAR_REQUEST,
    GET_POPULAR_SUCCESS,
    GET_POPULAR_FAILURE,
} from './actionConstants';

const url = '/data.json';

const getPopularRequest = () => {
    return {
        type: GET_POPULAR_REQUEST
    };
};

const getPopularSuccess = (populars) => {
    return {
        type: GET_POPULAR_SUCCESS,
        payload: populars
    };
};

const getPopularFailure = () => {
    return {
        type: GET_POPULAR_FAILURE
    };
};

export const getPopular = () => {
    return (dispatch) => {
        dispatch(getPopularRequest());

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((response) => {
                const populars = response.posts;
                const sorted = populars.slice(0);
                sorted.sort((a, b) => {
                    return b.views - a.views;
                });
                const top = sorted.slice(0, 3);
                return dispatch(getPopularSuccess(top));
            })
            .catch((response) => dispatch(getPopularFailure(response)));
    };
};
