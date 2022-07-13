import React from 'react';

import MenuItem from './MenuItem';
import homeIcon from '../../images/homeicon.svg';
import newIcon from '../../images/newicon.svg';
import settingsIcon from '../../images/settings.svg';
import avatarTemp from '../../images/avatarTemp.svg';

import currentUserType from '../../utils/types';

function LoggedInView({ currentUser }) {
  return (
    <>
      <MenuItem text='Главная' path='/' icon={homeIcon} />
      <MenuItem text='Новая запись' path='/editor' icon={newIcon} />

      <MenuItem text='Настройки' path='/settings' icon={settingsIcon} />

      <MenuItem
        text={currentUser.username}
        path={`/@${currentUser.username}`}
        icon={avatarTemp}
        isProfileIcon={true}
      />
    </>
  );
}

LoggedInView.propTypes = {
  currentUser: currentUserType.isRequired,
};

export default LoggedInView;
