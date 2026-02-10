import { Link, NavLink } from "react-router-dom";
// import React from 'react';
import pic1 from "../images/logonew.png"
import icn4 from "../images/gov.png"
import icn5 from "../images/bank_.png"
import icn6 from "../images/ino.png"
import icn7 from "../images/device.png"
import icn8 from "../images/bank.png"
import icn9 from "../images/logistic.png"
import icn10 from "../images/autom.png"
import icn11 from "../images/manuf.png"
import icn12 from "../images/hospital.png"
import icn13 from "../images/tar.png"
import manpower from "../images/manpower.png"
import payroll from "../images/payroll.png"
import recurt from "../images/recurt.png"
import staffhire from "../images/staffhire.png"
import securitylogo from "../images/securitylogo.png"
import Housekeeping from "../images/Housekeeping.png"
import Contractlogo from "../images/contractlogo.png"
import Permamentstaffing from "../images/permamentstaffing.png"
// import axios from 'axios';
export default function Header() {
  
      const token = localStorage.getItem('token');

    return (
        <>
        
           
            <section className="top-bar">
  <div className="container-fluid">
    <div className="topbar-wrapper">
      {/* Logo */}
      <div className="logo-wrapper">
       <Link to="/">
        <img src={pic1} alt="Logo" className="top-logo" />
      </Link>
      </div>

     
      <div className="experience-info">
        <h5 className="experience-title text-uppercase"></h5>
        <p className="experience-subtitle">
        
        </p>
      </div>
         <div className="experience-info">
        <h5 className="experience-title text-uppercase"></h5>
        <p className="experience-subtitle">
        
        </p>
      </div>
      <div className="stat-box" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <i
          className="fas fa-award icon-style"
          style={{ color: "#FFB300", fontSize: "34px" }}
        ></i>
        <p className="font-weight-bold" style={{ margin: 0 }}>15+ Years of Experience</p>
      </div>
    </div>
  </div>
</section>

            <section style={{ backgroundColor: '#1e2a3a' }} className='sticky-top'>
    <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className="navbar-toggler-icon " /> */}
                <i className="fas fa-bars text-white"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active vv">
                        <a className="nav-link text-left text-dark text-uppercase" style={{ paddingLeft: "20px",fontWeight: "600" }} href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-left text-dark text-uppercase" style={{ paddingLeft: "20px",fontWeight: "600" }} href="/about">About</a>
                    </li>
                    <li className="nav-item mega-menu">
  <a className="nav-link text-left text-white text-uppercase" style={{ paddingLeft: "20px",fontWeight: "600" }}  href="#">Our Services</a>
  <div className="mega-menu-content">
     <div className="service-box">
      <a style={{color:"#14212B", textDecoration:"none"}} href="/manpower"><img src={manpower} alt="Manpower Outsourcing" />
       <p>Manpower Outsourcing   </p></a>
    </div>
     <div className="service-box">
        <a style={{color:"#14212B", textDecoration:"none"}} href="/payroll"><img src={payroll} alt="Payroll Services" />
        <p>Payroll Management  </p></a> 
        
    </div>
     <div className="service-box">
      <a style={{color:"#14212B", textDecoration:"none"}} href="/consultancy"><img src={recurt} alt="Recruitment Process Outsourcing" />
      <p>Recruitment Process Outsourcing   </p></a>
    </div>
    <div className="service-box">
      <a style={{color:"#14212B", textDecoration:"none"}} href="/staffing"><img src={staffhire} alt="Staffing" />
       <p>Staff Hiring</p></a>
    </div>

     <div className="service-box">
      <a style={{color:"#14212B", textDecoration:"none"}} href="/itstaff"><img src={securitylogo} alt="IT Staffing" />
       <p>Security Services  </p></a>
      <p></p>
    </div>
   
    <div className="service-box">
      <a style={{color:"#14212B", textDecoration:"none"}} href="/housekeeping"><img src={Housekeeping} alt="Housekeeping" />
      <p>Housekeeping Services  </p></a> 
     
    </div>
     <div className="service-box">
      <a style={{color:"#14212B", textDecoration:"none"}} href="/contractstaffing"><img src={Contractlogo} alt="Housekeeping" />
      <p>Contract Staffing  </p></a> 
     
    </div>
     <div className="service-box">
      <a style={{color:"#14212B", textDecoration:"none"}} href="/permanentstaffing"><img src={Permamentstaffing} alt="Housekeeping" />
      <p>Permanent Staffing</p></a> 
     
    </div>
     <div className="service-box">
      {/* <a style={{color:"#14212B", textDecoration:"none"}} href="/contractstaffing"><img src={Contractlogo} alt="Housekeeping" />
      <p>Contract Staffing  </p></a>  */}
     
    </div>
     <div className="service-box">
      {/* <a style={{color:"#14212B", textDecoration:"none"}} href="/pewrmanentstaffing"><img src={Permamentstaffing} alt="Housekeeping" />
      <p>Permanent Staffing</p></a>  */}
     
    </div>
   
   
   
  </div>
</li>
                    <li className="nav-item mega-menu">
  <a className="nav-link text-left text-white text-uppercase" style={{ paddingLeft: "20px",fontWeight: "600" }}  href="#">Industries</a>
  <div className="mega-menu-content">
    <div className="service-box">
      <a style={{color:"#14212B", textDecoration:"none"}} href="/healthcare"><img src={icn13} alt="Healthcare" />
    
        <p>Healthcare  </p></a> 
    </div>
    <div className="service-box">
      <a style={{color:"#14212B", textDecoration:"none"}} href="/hospitality"><img src={icn12} alt="Hospitality" />

       <p>Hospitality   </p></a>
    </div>
    <div className="service-box">
     <a style={{color:"#14212B", textDecoration:"none"}} href="/manufacturing"> <img src={icn11} alt="Manufacturing" />
       <p>Manufacturing   </p></a>
    </div>
    <div className="service-box">
      <a style={{color:"#14212B", textDecoration:"none"}} href="/automotive"><img src={icn10} alt="Automotive" />
      
       <p>Automotive  </p></a> 

    </div>
    <div className="service-box">
      <a style={{color:"#14212B", textDecoration:"none"}} href="/retail"><img src={icn9} alt="Retail" />
       <p>Retail </p></a>  

    </div>
    <div className="service-box">
      <a style={{color:"#14212B", textDecoration:"none"}} href="/banking"><img src={icn8} alt="Banking & Finance" />
       <p>Banking & Finance   </p></a>

    </div>
    <div className="service-box">
      <a style={{color:"#14212B", textDecoration:"none"}} href="/electronics"><img src={icn7} alt="Electronics" />
       <p>Electronics   </p></a>

    </div>
    <div className="service-box">
      <a style={{color:"#14212B", textDecoration:"none"}} href="/logistics"><img src={icn6} alt="Logistics" />
       <p>Logistics   </p></a>

    </div>
    <div className="service-box">
      <a style={{color:"#14212B", textDecoration:"none"}} href="/educational"><img src={icn5} alt="Educational Institution" />
       <p>Educational Institution   </p></a>

    </div>
    <div className="service-box">
      <a style={{color:"#14212B", textDecoration:"none"}} href="/government"><img src={icn4} alt="Government Sector" />
       <p>Government </p></a>  

    </div>
  </div>
</li>
                    <li className="nav-item">
                        <a className="nav-link text-left text-dark text-uppercase" style={{ paddingLeft: "20px",fontWeight: "600" }} href="/partner">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-left text-dark text-uppercase" style={{ paddingLeft: "20px",fontWeight: "600" }} href="/ourclient">Our Client</a>
                    </li>
                      <li className="nav-item">
                        <a className="nav-link text-left text-dark text-uppercase" style={{ paddingLeft: "20px",fontWeight: "600" }} href="/blog">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-left text-dark text-uppercase" style={{ paddingLeft: "20px",fontWeight: "600" }} href="/contact">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link text-left text-dark text-uppercase" style={{ paddingLeft: "20px",fontWeight: "600" }} href="/jobseekerform">Find Job</a> */}
                        <a className="nav-link text-left text-dark text-uppercase" style={{ paddingLeft: "20px",fontWeight: "600" }} href="/findjob">Find Job</a>
                    </li>
                </ul>
                {/* {!token && (
                    <a className="nav-link text-left" href="/login" style={{ color: "#fff", background: "#e40612", textAlign: "center", borderRadius: "40px", paddingLeft: "10px", fontWeight: "600" }}>Login</a>
                )}
                {token && (
                    <button className="nav-link text-left" onClick={handleLogout} style={{ color: "#fff", background: "#e40612", textAlign: "center", borderRadius: "40px", paddingLeft: "10px", fontWeight: "600" }}>Logout</button>
                )} */}
            </div>
        </nav>
    </div>
</section>
        </>
    )
}