import React from "react";
import "./Trend1.css";
import apple from '../../assets/images/Apple.png';
import lenovo from '../../assets/images/Lenovo.png';
import asus from '../../assets/images/Asus.png';
import keyboard from '../../assets/images/Keyboard.png';
import mouse from '../../assets/images/Mouse.png';
import speaker from '../../assets/images/Speaker.png';
import hp from '../../assets/images/hp.png';
import samsung from '../../assets/images/samsung.png';
import {Link} from 'react-router-dom'


export default function Trend1() {
    return (
      <div className='Trend1'>
        <div className="row">
            <div className="col">
                <div className='card'>
                  <div className='card-body'>
                    <center><img src={apple} alt="/"/></center>
                    <div >Apple Watch 49</div>
                    <div>Rp 5.400.000,00 </div>
                    <div className="tombol"><Link to="/page" className="btn btn-primary">Buy Now</Link></div>
                  </div>
                </div>
            </div>
            <div className="col">
                <div className='card'>
                  <div className='card-body'>
                    <center><img src={lenovo} alt="/"/></center>
                    <div>Lenovo</div>
                    <div>Rp 11.000.000,00</div>
                    <div className="tombol"><Link to="/page" className="btn btn-primary">Buy Now</Link></div>
                  </div>
                </div>
            </div>
            <div className="col">
            <div className='card'>
                  <div className='card-body'>
                    <center><img src={asus} alt="/"/></center>
                    <div>ASUS</div>
                    <div>Rp 11.500.000,00</div>
                    <div className="tombol"><a href="#" className="btn btn-primary">Buy Now</a></div>
                  </div>
                </div>
            </div>
            <div className="col">
              <div className='card'>
                  <div className='card-body'>
                    <center><img src={keyboard} alt="/"/></center>
                    <div>Keyboard</div>
                    <div>Rp 300.000,00</div>
                    <div className="tombol"><a href="#" className="btn btn-primary">Buy Now</a></div>
                  </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col">
              <div className='card'>
                  <div className='card-body'>
                    <center><img src={mouse} alt="/"/></center>
                    <div>Mouse</div>
                    <div>Rp 150.000,00</div>
                    <div className="tombol"><a href="#" className="btn btn-primary">Buy Now</a></div>
                  </div>
                </div>
            </div>
            <div className="col">
              <div className='card'>
                <div className='card-body'>
                    <center><img src={speaker} alt="/"/></center>
                    <div>Speaker</div>
                    <div>Rp 350.000,00</div>
                    <div className="tombol"><a href="#" className="btn btn-primary">Buy Now</a></div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className='card'>
                <div className='card-body'>
                    <center><img src={hp} alt="/"/></center>
                    <div>HP</div>
                    <div>Rp 12.000.000,00</div>
                    <div className="tombol"><a href="#" className="btn btn-primary">Buy Now</a></div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className='card'>
                <div className='card-body'>
                    <center><img src={samsung} alt="/"/></center>
                    <div>SAMSUNG</div>
                    <div>Rp 9.500.000,00</div>
                    <div className="tombol"><a href="#" className="btn btn-primary">Buy Now</a></div>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }