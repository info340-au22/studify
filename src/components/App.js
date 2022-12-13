import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import HeaderBar from './HeaderBar';
import SchedulePage from './schedule-page/SchedulePage';
import GroupsPage from './groups-page/GroupsPage';
import CreateGroupsForm from './groups-page/CreateGroups';
import MyGroups from './groups-page/MyGroups';
import JoinGroups from './groups-page/JoinGroups';
import ProfilePage from './profile-page/ProfilePage';
import { TeamMembers, About } from './InfoDropDown';
import { Contact } from './Contact';
import Footer from './Footer';
import SignInPage from './SignInPage';
import ErrorPage from './ErrorPage';

import USER_DATA from '../data/users.json';
import GROUP_DATA from '../data/groups.json';

export default function App(props) {
  
  const [currentUser, setCurrentUser] = useState(USER_DATA[0]);
  const [searchGroupData, setSearchGroupData] = useState(GROUP_DATA);
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (firebaseUser) => {
  
      if (firebaseUser) {
        firebaseUser.id = firebaseUser.uid;
        firebaseUser.name = firebaseUser.displayName;
        firebaseUser.image = firebaseUser.photoURL || '../img/null-avatar.png';
        setCurrentUser(firebaseUser)
      } else {
        setCurrentUser(USER_DATA[0])
      }
    })

  }, [])

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleSearchClick = (event) => {
    const searchGroupData = GROUP_DATA.filter((groupObj) => {
        let titleString = groupObj.title.toLowerCase().replace(/ /g,'');
        let queryString = searchQuery.toLowerCase().replace(/ /g,'');
        return titleString.includes(queryString);
    })
    setSearchGroupData(searchGroupData);
}

  return (
    <div className='studify-app'>
      <HeaderBar />
      <Routes>
        <Route path='/about' element={ <About/> }/>
        <Route path='/team-members' element={ <TeamMembers/> }/>
        <Route path='/contact-us' element={ <Contact/> }/>
        <Route path='/signin' element={ <SignInPage currentUser={currentUser} /> } />
        <Route path='*' element={ <ErrorPage />} />

        <Route element={ <ProtectedPage currentUser={currentUser} /> }>
          <Route index element={ <SchedulePage currentUser={currentUser} /> } />
          <Route 
            path='/groups' 
            element={ 
              <GroupsPage 
                currentUser={currentUser} 
                handleSearchQueryChangeCallback={handleSearchQueryChange} 
                handleSearchClickCallback={handleSearchClick} 
              /> 
            } >
            <Route path='my-groups' element={ <MyGroups groupData={searchGroupData} currentUser={currentUser} /> } />
            <Route path='join-groups' element={ <JoinGroups groupData={searchGroupData} /> } />
            <Route path='create-groups' element={ <CreateGroupsForm currentUser={currentUser} />} />
            <Route index element={ <Navigate to='/groups/my-groups' /> } />
          </Route>
          <Route path='/profile' element={ <ProfilePage currentUser={currentUser} /> } />
        </Route>
      </Routes>
      <Footer />
    </div>
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
