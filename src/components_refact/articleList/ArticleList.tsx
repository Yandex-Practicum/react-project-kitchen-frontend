import React, { FC } from 'react';
import { TArticle } from '../../types/types';
import { ArticlePreview, ListPagination } from '../index';

export const ArticleList:FC<{ /* pager: (page: number) => void, */ articlesCount: number, /* state: number, */ articles:TArticle[] }> = ({
  /* pager, */ articlesCount, articles,/*  state, */
}) => {
  if (!articles) {
    return (
      <div className='article-preview'>Loading...</div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className='article-preview'>
        No articles are here... yet.
      </div>
    );
  }

  return (
    <div>
      {
        articles.map((article) => (
          <ArticlePreview article={article} key={article.slug} />
        ))
      }

      <ListPagination
        /* pager={pager} */
        articlesCount={articlesCount}
        currentPage={1} />
    </div>
  );
};
