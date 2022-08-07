import { useState } from 'react';
import { useDispatch } from 'react-redux';
import agent from '../../../agent';
import { LOGIN, SET_API_MESSAGE } from '../../../constants/actionTypes';
import useFormValidation from '../../../hooks/useFormValidation';
import styles from '../../AuthForm/authForm.module.scss';
import AuthForm from '../../AuthForm/AuthForm';
import HideIcon from '../../ui-library/Icons/HideIcon';
import ShowIcon from '../../ui-library/Icons/ShowIcon';
import AlertIcon from '../../ui-library/Icons/AlertIcon';

const Login = () => {
  const dispatch = useDispatch();
  const [isPassShownLogin, setIsPassShownLogin] = useState(true);

  const { values, handleChange, errors, isValid } = useFormValidation({
    email: '',
    password: '',
  });

  const { email, password } = values;

  const toggleShowPass = (e) => {
    e.preventDefault();
    setIsPassShownLogin(!isPassShownLogin);
  };

  const submitLogin = () => {
    if (isValid) {
      dispatch({ type: LOGIN, payload: agent.Auth.login(email, password) });
    } else {
      dispatch({ type: SET_API_MESSAGE, payload: ['Заполните все поля формы верно'] });
    }
  };

  const showPassIcon = isPassShownLogin ? <ShowIcon /> : <HideIcon />;

  return (
    <AuthForm
      btnText='Войти'
      crossLinkText='Нужно зарегистрироваться?'
      formName='login'
      isFormValid={isValid}
      onSubmit={submitLogin}
      oppositeLink='/register'
    >
      <fieldset className='form-group'>
        <label className={styles.label} htmlFor='email'>
          Email
        </label>
        <div className={styles.inputarea}>
          <input
            className={`${styles.input} ${errors.email ? styles.input_invalid : ''}`}
            maxLength='30'
            minLength='2'
            name='email'
            onChange={handleChange}
            placeholder='Email'
            required
            type='email'
            value={email}
          />
          <p className={styles.error}>{errors.email}</p>
          <div className={styles.form__icon}>{errors.email ? <AlertIcon color='alert' /> : ''}</div>
        </div>
      </fieldset>

      <fieldset className='form-group'>
        <label className={styles.label} htmlFor='password'>
          Пароль
        </label>
        <div className={styles.inputarea}>
          <input
            className={`${styles.input} ${errors.password ? styles.input_invalid : ''}`}
            maxLength='25'
            minLength='2'
            name='password'
            onChange={handleChange}
            placeholder='Пароль'
            required
            type={isPassShownLogin ? 'password' : 'text'}
            value={password}
          />
          <div className={styles.form__icon} onClick={(e) => toggleShowPass(e)}>
            {errors.password ? <AlertIcon color='alert' /> : showPassIcon}
          </div>
        </div>
        <p className={styles.error}>{errors.password}</p>
      </fieldset>
    </AuthForm>
  );
};

export default Login;
