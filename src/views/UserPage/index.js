import React, { Component } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

import './UserPage.scss';

class UserPage extends Component {
    render() {
        const { user, posts } = this.props;
        const list = [];
        posts.map((post) => {
            if (user.posted.indexOf(post.id) !== -1) {
                list.push(post);
            }
        });

        return (
            <div className="userpage">
                <h2 className="userpage-header">Bloger`s info:</h2>
                <div className="row ">
                    <img alt={user.first_name} className="userpage-image" src={user.profile_img} />
                    <ul className="col-xs-8">
                        <li>
                            <p>First Name:</p>
                            <b>{ user.first_name }</b>
                        </li>
                        <li>
                            <p>Last Name:</p>
                            <b>{ user.last_name }</b>
                        </li>
                        <li>
                            <p>E-mail address:</p>
                            <b>{ user.email }</b>
                        </li>
                    </ul>
                </div>
                <p>About:</p>
                <b>{ user.about }</b>
                <div className="userpage-user-posts">
                    <p>Users posts:</p>
                    <ul>
                        {
                            list.map((posted) => {
                                return (
                                    <li key={posted.id}>
                                        <Link to={`/post/${posted.id}`}> {posted.title}
                                            | <small>
                                                <Moment format="DD MMM YYYY" unix>{posted.date}</Moment>
                                            </small>
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default UserPage;
