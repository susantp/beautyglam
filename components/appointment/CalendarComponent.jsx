import React, {useState} from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function CalendarComponent(props) {
    const [value, setValue] = useState(new Date());

    const onChange = (nextValue) => {
        console.log(nextValue)
        return setValue(nextValue)
    }

    return (
        <div className={``}>
            <Calendar className={`react-calendar__tile react-calendar__tile--hover`} onChange={onChange} value={value}/>
        </div>
    );
}

export default CalendarComponent;