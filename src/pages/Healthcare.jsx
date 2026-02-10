import Footer from "../component/Footer";
import Header from "../component/Header";
import ban1 from "../images/healthcare.jpg";
import FaqSection from "./Faqsection";

import ContactSection from "./Contactsection";



function Healthcare() {


  return (
    <>
      <Header />

      {/* Desktop Carousel */}
      <section className="desktop">
        <section className="carro">
          <div id="carouselDesktop" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={ban1} className="d-block w-100" alt="Staffing Banner" />
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Mobile Carousel */}
      <section className="mobile">
        <section className="carro">
          <div id="carouselMobile" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={ban1} className="d-block w-100" alt="Staffing Banner" />
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Staffing Content */}
      <section className="iimm">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <h3 className=" subFont">Healthcare</h3>
              <hr
                className="text-center"
                style={{
                   border: "5px solid #FFB300",
                  width: "20%",
                  margin: "0px auto 5px auto",
                }}
              />
            </div>
            <div className="col-md-12">
              <h2 className="text-uppercase">Trusted Healthcare Manpower Outsourcing Services in India </h2>
        
              <p style={{ textAlign: "justify" }}>
                Vaishnavi Consultancy provides skilled nurses, medical assistants, paramedics, and hospital staff for clinics and hospitals across India. Reliable healthcare manpower outsourcing solutions. 
              </p>
          
              <p style={{ textAlign: "justify" }}>
                Vaishnavi Consultancy Services is your trusted partner in providing healthcare staffing solutions across India. With years of experience in manpower outsourcing, we support hospitals, clinics, diagnostic labs, and care centers in sourcing the right professionals for both short-term and long-term requirements. 
              </p>
              <p style={{ textAlign: "justify" }}>
               We specialize in deploying well-trained, pre-screened medical and non-medical personnel such as: 
              </p>
              <ul>
                <li>Registered Nurses</li>
                <li>Paramedical Staff </li>
                <li>Laboratory Technicians  </li>
                <li>Medical Assistants   </li>
                <li>OPD/Reception Executives    </li>
                <li>Patient Care Attendants and Ward Boys    </li>
              </ul>
               <p style={{ textAlign: "justify" }}>
               Our professionals are selected through a stringent screening process to ensure they meet the clinical, ethical, and operational standards of modern healthcare environments. 
              </p>
              <p style={{ textAlign: "justify" }}>
               Whether your facility needs temporary backup staff, emergency shift coverage, or permanent healthcare employees, we offer flexible contracts and scalable hiring models tailored to your operational needs. 
              </p>
               <p style={{ textAlign: "justify" }}>
              Our healthcare staffing services are designed to help medical institutions reduce recruitment time, manage patient loads effectively, and maintain consistent care quality without HR-related hassles. 
              </p>
               <p style={{ textAlign: "justify" }}>
             Choose Vaishnavi Consultancy Services for reliable healthcare manpower outsourcing that keeps your focus where it matters most—on patient care. 
              </p>
            </div>
          </div>
        </div>
      </section>

      

      <FaqSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Healthcare;
