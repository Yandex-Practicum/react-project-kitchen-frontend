import ArticleList from './ArticleList';
import ProfileHeader from './ProfileHeader';
import RenderTabs from './RenderTabs';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED
} from '../constants/actionTypes';
import { TProfileProps } from './ProfileFavorites';
import {
  getArticlesByAuthor,
  followUser as _followUserApi,
  getProfile,
} from '../api';

function Profile({ match }: TProfileProps) {
  const dispatch = useDispatch();
  const { username, image, following, bio } = useSelector((state: any) => state.profile);
  const { pager, articles, articlesCount, currentPage } = useSelector((state: any) => state.articleList);

  //Вынести эти функции onLoad и onUnload в отдельную директорию или вообще объединить Profile с ProfileFavoritos.
  const onLoad = (payload: any) => {
    dispatch({ type: PROFILE_PAGE_LOADED, payload });
  }

  const onUnload = () => {
    dispatch({ type: PROFILE_PAGE_UNLOADED })
  }

  //Match берет данные из роутинга. При обновлении роутера необходимо избавиться от пропсов и считывать из адресной строки. Возможно useEffect отрефакторить.
  useEffect(() => {
    onLoad(Promise.all([
      getProfile(match.params.username),
      getArticlesByAuthor(match.params.username)
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
        //Понять что за bio и откуда оно берется, в ответе сервера его нет.
        profile={{ username, image, following, bio }}
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

export default Profile
