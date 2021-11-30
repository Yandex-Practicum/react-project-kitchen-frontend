import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import agent from '../../agent';
import {
  ARTICLE_FAVORITED,
  ARTICLE_UNFAVORITED,
} from '../../constants/actionTypes';
import styles from './ArticleCard.module.css';
import imagePath from '../../images/article-card-placeholder.jpg';
import { articlePropTypes } from '../../utils/prop-types';

const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';

const mapDispatchToProps = (dispatch) => ({
  favorite: (slug) => dispatch({
    type: ARTICLE_FAVORITED,
    payload: agent.Articles.favorite(slug),
  }),
  unfavorite: (slug) => dispatch({
    type: ARTICLE_UNFAVORITED,
    payload: agent.Articles.unfavorite(slug),
  }),
});

const ArticleCard = ({ article, ...props }) => {
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
    <article className={styles.container}>
      <div className={styles.imageWrap}>
        <img src={imagePath} className={styles.image} alt={article.title} />
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <Link to={`/@${article.author.username}`}>
            <img
              className={styles.metaImg}
              src={article.author.image}
              alt={article.author.username}
            />
          </Link>

          <div className={styles.info}>
            <Link className={styles.author} to={`/@${article.author.username}`}>
              {article.author.username}
            </Link>
            <span className={styles.date}>
              {new Date(article.createdAt).toDateString()}
            </span>
          </div>
          {/* TODO: replace with LikeButton */}
          <button
            type="button"
            className={favoriteButtonClass}
            onClick={handleClick}
          >
            <i className="ion-heart" />
            {article.favoritesCount}
          </button>
        </div>

        <div className={styles.preview}>
          <h1 className={styles.title}>
            {article.title.length > 40
              ? `${article.title.substring(0, 40)}...`
              : article.title}
          </h1>
          <p className={styles.text}>
            {article.body.length > 190
              ? `${article.body.substring(0, 190)}...`
              : article.body}
          </p>
        </div>
        <div className={styles.tagsWrap}>
          <Link to={`/article/${article.slug}`} className={styles.readMore}>
            <span>Читать</span>
          </Link>
          {/* TODO: replace with tagContainer */}
          <ul className="tag-list">
            {article.tagList.map((tag) => (
              <li className="tag-default tag-pill tag-outline" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default connect(() => ({}), mapDispatchToProps)(ArticleCard);

ArticleCard.propTypes = {
  article: articlePropTypes.isRequired,
  unfavorite: PropTypes.func.isRequired,
  favorite: PropTypes.func.isRequired,
};
