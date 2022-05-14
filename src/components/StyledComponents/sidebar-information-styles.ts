import styled from "styled-components";
import { device } from './constantsStyles';

export const SidebarRight = styled.div`
  width: 360px;
  position: sticky;
  align-self: flex-start;
  //--offset: 2rem;
  ////flex-grow: 1;
  ////flex-basis: 300px;
  //top: var(--offset);
  z-index: 10;

  @media ${device.laptop} {
    width: 227px;
  }
`

export const SidebarHeading = styled.h2`
  margin: 0;
  font-family: 'AlegreyaSans', sans-serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
`

export const AuthorWrapper = styled.div<{margin: string}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({margin}) => margin};
`

export const ArticleWrapper = styled.div<{padding: string}>`
  width: 100%;
  padding: 24px;
  border-bottom: #CCCCCC solid 1px;
  &:last-of-type {
    border-bottom: none;
  }

  @media ${device.tablet} {
    padding: ${(props) => props.padding};
  }
`
interface IArticleHeading {
  fontSize: string,
  lineHeight: string,
  margin: string,
  fontSizeLap: string,
  lineHeightLap: string
}

export const ArticleHeading = styled.h3<IArticleHeading>`
  margin: ${({margin}) => margin};
  font-family: 'AlegreyaSans', sans-serif;
  font-weight: 400;
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};

  @media ${device.laptopL} {
    font-size: ${(props) => props.fontSizeLap};
    line-height: ${(props) => props.lineHeightLap};
  }
`
