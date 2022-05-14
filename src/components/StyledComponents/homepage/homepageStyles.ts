import styled from "styled-components";
import { device} from '../constantsStyles'

export const HomePageSection = styled.section`
  margin: -250px auto 0;
  max-width: 1140px;
  display: flex;
  justify-content: space-between;
  overflowY: "auto" ;

  @media ${device.laptop} {
    
   max-width: 720px;
  }

  @media ${device.tablet} {
    
    flex-direction: column;
  }

`

