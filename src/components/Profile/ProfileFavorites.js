import { Profile, mapStateToProps } from './Profile';
import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED
} from '../../constants/actionTypes';
import s from './profile.module.css'

const mapDispatchToProps = dispatch => ({
  onLoad: (pager, payload) =>
    dispatch({ type: PROFILE_PAGE_LOADED, pager, payload }),
  onUnload: () =>
    dispatch({ type: PROFILE_PAGE_UNLOADED })
});

class ProfileFavorites extends Profile {
  componentWillMount() {
    this.props.onLoad(page => agent.Articles.favoritedBy(this.props.match.params.username, page), Promise.all([
      agent.Profile.get(this.props.match.params.username),
      agent.Articles.favoritedBy(this.props.match.params.username)
    ]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  renderTabs() {
    return (
      <ul className={s.tabs}>
        <li className={s.tab}>
          <Link
            className={s.link}
            to={`/@${this.props.profile.username}`}>
            Мои записи
          </Link>
        </li>

        <li className={s.tab}>
          <Link
            className={`${s.link} ${s.link_active}`}
            to={`/@${this.props.profile.username}/favorites`}>
            Любимые записи
          </Link>
        </li>
      </ul>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFavorites);
