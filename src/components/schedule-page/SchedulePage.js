import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import EVENT_DATA from '../../data/events.json';

import { WeekdaySelect } from './WeekdayDiv';
import ScheduleGrid from './ScheduleGrid';

const DAYS_OF_THE_WEEK = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

export default function SchedulePage(props) {

    let liveCurrentDay = DAYS_OF_THE_WEEK[new Date().getDay()];

    const [currentDay, setCurrentDay] = useState(liveCurrentDay);

    const handleChange = (event) => {
        setCurrentDay(event.target.value);
    }

    return (
        <>
            <Helmet>
                <title>Studify | Home</title>
            </Helmet>
            <main className='container my-schedule pt-lg-0'>
                <h2>My Schedule</h2>
                <WeekdaySelect eventData={EVENT_DATA} handleChangeCallback={handleChange} liveCurrentDay={liveCurrentDay} />
                <ScheduleGrid eventData={EVENT_DATA} currentDay={currentDay} />
            </main>
        </>
    )
}