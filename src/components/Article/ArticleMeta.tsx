import React, {useEffect} from 'react';
import {
  ArticleMetaWrapper,
  ArticleNameAndDate,
  ArticleMetaName,
  ArticleMetaDate
} from '../StyledComponents/articleMetaStyles';
import Like from './like';
import like from "../../images/like-icon.svg";
import {composeCreatedDate} from '../../utils/utils';
import likeActive from "../../images/like-active-icon.svg";
import {TArticleProperties} from "../../services/types";
import {getAllArticlesForSortThunk} from "../../services/thunks";
import {useAppDispatch} from "../../services/hooks";

// type TArticleActionsProps = {
//   article: {
//     author: {
//       username: string;
//       image: string;
//     };
//     favoritesCount: number;
//     createdAt: any;
//   };
// }

const ArticleMeta: React.FC<{ article: TArticleProperties }> = (props) => {
  const article = props.article;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllArticlesForSortThunk());
  }, [])

  return (
    <ArticleMetaWrapper>
      <ArticleNameAndDate>
        <ArticleMetaName to={`/@${article.author.username}`}>
          {article.author.username}
        </ArticleMetaName>
        <ArticleMetaDate>
          {composeCreatedDate(article.createdAt)}
        </ArticleMetaDate>
      </ArticleNameAndDate>
      <Like article={article}
            icon={`${props.article.favorited ? likeActive : like}`}
            isButton={true}/>
    </ArticleMetaWrapper>
  );
};

export default ArticleMeta;
