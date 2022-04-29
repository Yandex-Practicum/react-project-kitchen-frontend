import ProfileHeader from './ProfileHeader';
import RenderTabs from './RenderTabs';
import React, {FunctionComponent, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {profileSlice} from '../services/profileSlice';
import ArticleList from './ArticleList';
import { getFavoritedArticles, unfollowUser, getProfile } from '../api';
import { PROFILE_ARTICLE_LOADED } from '../services/articleListSlice';
import {useParams} from "react-router-dom";
import {followUser} from '../api';


// // TODO: Избавиться от этой бяки после роутинга.
// export type TProfileProps = {
//   match: {
//     isExact: boolean;
//     path: string;
//     url: string;
//     params: { username: string; }
//   };
// }

// function ProfileFavorites({ match }: TProfileProps) {
const ProfileFavorites: FunctionComponent = () => {

  const dispatch = useDispatch();

  const { username, image, following, bio } = useSelector((state: any) => state.profile);
  const { pager, articles, articlesCount, currentPage } = useSelector((state: any) => state.articleList);

  const actionsProfile = profileSlice.actions;

  const params: {username: string} = useParams();

  //Эти onFollow'ы перенести в FollowUserButton после полного подключения Редакс. Здесь они не нужны.
  const onFollow = (username: string) => {
    followUser(username).then((res) => {
      dispatch(actionsProfile.followUser(res))
    })
  }
  const onUnfollow = (username: string) => {
    unfollowUser(username).then((res) => {
      dispatch(actionsProfile.unfollowUser(res))
    })
  }
  //Вынести эти функции onLoad и onUnload в отдельную директорию или вообще объединить Profile с ProfileFavoritos.
  const onLoad = (payload: any) => {
    dispatch(actionsProfile.loadSuccess(payload));
    dispatch({ type: PROFILE_ARTICLE_LOADED, payload });
  }

  const onUnload = () => {
    dispatch(actionsProfile.unload())
  }

  //Match берет данные из роутинга. При обновлении роутера необходимо избавиться от пропсов и считывать из адресной строки. Возможно useEffect отрефакторить.
  useEffect(() => {
    onLoad(Promise.all([
      getProfile(params.username),
      getFavoritedArticles(params.username)
    ]));

    return () => {
      onUnload();
    }
  }, [])


  if (!username) {
    return null;
  }
  return (
    <div className="profile-page">
      <ProfileHeader
        profile={{ username, image, following, bio }}
        follow={onFollow}
        unfollow={onUnfollow}
      />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <RenderTabs username={username} />
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
  )
}

export default ProfileFavorites
// function _followUserApi(username: any) {
//   throw new Error('Function not implemented.');
// }

