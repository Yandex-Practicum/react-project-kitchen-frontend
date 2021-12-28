import PropTypes from 'prop-types';

import ArticlePreview from '../ArticlePreview/ArticlePreview';
import ListPagination from '../ListPagination';
import React from 'react';

const ArticleList = props => {
  if (!props.articles) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
        No articles are here... yet.
      </div>
    );
  }

  return (
    <div>
      {
        props.articles.map(article => {
          return (
            <ArticlePreview article={article} key={article.slug} />
          );
        })
      }

      <ListPagination
        pager={props.pager}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage} />
    </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.any,
  articlesCount: PropTypes.number,
  pager: PropTypes.any,
  currentPage: PropTypes.any
};

export default ArticleList;
