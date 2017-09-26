import {
    GET_POST_REQUEST,
    GET_POST_SUCCESS,
    GET_POST_FAILURE,
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE,
} from './actionConstants';

const url = '/data.json';

const getPostRequest = () => {
    return {
        type: GET_POST_REQUEST
    };
};

const getPostSuccess = (post) => {
    return {
        type: GET_POST_SUCCESS,
        payload: post
    };
};

const getPostFailure = () => {
    return {
        type: GET_POST_FAILURE
    };
};

const getPostsRequest = () => {
    return {
        type: GET_POSTS_REQUEST
    };
};

const getPostsSuccess = (posts) => {
    return {
        type: GET_POSTS_SUCCESS,
        payload: posts
    };
};

const getPostsFailure = () => {
    return {
        type: GET_POSTS_FAILURE
    };
};

export const getPosts = (tag) => {
    return (dispatch) => {
        dispatch(getPostsRequest());

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

                if (tag) {
                    posts = posts.filter((post) => { return post.tags.indexOf(tag) !== -1; });
                }

                dispatch(getPostsSuccess(posts));
            })
            .catch((response) => dispatch(getPostsFailure(response)));
    };
};

export const getPost = (id) => {
    return (dispatch) => {
        dispatch(getPostRequest());

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((response) => {
                response.posts.map((post) => {
                    if (id == post.id) {
                        dispatch(getPostSuccess(post));
                    }
                });
            })
            .catch((response) => dispatch(getPostFailure(response)));
    };
};
