/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from '../services/hooks';
/*
import {
  Route, Routes, useNavigate, useLocation,
} from 'react-router-dom';

import Header from './Header';
import Article from './Article';
import { Editor } from '../components_refact';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import ProfileFavorites from './ProfileFavorites';
import Register from './Register';
import Settings from './Settings';
*/
import { loadInitialDataThunk } from '../thunks';

const App = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const { isLoggedIn } = useSelector((state) => state.system);
  // const isDataLoaded = useSelector((state) => !!state.all.articles && !!state.all.tags);

  // const location = useLocation();

  useEffect(() => {
    dispatch(loadInitialDataThunk());

  }, [dispatch]);

  /*  return (
    <div>
      <Header appName='test' currentUser={} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/editor/:slug' element={<Editor />} />
        <Route path='/editor' element={<Editor />} />
        <Route path='/article/:id' element={<Article />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/@:username/favorites' element={<ProfileFavorites />} />
        <Route path='/@:username' element={<Profile />} />
      </Routes>
    </div>
  ); */
  return (<div>загрузка...</div>);
};

/*

class App extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      // this.context.router.replace(nextProps.redirectTo);
      store.dispatch(this.props.navigate(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }
  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }
    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }

  render() {
    if (this.props.appLoaded) {
      return (
        <div>
          <Header
            appName={this.props.appName}
            currentUser={this.props.currentUser} />
            <Routes>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/editor/:slug" component={Editor} />
            <Route path="/editor" component={Editor} />
            <Route path="/article/:id" component={Article} />
            <Route path="/settings" component={Settings} />
            <Route path="/@:username/favorites" component={ProfileFavorites} />
            <Route path="/@:username" component={Profile} />
            </Routes>
        </div>
      );
    }
    return (
      <div>
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser} />
      </div>
    );
  }
}

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// }; */
export default App;
