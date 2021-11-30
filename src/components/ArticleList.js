import React from 'react';
import ArticleCard from './ArticleCard/ArticleCard';
import ListPagination from './ListPagination';

const ArticleList = (props) => {
  if (!props.articles) {
    return (
      <div className="article-preview">Загрузка...</div>
    );
  }

  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
        Здесь нет рецензий... пока.
      </div>
    );
  }

  return (
    <div>
      {
        props.articles.map((article) => (
          <ArticleCard article={article} key={article.slug} />
        ))
      }

      <ListPagination
        pager={props.pager}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default ArticleList;
