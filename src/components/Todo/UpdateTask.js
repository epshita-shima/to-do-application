import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateTask = () => {
    const { id } = useParams();
    const handleUpdate = event => {
        event.preventDefault();
        const updateTask = event.target.name.value;
        console.log(updateTask);
        const updateValue = { updateTask };

        fetch(`https://boiling-fortress-00507.herokuapp.com/task/${id}`, {
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
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleUpdate}>
                        <input type="text" name='name' placeholder="update task" class="input input-bordered input-primary w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateTask;