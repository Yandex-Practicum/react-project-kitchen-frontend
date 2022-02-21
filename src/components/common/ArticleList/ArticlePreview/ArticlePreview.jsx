import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Tag from '../../Tag/Tag';
import TagsRow from '../../TagsRow/TagsRow';
import { LikeDefaultIcon } from '../../../../images/icons';
import {
  ARTICLE_FAVORITED,
  ARTICLE_UNFAVORITED,
} from '../../../../constants/actionTypes';
import agent from '../../../../agent';
import { articleType } from '../../../../utils/types';
import { ucFirst } from '../../../../utils/string';
import articlePreviewStyle from './ArticlePreview.module.css';

const mapDispatchToProps = (dispatch) => ({
  favorite: (slug) => (
    dispatch({
      type: ARTICLE_FAVORITED,
      payload: agent.Articles.favorite(slug),
    })),
  unfavorite: (slug) => (
    dispatch({
      type: ARTICLE_UNFAVORITED,
      payload: agent.Articles.unfavorite(slug),
    })),
});

const ArticlePreview = ({ article, favorite, unfavorite }) => {
  const handleClick = (ev) => {
    ev.preventDefault();
    if (article.favorited) {
      unfavorite(article.slug);
    } else {
      favorite(article.slug);
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
            <Link className={articlePreviewStyle.author} to={`/@${article.author.username}`}>
              {article.author.username}
            </Link>
            <span className={articlePreviewStyle.date}>
              {ucFirst(new Date(article.createdAt).toLocaleDateString('ru', {
                weekday: 'short',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              }))}
            </span>
          </div>
        </div>

        <button type="button" className={articlePreviewStyle.button} onClick={handleClick}>
          {article.favoritesCount}
          <LikeDefaultIcon />
        </button>
      </div>
      <div className={articlePreviewStyle.articleText}>
        <h1 className={articlePreviewStyle.title}>{article.title}</h1>
        <p className={articlePreviewStyle.description}>{article.description}</p>
      </div>
      <div className={articlePreviewStyle.articleFooter}>
        <Link to={`/article/${article.slug}`}>
          <span className={articlePreviewStyle.link}>Читать дальше</span>
        </Link>
        <TagsRow align="right">
          <Tag text="Теги:" white />
          {(article.tagList || []).map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </TagsRow>
      </div>
    </div>
  );
};

ArticlePreview.propTypes = {
  article: articleType.isRequired,
  favorite: PropTypes.func.isRequired,
  unfavorite: PropTypes.func.isRequired,
};

export default connect(() => ({}), mapDispatchToProps)(ArticlePreview);
