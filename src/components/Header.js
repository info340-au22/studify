import React from 'react';

import { NavBar } from './NavBar';

export function Header(props) {
    return (
        <header>
            <NavBar />
            <h2>My Schedule</h2>
        </header>
    )
}