import React from 'react';

export function EventDiv(props) {
    const isMobile = props.isMobile;
    const currentDay = props.currentDay;
    const eventData = props.eventData;
    let mobileEventData = [];

    if (isMobile) {
        mobileEventData = eventData.filter((eventObj) => {
            return eventObj.date === currentDay;
        })
    }

    const eventDiv = (isMobile ? mobileEventData : eventData).map((eventObj) => {
        const name = eventObj.name;
        const title = eventObj.title;
        const date = eventObj.date;
        const time = eventObj.time;
        let divElement = '';
    
        if (eventObj.hasOwnProperty('activity')) {
            divElement = (
                <div 
                    key={eventObj.name + date}
                    className={'event ' + name}
                    style={{
                        gridColumn: isMobile ? 'current-day' : date, 
                        gridRow: time.timeStart + ' / ' + time.timeEnd
                    }}
                >
                    <span className='event-title'>{title}</span><br/>
                    <span className='form-check event-todolist'>
                        <input className='form-check-input' type='checkbox' value='homework'></input>
                        <label className='form-check-label'>{eventObj.activity}</label>
                    </span>
                </div>
            )
        } else {
            divElement = (
                <div 
                    key={eventObj.name + date} className={'event ' + name}
                    style={{
                        gridColumn: isMobile ? 'current-day' : date, 
                        gridRow: time.timeStart + ' / ' + time.timeEnd
                    }}
                >
                    <span className='event-title'>{title}</span><br/>
                </div>
            )
        }
        return divElement;
    })
    return eventDiv;
}