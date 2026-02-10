import App from '../App.css';
// import React,{useState,useEffect} from 'react';
// import axios from 'axios';
import band from "../images/ban1.jpg"
import band2 from "../images/ban2.jpg"

import band3 from "../images/ban3.jpg"
import icn1 from "../images/skills.png"
import icn2 from "../images/cost.png"
import icn3 from "../images/time.png"
import icn5 from "../images/check.png"
import icn4 from "../images/quality.png"

import mob1 from "../images/mob_ban1.jpg"
import mob2 from "../images/mob_ban2.jpg"
import mob3 from "../images/mob_ban3.jpg"
import device from "../images/device.png"

import icn6 from "../images/ino.png"
import left from "../images/left-arrow.png"
import right from "../images/right-arrow.png"
import icn8 from "../images/tar.png"
import icn9 from "../images/logistic.png"
import icn10 from "../images/manuf.png"
import icn11 from "../images/autom.png"
import icn12 from "../images/manub.png"
import icn13 from "../images/hospital.png"
import icn14 from "../images/bank.png"
import icn15 from "../images/gov.png"
import side from "../images/side123.png"
import staffs from "../images/staff.png"
import cleaner from "../images/cleaner.png"
import manpower from "../images/back.png"
import payrole from "../images/payrole.png"
import requrete from "../images/requrete.png"
import security from "../images/security.png"
import timeless from "../images/timeless.png"
import excellence from "../images/exeleance.png"
import modern from "../images/modern.png"


import backgroundImage from '../images/back-3.jpg'




// import ino from "../images/ino.png"
// import targ from "../images/tar.png"
import wtc from "../images/wtc.png"





// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import { IoIosCar, IoMdAperture } from "react-icons/io";
import { PiHeadlightsFill } from "react-icons/pi";
import { MdSlowMotionVideo } from "react-icons/md";
import { GiCuckooClock } from "react-icons/gi";

import { GiShipBow } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";

// import Category from '../components/category/category';
// import RecommendedTest from '../components/category/RecommendedTest';
// import DailyDose from '../components/category/DailyDose';
// import ScheduledWise from '../components/category/sheduledWise';
// import PopularTestSeries from '../components/category/popularTestSeries';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { RiOilFill } from "react-icons/ri";

import { Card } from "reactstrap"
import ContactSection from "./Contactsection"
import col1 from "../images/ClientsLOGO/lg1.jpeg"
import col2 from "../images/ClientsLOGO/lg2.jpg"
import col3 from "../images/ClientsLOGO/lg3.png"
import col4 from "../images/ClientsLOGO/lg4.png"
import col5 from "../images/ClientsLOGO/lg5.png"
import col6 from "../images/ClientsLOGO/lg6.jpg"
import col7 from "../images/ClientsLOGO/lg7.png"
import col8 from "../images/ClientsLOGO/lg8.jpg"


import col9 from "../images/ClientsLOGO/lg8.png"
import col10 from "../images/ClientsLOGO/lg9.jpg"
import col11 from "../images/ClientsLOGO/lg9.png"
import col12 from "../images/ClientsLOGO/lg10.webp"
import col13 from "../images/ClientsLOGO/lg11.png"
import col14 from "../images/ClientsLOGO/lg12.jpg"
import col15 from "../images/ClientsLOGO/lg13.png"
import col16 from "../images/ClientsLOGO/lg14.jpg"
import col17 from "../images/ClientsLOGO/lg15.png"
import col18 from "../images/ClientsLOGO/lg16.jpg"
import col19 from "../images/ClientsLOGO/lg17.jpg"
import col20 from "../images/ClientsLOGO/lg18.jpeg"

import col21 from "../images/ClientsLOGO/lg19.jpg"
import col22 from "../images/ClientsLOGO/lg20.png"
import col23 from "../images/ClientsLOGO/lg21.png"
import col24 from "../images/ClientsLOGO/lg22.jpg"
import col25 from "../images/ClientsLOGO/lg23.jpeg"
import col26 from "../images/ClientsLOGO/lg24.png"
import col27 from "../images/ClientsLOGO/lg25.jpeg"
import col28 from "../images/ClientsLOGO/lg26.png"
import col29 from "../images/ClientsLOGO/lg27.png"

import col30 from "../images/ClientsLOGO/lg28.png"
import col31 from "../images/ClientsLOGO/lg29.png"
import col32 from "../images/ClientsLOGO/lg30.png"
import col33 from "../images/ClientsLOGO/lg31.png"
import col34 from "../images/ClientsLOGO/lg32.png"
import col35 from "../images/ClientsLOGO/lg33.png"




import JobPostSection from "./JobPostSection"
import { useEffect, useState } from "react"
import blogData from "./Blogdata.js"
import { Link, useNavigate } from 'react-router-dom'
import Marquee from 'react-fast-marquee';
import HomeJobPostCarousel from './HomeJobPostCarousel.jsx';
import Swal from 'sweetalert2';
import { Modal } from 'react-bootstrap';


