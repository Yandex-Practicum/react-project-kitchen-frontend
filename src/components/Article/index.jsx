import ArticleActions from './ArticleActions';
import CommentContainer from '../Comment/CommentContainer';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import marked from 'marked';
import { ARTICLE_PAGE_LOADED, ARTICLE_PAGE_UNLOADED } from '../../constants/actionTypes';
import styles from './article.module.scss';
import Tags from '../Tags/Tags';
import UserMeta from '../UserMeta/UserMeta';

const mapStateToProps = (state) => ({
  ...state.article,
  currentUser: state.common.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload) => dispatch({ type: ARTICLE_PAGE_LOADED, payload }),
  onUnload: () => dispatch({ type: ARTICLE_PAGE_UNLOADED }),
});

class Article extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.onLoad(
      Promise.all([
        agent.Articles.get(this.props.match.params.id),
        agent.Comments.forArticle(this.props.match.params.id),
      ]),
    );
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    if (!this.props.article) {
      return null;
    }

    const markup = { __html: marked(this.props.article.body, { sanitize: true }) };
    const canModify = this.props.currentUser && this.props.currentUser.username === this.props.article.author.username;
    return (
      <div className="article-page">
        <div className={styles.banner}>
          <div className={styles.banner__container}>
            <UserMeta article={this.props.article} section="article" />
            <ArticleActions canModify={canModify} article={this.props.article} />
          </div>
        </div>

        <div className={styles.page__container}>
          <div className={styles.page__content}>
            <div>
              <h1>{this.props.article.title}</h1>
              <div className={styles.page__text} dangerouslySetInnerHTML={markup}></div>

              <div className={styles.page__taglist}>
                <Tags tags={this.props.article.tagList} onClickTag={() => {}} style="grey" />
              </div>
            </div>
          </div>

          <div className="article-actions"></div>

          <div className="row">
            <CommentContainer
              comments={this.props.comments || []}
              errors={this.props.commentErrors}
              slug={this.props.match.params.id}
              currentUser={this.props.currentUser}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);
