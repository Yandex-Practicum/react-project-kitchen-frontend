import styled from 'styled-components';

export const InputLabel = styled.label`
  top: ${props => (props.isFocus || props.notEmpty || props.type === "file") ? "0" : "6"}px;
  font-size: ${props => (props.isFocus || props.notEmpty || props.type === "file") ? "8" : "16"}px;
  position: absolute;
  cursor: text;
  user-select: none;
  display: block;
  position: absolute;
  cursor: text;
  text-align: left;
  color: var(--text-inactive-color);
  transition: 0.3s;
`;

export const InputElement = styled.input`
  display: block;
  cursor: text;
  background-color: transparent;
  border: none;
  width: 100%;
  color: var(--text-primary-color);
  height: 20px;
  padding: 4px auto;
  position: relative;
  &:focus {
    outline: none !important;
  }
  &::-webkit-file-upload-button {
    position: absolute;
    color: #F2F2F3;
    font-family: 'Jet Brains Mono';
    font-size: 12px;
    line-height: 18px;
    right: 0;
    background-color: #4C4CFF;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    outline: none;
    &:hover {
      box-shadow: 0px 0px 16px 8px rgba(51, 51, 255, 0.25), 0px 0px 8px 8px rgba(51, 51, 255, 0.25);
      filter: drop-shadow(0px 4px 32px rgba(51, 51, 255, 0.5));
    }
    &:active {
      opacity: 0.9;	
    }
    &:focus {
      outline:0;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  cursor: text;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: var(--background-element);   
  border: 2px solid ${props => props.isFocus ? "#4c4cff" : "#2f2f37"};
  border-radius: 20px;
  transition: 0.3s;
  position: relative;
`;

export const ImgPreview = styled.img`  
  height: 20px;
  cursor: pointer;
`;
