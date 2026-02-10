import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

// import ban1 from "../images/OurTeam.jpg";
// import ban2 from "../images/OurTeam2.jpg";
// import ban3 from "../images/OurTeam3.jpg";
// import ban4 from "../images/OurTeam4.jpg";
import mainbanner from "../images/clientban.jpg"
import ban1 from "../images/ClientsLOGO/lg1.jpeg"
import ban2 from "../images/ClientsLOGO/lg2.jpg"
import ban3 from "../images/ClientsLOGO/lg3.png"
import ban4 from "../images/ClientsLOGO/lg4.png"
import ban5 from "../images/ClientsLOGO/lg5.png"
import ban6 from "../images/ClientsLOGO/lg6.jpg"
import ban7 from "../images/ClientsLOGO/lg7.png"
import ban8 from "../images/ClientsLOGO/lg8.jpg"


import ban9 from "../images/ClientsLOGO/lg8.png"
import ban10 from "../images/ClientsLOGO/lg9.jpg"
import ban11 from "../images/ClientsLOGO/lg9.png"
import ban12 from "../images/ClientsLOGO/lg10.webp"
import ban13 from "../images/ClientsLOGO/lg11.png"
import ban14 from "../images/ClientsLOGO/lg12.jpg"
import ban15 from "../images/ClientsLOGO/lg13.png"
import ban16 from "../images/ClientsLOGO/lg14.jpg"
import ban17 from "../images/ClientsLOGO/lg15.png"
import ban18 from "../images/ClientsLOGO/lg16.jpg"
import ban19 from "../images/ClientsLOGO/lg17.jpg"
import ban20 from "../images/ClientsLOGO/lg18.jpeg"

import ban21 from "../images/ClientsLOGO/lg19.jpg"
import ban22 from "../images/ClientsLOGO/lg20.png"
import ban23 from "../images/ClientsLOGO/lg21.png"
import ban24 from "../images/ClientsLOGO/lg22.jpg"
import ban25 from "../images/ClientsLOGO/lg23.jpeg"
import ban26 from "../images/ClientsLOGO/lg24.png"
import ban27 from "../images/ClientsLOGO/lg25.jpeg"
import ban28 from "../images/ClientsLOGO/lg26.png"
import ban29 from "../images/ClientsLOGO/lg27.png"

import ban30 from "../images/ClientsLOGO/lg28.png"
import ban31 from "../images/ClientsLOGO/lg29.png"
import ban32 from "../images/ClientsLOGO/lg30.png"
import ban33 from "../images/ClientsLOGO/lg31.png"
import ban34 from "../images/ClientsLOGO/lg32.png"
import ban35 from "../images/ClientsLOGO/lg33.png"

function Partner() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [ban1, ban2, ban3, ban4, ban5, ban6, ban7 , ban8,ban9, ban10, ban11, ban12, ban13, ban14, ban15, ban16, ban17, ban18, ban19, ban20, ban21, ban22, ban23, ban24, ban25, ban26, ban27, ban28, ban29, ban30, ban31, ban32, ban33, ban34, ban35];

  const openModal = (img) => {
    setSelectedImg(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImg(null);
  };
   const thumbnailSize = { width: '100%', height: '200px', objectFit: 'cover', border: '4px solid #555', borderRadius: '8px' };


  return (
    <>
      <Header />
        {/* <section className="desktop">
              <section className="carro">
                <div id="carouselDesktop" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={mainbanner} className="d-block w-100" alt="Staffing Banner" />
                    </div>
                  </div>
                </div>
              </section>
            </section>
            <section className="mobile">
              <section className="carro">
                <div id="carouselMobile" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={mainbanner} className="d-block w-100" alt="Staffing Banner" />
                    </div>
                  </div>
                </div>
              </section>
            </section> */}
      {/* Existing carousel sections unchanged */}
          {/* <div className="row">
      <div className='col-md-12'><h2 className="subFont mt-5">OUR<span style={{ color: '#1565C0' }}> CLIENT</span></h2></div>
    </div>  */}
  <div className="logo-container">
    
    
      {images.map((logo, index) => (
        <div className="logo-box" key={index}>
          <img src={logo} alt={`Client Logo ${index + 1}`} />
        </div>
      ))}
    </div>
       {/* <section className='iimm'>
        <div className='container'>
          <div className='row justify-content-center'>
            {images.map((img, index) => (
              <div className='col-6 col-md-3 mb-4' key={index}>
                <img
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  className='img-fluid rounded'
                  style={{ 
                    cursor: 'pointer',
                    ...thumbnailSize
                  }}
                  onClick={() => openModal(img)}
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}
      


      {/* Modal */}
      {modalOpen && (
  <div
    className="modal-overlay"
    onClick={closeModal}
    style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1050,
      overflow: 'auto', // allow scrolling on the overlay if needed
    }}
  >
    <div
      className="modal-content"
      onClick={(e) => e.stopPropagation()}
      style={{
        position: 'relative',
        maxWidth: '90vw',
        maxHeight: '90vh',
        border: '6px solid #fff',
        borderRadius: '12px',
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
        backgroundColor: '#222',
        overflow: 'auto', // make modal content scrollable
      }}
    >
      <button
        onClick={closeModal}
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          background: 'transparent',
          border: 'none',
          color: 'white',
          fontSize: '2rem',
          cursor: 'pointer',
          fontWeight: 'bold',
          zIndex: 1100,
        }}
      >
        &times;
      </button>
      <img
        src={selectedImg}
        alt="Selected"
        style={{ 
          display: 'block',
          width: 'auto',
          height: 'auto',
          maxWidth: 'none',
          maxHeight: 'none',
          borderRadius: '8px',
        }}
      />
    </div>
  </div>
)}

      <Footer />
    </>
  );
}

export default Partner;
