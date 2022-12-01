import React from 'react';

const WEEKDAY_SLOTS = [
    { "className": "mon", "content": "Monday" },
    { "className": "tue", "content": "Tuesday" },
    { "className": "wed", "content": "Wednesday" },
    { "className": "thu", "content": "Thursday" },
    { "className": "fri", "content": "Friday" },
    { "className": "sat", "content": "Saturday" },
    { "className": "sun", "content": "Sunday" }
]

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

    return (
        <section className="weekday-select d-lg-none">
            <select 
                className="form-select-sm mb-3" 
                aria-label="Weekday select" 
                onChange={props.handleChangeCallback}
                defaultValue={props.liveCurrentDay}
            >
                {weekdayOption}
            </select>
        </section>
    )
}

export function WeekdaySlots(props) {
    const isMobile = props.widthDimension < 992;

    const mobileWeekdayDiv = (
        <div 
            key={props.currentDay} 
            className={'weekday ' + props.currentDay}
        >  
            {props.currentDay.charAt(0).toUpperCase() + props.currentDay.slice(1)}
        </div>
    )

    const desktopWeekdayDiv = WEEKDAY_SLOTS.map(weekdayObj => {
        return (
            <div 
                key={weekdayObj.content} 
                className={'weekday ' + weekdayObj.className}
            >  
                {weekdayObj.content}
            </div>
        )
    })

    return (
        <>
            {isMobile && mobileWeekdayDiv}
            {!isMobile && desktopWeekdayDiv}
        </>
    )
} 