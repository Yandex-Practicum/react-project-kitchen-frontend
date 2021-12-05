import stylesButton from "../Button/Button.module.css";

const FollowUserButton = (props) => {
  return (
    <button className={stylesButton.active} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default FollowUserButton;
