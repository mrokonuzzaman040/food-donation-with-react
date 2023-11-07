import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Shared/Header/Navbar/Navbar';
import Footer from '../../Components/Shared/Header/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;