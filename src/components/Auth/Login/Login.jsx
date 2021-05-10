import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import ListErrors from '../../ListErrors/ListErrors';
import agent from '../../../agent';
import { connect } from 'react-redux';
import {
  UPDATE_FIELD_AUTH,
  LOGIN,
  LOGIN_PAGE_UNLOADED
} from '../../../constants/actionTypes';
import Button from "../../Button/Button";

import s from './Login.module.scss';
import clsx from 'clsx';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  onChangePassword: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onSubmit: (email, password) =>
    dispatch({ type: LOGIN, payload: agent.Auth.login(email, password) }),
  onUnload: () =>
    dispatch({ type: LOGIN_PAGE_UNLOADED })
});

class Login extends React.Component {
  constructor() {
    super();
    this.state ={
      email: '',
      password: ''
    };
    
    this.submitForm = (email, password) => ev => {
      ev.preventDefault();
      this.props.onSubmit(email, password);
    };
  }

  handleChangeEmail = (event) => {
    this.setState({...this.state, email: event.target.value});
  }

  handleChangePassword = (event) => {
    this.setState({...this.state, password: event.target.value});
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Войти</h1>
              <p className="text-xs-center">
                <Link to="/register">
                  Хотите создать аккаунт?
                </Link>
              </p>

              <ListErrors errors={this.props.errors} />

              <form onSubmit={this.submitForm(this.state.email, this.state.password)}>
                <fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="default@gmail.com"
                      value={this.state.email}
                      onChange={this.handleChangeEmail} />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Пароль"
                      value={this.state.password}
                      onChange={this.handleChangePassword} />
                  </fieldset>

                  <Button
                    type="submit"
                    disabled={this.props.inProgress}
                  >
                    Войти
                  </Button>

                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
