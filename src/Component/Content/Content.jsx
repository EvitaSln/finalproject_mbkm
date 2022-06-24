import React from "react";
import "../Content/Content.css";
import apple from '../../assets/images/Apple.png'; 
import {Link} from 'react-router-dom'


export default function Content() {
  return (
    
    <div className="Content">
      <figure class="figure">
        <img src={apple} class="figure-img img-fluid rounded" alt="/"/>
        <figcaption class="figure-caption">
          <p>Apple Watch</p>
          <p>Rp 5.400.000,00 </p>
          <p>Apple Watch adalah perangkat smart watch yang hadir sebagai perpanjangan tangan dari iPhone-mu.</p>.
        </figcaption>
        <figcaption class="figure-caption text-end"><div className="tombol"><Link to="/page" className="btn btn-primary">Add to cart</Link></div></figcaption>
      </figure>
    </div>
  );
}