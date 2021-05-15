import React, {useState} from 'react';
import PropTypes from 'prop-types';
import agent from '../../../agent';
import { connect } from 'react-redux';
import { ADD_COMMENT } from '../../../constants/actionTypes';
import TextArea from '../../text-area';
import Button from '../../button';
import UserInfo from '../..//user-info';
import {CardBlock, UserBlock} from './style';

const mapDispatchToProps = dispatch => ({
  onSubmit: payload =>
    dispatch({ type: ADD_COMMENT, payload })
});

function CommentInput({currentUser, slug, onSubmit}) {
  const [body, setBody] = useState('');

  function changeBody(ev) {
    setBody(ev.target.value);
  }
  
  function createComment(ev) {
    ev.preventDefault();
    const payload = agent.Comments.create(slug, { body: body });
    setBody('');
    onSubmit(payload);
  }

  return (
    <form onSubmit={createComment}>
      <CardBlock>
        <TextArea
          placeholder="Написать комментарий"
          size="default"
          value={body}
          onChange={changeBody} />          
      </CardBlock>
      <UserBlock>
        <UserInfo username={currentUser.username} createdAt={new Date()}/>
        <Button
          caption="Отправить комментарий"
          type="submit"
        />
      </UserBlock>
    </form>
  );
}

CommentInput.propTypes = {
  currentUser: PropTypes.object,
  slug: PropTypes.string,
  onSubmit: PropTypes.func
};

export default connect(() => ({}), mapDispatchToProps)(CommentInput);
