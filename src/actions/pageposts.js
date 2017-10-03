import {
    GET_PAGEPOSTS_REQUEST,
    GET_PAGEPOSTS_SUCCESS,
    GET_PAGEPOSTS_FAILURE,
} from './actionConstants';

const url = '/data.json';

const getPagePostsRequest = () => {
    return {
        type: GET_PAGEPOSTS_REQUEST
    };
};

const getPagePostsSuccess = (post) => {
    return {
        type: GET_PAGEPOSTS_SUCCESS,
        payload: post
    };
};

const getPagePostsFailure = () => {
    return {
        type: GET_PAGEPOSTS_FAILURE
    };
};

export const getPagePosts = () => {
    return (dispatch) => {
        dispatch(getPagePostsRequest());

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((response) => {
                let posts = response.posts;

                posts.sort((a, b) => {
                    return b.date - a.date;
                });

                dispatch(getPagePostsSuccess(posts));
            })
            .catch((response) => dispatch(getPagePostsFailure(response)));
    };
};
