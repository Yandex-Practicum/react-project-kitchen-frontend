import stylesFollowUserButton from "../FollowUserButton/FollowUserButton.module.css";

const FollowUserButton = (props) => {
  if (props.isUser) {
    return null;
  }

  const handleClick = (ev) => {
    ev.preventDefault();
    if (props.user.following) {
      props.unfollow(props.user.username);
    } else {
      props.follow(props.user.username);
    }
  };

  return (
    <button className={stylesFollowUserButton.active} onClick={handleClick}>
      {props.user.following ? (
        <i className="ion-plus-round"></i>
      ) : (
        <i className="ion-minus-round"></i>
      )}
      &nbsp;
      {props.user.following ? "Подписаться" : "Отписаться"}
    </button>
  );
};

export default FollowUserButton;
