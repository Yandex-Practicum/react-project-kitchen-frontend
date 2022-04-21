import ArticleList from './ArticleList';
import ProfileHeader from './ProfileHeader';
import RenderTabs from './RenderTabs';
import { useEffect } from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  FOLLOW_USER,
  UNFOLLOW_USER,
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED
} from '../constants/actionTypes';
import { TProfileProps } from './ProfileFavorites'

const mapStateToProps = (state: any) => ({
  ...state.articleList,
  currentUser: state.common.currentUser,
  profile: state.profile
});

const mapDispatchToProps = (dispatch: any) => ({
  onFollow: (username: any) => dispatch({
    type: FOLLOW_USER,
    payload: agent.Profile.follow(username)
  }),
  onLoad: (payload: any) => dispatch({ type: PROFILE_PAGE_LOADED, payload }),
  onUnfollow: (username: any) => dispatch({
    type: UNFOLLOW_USER,
    payload: agent.Profile.unfollow(username)
  }),
  onUnload: () => dispatch({ type: PROFILE_PAGE_UNLOADED })
});

function Profile(props: TProfileProps) {
  const profile = props.profile;
  const isUser = props.currentUser &&
    props.profile.username === props.currentUser.username;

  useEffect(() => {
    props.onLoad(Promise.all([
      agent.Profile.get(props.match.params.username),
      agent.Articles.byAuthor(props.match.params.username)
    ]));

    return () => {
      props.onUnload();
    }
  }, [])

  if (!profile) {
    return null;
  }
  return (
    <div className="profile-page">
      <ProfileHeader
        profile={profile}
        isUser={isUser}
        follow={props.onFollow}
        unfollow={props.onUnfollow}
      />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <RenderTabs username={profile.username} />
            </div>
            <ArticleList
              pager={props.pager}
              articles={props.articles}
              articlesCount={props.articlesCount}
              state={props.currentPage} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
export { Profile, mapStateToProps };
