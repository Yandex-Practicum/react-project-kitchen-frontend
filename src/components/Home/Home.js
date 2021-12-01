import Banner from './Banner';
import MainView from './MainView';
import React from 'react';
import Tags from './Tags';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER
} from '../../constants/actionTypes';
import homeStyles from './Home.module.css'

const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () =>
    dispatch({  type: HOME_PAGE_UNLOADED })
});

function Home(props) {
  // componentWillMount() {
    const tab = props.token ? 'feed' : 'all';
    const articlesPromise = props.token ?
      agent.Articles.feed :
      agent.Articles.all;

    props.onLoad(tab, articlesPromise, Promise.all([agent.Tags.getAll(), articlesPromise()]));
  // }

  // componentWillUnmount() {
  //   this.props.onUnload();
  // }

    return (
      <div className={homeStyles.main}>

        <Banner token={props.token} appName={props.appName} />
        <div className="container page">
          <div className="row">
            <MainView />

            <div className="col-md-3">
              <div className="sidebar">

                <p>Popular Tags</p>

                <Tags
                  tags={props.tags}
                  onClickTag={props.onClickTag} />

              </div>
            </div>
          </div>
        </div>

      </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
