import MenuItem from './MenuItem';
import { HomeIcon, LoginIcon, EditIcon } from '../ui-library/Icons';

const NotLoggedNav = () => (
  <>
    <MenuItem icon={HomeIcon} path='/' text='Главная' />
    <MenuItem icon={LoginIcon} path='/login' text='Войти' />
    <MenuItem icon={EditIcon} path='/register' text='Регистрация' />
  </>
);

export default NotLoggedNav;
