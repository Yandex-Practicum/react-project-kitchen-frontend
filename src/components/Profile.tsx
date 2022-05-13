import ArticleList from "./ArticleList";
import ProfileHeader from "./ProfileHeader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getArticlesByAuthorThunk,
  getProfileThunk,
} from "../services/thunks";
import { profileSlice } from "../services/profileSlice";
import * as Styles from "./StyledComponents/profileStyles";
import Preloader from "./Preloader";

function Profile() {
  const dispatch = useDispatch();
  const { username, image, following, isLoading } = useSelector(
    (state: any) => state.profile
  );
  const { pager, articles, articlesCount, currentPage } = useSelector(
    (state: any) => state.articleList
  );

  const actionsProfile = profileSlice.actions;

  const params: { username: string;[key: string]: any } = useParams();

  useEffect(() => {
    if (params.username) {
      dispatch(getProfileThunk(params.username));
      dispatch(getArticlesByAuthorThunk({ author: params.username, page: 0 }));
    }
    return () => {
      actionsProfile.profilePageWasUnloaded();
    }
  }, [dispatch]);

  if (!username) {
    return null;
  }
  return (
    <>
    {(isLoading && <Preloader />)}

    <Styles.ProfileSection>
      <ProfileHeader
        profile={{ username, image, following }}
      />
    </Styles.ProfileSection>
    </>
  );
}

export default Profile;
