// import DOMPurify from 'dompurify';
// import ArticleMeta from './ArticleMeta';
// import CommentContainer from './CommentContainer';
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { marked } from 'marked';
// import { ARTICLE_PAGE_LOADED, ARTICLE_PAGE_UNLOADED} from '../../services/articleSlice';
// import { getArticle, getCommentsForArticle } from '../../api';


import DOMPurify from 'dompurify';
import {marked} from 'marked';
import ArticleMeta from "./ArticleMeta";
import CommentContainer from "./CommentContainer";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getArticleThunk, getCommentsForArticleThunk} from "../../services/thunks";
import {useParams} from "react-router";
import {SidebarRight} from "../StyledComponents/sidebar-information-styles";
import SidebarInformation from "../sidebar-information";
import {TArticleProperties} from "../../services/types";

type TArticleProps = {
  match: {
    params: {
      id: string;
    };
  };
};

const Article: React.FC<TArticleProps> = (props) => {
  const dispatch = useDispatch();
  const {allArticles} = useSelector((state: any) => state.articleList);
  const {article} = useSelector((state: any) => state.article);
  const {currentUser} = useSelector((state: any) => state.common);
  const {comments} = useSelector((state: any) => state.article);
  const {commentErrors} = useSelector((state: any) => state.article);
  const params: { id: string } = useParams();

  useEffect(() => {
    if (params.id) {
      dispatch(getArticleThunk(params.id));
      dispatch(getCommentsForArticleThunk(params.id));
    }
  }, []);

  if (!article.slug) {
    return null;
  }

  const articleBody = DOMPurify.sanitize(article.body);
  const markup = {__html: marked(articleBody)};

  const canModify =
    currentUser && currentUser.username === article.author.username;

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>
          <ArticleMeta article={article} canModify={canModify}/>
        </div>
      </div>

      <div style={{display: 'flex'}}>
        <div className="container page">

          <div className="row article-content">
            <div className="col-xs-12">
              <div dangerouslySetInnerHTML={markup}></div>

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

          <hr/>

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
        <SidebarRight>
          <SidebarInformation sectionTitle="Свежие новости" articles={allArticles} keyName="createdAt"/>
        </SidebarRight>
      </div>
    </div>
  );
};

export default Article;
