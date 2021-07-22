import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import agent from '../../agent';
import { connect, useSelector } from 'react-redux';
import Heart from '../../assets/ico/HeartIcon';
import s from './ArticlePreview.module.scss';
import Tags from '../Tags/Tags';
import UserMeta from '../UserMeta/UserMeta';
import DeleteIcon from '../../assets/ico/DeleteIcon';
import { CHANGE_FAVORITES_STATUS, HOME_ARTICLES_LOADED, DELETE_ARTICLE } from '../../slices/articles-slice/articles';

const FAVORITED_CLASS = s.article__btn_unfavorite;
const NOT_FAVORITED_CLASS = s.article__btn_favorite;

const mapDispatchToProps = (dispatch) => ({
  favorite: (slug) =>
    dispatch({
      type: CHANGE_FAVORITES_STATUS,
      payload: agent.Articles.favorite(slug),
    }),
  unfavorite: (slug) =>
    dispatch({
      type: CHANGE_FAVORITES_STATUS,
      payload: agent.Articles.unfavorite(slug),
    }),
  onClickDelete: (payload) => {
    dispatch({ type: DELETE_ARTICLE, payload });
  },
  onLoadHome: (tab, pager, payload) => {
    dispatch({ type: HOME_ARTICLES_LOADED, tab, pager, payload });
  },
});

const ArticlePreview = (props) => {
  const deleted = useSelector((state) => state.articles.deleted);
  const article = props.article;
  const favoriteButtonClass = article.favorited ? FAVORITED_CLASS : NOT_FAVORITED_CLASS;
  const articleLikeCounter = article.favoritesCount > 0 ? article.favoritesCount : null;
  const currentUserArticle = props.currentUser
    ? props.currentUser.username === props.article.author.username
      ? true
      : false
    : false;
  const [deleteFlag, setDeleteFlag] = useState(false);

  const handleDeleteClick = (ev) => {
    ev.preventDefault();
    props.onClickDelete(agent.Articles.del(props.article.slug));
    setDeleteFlag(true);
  };

  const handleFavouriteClick = (ev) => {
    if (!props.currentUser) {
      return;
    }
    ev.preventDefault();

    if (article.favorited) {
      props.unfavorite(article.slug);
    } else {
      props.favorite(article.slug);
    }
  };
  const [disabled, setDisabled] = React.useState(true);

  useEffect(() => {
    if (props.token !== null) {
      setDisabled(false);
    }
    //eslint-disable-next-line
  }, [props.token]);

  useEffect(() => {
    if (deleted) {
      props.onLoadHome('all', agent.Articles.all, Promise.all([agent.Tags.getAll(), agent.Articles.all()]));
    }
    //eslint-disable-next-line
  }, [deleted]);

  return (
    !deleteFlag && (
      <li className={s.article}>
        {article.photo && <div className={s.article__photo}></div>}
        <div className={s.article__post}>
          <div className={s.article__header}>
            <UserMeta section="article" article={props.article} />
            <div>
              {currentUserArticle && (
                <button className={s.delete__button} onClick={handleDeleteClick}>
                  <DeleteIcon />
                </button>
              )}
              {!currentUserArticle && (
                <button
                  className={
                    props.currentUser
                      ? `${s.article__btn} ${favoriteButtonClass}`
                      : `${s.article__btn} ${favoriteButtonClass} ${s.article__btn_logout}`
                  }
                  onClick={handleFavouriteClick}
                  disabled={disabled}>
                  {articleLikeCounter} <Heart />
                </button>
              )}
            </div>
          </div>
          <Link to={`/article/${article.slug}`} className={s.article__title}>
            <h2>{article.title}</h2>
          </Link>
          <p className={s.article__descr}>{article.description}</p>
          <div className={s.article__footer}>
            <Link to={`/article/${props.article.slug}`} className={s.article__more}>
              Развернуть...
            </Link>
            <Tags tags={article.tagList} onClickTag={() => {}} subType={true} />
          </div>
        </div>
      </li>
    )
  );
};

export default connect(() => ({}), mapDispatchToProps)(ArticlePreview);
