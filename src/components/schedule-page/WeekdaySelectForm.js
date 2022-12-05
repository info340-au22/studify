import React from 'react';

export default function WeekdaySelectForm(props) {
    const weekdayStrings = props.weekdayStrings;
    const weekdayOptions = weekdayStrings.map((weekdayStr) => {
        return (
            <option key={weekdayStr} value={weekdayStr}>
                {weekdayStr.charAt(0).toUpperCase() + weekdayStr.slice(1)}
            </option>
        )
    })
    return (
        <section className='weekday-select d-lg-none'>
            <select 
                className='form-select-sm mb-3' 
                aria-label='Weekday select' 
                onChange={props.handleChangeCallback}
                defaultValue={props.liveCurrentDay}
            >
                {weekdayOptions}
            </select>
        </section>
    )
}