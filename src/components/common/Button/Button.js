import stylesButton from "../Button/Button.module.css";

const FollowUserButton = (props) => {


  const handleClick = (ev) => {
    ev.preventDefault();
    if (props.user.following) {
      props.unfollow(props.user.username);
    } else {
      props.follow(props.user.username);
    }
  };

  return (
    <button className={stylesButton.active} onClick={handleClick}>
      {props.user.following ? (
        <i className="ion-minus-round"></i>
      ) : (
        <i className="ion-plus-round"></i>
      )}
      &nbsp;
      {props.user.following ? "Отписаться" : "Подписаться"}
    </button>
  );
};

export default FollowUserButton;
