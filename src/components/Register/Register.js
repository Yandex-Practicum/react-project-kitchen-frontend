import { Link } from 'react-router-dom';
import ListErrors from '../ListErrors';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  UPDATE_FIELD_AUTH,
  REGISTER,
  REGISTER_PAGE_UNLOADED
} from '../../constants/actionTypes';
import registerStyles from './Register.module.css';
import InputText from '../common/InputText/InputText';
import Form from '../common/Form/Form';
import InputPassword from '../common/InputPassword/InputPassword';
import FormButtons from '../common/FormButtons/FormButtons';

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

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    this.changeUsername = ev => this.props.onChangeUsername(ev.target.value);
    this.submitForm = (username, email, password) => ev => {
      ev.preventDefault();
      this.props.onSubmit(username, email, password);
    }
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const email = this.props.email;
    const password = this.props.password;
    const username = this.props.username;

    return (
      <div className={registerStyles.page}>
        <div className={registerStyles.container}>

          <p className={registerStyles.header}>Зарегистрироваться</p>

          <div className={registerStyles.linkRow}>
            <Link to="/login">
              <p className={registerStyles.link}>Уже есть аккаунт?</p>
            </Link>
          </div>

          <ListErrors errors={this.props.errors} />

          <Form onSubmit={this.submitForm(username, email, password)}>

            <InputText
              label="Имя пользователя"
              placeholder="Username"
              value={this.props.username}
              onChange={this.changeUsername} />

            <InputText
                label="E-mail"
                placeholder="Username@nomoreparties.space"
                value={this.props.email}
                onChange={this.changeEmail} />

            <InputPassword
                label="Пароль"
                placeholder="********"
                value={this.props.password}
                onChange={this.changePassword} />

            <FormButtons>
              <button
                className="btn btn-lg btn-primary pull-xs-right"
                type="submit"
                disabled={this.props.inProgress}>
                Зарегистрироваться
              </button>
            </FormButtons>

          </Form>

        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
