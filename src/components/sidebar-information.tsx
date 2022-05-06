import React, {FunctionComponent} from "react";

import { SidebarHeading } from "./StyledComponents/sidebar-information-styles";
import ArticleSidebarView from "./article-sidebar-view";
import {TArticleProperties} from "../services/types";

const SidebarInformation: FunctionComponent<{articles: Array<TArticleProperties>}> = (props) => {
  return (
    <>
      <SidebarHeading>Заголовок</SidebarHeading>
      {
        props.articles.map(article => (
          <ArticleSidebarView likesCount={25} articleHeading={article.title}/>
        ))
      }
    </>
  )
}

export default SidebarInformation;
