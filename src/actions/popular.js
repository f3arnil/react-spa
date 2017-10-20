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
                const populars = response.posts
                    .sort((a, b) => b.views - a.views)
                    .slice(0, 3);
                return dispatch(getPopularSuccess(populars));
            })
            .catch((response) => dispatch(getPopularFailure(response)));
    };
};
