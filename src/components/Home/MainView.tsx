import ArticleList from "../ArticleList";
import {FC } from "react";
import { CHANGE_TAB } from "../../services/articleListSlice";
import TabItem from "../Tab/Tab";
import { getAllArticles, getFeedArticles } from "../../api";
import { useSelector, useDispatch } from "react-redux";

const MainView: FC = (props: any) => {
  const {articles , articlesCount, currentPage, pager} = useSelector((state: any) => state.articleList);
  const { token } = useSelector((state: any) => state.common);
  const dispatch = useDispatch();

  const onTabClick =(tab: any, pager: any, payload: any) =>
    dispatch({ type: CHANGE_TAB, tab, pager, payload })

  const clickHandler = (type: string) => {
    if (type === "all") {
      onTabClick(type, getAllArticles, getAllArticles());
    } else {
      onTabClick(type, getFeedArticles, getFeedArticles());
    }
    // props.onTabClick(type, agent.Articles[type], agent.Articles[type]());
  };

  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          {token && (
            <TabItem
              name="Your Feed"
              onTabClick={clickHandler}
              type="feed"
              active={props.tab === "feed" ? true : false}
              hide={null}
            />
          )}

          <TabItem
            name="All Feed"
            onTabClick={clickHandler}
            type="all"
            active={props.tab === "all" ? true : false}
            hide={null}
          />

          <TabItem
            name={`#${props.tag}`}
            onTabClick={clickHandler}
            type="all"
            active={props.tab ? false : true}
            hide={!props.tag}
          />
        </ul>
      </div>

      <ArticleList
        pager={pager}
        articles={articles}
        // loading={loading}
        articlesCount={articlesCount}
        currentPage={currentPage}
      />
    </div>
  );
};

export default MainView;

// const TagFilterTab = props => {
//   if (!props.tag) {
//     return null;
//   }

//   return (
//     <li className="nav-item">
//       <a href="" className="nav-link active">
//         <i className="ion-pound"></i> {props.tag}
//       </a>
//     </li>
//   );
// };
