import styled from 'styled-components';
import { textColor, inputBorderColor, device } from './constantsStyles';
import TextareaAutosize from 'react-textarea-autosize';

export const EditorSection = styled.section`
  max-width: 540px;
  margin: 0 auto;
  padding: 56px 20px 150px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    padding-top: 64px;
  }
  @media ${device.mobileS} {
    padding-top: 72px;
  }
`
export const EditorTitle = styled.h2`
  text-align: center;

  font-family: 'AlegreyaSans', Times, serif;
  font-weight:400;
  font-size: 36px;
  line-height: 1.11;

  color: ${textColor.headers};

  margin-bottom: 40px;

  @media ${device.tablet} {
    font-size: 32px;
  }
`
export const EditorForm = styled.form`
  width: 100%;
`
export const EditorFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
`
export const EditorLabel = styled.label`
  display: block;

  font-family: 'AlegreyaSans', Times, serif;
  font-weight:400;
  font-size: 16px;
  line-height: 1.5;
  color: ${textColor.secondaryText};

  margin: 0;
`
export const EditorInput = styled.input<{isError: any}>`
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
export const EditorError = styled.p`
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
export const EditorInputContainer = styled.div`
  position:relative;
  `
export const EditorIcon = styled.span`
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
export const EditorTextarea = styled(TextareaAutosize)<{isError: any}>`
  display: block;

  width: 100%;

  overflow:hidden;

  border: 1px solid ${props => props.isError ? `${inputBorderColor.error}` : `${inputBorderColor.default}`};
  border-radius: 4px;

  font-family: 'AlegreyaSans', Times, serif;
  font-weight:400;
  font-size: 16px;
  line-height: 1.5;
  color: ${textColor.secondaryText};

  padding: 0 16px;

  resize: vertical;

  transition: all 0.2s linear;

  &:focus{
    outline: none;
    border-color: ${props => props.isError ? `${inputBorderColor.error}` : `${inputBorderColor.active}`};
}
`
