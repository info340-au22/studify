import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import EVENT_DATA from '../../data/events.json';

import { WeekdaySelect } from './WeekdayDiv';
import ScheduleGrid from './ScheduleGrid';

const DAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

export default function SchedulePage(props) {

    let liveCurrentDay = DAYS[new Date().getDay()];

    const [weekdayData, setWeekdayData] = useState(EVENT_DATA);
    const [currentDay, setCurrentDay] = useState(liveCurrentDay);

    const handleChange = (event) => {
        const filteredEventData = EVENT_DATA.filter(eventObj => {
            return eventObj.date === event.target.value;
        })
        setCurrentDay(event.target.value);
        setWeekdayData(filteredEventData);
    }

    return (
        <>
            <Helmet>
                <title>Studify | Home</title>
            </Helmet>
            <main className='container my-schedule pt-lg-0'>
                <h2>My Schedule</h2>
                <WeekdaySelect eventData={EVENT_DATA} handleChangeCallback={handleChange} liveCurrentDay={liveCurrentDay} />
                <ScheduleGrid eventData={weekdayData} currentDay={currentDay} />
            </main>
        </>
    )
}