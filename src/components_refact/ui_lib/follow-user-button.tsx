import React, { FC, useCallback } from "react";
import { TAuthor } from "../../services/types";


export const FollowUserButton: FC<{ isUser: boolean, user: TAuthor, follow: (key: string) => void, unfollow: (key: string) => void }> = ({ isUser, user, follow, unfollow }) => {
    if (isUser) {
        return null;
    }

    let classes = 'btn btn-sm action-btn';
    if (user.following) {
        classes += ' btn-secondary';
    } else {
        classes += ' btn-outline-secondary';
    }

    const handleClick = useCallback((ev: React.MouseEvent) => { 
        ev.preventDefault();
        if (user.following) {
            unfollow(user.username)
        } else {
            follow(user.username)
        }
    },[]);

    return (
        <button
            className={classes}
            onClick={handleClick}>
            <i className="ion-plus-round"></i>
            &nbsp;
            {user.following ? 'Unfollow' : 'Follow'} {user.username}
        </button>
    );
};