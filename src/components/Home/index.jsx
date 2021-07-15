import { useEffect } from 'react';
import Banner from './Banner';
import MainView from './MainView';
import React from 'react';
import Tags from '../Tags/Tags';
import agent from '../../agent';
import { connect } from 'react-redux';
import { HOME_PAGE_UNLOADED } from '../../constants/actionTypes';
import { S_APPLY_TAG_FILTER, S_HOME_ARTICLES_LOADED } from '../../slices/articles';

import styles from './home.module.scss';

const { content__container, content__tags, wrapper, tags__title } = styles;

const Promise = global.Promise;

const mapStateToProps = (state) => ({
  ...state.article,
  articles: state.articles.articles,
  tags: state.articles.tags,
  appName: state.common.appName,
  token: state.common.token,
  currentUser: state.common.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  S_onClickTag: (tag, pager, payload) => dispatch({ type: S_APPLY_TAG_FILTER, tag, pager, payload }),
  S_onLoad: (tab, pager, payload) => {
    dispatch({ type: S_HOME_ARTICLES_LOADED, tab, pager, payload });
  },
  S0_onUnload: () => {
    dispatch({ type: HOME_PAGE_UNLOADED });
  },
});

const Home = (props) => {
  // const articles
  useEffect(() => {
    const tab = 'all';
    const articlesPromise = agent.Articles.all;

    props.S_onLoad(tab, articlesPromise, Promise.all([agent.Tags.getAll(), articlesPromise()]));
    return () => {
      props.S0_onUnload();
    };
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <Banner token={props.token} appName={props.appName} />
      <main className={content__container}>
        <MainView currentUser={props.currentUser} />
        <div className={wrapper}>
          <section className={content__tags}>
            <p className={tags__title}>Популярные теги</p>
            {!props.tags && <div className={styles.loading}>Теги подгружаются...</div>}
            {props.tags && <Tags tags={props.tags} onClickTag={props.S_onClickTag} />}
          </section>
        </div>
      </main>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
