import ArticleMeta from './ArticleMeta';
import CommentContainer from './CommentContainer';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { marked } from 'marked';
import { ARTICLE_PAGE_LOADED, ARTICLE_PAGE_UNLOADED } from '../../constants/actionTypes';
import { getArticle, getCommentsForArticle } from '../../api';


const mapStateToProps = (state: { article: any; common: { currentUser: any; }; }) => ({
  ...state.article,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = (dispatch: any) => ({

  onLoad: (payload: any) => {
    return dispatch({ type: ARTICLE_PAGE_LOADED, payload })
  },


  onUnload: () =>
    dispatch({ type: ARTICLE_PAGE_UNLOADED })
});

type TArticleProps = {
  onLoad: any;
  match: {
    params: {
      id: string;
    };
  };
  onUnload: () => void;
  article: {
    body: string;
    author: {
      username: string;
      image: string;
    };
    title: string;
    tagList: any[];
    createdAt: any;
  };
  currentUser: {
    username: string;
    image: string;
  };
  comments: [];
  commentErrors: any;
}



const Article: React.FC<TArticleProps> = (props) => {
  React.useEffect(() => {
    props.onLoad(Promise.all([
      getArticle(props.match.params.id),
      getCommentsForArticle(props.match.params.id)
    ]));

    return () => {
      props.onUnload();
    }
  },[])

  if (!props.article) {
    return null;
  }

  const markup  = { __html: marked(props.article.body, { sanitize: true }) };

  const canModify = props.currentUser &&
    props.currentUser.username === props.article.author.username;

  return (
    <div className="article-page">

      <div className="banner">
        <div className="container">

          <h1>{props.article.title}</h1>
          <ArticleMeta
            article={props.article}
            canModify={canModify} />

        </div>
      </div>

      <div className="container page">

        <div className="row article-content">
          <div className="col-xs-12">

            <div dangerouslySetInnerHTML={markup}></div>
              <div>{props.article.body}</div>
            <ul className="tag-list">
              {
                props.article.tagList.map(tag => {
                  return (
                    <li
                      className="tag-default tag-pill tag-outline"
                      key={tag}>
                      {tag}
                    </li>
                  );
                })
              }
            </ul>

          </div>
        </div>

        <hr />

        <div className="article-actions">
        </div>

        <div className="row">
          <CommentContainer
            comments={props.comments || []}
            errors={props.commentErrors}
            slug={props.match.params.id}
            currentUser={props.currentUser} />
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);