export default function Home() {
  const clients = [
  { id: 1, img: col1, alt: 'Client 1' },
  { id: 2, img: col2, alt: 'Client 2' }, 
  { id: 3, img: col3, alt: 'Client 3' },
  { id: 4, img: col4, alt: 'Client 4' },
  { id: 5, img: col5, alt: 'Client 5' },
  { id: 6, img: col6, alt: 'Client 6' },
  { id: 7, img: col7, alt: 'Client 7' },
  { id: 8, img: col8, alt: 'Client 8' },
  { id: 9, img: col9, alt: 'Client 9' },
  { id: 10, img: col10, alt: 'Client 10' },
  { id: 11, img: col11, alt: 'Client 11' },
  { id: 12, img: col12, alt: 'Client 12' },
  { id: 13, img: col13, alt: 'Client 13' },
  { id: 14, img: col14, alt: 'Client 14' },
  { id: 15, img: col15, alt: 'Client 15' },
  { id: 16, img: col16, alt: 'Client 16' },
  { id: 17, img: col17, alt: 'Client 17' },
  { id: 18, img: col18, alt: 'Client 18' },
  { id: 19, img: col19, alt: 'Client 19' },
  { id: 20, img: col20, alt: 'Client 20' },
  { id: 21, img: col21, alt: 'Client 21' },
  { id: 22, img: col22, alt: 'Client 22' },
  { id: 23, img: col23, alt: 'Client 23' },
  { id: 24, img: col24, alt: 'Client 24' },
  { id: 25, img: col25, alt: 'Client 25' },
  { id: 26, img: col26, alt: 'Client 26' },
  { id: 27, img: col27, alt: 'Client 27' },
  { id: 28, img: col28, alt: 'Client 28' },
  { id: 29, img: col29, alt: 'Client 29' },
  { id: 30, img: col30, alt: 'Client 30' },
  { id: 31, img: col31, alt: 'Client 31' },
  { id: 32, img: col32, alt: 'Client 32' },
  { id: 33, img: col33, alt: 'Client 33' },
  { id: 34, img: col34, alt: 'Client 34' },
  { id: 35, img: col35, alt: 'Client 35' },
];


  const chunkArray = (arr, size) =>
    arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);

  const clientChunks = chunkArray(clients, 4);

  const [showImagePart, setShowImagePart] = useState(false);
  const [modalName, setModalName] = useState('');
const [modalMobile, setModalMobile] = useState('');
const [modalEmail, setModalEmail] = useState('');
const [modalMessage, setModalMessage] = useState('');
const [modalErrors, setModalErrors] = useState({});
 const [mobile, setMobile] = useState('');
 const navigate = useNavigate();

 const [showModal, setShowModal] = useState(false);

 const handleOpenModal = () => {
  const carousel = document.querySelector('#carouselExampleControls');
  if (carousel && window.$) {
    window.$(carousel).carousel('pause'); // Use only if you're using jQuery Bootstrap carousel
  }
  setShowModal(true);
};

const handleCloseModal = () => {
  const carousel = document.querySelector('#carouselExampleControls');
  if (carousel && window.$) {
    const $carousel = window.$(carousel);
    if (!$carousel.hasClass('carousel')) {
      $carousel.carousel(); // Initialize carousel if not already
    }
    $carousel.carousel('cycle'); // Start cycling
  }
  setShowModal(false);
};

