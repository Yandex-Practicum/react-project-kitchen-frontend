import { Link } from 'react-router-dom';
import React from 'react';
import agent from '../agent';
import ListErrors from './ListErrors';
import { connect } from 'react-redux';
import {
    UPDATE_FIELD_AUTH,
    LOGIN,
    LOGIN_PAGE_UNLOADED
} from '../constants/actionTypes';
import {
    useEffect,
    useState,
    ChangeEvent,
    SyntheticEvent,
    FC,
} from "react";
const mapDispatchToProps = (dispatch: any) => ({
    onChangeEmail: (value: any) =>
        dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
    onChangePassword: (value: any) =>
        dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
    onSubmit: (email: string, password: string) =>
        dispatch({ type: LOGIN, payload: agent.Auth.login(email, password) }),
    onUnload: () =>
        dispatch({ type: LOGIN_PAGE_UNLOADED })
});

const mapStateToProps = (state: any) => ({ ...state.auth });

export const Login: FC = (props: any) => {
    const [email, setEmail] = useState(props.email);
    const [password, setPssword] = useState(props.password);



    const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeEmail(e.target.value)
    }
    const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangePassword(e.target.value)
    }
    const submitForm = (email: any, password: any) => (e:SyntheticEvent<Element>) => {
        e.preventDefault();
        props.onSubmit(email, password);
    }
    useEffect(() => {
        props.onUnload()
    }, [])
    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">

                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign In</h1>
                        <p className="text-xs-center">
                            <Link to="/register">
                                Need an account?
                            </Link>
                        </p>

                        <ListErrors errors={props.errors} />

                        <form onSubmit={submitForm(email, password)}>
                            <fieldset>

                                <fieldset className="form-group">
                                    <input
                                        className="form-control form-control-lg"
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={changeEmail} />
                                </fieldset>

                                <fieldset className="form-group">
                                    <input
                                        className="form-control form-control-lg"
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={changePassword} />
                                </fieldset>

                                <button
                                    className="btn btn-lg btn-primary pull-xs-right"
                                    type="submit"
                                    disabled={props.inProgress}>
                                    Sign in
                                </button>

                            </fieldset>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);

