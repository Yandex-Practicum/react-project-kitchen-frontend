import ProfileHeader from './ProfileHeader';
import RenderTabs from './RenderTabs';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FOLLOW_USER,
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED,
  UNFOLLOW_USER
} from '../services/profileSlice';
import ArticleList from './ArticleList';
import { getFavoritedArticles, unfollowUser, getProfile } from '../api';
import { PROFILE_ARTICLE_LOADED } from '../services/articleListSlice';


//Избавиться от этой бяки после роутинга.
export type TProfileProps = {
  match: {
    isExact: boolean;
    path: string;
    url: string;
    params: { username: string; }
  };
}

function ProfileFavorites({ match }: TProfileProps) {

  const dispatch = useDispatch();
  const { username, image, following, bio } = useSelector((state: any) => state.profile);
  const { pager, articles, articlesCount, currentPage } = useSelector((state: any) => state.articleList);

  //Эти onFollow'ы перенести в FollowUserButton после полного подключения Редакс. Здесь они не нужны.
  const onFollow = (username: string) => {
    dispatch({
      type: FOLLOW_USER,
      payload: _followUserApi(username)
    })
  }

  const onUnfollow = (username: string) => {
    dispatch({
      type: UNFOLLOW_USER,
      payload: unfollowUser(username)
    })
  }
  //Вынести эти функции onLoad и onUnload в отдельную директорию или вообще объединить Profile с ProfileFavoritos.
  const onLoad = (payload: any) => {
    dispatch({ type: PROFILE_PAGE_LOADED, payload });
    dispatch({ type: PROFILE_ARTICLE_LOADED, payload });
  }

  const onUnload = () => {
    dispatch({ type: PROFILE_PAGE_UNLOADED })
  }

  //Match берет данные из роутинга. При обновлении роутера необходимо избавиться от пропсов и считывать из адресной строки. Возможно useEffect отрефакторить.
  useEffect(() => {
    onLoad(Promise.all([
      getProfile(match.params.username),
      getFavoritedArticles(match.params.username)
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
function _followUserApi(username: any) {
  throw new Error('Function not implemented.');
}

