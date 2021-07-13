import React, { FC, useEffect, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import ListErrors from '../../ListErrors/ListErrors';
import agent from '../../../agent';
import { connect } from 'react-redux';
import { UPDATE_FIELD_AUTH, LOGIN, LOGIN_PAGE_UNLOADED } from '../../../constants/actionTypes';
import Button from '../../Button/Button';

import styles from '../Auth.module.scss';
import clsx from 'clsx';
import Form from '../../Form/Form';

const mapStateToProps = (state) => ({ ...state.auth });

const mapDispatchToProps = (dispatch) => ({
  onChangeEmail: (value) => dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  onChangePassword: (value) => dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onSubmit: (email, password) => dispatch({ type: LOGIN, payload: agent.Auth.login(email, password) }),
  onUnload: () => dispatch({ type: LOGIN_PAGE_UNLOADED }),
});

const Login = (props) => {
  const history = useHistory();
  const [state, setState] = useState({ email: '', password: '' });

  const submitForm = (email, password) => (ev) => {
    ev.preventDefault();
    props.onSubmit(email, password);
    history.replace('/');
  };

  const handleChangeEmail = (event) => {
    setState({ ...state, email: event.target.value });
  };

  const handleChangePassword = (event) => {
    setState({ ...state, password: event.target.value });
  };

  useEffect(() => {
    return () => {
      props.onUnload();
    };
  }, []);

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Войти</h1>
      <p className={styles.option}>
        <Link to="/register">Хотите создать аккаунт?</Link>
      </p>

      <ListErrors errors={props.errors} />

      <Form onSubmit={submitForm(state.email, state.password)}>
        <input type="email" placeholder="default@gmail.com" value={state.email} onChange={handleChangeEmail} />

        <input type="password" placeholder="Пароль" value={state.password} onChange={handleChangePassword} />
        <Button type="submit" disabled={props.inProgress}>
          Войти
        </Button>
      </Form>
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
