import React from 'react';

export function EventDiv(props) {
    const eventData = props.eventData;

    const eventDiv = eventData.map(eventObj => {
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
    return eventDiv;
}