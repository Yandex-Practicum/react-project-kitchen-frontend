
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { connect, useDispatch } from 'react-redux';
// // import { ARTICLE_FAVORITED, ARTICLE_UNFAVORITED } from '../constants/actionTypes';
// import { ARTICLE_FAVORITED, ARTICLE_UNFAVORITED } from '../services/articleListSlice'
// import { setArticleAsFavorite, deleteArticleAsFavorite } from '../api';

// const FAVORITED_CLASS = 'btn btn-sm btn-primary';
// const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';
// interface TArticlePreviewProps  {

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteArticleAsFavoriteThunk,
  setArticleAsFavoriteThunk,
} from "../services/thunks";

const FAVORITED_CLASS = "btn btn-sm btn-primary";
const NOT_FAVORITED_CLASS = "btn btn-sm btn-outline-primary";

interface TArticlePreviewProps {
  article: any;
}

const ArticlePreview: React.FC<TArticlePreviewProps> = (props) => {
  const dispatch = useDispatch();

  // const { article } = props
  // const favoriteButtonClass = article.favorited ?
  //   FAVORITED_CLASS :
  //   NOT_FAVORITED_CLASS;

    // const favorite = (slug: any) => dispatch({
    //   type: ARTICLE_FAVORITED,
    //   payload: setArticleAsFavorite(slug)
    // });

    // const unfavorite = (slug: any) => dispatch({
    //   type: ARTICLE_UNFAVORITED,
    //   payload: deleteArticleAsFavorite(slug)
    // })

  // const handleClick = (e: React.SyntheticEvent) => {
  //   e.preventDefault();

  //   if (article.favorited) {
  //     dispatch(ARTICLE_FAVORITED(setArticleAsFavorite(article.slug)))
  //   } else {
  //     dispatch(ARTICLE_FAVORITED(setArticleAsFavorite(article.slug)))
  //   }
  // };


  const { article } = props;
  const favoriteButtonClass = article.favorited
    ? FAVORITED_CLASS
    : NOT_FAVORITED_CLASS;

  const handleClick = (e: React.SyntheticEvent) => {
    if (article.favorited) {
      dispatch(deleteArticleAsFavoriteThunk(article.slug));
    } else {
      dispatch(setArticleAsFavoriteThunk(article.slug));
    }
  };

  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={`/@${article.author.username}`}>
          <img src={article.author.image} alt={article.author.username} />
        </Link>

        <div className="info">
          <Link className="author" to={`/@${article.author.username}`}>
            {article.author.username}
          </Link>
          <span className="date">
            {new Date(article.createdAt).toDateString()}
          </span>
        </div>

        <div className="pull-xs-right">
          <button className={favoriteButtonClass} onClick={handleClick}>
            {/*TODO: курсивный шрифт вынести в стили*/}
            <i className="ion-heart"></i> {article.favoritesCount}
          </button>
        </div>
      </div>

      <Link to={`/article/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {article.tagList.map((tag: any, i: number) => {
            return (
              <li className="tag-default tag-pill tag-outline" key={i}>
                {tag}
              </li>
            );
          })}
        </ul>
      </Link>
    </div>
  );
};

export default ArticlePreview;
