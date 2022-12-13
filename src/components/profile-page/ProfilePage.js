import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { getDatabase, ref, set as firebaseSet, onValue } from 'firebase/database';

import { ProfileCard } from './ProfileCard';
import { ProfileInformation } from './ProfileInformation';
import { useEffect } from 'react';

export default function ProfilePage(props) {
    const currentUser = props.currentUser;

    const tempCurrentUserDetails = {
        "name": currentUser.name,
        "email": currentUser.email,
        "phone": "",
        "school": "",
        "job": "Job",
        "location": "Location",
        "facebook": "",
        "twitter": "",
        "instagram": "",
        "linkedin": "",
        "github": "",
        "image": currentUser.image
    }

    const [currentUserDetails, setCurrentUserDetails] = useState(tempCurrentUserDetails);

    useEffect(() => {
        const db = getDatabase();
        const userDetailsRef = ref(db, 'userData/' + currentUser.id + '/userDetails')

        const unregisteredFunction = onValue(userDetailsRef, (snapshot) => {
            const changedValue = snapshot.val();
            if (changedValue === null) {
                firebaseSet(userDetailsRef, currentUserDetails);
            }
            setCurrentUserDetails(currentUserDetails)
        })

        function cleanup() {
            unregisteredFunction();
        }
        return cleanup;
    }, [])

    return (
        <>
            <Helmet>
                <title>Studify | Profile</title>
            </Helmet>
            <main className='container my-profile'>
                <h2>Profile</h2>
                <div className='row gutters-sm'>
                    <ProfileCard currentUser={currentUser} currentUserDetails={currentUserDetails} />
                    <ProfileInformation currentUser={currentUser} currentUserDetails={currentUserDetails} />
                </div>
            </main>
        </>
    )
}