import React, { Component } from 'react';
import { connect } from 'react-redux';
import PreLoader from 'views/PreLoader';
import UserPage from 'views/UserPage';
import {
    STATUS_ERROR,
    STATUS_LOADING,
    STATUS_DONE,
} from 'actions/actionConstants';

class Profile extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
    }

    getContent() {
        const { status, user } = this.props;

        switch (status) {
            case STATUS_ERROR:
                return <p>Error while loading user profile</p>;

            case STATUS_LOADING:
                return <PreLoader />;

            case STATUS_DONE:
                return <UserPage user={user} />;

            default:
                return <PreLoader />;
        }
    }

    render() {
        return (
            <section>{this.getContent()}</section>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        user: store.session.data,
        status: store.session.status
    };
};

export default connect(mapStateToProps)(Profile);
