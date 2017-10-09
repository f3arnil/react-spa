import React, { Component } from 'react';
import Moment from 'react-moment';
import './Comment.scss';
class Comment extends Component {
    render() {
        const { comments } = this.props;
        const commentList = comments.map(({ id, author_id, post_id, date, text }) => {
            return (
                <div key={id} className="app-comment">
                    <b>{author_id} - {post_id} Date: <Moment format="DD MMM YYYY hh:mm" unix>{date}</Moment></b>
                    <p>{text}</p>
                </div>
            );
        });

        return (
            <div className="app-comments">
                <h3>Comments:</h3>
                {commentList}
            </div>
        );
    }
}

export default Comment;
