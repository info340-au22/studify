import React from 'react';
import { getDatabase, ref } from 'firebase/database';

export default function EventBlocks(props) {
    const isMobile = props.isMobile;
    const currentDay = props.currentDay;
    const eventData = props.eventData;
    let mobileEventData = [];

    if (isMobile) {
        mobileEventData = eventData.filter((courseObj) => {
            return courseObj.date === currentDay;
        })
    }

    const db = getDatabase();
    console.log(db)

    const courseBlocks = (isMobile ? mobileEventData : eventData).map((courseObj) => {
        const name = courseObj.name;
        const title = courseObj.title;
        const date = courseObj.date;
        const time = courseObj.time;
        return (
            <div 
                key={courseObj.name + ' ' + date}
                className={'event ' + name}
                style={{
                    gridColumn: isMobile ? 'current-day' : date, 
                    gridRow: time.timeStart + ' / ' + time.timeEnd
                }}
            >
                <span className='event-title'>{title}</span><br/>
                <span className='form-check event-todolist'>
                    <input className='form-check-input' type='checkbox' value='homework'></input>
                    <label className='form-check-label'>{courseObj.activity}</label>
                </span>
            </div>
        )
    })
    return courseBlocks;
}