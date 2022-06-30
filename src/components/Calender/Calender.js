import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const Calender = () => {
    const [date, setDate] = useState(new Date());
    console.log(date)
    return (
        <div class="card w-96 mx-auto bg-base-100 shadow-xl mt-10">
            <div class="card-body">
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                ></DayPicker>

            </div>
            <p>You have selected: {date && format(date, 'PP')}</p>
        </div>
    );
};

export default Calender;