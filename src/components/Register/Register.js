import {Link} from 'react-router-dom';
import ListErrors from '../ListErrors';
import React from 'react';
import agent from '../../agent';
import {connect} from 'react-redux';
import {
  UPDATE_FIELD_AUTH,
  REGISTER,
  REGISTER_PAGE_UNLOADED
} from '../../constants/actionTypes';
import registerStyles from './Register.module.css';
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
  onChangeUsername: value =>
    dispatch({type: UPDATE_FIELD_AUTH, key: 'username', value}),
  onSubmit: (username, email, password) => {
    const payload = agent.Auth.register(username, email, password);
    dispatch({type: REGISTER, payload})
  },
  onUnload: () =>
    dispatch({type: REGISTER_PAGE_UNLOADED})
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
      <DialogPage title={'Зарегистрироваться'}>

        <div className={registerStyles.linkRow}>
          <Link to="/login">
            <p className={registerStyles.link}>Уже есть аккаунт?</p>
          </Link>
        </div>

        <ListErrors errors={this.props.errors}/>

        <Form onSubmit={this.submitForm(username, email, password)}>

          <InputText
            label="Имя пользователя"
            placeholder="Username"
            value={username}
            onChange={this.changeUsername}/>

          <InputText
            label="E-mail"
            placeholder="Username@nomoreparties.space"
            value={email}
            onChange={this.changeEmail}/>

          <InputPassword
            label="Пароль"
            placeholder="********"
            value={password}
            onChange={this.changePassword}/>

          <FormButtons>
            <button
              className="btn btn-lg btn-primary pull-xs-right"
              type="submit"
              disabled={this.props.inProgress}>
              Зарегистрироваться
            </button>
          </FormButtons>

        </Form>
      </DialogPage>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
