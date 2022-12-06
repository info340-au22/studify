import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';

export default function HeaderBar(props) {
    return (
        <header>
            <Navbar className='main-nav' sticky='top' expand='lg'>
                <Container fluid>
                    <Navbar.Toggle />
                    <Navbar.Brand href='https://studify-883c3.web.app/'>
                        <img className='logo' src='../img/studify-icon.png' alt='Studify logo'/>
                    </Navbar.Brand>
                    <Navbar.Brand className='d-none d-lg-block mb-0 h1'>
                        <h1 className='title'>Studify</h1>
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
                <NavDropdown title="About">
                    <NavDropdown.Item as={NavLink} to="/story">The Story</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/team">The Team</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item as={NavLink} to="/contact-us">Contact Us</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    )
}

function SignOutButton(props) {
    return (
        <button className='btn btn-secondary sign-out ms-lg-3 order-lg-last' type='button'>
            <span className='fa-solid fa-right-from-bracket'></span>
            <span className='d-none d-lg-inline'> Sign Out</span>
        </button>
    )
}