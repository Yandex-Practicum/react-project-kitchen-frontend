import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../../agent';
import { connect } from 'react-redux';
import { ARTICLE_FAVORITED, ARTICLE_UNFAVORITED } from '../../constants/actionTypes';

// Components
import LikeIcon from '../LikeIcon/LikeIcon';

import defaultAvatarPath from '../../images/default-avatar.svg';

// Styles
import { 
  FavoriteButton, 
  ArticleMeta, 
  Info,
  PreviewLink 
} from './Styles.jsx';
import UserImage from '../UserImage/UserImage';

const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';

const mapDispatchToProps = dispatch => ({
  favorite: slug => dispatch({
    type: ARTICLE_FAVORITED,
    payload: agent.Articles.favorite(slug)
  }),
  unfavorite: slug => dispatch({
    type: ARTICLE_UNFAVORITED,
    payload: agent.Articles.unfavorite(slug)
  })
});

const ArticlePreview = props => {
  const article = props.article;
  
  const favoriteButtonClass = article.favorited ?
    FAVORITED_CLASS :
    NOT_FAVORITED_CLASS;

  const handleClick = ev => {
    ev.preventDefault();
    if (article.favorited) {
      props.unfavorite(article.slug);
    } else {
      props.favorite(article.slug);
    }
  };

  return (
    <div className="article-preview">
      <ArticleMeta>
        <div className='avatar-info-wrapper'>
          <Link to={`/@${article.author.username}`}>
            <UserImage src={article.author.image} alt={article.author.username} location='article' />
          </Link>

          <Info>
            <Link className="author" to={`/@${article.author.username}`}>
              {article.author.username}
            </Link>
            <span className="date">
              {new Date(article.createdAt).toDateString()}
            </span>
          </Info>
        </div>
        

        <FavoriteButton favorited={article.favorited} onClick={handleClick}>
          {article.favoritesCount > 0 && article.favoritesCount} 
          <LikeIcon favorited={article.favorited} />
        </FavoriteButton>
      </ArticleMeta>

      <PreviewLink to={`/article/${article.slug}`}>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more</span>
        <ul className="tag-list">
          {
            article.tagList.map(tag => {
              return (
                <li className="tag-default tag-pill tag-outline" key={tag}>
                  {tag}
                </li>
              )
            })
          }
        </ul>
      </PreviewLink>
    </div>
  );
};

export default connect(() => ({}), mapDispatchToProps)(ArticlePreview);
