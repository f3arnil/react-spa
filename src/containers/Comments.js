import React, { Component } from 'react';
import PreLoader from 'views/PreLoader';
import Comment from 'views/Comments';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { getComments, addComment } from 'actions/comments';
import {
    STATUS_ERROR,
    STATUS_LOADING,
    STATUS_DONE,
} from 'actions/actionConstants';

class Comments extends Component {
    componentDidMount() {
        const { dispatch, post_id } = this.props;

        dispatch(getComments(post_id));
    }

    loadComments() {
        const { status, comments } = this.props;

        switch (status) {
            case STATUS_ERROR:
                return <p>There was an error loading the items</p>;

            case STATUS_LOADING:
                return <PreLoader />;

            case STATUS_DONE:
                return <Comment comments={comments} />;

            default:
                return <PreLoader />;
        }
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <div className="comment-wrapper">
                <section>{this.loadComments()}</section>
                <form onSubmit={handleSubmit(addComment)} className="comment-form">
                    <div>
                        <label> Leave your comment here:</label>
                        <div>
                            <Field name="notes" component="textarea" />
                        </div>
                    </div>
                    <div className="app-comments-buttons">
                        <button type="submit" disabled={pristine || submitting}>
                            Submit
                        </button>
                        <button type="button" disabled={pristine || submitting} onClick={reset}>
                            Clear Values
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        comments: store.comments.items,
        status: store.comments.status,
        statusForm: store.session.status
    };
};

Comments = connect(mapStateToProps)(Comments);

export default reduxForm({
    form: 'commentForm'
})(Comments);
