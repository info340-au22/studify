import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

import ProfileEditForm from './ProfileEditForm';

export function ProfileInformation(props) {
    const currentUser = props.currentUser;
    const [currentUserDetails, setCurrentUserDetails] = useState(props.currentUserDetails);

    useEffect(() => {
        const db = getDatabase();
        const userDetailsRef = ref(db, 'userData/' + currentUser.id + '/userDetails')

        const unregisteredFunction = onValue(userDetailsRef, (snapshot) => {
            const changedValue = snapshot.val();
            setCurrentUserDetails(changedValue)
        })

        function cleanup() {
            unregisteredFunction();
        }
        return cleanup;
    
    }, [])

    const displayedUserInfo = ['name', 'email', 'phone', 'school'];
    
    const userInfoDiv = displayedUserInfo.map((userInfo, index) => {
        let userContent = '';
        let userContentInfo = '';
        
        if (Object.keys(currentUserDetails).includes(userInfo)) {
            userContent = userInfo.charAt(0).toUpperCase() + userInfo.slice(1);
            userContentInfo = currentUserDetails[userInfo];

            const userElement = (
                <React.Fragment key={index + 1}>
                    <div className='row'>
                        <div className='col-sm-4'>{userContent}</div>
                        <div className='col-sm-8 text-secondary text-md-end'>{userContentInfo}</div>
                    </div>
                    <hr/>
                </React.Fragment>
            )
            return userElement;
        }
    })

    return (
        <div className='col-md-6'>
            <div className='card mb-3'>
                <div className='card-body'>
                    {userInfoDiv}
                    <div className='row'>
                        <ProfileEditForm currentUser={props.currentUser} currentUserDetails={currentUserDetails} />
                    </div>
                </div>
            </div>
        </div>
    )
}