import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import s from './ButtonTheme.module.scss';
import { S_CHANGE_THEME } from '../../slices/common-slice/common';
const mapDispatchToProps = (dispatch) => ({
  changeTheme: () => {
    dispatch({ type: S_CHANGE_THEME });
  },
});
const mapStateToProps = (state) => ({
  ...state.common,
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
