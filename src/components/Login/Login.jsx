import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ListErrors from '../ListErrors';
import agent from '../../agent';
import {
  UPDATE_FIELD_AUTH,
  LOGIN,
  LOGIN_PAGE_UNLOADED,
} from '../../constants/actionTypes';
import loginStyles from './Login.module.css';
import DialogPage from '../common/DialogPage/DialogPage';
import Form from '../common/Form/Form';
import FormButtons from '../common/FormButtons/FormButtons';
import InputPassword from '../common/InputPassword/InputPassword';
import InputText from '../common/InputText/InputText';
import Button from '../common/Button/Button';

const mapStateToProps = (state) => ({ ...state.auth });

const mapDispatchToProps = (dispatch) => ({
  onChangeEmail: (value) => dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  onChangePassword: (value) => dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onSubmit: (email, password) => {
    dispatch({ type: LOGIN, payload: agent.Auth.login(email, password) });
  },
  onUnload: () => dispatch({ type: LOGIN_PAGE_UNLOADED }),
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    const { onChangeEmail, onChangePassword, onSubmit } = this.props;
    this.changeEmail = (ev) => onChangeEmail(ev.target.value);
    this.changePassword = (ev) => onChangePassword(ev.target.value);
    this.submitForm = (email, password) => (ev) => {
      ev.preventDefault();
      onSubmit(email, password);
    };
  }

  componentWillUnmount() {
    const { onUnload } = this.props;
    onUnload();
  }

  render() {
    const { email, password, errors, inProgress } = this.props;
    return (
      <DialogPage title="Войти">

        <div className={loginStyles.linkRow}>
          <Link to="/register">
            <p className={loginStyles.link}>Хотите создать аккаунт?</p>
          </Link>
        </div>

        <ListErrors errors={errors} />

        <Form onSubmit={this.submitForm(email, password)}>

          <InputText
            label="E-mail"
            placeholder="E-mail"
            value={email}
            onChange={this.changeEmail}
          />

          <InputPassword
            label="Пароль"
            placeholder="Пароль"
            value={password}
            onChange={this.changePassword}
          />

          <FormButtons>
            <Button
              title="Войти"
              isActive={!inProgress}
            />
          </FormButtons>

        </Form>

      </DialogPage>
    );
  }
}

Login.propTypes = {
  email: PropTypes.string.isRequired,
  errors: PropTypes.object,
  inProgress: PropTypes.bool.isRequired,
  password: PropTypes.string.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onUnload: PropTypes.func.isRequired,
};

Login.defaultProps = {
  errors: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
