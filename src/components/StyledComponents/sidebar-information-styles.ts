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
    border-bottom: #ccc 1px solid;
  }

  @media ${device.tabletVert} {
    padding: 0 20px 40px;
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

export const AuthorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`

export const ArticleWrapper = styled.div`
  padding: 24px 24px 24px 0;
  border-bottom: #ccc solid 1px;

  &:last-of-type {
    border-bottom: none;
  }

  @media ${device.tabletVert} {
    text-align: left;
  }
`

export const ArticleHeading = styled.h3`
  margin: 0;
  font-family: 'AlegreyaSans', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

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
