import React from 'react';

const WEEKDAY_SLOTS = [
    { "class": "mon", "content": "Monday" },
    { "class": "tue", "content": "Tuesday" },
    { "class": "wed", "content": "Wednesday" },
    { "class": "thu", "content": "Thursday" },
    { "class": "fri", "content": "Friday" },
    { "class": "sat", "content": "Saturday" },
    { "class": "sun", "content": "Sunday" }
]

const DAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

export function WeekdaySelect(props) {
    const weekdayOption = WEEKDAY_SLOTS.map((weekdayObj) => {
        return (
            <option 
                key={weekdayObj.content} 
                value={weekdayObj.content.toLowerCase()}
            >
                {weekdayObj.content}
            </option>
        )
    })

    let today = DAYS[new Date().getDay()];

    return (
        <section className="weekday-select d-lg-none">
            <select 
                className="form-select-sm mb-3" 
                aria-label="Weekday select" 
                onChange={props.handleChangeCallback}
                defaultValue={today}
            >
                {weekdayOption}
            </select>
        </section>
    )
}

export function WeekdaySlots(props) {
    const weekdayDiv = WEEKDAY_SLOTS.map(weekdayObj => {
        return (
            <div key={weekdayObj.class} className={'weekday ' + weekdayObj.class}>  
                {weekdayObj.content}
            </div>
        )
    })
    return weekdayDiv
} 