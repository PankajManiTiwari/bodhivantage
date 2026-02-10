import Footer from "../component/Footer";
import Header from "../component/Header";
import ban1 from "../images/manufacturing.jpg";
import FaqSection from "./Faqsection";

import ContactSection from "./Contactsection";



function Manufacturing() {


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
              <h3 className=" subFont">Manufacturing Industries</h3>
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
                <h2 className="text-uppercase">Manufacturing Industry Manpower Solutions in India </h2>
                 
              <p style={{ textAlign: "justify" }}>Hire operators, supervisors, assembly workers, and technicians for manufacturing plants across India. Staffing support for all industrial sectors.  </p>
            
              <p style={{ textAlign: "justify" }}>Roles we provide: </p>
              <ul>
                <li>Assembly Line Workers </li>
                <li>Quality Control Staff </li>
                <li>Machine Operators </li>
                <li>Supervisors & Floor Managers  </li>
                <li>Maintenance Technicians  </li>
              </ul>
                <p>We deliver compliant, safety-trained manpower suited to your industry’s technical requirements. Our staffing solutions support both short-term production ramps and ongoing industrial operations across India. </p>
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

export default Manufacturing;
