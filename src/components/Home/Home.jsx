import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Banner from './Banner';
import MainView from './MainView';
import Page from '../common/Page/Page';
import PopularTags from '../common/PopularTags/PopularTags';
import agent from '../../agent';
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER,
} from '../../constants/actionTypes';
import homeStyles from './Home.module.css';

const { Promise } = global;

const mapStateToProps = (state) => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token,
});

const mapDispatchToProps = (dispatch) => ({
  onClickTag: (tag, pager, payload) => dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) => dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () => dispatch({ type: HOME_PAGE_UNLOADED }),
});

class Home extends React.Component {
  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    const { token, onLoad } = this.props;
    const tab = token ? 'feed' : 'all';
    const articlesPromise = token
      ? agent.Articles.feed
      : agent.Articles.all;

    onLoad(tab, articlesPromise, Promise.all([agent.Tags.getAll(), articlesPromise()]));
  }

  componentWillUnmount() {
    const { onUnload } = this.props;
    onUnload();
  }

  render() {
    const { appName, tags, onClickTag } = this.props;

    const handleTagClick = (tag) => {
      onClickTag(tag, (page) => agent.Articles.byTag(tag, page), agent.Articles.byTag(tag));
    };

    return (
      <>
        <Banner appName={appName} />
        <Page>
          <div className={homeStyles.content}>
            <div className={homeStyles.articles}>
              <MainView />
            </div>
            <div className={homeStyles.tags}>
              <PopularTags
                tags={tags}
                onClickTag={handleTagClick}
              />
            </div>
          </div>
        </Page>
      </>
    );
  }
}

Home.propTypes = {
  appName: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  token: PropTypes.string.isRequired,
  onClickTag: PropTypes.func.isRequired,
  onLoad: PropTypes.func.isRequired,
  onUnload: PropTypes.func.isRequired,
};

Home.defaultProps = {
  tags: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
