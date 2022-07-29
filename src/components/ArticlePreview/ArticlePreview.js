import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import agent from '../../agent';
import { ARTICLE_FAVORITED, ARTICLE_UNFAVORITED } from '../../constants/actionTypes';
import styles from './style.module.css'

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

const ArticlePreview = ({ article, favorite, unfavorite }) => {
  const favoriteButtonClass = article.favorited ? FAVORITED_CLASS : NOT_FAVORITED_CLASS;

  const handleClick = (ev) => {
    ev.preventDefault();
    if (article.favorited) {
      unfavorite(article.slug);
    } else {
      favorite(article.slug);
    }
  };

  return (
    <div className={styles.article_preview}>
      <div className={styles.row}>
        <div className={styles.col}>
      <div className={styles.image}/>
        </div>
        <div className={`${styles.col} ${styles.w100}`}>
      <div className='article-meta'>
        <Link to={`/@${article.author.username}`}>
          <img src={article.author.image} alt={article.author.username} />
        </Link>

        <div className='info'>
          <Link className='author' to={`/@${article.author.username}`}>
            {article.author.username}
          </Link>
          <span className='date'>{new Date(article.createdAt).toDateString()}</span>
        </div>

        <div className='pull-xs-right'>
          <button className={favoriteButtonClass} onClick={handleClick}>
            <i className='ion-heart'></i> {article.favoritesCount}
          </button>
        </div>
      </div>

      <Link to={`/article/${article.slug}`} className='preview-link'>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Читать продолжение...</span>
        <ul className='tag-list'>
          {article.tagList.map((tag) => (
            <li className='tag-default tag-pill tag-outline' key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </Link>
        </div>
      </div>
    </div>

  );
};

ArticlePreview.propTypes = {
  article: PropTypes.object,
  unfavorite: PropTypes.func,
  favorite: PropTypes.func,
};

export default connect(() => ({}), mapDispatchToProps)(ArticlePreview);
