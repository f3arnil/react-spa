import React, { Component } from 'react';
import { connect } from 'react-redux';
import Article from 'views/Article';
import PreLoader from 'views/PreLoader';
import { getPost } from 'actions/posts';
import {
    STATUS_ERROR,
    STATUS_LOADING,
    STATUS_DONE,
} from 'actions/actionConstants';

class Post extends Component {
    loadPost() {
        const { dispatch } = this.props;
        const { id } = this.props.match.params;

        dispatch(getPost(id));
    }

    componentDidMount() {
        this.loadPost();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadPost();
        }
    }

    getContent() {
        const { status, post } = this.props;

        switch (status) {
            case STATUS_ERROR:
                return <p>There was an error loading the items</p>;

            case STATUS_LOADING:
                return <PreLoader />;

            case STATUS_DONE:
                return <Article post={post} />;

            default:
                return <PreLoader />;
        }
    }

    render() {
        return (
            <section className="article">
                { this.getContent() }
            </section>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        post: store.post.items,
        status: store.post.status
    };
};

export default connect(mapStateToProps)(Post);
