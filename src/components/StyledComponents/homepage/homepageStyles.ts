import styled from "styled-components";
import { device} from '../constantsStyles'

export const HomePageSection = styled.section`
  margin: -250px auto 0;
  max-width: 1140px;
  display: flex;
  justify-content: space-between;
  overflowY: "auto" ;
  padding-bottom: 30px;

  @media ${device.laptopL} {
   margin: -314px auto 0;
   max-width: 720px;
  }

  @media ${device.laptop} {
    margin: -355px auto 0;
    max-width: 720px;
    padding-bottom: 40px;
  }

  @media ${device.tablet} {
    margin: -371px auto 0;
    flex-direction: column-reverse;
    align-items: center;
  }

`

