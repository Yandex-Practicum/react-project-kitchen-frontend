import React, {FunctionComponent} from "react";

import {ArticleHeading, ArticleWrapper, AuthorWrapper} from "./StyledComponents/sidebar-information-styles";
import ProfileInformationView from "./profile-information-view";
import Like from "./Article/like";
import like from "../images/like-icon.svg";

const ArticleSidebarView: FunctionComponent<{likesCount: number, articleHeading: string}> = (props) => {
  return (
    <>
      <ArticleWrapper>
        <AuthorWrapper>
          <ProfileInformationView/>
          <Like counter={props.likesCount} icon={like}/>
        </AuthorWrapper>
        <ArticleHeading>{props.articleHeading}</ArticleHeading>
      </ArticleWrapper>
    </>
  )
}

export default ArticleSidebarView;
