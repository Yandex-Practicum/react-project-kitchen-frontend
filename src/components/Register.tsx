import { Link } from 'react-router-dom';
import ListErrors from './ListErrors';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  REGISTER,
  REGISTER_PAGE_UNLOADED
} from '../constants/actionTypes';
import { signup } from '../api';
import SignupLoginSubmitBtn from "./SignupLoginSubmitBtn";

const Register: React.FC<any> =() => {
  const dispatch = useDispatch();
  const errors = useSelector((state: any) => state.auth.errors)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    return () => {
      dispatch({ type: REGISTER_PAGE_UNLOADED });
    }
  }, [])

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const submitForm = (e: React.SyntheticEvent<Element, Event>) => {
    e.preventDefault();
      dispatch({ type: REGISTER, payload: signup(username, email, password)})
  }

  return (
    <section className="auth-page">
      <div className="container page">
        <div className="row">

          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign Up</h1>
            <p className="text-xs-center">
              <Link to="/login">
                Have an account?
              </Link>
            </p>

            <ListErrors errors={errors} />

            <form action='POST' onSubmit={submitForm}>
              <fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={onChangeUsername} />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={onChangeEmail} />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onChangePassword} />
                </fieldset>
                <SignupLoginSubmitBtn btnText="Sign up" />
              </fieldset>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Register
