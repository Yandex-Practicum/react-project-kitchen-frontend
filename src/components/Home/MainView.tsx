import ArticleList from "../ArticleList";
import { FC, useState } from "react";
import TabItem from "../Tab/Tab";
import { useSelector, useDispatch } from "react-redux";
import { getAllArticlesThunk, getFeedArticlesThunk } from "../../services/thunks";

const MainView: FC = () => {
  const { articles, articlesCount, currentPage, pager } = useSelector(
    (state: any) => state.articleList
  );
  const { token } = useSelector((state: any) => state.common);
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState("feed");

  const clickHandler = (type: string) => {
    if (type === "all") {
      setCurrentTab("all");
      dispatch(getAllArticlesThunk());
    } else {
      dispatch(getFeedArticlesThunk());
      setCurrentTab('feed');
    }
  };

  return (
    <div className="col-md-8"  style={{overflowY: 'auto'}}>
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          {token && (
            <TabItem
              name="Your Feed"
              onTabClick={clickHandler}
              type="feed"
              active={currentTab === "feed" ? true : false}
              hide={null}
            />
          )}

          <TabItem
            name="All Feed"
            onTabClick={clickHandler}
            type="all"
            active={currentTab === "all" ? true : false}
            hide={null}
          />

          {/* <TabItem
            name={`#${props.tag}`}
            onTabClick={clickHandler}
            type="all"
            active={props.tab ? false : true}
            hide={!props.tag}
          /> */}
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
