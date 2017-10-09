import React, { Component } from 'react';
import { connect } from 'react-redux';
import Articles from 'views/Articles';
import PreLoader from 'views/PreLoader';
import { getPosts } from 'actions/posts';
import {
    STATUS_ERROR,
    STATUS_LOADING,
    STATUS_DONE,
} from 'actions/actionConstants';

class Posts extends Component {
    loadPosts() {
        const { dispatch } = this.props;
        this.tag = this.props.match.params.tag || false;

        dispatch(getPosts(this.tag));
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.tag !== this.props.match.params.tag) {
            this.loadPosts();
        }
    }

    getContent() {
        const { status, posts } = this.props;

        switch (status) {
            case STATUS_ERROR:
                return <p>There was an error loading the items</p>;

            case STATUS_LOADING:
                return <PreLoader />;

            case STATUS_DONE:
                return <Articles posts={posts} tag={this.tag} />;

            default:
                return <PreLoader />;
        }
    }

    render() {
        return (
            <section className="articles">
                { this.getContent() }
            </section>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        posts: store.posts.items,
        status: store.posts.status
    };
};

export default connect(mapStateToProps)(Posts);
