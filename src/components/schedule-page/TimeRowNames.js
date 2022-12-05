import React from 'react';

const TIME_ROWS = [
    { "time": "time-0800", "content": "8am" },
    { "time": "time-0830" },
    { "time": "time-0900", "content": "9am" },
    { "time": "time-0930" },
    { "time": "time-1000", "content": "10am" },
    { "time": "time-1030" },
    { "time": "time-1100", "content": "11am" },
    { "time": "time-1130" },
    { "time": "time-1200", "content": "12pm" },
    { "time": "time-1230" },
    { "time": "time-1300", "content": "1pm" },
    { "time": "time-1330" },
    { "time": "time-1400", "content": "2pm" },
    { "time": "time-1430" },
    { "time": "time-1500", "content": "3pm" },
    { "time": "time-1530" },
    { "time": "time-1600", "content": "4pm" },
    { "time": "time-1630" },
    { "time": "time-1700", "content": "5pm" },
    { "time": "time-1730" },
    { "time": "time-1800", "content": "6pm" },
    { "time": "time-1830" },
    { "time": "time-1900", "content": "7pm" },
    { "time": "time-1930" },
    { "time": "time-2000", "content": "8pm" },
    { "time": "time-2030" }
]

export default function TimeRowNames(props) {
    const timeRowNames = TIME_ROWS.map((timeObj) => {
        const time = timeObj.time;
        const isShownContent = timeObj.hasOwnProperty('content');
        return (
            <div key={time} className={'time ' + time} style={{gridRow: time}}>
                {isShownContent ? timeObj.content : ''}
            </div>
        )
    })
    return timeRowNames;
}