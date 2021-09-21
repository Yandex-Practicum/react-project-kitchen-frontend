import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import agent from '../../agent';
import {
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED,
} from '../../constants/actionTypes';

const mapDispatchToProps = (dispatch) => ({
  onLoad: (pager, payload) => dispatch({ type: PROFILE_PAGE_LOADED, pager, payload }),
  onUnload: () => dispatch({ type: PROFILE_PAGE_UNLOADED }),
});

const mapStateToProps = (state) => ({
  ...state.articleList,
  currentUser: state.common.currentUser,
  profile: state.profile,
});

const ProfileFavorites = (props) => {
  useEffect(() => {
    props.onLoad((page) => agent.Articles.favoritedBy(props.match.params.username, page),
      Promise.all([
        agent.Profile.get(props.match.params.username),
        agent.Articles.favoritedBy(props.match.params.username),
      ]));
    return () => props.onUnload();
  }, []);

  return (
    <ul className="nav nav-pills outline-active">
      <li className="nav-item">
        <Link
          className="nav-link"
          to={`/@${props.profile.username}`}
        >
          My Articles
        </Link>
      </li>

      <li className="nav-item">
        <Link
          className="nav-link active"
          to={`/@${props.profile.username}/favorites`}
        >
          Favorited Articles
        </Link>
      </li>
    </ul>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFavorites);
