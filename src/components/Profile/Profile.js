import PropTypes from 'prop-types';
import ArticleList from '../ArticleList/ArticleList';
import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../../agent';
import { connect } from 'react-redux';

import {
  FOLLOW_USER,
  UNFOLLOW_USER,
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED
} from '../../constants/actionTypes';

// Components

import UserImage from '../UserImage/UserImage';

// Styles
import { 
  StyledLink, 
  StyledLi, 
  UserInfo,
  ActionButtonWraper,
  FollowButton
} from './Styles';

const EditProfileSettings = props => {


  if (props.isUser) {
    return (
      <StyledLink
        to="/settings"
      >
        Редактировать профиль
      </StyledLink>
    );
  }
  return null;
};


const FollowUserButton = props => {
  if (props.isUser) {
    return null;
  }

  const handleClick = ev => {
    ev.preventDefault();
    if (props.user.following) {
      props.unfollow(props.user.username);
    } else {
      props.follow(props.user.username);
    }
  };

  return (
    <FollowButton
      onClick={handleClick}>
      
      {props.user.following ? 
        (<div className="follow-button">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1V15" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 8H15" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg> 
          Подписаться
        </div>)
        : 
        (<div className="follow-button">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H15" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg> 
          Отписаться
        </div>)
      }
    </FollowButton>
  );
};

const mapStateToProps = state => ({
  ...state.articleList,
  currentUser: state.common.currentUser,
  profile: state.profile
});

const mapDispatchToProps = dispatch => ({
  onFollow: username => dispatch({
    type: FOLLOW_USER,
    payload: agent.Profile.follow(username)
  }),
  onLoad: payload => dispatch({ type: PROFILE_PAGE_LOADED, payload }),
  onUnfollow: username => dispatch({
    type: UNFOLLOW_USER,
    payload: agent.Profile.unfollow(username)
  }),
  onUnload: () => dispatch({ type: PROFILE_PAGE_UNLOADED })
});

function Profile(props) {
  React.useEffect(() => {
    if(props.isFavorites) {
      props.onFavoritesLoad();
    } else {
      props.onLoad(Promise.all([
        agent.Profile.get(props.match.params.username),
        agent.Articles.byAuthor(props.match.params.username)
      ]));
    }
    return () => {
      props.onUnload();
    };
    // eslint-disable-next-line
  },[]);

  function renderTabs() {
    return (
      
      <ul className="nav nav-pills outline-active">
        <StyledLi 
          className="nav-item"
          active={!props.isFavorites} 
        >
          <Link
            className="nav-link "
            to={`/@${props.profile.username}`}
          >
            Ваши посты
          </Link>
        </StyledLi>

        <StyledLi 
          className="nav-item"
          active={props.isFavorites}
        >
          <Link
            className="nav-link"
            to={`/@${props.profile.username}/favorites`}
          >
            Любимые посты
          </Link>
        </StyledLi>
      </ul>
       
    );
  }

  
  const profile = props.profile;

  if (!profile) {
    return null;
  }

  const isUser = props.currentUser &&
    props.profile.username === props.currentUser.username;

  return (
    <div className="profile-page">

      <UserInfo>
        <UserImage src={profile.image}  alt={profile.username} location="profile" />
        <h4>{profile.username}</h4>
        <p>{profile.bio}</p>

        <ActionButtonWraper>
          <EditProfileSettings isUser={isUser} />
          <FollowUserButton
            isUser={isUser}
            user={profile}
            follow={props.onFollow}
            unfollow={props.onUnfollow}
          />
        </ActionButtonWraper>
      </UserInfo>

      <div className="container">
        <div className="row">

          <div className="col-xs-12 col-md-10 offset-md-1">

            <div className="articles-toggle">
              {renderTabs()}
            </div>

            <ArticleList
              pager={props.pager}
              articles={props.articles}
              articlesCount={props.articlesCount}
              state={props.currentPage} />
          </div>

        </div>
      </div>

    </div>
  );
  
}

EditProfileSettings.propTypes = {
  isUser: PropTypes.bool,
};

EditProfileSettings.defaultProps = {
  isUser: false,
};

FollowUserButton.propTypes = {
  isUser: PropTypes.bool,
  user: PropTypes.object,
  unfollow: PropTypes.func,
  follow: PropTypes.func,
};

/*FollowUserButton.defaultProps = {
  isUser: false,
  user: {},
  unfollow: () => {},
  follow: () => {},
};*/

Profile.propTypes = {
  currentUser: PropTypes.object,
  onFollow: PropTypes.func,
  onUnfollow: PropTypes.func,
  onLoad: PropTypes.func,
  onUnload: PropTypes.func,
  isFavorites: PropTypes.bool,
  onFavoritesLoad: PropTypes.func,
  match: PropTypes.object,
  profile: PropTypes.object,
  pager: PropTypes.any,
  currentPage: PropTypes.number,
  articles: PropTypes.arrayOf(PropTypes.object),
  articlesCount: PropTypes.number
};

/*Profile.defaultProps = {
  currentUser: {},
  onFollow: () => {},
  onUnfollow: () => {},
  onLoad: () => {},
  onUnload: () => {},
  isFavorites: false,
  onFavoritesLoad: () => {},
  match: {},
  profile: {},
  pager: undefined,
  currentPage: 0,
  articles: [{}],
  articlesCount: 0
};*/

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
export { Profile, mapStateToProps };
