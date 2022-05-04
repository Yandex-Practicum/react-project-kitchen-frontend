import { useDispatch, useSelector } from "react-redux";
import { followUserThunk, unfollowUserThunk } from "../services/thunks";

type TFollowUserButton = {
  follow?: any;
  isUser: boolean;
  unfollow?: any;
  user: {
    following: boolean;
    image: string;
    username: string;
  }
}

//Перенести follow и unFollow из ProfileFavorits после полного подключения Редакс.
function FollowUserButton({ isUser, user, follow, unfollow }: TFollowUserButton) {

  const { following } = useSelector((state: any) => state.profile);
  const dispatch = useDispatch()

  if (isUser) {
    return null;
  }

  let classes = 'btn btn-sm action-btn';
  if (user.following) {
    classes += ' btn-secondary';
  } else {
    classes += ' btn-outline-secondary';
  }

  const handleClick = (ev: React.SyntheticEvent<Element, Event>) => {
    ev.preventDefault();
    user.following
    ? dispatch(unfollowUserThunk(user.username))
    : dispatch(followUserThunk(user.username))
  };

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

export default FollowUserButton
