import React, { Component } from 'react';
import './UserPage.scss';

class UserPage extends Component {
    render() {
        const { user } = this.props;
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
                        <li><a href="#">Lorem ipsum | <small>05.08.2016</small></a></li>
                        <li><a href="#">Lorem ipsum dolor | <small>01.02.2017</small></a></li>
                        <li><a href="#">Lorem | <small>12.08.2015</small></a></li>
                        <li><a href="#">Lorem ips | <small>07.07.2007</small></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default UserPage;
