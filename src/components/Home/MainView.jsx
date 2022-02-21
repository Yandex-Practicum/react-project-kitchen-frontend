import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ArticleList from '../common/ArticleList/ArticleList';
import Tabs from '../common/Tabs/Tabs';
import Tab from '../common/Tab/Tab';
import agent from '../../agent';
import { CHANGE_TAB } from '../../constants/actionTypes';
import mainViewStyles from './MainView.module.css';

const mapStateToProps = (state) => ({
  ...state.articleList,
  tags: state.home.tags,
  token: state.common.token,
});

const mapDispatchToProps = (dispatch) => ({
  onTabClick: (tab, pager, payload) => dispatch({ type: CHANGE_TAB, tab, pager, payload }),
});

const MainView = ({
  articles,
  articlesCount,
  currentPage,
  pager,
  tab,
  tag,
  token,
  onTabClick,
}) => (
  <div className={mainViewStyles.container}>
    <Tabs>
      {token && (
        <Tab
          name="Ваша лента"
          isActive={tab === 'feed'}
          onClick={() => onTabClick('feed', agent.Articles.feed, agent.Articles.feed())}
        />
      )}
      <Tab
        name="Лента"
        isActive={tab === 'all'}
        onClick={() => onTabClick('all', agent.Articles.all, agent.Articles.all())}
      />
      {tag && (
        <Tab
          name={`#${tag}`}
        />
      )}
    </Tabs>

    <ArticleList
      pager={pager}
      articles={articles}
      articlesCount={articlesCount}
      currentPage={currentPage}
    />
  </div>
);

MainView.propTypes = {
  articles: PropTypes.array,
  articlesCount: PropTypes.number,
  currentPage: PropTypes.number,
  pager: PropTypes.func,
  tag: PropTypes.string,
  tab: PropTypes.string,
  token: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

MainView.defaultProps = {
  articles: null,
  articlesCount: null,
  currentPage: null,
  pager: null,
  tab: null,
  tag: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
