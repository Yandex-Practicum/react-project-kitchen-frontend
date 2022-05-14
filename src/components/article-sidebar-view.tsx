import React, {FunctionComponent} from "react";

import {ArticleHeading, ArticleWrapper, AuthorWrapper} from "./StyledComponents/sidebar-information-styles";
import ProfileInformationView from "./profile-information-view";
import Like from "./Article/like";
import like from "../images/like-icon.svg";
import {TFollowingUser} from "../services/types";

const ArticleSidebarView: FunctionComponent<{ likesCount: number, articleHeading: string, articleDate: string, articleAuthor: TFollowingUser }> = (props) => {
  return (
    <>
      <ArticleWrapper padding="20px">
        <AuthorWrapper margin="12px">
          <ProfileInformationView articleDate={props.articleDate} author={props.articleAuthor}/>
          <Like counter={props.likesCount} icon={like}/>
        </AuthorWrapper>
        <ArticleHeading  fontSize="20px" lineHeight="24px" margin="0" lineHeightLap="22px" fontSizeLap="18px">{props.articleHeading}</ArticleHeading>
      </ArticleWrapper>
    </>
  )
}

export default ArticleSidebarView;
