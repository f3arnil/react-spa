import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { getSign } from '../../actions/signup';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
    STATUS_ERROR,
    STATUS_DONE,
} from '../../actions/actionConstants';
import './SignUp.scss';

const renderField = ({ input, label, type }) =>
    <div>
        <input className="auth-form-input" {...input} placeholder={label} type={type} />
    </div>;

class SignUp extends Component {
    render() {
        const { status, data, error, handleSubmit, submitting } = this.props;
        const errorMsg = status === STATUS_ERROR ? data.errors._error : false;
        if (status === STATUS_DONE) {
            return <Redirect to="/posts" />;
        }
        return (
            <div className="row">
                <div className="col-xs-12">
                    <h2 className="center-xs">Singing up PLEASE</h2>
                    <form className="auth-form" onSubmit={handleSubmit(getSign)}>
                        <Field
                            name="username"
                            type="text"
                            component={renderField}
                            label="Username"
                        />
                        <Field
                            name="password"
                            type="password"
                            component={renderField}
                            label="Password"
                        />
                        <small>
                            {errorMsg &&
                                <small>
                                    {errorMsg}
                                </small>
                            }
                        </small>
                        <div className="auth-form-buttons">
                            <button type="submit" disabled={submitting}>
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        status: store.session.status,
        data: store.session.data
    };
};

SignUp = reduxForm({
    form: 'submitValidation'
})(SignUp);

SignUp = connect(mapStateToProps)(SignUp);

export default SignUp;
