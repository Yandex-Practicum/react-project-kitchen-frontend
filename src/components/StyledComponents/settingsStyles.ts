import styled from 'styled-components';
import { textColor, inputBorderColor, device } from './constantsStyles';

export const SettingsSection = styled.section`
  max-width: 540px;
  margin: 0 auto;
  padding: 56px 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    padding-top: 48px;
  }
  @media ${device.mobileS} {
    padding-top: 56px;
  }
`

export const SettingsTitle = styled.h2`
  text-align: center;

  font-family: 'AlegreyaSans', Times, serif;
  font-weight:400;
  font-size: 36px;
  line-height: 1.11;

  color: ${textColor.headers};

  margin-bottom: 40px;

  @media ${device.tablet} {
    font-size: 32px;
    line-height: 36px;

  }
`
