import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Tag from '../Tag/Tag';
import TagsRow from '../TagsRow/TagsRow';
import { LikeDefaultIcon } from '../../../images/icons';

import {
  ARTICLE_FAVORITED,
  ARTICLE_UNFAVORITED,
} from '../../../constants/actionTypes';

import agent from '../../../agent';
import articlePreviewStyle from './ArticlePreview.module.css';

const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';

const mapDispatchToProps = (dispatch) => ({
  favorite: (slug) =>
    dispatch({
      type: ARTICLE_FAVORITED,
      payload: agent.Articles.favorite(slug),
    }),
  unfavorite: (slug) =>
    dispatch({
      type: ARTICLE_UNFAVORITED,
      payload: agent.Articles.unfavorite(slug),
    }),
});

const ArticlePreview = (props) => {
  const article = props.article;
  const favoriteButtonClass = article.favorited
    ? FAVORITED_CLASS
    : NOT_FAVORITED_CLASS;

  const handleClick = (ev) => {
    ev.preventDefault();
    if (article.favorited) {
      props.unfavorite(article.slug);
    } else {
      props.favorite(article.slug);
    }
  };

  return (
    <div className={articlePreviewStyle.articlePreview}>
      <div className={articlePreviewStyle.articleHeader}>
        <div className={articlePreviewStyle.headerInfo}>
          <Link to={`/@${article.author.username}`}>
            <img
              src={article.author.image}
              alt={article.author.username}
              className={articlePreviewStyle.userImage}
            />
          </Link>
          <div className={articlePreviewStyle.headerText}>
            <Link className="author" to={`/@${article.author.username}`}>
              {article.author.username}
            </Link>
            <span className="date">
              {new Date(article.createdAt).toDateString()}
            </span>
          </div>
        </div>

        <button className={articlePreviewStyle.button} onClick={handleClick}>
          {article.favoritesCount} <LikeDefaultIcon />
        </button>
      </div>
      <div className={articlePreviewStyle.articleText}>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
      </div>
      <div className={articlePreviewStyle.articleFooter}>
        <Link to={`/article/${article.slug}`}>
          <span className={articlePreviewStyle.link}>Read more...</span>
        </Link>
        <TagsRow>
          <Tag text={'Теги:'} white />
          {(article.tagList || []).map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </TagsRow>
      </div>
    </div>
  );
};

export default connect(() => ({}), mapDispatchToProps)(ArticlePreview);
