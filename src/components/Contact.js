import React from "react";

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

const SOCIAL_MEDIA_LINK = [
    {
        "platform": "facebook",
        "facebook": "https://facebook.com/",
    },
    {
        "platform": "twitter",
        "twitter": "https://twitter.com/"
    },
    {
        "platform": "instagram",
        "instagram": "https://instagram.com/"
    },
    {
        "platform": "linkedin",
        "linkedin": "https://linkedin.com/"
    },
    {
        "platform": "github",
        "github": "https://github.com/"
    }
]

export function Contact(props) {

    const socialMediaLink = SOCIAL_MEDIA.map((socialMediaObj) => {
        const platform = socialMediaObj.platform;
        const fa = socialMediaObj['font-awesome'];
        const color = socialMediaObj.color;

        const linkElement = (
            <a 
                key={platform}
                className='social-media'
                href={['social-media'][platform]}
                target='_blank' 
                style={{color: color}}
            >
                <span className={fa}></span>
            </a>
        )
        return linkElement;
    })

    return (
        <main className="contact container">
            <h2>Contact us</h2>
            <div className="contact-div">
                <div className="contact-member-div">
                    <h4>Minh Mai</h4>
                    <div className="portrait">
                        <img src="img/minh-mai.jpeg" alt="cool-cat1"/>
                    </div>
                    <div className="creator-normal-text">
                        <p className="contact-text">To be able to contact Minh via email, you can visit at <a href="/team-members">mcm2304@uw.edu</a></p>
                    </div>
                    <div>
                        <a className="contact-social-link" href="">{socialMediaLink}</a>
                    </div>
                </div>
                <div className="contact-member-div">
                    <h4>Luong Quan</h4>
                    <div className="portrait">
                        <img src="img/luong-quan.jpg" alt="cool-cat2"/>
                    </div>
                    <div className="creator-normal-text">
                        <p className="contact-text">To be able to contact Luong via email, you can visit at <a href="/team-members">luongq@uw.edu</a></p>
                    </div>
                    <div>
                        <a className="contact-social-link" href="https://github.com/info340-au22/studify">{socialMediaLink}</a>
                    </div>
                </div>
            </div>
        </main>
    )
}