import React from 'react';

function ProfileImage(props) {
    return (
        <div className="col-md-6 mb-3">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                        <img src="https://source.unsplash.com/yMSecCHsIBc" alt="Minh Mai Avatar" className="rounded-circle" width="150"/>
                        <div className="mt-3">
                            <h4>Minh Mai</h4>
                                <p className="text-secondary mb-1">Front-End Developer</p>
                                <p className="text-muted font-size-sm">Seattle, WA</p>
                
                            <div className="d-flex justify-content-between">
                                <a className="social-media" href="#" role="button" style={{color: "#3b5998"}}>
                                    <span className="fa-brands fa-facebook-f fa-lg"></span>
                                </a>
                                <a className="social-media" href="#" role="button" style={{color: "#00acee"}}>
                                    <span className="fa-brands fa-twitter fa-lg"></span>
                                </a>
                                <a className="social-media" href="#" role="button" style={{color: "#bc2a8d"}}>
                                    <span className="fa-brands fa-instagram fa-lg"></span>
                                </a>
                                <a className="social-media" href="#" role="button" style={{color: "#0072b1"}}>
                                    <span className="fa-brands fa-linkedin-in fa-lg"></span>
                                </a>
                                <a className="social-media" href="#" role="button" style={{color: "#171515"}}>
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
    return (
        <div className="col-md-6">
            <div className="card mb-3">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-4 text-start">Name</div>
                        <div className="col-sm-8 text-secondary text-md-end">Minh Mai</div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-4">Username</div>
                        <div className="col-sm-8 text-secondary text-md-end">minhm23</div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-4">Email</div>
                        <div className="col-sm-8 text-secondary text-md-end">mcm2304@uw.edu</div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-4">Phone</div>
                        <div className="col-sm-8 text-secondary text-md-end">(206) 495-7480</div>
                    </div>                         
                    <hr/>
                    <div className="row">
                        <div className="col-sm-4">School</div>
                        <div className="col-sm-8 text-secondary text-md-end">University of Washington</div>
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

export function Profile(props) {
    return (
        <main className="container my-profile">
            <div className="row gutters-sm">
                <ProfileImage />
                <ProfileInformation />
            </div>
        </main>
    )
}