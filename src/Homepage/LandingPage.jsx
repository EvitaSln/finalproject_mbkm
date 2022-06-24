import React from 'react';
import Navigasi from '../Component/Navbar/Navbar';
import Banner from '../Component/Banner/Banner';
import Trend from '../Component/Trend/Trend';
import Trend1 from '../Component/Trend1/Trend1';
import Footer from '../Component/Footer/Footer';
import "../assets/CSS/LandingPage.css";



export default function LandingPage() {
    return (
        <div className='LandingPage'>
            <Navigasi />
            <Banner />
            <Trend />
            <Trend1/>
                <div className='footer'>
            <Footer />
                </div>
        </div>
    )
}