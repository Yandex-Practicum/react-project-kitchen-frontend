import React from 'react';
import PropTypes from 'prop-types';
import ListPagination from '../../ListPagination';
import ArticlePreview from './ArticlePreview/ArticlePreview';
import articleListStyles from './ArticleList.module.css';

const ArticleList = ({ articles, articlesCount, currentPage, pager }) => {
  if (!articles) {
    return <div className={articleListStyles.preview}>Загрузка...</div>;
  }

  if (articles.length === 0) {
    return <div className={articleListStyles.preview}>Здесь пусто... пока что.</div>;
  }

  return (
    <div>
      {articles.map((article) => (
        <ArticlePreview article={article} key={article.slug} />
      ))}

      <ListPagination
        pager={pager}
        articlesCount={articlesCount}
        currentPage={currentPage}
      />
    </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array,
  articlesCount: PropTypes.number,
  currentPage: PropTypes.number,
  pager: PropTypes.func,
};

ArticleList.defaultProps = {
  articles: null,
  articlesCount: null,
  currentPage: null,
  pager: null,
};

export default ArticleList;
