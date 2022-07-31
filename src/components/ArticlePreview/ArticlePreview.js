import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import agent from '../../agent';
import {
  ARTICLE_FAVORITED,
  ARTICLE_UNFAVORITED,
} from '../../constants/actionTypes';
import styles from './articlePreview.module.scss';
import avatar from '../../images/avatarTemp.svg';

const FAVORITED_CLASS = `${styles.btn} ${styles.btn_sm} ${styles.btn_primary}`;
const NOT_FAVORITED_CLASS = `${styles.btn} ${styles.btn_sm} ${styles.btn_outline_primary}`;

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

const ArticlePreview = ({
  article,
  favorite,
  unfavorite,
}) => {
  const favoriteButtonClass = article.favorited
    ? FAVORITED_CLASS
    : NOT_FAVORITED_CLASS;

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
          <div className={styles.image} />
        </div>
        <div className={`${styles.col} ${styles.w100}`}>
          <div className={styles.article_meta}>
            <Link
              to={`/@${article.author.username}`}
              className={styles.avatar}
            >
              {article.author.image ? (
                <img
                  src={avatar}
                  alt={article.author.username}
                />
              ) : (
                <img
                  src={article.author.image}
                  alt={article.author.username}
                />
              )}
            </Link>

            <div className={styles.info}>
              <Link
                className={styles.author}
                to={`/@${article.author.username}`}
              >
                {article.author.username}
              </Link>
              <span className={styles.date}>
                {new Intl.DateTimeFormat('ru', {
                  weekday: 'short',
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                }).format(new Date(article.createdAt))}
              </span>
            </div>

            <div className={styles.pull_xs_right}>
              <button
                type='button'
                className={favoriteButtonClass}
                onClick={handleClick}
              >
                {article.favoritesCount}
                <i className='ion-heart offset-sm-6' />
              </button>
            </div>
          </div>

          <Link
            to={`/article/${article.slug}`}
            className='preview-link'
          >
            <h1 className={styles.title}>
              {article.title}
            </h1>
            <p className={styles.text}>
              {article.description}
            </p>
            <span className={styles.continue}>
              Читать продолжение...
            </span>
            <ul className={styles.tag_list}>
              {article.tagList.map((tag) => (
                <li
                  className={styles.tag_default}
                  key={tag}
                >
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

export default connect(
  () => ({}),
  mapDispatchToProps,
)(ArticlePreview);
