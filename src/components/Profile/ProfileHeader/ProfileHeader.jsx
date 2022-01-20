import React from "react";
import agent from "../../../agent";
import { connect } from "react-redux";
import {
  FOLLOW_USER,
  UNFOLLOW_USER,
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED,
} from "../../../constants/actionTypes";

import Button from "../../common/Button/Button";
import { PlusIcon, MinusIcon } from "../../../images/icons";

import ProfileHeaderStyles from "./ProfileHeader.module.css";

const mapStateToProps = (state) => ({
  currentUser: state.common.currentUser,
  profile: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  onFollow: (username) =>
    dispatch({
      type: FOLLOW_USER,
      payload: agent.Profile.follow(username),
    }),
  onUnfollow: (username) =>
    dispatch({
      type: UNFOLLOW_USER,
      payload: agent.Profile.unfollow(username),
    }),
});

const ProfileHeader = ({ isUser, profile }) => {
  const buttonIcon = profile.following ? <MinusIcon /> : <PlusIcon />;
  const buttonTitle = profile.following ? "Отписаться" : "Подписаться";

  const handleClick = (ev) => {
    ev.preventDefault();
    if (profile.following) {
      this.props.onUnfollow(profile.username);
    } else {
      this.props.onFollow(profile.username);
    }
  };

  return (
    <div className={ProfileHeaderStyles.profileHeader}>
      <img
        src={profile.image}
        className={ProfileHeaderStyles.userImage}
        alt={profile.username}
      />
      <h4 className={ProfileHeaderStyles.userName}>{profile.username}</h4>
      <div className={ProfileHeaderStyles.button}>
        {!isUser && (
          <Button
            onClick={handleClick}
            isActive={true}
            icon={buttonIcon}
            title={buttonTitle}
          />
        )}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);
export { ProfileHeader, mapStateToProps };
