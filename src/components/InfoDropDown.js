import React from "react";

export function About(props) {
    return (
        <main className="mission container">
            <div className="mission-div">
                <h2 className="tag-for-mission">Studify's Story</h2>
                <h4 className="h4-mission-tag"><em>Our Story</em></h4>
                    <p className="mission-normal-text"><em>Studify's</em> is the project in INFO 340 group have 2 members Minh and Luong.</p>
                    <p className="mission-normal-text">Our goal is trying make an application that you the user have the perfect experience. We've discussed about how the app in general are going to be look like, and final decision is to have a custom schedule as well as have a space where you and your friends or new friends can be learn together.</p>
                    <p className="mission-normal-text">Because <em>Studify</em> believes that you will study more effiecent when you study with others.</p>
                <hr className="mission-line"/>
                <h4 className="h4-mission-tag"><em>Our Mission</em></h4>
                    <p className="mission-normal-text"><em>Studify's</em> is not simply a website but also a place for you to study, create your own study group.</p>
                    <p className="mission-normal-text">Our mission is to make sure you have the perfect experience, and to make that happen we've included a few features like you can join a study group. What's more, you can also create groups to study with friends in private or public mode.</p>
                <hr className="mission-line"/>
                <h4 className="h4-mission-tag"><em>Our Features</em></h4>
                    <p className="mission-normal-text"><em>Studify</em> believes that learning with a group will help you learn more interesting things. So we've got a feature called 
                        <em> myGroups</em> where you'll get an experience with your friends, and also socialize with new friends based on the interests you choose to join.</p>
                    <p className="mission-normal-text"><em>Studify</em> also prioritizes personal matters, so you can also customize your own schedule to help you have a notebook right in an app.</p>
            </div>
        </main>
    );
}

export function TeamMembers(props) {
    return (
        <main className="creator container">
            <h2>Behind the scence of <em>Studify</em></h2>
            <div className="creator-div">       
                <div className="creator-text-div">
                    <h4 className=".h4-creator-tag">Minh Mai</h4>
                    <div className="portrait">
                        <img src="img/minh-mai.jpeg" alt="cool-cat1"/>
                    </div>
                        <p className="creator-normal-text">Minh is a third-year student at the University of Washington studying Informatics. Minh is very interested in learning about Software Development and his career goal is to become a Front-End Developer. The first Studify idea was suggested by Minh, and he was the first to implement it. </p>
                </div>
                <div className="creator-text-div">
                    <h4 className=".h4-creator-tag">Luong Quan</h4>
                    <div className="portrait">
                        <img src="img/luong-quan.jpg" alt="cool-cat2"/>
                    </div>
                        <p className="creator-normal-text">Luong is a third-year student at the University of Washington studying Geography: Data Science. Luong is interested in Data Science, but he also wants to learn about Software Development. Luong's career goal is to become a Data Scientist. In the Studify project, Luong is the one who builds and contributes ideas with Minh to create Studify.</p>
                </div>
            </div>
        </main>
    );
}