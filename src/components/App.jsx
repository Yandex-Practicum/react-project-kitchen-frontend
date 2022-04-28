/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from '../services/hooks';
import { Profile } from '../components_refact';
import Header from './Header';

import {
  Route, Routes, useNavigate, useLocation,
} from 'react-router-dom';

import { loadInitialDataThunk } from '../thunks';

const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(loadInitialDataThunk());

  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<div>загрузка...</div>} />
        {/*   <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/editor/:slug' element={<Editor />} />
        <Route path='/editor' element={<Editor />} />
        <Route path='/article/:id' element={<Article />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/@:username/favorites' element={<ProfileFavorites />} />  */}
        <Route path='/@:username' element={<Profile />} />
      </Routes>
    </div>
  );

};


export default App;
