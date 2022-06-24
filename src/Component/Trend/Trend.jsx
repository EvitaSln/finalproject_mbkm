import React from 'react'
import './Trend.css'
import gadget from '../../assets/images/Gadgets.png'
import laptop from '../../assets/images/Laptop.png'
import komputer from '../../assets/images/Komputer.png'
import aksesoris from '../../assets/images/Aksesoris.png'

export default function Trend() {
  return (
    <div className='Trend'>
         <div className='container-fluid pt-5 pb-5  layanan bg-light'>
         <h2 className='text-center'> Trend Categories</h2>
         <div className='row justify-content-center' >
            <div className='col-lg-2 col-lg-offset-1'>
               <div className='card'>
                  <div className='card-body'>
                    <center><img src={gadget} alt="/"/>
                    <div>Gadgets</div></center>
                  </div>
               </div>
            </div>
            <div className='col-lg-2 col-lg-offset-1'>
               <div className='card'>
                  <div className='card-body' >
                     <center><img src={laptop} alt="/"/>
                     <div>Laptop</div></center>
                  </div>
               </div>
            </div>
            <div className='col-lg-2 col-lg-offset-1'>
               <div className='card'>
                  <div className='card-body'>
                     <center><img src={komputer} alt="/"/>
                     <div>Komputer</div></center>
                  </div>
               </div>
            </div>
            <div className='col-lg-2 col-lg-offset-1'>
               <div className='card' >
                  <div className='card-body'>
                     <center><img src={aksesoris} alt="/"/>
                     <div>Aksesoris</div></center>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}