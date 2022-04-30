import { Link, Redirect } from "react-router-dom";
import ListErrors from "./ListErrors";
import React, { FunctionComponent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignupLoginSubmitBtn from "./SignupLoginSubmitBtn";
import { loginThunk } from "../services/thunks";

export const Login: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: any) => state.common);

  const [errors, setErrors] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              <fieldset>
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
                <SignupLoginSubmitBtn btnText="Sign in" disabled={false} />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
