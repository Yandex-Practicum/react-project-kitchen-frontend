import React from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  max-width: 1145px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: max-content 225px;
  gap: 30px;
  align-items: flex-end;
  color: #0a0a0b;
  border-bottom 1px solid #0a0a0b;
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

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <Title>Когда вырасту</Title>
      <Subtitle>Каково быть джуном в турбулентном мире</Subtitle>
    </BannerContainer>
  );
};

export default Banner;
