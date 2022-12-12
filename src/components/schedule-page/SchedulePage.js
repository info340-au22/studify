import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { getDatabase, onValue, ref, push as pushFirebase } from 'firebase/database';

import WeekdaySelectForm from './WeekdaySelectForm';
import ScheduleGrid from './ScheduleGrid';

const DAYS_OF_THE_WEEK = [
    "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"
];

export default function SchedulePage(props) {
    let liveCurrentDay = DAYS_OF_THE_WEEK[new Date().getDay()];
    const currentUser = props.currentUser;

    const [selectedDate, setSelectedDate] = useState(liveCurrentDay);
    const [allCoursesData, setAllCoursesData] = useState([]);
    const [subjectInput, setSubjectInput] = useState('');
    const [dateInput, setDateInput] = useState('');
    const [startTimeInput, setStartTimeInput] = useState('');
    const [endTimeInput, setEndTimeInput] = useState('');

    useEffect(() => {
        const db = getDatabase();
        const userEventsDbRef = ref(db, 'userData/' + currentUser.id + '/userEvents')
        console.log(props.currentUser)

        onValue(userEventsDbRef, (snapshot) => {
            const changedValue = snapshot.val();
            
            const objKeys = Object.keys(changedValue);
            const allCoursesArray = objKeys.map((keyString) => {
                const courseObj = changedValue[keyString];
                courseObj.key = keyString;
                return courseObj;
            })
            setAllCoursesData(allCoursesArray)
        })
    }, [])

    const handleSelectedDateChange = (event) => {
        setSelectedDate(event.target.value);
    }

    const handleNewCourseChange = (event) => {
        const eventId = event.target.id; 
        const eventValue = event.target.value;

        return eventId === 'controlSubjectInput' ? setSubjectInput(eventValue)
                : eventId === 'controlDateInput' ? setDateInput(eventValue)
                : eventId === 'controlStartTimeInput' ? setStartTimeInput(eventValue)
                : eventId === 'controlEndTimeInput' ? setEndTimeInput(eventValue)
                : '';
    }

    const addNewCourse = () => {
        const db = getDatabase();
        const userEventsDbRef = ref(db, 'userData/' + currentUser.id + '/userEvents')

        const newCourse = {
            "subject": subjectInput.toUpperCase(),
            "date": dateInput,
            "time": {
                "startTime": startTimeInput,
                "endTime": endTimeInput
            }
        }
        pushFirebase(userEventsDbRef, newCourse)
    }

    return (
        <>
            <Helmet>
                <title>Studify | Schedule</title>
            </Helmet>
            <main className='container my-schedule pt-lg-0'>
                <h2>My Schedule</h2>
                <WeekdaySelectForm 
                    weekdayStrings={DAYS_OF_THE_WEEK} 
                    handleChangeCallback={handleSelectedDateChange} 
                    liveCurrentDay={liveCurrentDay} 
                />
                <ScheduleGrid 
                    allCoursesData={allCoursesData} 
                    weekdayStrings={DAYS_OF_THE_WEEK}
                    selectedDate={selectedDate} 
                    handleNewCourseChangeCallback={handleNewCourseChange}
                    addNewCourseCallback={addNewCourse}
                />
            </main>
        </>
    )
}