import {Link} from 'react-router-dom';
import ListErrors from '../ListErrors';
import React from 'react';
import agent from '../../agent';
import {connect} from 'react-redux';
import {
  UPDATE_FIELD_AUTH,
  LOGIN,
  LOGIN_PAGE_UNLOADED
} from '../../constants/actionTypes';
import loginStyles from './Login.module.css';
import DialogPage from '../common/DialogPage/DialogPage';
import Form from '../common/Form/Form';
import FormButtons from '../common/FormButtons/FormButtons';
import InputPassword from '../common/InputPassword/InputPassword';
import InputText from '../common/InputText/InputText';

const mapStateToProps = state => ({...state.auth});

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value =>
    dispatch({type: UPDATE_FIELD_AUTH, key: 'email', value}),
  onChangePassword: value =>
    dispatch({type: UPDATE_FIELD_AUTH, key: 'password', value}),
  onSubmit: (email, password) =>
    dispatch({type: LOGIN, payload: agent.Auth.login(email, password)}),
  onUnload: () =>
    dispatch({type: LOGIN_PAGE_UNLOADED})
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    this.submitForm = (email, password) => ev => {
      ev.preventDefault();
      this.props.onSubmit(email, password);
    };
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const email = this.props.email;
    const password = this.props.password;
    return (
      <DialogPage title={'Войти'}>

        <div className={loginStyles.linkRow}>
          <Link to="/register">
            <p className={loginStyles.link}>Хотите создать аккаунт?</p>
          </Link>
        </div>

        <ListErrors errors={this.props.errors}/>

        <Form onSubmit={this.submitForm(email, password)}>

          <InputText
            label="E-mail"
            placeholder="E-mail"
            value={email}
            onChange={this.changeEmail}/>

          <InputPassword
            label="Пароль"
            placeholder="Пароль"
            value={password}
            onChange={this.changePassword}/>

          <FormButtons>
            <button
              className="btn btn-lg btn-primary pull-xs-right"
              type="submit"
              disabled={this.props.inProgress}>
              Войти
            </button>
          </FormButtons>

        </Form>

      </DialogPage>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
