import ArticleList from "../ArticleList";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import TabLinks from "../common/TabLinks/TabLinks";
import React from "react";
import agent from "../../agent";
import { connect } from "react-redux";
import {
  FOLLOW_USER,
  UNFOLLOW_USER,
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED,
} from "../../constants/actionTypes";

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
  onLoad: (payload) => dispatch({ type: PROFILE_PAGE_LOADED, payload }),
  onUnfollow: (username) =>
    dispatch({
      type: UNFOLLOW_USER,
      payload: agent.Profile.unfollow(username),
    }),
  onUnload: () => dispatch({ type: PROFILE_PAGE_UNLOADED }),
});

class Profile extends React.Component {
  componentWillMount() {
    console.log(
      "-------------------------------------------------------------------------"
    );
    console.log(this.props.location.pathname);
    console.log(
      "-------------------------------------------------------------------------"
    );
    this.props.onLoad(
      Promise.all([
        agent.Profile.get(this.props.match.params.username.slice(1)),
        agent.Articles.byAuthor(this.props.match.params.username.slice(1)),
      ])
    );
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const profile = this.props.profile;
    if (!profile) {
      return null;
    }

    const isUser =
      this.props.currentUser &&
      this.props.profile.username === this.props.currentUser.username;

    return (
      <div className="profile-page">
        <div className="user-info">
          <ProfileHeader isUser={isUser} profile={profile} />
        </div>
        <div className="container">
          <div className="articles-toggle">
            <TabLinks
              tabs={[
                {
                  path: `/@${this.props.profile.username}`,
                  name: "My Articles",
                  isActive:
                    this.props.location.pathname ===
                    `/@${this.props.profile.username}`,
                },
                {
                  path: `/@${this.props.profile.username}/favorites`,
                  name: "Favorited Articles",
                  isActive:
                    this.props.location.pathname ===
                    `/@${this.props.profile.username}/favorites`,
                },
              ]}
            />
          </div>
          <ArticleList
            pager={this.props.pager}
            articles={this.props.articles}
            articlesCount={this.props.articlesCount}
            state={this.props.currentPage}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
export { Profile, mapStateToProps };
