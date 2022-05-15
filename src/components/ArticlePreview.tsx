import React from "react";
import {useDispatch} from "react-redux";
import {composeCreatedDate} from "../utils/utils";
import {TArticleProperties} from "../services/types";

import {
  ArticleBody,
  AdditionalInfo,
  ArticleWrapper,
  ReadMoreLink,
  Tagslist,
  ArticleTag,
  ArticleText,
  ArticleImg
} from './StyledComponents/ArticlePreviewStyles'
import {ArticleHeading, AuthorWrapper} from "./StyledComponents/sidebar-information-styles";
import ProfileInformationView from "./profile-information-view";
import Like from "./Article/like";
import like from "../images/like-icon.svg";
import likeActive from "../images/like-active-icon.svg";
import {useAppSelector} from "../services/hooks";

const ArticlePreview: React.FC<{ article: TArticleProperties }> = (props) => {
  const {article} = props;

  return (
    <ArticleWrapper>
      <AuthorWrapper margin="16px">
        <ProfileInformationView articleDate={composeCreatedDate(article.createdAt)} author={article.author}/>
        <Like article={article}
              icon={`${props.article.favorited ? likeActive : like}`}
              isButton={true}/>
      </AuthorWrapper>
      <ArticleHeading fontSize='36px' lineHeight="40px" margin="0 0 16px" fontSizeLap="32px"
                      lineHeightLap="36px">{article.title}</ArticleHeading>
      <ArticleBody>
        {article.image && (<ArticleImg urlImg={`${article.image}`}/>)}
        <ArticleText fontSizeLap="16px" lineHeightLap="20px">{article.body}</ArticleText>
      </ArticleBody>
      <AdditionalInfo>
        <ReadMoreLink to={`/article/${article.slug}`}>Читать дальше</ReadMoreLink>
        <Tagslist>
          {article.tagList.map((tag: any, i: number) => {
            return (
              <ArticleTag key={i}>
                {'#' + tag.replaceAll('#', '')}
              </ArticleTag>
            );
          })}
        </Tagslist>
      </AdditionalInfo>
    </ArticleWrapper>
  );
};

export default ArticlePreview;
