import React from 'react';
import ListPagination from '../../ListPagination';
import ArticlePreview from './ArticlePreview/ArticlePreview';

const ArticleList = (props) => {
  if (!props.articles) {
    return <div className="article-preview">Загрузка...</div>;
  }

  if (props.articles.length === 0) {
    return <div className='article-preview'>No articles are here... yet.</div>;
  }

  return (
    <div>
      {props.articles.map((article) => {
        return <ArticlePreview article={article} key={article.slug} />;
      })}

      <ListPagination
        pager={props.pager}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default ArticleList;
