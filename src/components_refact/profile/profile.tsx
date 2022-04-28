import React, { FC, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from '../../services/hooks';
import { EditProfileSettings, FollowUserButton, ArticleList } from '../index';
import { FOLLOW_USER, UNFOLLOW_USER } from '../../constants/actionTypes';
import agent from '../../agent';
import {
  fetchProfile, fetchPublicFeed, postFollowProfile, deleteFollowProfile,
} from '../../services/api';
import { PROFILE_PAGE_LOADED, PROFILE_PAGE_UNLOADED } from '../../constants';

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.profile);
  const { currentUser } = useSelector((state) => state.common);
  const {
    pager, articles, articlesCount, currentPage,
  } = useSelector((state: any) => state.articleList);

  const onLoad = React.useCallback((payload: Promise<any>) => {
    dispatch({ type: PROFILE_PAGE_LOADED, payload });
  }, [dispatch]);

  useEffect(() => {
    const author = username;
    onLoad(Promise.all([fetchProfile(username), fetchPublicFeed(5, 0, author)]));
    return () => {
      dispatch({ type: PROFILE_PAGE_UNLOADED });
    };
  });

  const onFollow = () => {
    dispatch({
      type: FOLLOW_USER,
      payload: postFollowProfile(username),
    });
  };

  const onUnfollow = () => {
    dispatch({
      type: UNFOLLOW_USER,
      payload: deleteFollowProfile(username),
    });
  };

  const renderTabs = useCallback(() => (
    <ul className='nav nav-pills outline-active'>
      <li className='nav-item'>
        <Link
          className='nav-link active'
          to={`/@${username}`}>
          My Articles
        </Link>
      </li>

      <li className='nav-item'>
        <Link
          className='nav-link'
          to={`/@${username}/favorites`}>
          Favorited Articles
        </Link>
      </li>
    </ul>
  ), [username]);

  const profil = profile;
  if (!profil) {
    return null;
  }

  const isUser = currentUser
        && profile.username === currentUser.username;

  return (
    <div className='profile-page'>

      <div className='user-info'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-md-10 offset-md-1'>

              <img src={profile.image} className='user-img' alt={profile.username} />
              <h4>{profile.username}</h4>
              <p>{profile.bio}</p>

              <EditProfileSettings isUser={isUser} />
              <FollowUserButton
                isUser={isUser}
                user={profile}
                follow={onFollow}
                unfollow={onUnfollow} />

            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>

          <div className='col-xs-12 col-md-10 offset-md-1'>

            <div className='articles-toggle'>
              {renderTabs()}
            </div>

            <ArticleList
              pager={pager}
              articles={articles}
              articlesCount={articlesCount}
              state={currentPage} />
          </div>

        </div>
      </div>

    </div>
  );
};
