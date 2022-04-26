import {Link} from 'react-router-dom';
import ListErrors from './ListErrors';
import React, {ChangeEvent, FunctionComponent, useEffect, useState} from 'react';
import {
  UPDATE_FIELD_AUTH,
  LOGIN,
  LOGIN_PAGE_UNLOADED
} from '../constants/actionTypes';
import {login} from '../api';
import auth from "../reducers/auth";
import {connect, TypedUseSelectorHook, useDispatch, useSelector as selectorHook} from "react-redux";
import SignupLoginSubmitBtn from "./SignupLoginSubmitBtn";
import {store} from "../services/store";
import rootReducer from "../reducer"; // TODO заменить на rootReducer из services, когда будут готовы слайсы

// TODO: типизацию useSelector перенести в общий файл
export type RootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

// errors - см тип внутри ListErrors

// const mapStateToProps = (state: any) => {
//   const {auth} = state
//   return {
//     inProgress: auth.inProgress,
//     errors: auth.errors
//   }
// }

// const mapDispatchToProps = (dispatch: any) => ({
  // onChangeEmail: (value: any) =>
  //   dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  // onChangePassword: (value: any) =>
  //   dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
//   onSubmit: (email: string, password: string) =>
//     // dispatch({ type: LOGIN, payload: agent.Auth.login(email, password) }),
//     dispatch({type: LOGIN, payload: login(email, password)}),
//   onUnload: () =>
//     dispatch({type: LOGIN_PAGE_UNLOADED})
// });

// export const Login: FunctionComponent<TProps> = ({onSubmit, onUnload, inProgress, errors}) => {
export const Login: FunctionComponent = () => {
  const {auth} = useSelector((state: any) => {
    return state;
  })

  const dispatch = useAppDispatch();
  // TODO: это auth.actions?
  // const onChangeEmail = (value: string) => {
  //   dispatch({type: UPDATE_FIELD_AUTH, key: 'email', value})
  // }
  // const onChangePassword = (value: string) => {
  //   dispatch({type: UPDATE_FIELD_AUTH, key: 'password', value})
  // }
  const onSubmit = (email: string, password: string) => {
    dispatch({ type: LOGIN, payload: login(email, password) })
  }
  const onUnload = () => {
    dispatch({type: LOGIN_PAGE_UNLOADED})
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    onUnload();
  }, [])

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }
  const submitForm = (event: React.SyntheticEvent<Element, Event>) => {
    event.preventDefault();
    if (email && password) {
      onSubmit(email, password);
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

            <form onSubmit={submitForm}>
              <fieldset>

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
                <SignupLoginSubmitBtn btnText="Sign in" disabled={auth.inProgress} />
              </fieldset>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};
export default Login;
