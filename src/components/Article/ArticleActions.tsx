import { Link, useHistory } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteArticle } from "../../api";
import { deleteArticleThunk } from "../../services/thunks";

type TArticleActionsProps = {
  article: any;
  canModify: boolean;
};

const ArticleActions: React.FC<TArticleActionsProps> = (props) => {
  const dispatch = useDispatch();
  const { article } = useSelector((state: any) => state.article);
  const history = useHistory();

  const deleteArticle = () => {
    dispatch(deleteArticleThunk(article.slug)).then(() => history.push("/"));
  };

  if (props.canModify) {
    return (
      <span>
        <Link
          to={`/editor/${article.slug}`}
          className="btn btn-outline-secondary btn-sm"
        >
          <i className="ion-edit"></i> Edit Article
        </Link>

        <button
          className="btn btn-outline-danger btn-sm"
          onClick={deleteArticle}
        >
          <i className="ion-trash-a"></i> Delete Article
        </button>
      </span>
    );
  }

  return <span></span>;
};

export default ArticleActions;
