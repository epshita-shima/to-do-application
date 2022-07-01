import React from 'react';
import Calender from '../Calender/Calender';
import Todo from '../Todo/Todo';

const Home = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200" style={{ background: `url('https://img.freepik.com/free-photo/copy-space-blooming-flowers_23-2148860088.jpg?w=2000')` }}>
                <div class="hero-content flex-col lg:flex-row-reverse" >
                    <img src="https://media.istockphoto.com/photos/chamomile-flower-beautiful-and-delicate-on-pink-background-picture-id1262792416" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Your day start with enjoy</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            <div className='conatiner '>
                <Todo></Todo>
                <Calender></Calender>
            </div>
        </div>
    );
};

export default Home;