import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import GlobalColorsStyles from './globalColorsStyled';
import GlobalFontsStyles from './globalFontsStyled';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${GlobalColorsStyles}
  ${GlobalFontsStyles}
`;

export default GlobalStyles;