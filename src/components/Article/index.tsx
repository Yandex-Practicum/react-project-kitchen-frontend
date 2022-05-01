import ArticleMeta from "./ArticleMeta";
import CommentContainer from "./CommentContainer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticleThunk, getCommentsForArticleThunk } from "../../services/thunks";
import { useParams } from "react-router";

type TArticleProps = {
  match: {
    params: {
      id: string;
    };
  };
};

const Article: React.FC<TArticleProps> = (props) => {
  const dispatch = useDispatch();
  const { article } = useSelector((state: any) => state.article);
  const { currentUser } = useSelector((state: any) => state.common);
  const { comments } = useSelector((state: any) => state.article);
  const { commentErrors } = useSelector((state: any) => state.article);
  const params: { id: string } = useParams();

  useEffect(() => {
    if (params.id) {
      dispatch(getArticleThunk(params.id));
      dispatch(getCommentsForArticleThunk(params.id));
    }
  }, []);

  useEffect(() => {
      dispatch(getCommentsForArticleThunk(params.id));
  }, [comments]);

  if (!article.slug) {
    return null;
  }

  const canModify =
    currentUser && currentUser.username === article.author.username;

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>
          <ArticleMeta article={article} canModify={canModify} />
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-xs-12">
            <div>{article.body}</div>

            <ul className="tag-list">
              {article.tagList.map((tag: any) => {
                return (
                  <li className="tag-default tag-pill tag-outline" key={tag}>
                    {tag}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <hr />

        <div className="article-actions"></div>

        <div className="row">
          <CommentContainer
            comments={comments || []}
            errors={commentErrors}
            slug={props.match.params.id}
            currentUser={currentUser}
          />
        </div>
      </div>
    </div>
  );
};

export default Article;
