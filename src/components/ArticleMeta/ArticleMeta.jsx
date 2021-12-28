import React from "react";
import { Link } from "react-router-dom";

// Components
import UserImage from "../UserImage/UserImage";
import LikeIcon from "../LikeIcon/LikeIcon";

// Styles
import { 
  Info,
  FavoriteButton,
  MetaWrapper 
} from "./Styles";

export default function ArticleMeta({ article, unfavorite, favorite }) {
  const handleClick = ev => {
    ev.preventDefault();
    if (article.favorited) {
      unfavorite(article.slug);
    } else {
      favorite(article.slug);
    }
  };

  return (
    <MetaWrapper className="meta-wrapper">
      <div className="avatar-info-wrapper">
        <Link to={`/@${article.author.username}`}>
          <UserImage src={article.author.image} alt={article.author.username} location="article" />
        </Link>

        <Info>
          <Link className="author" to={`/@${article.author.username}`}>
            {article.author.username}
          </Link>
          <span className="date">
            {new Date(article.createdAt).toLocaleDateString('ru', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </Info>  
      </div>
      

      <FavoriteButton favorited={article.favorited} onClick={handleClick}>
        {article.favoritesCount > 0 && article.favoritesCount} 
        <LikeIcon favorited={article.favorited} />
      </FavoriteButton>
    </MetaWrapper>
  );
}