import React from 'react';

import { EditDiv } from './EditDiv';
import { WeekdaySlots } from './WeekdayDiv';
import { TimeSlots } from './TimeDiv';
import { EventDiv } from './EventDiv';

export default function ScheduleGrid(props) {
    return (
        <section className='my-schedule-grid'>
            <EditDiv />
            <WeekdaySlots />
            <TimeSlots />
            <EventDiv eventData={props.eventData} />
        </section>
    )
}