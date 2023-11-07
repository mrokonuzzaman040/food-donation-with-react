import React from 'react';
import Navbar from '../../Components/Shared/Header/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Shared/Header/Footer/Footer';
import BannerOne from '../../Components/Shared/Hero/BannerOne/BannerOne';
import FeaturedFood from '../../Components/FeaturedFood/FeaturedFood';
import BannerTwo from '../../Components/Shared/Hero/BannerTwo/BannerTwo';

const Home = () => {
    return (
        <div>
            <BannerOne />
            <Outlet />
            <FeaturedFood />
            <BannerTwo />
        </div>
    );
};

export default Home;