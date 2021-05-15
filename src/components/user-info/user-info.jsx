import React from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import 'moment/locale/ru';
import { Link } from 'react-router-dom';
import {AuthorInfo, AuthorName} from './style';
import avatarSystem from '../../images/header/avatar.svg';

function UserInfo({username, image, createdAt}) {
  return (
    <AuthorInfo>
      <Link to={`/@${username}`}>
        <img src={image ? avatarSystem : avatarSystem} alt={username} />
      </Link>

      <AuthorName>
        <Link to={`/@${username}`} className="text text_type_main-default">
          {username}
        </Link>
        <div className="text text_type_main-default text_color_inactive">
          {moment(new Date(createdAt)).format('dd, D MMMM YYYY')}
        </div>
      </AuthorName>
    </AuthorInfo>
  );
}

UserInfo.propTypes = {
  username: PropTypes.string,
  image: PropTypes.string,
  createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default UserInfo;
