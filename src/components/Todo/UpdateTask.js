import React, { useEffect, useState } from 'react';


const UpdateTask = ({ task }) => {
    const { _id } = task;
    const handleUpdate = event => {
        event.preventDefault();
        const updateTask = event.target.task.value;
        console.log(updateTask);
        const updateValue = { task: updateTask };

        fetch(`https://to-to-application-server.onrender.com/task/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateValue)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
                event.target.reset();
            })
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle " />
            <div class="modal modal-bottom sm:modal-middle ">
                <div class="modal-box bg-emerald-200">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2 bg-red-500 border-red-400 text-white">✕</label>
                    <form onSubmit={handleUpdate}>
                        <input type="text" name='task' placeholder="update task" class="input input-bordered bg-white placeholder-black w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateTask;