import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AuthSection = styled.section`
  max-width: 540px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 150px;

  display: flex;
  flex-direction: column;
  align-items: center;

`
export const AuthTitle = styled.h1`
  text-align: center;

  font-family: 'AlegreyaSans', Times, serif;
  font-weight:400;
  font-size: 36px;
  line-height: 1.11;

  color: #0A0A0B;

  margin-bottom: 40px;
`
export const StyledLink = styled(Link)`
  font-family: 'AlegreyaSans', Times, serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33;
  color: #008AFF;
  text-align: center;

  margin-bottom: 24px;

  transition: all 0.2s linear;

  &:hover {
    text-decoration: none;
    color: #007CE6;
  }
`
export const AuthLabel = styled.label`
  display: block;

  font-family: 'AlegreyaSans', Times, serif;
  font-weight:400;
  font-size: 16px;
  line-height: 1.5;
  color: #62626A;

  margin: 0;
`
export const AuthInput = styled.input<{isError: any}>`
  display: block;

  width: 100%;
  height: 40px;

  border: 1px solid ${props => props.isError ? `#FF1E1E` : `#CCCCCC`};
  border-radius: 4px;

  font-family: 'AlegreyaSans', Times, serif;
  font-weight:400;
  font-size: 16px;
  line-height: 1.5;
  color: #62626A;

  padding: 0 16px;

  transition: all 0.2s linear;

  &:focus{
    outline: none;
    border-color: ${props => props.isError ? `#FF1E1E` : `#A3A3A3`};
  }
`

export const AuthForm = styled.form`
  width: 100%;
`
export const AuthError = styled.p`
  font-family: 'AlegreyaSans', Times, serif;
  font-weight:400;
  font-size: 16px;
  line-height: 1.5;
  color: #FF413B;

  margin: 0;
`
export const ErrorsContainer = styled.div`
  height: 24px;
`
export const AuthFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
`
