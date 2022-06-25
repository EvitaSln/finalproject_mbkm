import React from 'react';
import Navigasi from '../Component/Navbar/Navbar';
import Allproduk from '../Component/Allproduk/Allproduk';
import Footer from '../Component/Footer/Footer';
  
export default function Listall() {
  return (
    <div>
        <Navigasi />
        <Allproduk />
        <div className='footer'>
            <Footer />
        </div>
    </div>
      
  )
}