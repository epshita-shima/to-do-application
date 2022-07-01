import React, { useEffect, useState } from 'react';
import AddTask from './AddTask';
import UpdateTask from './UpdateTask';

const Todo = () => {
    const [task, setTask] = useState([]);

    useEffect(() => {
        fetch('https://boiling-fortress-00507.herokuapp.com/task')
            .then(res => res.json())
            .then(data => setTask(data));
    }, [])

    const handleTaskComplete = () => {

    }
    const handelUpdateModal = () => {

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
                                <input type="checkbox" onClick={handleTaskComplete} id="data" class="checkbox" /><td>{t.task}</td>

                                <label for="my-modal-6"
                                    onClick={() => handelUpdateModal(t._id)}
                                    className='btn btn-primary'>Edit</label>
                            </tr>)
                        }
                        {
                            setTask && <UpdateTask setTask={setTask}></UpdateTask>
                        }
                    </tbody>
                </table>
            </div>
            <AddTask></AddTask>
        </div>
    );
};

export default Todo;