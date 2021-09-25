import React, { useState } from 'react';
import Textarea from '../UI/textarea/textarea';
import UserInfo from '../user-info/user-info';
import { InfoContainer, StyledCommentForm } from './common/styled-form';
import Button from '../UI/button/button';

const CommentForm = (props) => {
  const { currentUser } = props;
  const [body, setBody] = useState('');
  const handleChange = (e) => {
    setBody(e.target.value);
  };

  const sendComment = (e) => {
    e.preventDefault();
    console.log('TODO: починить отправку комментариев');
  };

  return (
    <StyledCommentForm onSubmit={sendComment}>
      <Textarea value={body} onChange={handleChange} type="commentForm" placeholder="Написать комментарий" />
      <InfoContainer>
        <UserInfo article={{ author: currentUser, createdAt: Date.now() }} isNotFullWidth />
        <Button withoutMargin type="submit">Отправить комментарий</Button>
      </InfoContainer>
    </StyledCommentForm>
  );
};

export default CommentForm;
