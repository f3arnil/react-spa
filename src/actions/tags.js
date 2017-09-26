import {
    GET_TAGS_REQUEST,
    GET_TAGS_SUCCESS,
    GET_TAGS_FAILURE
} from './actionConstants';

const url = '/data.json';

const getTagsRequest = () => {
    return {
        type: GET_TAGS_REQUEST
    };
};

const getTagsSuccess = (tags) => {
    return {
        type: GET_TAGS_SUCCESS,
        payload: tags
    };
};

const getTagsFailure = () => {
    return {
        type: GET_TAGS_FAILURE
    };
};

export const getTags = () => {
    return (dispatch) => {
        dispatch(getTagsRequest());

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((response) => {
                let tags = [];

                response.posts.map((item) => {
                    item.tags.map((tag) => {
                        if (tags.indexOf(tag) == -1) {
                            tags.push(tag);
                        }
                    });

                });

                return dispatch(getTagsSuccess((tags)));
            })
            .catch((response) => dispatch(getTagsFailure(response)));
    };
};
