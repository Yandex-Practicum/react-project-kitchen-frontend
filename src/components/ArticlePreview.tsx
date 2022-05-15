import React from "react";
import {useDispatch} from "react-redux";
import {composeCreatedDate} from "../utils/utils";
import {
  deleteArticleAsFavoriteThunk,
  setArticleAsFavoriteThunk,
} from "../services/thunks";
import {TArticleProperties} from "../services/types";
import { ArticleBody, AdditionalInfo, ArticleWrapper, ReadMoreLink, Tagslist, ArticleTag, ArticleText, ArticleImg, ArticleHeading } from './StyledComponents/ArticlePreviewStyles'
import { AuthorWrapper} from "./StyledComponents/sidebar-information-styles";
import ProfileInformationView from "./profile-information-view";
import Like from "./Article/like";
import like from "../images/like-icon.svg";

const FAVORITED_CLASS = "btn btn-sm btn-primary";
const NOT_FAVORITED_CLASS = "btn btn-sm btn-outline-primary";


const ArticlePreview: React.FC<{ article: TArticleProperties } > = (props) => {
  // const dispatch = useDispatch();

  const {article} = props;
  console.log(article)
  // const favoriteButtonClass = article.favorited
  //   ? FAVORITED_CLASS
  //   : NOT_FAVORITED_CLASS;

  // const handleClick = (e: React.SyntheticEvent) => {
  //   if (article.favorited) {
  //     dispatch(deleteArticleAsFavoriteThunk(article.slug));
  //   } else {
  //     dispatch(setArticleAsFavoriteThunk(article.slug));
  //   }
  // };

  return (
    <ArticleWrapper >
        <AuthorWrapper margin="16px">
          <ProfileInformationView articleDate={composeCreatedDate(article.createdAt)} author={article.author}/>
          <Like counter={article.favoritesCount} icon={like}/>
        </AuthorWrapper>
        <ArticleHeading>{article.title}</ArticleHeading>
        <ArticleBody >
          {article.image && (<ArticleImg urlImg={`${article.image}`}/>)}
          <ArticleText fontSizeLap="16px" lineHeightLap="20px">{article.body}</ArticleText>
        </ArticleBody>
        <AdditionalInfo>
          <ReadMoreLink to={`/article/${article.slug}`}>Читать дальше</ReadMoreLink>
          <Tagslist>
          
          {article.tagList.length > 0 && article.tagList.map((tag: any, i: number) => {
            return (
              <ArticleTag key={i}>
                {tag ? `#${tag}` : tag}
              </ArticleTag>
            );
          })}
          </Tagslist>
        </AdditionalInfo>
    </ArticleWrapper>
  );
};

export default ArticlePreview;
