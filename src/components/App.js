import React, { useState } from 'react';

import { Header } from './Header';
import { HomePage } from './HomePage';
import { GroupsPage } from './GroupsPage';
import { ProfilePage } from './ProfilePage';
import { Footer } from './Footer';

import { Route, Routes } from 'react-router-dom';

import USER_DATA from '../data/users.json';

export default function App(props) {

  const [currentUser, setCurrentUser] = useState(USER_DATA[0]);

  return (
    <div className="studify-app">
      <Header />
      <Routes>
        <Route index element={ <HomePage /> } />
        <Route path='/groups/:groupSection' element={ <GroupsPage /> } />
        <Route path='/profile' element={ <ProfilePage currentUser={currentUser} /> } />
      </Routes>
      <Footer />
    </div>
  );
}