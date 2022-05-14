import styled from 'styled-components';
import { textColor, inputBorderColor, device } from './constantsStyles';
import TextareaAutosize from 'react-textarea-autosize';

export const EditorSection = styled.section`
  max-width: 580px;
  margin: -250px auto 0;
  padding: 0 20px 150px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    margin: -358px auto 0;
    padding-bottom: 100px;
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

  @media ${device.laptop} {
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
