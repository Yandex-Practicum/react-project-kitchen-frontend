import styled from "styled-components";
import {TAvatar, TFontSize} from "./types";

export const ProfileContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
`

export const ProfileImageWrapper = styled.div`
  box-sizing: border-box;
  margin-right: 8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
`

export const ProfileImageBorder =  styled.div<TAvatar>`
  width: 32px;
  height: 32px;
  box-sizing: border-box;
  border-radius: 50%;
  overflow: hidden;
  border: ${props => props.avatar ? '#008AFF' : 'none'} solid 1px;
`

export const ProfileImage = styled.img`
  display: block;
  padding: 0;
  border: none;
  //border-radius: 50%;
  width: 100%;
  object-fit: contain;
  object-position: top left;

`

export const ProfileTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileText = styled.p<TFontSize>`
  box-sizing: border-box;
  margin: 0 0 4px 0;
  font-family: 'AlegreyaSans', sans-serif;
  font-weight: 400;
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  color: #62626A;
  &:last-of-type {
    margin-bottom: 0;
  };
`
