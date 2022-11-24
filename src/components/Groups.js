import React from 'react';

import { MyGroups } from './MyGroups';
import { JoinGroups } from './JoinGroups';

function GroupsNavBar(props) {
    return (
        <section className="secondary-navbar">
            <nav className="navbar mb-4">
                <div className="container-fluid bg-light p-0">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">My Groups</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Join Groups</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Create Group</a>
                        </li>
                    </ul>
                    <form className="search-form d-flex flex-grow-1 flex-md-grow-0 order-first order-md-last pb-3 pb-md-0" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search Groups" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">
                            <span className="fa-solid fa-magnifying-glass"></span>
                        </button>
                    </form>
                </div>
            </nav>
        </section>
    )
}

export function Groups(props) {
    return (
        <main className="container my-groups">
            <GroupsNavBar />
            <MyGroups />
            {/* <JoinGroups /> */}
        </main>
    )
}