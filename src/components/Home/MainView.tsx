import ArticleList from "../ArticleList";
import { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllArticlesThunk } from "../../services/thunks";
import { getAllArticles } from "../../api";

const MainView: FC = () => {
  const { articles, articlesCount, currentPage, pager } = useSelector(
    (state: any) => state.articleList
  );

  return (
      <ArticleList
        pager={pager}
        articles={articles}
        // loading={loading}
        articlesCount={articlesCount}
        currentPage={currentPage}
      />
  );
};

export default MainView;
