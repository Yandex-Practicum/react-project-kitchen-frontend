import React from 'react';
import ArticlePreview from '../ArticlePreview/ArticlePreview';
import ListPagination from '../ListPagination/ListPagination';
import cn from 'classnames';
import styles from './ArticleList.module.scss';

const ArticleList = (props) => {
  if (!props.articles) {
    return <div className={[styles.article__container, styles.empty__content].join(' ')}>Данные загружаются..</div>;
  }

  if (props.articles.length === 0) {
    return <div className={[styles.article__container, styles.empty__content].join(' ')}>Здесь пусто... пока что.</div>;
  }

  return (
    <div className={styles.article__container}>
      <ul className={cn(styles.list, { [styles.listProfile]: props.profile })}>
        {props.articles.map((article) => {
          return (
            <ArticlePreview article={article} key={article.slug} token={props.token} currentUser={props.currentUser} />
          );
        })}
      </ul>
      <ListPagination pager={props.pager} articlesCount={props.articlesCount} currentPage={props.currentPage} />
    </div>
  );
};

export default ArticleList;
