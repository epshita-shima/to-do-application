import React, { useEffect, useState } from 'react';
import AddTask from './AddTask';
import UpdateTask from './UpdateTask';

const Todo = () => {
    const [tasks, setTask] = useState([]);
    const [selectedTask, setSetectedTask] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTask(data));
    }, [tasks])
    // console.log(tasks);

    const handleTaskComplete = (event, _id) => {
        const checkedTask = event.target.checked;
        console.log(checkedTask);
        console.log('set selectted', selectedTask);

        fetch(`http://localhost:5000/completed/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

        })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
            })
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
                            tasks.map((t) => <tr className='flex justify-between items-center'>
                                <input type="checkbox" onChange={(event) => handleTaskComplete(event, t._id)}
                                    class="checkbox" />
                                <td>{t.task}</td>
                                <label for="my-modal-6"
                                    onClick={() => setSetectedTask(t)}
                                    className='btn btn-primary'>Edit</label>
                            </tr>)
                        }
                        {
                            <UpdateTask
                                task={selectedTask}
                            ></UpdateTask>
                        }
                    </tbody>
                </table>
            </div>
            <AddTask></AddTask>
        </div>
    );
};

export default Todo;