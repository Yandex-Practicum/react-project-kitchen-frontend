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
