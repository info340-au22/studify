import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate, Outlet } from 'react-router-dom';
import { getDatabase, ref, push as firebasePush, set as firebaseSet, onValue } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import HeaderBar from './HeaderBar';
import SchedulePage from './schedule-page/SchedulePage';
import GroupsPage from './groups-page/GroupsPage';
import { MyGroups } from './groups-page/MyGroups';
import { JoinGroups } from './groups-page/JoinGroups';
import { CreateGroups } from './groups-page/CreateGroups';
import { Mission, Creators } from './About';
import { Contact } from './Contact';
import SignInPage from './SignInPage';
import ProfilePage from './profile-page/ProfilePage';
import Footer from './Footer';
import * as Static from './StaticPages';

import USER_DATA from '../data/users.json';
import GROUP_DATA from '../data/groups.json';

export default function App(props) {
  
  const [currentUser, setCurrentUser] = useState(USER_DATA[0]);
  const [searchGroupData, setSearchGroupData] = useState(GROUP_DATA);
  const [searchQuery, setSearchQuery] = useState('');

  console.log('re-rendering with', currentUser.uid)
  
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (firebaseUser) => {
  
      if (firebaseUser) {
        console.log('logged in as', firebaseUser.displayName)
        console.log(firebaseUser)
        firebaseUser.id = firebaseUser.uid;
        firebaseUser.name = firebaseUser.displayName;
        firebaseUser.image = firebaseUser.photoURL || '../img/null-avatar.png';

        setCurrentUser(firebaseUser)
      } else {
        console.log('signed out')
        setCurrentUser(USER_DATA[0])
      }
    })

  }, [])


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

  const handleTest = (event) => {

  }

  return (
    <>
      <HeaderBar />
      <button className='btn btn-primary' type='button' onClick={handleTest}>test</button>
      <Routes>
        <Route path='/about' element={ <Mission/> }/>
        <Route path='/team-members' element={ <Creators/> }/>
        <Route path='/contact-us' element={ <Contact/> }/>
        <Route path='/signin' element={ <SignInPage currentUser={currentUser} /> } />
        <Route path='*' element={ <Static.ErrorPage />} />

        <Route element={ <ProtectedPage currentUser={currentUser} /> }>
          <Route index element={ <SchedulePage currentUser={currentUser} /> } />
          <Route 
            path='/groups' 
            element={ <GroupsPage handleChangeCallback={handleChange} handleClickCallback={handleClick} /> } >
            <Route path='my-groups' element={ <MyGroups groupData={searchGroupData} /> } />
            <Route path='join-groups' element={ <JoinGroups groupData={searchGroupData} /> } />
            <Route path='create-groups' element={ <CreateGroups/> } />
            <Route index element={ <Navigate to='/groups/my-groups' /> } />
          </Route>
          <Route path='/profile' element={ <ProfilePage currentUser={currentUser} /> } />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

function ProtectedPage(props) {
  if (props.currentUser.displayName === null) {
    return <Navigate to='/signin' />
  }
  else {
    return <Outlet />
  }
}
