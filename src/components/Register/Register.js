import { Link } from 'react-router-dom';
import ListErrors from '../ListErrors';
import React, { useEffect } from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  UPDATE_FIELD_AUTH,
  REGISTER,
  REGISTER_PAGE_UNLOADED
} from '../../constants/actionTypes';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  onChangePassword: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onChangeUsername: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'username', value }),
  onSubmit: (username, email, password) => {
    const payload = agent.Auth.register(username, email, password);
    dispatch({ type: REGISTER, payload })
  },
  onUnload: () =>
    dispatch({ type: REGISTER_PAGE_UNLOADED })
});

function Register(props) {

  const username = props.username
  const email = props.email
  const password = props.password

  const onSubmitHandler = (event) => {
    event.preventDefault()
    props.onSubmit(username, email, password)
  }

  useEffect(() => {
    return () => props.onUnload()
  }, [])

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">

            <h1 className="text-xs-center">Sign Up</h1>
            <p className="text-xs-center">
              <Link to="/login">
                Have an account?
              </Link>
            </p>

            <ListErrors errors={props.errors} />

            <form onSubmit={onSubmitHandler}>
              <fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Username"
                    value={username || ''}
                    onChange={(event) => props.onChangeUsername(event.target.value)} />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Email"
                    value={email || ''}
                    onChange={(event) => props.onChangeEmail(event.target.value)} />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    value={password || ''}
                    onChange={(event) => props.onChangePassword(event.target.value)} />
                </fieldset>

                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                  disabled={props.inProgress}>
                  Sign up
                </button>

              </fieldset>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
