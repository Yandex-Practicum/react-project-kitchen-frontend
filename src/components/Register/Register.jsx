import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import ListErrors from '../common/ListErrors/ListErrors';
import agent from '../../agent';
import {
  UPDATE_FIELD_AUTH,
  REGISTER,
  REGISTER_PAGE_UNLOADED,
} from '../../constants/actionTypes';
import registerStyles from './Register.module.css';
import DialogPage from '../common/DialogPage/DialogPage';
import Form from '../common/Form/Form';
import FormButtons from '../common/FormButtons/FormButtons';
import InputPassword from '../common/InputPassword/InputPassword';
import InputText from '../common/InputText/InputText';
import Button from '../common/Button/Button';
import { transformApiErrors } from '../../utils/api-errors';

const mapStateToProps = (state) => ({ ...state.auth });

const mapDispatchToProps = (dispatch) => ({
  onChangeEmail: (value) => dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  onChangePassword: (value) => dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onChangeUsername: (value) => dispatch({ type: UPDATE_FIELD_AUTH, key: 'username', value }),
  onSubmit: (username, email, password) => {
    const payload = agent.Auth.register(username, email, password);
    dispatch({ type: REGISTER, payload });
  },
  onUnload: () => dispatch({ type: REGISTER_PAGE_UNLOADED }),
});

class Register extends React.Component {
  constructor(props) {
    super(props);
    const { onChangeEmail, onChangePassword, onChangeUsername, onSubmit } = this.props;
    this.changeEmail = (ev) => onChangeEmail(ev.target.value);
    this.changePassword = (ev) => onChangePassword(ev.target.value);
    this.changeUsername = (ev) => onChangeUsername(ev.target.value);
    this.submitForm = (username, email, password) => (ev) => {
      ev.preventDefault();
      onSubmit(username, email, password);
    };
  }

  componentWillUnmount() {
    const { onUnload } = this.props;
    onUnload();
  }

  render() {
    const { email, password, username, errors, inProgress } = this.props;
    const { emailError, passwordError, usernameError, ...restErrors } = transformApiErrors(errors);
    return (
      <DialogPage title="Зарегистрироваться">

        <div className={registerStyles.linkRow}>
          <Link to="/login">
            <p className={registerStyles.link}>Уже есть аккаунт?</p>
          </Link>
        </div>

        <ListErrors errors={restErrors} />

        <Form onSubmit={this.submitForm(username, email, password)}>

          <InputText
            label="Имя пользователя"
            placeholder="Username"
            value={username ?? ''}
            status={usernameError ? 'error' : null}
            error={usernameError}
            onChange={this.changeUsername}
          />

          <InputText
            label="E-mail"
            placeholder="Username@nomoreparties.space"
            value={email ?? ''}
            status={emailError ? 'error' : null}
            error={emailError}
            onChange={this.changeEmail}
          />

          <InputPassword
            label="Пароль"
            placeholder="********"
            value={password ?? ''}
            status={passwordError ? 'error' : null}
            error={passwordError}
            onChange={this.changePassword}
          />

          <FormButtons>
            <Button
              title="Зарегистрироваться"
              isActive={!inProgress}
            />
          </FormButtons>

        </Form>
      </DialogPage>
    );
  }
}

Register.propTypes = {
  email: PropTypes.string,
  errors: PropTypes.object,
  inProgress: PropTypes.bool,
  password: PropTypes.string,
  username: PropTypes.string,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onChangeUsername: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onUnload: PropTypes.func.isRequired,
};

Register.defaultProps = {
  email: null,
  errors: null,
  inProgress: false,
  password: null,
  username: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
