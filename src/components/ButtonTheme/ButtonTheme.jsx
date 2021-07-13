import React from 'react';
import { connect } from 'react-redux';
import { CHANGE_THEME } from '../../constants/actionTypes';
import cn from 'classnames';
import s from './ButtonTheme.module.scss';
const mapDispatchToProps = (dispatch) => ({
  changeTheme: () => {
    dispatch({ type: CHANGE_THEME });
  },
});
const mapStateToProps = (state) => ({
  ...state.theme,
});
const ButtonTheme = (props) => {
  const handleClick = () => {
    props.changeTheme();
  };
  return (
    <div className={cn(s.wrapper)}>
      <input
        type="checkbox"
        name="theme"
        id="theme"
        className={cn(s.button, { [s.active]: props.isDarkTheme })}
        onClick={handleClick}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonTheme);
