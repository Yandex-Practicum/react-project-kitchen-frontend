import React from 'react';
import PropTypes from 'prop-types';
import CommentInput from '../comment-input';
import CommentList from '../comment-list';
import { Link } from 'react-router-dom';

const CommentContainer = props => {
  if (props.currentUser) {
    return (
      <div className="col-xs-12 col-md-8 offset-md-2">
        <div>
          <list-errors errors={props.errors}></list-errors>
          <CommentInput slug={props.slug} currentUser={props.currentUser} />
        </div>

        <CommentList
          comments={props.comments}
          slug={props.slug}
          currentUser={props.currentUser} />
      </div>
    );
  } else {
    return (
      <div className="col-xs-12 col-md-8 offset-md-2">
        <p>
          <Link to="/login">Sign in</Link>
          &nbsp;or&nbsp;
          <Link to="/register">sign up</Link>
          &nbsp;to add comments on this article.
        </p>

        <CommentList
          comments={props.comments}
          slug={props.slug}
          currentUser={props.currentUser} />
      </div>
    );
  }
};

CommentContainer.propTypes = {
  currentUser: PropTypes.object,
  errors: PropTypes.object,
  slug: PropTypes.string,
  comments: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.shape({
      username: PropTypes.string,
      image: PropTypes.string,
      following: PropTypes.bool
    }),
    body: PropTypes.string,
    createdAt: PropTypes.string,
    id: PropTypes.string
  }))
};

export default CommentContainer;
