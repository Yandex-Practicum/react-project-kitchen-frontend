import PropTypes from 'prop-types';
import clsx from 'clsx';

import styleButtons from './Buttons.module.scss';

const TextButton = ({ onClick, className = '', children = 'Кнопка' }) => (
  <button type='button' className={clsx(className, styleButtons.text_button)} onClick={onClick}>
    {children}
  </button>
);

TextButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default TextButton;
