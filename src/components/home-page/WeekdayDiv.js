import React from 'react';

const WEEKDAY_SLOTS = [
    { "class": "mon", "text": "Monday" },
    { "class": "tue", "text": "Tuesday" },
    { "class": "wed", "text": "Wednesday" },
    { "class": "thu", "text": "Thursday" },
    { "class": "fri", "text": "Friday" },
    { "class": "sat", "text": "Saturday" },
    { "class": "sun", "text": "Sunday" }
]

export function WeekdaySelect(props) {

    const handleChangeCallback = props.handleChangeCallback;

    const weekdayOption = WEEKDAY_SLOTS.map((weekdayObj) => {
        return (
            <option key={weekdayObj.class} value={weekdayObj.text.toLowerCase()}>{weekdayObj.text}</option>
        )
    })

    return (
        <section className="weekday-select d-lg-none">
            <select className="form-select-sm mb-3" aria-label="Weekday select" onChange={handleChangeCallback}>
                {weekdayOption}
            </select>
        </section>
    )
}

export function WeekdaySlots(props) {
    const weekdayDiv = WEEKDAY_SLOTS.map(weekdayObj => {
        return (
            <div key={weekdayObj.class} className={'weekday ' + weekdayObj.class}>  
                {weekdayObj.text}
            </div>
        )
    })
    return weekdayDiv
} 