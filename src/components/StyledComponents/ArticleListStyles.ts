import styled from "styled-components";
import { device } from './constantsStyles';

export const ArcticleListCont = styled.div`
  width: 700px;

  @media ${device.tablet} {
    width: 360px;
  }
`;
