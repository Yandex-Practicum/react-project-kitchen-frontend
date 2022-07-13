import React from 'react';
import MenuItem from './MenuItem';
import homeIcon from '../../images/homeicon.svg';
import loginIcon from '../../images/login.svg';
import RegisterIcon from '../../images/settings.svg';

function LoggedOutView() {
  return (
    <>
      <MenuItem text='Главная' path='/' icon={homeIcon} />
      <MenuItem text='Войти' path='/login' icon={loginIcon} />

      <MenuItem
        text='Зарегистрироваться'
        path='/register'
        icon={RegisterIcon}
      />
    </>
  );
}

export default LoggedOutView;
