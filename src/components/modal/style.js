import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;

export const ModalWrapper = styled.div`
  width: auto;
  height: auto;
  background-color: #1C1C21;
  border: 2px solid #4C4CFF;
  box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 40px;
  box-sizing: border-box;
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  margin-left: auto;
  margin-right: 0;
  & > svg {
    cursor: pointer;
  }
`;
