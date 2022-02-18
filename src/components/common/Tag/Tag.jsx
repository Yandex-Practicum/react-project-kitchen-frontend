import PropTypes from 'prop-types';
import React from 'react';
import { XIcon } from '../../../images/icons';
import tagStyles from './Tag.module.css';

const Tag = ({ text, closable, onClose, onClick, white }) => (
  <div
    className={`${tagStyles.container} ${white ? tagStyles.white : ''} ${onClick ? tagStyles.clickable : ''}`}
    onClick={onClick ? () => onClick(text) : () => {}}
  >
    <p className={`${tagStyles.text} ${white ? tagStyles.white : ''}`}>
      {text}
    </p>
    {closable && (
      <div className={tagStyles.icon} onClick={onClose}>
        <XIcon />
      </div>
    )}
  </div>
);

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  closable: PropTypes.bool,
  onClose: PropTypes.func,
  onClick: PropTypes.func,
  white: PropTypes.bool,
};

Tag.defaultProps = {
  closable: false,
  white: false,
  onClose: () => {},
  onClick: null,
};

export default Tag;
