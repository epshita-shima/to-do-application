import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CompleteTask = () => {


    const [completeTask, setCompleteTask] = useState([]);
    const { taskId } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/task/${taskId}`)
            .then(res => res.json())
            .then(data => setCompleteTask(data))
    }, [])

    return (
        <div className='container mx-auto'>
            <h2 className='text-2xl'>This is complete task:{taskId}</h2>
        </div>
    );
};

export default CompleteTask;