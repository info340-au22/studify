import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import HeaderBar from './HeaderBar';
import SchedulePage from './schedule-page/SchedulePage';
import GroupsPage from './groups-page/GroupsPage';
import { MyGroups } from './groups-page/MyGroups';
import { JoinGroups } from './groups-page/JoinGroups';
import { CreateGroups } from './groups-page/CreateGroups';
import {Mission, Creators, Contact} from './About';
import ProfilePage from './profile-page/ProfilePage';
import Footer from './Footer';
import * as Static from './StaticPages';

import USER_DATA from '../data/users.json';
import GROUP_DATA from '../data/groups.json';

export default function App(props) {

  const [currentUser, setCurrentUser] = useState(USER_DATA[0]);
  const [searchGroupData, setSearchGroupData] = useState(GROUP_DATA);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
      setSearchQuery(event.target.value);
  }

  const handleClick = (event) => {
      const searchGroupData = GROUP_DATA.filter((groupObj) => {
          let titleString = groupObj.title.toLowerCase().replace(/ /g,'');
          let queryString = searchQuery.toLowerCase().replace(/ /g,'');
          return titleString.includes(queryString);
      })
      setSearchGroupData(searchGroupData);
  }

  return (
    <>
      <HeaderBar />
      <Routes>
        <Route index element={ <SchedulePage /> } />
        <Route 
          path='/groups' 
          element={ <GroupsPage handleChangeCallback={handleChange} handleClickCallback={handleClick} /> } >
          <Route index element={ <MyGroups groupData={searchGroupData} /> } />
          <Route path='my-groups' element={ <MyGroups groupData={searchGroupData} /> } />
          <Route path='join-groups' element={ <JoinGroups groupData={searchGroupData} /> } />
          <Route path='create-groups' element={ <CreateGroups/>} />
        </Route>
        <Route path='/story' element={ <Mission/> }/>
        <Route path='/team' element={ <Creators/> }/>
        <Route path='/contact-us' element={ <Contact/> }/>
        <Route path='/profile' element={ <ProfilePage currentUser={currentUser} /> } />
        <Route path='*' element={ <Static.ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}