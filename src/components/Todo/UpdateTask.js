import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateTask = () => {
    const { taskId } = useParams();

    const [completeTask, setCompleteTask] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/task/${taskId}`)
            .then(res => res.json())
            .then(data => setCompleteTask(data))
    }, [])
    return (
        <div>
            <h2>Update task</h2>
        </div>
    );
};

export default UpdateTask;