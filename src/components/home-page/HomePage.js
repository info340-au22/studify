import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import EVENT_DATA from '../../data/events.json';

import { WeekdaySelect } from './WeekdayDiv';
import ScheduleGrid from './ScheduleGrid';

export default function HomePage(props) {

    const [weekdayData, setWeekdayData] = useState(EVENT_DATA);

    const handleChange = (event) => {
        const filteredEventData = EVENT_DATA.filter(eventObj => {
            return eventObj.date === event.target.value;
        })
        setWeekdayData(filteredEventData);
    }

    return (
        <>
            <Helmet>
                <title>Studify | Home</title>
            </Helmet>
            <main className="container my-schedule pt-lg-0">
                <h2>My Schedule</h2>
                <WeekdaySelect eventData={EVENT_DATA} handleChangeCallback={handleChange} />
                <ScheduleGrid eventData={EVENT_DATA} />
            </main>
        </>
    )
}