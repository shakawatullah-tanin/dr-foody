import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import MenuBar from './MenuBar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <MenuBar></MenuBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;