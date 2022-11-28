import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import HeaderBar from './HeaderBar';
import HomePage from './HomePage';
import GroupsPage from './groups-page/GroupsPage';
import ProfilePage from './profile-page/ProfilePage';
import Footer from './Footer';

import USER_DATA from '../data/users.json';
import GROUP_DATA from '../data/groups.json';
import { MyGroups } from './groups-page/MyGroups';
import { JoinGroups } from './groups-page/JoinGroups';

export default function App(props) {

  const [currentUser, setCurrentUser] = useState(USER_DATA[0]);
  const [filteredGroupData, setFilteredGroupData] = useState(GROUP_DATA);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
      setSearchQuery(event.target.value);
  }

  const handleClick = (event) => {
      const filteredGroupData = GROUP_DATA.filter(groupObj => {
          let titleString = groupObj.title.toLowerCase().replace(/ /g,'');
          let queryString = searchQuery.toLowerCase().replace(/ /g,'');
          return titleString.includes(queryString);
      })
      setFilteredGroupData(filteredGroupData);
  }

  return (
    <div className="studify-app">
      <HeaderBar />
      <Routes>
        <Route index element={ <HomePage /> } />
        <Route path='/groups' element={ <GroupsPage handleChangeCallback={handleChange} handleClickCallback={handleClick} /> } >
          <Route index element={ <MyGroups groupData={filteredGroupData} /> } />
          <Route path='/groups/my-groups' element={ <MyGroups groupData={filteredGroupData} /> } />
          <Route path='/groups/join-groups' element={ <JoinGroups groupData={filteredGroupData} /> } />
        </Route>
        <Route path='/profile' element={ <ProfilePage currentUser={currentUser} /> } />
      </Routes>
      <Footer />
    </div>
  );
}