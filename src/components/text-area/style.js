import styled from 'styled-components';

export const TextAreaLabel = styled.label`
  top: ${props => (props.isFocus || props.notEmpty) ? "0" : "8"}px;
  font-size: ${props => (props.isFocus || props.notEmpty) ? "8" : "16"}px;
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

export const TextAreaElement = styled.textarea`
  display: block;
  cursor: text;
  background-color: transparent;
  border: none;
  width: 100%;
  color: var(--text-primary-color);
  min-height: 256px;
  padding: 4px auto;
  &:focus {
    outline: none !important;
  }
`;

export const TextAreaWrapper = styled.div`
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
