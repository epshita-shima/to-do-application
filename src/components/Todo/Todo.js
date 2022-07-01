import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddTask from './AddTask';

const Todo = () => {
    const [task, setTask] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTask(data));
    }, [])
    const navigate = useNavigate();
    const navigateTaskComplete = _id => {
        navigate(`task/${_id}`)
    }
    const navigateUpdateTask = _id => {
        navigate(`task/${_id}`)
    }
    return (
        <div className='container mx-auto '>

            <div className='table-fixed flex justify-center'>
                <table class="table table-bordered mt-5">
                    <thead>
                        <tr>
                            <th scope="col">Task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            task.map((t) => <tr className='flex justify-between items-center'>
                                <input type="checkbox" onClick={() => navigateTaskComplete(t._id)} class="checkbox" /><td>{t.task}</td><button className='btn btn-primary' onClick={() => navigateUpdateTask(t._id)} >Edit</button>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <AddTask></AddTask>
        </div>
    );
};

export default Todo;