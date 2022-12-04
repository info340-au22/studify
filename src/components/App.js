import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import HeaderBar from './HeaderBar';
import HomePage from './home-page/HomePage';
import GroupsPage from './groups-page/GroupsPage';
import { MyGroups } from './groups-page/MyGroups';
import { JoinGroups } from './groups-page/JoinGroups';
import { CreateGroups } from './groups-page/CreateGroups';
import ProfilePage from './profile-page/ProfilePage';
import { Mission, Creators, Contact } from './About';
import Footer from './Footer';
import * as Static from './StaticPages'

import USER_DATA from '../data/users.json';
import GROUP_DATA from '../data/groups.json';

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
    <>
      <HeaderBar />
      <Routes>
        <Route index element={ <HomePage /> } />
        <Route path='/groups' element={ <GroupsPage handleChangeCallback={handleChange} handleClickCallback={handleClick} /> } >
          <Route index element={ <MyGroups groupData={filteredGroupData} /> } />
          <Route path='/groups/my-groups' element={ <MyGroups groupData={filteredGroupData} /> } />
          <Route path='/groups/join-groups' element={ <JoinGroups groupData={filteredGroupData} /> } />
          <Route path='/groups/create-groups' element={ <CreateGroups groupData={filteredGroupData} /> } />
        </Route>
        <Route path='/profile' element={ <ProfilePage currentUser={currentUser} /> } />
        <Route path='*' element={ <Static.ErrorPage />} />
        <Route path='/missions' element={ <Mission/>}>
          <Route path='/creators' element={ <Creators/> }/>
          <Route path='/contact' element={ <Contact/> }/>
        </Route> 
      </Routes>
      <Footer />
    </>
  );
}