import React from 'react';

import WEEKDAY_DATA from '../data/weekdays.json';
import TIME_DATA from '../data/time-slots.json';
import EVENT_DATA from '../data/events.json';

function WeekdaySelect(props) {
    const weekdayOption = WEEKDAY_DATA.map((weekdayObj, index) => {
        return (
            <option key={weekdayObj.class} value={index + 1}>{weekdayObj.text}</option>
        )
    })

    return (
        <section className="weekday-select d-lg-none">
            <select className="form-select-sm mb-3" aria-label="Weekday select">
                {weekdayOption}
            </select>
        </section>
    )
}

function ScheduleGrid(props) {
    const editButtonDiv = (
        <div className="edit-button">
            <button type="button" className="btn btn-info btn-sm">
                <small className="fa-solid fa-pen-to-square"></small>
                <span className="d-none d-lg-inline"> Edit</span>
            </button>
        </div>
    )

    const weekdayDiv = WEEKDAY_DATA.map(weekdayObj => {
        return (
            <div key={weekdayObj.class} className={'weekday ' + weekdayObj.class}>{weekdayObj.text}</div>
        )
    })

    const timeDiv = TIME_DATA.map(timeObj => {
        const time = timeObj.time;
        if (timeObj.hasOwnProperty('text')) {
            return (
                <div key={time} className={'time ' + time} style={{gridRow: time}}>
                    {timeObj.text}
                </div>)
        } else {
            return (
                <div key={time} className={'time ' + time} style={{gridRow: time}}>
                </div>
            )
        }
    })

    const eventDiv = EVENT_DATA.map(eventObj => {
        const name = eventObj.name;
        const title = eventObj.title;
        const date = eventObj.date;
        const time = eventObj.time;

        let element = '';

        if (eventObj.hasOwnProperty('activity')) {
            element = (
                <div 
                    key={eventObj.name + date} className={'event ' + name}
                    style={{gridColumn: date, gridRow: time.timeStart + ' / ' + time.timeEnd}}
                >
                    <span className='event-title'>{title}</span><br/>
                    <span className='form-check event-todolist'>
                        <input className='form-check-input' type='checkbox' value='homework'></input>
                        <label className='form-check-label'>{eventObj.activity}</label>
                    </span>
                </div>
            )
        } else {
            element = (
                <div 
                    key={eventObj.name + date} className={'event ' + name}
                    style={{gridColumn: date, gridRow: time.timeStart + ' / ' + time.timeEnd}}
                >
                    <span className='event-title'>{title}</span><br/>
                </div>
            )
        }
        return element;
    })

    return (
        <section className="my-schedule-grid full-width">
            {editButtonDiv}
            {weekdayDiv}
            {timeDiv}
            {eventDiv}
        </section>
    )
}

export function Schedule(props) {
    return (
        <main className="container my-schedule pt-lg-0">
            <WeekdaySelect />
            <ScheduleGrid />
        </main>
    )
}