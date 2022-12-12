import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Nav, Button, Form } from 'react-bootstrap';

export default function GroupsPage(props) {
    const handleChange = props.handleChangeCallback;
    const handleClick = props.handleClickCallback;
    return (
        <>
            <Helmet>
                <title>Studify | Groups</title>
            </Helmet>
            <main className='container my-groups'>
                <h2>Groups</h2>
                <section className='secondary-navbar'>
                    <nav className='navbar mb-4'>
                        <div className='container-fluid bg-light p-0'>
                            <GroupsNavBar />
                            <GroupsSearchForm 
                                handleChangeCallback={handleChange} 
                                handleClickCallback={handleClick}
                            />
                        </div>
                    </nav>
                </section>
                <Outlet />
            </main>
        </>
    )
}

function GroupsNavBar(props) {
    return (
        <Nav variant='tabs'>
            <Nav.Item>
                <NavLink className='nav-link' to='my-groups'>My Groups</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink className='nav-link' to='join-groups'>Join Groups</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink className="nav-link" to="create-groups">Create Groups</NavLink>
            </Nav.Item>
        </Nav>
    )
}

function GroupsSearchForm(props) {
    const handleChange = props.handleChangeCallback;
    const handleClick = props.handleClickCallback;
    const groupUrl = useLocation().pathname;
    const isCorrectGroupUrl = () => {
        return (groupUrl === '/groups/create-groups')
    }

    return (
        <Form className='d-flex flex-grow-1 flex-md-grow-0 order-first order-md-last pb-3 pb-md-0' role='search'>
            <Form.Control 
                className='me-2' 
                type='search' 
                placeholder='Search Groups' 
                aria-label='Search Groups' 
                onChange={handleChange}
                disabled={isCorrectGroupUrl()}
            />
            <Button 
                variant='outline-info'
                type='button' 
                onClick={handleClick} 
                disabled={isCorrectGroupUrl()}
            >
                <span className='fa-solid fa-magnifying-glass'></span>
            </Button>
        </Form>
    )
}