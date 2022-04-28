import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/hooks';
import { TArticle } from '../../types/types';
import { ARTICLE_FAVORITED, ARTICLE_UNFAVORITED } from '../../constants/actionTypes';
import { deleteLikeThunk, addLikeThunk} from '../../store/apiSlice';



const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';

export const ArticlePreview: FC<{ article: TArticle }> = ({ article }) => {
  const dispatch = useDispatch();



  const favoriteButtonClass = article.favorited
    ? FAVORITED_CLASS
    : NOT_FAVORITED_CLASS;

  const handleClick = (ev: React.MouseEvent) => {
    ev.preventDefault();
    if (article.favorited) {
      dispatch(deleteLikeThunk(article.slug));
    } else {
      dispatch(addLikeThunk(article.slug));
    }
  };


  
/*  export const deleteLikeArticle : ILikeArticle = (slug: string) : AxiosPromise<TAPIArticle> => {
  const requestConfig : AxiosRequestConfig = {
    url: `${ARTICLES_ROUTE}/${slug}/favorite`,
    method: 'delete',
  };
  return blogAPI(injectBearerToken(requestConfig));
};
export type TAPIArticle = {
  article : TArticle;
};


*/

  return (
    <div className='article-preview'>
      <div className='article-meta'>
        <Link to={`/@${article.author.username}`}>
          <img src={article.author.image} alt={article.author.username} />
        </Link>

        <div className='info'>
          <Link className='author' to={`/@${article.author.username}`}>
            {article.author.username}
          </Link>
          <span className='date'>
            {new Date(article.createdAt).toDateString()}
          </span>
        </div>

        <div className='pull-xs-right'>
          <button className={favoriteButtonClass} onClick={handleClick}>
            <i className='ion-heart' />
            {' '}
            {article.favoritesCount}
          </button>
        </div>
      </div>

      <Link to={`/article/${article.slug}`} className='preview-link'>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className='tag-list'>
          {
            article.tagList.map((tag: any) => (
              <li className='tag-default tag-pill tag-outline' key={tag}>
                {tag}
              </li>
            ))
          }
        </ul>
      </Link>
    </div>
  );
};