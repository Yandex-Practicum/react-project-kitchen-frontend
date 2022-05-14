import ArticleList from "../ArticleList";
import { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllArticlesThunk } from "../../services/thunks";
import { getAllArticles } from "../../api";
import { device } from '../StyledComponents/constantsStyles';
import { ArcticleListCont } from '../StyledComponents/ArticleListStyles';


const MainView: FC = () => {
  const { articles, articlesCount, currentPage, pager } = useSelector(
    (state: any) => state.articleList
  );

  return (
    <ArcticleListCont>
      <ArticleList
        pager={pager}
        articles={articles}
        // loading={loading}
        articlesCount={articlesCount}
        currentPage={currentPage}
      />
    </ArcticleListCont>
  );
};

export default MainView;
