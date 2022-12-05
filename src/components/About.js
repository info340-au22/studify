import React from "react";

export function Mission(props) {
    return (
        <li>
            <h2 className="tag-for-about">Mission</h2>
                <h4 className="h4-tag"><em>Studify</em> is not simply a website but also a place for you to study, create your own study group.</h4>
                    <p className="normal-text"><em>Studify's</em> mission is to make sure you have the perfect experience, and to make that happen we've included a few features 
                        like you can join a study group. What's more, you can also create groups to study with friends in private or public mode.</p>
                <h4 className="h4-tag">Features</h4>
                    <p className="normal-text"><em>Studify</em> believes that learning with a group will help you learn more interesting things. So we've got a feature called 
                        <em> myGroups</em> where you'll get an experience with your friends, and also socialize with new friends based on the interests you choose to join.</p>
                    <p className="normal-text"><em>Studify</em> also prioritizes personal matters, so you can also customize your own schedule to help you have a notebook right in an app.</p>
        </li>
    );
}

export function Creators(props) {
    return (
        <li>
            <h2 className="tag-for-about">Behind the scence of <em>Studify</em></h2>
                <h4 className="h4-tag">Minh Mai</h4>
                    <p className="normal-text">Minh is a third-year student at the University of Washington studying Informatics. Minh is very interested in learning about Software Development 
                        and his career goal is to become a Front-End Developer. The first Studify idea was suggested by Minh, and he was the first to implement it. </p>
                    <p className="normal-text">To be able to contact Minh via email, you can visit at mcm2304@uw.edu</p>
                <h4 className="h4-tag">Luong Quan</h4>
                    <p className="normal-text">Luong is a third-year student at the University of Washington studying Geography: Data Science. Luong is interested in Data Science, but he also wants 
                        to learn about Software Development. Luong's career goal is to become a Data Scientist. In the Studify project, Luong is the one who builds and contributes ideas with Minh to create Studify.</p>
                    <p className="normal-text">To be able to contact Luong via email, you can visit at luongq@uw.edu</p>
        </li>
    );
}

export function Contact(props) {
    return(
        <li>
            <h2 className="tag-for-about">Contact Us</h2>
                <p className="normal-text">Let us know your experience</p>
        </li>
    );
}