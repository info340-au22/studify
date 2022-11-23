import React from 'react';

function WeekdaySelect(props) {
    return (
        <section className="weekday-select d-lg-none">
            <select className="form-select-sm mb-3" aria-label="Weekday select">
                <option defaultValue value="1">Monday</option>
                <option value="2">Tuesday</option>
                <option value="3">Wednesday</option>
                <option value="4">Thursday</option>
                <option value="5">Friday</option>
                <option value="6">Saturday</option>
                <option value="7">Sunday</option>
            </select>
        </section>
    )
}

function ScheduleGrid(props) {
    return (
        <section className="my-schedule-grid full-width">
            <div className="edit-button">
                <button type="button" className="btn btn-info btn-sm">
                    <small className="fa-solid fa-pen-to-square"></small>
                    <span className="d-none d-lg-inline"> Edit</span>
                </button>
            </div>
            {/* <!-- Weekday Columns --> */}
            <div className="weekday mon">Monday</div>
            <div className="weekday tue">Tuesday</div>
            <div className="weekday wed">Wednesday</div>
            <div className="weekday thu">Thursday</div>
            <div className="weekday fri">Friday</div>
            <div className="weekday sat">Saturday</div>
            <div className="weekday sun">Sunday</div>
            {/* <!-- Time Rows --> */}
            <div className="time time-0800" style={{gridRow: "time-0800"}}>8am</div>
            <div className="time time-0830" style={{gridRow: "time-0830"}}></div>
            <div className="time time-0900" style={{gridRow: "time-0900"}}>9am</div>
            <div className="time time-0930" style={{gridRow: "time-0930"}}></div>
            <div className="time time-1000" style={{gridRow: "time-1000"}}>10am</div>
            <div className="time time-1030" style={{gridRow: "time-1030"}}></div>
            <div className="time time-1100" style={{gridRow: "time-1100"}}>11am</div>
            <div className="time time-1130" style={{gridRow: "time-1130"}}></div>
            <div className="time time-1200" style={{gridRow: "time-1200"}}>12pm</div>
            <div className="time time-1230" style={{gridRow: "time-1230"}}></div>
            <div className="time time-1300" style={{gridRow: "time-1300"}}>1pm</div>
            <div className="time time-1330" style={{gridRow: "time-1330"}}></div>
            <div className="time time-1400" style={{gridRow: "time-1400"}}>2pm</div>
            <div className="time time-1430" style={{gridRow: "time-1430"}}></div>
            <div className="time time-1500" style={{gridRow: "time-1500"}}>3pm</div>
            <div className="time time-1530" style={{gridRow: "time-1530"}}></div>
            <div className="time time-1600" style={{gridRow: "time-1600"}}>4pm</div>
            <div className="time time-1630" style={{gridRow: "time-1630"}}></div>
            <div className="time time-1700" style={{gridRow: "time-1700"}}>5pm</div>
            <div className="time time-1730" style={{gridRow: "time-1730"}}></div>
            <div className="time time-1800" style={{gridRow: "time-1800"}}>6pm</div>
            <div className="time time-1830" style={{gridRow: "time-1830"}}></div>
            <div className="time time-1900" style={{gridRow: "time-1900"}}>7pm</div>
            <div className="time time-1930" style={{gridRow: "time-1930"}}></div>
            <div className="time time-2000" style={{gridRow: "time-2000"}}>8pm</div>
            <div className="time time-2030" style={{gridRow: "time-2030"}}></div>
            {/* <!-- Events Section --> */}
            <div className="event info340" style={{gridColumn: "tuesday", gridRow: "time-1330 / time-1530"}}>
                <span className="event-title">INFO 340</span><br/>
                <span className="form-check event-todolist">
                    <input className="form-check-input" type="checkbox" value="homework"/>
                    <label className="form-check-label">Problem Set</label>
                </span>
            </div>
            <div className="event info340" style={{gridColumn: "thursday", gridRow: "time-1330 / time-1530"}}>
                <span className="event-title">INFO 340</span><br/>
                <span className="form-check event-todolist">
                    <input className="form-check-input" type="checkbox" value="homework"/>
                    <label className="form-check-label">Problem Set</label>
                </span>
            </div>
            <div className="event info370A" style={{gridColumn: "monday", gridRow: "time-1730 / time-1930"}}>
                <span className="event-title">INFO 370</span><br/>
                <span className="form-check event-todolist">
                    <input className="form-check-input" type="checkbox" value="homework"/>
                    <label className="form-check-label">Problem Set</label>
                </span>
            </div>
            <div className="event info370B" style={{gridColumn: "wednesday", gridRow: "time-1730 / time-1930"}}>
                <span className="event-title">INFO 370</span><br/>
                <span className="form-check event-todolist">
                    <input className="form-check-input" type="checkbox" value="homework"/>
                    <label className="form-check-label">Problem Set</label>
                </span>
            </div>
            <div className="event info310" style={{gridColumn: "tuesday", gridRow: "time-1130 / time-1330"}}>
                <span className="event-title">INFO 310</span><br/>
                <span className="form-check event-todolist">
                    <input className="form-check-input" type="checkbox" value="homework"/>
                    <label className="form-check-label">Problem Set</label>
                </span>
            </div>
            <div className="event info310" style={{gridColumn: "thursday", gridRow: "time-1130 / time-1330"}}>
                <span className="event-title">INFO 310</span><br/>
                <span className="form-check event-todolist">
                    <input className="form-check-input" type="checkbox" value="homework"/>
                    <label className="form-check-label">Problem Set</label>
                </span>
            </div>
            <div className="event study" style={{gridColumn: "friday", gridRow: "time-1200 / time-2000"}}>
                <span className="event-title">Self Study</span><br/>
            </div>
            <div className="event workA" style={{gridColumn: "monday", gridRow: "time-0900 / time-1230"}}>
                <span className="event-title">Work</span><br/>
            </div>
            <div className="event workB" style={{gridColumn: "wednesday", gridRow: "time-0900 / time-1230"}}>
                <span className="event-title">Work</span><br/>
            </div>
            <div className="event tennis" style={{gridColumn: "saturday / sunday", gridRow: "time-1030 / time-1230"}}>
                <span className="event-title">Tennis</span><br/>
            </div>
            <div className="event game" style={{gridColumn: "saturday", gridRow: "time-1700 / time-2030"}}>
                <span className="event-title">Game</span><br/>
            </div>
            <div className="event movie" style={{gridColumn: "sunday", gridRow: "time-1530 / time-1930"}}>
                <span className="event-title">Movie</span><br/>
            </div>
            <div className="event mass" style={{gridColumn: "sunday", gridRow: "time-0830 / time-0930"}}>
                <span className="event-title">Sunday Mass</span><br/>
            </div>
        </section>
    )
}

export function Schedule(props) {
    return (
        <main className="container my-schedule pt-lg-0">
            <WeekdaySelect />
            <ScheduleGrid />
        </main>
    )
}