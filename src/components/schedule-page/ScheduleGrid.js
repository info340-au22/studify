import React, { useState, useEffect } from 'react';

import AddCourseModal from './AddCourseModal';
import WeekdayColumnNames from './WeekdayColumnNames';
import TimeRowNames from './TimeRowNames';
import CourseBlocks from './CourseBlocks';

export default function ScheduleGrid(props) {
    const [widthDimension, setWidthDimension] = useState(window.innerWidth);
 
    useEffect(() => {
        const handleResize = () => { 
            setWidthDimension(window.innerWidth)
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    const isMobile = widthDimension < 992;

    return (
        <section className='my-schedule-grid'>
            <AddCourseModal 
                allCoursesData={props.allCoursesData} 
                weekdayStrings={props.weekdayStrings} 
                handleNewCourseChangeCallback={props.handleNewCourseChangeCallback}
                addNewCourseCallback={props.addNewCourseCallback}
            />
            <WeekdayColumnNames 
                isMobile={isMobile} 
                selectedDate={props.selectedDate} 
                weekdayStrings={props.weekdayStrings}
            />
            <TimeRowNames />
            <CourseBlocks 
                allCoursesData={props.allCoursesData} 
                isMobile={isMobile} 
                selectedDate={props.selectedDate} 
            />
        </section>
    )
}