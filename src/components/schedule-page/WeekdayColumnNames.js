import React from 'react';

export default function WeekdayColumnNames(props) {
    const isMobile = props.isMobile;
    const currentDay = props.currentDay;
    const weekdayStrings = props.weekdayStrings;

    const mobileWeekdayColumn = (
        <div key={currentDay} className={'weekday ' + currentDay}>  
            {currentDay.charAt(0).toUpperCase() + currentDay.slice(1)}
        </div>
    )

    const desktopWeekdayColumn = weekdayStrings.map((weekdayStr) => {
        return (
            <div key={weekdayStr} className={'weekday ' + weekdayStr}>  
                {weekdayStr.charAt(0).toUpperCase() + weekdayStr.slice(1)}
            </div>
        )
    })

    return (
        <>
            {isMobile && mobileWeekdayColumn}
            {!isMobile && desktopWeekdayColumn}
        </>
    )
} 