import React from 'react';

const AddTask = () => {
    const handleAddTask = event => {
        event.preventDefault();
        const task = event.target.name.value;
        console.log(task);
        const taskDetail = { task };

        fetch('https://to-to-application-server.onrender.com/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(taskDetail)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
                alert('Info added successfully');
                event.target.reset();
            })
    }
    return (
        <div className='container mt-10'>
            <div className='flex justify-center'>
                <form onSubmit={handleAddTask}>
                    <input type="text" name='name' placeholder="add task" class="input input-bordered bg-emerald-200 placeholder-black w-[100%]" />
                </form>
            </div>
        </div>
    );
};

export default AddTask;