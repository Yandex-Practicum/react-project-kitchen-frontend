import Banner from "../../components/Home/Banner";
import MainView from "../../components/Home/MainView";
import { FC, useEffect } from "react";
import Tags from "../../components/Home/Tags";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllArticlesThunk,
  getTagsThunk,
} from "../../services/thunks";
import { homeSlice } from "../../services/homeSlice";
import SidebarInformation from "../../components/sidebar-information";
import { SidebarRight } from "../../components/StyledComponents/sidebar-information-styles";
import { TagsTitle } from "../../components/StyledComponents/home-page-styles";
import { HomePageSection } from "../../components/StyledComponents/homepage/homepageStyles";

const Home: FC = () => {
  const { appName, token } = useSelector((state: any) => state.common);
  const { tags } = useSelector((state: any) => state.home);
  const { articles } = useSelector((state: any) => state.articleList);

  const dispatch = useDispatch();

  const actionsHome = homeSlice.actions;

  useEffect(() => {
    dispatch(getAllArticlesThunk());
    dispatch(getTagsThunk());
    return () => {
      dispatch(actionsHome.homePageWasUnloaded());
    };
  }, []);

  return (
      <HomePageSection>
          <MainView />
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
            <SidebarInformation sectionTitle="Популярные материалы" articles={articles} keyName='favoritesCount'/>
          </SidebarRight>
          {/*</div>*/}
      </HomePageSection>
  );
};

export default Home;
