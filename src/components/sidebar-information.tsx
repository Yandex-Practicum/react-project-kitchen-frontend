import React, {FunctionComponent} from "react";

import {SidebarHeading} from "./StyledComponents/sidebar-information-styles";
import ArticleSidebarView from "./article-sidebar-view";
import {TArticleProperties} from "../services/types";
import {sortArrayOfObjects} from "../utils/utiils";

const SidebarInformation: FunctionComponent<{sectionTitle: string, articles: Array<TArticleProperties>, keyName: string}> = (props) => {
  let articlesArrayForSort;

  // копируем иммутабельный массив из состояния дл ятого, чтобы отсортировать его. Сортировка не возвращает новое значение, а сортирует прямо на месте!
  articlesArrayForSort = [...props.articles];
  articlesArrayForSort = sortArrayOfObjects(articlesArrayForSort, props.keyName)
    .slice(0, 6);

  const composeCreatedDate = (date: string) => {
    const createdDate = new Date(date).toLocaleDateString('ru-RU', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
    const deleteLastChar = createdDate.indexOf('г');
    return createdDate.slice(0, deleteLastChar - 1);
  }

  return (
    <>
      <SidebarHeading>{props.sectionTitle}</SidebarHeading>
      {
        articlesArrayForSort.map((article, index) => (
          <ArticleSidebarView key={index} likesCount={article.favoritesCount} articleHeading={article.title}
                              articleDate={composeCreatedDate(article.createdAt)}
                              articleAuthor={article.author}/>
        ))
      }
    </>
  )
}

export default SidebarInformation;
