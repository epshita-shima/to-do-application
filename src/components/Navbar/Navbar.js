import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const menuItem = <>

        <li className='text-primary font-bold text-xl'><Link to='/'>ToDo List</Link></li>
        {/* <li className='text-primary font-bold text-xl'><Link to='/todo'>To Do</Link></li> */}
        <li className='text-primary font-bold text-xl'><Link to='/completetask'>Complete Task</Link></li>
        <li className='text-primary font-bold text-xl'><Link to='/calender'>Calender</Link></li>

    </>
    return (
        <div class="navbar shadow bg-green-100 container mx-auto">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  text-xl rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl text-primary font-bold">WorkingNotes</a>
            </div>
            <div class="navbar-start hidden lg:flex ">
                <ul class="menu menu-horizontal p-0  ">
                    {menuItem}
                </ul>
            </div>
            {/* <div class="navbar-end">
                <a class="btn btn-primary text-white">Get started</a>
            </div> */}
        </div>
    );
};

export default Navbar;