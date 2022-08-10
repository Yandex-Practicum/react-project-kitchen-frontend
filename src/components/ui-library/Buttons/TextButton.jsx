import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Buttons.module.scss';

const TextButton = ({ onClick, className = '', children = 'Кнопка' }) => (
  <button className={clsx(className, styles.text_button)} onClick={onClick} type='button'>
    {children}
  </button>
);

TextButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default TextButton;
