import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PageBanner from '../../common/PageBanner/PageBanner';
import Button from '../../common/Button/Button';
import { PlusIcon, MinusIcon } from '../../../images/icons';
import agent from '../../../agent';
import {
  FOLLOW_USER,
  UNFOLLOW_USER,
} from '../../../constants/actionTypes';
import { authorType } from '../../../utils/types';
import profileHeaderStyles from './ProfileHeader.module.css';

const mapStateToProps = (state) => ({
  currentUser: state.common.currentUser,
  profile: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  onFollow: (username) => (
    dispatch({
      type: FOLLOW_USER,
      payload: agent.Profile.follow(username),
    })),
  onUnfollow: (username) => (
    dispatch({
      type: UNFOLLOW_USER,
      payload: agent.Profile.unfollow(username),
    })),
});

const ProfileHeader = ({ isUser, profile, onFollow, onUnfollow }) => {
  const buttonIcon = profile.following ? <MinusIcon /> : <PlusIcon />;
  const buttonTitle = profile.following ? 'Отписаться' : 'Подписаться';

  const handleClick = (ev) => {
    ev.preventDefault();
    if (profile.following) {
      onUnfollow(profile.username);
    } else {
      onFollow(profile.username);
    }
  };

  return (
    <PageBanner>
      <img
        src={profile.image}
        className={profileHeaderStyles.userImage}
        alt={profile.username}
      />
      <h4 className={profileHeaderStyles.userName}>{profile.username}</h4>
      <div className={profileHeaderStyles.button}>
        {!isUser && (
          <Button
            onClick={handleClick}
            isActive
            icon={buttonIcon}
            title={buttonTitle}
          />
        )}
      </div>
    </PageBanner>
  );
};

ProfileHeader.propTypes = {
  isUser: PropTypes.bool.isRequired,
  profile: authorType.isRequired,
  onFollow: PropTypes.func.isRequired,
  onUnfollow: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);
