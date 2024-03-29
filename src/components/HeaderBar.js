import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

export default function HeaderBar(props) {
    return (
        <header>
            <Navbar className='main-nav' sticky='top' expand='lg'>
                <Container fluid>
                    <Navbar.Toggle />
                    <Navbar.Brand href='https://studify-883c3.web.app/' className='m-0'>
                        <img className='logo' src='../img/studify-icon.png' alt='Studify logo'/>
                        <h1 className='d-none d-lg-block mb-0 h1'>Studify</h1>
                    </Navbar.Brand>
                    <SignOutButton />
                    <NavBar />
                </Container>
            </Navbar>
        </header>
    )
}

function NavBar(props) {
    return (
        <Navbar.Collapse className='me-auto'>
            <Nav className='ms-auto mb-2 mb-lg-0'>
                <Nav.Item>
                    <NavLink className='nav-link' to='/'>Schedule</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className='nav-link' to='/groups'>Groups</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className='nav-link' to='/profile'>Profile</NavLink>
                </Nav.Item>
                <NavDropdown title="Info">
                    <NavDropdown.Item as={NavLink} to="/about">About</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/team-members">Team Members</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item as={NavLink} to="/contact-us">Contact Us</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    )
}

function SignOutButton(props) {
    const handleSignOut = (event) => {
        console.log("signing out");
        signOut(getAuth());
    }

    return (
        <button className='btn btn-secondary sign-out ms-lg-3 order-lg-last' type='button' onClick={handleSignOut}>
            <span className='fa-solid fa-right-from-bracket'></span>
            <span className='d-none d-lg-inline'> Sign Out</span>
        </button>
    )
}