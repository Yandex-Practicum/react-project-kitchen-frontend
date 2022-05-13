import { MouseEventHandler } from 'react';

export type TColorSet = {
  default: string;
  hover: string;
  active: string;
  disabled: string;
  font: string;
};

export type TTheme = {
  primaryText: string,
  secondaryText: string,
  markedText: string,
  dividerColor: string,
  bgPrimary: string,
  bgHoverUserMenu: string,
  bgActiveUserMenu: string,
  labelColor: string,
  inputField: {
    defaultBorder: string;
    borderHover: string;
    borderActive: string;
    disabledInput: string;
    errorColor: string;
  },
  button: {
    [key: string]: TColorSet,
  },
  buttonText: TFontProperties,
  firstLevelHeading: TFontProperties,
  secondLevelHeading: TFontProperties,
  thirdLevelHeading: TFontProperties,
  fourthLevelHeading: TFontProperties,
  fifthLevelHeading: TFontProperties,
  firstLevelHeadingMobile: TFontProperties,
  secondLevelHeadingMobile: TFontProperties,
  thirdLevelHeadingMobile: TFontProperties,
  fourthLevelHeadingMobile: TFontProperties,
  fifthLevelHeadingMobile: TFontProperties,
  labelInput: TFontProperties,
  text18Sans: TFontProperties,
  text16Sans: TFontProperties,
  text12Sans: TFontProperties,
  text18: TFontProperties,
  text16: TFontProperties,
};
export type TThemes = {
  [key: string]: TTheme;
};

export type TFontProperties = {
  family: string;
  size: number;
  height: number;
  weight: number;
};

export type TButtonStyle = {
  defaultColor: string;
  hoverColor: string;
  activeColor: string;
  disabledColor: string;
  fontColor: string;
  fontProperties: TFontProperties;
};

export type TButtonTextStyle = {
  paddingLeft: number;
};

export type TButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export type TAvatarSizes = 'large' | 'small';

export type TAvatarIconProps = {
  size: TAvatarSizes;
  name: string;
  image: string;
  distance?: number;
  color?: string;
} | {
  size: TAvatarSizes;
  name: string;
  image?: string;
  distance?: number;
  color: string;
};

export type TAvatarButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  name: string;
  image: string;
};

export type TIconProps = {
  color: string;
  distance?: number;
};

export type TTypoTypes = 'desktop' | 'mobile';

export type THeaderFonts = {
  [type in TTypoTypes]: TFontProperties;
};

export type THeaderTextProps = {
  color?: string;
  marginCSS?: string;
  paddingCSS?: string;
  lines?: number;
};

export type TTextProps = {
  size: TFontSizeTypes,
  weight: number,
  sansSerif?: boolean,
  color?: string,
  marginCSS?: string;
  paddingCSS?: string;
  clampLines?: boolean;
  heightLimit?: number;
};

export type TFontSizeTypes = 'small' | 'medium' | 'large';

export type TFontSizeProps = {
  size: number,
  height: number,
};

export type TDefaultFontSizes = {
  [key in TFontSizeTypes]: TFontSizeProps;
};

export type TDividerProps = {
  distance: number;
};