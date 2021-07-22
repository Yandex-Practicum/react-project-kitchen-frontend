import ArticleList from '../ArticleList/ArticleList';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import agent from '../../agent';
import { connect } from 'react-redux';
import EditSettingsIcon from '../../assets/ico/EditSettingsIcon';
import HeartIcon from '../../assets/ico/HeartIcon';

import styles from './profile.module.scss';

import { FOLLOW_USER, PROFILE_PAGE_LOADED } from '../../slices/profile-slice/profile';
import { PROFILE_ARTICLES_LOADED, PROFILE_ARTICLES_UNLOADED } from '../../slices/articles-slice/articles';
import TabsNavigation from '../Tabs/TabsNavigation/TabsNavigation';
import TabsItem from '../Tabs/TabItem/TabsItem';
import BaseAvatarIcon from '../../assets/ico/BaseAvatarIcon';

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
  ...state.articles,
  articles: state.articles.articles,
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
      type: FOLLOW_USER,
      payload: agent.Profile.unfollow(username),
    }),
  onLoad: (payload) => {
    dispatch({ type: PROFILE_PAGE_LOADED, payload });
    dispatch({ type: PROFILE_ARTICLES_LOADED, payload });
  },
  onUnload: () => {
    dispatch({ type: PROFILE_ARTICLES_UNLOADED });
  },
});

const Profile = (props) => {
  const [tab, setTab] = useState('byAuthor');
  const baseImage = props.profile.image === 'https://static.productionready.io/images/smiley-cyrus.jpg' ? true : false;
  const { username } = useParams();
  useEffect(() => {
    props.onLoad(Promise.all([agent.Profile.get(username), agent.Articles.byAuthor(username)]));
    setTab('byAuthor');

    return () => {
      props.onUnload();
    };
    //eslint-disable-next-line
  }, [username]);

  const clickHandler = (type) => {
    if (type === 'byAuthor') {
      props.onLoad(Promise.all([agent.Profile.get(username), agent.Articles.byAuthor(username)]));
    } else {
      props.onLoad(Promise.all([agent.Profile.get(username), agent.Articles.favoritedBy(username)]));
    }
    setTab(type);
  };

  const profile = props.profile;
  if (!profile) {
    return null;
  }

  const isUser = props.currentUser && props.profile.username === props.currentUser.username;

  const articlesRate = Number((Math.random() * 19).toFixed(0) + 1);
  const tasksRate = Number((Math.random() * 19).toFixed(0) + 2);

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
              {baseImage && <BaseAvatarIcon />}
              {!baseImage && <img src={profile.image} className="user-img" alt={profile.username} />}
              <section className={styles.stats__block}>
                <h3>Статистика</h3>
                <p>
                  <b>Рейтинг:</b> {(articlesRate * 0.4 + tasksRate * 0.2).toFixed(2)} (
                  {(Math.random() * 9).toFixed(0) + 1} место)
                </p>
                <p>
                  <b>Статьи:</b> {articlesRate} ({(articlesRate * 0.4).toFixed(2)})
                </p>
                <p>
                  <b>Задачи:</b> {tasksRate} ({(tasksRate * 0.2).toFixed(2)})
                </p>
              </section>

              <section className={styles.employment__block}>
                <h3>Блок трудоустройства</h3>
                <p>
                  <b>Дата регистрации:</b> {profile.createdAt && profile.createdAt.slice(0, 10)}
                </p>
                <p>
                  <b>Репозиторий:</b> {props.profile.gh ? <a href={props.profile.gh}>ссылка</a> : ''}
                </p>
                <p>
                  <b>Резюме:</b> {props.profile.cv ? <a href={props.profile.cv}>ссылка</a> : ''}
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
