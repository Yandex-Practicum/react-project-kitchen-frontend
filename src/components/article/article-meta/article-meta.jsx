import React from 'react';
import PropTypes from 'prop-types';
import ArticleActions from '../article-actions';
import { Link } from 'react-router-dom';

const ArticleMeta = ({article, canModify}) => {
  return (
    <div className="article-meta">
      <Link to={`/@${article.author.username}`}>
        <img src={article.author.image} alt={article.author.username} />
      </Link>

      <div className="info">
        <Link to={`/@${article.author.username}`} className="author">
          {article.author.username}
        </Link>
        <span className="date">
          {new Date(article.createdAt).toDateString()}
        </span>
      </div>

      <ArticleActions canModify={canModify} article={article} />
    </div>
  );
};

ArticleMeta.propTypes = {
  canModify: PropTypes.bool,
  article: PropTypes.shape({
    author: PropTypes.shape({
      following: PropTypes.bool,
      image: PropTypes.string,
      username: PropTypes.string
    }),
    body: PropTypes.string,
    createdAt: PropTypes.string,
    description: PropTypes.string,
    favorited: PropTypes.bool,
    favoritesCount: PropTypes.number,
    image: PropTypes.shape({
      contentType: PropTypes.string,
      data: PropTypes.object,
      name: PropTypes.string
    }),
    slug: PropTypes.string,
    tagList: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    updatedAt: PropTypes.string
  })
};

export default ArticleMeta;
