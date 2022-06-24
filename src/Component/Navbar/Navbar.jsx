import React from "react";
import "./Navbar.css";
import LogoImg2 from "../../assets/images/logo.jpeg";

export default function Navigasi() {
  return (
    <div className="Navbar">
      <div className="Navbar-logo">
        <img src={LogoImg2} alt="logo" className="Logo"/>
    </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="/Categories">Categories</a></li>
        <li><a href="/Services">Services</a></li>
        <li><a href="/Contact">Contact</a></li>
        <div className="Signup">
        <li><a href="#" className="btn btn-light Login" style={{color: "white"}}>Login</a></li>
        </div>
      </ul>
    </div>
  );
}