const handleSubmitForm = async (e) => {
  if (e) e.preventDefault();
  

  const newErrors = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!modalName.trim()) newErrors.name = "Full Name is required.";
  if (!modalMobile.trim()) newErrors.mobile = "Phone Number is required.";
  else if (modalMobile.length !== 10) newErrors.mobile = "Phone must be exactly 10 digits.";
  if (!modalEmail.trim()) newErrors.email = "Email is required.";
  else if (!emailRegex.test(modalEmail)) newErrors.email = "Enter valid email.";
  if (!modalMessage.trim()) newErrors.message = "Message is required.";

  setModalErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
     const formData = new FormData();
      formData.append('name', modalName);
    formData.append('mobile', modalMobile);
    formData.append('email', modalEmail);
    formData.append('message', modalMessage);
    
    try {
      const response = await fetch('https://admin.vaishnavigroup.in/api/customer/addquery', {
        method: 'POST',
     
        body: formData, // ✅ Convert object to JSON string
      });
      console.log(response);

      if (response.ok) {
        Swal.fire('Success!', 'Thank you! Our representative will reach out to you shortly', 'success');
        setModalName('');
        setModalMobile('');
        setModalEmail('');
        setModalMessage('');
        setModalErrors({});
        handleCloseModal(); // if needed
      } else {
        Swal.fire('Error!', 'Something went wrong.', 'error');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire('Error!', 'Error while submitting the form!', 'error');
    }
  }
};




  return (
    <>
      <Header />
     <section className='desktop'>
      <section className='carro'>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="3000">
          <div className="carousel-inner">
            {/* First Banner with Button */}
            <div className="carousel-item active position-relative">
              <img src={band} className="d-block w-100" alt="band1.jpg" />
              <button
  type="button"
  className="blink-button"
  onClick={handleOpenModal}
  style={{
    position: 'absolute',
    bottom: '35%',
    left: '10%',
    zIndex: 10,
    display: 'inline-block',
    padding: '12px 24px',
    backgroundColor: '#FFB300',
    color: '#000',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    userSelect: 'none',
  }}
>
  Get in touch with us
</button>
            </div>

            {/* Other Banners */}
            <div className="carousel-item">
              <img src={band2} className="d-block w-100" alt="band3.jpg" />
               <button
  type="button"
  className="blink-button"
  onClick={handleOpenModal}
  style={{
    position: 'absolute',
    bottom: '40%',
    left: '10%',
    zIndex: 10,
    display: 'inline-block',
    padding: '12px 24px',
    backgroundColor: '#FFB300',
    color: '#000',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    userSelect: 'none',
  }}
>
  Get in touch with us
</button>
            </div>
            <div className="carousel-item">
              <img src={band3} className="d-block w-100" alt="band2.jpg" />
               <button
  type="button"
  className="blink-button"
  onClick={handleOpenModal}
  style={{
    position: 'absolute',
    bottom: '35%',
    left: '10%',
    zIndex: 10,
    display: 'inline-block',
    padding: '12px 24px',
    backgroundColor: '#FFB300',
    color: '#000',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    userSelect: 'none',
  }}
>
  Get in touch with us
</button>
            </div>
          </div>

          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
            <img src={left} alt="left-arrow" style={{ marginRight: "auto" }} />
            <span className="sr-only">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
            <img src={right} alt="right-arrow" style={{ marginLeft: "auto" }} />
            <span className="sr-only">Next</span>
          </button>
        </div>
      </section>
      
    </section>

      <section className='mobile'>
        <section className='carro'>
          <div id="carouselExampleControlssaiiias" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
              <img src={mob1} className="d-block w-100" alt="band3.jpg" />
                <button
  type="button"
  className="blink-button"
  onClick={handleOpenModal}
  style={{
    position: 'absolute',
    bottom: '55%',
    left: '10%',
    zIndex: 10,
    display: 'inline-block',
     padding: '5px 10px',
    backgroundColor: '#FFB300',
    color: '#000',
     fontSize: '12px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    userSelect: 'none',
  }}
>
  Get in touch with us
</button>
              </div>
              <div className="carousel-item">
              <img src={mob2} className="d-block w-100" alt="band1.jpg" />
            <button
  type="button"
  className="blink-button"
  onClick={handleOpenModal}
  style={{
    position: 'absolute',
    bottom: '45%',
    left: '10%',
    zIndex: 10,
    display: 'inline-block',
     padding: '5px 10px',
    backgroundColor: '#FFB300',
    color: '#000',
     fontSize: '12px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    userSelect: 'none',
  }}
>
  Get in touch with us
</button>
              </div>
              <div className="carousel-item">
              <img src={mob3} className="d-block w-100" alt="band2.jpg" />
             <button
  type="button"
  className="blink-button"
  onClick={handleOpenModal}
  style={{
    position: 'absolute',
    bottom: '56%',
    left: '15%',
    zIndex: 10,
    display: 'inline-block',
     padding: '5px 10px',
    backgroundColor: '#FFB300',
    color: '#000',
     fontSize: '12px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    userSelect: 'none',
  }}
>
  Get in touch with us
</button>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleControlssaiiias" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleControlssaiiias" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </button>
          </div>
        </section>
      </section>

       {showModal && (
  <div
    className="modal-overlay"
    onClick={handleCloseModal}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    }}
  >
    <div
      className="contact-container bg-white rounded p-4"
      onClick={(e) => e.stopPropagation()}
      style={{
        width: '90%',
        maxWidth: '600px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        padding: '30px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
        overflowY: 'auto',
        maxHeight: '90vh',
      }}
    >
      <div className="row">
        <div className="col-12 contact-right">
          <h3>Reach Out to Us</h3>
          <p>
            Send us a message today to talk about your staffing requirements and learn how we can support your hiring goals.
          </p>

          {/* Validation States */}
          <form className="contact-form" onSubmit={handleSubmitForm}>
            <input
              type="text"
              placeholder="Full Name*"
              value={modalName}
              onChange={(e) => setModalName(e.target.value.replace(/[0-9]/g, ''))}
              required
            />
            {modalErrors.name && <small style={{ color: 'red' }}>{modalErrors.name}</small>}

            <input
              type="tel"
              maxLength="10"
              placeholder="Phone Number*"
              value={modalMobile}
              onChange={(e) => setModalMobile(e.target.value.replace(/[^0-9]/g, ''))}
              required
            />
            {modalErrors.mobile && <small style={{ color: 'red' }}>{modalErrors.mobile}</small>}

            <input
              type="email"
              placeholder="Email address*"

              value={modalEmail}
              onChange={(e) => setModalEmail(e.target.value)}
              required
            />
            {modalErrors.email && <small style={{ color: 'red' }}>{modalErrors.email}</small>}

            <textarea
              placeholder="Message*"
              value={modalMessage}
              onChange={(e) => setModalMessage(e.target.value)}
              required
            ></textarea>
            {modalErrors.message && <small style={{ color: 'red' }}>{modalErrors.message}</small>}

            <div className='row'>
              <div className="col-md-6 col-6">
                <button type="submit" className='form-control'>SUBMIT</button>
              </div>
              <div className="col-md-6 col-6">
                <button
                  onClick={handleCloseModal}
                  style={{
                    backgroundColor: '#f00',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                  className='form-control'
                >
                  CLOSE
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)}


<section className="stats-section py-5">
      <div className="container">
        <div className="row text-center">

          <div className="col-md-3 col-6 mb-4 mb-md-0">
            <div className="stat-box p-4">
              <i className="fas fa-users fa-3x icon-style" style={{color:"#FFB300"}}></i>
              <h3 className="mt-3 font-weight-bold">350+</h3>
              <p>Happy Client</p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-4 mb-md-0">
            <div className="stat-box p-4">
              <i className="fas fa-user-tie fa-3x icon-style " style={{color:"#FFB300"}}></i>
              <h3 className="mt-3 font-weight-bold">4000+</h3>
              <p>Manpower</p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-4 mb-md-0">
            <div className="stat-box p-4">
              <i className="fas fa-award fa-3x icon-style " style={{color:"#FFB300"}}></i>
              <h3 className="mt-3 font-weight-bold">15+</h3>
              <p>Years of Experience</p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-4 mb-md-0">
            <div className="stat-box p-4">
              <i className="fas fa-clock fa-3x icon-style " style={{color:"#FFB300"}}></i>
              <h3 className="mt-3 font-weight-bold">24/7</h3>
              <p>Support</p>
            </div>
          </div>

        </div>
      </div>
    </section>


  
      <section className='welcome'>
        <div className='container' >
     
          <div className='row justify-content-center pt-4'>
            <div className="col-md-12 col-12 text-cenrter">
              <p className="subHeading ">Why Choose Us ?</p>
               <h2 className="subFont ">  Transforming Ideas<span style={{ color: '#1565C0' }}> into Digital Success</span></h2>
            </div>
             <div className="col-md-12 col-12 text-center">
              <p className="top-para"> At Bodhivantage Technology Pvt. Ltd., we focus on quality, trust, and long-term partnerships. We don’t just build websites and software — we build reliable digital solutions that support your business growth. With a strong foundation in technology and years of industry experience, our team understands both technical excellence and real business needs. Every project we take is handled with dedication, transparency, and professional responsibility.</p>
              <p>We believe in working closely with our clients, understanding their vision, and transforming their ideas into practical, scalable, and future-ready digital products. Our goal is not just to complete projects, but to create solutions that deliver long-term value.
              From planning to deployment and ongoing support, we ensure that every step meets high-quality standards and client expectations.</p>
             
              
            </div>
            
            
          </div>
        </div>
      </section>

      <section className='welcome'>
        <div className='container' >
       
          <div className='row justify-content-center '>
            <div className='col-md-3 col-6'>
             <div className="row ft-section">
              <div className="col-md-12 text-center">
                        <img src={icn1} className=" icns" alt="band3.jpg" />
                      </div>
                        <div className="col-md-12 mt-3 ">
                          <h5 style={{fontWeight:900,textAlign:"center",fontSize:"17px", color:"#424242"}} className="text-uppercase">Experienced & Skilled Team</h5>
                           <p className="parag"> Our company is led by experienced partners and supported by a technically strong team that understands real business requirements.</p>
                        </div>
                        
                  </div>
            </div>
            <div className='col-md-3 col-6'>
                <div className="row ft-section">
              <div className="col-md-12 text-center">
                        <img src={icn2} className=" icns" alt="band3.jpg" />
                      </div>
                        <div className="col-md-12 mt-3 ">
                          <h5 style={{fontWeight:900,textAlign:"center",fontSize:"17px",color:"#424242"}} className="text-uppercase">Client-Centric Approach</h5>
                          <p className="parag"> We listen carefully to your needs and provide customized solutions that match your goals and budget.</p>
                        </div>
                        
                  </div>
          
            </div>
            <div className='col-md-3 col-6'>
                <div className="row ft-section">
              <div className="col-md-12 text-center">
                        <img src={icn3} className=" icns" alt="band3.jpg" />
                      </div>
                        <div className="col-md-12 mt-3 ">
                          <h5 style={{fontWeight:900,textAlign:"center",fontSize:"17px",color:"#424242"}} className="text-uppercase">Quality-Focused Development</h5>
                          <p className="parag">We follow best coding practices and testing standards to ensure secure, fast, and reliable products.</p>
                        </div>
                        
                  </div>
            
            </div>
            <div className='col-md-3 col-6'>
                <div className="row ft-section">
              <div className="col-md-12 text-center">
                        <img src={icn4} className=" icns" alt="band3.jpg" />
                      </div>
                        <div className="col-md-12 mt-3 ">
                          <h5 style={{fontWeight:900,textAlign:"center",fontSize:"17px",color:"#424242"}} className="text-uppercase">Transparent Communication</h5>
                           <p className="parag">We believe in clear and honest communication at every stage of the project — no hidden costs, no confusion.</p>
                        </div>
                        
                  </div>
            
            </div>
            
            
          </div>
        </div>
      </section>


       <section className='welcome'>
        <div className='container' >
       
          <div className='row justify-content-center '>
            <div className='col-md-6 col-12 mt-5'>
              <img src={side}  alt="band3.jpg" className="img-fluid"  />
            </div>
            <div className='col-md-6 col-12'>
                <div className="row ft-section">
              <div className="col-md-12 text-center">
                        <p className="subHeading ">🏢 ABOUT US</p>
                       
                          <h2 className="subFont ">Technology <span style={{ color: '#1565C0' }}>  You Can Trust</span></h2>
                      </div> 
                        <div className="col-md-12 mt-3 ">
                          
                           <p className="top-para">Bodhivantage Technology Pvt. Ltd. is an IT solutions company founded by experienced partners with strong backgrounds in software and web development.

                            With professional industry experience, we provide reliable, scalable, and customized technology solutions to businesses of all sizes. Our focus is on building quality products that support long-term business growth.

                            We believe in transparency, commitment, and delivering real value to our clients.</p> 

                            <p className="top-para">Bodhivantage Technology is led by a group of dedicated partners and supported by skilled developers and designers.

                            Our team works collaboratively to deliver innovative and dependable solutions, ensuring every project meets high-quality standards...  <a href="/about" style={{textDecoration:"none"}}><span style={{color:"#FFB300",fontWeight:900}}>Read More</span></a></p>
                        </div>
                        <div className="col-md-6 mt-3">
                          <div className="row">
                            <div className="col-md-1 col-1">   <img src={icn5} style={{height:"30%"}} alt="band3.jpg" /></div>
                            <div className="col-md-10 col-11" style={{fontWeight:600}}><p>Premium Services</p></div>
                             <div className="col-md-1 col-1">   <img src={icn5} style={{height:"30%"}} alt="band3.jpg" /></div>
                            <div className="col-md-10 col-11" style={{fontWeight:600}}><p>Elite Team of Experts</p></div>
                          </div>
                        </div>
                        <div className="col-md-6 mt-3">
                          <div className="row">
                            <div className="col-md-1 col-1">   <img src={icn5} style={{height:"30%"}} alt="band3.jpg" /></div>
                            <div className="col-md-10 col-11" style={{fontWeight:600}}><p>+7 years Trained Experts</p></div>
                             <div className="col-md-1 col-1">   <img src={icn5} style={{height:"30%"}} alt="band3.jpg" /></div>
                            <div className="col-md-10 col-11" style={{fontWeight:600}}><p>24/7 Timely Assistance</p></div>
                          </div>
                        </div>
                       
                        
                        
                  </div>
          
            </div>
            
            
            
          </div>
        </div>
      </section>
      <section className='vcvc'>
        <div className='container'>
          <div className='row'>
            

            <div className="col-md-12 col-12 mb-5">
                 
                  <h2 className="subFont ">OUR <span style={{ color: '#1565C0' }}>CORE Services</span></h2>
                  <p className="top-para" style={{textAlign:"center"}}>At Bodhivantage Technology Pvt. Ltd., we provide reliable, scalable, and customized IT solutions designed to support long-term business success. We focus on understanding each client’s unique requirements and delivering solutions that align with their goals and vision. Our team follows industry best practices to ensure high performance, security, and future readiness. With a commitment to quality and transparency, we build digital systems that grow with your business and create lasting value.</p>
            </div>

            <div className="col-md-4 d-flex align-items-center">
                <div className="card" style={{borderRadius:"20px 20px 0px 0px"}}>
                 <div className="row no-gutters">
                  {/* <div className="col-md-5">
                   <img src={manpower}   style={{ objectFit: "contain", height: "100%", maxHeight: "100%", marginLeft:"5px" }}   className="img-fluid w-100"   alt="band3.jpg" />
                  </div> */}
                  <div className="col-md-12">
                    <div className="card-body">
                      <h5 className="card-title" style={{color:"#1565C0"}}>🌐 Website Development</h5>
                      <p className=" parag">We design and develop high-quality, responsive, and user-friendly websites that represent your brand professionally and perform smoothly across all devices.</p>
                      <ul>
                        <li>Corporate & Business Websites</li>
                        <li>Portfolio Websites</li>
                        <li>E-Commerce Platforms</li>
                        <li>Custom Web Applications</li>
                        <li>Website Redesign & Upgrade</li>
                      </ul>
                     
                    </div>
                    
                  </div>
                  <div className="col-md-12">
                    <div className="card-footer " style={{paddingTop: "0px",background:"#1565C0"}}></div>
                  </div>
                 </div>

                </div>
            </div>


            <div className="col-md-4 d-flex align-items-center">
                <div className="card" style={{borderRadius:"20px 20px 0px 0px"}}>
                 <div className="row no-gutters">
                  {/* <div className="col-md-5">
                   <img src={payrole}   style={{ objectFit: "contain", height: "100%", maxHeight: "100%",marginLeft:"5px"  }}   className="img-fluid w-100"   alt="band3.jpg" />
                  </div> */}
                 <div className="col-md-12">
                    <div className="card-body">
                      <h5 className="card-title" style={{color:"#1565C0"}}>🖥️ Custom Software Development</h5>
                      <p className=" parag">We build secure and efficient software solutions tailored to your business processes and operational needs.</p>
                      <ul>
                        <li>Business Management Systems</li>
                        <li>CRM & ERP Solutions</li>
                        <li>Workflow Automation</li>
                        <li>Custom Dashboards</li>
                        <li>Data Management Systems</li>
                      </ul>
                     
                    </div>
                    
                  </div>
                  <div className="col-md-12">
                    <div className="card-footer " style={{paddingTop: "0px",background:"#1565C0"}}></div>
                  </div>
                 </div>

                </div>
            </div>
            <div className="col-md-4 d-flex align-items-center mt-3">
                <div className="card" style={{borderRadius:"20px 20px 0px 0px"}}>
                 <div className="row no-gutters">
                  {/* <div className="col-md-5">
                   <img src={security}   style={{ objectFit: "contain", height: "100%", maxHeight: "100%",marginLeft:"5px" }}   className="img-fluid w-100"   alt="band3.jpg" />
                  </div> */}
                  <div className="col-md-12">
                    <div className="card-body">
                      <h5 className="card-title" style={{color:"#1565C0"}}>🔧 Maintenance & Technical Support</h5>
                      <p className=" parag">We ensure your digital systems remain secure, updated, and optimized through continuous support services.</p>
                      <ul>
                        <li>Website & Software Maintenance</li>
                        <li>Security Updates</li>
                        <li>Bug Fixing</li>
                        <li>Performance Monitoring</li>
                        <li>Technical Assistance</li>
                      </ul>
                     
                    </div>
                    
                  </div>
                  <div className="col-md-12">
                    <div className="card-footer " style={{paddingTop: "0px",background:"#1565C0"}}></div>
                  </div>
                 </div>

                </div>
            </div>

              <div className="col-md-4 d-flex align-items-center">
                <div className="card" style={{borderRadius:"20px 20px 0px 0px"}}>
                 <div className="row no-gutters">
                  {/* <div className="col-md-5">
                   <img src={requrete}   style={{ objectFit: "contain", height: "100%", maxHeight: "100%",marginLeft:"5px" }}   className="img-fluid w-100"   alt="band3.jpg" />
                  </div> */}
                  <div className="col-md-12">
                    <div className="card-body">
                      <h5 className="card-title" style={{color:"#1565C0"}}>🎨 UI/UX Design</h5>
                      <p className=" parag">We create modern, clean, and intuitive designs that enhance user experience and improve customer engagement.</p>
                      <ul>
                        <li>Responsive Layout Design</li>
                        <li>Mobile-Friendly Interfaces</li>
                        <li>Wireframing & Prototyping</li>
                        <li>Brand-Oriented Design</li>
                      </ul>
                     
                    </div>
                    
                  </div>
                  <div className="col-md-12">
                    <div className="card-footer " style={{paddingTop: "0px",background:"#1565C0"}}></div>
                  </div>
                 </div>

                </div>
            </div>


            <div className="col-md-4 d-flex align-items-center mt-3">
                <div className="card" style={{borderRadius:"20px 20px 0px 0px"}}>
                 <div className="row no-gutters">
                  {/* <div className="col-md-5">
                   <img src={staffs}   style={{ objectFit: "contain", height: "100%", maxHeight: "100%",marginLeft:"5px" }}   className="img-fluid w-100"   alt="band3.jpg" />
                  </div> */}
                  <div className="col-md-12">
                    <div className="card-body">
                      <h5 className="card-title" style={{color:"#1565C0"}}>📱 Web & Application Solutions</h5>
                      <p className=" parag">We develop scalable web and mobile applications that help businesses operate efficiently and serve customers better.</p>
                      <ul>
                        <li>Web-Based Applications</li>
                        <li>Android & Hybrid Apps</li>
                        <li>API Development & Integration</li>
                        <li>Cloud-Based Solutions</li>
                      </ul>
                     
                    </div>
                    
                  </div>
                  <div className="col-md-12">
                     <div className="card-footer " style={{paddingTop: "0px",background:"#1565C0"}}></div>
                  </div>
                 </div>

                </div>
            </div>

            

             


           

            
             

                 <div className="col-md-4 d-flex align-items-center mt-3">
                <div className="card" style={{borderRadius:"20px 20px 0px 0px"}}>
                 <div className="row no-gutters">
                  {/* <div className="col-md-5">
                   <img src={cleaner}   style={{ objectFit: "contain", height: "100%", maxHeight: "100%",marginLeft:"5px" }}   className="img-fluid w-100"   alt="band3.jpg" />
                  </div> */}
                  <div className="col-md-12">
                    <div className="card-body">
                      <h5 className="card-title" style={{color:"#1565C0"}}>⚙️ Technology Consulting</h5>
                      <p className=" parag">We guide businesses in choosing the right technology solutions for better performance and future growth.</p>
                      <ul>
                        <li>System Analysis</li>
                        <li>Technology Planning</li>
                        <li>Project Consultation</li>
                        <li>Digital Transformation Support</li>
                      </ul>
                     
                    </div>
                    
                  </div>
                  <div className="col-md-12">
                    <div className="card-footer " style={{paddingTop: "0px",background:"#1565C0"}}></div>
                  </div>
                 </div>

                </div>
            </div>

            

           


          </div>
        </div>
        
      </section>

{/*  <Category /> */}

      {/* <DailyDose/> */}

      <section className='iimm'>
        <div className='container'>
       <div className="row main-content">
       
           <div className="col-md-12 col-12 mb-5">
                
                  <h2 className="subFont ">INDUSTRIES<span style={{ color: '#1565C0' }}> WE PARTNER WITH</span></h2>
                  <p className="top-para" style={{textAlign:"center"}}>Our customized manpower solutions are crafted to meet the specific staffing needs of industries like Healthcare, Finance (with a focus on regulatory adherence), and Logistics, including supply chain efficiency improvements.</p>
            </div>
                <div className="col-lg-4 col-md-6 col-6 outer-div">
                    <div className="image-part">
                        <div className="img-circle" style={{textAlign:"center"}}>   <img src={icn6}  className="icon-part img-fluid" alt="Banking &amp; Finance Icon" /></div>
                        <p className="title-heading" style={{fontWeight:900,textAlign:"center",color: "#424242"}}> Physical  &amp; Online Retail</p>
                        <p style={{textAlign:"center"}}>Professional retail staffing focused on improving shopper satisfaction and sales performance.</p>
                    </div>

                </div>

                <div className="col-lg-4 col-md-6 col-6 outer-div right-border">
                    <div className="image-part">
                        <div className="img-circle" style={{textAlign:"center"}}> <img src={device}   className="icon-part img-fluid" alt="Banking &amp; Finance Icon"/></div>
                        <p className="title-heading" style={{fontWeight:900,textAlign:"center",color: "#424242"}}>Gadgets & Devices</p>
                        <p style={{textAlign:"center"}}>Delivering skilled manpower outsourcing solutions that promote innovation and boost productivity in the electronics industry.</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-6 outer-div " id="box-3">
                    <div className="image-part">
                        <div className="img-circle" style={{textAlign:"center"}}> <img src={icn8}   className="icon-part img-fluid" alt="Banking &amp; Finance Icon"/></div>
                        <p className="title-heading" style={{fontWeight:900,textAlign:"center",color: "#424242"}}>Healthcare</p>
                        <p style={{textAlign:"center"}}>Experienced healthcare professionals committed to superior patient care and streamlined operations.</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-6 outer-div right-border">
                    <div className="image-part">
                        <div className="img-circle" style={{textAlign:"center"}}><img src={icn9}   className="icon-part img-fluid" alt="Banking &amp; Finance Icon"/></div>
                        <p className="title-heading" style={{fontWeight:900,textAlign:"center",color: "#424242"}}>Logistics & Warehousing</p>
                        <p style={{textAlign:"center"}}> Offering skilled logistics professionals to optimize supply chain management and speed up deliveries.</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-6 outer-div">
                    <div className="image-part">
                        <div className="img-circle" style={{textAlign:"center"}}> <img src={icn10} className="icon-part img-fluid" alt="Banking &amp; Finance Icon"/></div>
                        <p className="title-heading" style={{fontWeight:900,textAlign:"center",color: "#424242"}}>Manufacturing & Assembly</p>
                        <p style={{textAlign:"center"}}>Specialized outsourcing services designed to optimize manufacturing processes and operational efficiency.</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-6 outer-div">
                    <div className="image-part">
                        <div className="img-circle" style={{textAlign:"center"}}> <img  src={icn11}  className="icon-part img-fluid" alt="Banking &amp; Finance Icon"/></div>
                        <p className="title-heading" style={{fontWeight:900,textAlign:"center",color: "#424242"}}>Automobile</p>
                        <p style={{textAlign:"center"}}>Connecting the automotive industry with top talent for breakthrough innovation and superior manufacturing performance.</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-6 outer-div">
                    <div className="image-part">
                        <div className="img-circle" style={{textAlign:"center"}}> <img  src={icn12}  className="icon-part img-fluid" alt="Banking &amp; Finance Icon"/></div>
                        <p className="title-heading" style={{fontWeight:900,textAlign:"center",color: "#424242"}}>Production</p>
                        <p style={{textAlign:"center"}}> Proficient manufacturing manpower dedicated to improving capacity and delivering consistent quality.</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-6 outer-div right-border">
                    <div className="image-part">
                        <div className="img-circle" style={{textAlign:"center"}}> <img  src={icn13}  className="icon-part img-fluid" alt="Banking &amp; Finance Icon"/></div>
                        <p className="title-heading" style={{fontWeight:900,textAlign:"center",color: "#424242"}}>Hospitality Services</p>
                        <p style={{textAlign:"center"}}>Providing outstanding service professionals to enhance guest experiences.</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-6 outer-div d-none d-lg-block">
                    <div className="image-part">
                        <div className="img-circle" style={{textAlign:"center"}}> <img  src={icn14}  className="icon-part img-fluid" alt="Banking &amp; Finance Icon"/></div>
                        <p className="title-heading " style={{fontWeight:900,textAlign:"center",color: "#424242"}}>Financial &amp; Services</p>
                        <p style={{textAlign:"center"}}>Elite financial professionals fueling growth, regulatory compliance, and innovation in finance.</p>
                    </div>
                </div>
               {showImagePart && (
                    <div className="col-lg-4 col-md-6 col-6 outer-div"> {/* Removed d-none d-lg-block */}
                      <div className="image-part">
                        <div className="img-circle" style={{ textAlign: "center" }}>
                          <img src={icn15} className="icon-part img-fluid" alt="Government Services Icon" />
                        </div>
                        <p className="title-heading" style={{ fontWeight: 900, textAlign: "center", color: "#424242" }}>
                          Government Services
                        </p>
                        <p style={{ textAlign: "center" }}>
                          Dedicated public servants driving transparency, community well-being, and effective governance.
                        </p>
                      </div>
                    </div>
                  )}
                
                 <div className="col-lg-12 col-md-12 col-12 text-center">


                <button className="btn btn-sm btn-secondary hover-border-11"
                  onClick={() => setShowImagePart(prev => !prev)}
                >
                  <span>{showImagePart ? 'Hide' : 'View All'} &rsaquo;</span>
                </button>
                 </div>
                 

               

            </div>
        </div>
      </section>
      <HomeJobPostCarousel/>
        {/* <JobPostSection/> */}
    

  

     
       


          <section className='iimm' style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"}} >
      <div className='container'>
        <div className='row justify-content-center'>
          <div className="col-md-12 text-center">
            <MdSlowMotionVideo size={180} className="text-warning"/>
          </div>
        </div>
      </div>
    </section>


      <section className='aza'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h3 style={{color:"#1565C0"}}>Who we are </h3>
             
              <hr style={{ border: "5px solid #FFB300", width: "20%", float: "left", margin: "0px 0px 5px 0px" }} /><br></br>
              <p style={{ textAlign: "justify" }}>At Vaishnavi Consultancy Services, we are more than just a service provider — we are a trusted partner in workforce excellence. Since our inception in 2010, we have been at the forefront of manpower outsourcing, payroll management, and facility support services across India.

Operating across 8 states, we cater to a wide spectrum of industries including healthcare, education, infrastructure, aviation, logistics, manufacturing, hospitality, and corporate sectors. Our client base spans government departments, public sector undertakings, and private enterprises, all of whom rely on us for dependable, compliant, and efficient staffing solutions.

What sets us apart is our commitment to delivering tailored workforce solutions that align with our clients’ strategic goals. With a focus on quality, compliance, and operational efficiency, we enable organizations to enhance productivity and remain focused on their core mission.

Driven by integrity, powered by expertise, and guided by a decade of proven experience — we are Vaishnavi Consultancy Services.</p>
              
            </div>
            <div className='col-md-6'>
              <div className='row justify-content-start'>
                <div className='col-md-6 col-6 pt-3 pb-2 content'>
                  <div className='bh1'>
                    <div className='row justify-content-start pl-3'>
                      <div className='col-md-4 col-12'>
                        <img className='pb-2' src={modern} style={{ width: "100%" }} alt='sarkariexam' />
                      </div>
                      <div className='col-md-8 col-12' style={{ paddingLeft: "0px" }}>
                        <h5 className='text-left pt-3 text-uppercase'>Modernization</h5>
                      </div>
                      <div className='col-md-12 col-12'>
                        <p  style={{textAlign:"left"}}>We embrace innovative workforce strategies and technologies to streamline operations and deliver smarter staffing and facility management solutions.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-6 col-6 pt-3 pb-2 content'>
                  <div className='bh2'>
                    <div className='row justify-content-start pl-3'>
                      <div className='col-md-4 col-12'>
                        <img className='pb-2' src={excellence} style={{ width: "100%" }} alt='sarkariexam' />
                      </div>
                      <div className='col-md-8 col-12' style={{ paddingLeft: "0px" }}>
                        <h5 className='text-left pt-3 text-uppercase'>Excellence</h5>
                      </div>
                      <div className='col-md-12 col-12'>
                        <p  style={{textAlign:"left"}}>We uphold the highest standards in service delivery, ensuring reliable, compliant, and well-trained personnel that meet our clients’ exacting expectations.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-6 col-6 pt-3 pb-2 content'>
                  <div className='bh2'>
                    <div className='row justify-content-start pl-3'>
                      <div className='col-md-4 col-12'>
                        <img className='pb-2' src={timeless} style={{ width: "100%" }} alt='sarkariexam' />
                      </div>
                      <div className='col-md-8 col-12' style={{ paddingLeft: "0px" }}>
                        
                        <h5 className='text-left pt-3 text-uppercase' style={{fontSize:"20px"}}>Timeliness</h5>
                      </div>
                      <div className='col-md-12 col-12'>
                        <p  style={{textAlign:"left"}}>Our agile processes and pan-India presence allow us to respond quickly to staffing needs, ensuring timely deployment and uninterrupted operations. </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-6 col-6 pt-3 pb-2 content'>
                  <div className='bh1'>
                    <div className='row justify-content-start pl-3'>
                      <div className='col-md-4 col-12'>
                      {/* <img src={img18} style={{ width: "100%" }} alt='sarkariexam' /> */}
                      <img src={wtc} style={{ width: "100%" }} alt='sarkariexam' />
                      </div>
                      <div className='col-md-8 col-12' style={{ paddingLeft: "0px" }}>
                        <h5 className='text-left pt-3'>
                        CUSTOMER FOCUS</h5>
                      </div>
                      <div className='col-md-12 col-12'>
                        <p  style={{textAlign:"left"}}>We prioritize building long-term partnerships with our clients, offering customized solutions and dedicated support to help them achieve operational excellence.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

       {/* <section className="clients-section py-5 text-center">
                  <div className="container">
                    <h2 className="subFont">OUR<span style={{ color: '#1565C0' }}> CLIENTS</span></h2>
          
                    <div id="clientCarousel" className="carousel slide" data-ride="carousel">
                      <div className="carousel-inner">
                        {clientChunks.map((chunk, index) => (
                          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <div className="row justify-content-center">
                              {chunk.map(client => (
                                <div className="col-12 col-md-3 mb-4" key={client.id}>
                                  <div className="client-box">
                                    <img src={client.img} alt={client.alt} className="img-fluid" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
          
                      <a className="carousel-control-prev" href="#clientCarousel" role="button" data-slide="prev">
                        <img src={left} alt="left-arrow" style={{ marginRight: "220px" }} />
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#clientCarousel" role="button" data-slide="next">
                        <img src={right} alt="right-arrow" style={{ marginLeft: "220px" }} />
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                </section>  */}
                



<section className="clients-section py-5 text-center">
  <div className="container">
    <h2 className="subFont">
      OUR<span style={{ color: "#1565C0" }}> CLIENTS</span>
    </h2>

    <Marquee
      gradient={false}
      speed={40}
      pauseOnHover={true}
      direction="left"
      className="mt-4"
    >
      {clients.map((client) => (
        <div
          key={client.id}
          className="mx-3"
          style={{ width: "220px" }} // maintain consistent width
        >
          <div className="client-box dotted-border">
            <img
              src={client.img}
              alt={client.alt}
              className="img-fluid"
              style={{ maxHeight: "100px", objectFit: "contain" }}
            />
          </div>
        </div>
      ))}
    </Marquee>

    <button
                  className="btn btn-sm btn-secondary hover-border-11 mt-5"
                  onClick={() => navigate('ourclient')}
                >
                  <span>View All &rsaquo;</span>
                </button>
  </div>
</section>



   <section className="blog-section py-5 text-center">
            <div className="container">
              {/* <h2 className="mb-4">
                 
              </h2> */}
               <h2 className="subFont ">OUR<span style={{ color: '#1565C0' }}> BLOG</span></h2>

                <div className="row">
                  {blogData.map((blog) => (
                    <div className="col-md-3 col-12 mb-4" key={blog.id}>
                      <div className="card eftcard" >
                        <img className="card-img-top" src={blog.image} alt={blog.title} />
                        <div className="card-body">
                          <h5 className="" style={{fontSize:"14px",color:"#424242"}}>{blog.title}</h5>
                          <p className="card-text">{blog.content.substring(0, 100)}...</p>
                          <Link
                            to={`/blog-details/${blog.id}`}
                            className="btn"
                            style={{ background: "#1565C0", color: "#fff" }}
                          >
                            READ MORE &rsaquo;
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
             
      
            
            </div>
          </section>

         
    <ContactSection/>


{/* 
      <section className='bggb' style={{ paddingLeft: "30px" }}>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-4 col-12 pt-5 pb-4' style={{ paddingLeft: "0px", paddingRight: "0px" }}>
              <p className='pp1'>Start Your Preparation Journey with Our</p>
              <p className='pp2'>Pensbook Exam App or Web Portal</p>
              <img className='' src={img29} style={{ width: "90%" }} alt='sarkariexam' />
              <p className='pp3'>Download our App from</p>
              <div className='row'>
                <div className='col-md-6 col-4'>
                  <center><img src={img31} className="App-logo" alt="logo" style={{ width: "100%" }} /></center>
                </div>
                <div className='col-md-6 col-4'>
                  <center><img src={img32} className="App-logo" alt="logo" style={{ width: "100%" }} /></center>
                </div>
              </div>
            </div>
            <div className='col-md-8 col-12'>
              <img className='' src={img30} style={{ width: "100%" }} alt='sarkariexam' />
            </div>
          </div>
        </div>
      </section> */}



      {/* <section className='vcvc'>
        <div className='container'>
          <div className='row'>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-2">
                  <GiShipBow size={35} className="text-dark"/>
                </div>
                <div className="col-md-10">
                  <h6 style={{fontWeight:900}} className="text-uppercase">Free Shipping</h6>
                  <p>Free shipping on all US order</p>
                </div>

              </div>
            </div>

            <div className="col-md-4">
              <div className="row">
               
              <div className="col-md-2">
                  <GiCuckooClock  size={35} className="text-dark"/>
                </div>
                <div className="col-md-10">
                  <h6 style={{fontWeight:900}} className="text-uppercase">100% Money Back</h6>
                  <p>You have 30 days to Return</p>
                </div>

              </div>
            </div>


            <div className="col-md-4">
              <div className="row">
               
              <div className="col-md-2">
                  <BiSupport   size={35} className="text-dark"/>
                </div>
                <div className="col-md-10">
                  <h6 style={{fontWeight:900}} className="text-uppercase">Support 24/7</h6>
                  <p>Support online 24 hours a day</p>
                </div>

              </div>
            </div>



          </div>
        </div>
        
      </section> */}
        
      <Footer />


    </>
  )
}


