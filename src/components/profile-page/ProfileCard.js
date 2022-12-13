import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

const SOCIAL_MEDIA = [
    { 
        "platform": "facebook",
        "font-awesome": "fa-brands fa-facebook-f fa-lg",
        "color": "#3b5998"
    },
    {
        "platform": "twitter",
        "font-awesome": "fa-brands fa-twitter fa-lg",
        "color": "#00acee"
    },
    {
        "platform": "instagram",
        "font-awesome": "fa-brands fa-instagram fa-lg",
        "color": "#bc2a8d"
    },
    {
        "platform": "linkedin",
        "font-awesome": "fa-brands fa-linkedin-in fa-lg",
        "color": "#0072b1"
    },
    {
        "platform": "github",
        "font-awesome": "fa-brands fa-github fa-lg",
        "color": "#171515"
    }
]

export function ProfileCard(props) {
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

    const socialMediaLink = SOCIAL_MEDIA.map((socialMediaObj) => {
        const platform = socialMediaObj.platform;
        const fa = socialMediaObj['font-awesome'];
        const color = socialMediaObj.color;

        const linkElement = (
            <a 
                key={platform}
                className={`social-media ${!currentUserDetails[platform] ? 'disabled' : ''}`}
                href={currentUserDetails[platform]}
                target='_blank' 
                style={{color: color}}
            >
                <span className={fa}></span>
            </a>
        )
        return linkElement;
    })

    return (
        <div className='col-md-6 mb-3'>
            <div className='card'>
                <div className='card-body'>
                    <div className='d-flex flex-column align-items-center text-center'>
                        <img 
                            src={currentUserDetails.image} 
                            alt={currentUserDetails.name + ' Avatar'} 
                            className='rounded-circle' 
                            width='150'
                        />
                        <div className='mt-3' style={{width: '50%'}}>
                            <h4>{currentUserDetails.name}</h4>
                                <p className='text-secondary mb-1'>{currentUserDetails.job}</p>
                                <p className='text-muted font-size-sm'>{currentUserDetails.location}</p>
                            <div className='d-flex justify-content-between'>
                                {socialMediaLink}
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}