import React from 'react';

import { Link } from 'react-router-dom';

function NavBarToggler(props) {
    return (
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    )
}

function StudifyLogo(props) {
    return (
        <a className="navbar-brand" href="https://studify-883c3.web.app/">
            <img className="logo" src="../img/studify-icon.png" alt="Studify logo"/>
        </a>
    )
}

function StudifyTitle(props) {
    return (
        <span className="navbar-brand d-none d-lg-block mb-0 h1"><h1 className="title">Studify</h1></span>
    )
}

function SignOutButton(props) {
    return (
        <button className="btn btn-secondary sign-out ms-lg-3 order-lg-last" type="button">
            <span className="fa-solid fa-right-from-bracket"></span>
            <span className="d-none d-lg-inline"> Sign Out</span>
        </button>
    )
}

function CollapsibleNavBar(props) {
    return (
        <div className="collapse me-auto navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/groups/my-groups">Groups</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/profile">Profile</Link>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="https://youtu.be/dQw4w9WgXcQ">Mission</a></li>
                        <li><a className="dropdown-item" href="https://youtu.be/dQw4w9WgXcQ">Creators</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="https://youtu.be/dQw4w9WgXcQ">Contact</a></li>
                    </ul>
                </li>
            </ul>
        </div> 
    )
}

export function NavBar(props) {
    return (
        <nav className="main-nav navbar sticky-top navbar-expand-lg">
            <div className="container-fluid">
                <NavBarToggler />
                <StudifyLogo />
                <StudifyTitle />
                <SignOutButton />
                <CollapsibleNavBar />
            </div>
        </nav>
    )
}