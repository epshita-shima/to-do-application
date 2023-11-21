import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CompleteTask = () => {
    const [completedTask, setCompletedTask] = useState([]);
    useEffect(() => {
        fetch('https://to-to-application-server.onrender.com/task')
            .then(res => res.json())
            .then(data => {
                setCompletedTask(data.filter(d => d.status === 'completed'))
            });
    }, [completedTask])


    return (
        <div className='container mx-auto'>
            <div className='table-fixed flex justify-center'>
                <table className='table table-bordered  mt-5'>
                    <thead>
                        <tr>
                            <th className='bg-teal-200 mt-2 text-[18px] text-black w-[100%]'>Sl.</th>
                            <th scope='col' className='bg-teal-200 mt-2 text-[18px] text-black w-[100%]'>Completed Task</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            completedTask.map((t,index) => <tr >
                                <td className='bg-green-100 mt-2 text-[18px] text-black w-[100%] '>{index+1}</td>
                                <td className='bg-green-100 mt-2 text-[18px] text-black w-[100%] '>{t.task}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompleteTask;