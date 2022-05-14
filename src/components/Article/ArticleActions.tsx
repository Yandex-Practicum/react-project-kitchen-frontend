import { Link, useHistory } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteArticle } from "../../api";
import { deleteArticleThunk } from "../../services/thunks";
import { ArticleActionsEditor, ArticleActionsEditorIcon, ArticleActionsWrapper } from "../StyledComponents/articleActionsStyles";
import plus from "../../images/whitePlus.svg";

import DeleteArticleBtn from "../DeleteArticleBtn";

type TArticleActionsProps = {
  article: any;
  canModify: boolean;
  onClick: () => void;
};

const ArticleActions: React.FC<TArticleActionsProps> = (props) => {
  const { article } = useSelector((state: any) => state.article);

  if (props.canModify) {
    return (
      <ArticleActionsWrapper>
        <ArticleActionsEditor
        to={`/editor/${article.slug}`}
        >
          <ArticleActionsEditorIcon src={plus}/>
          Редактировать запись
        </ArticleActionsEditor>

        <DeleteArticleBtn onClick={props.onClick} mrgTop="0px" text="Удалить запись" />

      </ArticleActionsWrapper>
    );
  }

  return <span></span>;
};

export default ArticleActions;
