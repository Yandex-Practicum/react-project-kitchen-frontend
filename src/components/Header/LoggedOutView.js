import React from 'react';
import MenuItem from './MenuItem';
import homeIcon from '../../images/homeicon.svg';
import loginIcon from '../../images/login.svg';

function LoggedOutView() {
  return (<>
            <MenuItem text='Главная' path='/' icon={homeIcon} />
            <MenuItem text='Войти' path='/login' icon={loginIcon} />

            { /* в макете нет регистрации почему-то, пока убираю
            <MenuItem text='Зарегистрироваться' path='/register'/>
            */ }
            </>
  );
}

export default LoggedOutView;
