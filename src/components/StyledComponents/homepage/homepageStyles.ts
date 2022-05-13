import styled from "styled-components";
import { colors, device} from '../constantsStyles'
import popup_close from '../../../images/popup_close.svg'


export const HomePageSection = styled.section`
  margin: -250px auto 0;
  max-width: 1140px;
  display: flex;
  justify-content: space-between;
  overflowY: "auto" ;
  
  @media ${device.laptop} {
    margin: -358px auto 0;
  }
`

