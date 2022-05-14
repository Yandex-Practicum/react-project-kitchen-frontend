import Banner from "../../components/Home/Banner";
import MainView from "../../components/Home/MainView";
import {FC, useEffect} from "react";
import Tags from "../../components/Home/Tags";
import {useSelector, useDispatch} from "react-redux";
import {
  getAllArticlesForSortThunk,
  getAllArticlesThunk,
  getFeedArticlesThunk,
  getTagsThunk,
} from "../../services/thunks";
import {homeSlice} from "../../services/homeSlice";
import SidebarInformation from "../../components/sidebar-information";
import {SidebarRight} from "../../components/StyledComponents/sidebar-information-styles";
import {TagsTitle} from "../../components/StyledComponents/home-page-styles";
import {getAllArticlesForSort} from "../../api";
import {SidebarSlider} from "../../components/sidebar-slider";

const Home: FC = () => {
  const {token} = useSelector((state: any) => state.common);
  const {tags} = useSelector((state: any) => state.home);
  const {allArticles} = useSelector((state: any) => state.articleList);
  console.log(allArticles)
  const dispatch = useDispatch();

  const actionsHome = homeSlice.actions;

  useEffect(() => {
    dispatch(getAllArticlesForSortThunk());
    if (token) {
      dispatch(getFeedArticlesThunk());
    } else {
      dispatch(getAllArticlesThunk());
    }
    dispatch(getTagsThunk());
    return () => {
      dispatch(actionsHome.homePageWasUnloaded());
    };
  }, []);

  return (
    <div className="home-page">
      <div className="container page">
        <div className="row">
          <MainView/>
          {/*<div className="col-md-3">*/}
          {/*<div className="sidebar" style={{position: "sticky", top: '20%'}}>*/}
          <SidebarRight>
            <TagsTitle>Популярные теги</TagsTitle>
            <Tags
              tags={tags}
              onClickTag={(
                tag: string,
                pager: (page: any) => {},
                payload: any
              ) => ({})}
            />
            <SidebarInformation sectionTitle="Популярные материалы" articles={allArticles} keyName='favoritesCount'/>
          </SidebarRight>
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};

export default Home;
