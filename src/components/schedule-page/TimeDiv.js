import React from 'react';

const TIME_SLOTS = [
    { "time": "time-0600", "text": "6am" },
    { "time": "time-0630" },
    { "time": "time-0700", "text": "7am" },
    { "time": "time-0730" },
    { "time": "time-0800", "text": "8am" },
    { "time": "time-0830" },
    { "time": "time-0900", "text": "9am" },
    { "time": "time-0930" },
    { "time": "time-1000", "text": "10am" },
    { "time": "time-1030" },
    { "time": "time-1100", "text": "11am" },
    { "time": "time-1130" },
    { "time": "time-1200", "text": "12pm" },
    { "time": "time-1230" },
    { "time": "time-1300", "text": "1pm" },
    { "time": "time-1330" },
    { "time": "time-1400", "text": "2pm" },
    { "time": "time-1430" },
    { "time": "time-1500", "text": "3pm" },
    { "time": "time-1530" },
    { "time": "time-1600", "text": "4pm" },
    { "time": "time-1630" },
    { "time": "time-1700", "text": "5pm" },
    { "time": "time-1730" },
    { "time": "time-1800", "text": "6pm" },
    { "time": "time-1830" },
    { "time": "time-1900", "text": "7pm" },
    { "time": "time-1930" },
    { "time": "time-2000", "text": "8pm" },
    { "time": "time-2030" },
    { "time": "time-2100", "text": "9pm" },
    { "time": "time-2130" },
    { "time": "time-2200", "text": "10pm" },
    { "time": "time-2230" },
    { "time": "time-2300", "text": "11pm" },
    { "time": "time-2330" }
]

export function TimeSlots(props) {
    const timeDiv = TIME_SLOTS.map((timeObj) => {
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
    return timeDiv;
}