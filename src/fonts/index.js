import { createGlobalStyle } from 'styled-components';

import Exo2BoldWoff2 from './Exo2-Bold.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Exo 2';
        src: url(${Exo2BoldWoff2}) format('woff2');
        font-weight: 700;
        font-style: normal;
    }
`;