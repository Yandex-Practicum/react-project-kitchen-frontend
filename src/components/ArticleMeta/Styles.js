import styled from "styled-components";

export const Info = styled.div`
display: flex;
flex-flow: column nowrap;

& .author {
  color: #0A0A0B;
  font-size: 16px;
  line-height: 24px;
}

& .date {
  color: #62626A;
  font-size: 12px;
  line-height: 16px;
}
`;

export const FavoriteButton = styled.button`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  background: none;
  border: none;
  color: ${props => props.favorited ? '#F3200C' : '#0A0A0B'};
  height: 23px;

  & svg {
    margin-left: 10px;
  }

  &:focus {
    outline: none;
  }
`;

export const MetaWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: 16px;

  & .avatar-info-wrapper {
    display: flex;
    flex-flow: row nowrap;
  }
`;