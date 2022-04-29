import ArticleList from './ArticleList';
import ProfileHeader from './ProfileHeader';
import RenderTabs from './RenderTabs';
import {FunctionComponent, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {profileSlice} from '../services/profileSlice';
import {
  getArticlesByAuthor,
  getProfile,
} from '../api';
import { PROFILE_ARTICLE_LOADED } from '../services/articleListSlice';
import {useParams} from "react-router-dom";

// function Profile({ match }: TProfileProps) {
const Profile: FunctionComponent = () => {

  const dispatch = useDispatch();
  const { username, image, following, bio } = useSelector((state: any) => state.profile);
  const { pager, articles, articlesCount, currentPage } = useSelector((state: any) => state.articleList);

  const actionsProfile = profileSlice.actions;

  const params: {username: string} = useParams();

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
      getArticlesByAuthor(params.username)
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
