import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ArticleList from '../common/ArticleList/ArticleList';
import Page from '../common/Page/Page';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import TabLinks from '../common/TabLinks/TabLinks';
import agent from '../../agent';
import {
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED,
} from '../../constants/actionTypes';
import { authorType, locationType, matchType } from '../../utils/types';

const mapStateToProps = (state) => ({
  ...state.articleList,
  currentUser: state.common.currentUser,
  profile: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload) => dispatch({ type: PROFILE_PAGE_LOADED, payload }),
  onUnload: () => dispatch({ type: PROFILE_PAGE_UNLOADED }),
});

class Profile extends React.Component {
  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    const { onLoad, match } = this.props;
    onLoad(
      Promise.all([
        agent.Profile.get(match.params.username),
        agent.Articles.byAuthor(match.params.username),
      ]),
    );
  }

  componentWillUnmount() {
    const { onUnload } = this.props;
    onUnload();
  }

  render() {
    const { profile, currentUser } = this.props;
    if (!profile) {
      return null;
    }

    const isUser = currentUser && profile.username === currentUser.username;

    const { articles, articlesCount, currentPage, location, pager } = this.props;
    return (
      <>
        <ProfileHeader isUser={isUser} profile={profile} />
        <Page>
          <TabLinks
            tabs={[
              {
                path: `/@${profile.username}`,
                name: 'Ваши посты',
                isActive: location.pathname === `/@${profile.username}`,
              },
              {
                path: `/@${profile.username}/favorites`,
                name: 'Любимые посты',
                isActive: location.pathname === `/@${profile.username}/favorites`,
              },
            ]}
          />
          <ArticleList
            pager={pager}
            articles={articles}
            articlesCount={articlesCount}
            state={currentPage}
          />
        </Page>
      </>
    );
  }
}

Profile.propTypes = {
  match: matchType.isRequired,
  profile: authorType.isRequired,
  currentUser: authorType,
  onLoad: PropTypes.func.isRequired,
  onUnload: PropTypes.func.isRequired,
  articles: PropTypes.array,
  articlesCount: PropTypes.number,
  currentPage: PropTypes.number,
  pager: PropTypes.func,
  location: locationType.isRequired,
};

Profile.defaultProps = {
  currentUser: null,
  articles: null,
  articlesCount: null,
  currentPage: null,
  pager: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
export { Profile, mapStateToProps };
