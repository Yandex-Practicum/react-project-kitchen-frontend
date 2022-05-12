import { Link, useHistory } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteArticle } from "../../api";
import { deleteArticleThunk } from "../../services/thunks";
import { ArticleActionsEditor, ArticleActionsEditorIcon, ArticleActionsWrapper } from "../StyledComponents/arcticleActionsStyles";
import plus from "../../images/whitePlus.svg";

import DeleteArticleBtn from "../DeleteArticleBtn";

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
        <ArticleActionsWrapper>
          <ArticleActionsEditor
          to={`/editor/${article.slug}`}
          >
            <ArticleActionsEditorIcon src={plus}/>
            Редактировать запись
          </ArticleActionsEditor>

          <DeleteArticleBtn mrgTop="0px" text="Удалить запись" />

        </ArticleActionsWrapper>


    );
  }

  return <span></span>;
};

export default ArticleActions;
