import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import WeekdaySelectForm from './WeekdaySelectForm';
import ScheduleGrid from './ScheduleGrid';

import COURSE_DATA from '../../data/courses.json';

const DAYS_OF_THE_WEEK = [
    "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"
];

export default function SchedulePage(props) {

    let liveCurrentDay = DAYS_OF_THE_WEEK[new Date().getDay()];

    const [currentDay, setCurrentDay] = useState(liveCurrentDay);

    const handleChange = (event) => {
        setCurrentDay(event.target.value);
    }

    return (
        <>
            <Helmet>
                <title>Studify | Schedule</title>
            </Helmet>
            <main className='container my-schedule pt-lg-0'>
                <h2>My Schedule</h2>
                <WeekdaySelectForm 
                    weekdayStrings={DAYS_OF_THE_WEEK} 
                    handleChangeCallback={handleChange} 
                    liveCurrentDay={liveCurrentDay} 
                />
                <ScheduleGrid 
                    eventData={COURSE_DATA} 
                    weekdayStrings={DAYS_OF_THE_WEEK}
                    currentDay={currentDay} 
                />
            </main>
        </>
    )
}