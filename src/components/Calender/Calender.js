import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const Calender = () => {
    const { date, setDate } = useState(new Date());

    return (
        <div class="card w-96 mx-auto bg-base-100 shadow-xl mt-10">
            <div class="card-body">
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                ></DayPicker>

            </div>
        </div>
    );
};

export default Calender;