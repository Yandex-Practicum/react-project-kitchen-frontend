import { device } from './constantsStyles';
import styled from "styled-components";
import centerFigure from "../../images/Banner/centerFigure.svg";
import blueCurve from "../../images/Banner/blueCurve.svg";
import blackCurve from "../../images/Banner/blackCurve.svg";
import blackChevron from "../../images/Banner/blackChevron.svg";
import halfCircle from "../../images/Banner/halfCircle.svg";
import ball from "../../images/Banner/ball.svg";

device

export const BannerContainer = styled.div`
  position: relative;
  max-width: 1145px;
  margin: 0 auto;
  margin-top: 118px;
  display: grid;
  grid-template-columns: max-content 225px 1fr;
  gap: 30px;
  align-items: flex-end;
  color: #0a0a0b;
  border-bottom: 1px solid #0a0a0b;
  padding-bottom: 56px;

  @media ${device.laptopL} {
    padding-bottom: 40px;
  }

  @media ${device.laptop} {
    padding-bottom: 24px;
    gap: 15px;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 13px;
    padding-bottom: 13px;
  }

`;

export const Title = styled.h1`
  font-family: 'AlegreyaSans';
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 118px;
  line-height: 100%;

  @media ${device.laptopL} {
    font-size: 102px;
  }

  @media ${device.laptop} {
    font-size: 86px;
  }

  @media ${device.tablet} {
    font-size: 40px;
  }
  `;

export const Subtitle = styled.p`
  font-family: 'AlegreyaSans';
  margin: 0;
  margin-bottom: 23px;
  max-width: 225px;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 100%;

  @media ${device.laptopL} {
    font-size: 18px;
  }

  @media ${device.laptop} {
    font-size: 18px;
  }

  @media ${device.tablet} {
    font-size: 16px;
  }


`;
/*
export const Parallelogram = styled.div`
  width: 91px;
  height: 328px;
  transform: rotate(42.73deg) skew(-18.5deg);
  background: #ff413b;
`;*/

export const TopFigure = styled.img`
  background-color: transparent;
  width: 370px;
  height: 377px;
  position: absolute;
  bottom: 1px;
  left: 505px;
`;

export const BlueCurve = styled.img`
  background-color: transparent;
  width: 321px;
  height: 642px;
  position: absolute;
  bottom: -261px;
  left: -389px;
`;

export const BlackChevron = styled.img`
  background-color: transparent;
  position: absolute;
  width: 252px;
  height: 263px;
  bottom: 77px;
  left: -389px;
`;

export const BlackCircle = styled.img`
  background-color: transparent;
  position: absolute;
  width: 175px;
  height: 75px;
  bottom: -2px;
  right: 20px;
`;

export const BlackCurve = styled.img`
  background-color: transparent;
  position: absolute;
  width: 351px;
  height: 818px;
  bottom: -304px;
  right: -351px;
`;

export const Ball = styled.img`
  background-color: transparent;
  position: absolute;
  width: 428px;
  height: 135px;
  bottom: 28px;
  right: -390px;
`;

interface TYellowCircle {
  location: "left" | "right";
}
export const YellowCirce = styled.div<TYellowCircle>`
  position: absolute;
  border-radius: 50%;
  background-color: #ffc600;
  width: 20px;
  height: 20px;
  bottom: ${(props) => (props.location === "left" ? "74px" : "169px")};
  left: ${(props) => (props.location === "left" ? "-41px" : "1000px")};
`;
