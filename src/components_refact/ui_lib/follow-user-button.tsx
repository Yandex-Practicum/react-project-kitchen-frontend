import React, { FC, useCallback } from 'react';
import { TProfile } from '../../types/types';

export const FollowUserButton: FC<{ isUser: boolean, user: TProfile, follow: (key: string) => void, unfollow: (key: string) => void }> = ({
  isUser, user, follow, unfollow,
}) => {
  if (isUser) {
    return null;
  }

  let classes = 'btn btn-sm action-btn';
  if (/* user.following */true) {
    classes += ' btn-secondary';
  } else {
    classes += ' btn-outline-secondary';
  }

  const handleClick = useCallback((ev: React.MouseEvent) => {
    ev.preventDefault();
    if (/* user.following */true) {
      unfollow('test');
    } else {
      follow('test');
    }
  }, []);

  return (
    <button
      className={classes}
      onClick={handleClick}>
      <i className='ion-plus-round' />
      &nbsp;
      {/* user.following */true ? 'Unfollow' : 'Follow'}
      {' '}
      {/* user.username */'user'}
    </button>
  );
};
