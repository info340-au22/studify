import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(props) {
    return (
        <footer>
            <SocialMedia />
            <InformationAndCopyRight />
        </footer>
    )
}

function SocialMedia(props) {
    return (
        <div className='footer-right'>
            <a href='https://www.facebook.com/UWiSchool' target='_blank' rel='noreferrer'>
                <span className='fa-brands fa-facebook'></span>
            </a>
            <a href='https://twitter.com/uw_ischool' target='_blank' rel='noreferrer'>
                <span className='fa-brands fa-twitter'></span>
            </a>
            <a href='https://www.linkedin.com/school/uw-ischool' target='_blank' rel='noreferrer'>
                <span className='fa-brands fa-linkedin'></span>
            </a>
            <a href='https://github.com/info340-au22' target='_blank' rel='noreferrer'>
                <span className='fa-brands fa-github'></span>
            </a>
        </div>
    )
}

function InformationAndCopyRight(props) {
    return (
        <div className='footer-left'>
            <p className='footer-links'>
                <Link className='link-1' to='/about'>About</Link>
                <Link to='/team-members'>Team Members</Link>
                <Link to='/contact-us'>Contact Us</Link>
            </p>
            <p className='footer-copyright'>
                &copy; 2022 Minh Mai &#x26; Luong Quan. Made in &#127783; Seattle.
            </p>
        </div>
    )
}