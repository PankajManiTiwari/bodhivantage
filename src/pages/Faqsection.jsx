import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
// import './FaqSection.css';


const faqs = [
  {
    question: "What industries do you specialize in for staffing?",
    answer: "We specialize in a wide range of industries including IT, healthcare, manufacturing, logistics, retail, and administration.",
  },
  {
    question: "How do you screen and select candidates?",
    answer: "We follow a multi-step screening process including resume review, skill assessment, background verification, and personal interviews.",
  },
  {
    question: "Do you provide temporary and permanent staffing?",
    answer: "Yes, we provide both temporary and permanent staffing based on your business requirements and budget.",
  },
  {
    question: "What is your turnaround time for placing candidates?",
    answer: "Our typical turnaround time is 24 to 72 hours, depending on the role and required qualifications.",
  },
  {
    question: "Can you provide bulk hiring solutions?",
    answer: "Absolutely. We offer bulk hiring and ramp-up solutions for project-based or seasonal demands.",
  },
  {
    question: "Do you offer payroll and compliance services?",
    answer: "Yes, we offer end-to-end payroll management, compliance, and statutory services to reduce your administrative burden.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(()=> {
            window.scrollTo(0, 0);
          },[]);
 const [modalName, setModalName] = useState('');
  const [modalMobile, setModalMobile] = useState('');
  const [modalEmail, setModalEmail] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [modalErrors, setModalErrors] = useState({});
  
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
    <div className="container my-5">
      <div className="row">
        {/* FAQ */}
        <div className="col-md-7">
          <p className="subHeading " >Frequently Asked Questions</p>
          <h2 className="font-weight-bold">
            Get the Answers You Need About Our Staffing Solutions
          </h2>
          <div className="timeline mt-4">
            {faqs.map((faq, index) => (
              <div
                className={`timeline-item ${activeIndex === index ? 'active' : ''}`}
                key={index}
                onClick={() => setActiveIndex(index)}
                style={{
                  transform: `translateX(${index % 2 === 0 ? 0 : 30}px)`,
                  transition: 'transform 0.3s ease',
                }}
              >
                <div className={`timeline-dot ${activeIndex === index ? 'large' : ''}`} />
                <h5><strong>{faq.question}</strong></h5>
                {activeIndex === index && <p className="text-muted">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
      <div className="col-md-5 contact-box text-white p-4">
  <h4 className="subFont" style={{ fontSize: '0.9rem' ,color:"#ffc107"}}>
    Need help or have specific queries?
    <span style={{ color: '#ffc107' }}> We're just a call or message away!</span>
  </h4>

  <p className="top-para" style={{ color: "#fff" }}>
    Please feel free to contact us with any questions, concerns, or specific requirements you may have regarding our staffing solutions. We understand that every business is unique, and our goal is to provide you with the most accurate information and helpful support.
  </p>

  {/* <p>📞 <a href="tel:+918448994281" className="text-white">+91-8448994281</a></p>
  <p>✉️ <a href="mailto:enquiry@lionsworkforce.com" className="text-white">enquiry@lionsworkforce.com</a></p>
  <p>📍 Tower A, URBTECH TRADE CENTRE, 714/715, Plot No 35, B Block, Sector 132, Noida, Uttar Pradesh</p> */}

  <hr className="my-3" style={{ borderColor: "#fff" }} />

  {/* Head Office – Bihar */}
  <h5 className="text-warning mt-3">Head Office – Bihar</h5>
  <p style={{ fontSize: '0.9rem' }}>
    📍 Rohini Nagar, Krishna Niketan School Road, Near Baadshahi Paeen, P.O.-Pahari, Jakariyapur, Patna – 800030
  </p>
  <p>📞 <a href="tel:+919031040361" className="text-white">+91-9031040361</a></p>
  <p>✉️ <a href="mailto:vcs@vaishnavigroup.in" className="text-white">vcs@vaishnavigroup.in</a></p>

  {/* Branch Office – Delhi */}
  <h5 className="text-warning mt-4">Branch Office – Delhi <br></br><span class="text-primary">(For Any Manpower related service contact Delhi Branch Office)</span></h5>
  <p style={{ fontSize: '0.9rem' }}>
    📍 B-102/A, First Floor, Near Metro Pillar No. 166, New Ashok Nagar, Delhi – 110096
  </p>
  <p>📞 <a href="tel:+917349553867" className="text-white">+91-7349553867</a></p>
  <p>✉️ <a href="mailto:vcs_delhi@vaishnavigroup.in" className="text-white">vcs_delhi@vaishnavigroup.in</a></p>

    <button onClick={handleOpenModal} className="btn btn-warning text-uppercase font-weight-bold mt-3">
      CONTACT US NOW!
  </button>
</div>

      </div>
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
    </div>

    
  );
};

export default FaqSection;