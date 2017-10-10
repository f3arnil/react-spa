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
        const postsPerPage = 4;
        const { dispatch } = this.props;
        const { id, tag } = this.props.match.params;
        const options = {
            tag: tag,
            limit: postsPerPage,
            page: id
        };

        dispatch(getPosts(options));
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadPosts();
        }
    }

    getContent() {
        const { status, posts } = this.props;
        const { id } = this.props.match.params;
        switch (status) {
            case STATUS_ERROR:
                return <p>There was an error loading the items</p>;

            default:
            case STATUS_LOADING:
                return <PreLoader />;

            case STATUS_DONE:
                return <Articles posts={posts} tag={this.tag} page={id} />;
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
