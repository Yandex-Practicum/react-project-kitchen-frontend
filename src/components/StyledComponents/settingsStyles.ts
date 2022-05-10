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
export const SettingsForm = styled.form`
  width: 100%;
`

export const SettingsFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
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

export const SettingsLabel = styled.label`
  display: block;

  font-family: 'AlegreyaSans', Times, serif;
  font-weight:400;
  font-size: 16px;
  line-height: 1.5;
  color: ${textColor.secondaryText};
  margin: 0;
`
export const SettingsInput = styled.input<{isError: any}>`
  display: block;
  width: 100%;
  height: 40px;

  border: 1px solid ${props => props.isError ? `${inputBorderColor.error}` : `${inputBorderColor.default}`};
  border-radius: 4px;

  font-family: 'AlegreyaSans', Times, serif;
  font-weight:400;
  font-size: 16px;
  line-height: 1.5;
  color: ${textColor.secondaryText};

  padding: 0 16px;

  transition: all 0.2s linear;

  &:focus{
    outline: none;
    border-color: ${props => props.isError ? `${inputBorderColor.error}` : `${inputBorderColor.active}`};
  }
`

export const SettingsInputContainer = styled.div`
  position:relative;
  `

export const SettingsIcon = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    position:absolute;
    bottom:10%;
    right:17px;
    width:24px;
    height:24px;
    cursor: pointer;
    z-index: 900;
    &:hover{
      opacity: .7;
     
    }

    `

export const SettingsError = styled.p`
  font-family: 'AlegreyaSans', Times, serif;
  font-weight:400;
  font-size: 16px;
  line-height: 1.5;
  color: ${textColor.error};

  margin: 0;
`
export const ErrorsContainer = styled.div`
  height: 24px;
`

export const AutoError = styled.p`
  font-family: 'AlegreyaSans', Times, serif;
  font-weight:400;
  font-size: 16px;
  line-height: 1.5;
  color: ${textColor.error};

  margin: 0;
  &:last-of-type {
    margin-bottom: 8px;
}
`
