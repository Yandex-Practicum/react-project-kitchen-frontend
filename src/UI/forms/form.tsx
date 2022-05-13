import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { textColor, inputBorderColor } from '../../components/StyledComponents/constantsStyles';

export const Form = styled.form`
  width: 100%;
`

export const FieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  z-index: -1
`

export const Label = styled.label`
  display: block;

  font-family: 'AlegreyaSans', Times, serif;
  font-weight:400;
  font-size: 16px;
  line-height: 1.5;
  color: ${textColor.secondaryText};

  margin: 0;
`

export const Input = styled.input<{isError: any}>`
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

export const Error = styled.p`
  font-family: 'AlegreyaSans', Times, serif;
  font-weight:400;
  font-size: 16px;
  line-height: 1.5;
  color: ${textColor.error};
`
export const ErrorsContainer = styled.div`
  height: 24px;
  margin: 0;
`

export const InputContainer = styled.div`
  position:relative;
  `
export const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position:absolute;
  bottom:10%;
  right:17px;
  width:24px;
  height:24px;
  cursor: pointer;
  z-index: 7;
  &:hover{
    opacity: .7;
}
`
