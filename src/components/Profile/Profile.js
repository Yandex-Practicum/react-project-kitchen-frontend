import ArticleList from '../ArticleList/ArticleList';
import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../../agent';
import { connect } from 'react-redux';

import Button from '../Button/Button';
import MinusIcon from './MinusIcon';
import PlusIcon from './PlusIcon';

import styles from './profile.module.scss'

import {
  FOLLOW_USER,
  UNFOLLOW_USER,
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED
} from '../../constants/actionTypes';

const EditProfileSettings = props => {
  if (props.isUser) {
    return (
      <Link
        to="/settings"
        className={styles.editbutton}>
        <Button 
          className={styles.editbutton}
          children={'Редактировать профиль'} />

      </Link>
    );
  }
  return null;
};
        //<i className="ion-gear-a"></i> Редактировать профиль
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
    props.currentUser && (
    <Button 
      className={styles.followbutton}
      onClick={handleClick}>
      {props.user.following ? 
        <>
          <MinusIcon />
          <span>Отписаться</span>  
        </> :
        <>
          <PlusIcon />
          <span>Подписаться</span>
        </>
      }
    </Button>)
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

class Profile extends React.Component {
  componentWillMount() {
    this.props.onLoad(Promise.all([
      agent.Profile.get(this.props.match.params.username),
      agent.Articles.byAuthor(this.props.match.params.username)
    ]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  renderTabs() {
    return (
      <ul className={styles.tabs}>
        <li className={styles.item}>
          <Link
            className={`${styles.link} ${styles.link_active}`}
            to={`/@${this.props.profile.username}`}>
            Ваши записи
          </Link>
        </li>

        <li className={styles.item}>
          <Link
            className={styles.link}
            to={`/@${this.props.profile.username}/favorites`}>
            Любимые записи
          </Link>
        </li>
      </ul>
    );
  }

  render() {
    const profile = this.props.profile;
    if (!profile) {
      return null;
    }

    const isUser = this.props.currentUser &&
      this.props.profile.username === this.props.currentUser.username;

    return (
      <div className="profile-page">

        <div className={styles.banner}>
          <div className={styles.banner__container}>
            <div>
              <div className="">

                <img src={profile.image} className="user-img" alt={profile.username} />
                <h2>{profile.username}</h2>
                

                <EditProfileSettings isUser={isUser} />
                <FollowUserButton
                  isUser={isUser}
                  user={profile}
                  follow={this.props.onFollow}
                  unfollow={this.props.onUnfollow}
                  currentUser={this.props.currentUser}
                  />

              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">

            <div className="col-xs-12 col-md-10 offset-md-1">

              <div>
                {this.renderTabs()}
              </div>

              <ArticleList
                pager={this.props.pager}
                articles={this.props.articles}
                articlesCount={this.props.articlesCount}
                state={this.props.currentPage} />
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
export { Profile, mapStateToProps };
