import ArticleList from '../ArticleList/ArticleList';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import agent from '../../agent';
import { connect } from 'react-redux';
import EditSettingsIcon from '../../assets/ico/EditSettingsIcon';
import HeartIcon from '../Heart/Heart';

import styles from './profile.module.scss';

import { FOLLOW_USER, UNFOLLOW_USER, PROFILE_PAGE_LOADED, PROFILE_PAGE_UNLOADED } from '../../constants/actionTypes';
// import {
//   FOLLOW_USER,
//   UNFOLLOW_USER,
//   PROFILE_PAGE_LOADED,
//   PROFILE_PAGE_UNLOADED
// } from '../../slices/profile';
// import {
//   PROFILE_PAGE_LOADED as PROFILE_ARTICLE_LOADED,
//   PROFILE_PAGE_UNLOADED as PROFILE_ARTICLE_UNLOADED
// } from '../../slices/articleList';
import TabsNavigation from '../Tabs/TabsNavigation/TabsNavigation';
import TabsItem from '../Tabs/TabItem/TabsItem';

const EditProfileSettings = (props) => {
  if (props.isUser) {
    return (
      <Link alt="Настройки профиля" to="/settings" className={styles.editbutton}>
        <EditSettingsIcon />
      </Link>
    );
  }
  return null;
};

const FollowUserButton = (props) => {
  if (props.isUser) {
    return null;
  }

  let classes = 'btn btn-sm action-btn';

  props.user.following ? (classes += ' btn-secondary') : (classes += ' btn-outline-secondary');

  // if (props.user.following) {
  //   classes += ' btn-secondary';
  // } else {
  //   classes += ' btn-outline-secondary';
  // }

  const handleClick = (ev) => {
    ev.preventDefault();
    if (props.user.following) {
      props.unfollow(props.user.username);
    } else {
      props.follow(props.user.username);
    }
  };

  return (
    props.currentUser && (
      <div
        onClick={handleClick}
        className={`${styles.followbutton} ${props.user.following ? styles.favorite : styles.unfavorite}`}>
        <HeartIcon />
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  ...state.articleList,
  currentUser: state.common.currentUser,
  profile: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  onFollow: (username) =>
    dispatch({
      type: FOLLOW_USER,
      payload: agent.Profile.follow(username),
    }),
  onLoad: (payload) => {
    // dispatch({ type: PROFILE_ARTICLE_LOADED, payload })
    dispatch({ type: PROFILE_PAGE_LOADED, payload });
  },
  onUnfollow: (username) =>
    dispatch({
      type: UNFOLLOW_USER,
      payload: agent.Profile.unfollow(username),
    }),
  onUnload: () => {
    // dispatch({ type: PROFILE_ARTICLE_UNLOADED })
    dispatch({ type: PROFILE_PAGE_UNLOADED });
  },
});

const Profile = (props) => {
  const [tab, setTab] = useState('byAuthor');

  useEffect(() => {
    props.onLoad(
      Promise.all([
        agent.Profile.get(props.match.params.username),
        agent.Articles.byAuthor(props.match.params.username),
      ]),
    );
    setTab('byAuthor');

    return () => {
      props.onUnload();
    };
    //eslint-disable-next-line
  }, [props.match.url]);

  const clickHandler = (type) => {
    if (type === 'byAuthor') {
      props.onLoad(
        Promise.all([
          agent.Profile.get(props.match.params.username),
          agent.Articles.byAuthor(props.match.params.username),
        ]),
      );
    } else {
      props.onLoad(
        Promise.all([
          agent.Profile.get(props.match.params.username),
          agent.Articles.favoritedBy(props.match.params.username),
        ]),
      );
    }
    setTab(type);
  };

  const profile = props.profile;
  if (!profile) {
    return null;
  }

  const isUser = props.currentUser && props.profile.username === props.currentUser.username;

  return (
    profile && (
      <div className="profile-page">
        <div className={styles.banner}>
          <section className={styles.banner__container}>
            <div className={styles.settings}>
              <EditProfileSettings isUser={isUser} />
              <FollowUserButton
                isUser={isUser}
                user={profile}
                follow={props.onFollow}
                unfollow={props.onUnfollow}
                currentUser={props.currentUser}
              />
              <h2 className={styles.profile__name}>
                <Link to={`/profile/${profile.username}`}>{profile.username}</Link>
              </h2>
            </div>
            <div className={styles.main__block}>
              <img src={profile.image} className="user-img" alt={profile.username} />
              <section className={styles.stats__block}>
                <h3>Статистика</h3>
                <p>
                  <b>Рейтинг:</b> 0,87 (4 место)
                </p>
                <p>
                  <b>Статьи:</b> 7 (0,03)
                </p>
                <p>
                  <b>Задачи:</b> 12 (0,15)
                </p>
              </section>

              <section className={styles.employment__block}>
                <h3>Блок трудоустройства</h3>
                <p>
                  <b>Дата регистрации:</b> 10.06.2021г.
                </p>
                <p>
                  <b>Репозиторий:</b> ссылка
                </p>
                <p>
                  <b>Резюме:</b> ссылка
                </p>
              </section>
              <div className={styles.graph__block}>
                <p>Место под график активности</p>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.content__container}>
          <div>
            <TabsNavigation>
              <TabsItem
                name={
                  props.currentUser && props.currentUser.username === props.profile.username
                    ? 'Мои записи'
                    : 'Записи пользователя'
                }
                type="byAuthor"
                onTabClick={clickHandler}
                active={tab === 'byAuthor' ? true : false}
              />
              <TabsItem
                name="Любимые записи"
                type="favoritedBy"
                onTabClick={clickHandler}
                active={tab === 'favoritedBy' ? true : false}
              />
            </TabsNavigation>
          </div>
          <ArticleList
            pager={props.pager}
            articles={props.articles}
            articlesCount={props.articlesCount}
            state={props.currentPage}
            currentPage={props.currentPage}
            profile={true}
            currentUser={props.currentUser}
            tab={tab}
          />
        </div>
      </div>
    )
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
export { Profile, mapStateToProps };
