import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { btnSbmtColor, textColor, linkColor, inputBorderColor, device } from './constantsStyles';

export const ArticleActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media ${device.laptopL} {

  }

  @media ${device.laptop} {

  }
  @media ${device.mobileS} {
    flex-direction: column;
  }
`

export const ArticleActionsEditor = styled(Link)`
  font-family: 'AlegreyaSans';
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;

  padding: 8px 16px;
  margin: 0;

  background-color: ${btnSbmtColor.default};
  color: ${textColor.whiteText};
  border-radius: 4px;

  transition: all 0.2s linear;

  &:hover {
    background-color: ${btnSbmtColor.hover};
  }

  &:active {
    background-color: ${btnSbmtColor.active};
  }

  @media ${device.laptopL} {

  }

  @media ${device.laptop} {

  }
  @media ${device.mobileS} {

  }
`

export const ArticleActionsEditorIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;

  background-color: transparent;


  @media ${device.laptopL} {

  }

  @media ${device.laptop} {

  }
  @media ${device.mobileS} {

  }
`
