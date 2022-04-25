import { Link } from 'react-router-dom';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { DELETE_ARTICLE } from '../../constants/actionTypes';
import { deleteArticle } from '../../api';

const mapDispatchToProps = (dispatch: any) => ({
  onClickDelete: (payload: any) =>
    dispatch({ type: DELETE_ARTICLE, payload })
});

type TArticleActionsProps = {
  onClickDelete: any;
  article: any;
  canModify: boolean;
}

const ArticleActions: React.FC<TArticleActionsProps> = props => {
  const article = props.article;
  const del = () => {
    // props.onClickDelete(agent.Articles.del(article.slug))
    props.onClickDelete(deleteArticle(article.slug))
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

export default connect(() => ({}), mapDispatchToProps)(ArticleActions);