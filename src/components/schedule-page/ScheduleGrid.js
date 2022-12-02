import React, { useState, useEffect } from 'react';

import { EditDiv } from './EditDiv';
import { WeekdaySlots } from './WeekdayDiv';
import { TimeSlots } from './TimeDiv';
import { EventDiv } from './EventDiv';


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
            <EditDiv />
            <WeekdaySlots isMobile={isMobile} currentDay={props.currentDay} />
            <TimeSlots />
            <EventDiv eventData={props.eventData} isMobile={isMobile} currentDay={props.currentDay} />
        </section>
    )
}