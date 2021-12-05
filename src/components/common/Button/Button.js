import stylesButton from "../Button/Button.module.css";

const FollowUserButton = (props) => {
  return (
    <button className={stylesButton.active} onClick={props.onClick}>
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
