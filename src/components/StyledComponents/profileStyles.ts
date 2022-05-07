import styled from 'styled-components';
import { device } from './constantsStyles';

export const ProfileSection = styled.section`
  padding-top: 56px 20px 0;

  max-width: 700px;

  margin: 0 auto;

  @media ${device.tablet} {
    padding-top: 48px;
  }
  @media ${device.mobileS} {
    padding-top: 40px;
  }
`
