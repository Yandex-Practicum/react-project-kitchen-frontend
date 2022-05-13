import styled from 'styled-components';
import { device } from './constantsStyles';

export const ProfileSection = styled.section`
  padding: 0 20px;

  max-width: 740px;

  margin: -250px auto 0;

  @media ${device.laptop} {
    margin: -358px auto 0;
  }
`
