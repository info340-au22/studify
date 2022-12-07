import React from 'react';
import { Helmet } from 'react-helmet';

import { ProfileCard } from './ProfileCard';
import { ProfileInformation } from './ProfileInformation';

export default function ProfilePage(props) {
    return (
        <>
            <Helmet>
                <title>Studify | Profile</title>
            </Helmet>
            <main className='container my-profile'>
                <h2>Profile</h2>
                <div className='row gutters-sm'>
                    <ProfileCard currentUser={props.currentUser} />
                    <ProfileInformation currentUser={props.currentUser} />
                </div>
            </main>
        </>
    )
}