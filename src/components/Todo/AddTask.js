import React from 'react';

const AddTask = () => {
    const handleAddTask = event => {
        event.preventDefault();
        const task = event.target.name.value;
        console.log(task)
        alert('complete add task');
        event.target.reset();
    }
    return (
        <div className='container mt-10'>
            <div className='flex justify-center'>
                <form onSubmit={handleAddTask}>
                    <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full" />
                </form>
            </div>
        </div>
    );
};

export default AddTask;