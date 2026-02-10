import React, { useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

import mainbanner from "../images/OurTeam.jpg"
import ban1 from "../images/gallery/1.JPG"
import ban2 from "../images/gallery/2.JPG"
import ban3 from "../images/gallery/3.JPG"
import ban4 from "../images/gallery/4.JPG"
import ban5 from "../images/gallery/5.JPG"
import ban6 from "../images/gallery/6.JPG"
import ban7 from "../images/gallery/7.JPG"
import ban8 from "../images/gallery/8.png"
import ban10 from "../images/gallery/10.jpeg"
import ban11 from "../images/gallery/11.jpeg"
import ban12 from "../images/gallery/12.jpeg"
import ban14 from "../images/gallery/14.jpeg"
import ban15 from "../images/gallery/15.jpeg"
import ban16 from "../images/gallery/16.jpeg"
import ban17 from "../images/gallery/17.JPG"
import ban18 from "../images/gallery/18.jpeg"
import ban19 from "../images/gallery/19.jpeg"

function Partner() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [ban1, ban2, ban3, ban4, ban5, ban6, ban7, ban8, ban10, ban11, ban12, ban14, ban15, ban16, ban17, ban18, ban19];

  const openModal = (img) => {
    setSelectedImg(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImg(null);
  };

  const thumbnailSize = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    border: '4px solid #555',
    borderRadius: '8px'
  };

  return (
    <>
      <Header />

      <section className='iimm'>
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
      </section>

      {/* Modal */}
      {modalOpen && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1050,
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '90vw',
              height: '90vh',
              border: '6px solid #fff',
              borderRadius: '12px',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
              backgroundColor: '#222',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '1rem',
              overflow: 'hidden', // Ensures content stays inside
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
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '8px',
                display: 'block',
                margin: 'auto',
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
