import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet /> {/* Renders nested routes here */}
            </main>
        </div>
    );
};

export default Layout;
export { }