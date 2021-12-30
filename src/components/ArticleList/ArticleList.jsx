import PropTypes from 'prop-types';

import ArticlePreview from '../ArticlePreview/ArticlePreview';
import ListPagination from '../ListPagination';
import React from 'react';

import { ListWrapper } from './Styles';

const ArticleList = props => {
  if (!props.articles) {
    return (
      <ListWrapper >
        Загрузка...
      </ListWrapper>
    );
  }

  if (props.articles.length === 0) {
    return (
      <ListWrapper >
        <div className="empty-wrapper">
          Здесь пусто... Пока что.
        </div>
      </ListWrapper>
    );
  }

  return (
    <ListWrapper>
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
        currentPage={props.currentPage} 
      />

    </ListWrapper>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array,
  articlesCount: PropTypes.number,
  pager: PropTypes.func,
  currentPage: PropTypes.number
};

ArticleList.defaultProps = {
  articles: undefined,
  articlesCount: undefined,
  pager: undefined,
  currentPage: undefined
};

export default ArticleList;
