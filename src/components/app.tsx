import Header from "./header";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Article from "./Article";
import Editor from "./Editor";
import Home from "../pages/home-page/home-page";
import Login from "./login";
import Profile from "./Profile";
import Register from "../pages/register/register";
import Settings from "../pages/settings/settings";
import NotFound404 from "../pages/notFound404/notFound404"
import { useDispatch } from "react-redux";
import { authThunk } from "../services/thunks";
import { Layout } from "./StyledComponents/Layout";

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((store: any) => store.common);

  useEffect(() => {
    if (token) {
      dispatch(authThunk());
    }
  }, []);

  return (
    <>
      <Header />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/editor/:slug" component={Editor} exact />
          <Route path="/editor" component={Editor} exact />
          <Route path="/article/:id" component={Article} />
          <Route path="/settings" component={Settings} />
          <Route path="/@:username/favorites" component={Profile} />
          <Route path="/@:username" component={Profile} />
          <Route component={NotFound404}/>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
