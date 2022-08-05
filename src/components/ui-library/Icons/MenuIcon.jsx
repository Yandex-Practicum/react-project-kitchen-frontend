import PropTypes from 'prop-types';
import useIconParams from './utils/hook';
import IconWrapper from './utils/IconWrapper';

const MenuIcon = ({ onClick, size = 'default', color = 'primary', className = '' }) => {
  const icon = useIconParams({
    onClick,
    size,
    color,
    className,
  });

  return (
    <IconWrapper
      size={icon.size}
      color={icon.color}
      className={icon.className}
      onClick={icon.onClick}
    >
      <path
        d='M4 6H20M4 12H20M4 18H20'
        stroke={icon.color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6 6H20M4 12H20M4 18H20'
        stroke={icon.color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4 6H20M4 12H20M4 18H20'
        stroke='red'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </IconWrapper>
  );
};

MenuIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default MenuIcon;
