import Banner from './Banner';
import MainView from './MainView';
import React from 'react';
import Tags from '../Tags/Tags';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER
} from '../../constants/actionTypes';
import styles from './home.module.scss'

const {content__container, content__tags, wrapper, tags__title} = styles;

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

class Home extends React.Component {
  UNSAFE_componentWillMount() {
    const tab = this.props.token ? 'feed' : 'all';
    const articlesPromise = this.props.token ?
      agent.Articles.feed :
      agent.Articles.all;

    this.props.onLoad(tab, articlesPromise, Promise.all([agent.Tags.getAll(), articlesPromise()]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <>
        <Banner token={this.props.token} appName={this.props.appName} />
        <main className={content__container}>
          {/* <div className="container page"> */}
            {/* <div className="row"> */}
          <MainView />
          <div className={wrapper}>
            <section className={content__tags}>
              <p className={tags__title}>Популярные теги</p>

              <Tags
                tags={this.props.tags}
                onClickTag={this.props.onClickTag} />
            </section>
          </div>

          {/* <section className="col-md-3"> */}
          {/* </section> */}
            {/* </div> */}
          {/* </div> */}
        </main>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
