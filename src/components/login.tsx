import { Link, Redirect } from "react-router-dom";
import ListErrors from "./ListErrors";
import React, { FunctionComponent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignupLoginSubmitBtn from "./SignupLoginSubmitBtn";
import { loginThunk } from "../services/thunks";
import {authSlice} from "../services/authSlice";

type TErrors = {
  [index: string]: string
}

export const Login: FunctionComponent = () => {
  const dispatch = useDispatch();

  const actionsAuth = authSlice.actions;

  const { isLoggedIn } = useSelector((state: any) => state.common);
  const { isLoading } = useSelector((state: any) => state.auth);

  const [errors, setErrors] = useState<TErrors | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // const dispatch = useAppDispatch();
  // // TODO: это auth.actions?
  // // const onChangeEmail = (value: string) => {
  // //   dispatch({type: UPDATE_FIELD_AUTH, key: 'email', value})
  // // }
  // // const onChangePassword = (value: string) => {
  // //   dispatch({type: UPDATE_FIELD_AUTH, key: 'password', value})
  // // }
  // const onSubmit = (email: string, password: string) => {
  //   dispatch(LOGIN(login(email, password)))
  // }
  // const onUnload = () => {
  //   dispatch(LOGIN_PAGE_UNLOADED())

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const submitForm = (event: React.SyntheticEvent<Element, Event>) => {
    event.preventDefault();
    if (email && password) {
      dispatch(loginThunk({ email, password }))
        .unwrap()
        .catch((error: any) => {
          setErrors({ [error.name]: error.message });
        });
    }
  };

  React.useEffect(() => {
    return () => {
      dispatch(actionsAuth.pageWasUnloaded());
    }
  }, [])

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign In</h1>
            <p className="text-xs-center">
              <Link to="/register">Need an account?</Link>
            </p>

            <ListErrors errors={errors} />

            <form onSubmit={submitForm}>
              {/*<fieldset>*/}
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={onChangeEmail}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onChangePassword}
                  />
                </fieldset>
                <SignupLoginSubmitBtn btnText="Sign in" disabled={isLoading} />
              {/*</fieldset>*/}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
