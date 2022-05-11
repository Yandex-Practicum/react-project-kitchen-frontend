import styled from "styled-components";

export const SidebarRight = styled.div`
  min-width: 359px;
  position: sticky;
  align-self: flex-start;
  //--offset: 2rem;
  ////flex-grow: 1;
  ////flex-basis: 300px;
  //top: var(--offset);
  z-index: 10;
`

export const SidebarHeading = styled.h2`
  margin: 0;
  font-family: 'AlegreyaSans', sans-serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
`

export const AuthorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`

export const ArticleWrapper = styled.div`
  padding: 24px 24px 24px 0;
  border-bottom: #CCCCCC solid 1px;
  &:last-of-type {
    border-bottom: none;
  }
`

export const ArticleHeading = styled.h3`
  margin: 0;
  font-family: 'AlegreyaSans', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`
