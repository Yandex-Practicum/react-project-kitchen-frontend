import Banner from "../../components/Home/Banner";
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
    dispatch(getAllArticlesThunk());
    dispatch(getTagsThunk());
    return () => {
      dispatch(actionsHome.homePageWasUnloaded());
    };
  }, []);

  return (
      <HomePageSection>

          <MainView />
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
