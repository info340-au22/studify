import React from 'react';

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
        <div className="footer-right">
            <a href="https://www.facebook.com/UWiSchool" target="_blank">
                <span className="fa-brands fa-facebook"></span>
            </a>
            <a href="https://twitter.com/uw_ischool" target="_blank">
                <span className="fa-brands fa-twitter"></span>
            </a>
            <a href="https://www.linkedin.com/school/uw-ischool" target="_blank">
                <span className="fa-brands fa-linkedin"></span>
            </a>
            <a href="https://github.com/info340-au22" target="_blank">
                <span className="fa-brands fa-github"></span>
            </a>
        </div>
    )
}

function InformationAndCopyRight(props) {
    return (
        <div className="footer-left">
            <p className="footer-links">
                <a className="link-1" href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Feedback</a>
            </p>
            <p className="footer-copyright">&copy; 2022 Minh Mai & Luong Quan. Made in &#127783; Seattle.</p>
        </div>
    )
}