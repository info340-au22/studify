import React from 'react';
import { Helmet } from 'react-helmet';

import { ProfileCard } from './ProfileCard';
import { ProfileInformation } from './ProfileInformation';

export default function ProfilePage(props) {
    const currentUser = props.currentUser;

    const currentUserDetails = {
        "name": currentUser.name,
        "email": currentUser.email,
        "phone": null,
        "school": null,
        "job": null,
        "location": null,
        "social-media": {
            "facebook": null,
            "twitter": null,
            "instagram": null,
            "linkedin": null,
            "github": null
        },
        "image": currentUser.image
          
    }

    return (
        <>
            <Helmet>
                <title>Studify | Profile</title>
            </Helmet>
            <main className='container my-profile'>
                <h2>Profile</h2>
                <div className='row gutters-sm'>
                    <ProfileCard currentUser={currentUserDetails} />
                    <ProfileInformation currentUser={currentUserDetails} />
                </div>
            </main>
        </>
    )
}