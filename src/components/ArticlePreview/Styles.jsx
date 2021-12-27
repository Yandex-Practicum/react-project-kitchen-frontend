import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const ArticleMeta = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;

  & .avatar-info-wrapper {
    display: flex;
    flex-flow: row nowrap;
  }

  & img {
    border-radius: 50%;
    background: #E9E9ED;
    height: 48px;
    width: 48px;
    border: 2px solid #0A0A0B;
    box-sizing: border-box;
  }


`;

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

export const PreviewLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }

  & h1 {
    color: #0A0A0B;
    font-size: 24px;
    line-height: 28px;
  }

  & p {
    color: #62626A;
    font-size: 16px;
    line-height: 24px;
  }

  & span {
    color: #0000FF;
    text-decoration: underline;
    font-size: 16px;
    line-height: 24px;
  }
`;