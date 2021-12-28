import styled from "styled-components";
import { Link } from "react-router-dom";



export const ArticleMeta = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
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

export const ArticleWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  padding: 32px 0;
  border-top: 1px solid #DDDDE3;

  &:last-child {
    border-bottom: 1px solid #DDDDE3;
  }

  & .strange-block {
    background-color: #F4F4F6;
    width: 160px;
    height: 200px;
    margin-right: 16px;
    border-radius: 7px;
  }

  & .article-preview {
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    border: none;
  }
`;