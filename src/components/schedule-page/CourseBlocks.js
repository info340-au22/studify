import React, { useEffect, useState } from 'react';
import { getDatabase, onValue, ref, set as setDatabase, push as pushDatabase } from 'firebase/database';

export default function CourseBlocks(props) {
    const [courseData, setCourseData] = useState(props.eventData);

    // useEffect(() => {

    //     const db = getDatabase();
    //     const courseRef = ref(db, 'courseData');

    //     onValue(courseRef, (snapshot) => {
    //         const changedValue = snapshot.val();
    //         console.log(changedValue)
            
    //         const objKeys = Object.keys(changedValue)
    //         const courseArray = objKeys.map((keyString) => {
    //             const courseObj = changedValue[keyString];
    //             console.log(courseObj)
    //             return courseObj
    //         })
    //         console.log(courseArray)
    //         setCourseData(courseArray)
    //     })


    // }, [])

    const isMobile = props.isMobile;
    const currentDay = props.currentDay;
    let mobileCourseData = [];

    if (isMobile) {
        mobileCourseData = courseData.filter((courseObj) => {
            return courseObj.date === currentDay;
        })
    }

    const courseBlocks = (isMobile ? mobileCourseData : courseData).map((courseObj) => {
        const { name, title, date, time, activity } = courseObj;
        // const { activity, date, name, time, title } = courseObj;
        return (
            <div 
                key={courseObj.name + ' ' + date}
                className={'event ' + name}
                style={{
                    gridColumn: isMobile ? 'current-day' : date, 
                    gridRow: time.timeStart + ' / ' + time.timeEnd
                }}
            >
                <span className='event-title'>{title}</span><br/>
                <span className='form-check event-todolist'>
                    <input className='form-check-input' type='checkbox' value='homework'></input>
                    <label className='form-check-label'>{activity}</label>
                </span>
            </div>
        )
    })
    return courseBlocks;
}