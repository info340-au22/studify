import React from 'react';

export default function CourseBlocks(props) {
    const allCoursesData = props.allCoursesData;
    const isMobile = props.isMobile;
    const selectedDate = props.selectedDate;
    let mobileAllCoursesData = [];

    if (isMobile) {
        mobileAllCoursesData = allCoursesData.filter((courseObj) => {
            return courseObj.date === selectedDate;
        })
    }

    const courseBlocks = (isMobile ? mobileAllCoursesData : allCoursesData).map((courseObj) => {
        const { date, key, subject, time } = courseObj;
        
        const timeRow = (timeString) => {            
            return 'time-'.concat(timeString.replace(':', ''));
        }

        return (
            <div 
                key={key}
                className={'event'}
                style={{
                    gridColumn: isMobile ? 'current-day' : date, 
                    gridRow: timeRow(time.startTime) + ' / ' + timeRow(time.endTime)
                }}
            >
                <span className='event-title'>{subject}</span><br/>
                {/* <span className='form-check event-todolist'>
                    <input className='form-check-input' type='checkbox' value='homework'></input>
                    <label className='form-check-label'>{activity}</label>
                </span> */}
            </div>
        )
    })
    
    return courseBlocks;
}