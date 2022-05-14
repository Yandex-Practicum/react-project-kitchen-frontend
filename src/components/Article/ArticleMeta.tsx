import { Link } from 'react-router-dom';
import React from 'react';
import { ArticleMetaWrapper, ArticleNameAndDate, ArticleMetaName, ArticleMetaDate } from '../StyledComponents/articleMetaStyles';
import Like from './like';
import like from "../../images/like-icon.svg";
import { composeCreatedDate } from '../../utils/utiils';

type TArticleActionsProps = {
  article: {
    author: {
      username: string;
      image: string;
    };
    favoritesCount: number;
    createdAt: any;
  };
}

const ArticleMeta: React.FC<TArticleActionsProps> = (props) => {
  const article = props.article;
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

      <Like counter={article.favoritesCount} icon={like}/>

    </ArticleMetaWrapper>


  );
};

export default ArticleMeta;
