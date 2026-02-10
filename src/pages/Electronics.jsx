import Footer from "../component/Footer";
import Header from "../component/Header";
import ban1 from "../images/electronics.jpg";
import FaqSection from "./Faqsection";

import ContactSection from "./Contactsection";



function Electronics() {


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
              <h3 className=" subFont">Electronics Industries</h3>
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
                 <h2 className="text-uppercase">Skilled Manpower for Electronics Industry Operations </h2>

              <p style={{ textAlign: "justify" }}>Flexible staffing solutions for electronics manufacturing and repair centers in India. Hire technicians, operators, and QC personnel. </p>
        
              <p style={{ textAlign: "justify" }}>The electronics industry demands agility, accuracy, and a tech-savvy workforce. Vaishnavi Consultancy Services supplies trained manpower for assembly lines, repair centers, service units, and electronics manufacturing facilities. </p>
               <p style={{ textAlign: "justify" }}>Our expertise includes: </p>
               <ul>
                <li>Electronic Assembly Line Workers </li>
                <li>Quality Control Inspectors</li>
                <li>Circuit Technicians </li>
                <li>Inventory & Logistics Handlers </li>
                <li>Repair Center Executives  </li>
               </ul>
               <p>We understand industry-specific skill sets and deploy staff with hands-on experience in fast-paced electronics environments. From temporary hires to long-term technical support, we provide tailored staffing models to support your production cycles.</p>
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

export default Electronics;
