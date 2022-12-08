import React from 'react';

export default function WeekdaySelectForm(props) {
    const weekdayStrings = props.weekdayStrings;
    const handleChangeCallback = props.handleChangeCallback;
    const liveCurrentDay = props.liveCurrentDay

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
                onChange={handleChangeCallback}
                defaultValue={liveCurrentDay}
            >
                {weekdayOptions}
            </select>
        </section>
    )
}