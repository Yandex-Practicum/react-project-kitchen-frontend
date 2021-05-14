import styled from 'styled-components';

export const ImageWrapper = styled.img`
  height: 368px;    
  max-width: 1108px;  
  object-fit: cover;
  cursor: pointer;
  @media (max-width: 425px) {
    padding: 0 8px;
    max-width: 425px; 
  }   
`;