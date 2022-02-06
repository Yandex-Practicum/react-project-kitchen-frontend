import PropTypes from 'prop-types';
import React from 'react';
import { XIcon } from '../../../images/icons';
import tagStyles from './Tag.module.css';

const Tag = ({ text, closable, onClose }) => (
  <div className={tagStyles.container}>
    <p className={tagStyles.text}>{text}</p>
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
};

Tag.defaultProps = {
  closable: false,
  onClose: () => {},
};

export default Tag;
