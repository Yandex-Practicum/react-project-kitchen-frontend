import ArticleList from './ArticleList';
import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../agent';
import { connect, useSelector } from 'react-redux';
//import { useDispatch } from 'react-redux';
import {
  FOLLOW_USER,
  UNFOLLOW_USER,
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED
} from '../constants/actionTypes';
import styled from 'styled-components';

const StyledLi = styled.li`
  box-shadow: inset 0px -2px 0px #0000FF;
  max-width: max-content;
`;
const StyledLinkActive = styled(Link)`
  font-size: 16px;
  line-height: 24px;
  color: #0A0A0B;
`;

const UserImage = styled.img`
  background: #E9E9ED;
  border: 2px solid #0A0A0B;
  border-radius: 50%;;
  box-sizing: border-box;
  width: 120px;
  height: 120px;
  margin-bottom: 8px;
`;

const EditProfileSettings = props => {
  const StyledLink = styled(Link)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;

    background-color: #0000FF;
    border-radius: 8px;
    color: #FFF !important;
    height: 40px;
  `;

  if (props.isUser) {
    return (
      <StyledLink
        to="/settings"
        className="btn btn-sm btn-outline-secondary action-btn"
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

  let classes = 'btn btn-sm action-btn';
  if (props.user.following) {
    classes += ' btn-secondary';
  } else {
    classes += ' btn-outline-secondary';
  }

  const handleClick = ev => {
    ev.preventDefault();
    if (props.user.following) {
      props.unfollow(props.user.username)
    } else {
      props.follow(props.user.username)
    }
  };

  return (
    <button
      className={classes}
      onClick={handleClick}>
      <i className="ion-plus-round"></i>
      &nbsp;
      {props.user.following ? 'Unfollow' : 'Follow'} {props.user.username}
    </button>
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
    props.onLoad(Promise.all([
      agent.Profile.get(props.match.params.username),
      agent.Articles.byAuthor(props.match.params.username)
    ]));
    return () => {
      props.onUnload();
    };

  },[]);

  function renderTabs() {
    
    return (
      <ul className="nav nav-pills outline-active">
        <StyledLi className="nav-item">
          <StyledLinkActive
            className="nav-link "
            to={`/@${props.profile.username}`}>
            Ваши посты
          </StyledLinkActive>
        </StyledLi>

        <li className="nav-item">
          <Link
            className="nav-link"
            to={`/@${props.profile.username}/favorites`}>
            Любимые посты
          </Link>
        </li>
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

      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">

              <UserImage src={profile.image}  alt={profile.username} />
              <h4>{profile.username}</h4>
              <p>{profile.bio}</p>

              <EditProfileSettings isUser={isUser} />
              <FollowUserButton
                isUser={isUser}
                user={profile}
                follow={props.onFollow}
                unfollow={props.onUnfollow}
              />

            </div>
          </div>
        </div>
      </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
export { Profile, mapStateToProps };
