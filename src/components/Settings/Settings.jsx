// eslint-disable-next-line max-classes-per-file
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../common/Button/Button';
import DialogPage from '../common/DialogPage/DialogPage';
import Form from '../common/Form/Form';
import FormButtons from '../common/FormButtons/FormButtons';
import InputMultilineText from '../common/InputMultilineText/InputMultilineText';
import InputPassword from '../common/InputPassword/InputPassword';
import InputText from '../common/InputText/InputText';
import ListErrors from '../common/ListErrors/ListErrors';
import agent from '../../agent';
import {
  SETTINGS_SAVED,
  SETTINGS_PAGE_UNLOADED,
  LOGOUT,
} from '../../constants/actionTypes';
import { transformApiErrors } from '../../utils/api-errors';
import { userType } from '../../utils/types';
import settingsStyles from './Settings.module.css';

const mapStateToProps = (state) => ({
  ...state.settings,
  currentUser: state.common.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  onClickLogout: () => dispatch({ type: LOGOUT }),
  onSubmitForm: (user) => (
    dispatch({ type: SETTINGS_SAVED, payload: agent.Auth.save(user) })
  ),
  onUnload: () => dispatch({ type: SETTINGS_PAGE_UNLOADED }),
});

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: '',
      username: '',
      bio: '',
      email: '',
      password: '',
    };

    this.updateState = (field) => (ev) => {
      this.setState({ [field]: ev.target.value });
    };

    this.submitForm = (ev) => {
      ev.preventDefault();

      const user = { ...this.state };
      if (!user.password) {
        delete user.password;
      }

      const { onSubmitForm } = this.props;
      onSubmitForm(user);
    };
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    const { currentUser } = this.props;
    if (currentUser) {
      this.state = {
        ...this.state,
        image: currentUser.image || '',
        username: currentUser.username,
        bio: currentUser.bio,
        email: currentUser.email,
      };
    }
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(nextProps) {
    const { currentUser } = nextProps;
    if (currentUser) {
      this.setState({
        image: currentUser.image || '',
        username: currentUser.username,
        bio: currentUser.bio,
        email: currentUser.email,
      });
    }
  }

  render() {
    const { errors, onClickLogout } = this.props;
    const {
      bioError,
      emailError,
      imageError,
      passwordError,
      usernameError,
      ...restErrors
    } = transformApiErrors(errors);
    const { bio, email, image, password, username } = this.state;

    return (
      <DialogPage title="Ваши настройки">

        <ListErrors errors={restErrors} />

        <Form onSubmit={this.submitForm}>

          <InputText
            label="Изображение профиля"
            placeholder="URL изображения"
            value={image}
            status={imageError ? 'error' : null}
            error={imageError}
            onChange={this.updateState('image')}
          />

          <InputText
            label="Имя пользователя"
            placeholder="Username"
            value={username}
            status={usernameError ? 'error' : null}
            error={usernameError}
            onChange={this.updateState('username')}
          />

          <InputMultilineText
            label="Информация о вас"
            placeholder="Информация о вас"
            value={bio}
            status={bioError ? 'error' : null}
            error={bioError}
            onChange={this.updateState('bio')}
          />

          <InputText
            label="E-mail"
            placeholder="Username@nomoreparties.space"
            value={email}
            status={emailError ? 'error' : null}
            error={emailError}
            onChange={this.updateState('email')}
          />

          <InputPassword
            label="Новый пароль"
            value={password}
            status={passwordError ? 'error' : null}
            error={passwordError}
            onChange={this.updateState('password')}
          />

          <FormButtons>
            <Button
              title="Сохранить"
              isActive
            />
          </FormButtons>

        </Form>

        <div className={settingsStyles.linkRow}>
          <div onClick={onClickLogout}>
            <p className={settingsStyles.link}>Выйти из аккаунта</p>
          </div>
        </div>
      </DialogPage>
    );
  }
}

Settings.propTypes = {
  currentUser: userType,
  errors: PropTypes.object,
  onSubmitForm: PropTypes.func.isRequired,
  onClickLogout: PropTypes.func.isRequired,
};

Settings.defaultProps = {
  currentUser: null,
  errors: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
