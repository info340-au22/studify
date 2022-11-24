import React, { useState } from 'react';

import { Header } from './Header';
import { Schedule } from './Schedule';
import { Groups } from './Groups';
import { Profile } from './Profile';
import { Footer } from './Footer';

import { Route, Routes, Outlet } from 'react-router-dom';

import USER_DATA from '../data/users.json';

export default function App(props) {

  const [currentUser, setCurrentUser] = useState(USER_DATA[0]);

  return (
    <div className="studify-app">
      <Header />
      <Routes>
        <Route index element={ <Schedule /> } />
        <Route path='/groups' element={ <Groups /> } />
        <Route path='/profile' element={ <Profile currentUser={currentUser} /> } />
      </Routes>
      <Footer />
    </div>
  );
}