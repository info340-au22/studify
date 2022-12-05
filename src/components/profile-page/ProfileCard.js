import React from 'react';

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

    const socialMediaLink = SOCIAL_MEDIA.map((socialMediaObj) => {
        const platform = socialMediaObj.platform;
        const fa = socialMediaObj['font-awesome'];
        const color = socialMediaObj.color;

        const linkElement = (
            <a 
                key={platform}
                className='social-media'
                href={currentUser['social-media'][platform]}
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
                            src={currentUser.image} 
                            alt={currentUser.name + ' Avatar'} 
                            className='rounded-circle' 
                            width='150'
                        />
                        <div className='mt-3'>
                            <h4>{currentUser.name}</h4>
                                <p className='text-secondary mb-1'>{currentUser.job}</p>
                                <p className='text-muted font-size-sm'>{currentUser.location}</p>
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