import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CompleteTask = () => {
    const [tasks, setTask] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => {
                setTask(data.filter(d => d.status === 'completed'))
            });
    }, [tasks])


    return (
        <div className='container mx-auto'>
            <div className='table-fixed flex justify-center'>
                <table className='table table-bordered mt-5'>
                    <thead>
                        <tr>
                            <th scope='col'>Completed Task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((t) => <tr>
                                <td>{t.task}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompleteTask;