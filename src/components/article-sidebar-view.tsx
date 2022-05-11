import React, {FunctionComponent} from "react";

import {ArticleHeading, ArticleWrapper, AuthorWrapper} from "./StyledComponents/sidebar-information-styles";
import ProfileInformationView from "./profile-information-view";
import Like from "./Article/like";
import like from "../images/like-icon.svg";
import {TFollowingUser} from "../services/types";

const ArticleSidebarView: FunctionComponent<{ likesCount: number, articleHeading: string, articleDate: string, articleAuthor: TFollowingUser }> = (props) => {
  return (
    <>
      <ArticleWrapper>
        <AuthorWrapper>
          <ProfileInformationView articleDate={props.articleDate} author={props.articleAuthor}/>
          <Like counter={props.likesCount} icon={like}/>
        </AuthorWrapper>
        <ArticleHeading>{props.articleHeading}</ArticleHeading>
      </ArticleWrapper>
    </>
  )
}

export default ArticleSidebarView;
