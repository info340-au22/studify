import React, { useState } from 'react';

import { MyGroups } from './MyGroups';
import { JoinGroups } from './JoinGroups';

import GROUP_DATA from '../data/groups.json';

function GroupsNavBar(props) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="">My Groups</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="">Join Groups</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="">Create Group</a>
            </li>
        </ul>
    )
}

function GroupsSearchForm(props) {
    return (
        <form className="search-form d-flex flex-grow-1 flex-md-grow-0 order-first order-md-last pb-3 pb-md-0" role="search">
            <input className="form-control me-2" type="search" placeholder="Search Groups" aria-label="Search" onChange={props.handleChangeCallback}/>
            <button className="btn btn-outline-info" type="button" onClick={props.handleClickCallback}>
                <span className="fa-solid fa-magnifying-glass"></span>
            </button>
        </form>
    )
}

export function Groups(props) {
    const [filteredGroupData, setFilteredGroupData] = useState(GROUP_DATA);
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const handleClick = (event) => {
        const filteredGroupData = GROUP_DATA.filter(groupObj => {
            return groupObj.title.toLowerCase().includes(searchQuery.toLowerCase())
        })
        setFilteredGroupData(filteredGroupData) 
    }

    return (
        <main className="container my-groups">
            <section className="secondary-navbar">
                <nav className="navbar mb-4">
                    <div className="container-fluid bg-light p-0">
                        <GroupsNavBar />
                        <GroupsSearchForm handleChangeCallback={handleChange} handleClickCallback={handleClick} />
                    </div>
                </nav>
            </section>
            <MyGroups groupData={filteredGroupData} />
            {/* <JoinGroups groupData={filteredGroupData} /> */}
        </main>
    )
}