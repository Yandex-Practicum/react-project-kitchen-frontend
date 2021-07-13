import React, { FC, useEffect } from 'react';

import { Link, useHistory } from 'react-router-dom';
import ListErrors from '../../ListErrors/ListErrors';
import agent from '../../../agent';
import { connect } from 'react-redux';
import { UPDATE_FIELD_AUTH, REGISTER, REGISTER_PAGE_UNLOADED } from '../../../constants/actionTypes';
import Button from '../../Button/Button';

import styles from '../Auth.module.scss';
import clsx from 'clsx';
import Form from '../../Form/Form';

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

const Register = (props) => {
  const history = useHistory();
  const changeEmail = (ev) => props.onChangeEmail(ev.target.value);
  const changePassword = (ev) => props.onChangePassword(ev.target.value);
  const changeUsername = (ev) => props.onChangeUsername(ev.target.value);
  const submitForm = (username, email, password) => (ev) => {
    ev.preventDefault();
    props.onSubmit(username, email, password);
    history.replace('/');
  };

  useEffect(() => {
    return () => {
      props.onUnload();
    };
  }, []);

  const email = props.email;
  const password = props.password;
  const username = props.username;

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Зарегистрироваться</h1>
      <p className={styles.option}>
        <Link to="/login">Уже есть аккаунт?</Link>
      </p>

      <ListErrors errors={props.errors} />

      <Form onSubmit={submitForm(username, email, password)}>
        <input
          type="text"
          placeholder="Никнейм"
          value={props.username || ''}
          onChange={changeUsername}
          required
          maxLength={15}
        />

        <input type="email" placeholder="default@gmail.com" value={props.email || ''} onChange={changeEmail} required />

        <input type="password" placeholder="Пароль" value={props.password || ''} onChange={changePassword} required />

        <Button type="submit" disabled={props.inProgress}>
          Зарегистрироваться
        </Button>
      </Form>
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
