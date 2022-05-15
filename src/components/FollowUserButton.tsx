import { useDispatch } from "react-redux";
import { followUserThunk, unfollowUserThunk } from "../services/thunks";
import * as Styles from "./StyledComponents/followUserButtonStyles";
import minus from "../images/whiteMinus.svg";
import plus from "../images/whitePlus.svg";

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

function FollowUserButton({ user }: TFollowUserButton) {

  const dispatch = useDispatch()

  const handleClick = (ev: React.SyntheticEvent<Element, Event>) => {
    ev.preventDefault();
    user.following
    ? dispatch(unfollowUserThunk(user.username))
    : dispatch(followUserThunk(user.username))
  };

  return (
    <Styles.followBtn onClick={handleClick}>
      <Styles.followImg src={user.following ? minus : plus}/>
      {user.following ? 'Отписаться' : 'Подписаться'}
    </Styles.followBtn>
  );
};

export default FollowUserButton
