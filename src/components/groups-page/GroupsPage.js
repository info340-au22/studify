import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Nav, Button, Form } from 'react-bootstrap';

function GroupsNavBar(props) {
    return (
        <Nav variant='tabs'>
            <Nav.Item>
                <NavLink className='nav-link' to='my-groups'>My Groups</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink className='nav-link' to='join-groups'>Join Groups</NavLink>
            </Nav.Item>
        </Nav>
    )
}

function GroupsSearchForm(props) {
    const location = useLocation().pathname;
    const isGroupsPage = () => (location === '/groups' ? true : false);

    return (
        <Form className='d-flex flex-grow-1 flex-md-grow-0 order-first order-md-last pb-3 pb-md-0' role='search'>
            <Form.Control 
                className='me-2' 
                type='search' 
                placeholder='Search Groups' 
                aria-label='Search' 
                onChange={props.handleChangeCallback}
                disabled={isGroupsPage()}
            />
            <Button 
                variant='outline-info'
                type='button' 
                onClick={props.handleClickCallback} 
                disabled={isGroupsPage()}
            >
                <span className='fa-solid fa-magnifying-glass'></span>
            </Button>
        </Form>
    )
}

export default function GroupsPage(props) {
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
                                handleChangeCallback={props.handleChangeCallback} 
                                handleClickCallback={props.handleClickCallback}
                            />
                        </div>
                    </nav>
                </section>
                <Outlet />
            </main>
        </>
    )
}