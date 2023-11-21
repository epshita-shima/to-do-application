import React, { useEffect, useState } from 'react';
import AddTask from './AddTask';
import UpdateTask from './UpdateTask';

const Todo = () => {
    const [tasks, setTask] = useState([]);
    const [selectedTask, setSetectedTask] = useState({});
    const [inCompleteTask, setInCompleteTask] = useState([]);
    console.log(inCompleteTask)
    // useEffect(() => {
    //     fetch('https://to-to-application-server.onrender.com/task')
    //         .then(res => res.json())
    //         .then(data => setInCompleteTask(data));
    // }, [inCompleteTask])
   
    useEffect(() => {
        fetch('https://to-to-application-server.onrender.com/task')
            .then(res => res.json())
            .then(data => {
                setInCompleteTask(data.filter(d => d.status != 'completed'))
            });
    }, [inCompleteTask])
    // console.log(tasks);

    const handleTaskComplete = (event, _id) => {
        const checkedTask = event.target.checked;
        console.log(_id)
        console.log(checkedTask);
        console.log('set selectted', selectedTask);

        fetch(`https://to-to-application-server.onrender.com/completed/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

        })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
            })

            //  const procced = window.confirm('are you sure want to delete?');
            // if (procced) {
            //     console.log('delete item', _id)
            //     const url = `https://to-to-application-server.onrender.com/task/${_id}`;
            //     fetch(url, {
            //         method: 'DELETE'
            //     })
            //         .then(res => res.json())
            //         .then(data => {
            //             if (data.deletedCount > 0) {
            //                 console.log('delete successful');
            //                 const remaining = tasks.filter(infoList => infoList._id != _id);
            //                 console.log(remaining)
            //                 setTask(remaining);
            //             }
            //         })
            // }
        

    }
  
    return (
        <div className='container mx-auto h-[100vh]'>

            <div className='table-fixed flex justify-center'>
                <table class="table table-bordered mt-5">
                    <thead>
                        <tr>
                            <th scope="col" className='bg-teal-300 text-black text-[18px]'>Task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            inCompleteTask.map((t) => <tr className='flex justify-between items-center'>
                                <input type="checkbox" onChange={(event) => handleTaskComplete(event, t._id)}
                                    class="checkbox mr-2 border-green-500" />
                                <td className='bg-green-100 mt-2 text-[18px] text-black w-[100%]'>{t.task}</td>
                                <label for="my-modal-6"
                                    onClick={() => setSetectedTask(t)}
                                    className='btn bg-green-500 text-white ml-2 '>Edit</label>
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