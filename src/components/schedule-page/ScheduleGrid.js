import React, { useState, useEffect } from 'react';

import NewCourseForm from './NewCourseForm';
import WeekdayColumnNames from './WeekdayColumnNames';
import TimeRowNames from './TimeRowNames';
import EventBlocks from './EventBlocks';


export default function ScheduleGrid(props) {
    const [widthDimension, setWidthDimension] = useState(window.innerWidth);
 
    useEffect(() => {
        const handleResize = () => (setWidthDimension(window.innerWidth));
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [window.innerWidth])

    const isMobile = widthDimension < 992;

    return (
        <section className='my-schedule-grid'>
            <NewCourseForm />
            <WeekdayColumnNames isMobile={isMobile} currentDay={props.currentDay} weekdayStrings={props.weekdayStrings} />
            <TimeRowNames />
            <EventBlocks eventData={props.eventData} isMobile={isMobile} currentDay={props.currentDay} />
        </section>
    )
}