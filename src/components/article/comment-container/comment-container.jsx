import React from 'react';
import PropTypes from 'prop-types';
import CommentInput from '../comment-input';
import CommentList from '../comment-list';
import Link from "../../link";
import {Container, Caption} from './style';

const CommentContainer = props => {
  if (props.currentUser) {
    return (
      <Container className="mb-8">
        <Caption>Комментарии</Caption>
        <div>
          <list-errors errors={props.errors}></list-errors>
          <CommentInput slug={props.slug} currentUser={props.currentUser} />
        </div>

        <CommentList
          comments={props.comments}
          slug={props.slug}
          currentUser={props.currentUser} />
      </Container>
    );
  } else {
    return (
      <Container>
        <div className="text text_type_main-default" style={{display: 'flex'}}>
          <Link to="/login">Войдите</Link>&nbsp;или&nbsp;
          <Link to="/register">зарегистрируйтесь</Link>&nbsp;чтобы прокомментировать статью.
        </div>

        <CommentList
          comments={props.comments}
          slug={props.slug}
          currentUser={props.currentUser} />
      </Container>
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
