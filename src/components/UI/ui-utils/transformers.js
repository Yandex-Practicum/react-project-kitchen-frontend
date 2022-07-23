import COLORS from './colors';

export const getIconParams = (params) => {
  const sizes = { default: '24', small: '16' };
  const colors = { primary: COLORS.PRIMARY, secondary: COLORS.SECONDARY, alert: COLORS.ALERT };

  return {
    size: sizes[params.size] ? sizes[params.size] : sizes.default,
    color: colors[params.color] ? colors[params.color] : colors.default,
    className: params.className ? params.className : '',
    onClick: params.onClick,
    style: params.onClick ? { cursor: 'pointer' } : {},
  };
};

export const getButtonParams = () => {};
