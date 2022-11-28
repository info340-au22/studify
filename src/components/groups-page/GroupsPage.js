import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Nav, Button, Form, Tab, Tabs, NavLink } from 'react-bootstrap';

function GroupsNavBar(props) {
    // const urlParamsObj = useParams();
    // console.log(urlParamsObj)

    return (
        // <Tabs defaultActiveKey="my-groups">
        //     <Tab eventKey="my-groups" title="My Groups">
        //         <Link aria-current="page" to="/groups"></Link>
        //     </Tab>
        //     <Tab eventKey="join-groups" title="Join Groups">
        //         <Link to="/groups/join-groups"></Link>
        //     </Tab>
        //     <Tab eventKey="create-groups" title="Create Group">
        //         <Link to="/groups/create-group"></Link>
        //     </Tab>
        // </Tabs>
        <Nav variant='tabs'>
            <Nav.Item>
                <Link className="nav-link" to="my-groups">My Groups</Link>
            </Nav.Item>
            <Nav.Item>
                <Link className="nav-link" to="join-groups">Join Groups</Link>
            </Nav.Item>
        </Nav>
    )
}

function GroupsSearchForm(props) {
    return (
        <Form className="d-flex flex-grow-1 flex-md-grow-0 order-first order-md-last pb-3 pb-md-0" role="search">
            <Form.Control 
                className="me-2" 
                type="search" 
                placeholder="Search Groups" 
                aria-label="Search" 
                onChange={props.handleChangeCallback}
            />
            <Button variant="outline-info" type="button" onClick={props.handleClickCallback}>
                <span className="fa-solid fa-magnifying-glass"></span>
            </Button>
        </Form>
    )
}

export default function GroupsPage(props) {
    const handleChange = props.handleChangeCallback;
    const handleClick = props.handleClickCallback;

    return (
        <>
            <Helmet>
                <title>Studify | Groups</title>
            </Helmet>
            <main className="container my-groups">
                <h2>Groups</h2>
                <section className="secondary-navbar">
                    <nav className="navbar mb-4">
                        <div className="container-fluid bg-light p-0">
                            <GroupsNavBar />
                            <GroupsSearchForm handleChangeCallback={handleChange} handleClickCallback={handleClick} />
                        </div>
                    </nav>
                </section>
                <Outlet />
            </main>
        </>
    )
}