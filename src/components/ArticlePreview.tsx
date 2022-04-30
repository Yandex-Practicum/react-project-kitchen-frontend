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
