import React from 'react';
import PropTypes from 'prop-types';
import agent from '../../agent';
import { connect } from 'react-redux';
import { ARTICLE_FAVORITED, ARTICLE_UNFAVORITED } from '../../constants/actionTypes';

// Components
import LikeIcon from '../LikeIcon/LikeIcon';
import ArticleMeta from '../ArticleMeta/ArticleMeta.jsx';

// Styles
import { 
  FavoriteButton, 
  PreviewLink, 
  ArticleWrapper
} from './Styles';

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


  

  return (
    <ArticleWrapper>
      <div className="strange-block" />
      <div className="article-preview">
        <ArticleMeta article={article} unfavorite={props.unfavorite} favorite={props.favorite} />
        <PreviewLink to={`/article/${article.slug}`}>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <span>Читать далее</span>
          <ul className="tag-list">
            {
              article.tagList.map(tag => {
                return (
                  <li className="tag-default tag-pill tag-outline" key={tag}>
                    {tag}
                  </li>
                );
              })
            }
          </ul>
        </PreviewLink>
      </div>
    </ArticleWrapper>
    
  );
};

ArticlePreview.propTypes = {
  article: PropTypes.any,
  unfavorite: PropTypes.func,
  favorite: PropTypes.func
};

export default connect(() => ({}), mapDispatchToProps)(ArticlePreview);
