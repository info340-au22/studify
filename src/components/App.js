import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import HeaderBar from './HeaderBar';
import SchedulePage from './schedule-page/SchedulePage';
import GroupsPage from './groups-page/GroupsPage';
import { MyGroups } from './groups-page/MyGroups';
import { JoinGroups } from './groups-page/JoinGroups';
import ProfilePage from './profile-page/ProfilePage';
import Footer from './Footer';
import * as Static from './StaticPages';

import USER_DATA from '../data/users.json';
import GROUP_DATA from '../data/groups.json';

export default function App(props) {

  const [currentUser, setCurrentUser] = useState(USER_DATA[0]);
  const [filteredSearchGroupData, setFilteredSearchGroupData] = useState(GROUP_DATA);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
      setSearchQuery(event.target.value);
  }

  const handleClick = (event) => {
      const filteredSearchGroupData = GROUP_DATA.filter((groupObj) => {
          let titleString = groupObj.title.toLowerCase().replace(/ /g,'');
          let queryString = searchQuery.toLowerCase().replace(/ /g,'');
          return titleString.includes(queryString);
      })
      setFilteredSearchGroupData(filteredSearchGroupData);
  }

  return (
    <>
      <HeaderBar />
      <Routes>
        <Route index element={ <SchedulePage /> } />
        <Route path='/groups' element={ <GroupsPage handleChangeCallback={handleChange} handleClickCallback={handleClick} /> } >
          <Route index element={ <MyGroups groupData={filteredSearchGroupData} /> } />
          <Route path='my-groups' element={ <MyGroups groupData={filteredSearchGroupData} /> } />
          <Route path='join-groups' element={ <JoinGroups groupData={filteredSearchGroupData} /> } />
        </Route>
        <Route path='/profile' element={ <ProfilePage currentUser={currentUser} /> } />
        <Route path='*' element={ <Static.ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}