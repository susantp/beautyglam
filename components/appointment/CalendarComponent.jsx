import React from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function CalendarComponent({handleCalenderOnChange, calendarValue}) {

    return (
        <div className={``}>
            <Calendar className={`react-calendar__tile react-calendar__tile--hover`} onChange={handleCalenderOnChange} value={calendarValue}/>
        </div>
    );
}

export default CalendarComponent;