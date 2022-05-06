import styled from 'styled-components';
import { textColor, device } from './constantsStyles';

export const headerPrfContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;

  max-width: 304px;

  margin: 0 auto;
`;

export const headerPrfTitle = styled.h2`
  font-family: 'AlegreyaSans', Times, serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 1.11;

  color: ${textColor.headers};

  margin-bottom: 24px;

  text-align: center
`
