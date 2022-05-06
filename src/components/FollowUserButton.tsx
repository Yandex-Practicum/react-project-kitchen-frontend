import { useDispatch, useSelector } from "react-redux";
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

//Перенести follow и unFollow из ProfileFavorits после полного подключения Редакс.
function FollowUserButton({ isUser, user, follow, unfollow }: TFollowUserButton) {

  const { following } = useSelector((state: any) => state.profile);
  const dispatch = useDispatch()

  // if (isUser) {
  //   return null;
  // }

  // let classes = 'btn btn-sm action-btn btn-secondary';
  // if (user.following) {
  //   classes += ' btn-secondary';
  // } else {
  //   classes += ' btn-outline-secondary';
  // }

  const handleClick = (ev: React.SyntheticEvent<Element, Event>) => {
    ev.preventDefault();
    user.following
    ? dispatch(unfollowUserThunk(user.username))
    : dispatch(followUserThunk(user.username))
  };

  return (
    <Styles.followBtn>
      {/* <img src="./src/images/whitePlus" alt="" /> */}
      {/* <img src="../src/images/whitePlus.svg" alt="" /> */}
      <Styles.followImg src={plus} alt="" />
      {user.following ? 'Отписаться' : 'Подписаться'}
    </Styles.followBtn>
    // <button
    //   className={classes}
    //   onClick={handleClick}>
    //   <i className="ion-plus-round"></i>
    //   &nbsp;
    //   {user.following ? 'Unfollow' : 'Follow'} {user.username}
    // </button>
  );
};

export default FollowUserButton
