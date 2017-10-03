import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchBar.scss';

class Search extends Component {
    render() {
        return (
            <section>
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search"
                />
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

export default connect(mapStateToProps)(Search);
