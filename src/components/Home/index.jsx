import { useEffect } from 'react';
import Banner from './Banner';
import MainView from './MainView';
import React from 'react';
import Tags from '../Tags/Tags';
import agent from '../../agent';
import { connect } from 'react-redux';
import { APPLY_TAG_FILTER, HOME_ARTICLES_LOADED } from '../../slices/articles-slice/articles';

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
  onClickTag: (tag, pager, payload) => dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) => {
    dispatch({ type: HOME_ARTICLES_LOADED, tab, pager, payload });
  },
});

const Home = (props) => {
  // const articles
  useEffect(() => {
    const tab = 'all';
    const articlesPromise = agent.Articles.all;

    props.onLoad(tab, articlesPromise, Promise.all([agent.Tags.getAll(), articlesPromise()]));

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
            {props.tags && <Tags tags={props.tags} onClickTag={props.onClickTag} />}
          </section>
        </div>
      </main>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
