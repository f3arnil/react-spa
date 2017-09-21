import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTags } from 'actions/tags';
import PreLoader from 'views/PreLoader';
import Tags from 'views/Tags';
import SearchBar from 'views/SearchBar';
import {
    STATUS_ERROR,
    STATUS_LOADING,
    STATUS_DONE,
} from 'actions/actionConstants';

class Sidebar extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getTags());
    }

    initTags() {
        const { tagsStatus, tags } = this.props;

        switch (tagsStatus) {
            case STATUS_ERROR:
                return <p>There was an error loading the tags</p>;

            case STATUS_LOADING:
                return <PreLoader />;

            case STATUS_DONE:
                return <Tags type="sidebar" tags={ tags } />;

            default:
                return <PreLoader />;
        }
    }

    initPopular() {
        return (
            <section>
                <h2>Popular posts</h2>
                <p>...</p>
            </section>
        );
    }

    render() {
        return (
            <div className="sidebar center-xs">
                <SearchBar />
                { this.initPopular() }
                { this.initTags() }
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        tags: store.tags.items,
        tagsStatus: store.tags.status
    };
};

export default connect(mapStateToProps)(Sidebar);
