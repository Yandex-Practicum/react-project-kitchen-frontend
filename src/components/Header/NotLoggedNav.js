import MenuItem from './MenuItem';
import homeIcon from '../../images/homeicon.svg';
import loginIcon from '../../images/login.svg';
import registerIcon from '../../images/newicon.svg';

function NotLoggedNav() {
  return (
    <>
      <MenuItem text='Главная' path='/' icon={homeIcon} />
      <MenuItem
        text='Войти'
        path='/login'
        icon={loginIcon}
      />
      <MenuItem
        text='Регистрация'
        path='/register'
        icon={registerIcon}
      />
    </>
  );
}

export default NotLoggedNav;
