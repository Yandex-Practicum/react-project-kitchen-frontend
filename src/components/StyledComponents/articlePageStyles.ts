import styled from 'styled-components';
import { textColor, linkColor, inputBorderColor, device } from './constantsStyles';

export const ArticlePage = styled.section`
  max-width: 1140px;
  margin: 0 auto;

  @media ${device.laptopL} {
    max-width: 955px;
  }

  @media ${device.laptop} {
    max-width: 720px;
  }
  @media ${device.mobileS} {
    max-width: 280px;
  }
`

export const PageBody = styled.div`
  display: flex;
  gap: 81px;

  margin-top: calc(-307px + 56px);

  @media ${device.laptopL} {
    margin-top: calc(-371px + 48px);
  }

  @media ${device.laptop} {
    margin-top: calc(-403px + 48px);
    gap: 40px;
  }
  @media ${device.tablet} {
    max-width: 280px;
    margin-top: calc(-411px + 40px);
  }
`

export const PageContent = styled.div`
  width: 700px;

  @media ${device.laptopL} {
    width: 588px;
  }

  @media ${device.tablet} {
    width: 453px;
  }
  /* @media ${device.mobileS} {
    max-width: (280px / 320px);
  } */
`

export const ASide = styled.section`
  width: 359px;
  background-color: aqua;

  @media ${device.laptopL} {
    max-width: 377px;
  }

  @media ${device.laptop} {
    max-width: 277px;
  }
  /* @media ${device.mobileS} {
    max-width: 280px;
  } */
`
export const ArticleTitle = styled.section`
  font-size: 56px;
  font-weight: 400;
  line-height: 64px;

  color: ${textColor.headers};

  @media ${device.laptopL} {
    max-width: 377px;
  }

  @media ${device.laptop} {
    max-width: 277px;
  }
  /* @media ${device.mobileS} {
    max-width: 280px;
  } */
`
