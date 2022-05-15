import ArticleList from "../ArticleList";
import { FC } from "react";
import { useSelector } from "react-redux";

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
