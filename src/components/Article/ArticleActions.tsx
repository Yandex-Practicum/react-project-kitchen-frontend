import { Link } from 'react-router-dom';
import React from 'react';
import { useDispatch } from 'react-redux';
import { DELETE_ARTICLE } from '../../services/commonSlice';
import { deleteArticle } from '../../api';

type TArticleActionsProps = {
  article: any;
  canModify: boolean;
}

const ArticleActions: React.FC<TArticleActionsProps> = props => {
  const dispatch = useDispatch();

  const onClickDelete = (payload: any) =>
    dispatch({ type: DELETE_ARTICLE, payload })

  const article = props.article;

  const del = () => {
    onClickDelete(deleteArticle(article.slug))
  };


  if (props.canModify) {
    return (
      <span>

        <Link
          to={`/editor/${article.slug}`}
          className="btn btn-outline-secondary btn-sm">
          <i className="ion-edit"></i> Edit Article
        </Link>

        <button className="btn btn-outline-danger btn-sm" onClick={del}>
          <i className="ion-trash-a"></i> Delete Article
        </button>

      </span>
    );
  }

  return (
    <span>
    </span>
  );
};

export default ArticleActions;
