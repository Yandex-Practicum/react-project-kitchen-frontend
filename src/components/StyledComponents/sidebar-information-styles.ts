import styled from "styled-components";
import {Link} from "react-router-dom";
import {device} from "./constantsStyles";
import {Carousel} from "react-responsive-carousel";

export const SidebarRight = styled.div`
  width: 360px;
  position: sticky;
  align-self: flex-start;
  top: 0;
  right: 0;
  padding: 0 0 81px;

  @media ${device.tablet} {
    width: 277px;
    padding-left: 46px;
  }

  @media ${device.tabletVert} {
    padding: 0 20px 40px;
    border-bottom: #ccc 1px solid;
  }
`

export const SidebarHeading = styled.h2`
  margin: 0;
  font-family: 'AlegreyaSans', sans-serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;

  @media ${device.tablet} {
    font-size: 28px;
    line-height: 32px;
  }
`
export const SidebarVisibleBlock = styled.div`
  display: block;

  @media ${device.tabletVert} {
    display: none;
  }
`

export const AuthorWrapper = styled.div<{margin: string}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({margin}) => margin};
`

export const ArticleWrapper = styled.div<{padding: string}>`
  width: 100%;
  padding: 24px 24px 24px 0;
  border-bottom: #CCCCCC solid 1px;
  &:last-of-type {
    border-bottom: none;
  }

  @media ${device.tablet} {
    padding: ${(props) => props.padding};
  }

  @media ${device.tabletVert} {
    text-align: left;
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

  @media ${device.tabletVert} {
    margin-bottom: 16px;
  }

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 22px;
  }
`

export const ArticleLink = styled(Link)`
  color: #0A0A0B;

  &:hover {
    text-decoration: none;
    color: #008AFF;
  }
`
export const SliderContainerCarousel = styled(Carousel)`
  display: none;

  & .control-dots {
    margin: 0;
  }

  & .control-dots > .dot {
    width: 12px;
    height: 12px;
    display: inline-block;
    margin: 0 12px 0 0;
    background: #ccc;
    border-radius: 50%;
    box-shadow: none;
    &:last-of-type {
      margin-right: 0;
    }
  }

  & .control-dots > .selected {
    background: #008AFF;
  }

  @media ${device.tabletVert} {
    display: block;
  }
`
