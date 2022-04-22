// import ArticleMeta from './ArticleMeta';
// import CommentContainer from './CommentContainer';
// import React from 'react';
// import agent from '../../agent';
// import { connect } from 'react-redux';
// import marked from 'marked';
// import { ARTICLE_PAGE_LOADED, ARTICLE_PAGE_UNLOADED } from '../../constants/actionTypes';

// const mapStateToProps = state => ({
//   ...state.article,
//   currentUser: state.common.currentUser
// });

// const mapDispatchToProps = dispatch => ({
//   onLoad: payload =>
//     dispatch({ type: ARTICLE_PAGE_LOADED, payload }),
//   onUnload: () =>
//     dispatch({ type: ARTICLE_PAGE_UNLOADED })
// });

// class Article extends React.Component {
//   componentWillMount() {
//     this.props.onLoad(Promise.all([
//       agent.Articles.get(this.props.match.params.id),
//       agent.Comments.forArticle(this.props.match.params.id)
//     ]));
//   }

//   componentWillUnmount() {
//     this.props.onUnload();
//   }

//   render() {
//     if (!this.props.article) {
//       return null;
//     }

//     const markup = { __html: marked(this.props.article.body, { sanitize: true }) };
//     const canModify = this.props.currentUser &&
//       this.props.currentUser.username === this.props.article.author.username;
//     return (
//       <div className="article-page">

//         <div className="banner">
//           <div className="container">

//             <h1>{this.props.article.title}</h1>
//             <ArticleMeta
//               article={this.props.article}
//               canModify={canModify} />

//           </div>
//         </div>
        

//         <div className="container page">

//           <div className="row article-content">
//             <div className="col-xs-12">

//               <div dangerouslySetInnerHTML={markup}></div>

//               <ul className="tag-list">
//                 {
//                   this.props.article.tagList.map(tag => {
//                     return (
//                       <li
//                         className="tag-default tag-pill tag-outline"
//                         key={tag}>
//                         {tag}
//                       </li>
//                     );
//                   })
//                 }
//               </ul>

//             </div>
//           </div>

//           <hr />

//           <div className="article-actions">
//           </div>

//           <div className="row">
//             <CommentContainer
//               comments={this.props.comments || []}
//               errors={this.props.commentErrors}
//               slug={this.props.match.params.id}
//               currentUser={this.props.currentUser} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Article);

import ArticleMeta from './ArticleMeta';
import CommentContainer from './CommentContainer';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { marked } from 'marked';
import { ARTICLE_PAGE_LOADED, ARTICLE_PAGE_UNLOADED } from '../../constants/actionTypes';

const mapStateToProps = (state: { article: any; common: { currentUser: any; }; }) => ({
  ...state.article,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = (dispatch: any) => ({

  onLoad: (payload: any) => {
    console.log(payload)
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
    body: any; 
    author: { 
      username: any; 
    }; 
    title: any; 
    tagList: any[]; 
  }; 
  currentUser: { 
    username: string; 
    image: string; 
  }; 
  comments: any; 
  commentErrors: any; 
}



const Article: React.FC<TArticleProps> = (props) => {
  // componentWillMount() {
  //   props.onLoad(Promise.all([
  //     agent.Articles.get(this.props.match.params.id),
  //     agent.Comments.forArticle(this.props.match.params.id)
  //   ]));
  // }

  // componentWillUnmount() {
  //   this.props.onUnload();
  // }

  React.useEffect(() => {
    props.onLoad(Promise.all([
      agent.Articles.get(props.match.params.id),
      agent.Comments.forArticle(props.match.params.id)
    ]));

    return () => {
      props.onUnload();
    }
  },[Promise])

  // const markup = { __html: marked(props.article.body, { sanitize: true }) };
  // const canModify = props.currentUser &&
  //   props.currentUser.username === props.article.author.username;
    const canModify = true
    console.log(props.article)

  if (!props.article.body) {
    return null;
  }

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

            {/* <div dangerouslySetInnerHTML={markup}></div> */}
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