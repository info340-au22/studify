import React from 'react';

import { Helmet } from 'react-helmet';

function ProfileImage(props) {

    const currentUser = props.currentUser;

    return (
        <div className="col-md-6 mb-3">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                        <img src={currentUser.image} alt={currentUser.name + " Avatar"} className="rounded-circle" width="150"/>
                        <div className="mt-3">
                            <h4>{currentUser.name}</h4>
                                <p className="text-secondary mb-1">{currentUser.job}</p>
                                <p className="text-muted font-size-sm">{currentUser.location}</p>
                
                            <div className="d-flex justify-content-between">
                                <a className="social-media" href={currentUser['social-media'].facebook} target="_blank" style={{color: "#3b5998"}}>
                                    <span className="fa-brands fa-facebook-f fa-lg"></span>
                                </a>
                                <a className="social-media" href={currentUser['social-media'].twitter} target="_blank" style={{color: "#00acee"}}>
                                    <span className="fa-brands fa-twitter fa-lg"></span>
                                </a>
                                <a className="social-media" href={currentUser['social-media'].instagram} target="_blank" style={{color: "#bc2a8d"}}>
                                    <span className="fa-brands fa-instagram fa-lg"></span>
                                </a>
                                <a className="social-media" href={currentUser['social-media'].linkedin} target="_blank" style={{color: "#0072b1"}}>
                                    <span className="fa-brands fa-linkedin-in fa-lg"></span>
                                </a>
                                <a className="social-media" href={currentUser['social-media'].github} target="_blank" style={{color: "#171515"}}>
                                    <span className="fa-brands fa-github fa-lg"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

function ProfileInformation(props) {

    const currentUser = props.currentUser;

    return (
        <div className="col-md-6">
            <div className="card mb-3">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-4 text-start">Name</div>
                        <div className="col-sm-8 text-secondary text-md-end">{currentUser.name}</div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-4">Username</div>
                        <div className="col-sm-8 text-secondary text-md-end">{currentUser.username}</div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-4">Email</div>
                        <div className="col-sm-8 text-secondary text-md-end">{currentUser.email}</div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-4">Phone</div>
                        <div className="col-sm-8 text-secondary text-md-end">{currentUser.phone}</div>
                    </div>                         
                    <hr/>
                    <div className="row">
                        <div className="col-sm-4">School</div>
                        <div className="col-sm-8 text-secondary text-md-end">{currentUser.school}</div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <a className="btn btn-info" target="__blank" href="#">Edit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function ProfilePage(props) {
    return (
        // <div className='test'>
        //     <Helmet>
        //         <title>Studify - Profile</title>
        //     </Helmet>
            <main className="container my-profile">
                <div className="row gutters-sm">
                    <ProfileImage currentUser={props.currentUser} />
                    <ProfileInformation currentUser={props.currentUser} />
                </div>
            </main>
        // </div>
    )
}