import React from 'react';
import { NavLink } from 'react-router';

const MenuBar = () => {
    return (
        <div className=' flex justify-between items-center mx-20'>
           <div className='flex gap-2 items-center'>
             <img className='w-14' src="logo.jpg" alt="" />
             <div>
                <h3 className='text-xl '>DrFoody</h3>
                <p className='text-xs text-green-500'>Food Delivery</p>
             </div>
             
           </div>

           <div>
            <ul>
                <li className='flex items-center gap-5'>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/"}>About us</NavLink>
                    <NavLink to={"/"}>Products</NavLink>
                    <NavLink to={"/"}>Blog</NavLink>
                    
                </li>
            </ul>
           
           </div>
            <button className='bg-[#da2424] p-2 text-white font-bold rounded-lg shadow-sm shadow-black'>Get Menu</button>
        </div>
    );
};

export default MenuBar;