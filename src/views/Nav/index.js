import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as titles from './NavConstants';
import {
    STATUS_DONE,
} from '../../actions/actionConstants';
import './Nav.scss';

class Nav extends Component {
    render() {
        const { status, user } = this.props;
        const pages = [
            {
                title: titles.HOME_TITLE,
                link: '/'
            },
            {
                title: titles.ABOUT_TITLE,
                link: '/about'
            },
            {
                title: titles.BLOG_TITLE,
                link: '/page/1'
            },
            {
                title: titles.CONTACT_TITLE,
                link: '/'
            }
        ];

        const links = pages.map(
            ({ title, link }) => <Link key={title} to={link}>{title}</Link>
        );

        const userLinks = status === STATUS_DONE ?
            <div className="col-xs-4 center-xs auth">
                <Link to="/profile">{user.email}</Link>
            </div> :
            <div className="col-xs-4 center-xs auth">
                <Link to="/signup">
                    <i className="fa fa-lock" /> {titles.SIGN_UP_TITLE}
                </Link> |
                <Link to="/signin">
                    <i className="fa fa-user" /> {titles.SIGN_IN_TITLE}
                </Link>
                <Link to="">
                    <i className="fa fa-search" />
                </Link>
            </div>;

        return (
            <div className="row navigation">
                <nav className="col-xs-8 center-xs">
                    {links}
                </nav>
                {userLinks}
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        user: store.session.data,
        status: store.session.status
    };
};

export default connect(mapStateToProps)(Nav);
