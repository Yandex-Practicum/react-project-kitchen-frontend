import MainView from "../../components/Home/MainView";
import {FC, useEffect} from "react";
import Tags from "../../components/Home/Tags";
import {useSelector, useDispatch} from "react-redux";
import {
  getAllArticlesForSortThunk,
  getAllArticlesThunk,
  getTagsThunk,
} from "../../services/thunks";
import {homeSlice} from "../../services/homeSlice";
import SidebarInformation from "../../components/sidebar-information";
import {HomePageSection} from "../../components/StyledComponents/homepage/homepageStyles";
import {SidebarRight, StickyContainer} from "../../components/StyledComponents/sidebar-information-styles";
import {TagsTitle} from "../../components/StyledComponents/home-page-styles";

const Home: FC = () => {
  const {tags} = useSelector((state: any) => state.home);
  const {allArticles} = useSelector((state: any) => state.articleList);
  const dispatch = useDispatch();

  const actionsHome = homeSlice.actions;

  useEffect(() => {
    dispatch(getAllArticlesForSortThunk());
    dispatch(getAllArticlesThunk());
    dispatch(getTagsThunk());
    return () => {
      dispatch(actionsHome.homePageWasUnloaded());
    };
  }, []);

  return (
    <HomePageSection>
      <MainView/>
      <SidebarRight>
        <StickyContainer>
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
        </StickyContainer>
      </SidebarRight>
    </HomePageSection>
  );
};

export default Home;
