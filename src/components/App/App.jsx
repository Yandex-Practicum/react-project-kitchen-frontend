import agent from '../../agent';
import Header from '../Header/Header';
import React from 'react';
import { connect } from 'react-redux';
import { APP_LOAD, CHANGE_THEME, REDIRECT } from '../../constants/actionTypes';
import { Route, Switch } from 'react-router-dom';
import Article from '../Article';
import Editor from '../Editor/Editor';
import Home from '../Home';
import Login from '../Auth/Login/Login';
import Profile from '../Profile/Profile';
import ProfileFavorites from '../Profile/ProfileFavorites';
import Register from '../Auth/Register/Register';
import Settings from '../Settings/Settings';
import { store } from '../../store';
import { push } from 'react-router-redux';

const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo,
    isDarkTheme: state.theme.isDarkTheme
  }};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () => dispatch({ type: REDIRECT }),
  onChangeTheme:() => dispatch({type:CHANGE_THEME}),
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.root = document.querySelector(':root')
    this.darkTheme = {
      white: '#251D1D',
      dark: '#ffffff',
      darkText: '#ffffff',
      grayText: '#ffffff',
      bannerColor:'#251D1D',
      primary:'#ffffff',
    }
    this.whiteTheme = {
      white: '#ffffff',
      dark: '#212121',
      darkText: '#0A0A0B',
      grayText: '#62626A',
      bannerColor:'#f4f4f6',
      primary:'#0000FF',
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      // this.context.router.replace(nextProps.redirectTo);
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }
  UNSAFE_componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }
    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }
componentDidMount() {
 if(localStorage.getItem('isDarkTheme') === 'true'){
    this.props.onChangeTheme()
 }
   this.root.style = `--white:${this.whiteTheme.white};
      --dark:${this.whiteTheme.dark};
      --dark-text:${this.whiteTheme.darkText};
      --gray-text:${this.whiteTheme.grayText};
      --banner-color:${this.whiteTheme.bannerColor};
      --primary:${this.whiteTheme.primary};
      `
  }
shouldComponentUpdate(nextProps, nextState, nextContext) {
    localStorage.setItem('isDarkTheme', nextProps.isDarkTheme)
  nextProps.isDarkTheme ?
    this.root.style = `--white:${this.darkTheme.white};
      --dark:${this.darkTheme.dark};
      --dark-text:${this.darkTheme.darkText};
      --gray-text:${this.darkTheme.grayText};
      --banner-color:${this.darkTheme.bannerColor};
      --primary:${this.darkTheme.primary};
      `
    : this.root.style = `--white:${this.whiteTheme.white};
      --dark:${this.whiteTheme.dark};
      --dark-text:${this.whiteTheme.darkText};
      --gray-text:${this.whiteTheme.grayText};
      --banner-color:${this.whiteTheme.bannerColor};
      --primary:${this.whiteTheme.primary};
      `;
  return true
}
  render() {
    if (this.props.appLoaded) {
      return (
        <>
          <Header
            appName={this.props.appName}
            currentUser={this.props.currentUser} />
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/editor/:slug" component={Editor} />
            <Route path="/editor" component={Editor} />
            <Route path="/article/:id" component={Article} />
            <Route path="/settings" component={Settings} />
            <Route path="/@:username/favorites" component={ProfileFavorites} />
            <Route path="/@:username" component={Profile} />
            </Switch>
        </>
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
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
