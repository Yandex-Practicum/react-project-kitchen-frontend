import React from "react";
import styled from "styled-components";
import centerFigure from "../../images/Banner/centerFigure.svg";
import blueCurve from "../../images/Banner/blueCurve.svg";
import blackCurve from "../../images/Banner/blackCurve.svg";
import blackChevron from "../../images/Banner/blackChevron.svg";
import halfCircle from "../../images/Banner/halfCircle.svg";
import ball from "../../images/Banner/ball.svg";

const BannerContainer = styled.div`
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
`;

const Title = styled.h1`
  margin: 0;
  font-family: "Alegreya Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 118px;
  line-height: 100%;
`;

const Subtitle = styled.p`
  margin: 0;
  margin-bottom: 23px;
  max-width: 225px;
  font-family: "Alegreya Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 100%;
`;
/*
const Parallelogram = styled.div`
  width: 91px;
  height: 328px;
  transform: rotate(42.73deg) skew(-18.5deg);
  background: #ff413b;
`;*/

const TopFigure = styled.img`
  width: 370px;
  height: 377px;
  position: absolute;
  bottom: 1px;
  left: 505px;
`;

const BlueCurve = styled.img`
  width: 321px;
  height: 642px;
  position: absolute;
  bottom: -261px;
  left: -389px;
`;

const BlackChevron = styled.img`
  position: absolute;
  width: 252px;
  height: 263px;
  bottom: 77px;
  left: -389px;
`;

const BlackCircle = styled.img`
  position: absolute;
  width: 175px;
  height: 75px;
  bottom: -2px;
  right: 20px;
`;

const BlackCurve = styled.img`
  position: absolute;
  width: 351px;
  height: 818px;
  bottom: -304px;
  right: -351px;
`;

const Ball = styled.img`
  position: absolute;
  width: 428px;
  height: 135px;
  bottom: 28px;
  right: -390px;
`;

interface TYellowCircle {
  location: "left" | "right";
}
const YellowCirce = styled.div<TYellowCircle>`
  position: absolute;
  border-radius: 50%;
  background-color: #ffc600;
  width: 20px;
  height: 20px;
  bottom: ${(props) => (props.location === "left" ? "74px" : "169px")};
  left: ${(props) => (props.location === "left" ? "-41px" : "1000px")};
`;

const Banner: React.FC = () => {
  return (
    <>
      <BannerContainer>
        <Title>Когда вырасту</Title>
        <Subtitle>Каково быть джуном в турбулентном мире</Subtitle>
        <BlackCircle src={halfCircle} />
        <TopFigure src={centerFigure} />
        <BlueCurve src={blueCurve} />
        <BlackChevron src={blackChevron} />
        <YellowCirce location="left" />
        <YellowCirce location="right" />
        <BlackCurve src={blackCurve} />
        <Ball src={ball} />
      </BannerContainer>
    </>
  );
};

export default Banner;
