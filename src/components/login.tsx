import {Link} from 'react-router-dom';
import ListErrors from './ListErrors';
import React, {ChangeEvent, FunctionComponent, useEffect, useState} from 'react';
import {
  UPDATE_FIELD_AUTH,
  LOGIN,
  LOGIN_PAGE_UNLOADED
} from '../constants/actionTypes';
import {login} from '../api';
import {TypedUseSelectorHook, useDispatch, useSelector, useSelector as selectorHook} from "react-redux";
import SignupLoginSubmitBtn from "./SignupLoginSubmitBtn";
import {store} from "../services/store";
import rootReducer from "../services";
import {authSlice} from "../services/authSlice"; // TODO заменить на rootReducer из services, когда будут готовы слайсы


// errors - см тип внутри ListErrors

// export const Login: FunctionComponent<TProps> = ({onSubmit, onUnload, inProgress, errors}) => {
export const Login: FunctionComponent = () => {
    const {auth} = useSelector((state: any) => {
      return state;
    })
    const actionsAuth = authSlice.actions;

    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    useEffect(() => {
      // dispatch(actionsAuth.isLoading());
      dispatch(actionsAuth.authSuccess());
      return () => {
        dispatch(actionsAuth.pageWasUnloaded());
      }
    }, [])

    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    }
    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    }
    const onSubmitForm = (event: React.SyntheticEvent<Element, Event>) => {
      event.preventDefault();
      event.stopPropagation();
      if (email !== '' && password !== '') {
        login(email, password);
      }
    }

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

              <ListErrors errors={auth.errors}/>

              <form onSubmit={onSubmitForm}>
                {/*<fieldset>*/}

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={onChangeEmail}/>
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={onChangePassword}/>
                  </fieldset>
                  <SignupLoginSubmitBtn btnText="Sign in" disabled={auth.inProgress}/>
                {/*</fieldset>*/}
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
;
export default Login;
