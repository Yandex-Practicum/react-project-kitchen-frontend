import ListErrors from '../ListErrors/ListErrors';
import React, { useEffect, useState } from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import styles from './settings.module.scss';
import Button from '../Button/Button';
import ClipIcon from '../../assets/ico/ClipIcon';
import { Link, useHistory } from 'react-router-dom';
import { SETTINGS_SAVED } from '../../slices/common-slice/common';
import Form from '../Form/Form';

const mapStateToProps = (state) => ({
  ...state.common,
  currentUser: state.common.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  onClickLogout: () => {},
  onSubmitSettingsForm: (user) => dispatch({ type: SETTINGS_SAVED, payload: agent.Auth.save(user) }),
});

const Settings = (props) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    image: '',
    username: '',
    bio: '',
    email: '',
    password: '',
  });

  const changeDataHandler = (ev) => {
    setFormData({
      ...formData,
      [ev.target.name]: ev.target.value,
    });
  };

  useEffect(() => {
    if (props.currentUser) {
      setFormData({
        ...formData,
        image: props.currentUser.image || '',
        username: props.currentUser.username,
        bio: props.currentUser.bio,
        email: props.currentUser.email,
      });
    }
    //eslint-disable-next-line
  }, [props.currentUser]);

  const submitSettingsForm = (ev) => {
    ev.preventDefault();

    const user = Object.assign({}, formData);
    if (!user.password) {
      delete user.password;
    }

    props.onSubmitSettingsForm(user);
    history.replace(`/profile/${formData.username}`);
  };

  const deleteHandler = () => {
    window.confirm('Вы точно хотите удалить свой аккаунт?');
  };

  return (
    <section className={styles.page}>
      <div className={styles.page__container}>
        <h1>Ваши настройки</h1>

        <ListErrors errors={props.errors}></ListErrors>

        <Form onSubmit={submitSettingsForm}>
          <div className={styles.url__group}>
            <input
              type="text"
              placeholder="URL изображения профиля"
              name="image"
              value={formData.image}
              onChange={changeDataHandler}
            />
            <ClipIcon />
          </div>
          <input
            type="text"
            placeholder="Имя пользователя"
            name="username"
            value={formData.username}
            onChange={changeDataHandler}
          />

          <textarea
            rows="8"
            placeholder="Информация о Вас"
            name="bio"
            value={formData.bio}
            onChange={changeDataHandler}></textarea>

          <input
            type="email"
            name="email"
            placeholder="mail@ya.ru"
            value={formData.email}
            onChange={changeDataHandler}
          />

          <input
            type="password"
            name="password"
            placeholder="Новый пароль"
            value={formData.password}
            onChange={changeDataHandler}
          />

          <Button
            type="submit"
            //проверить отправку формы через универсальную кнопку
            disabled={props.inProgress}
            children="Обновить настройки"
          />
        </Form>

        <hr className={styles.br} />

        <Link className={styles.logout__button} onClick={deleteHandler} to={`/`}>
          Удалить аккаунт
        </Link>
      </div>
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
