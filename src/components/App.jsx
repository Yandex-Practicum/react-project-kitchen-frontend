/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from '../services/hooks';
import { Profile } from './Profile';
import Header from './Header';
import { Editor } from './Editor';
import Register from './Register';
import Login from './Login';
import Settings from './Settings/Settings';
import ProfileFavorites from './ProfileFavorites';
import Home from '../components/Home';
import Article from './Article/index';

import {
  Route, Routes, useNavigate, useLocation,
} from 'react-router-dom';

import { getAllTagsThunk } from '../thunks';

const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllTagsThunk());

  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/article/:id' element={<Article />} />
        <Route path='/register' element={<Register />} />
        <Route path='/:username/favorites' element={<ProfileFavorites />} />
        <Route path='/login' element={<Login />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/editor/:slug' element={<Editor />} />
        <Route path='/editor' element={<Editor />} />
        <Route path='/:username' element={<Profile />} />
      </Routes>
    </div>
  );
};


export default App;
