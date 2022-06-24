import React from 'react';
import Navigasi from '../Component/Navbar/Navbar';
import Content from '../Component/Content/Content';
import Content2 from '../Component/Content2/Content2';
import Footer from '../Component/Footer/Footer';
  
export default function Page2() {
  return (
    <div>
        <Navigasi />
        <Content />
        <Content2 />
        <div className='footer'>
            <Footer />
                </div>
    </div>
      
  )
}