import ListErrors from '../ListErrors/ListErrors';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import styles from './settings.module.scss';
import Button from '../Button/Button';
import ClipIcon from '../../assets/ico/ClipIcon';
import { Link } from 'react-router-dom';
import { SETTINGS_SAVED, SETTINGS_PAGE_UNLOADED, LOGOUT } from '../../constants/actionTypes';
// import {
//   SETTINGS_SAVED,
//   SETTINGS_PAGE_UNLOADED
// } from '../../slices/settings';
// import {
//   LOGOUT
// } from '../../constants/actionTypes';
import Form from '../Form/Form';

class SettingsForm extends React.Component {
  constructor() {
    super();

    this.state = {
      image: '',
      username: '',
      bio: '',
      email: '',
      password: '',
    };

    this.updateState = (field) => (ev) => {
      const state = this.state;
      const newState = Object.assign({}, state, { [field]: ev.target.value });
      this.setState(newState);
    };

    this.submitForm = (ev) => {
      ev.preventDefault();

      const user = Object.assign({}, this.state);
      if (!user.password) {
        delete user.password;
      }

      this.props.onSubmitForm(user);
    };
  }

  componentWillMount() {
    if (this.props.currentUser) {
      Object.assign(this.state, {
        image: this.props.currentUser.image || '',
        username: this.props.currentUser.username,
        bio: this.props.currentUser.bio,
        email: this.props.currentUser.email,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser) {
      this.setState(
        Object.assign({}, this.state, {
          image: nextProps.currentUser.image || '',
          username: nextProps.currentUser.username,
          bio: nextProps.currentUser.bio,
          email: nextProps.currentUser.email,
        }),
      );
    }
  }

  render() {
    return (
      <Form onSubmit={this.submitForm}>
        <div className={styles.url__group}>
          <input
            type="text"
            placeholder="URL изображения профиля"
            value={this.state.image}
            onChange={this.updateState('image')}
          />
          <ClipIcon />
        </div>
        <input
          type="text"
          placeholder="Имя пользователя"
          value={this.state.username}
          onChange={this.updateState('username')}
        />

        <textarea
          rows="8"
          placeholder="Информация о Вас"
          value={this.state.bio}
          onChange={this.updateState('bio')}></textarea>

        <input type="email" placeholder="mail@ya.ru" value={this.state.email} onChange={this.updateState('email')} />

        <input
          type="password"
          placeholder="Новый пароль"
          value={this.state.password}
          onChange={this.updateState('password')}
        />

        <Button
          type="submit"
          //проверить отправку формы через универсальную кнопку
          disabled={this.state.inProgress}
          children="Обновить настройки"
        />
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.settings,
  currentUser: state.common.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  onClickLogout: () => {
    // dispatch({ type: LOGOUT });
  },
  onSubmitForm: (user) => dispatch({ type: SETTINGS_SAVED, payload: agent.Auth.save(user) }),
  onUnload: () => dispatch({ type: SETTINGS_PAGE_UNLOADED }),
});

const Settings = (props) => {
  const deleteHandler = () => {
    window.confirm('Вы точно хотите удалить свой аккаунт?');
  };

  return (
    <section className={styles.page}>
      <div className={styles.page__container}>
        <h1>Ваши настройки</h1>

        <ListErrors errors={props.errors}></ListErrors>

        <SettingsForm currentUser={props.currentUser} onSubmitForm={props.onSubmitForm} />

        <hr className={styles.br} />

        <Link className={styles.logout__button} onClick={deleteHandler} to={`/`}>
          Удалить аккаунт
        </Link>
      </div>
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
