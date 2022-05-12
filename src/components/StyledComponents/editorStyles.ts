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

  transition: all 0.2s linear;

  &:focus{
    outline: none;
    border-color: ${props => props.isError ? `${inputBorderColor.error}` : `${inputBorderColor.active}`};
}
`
