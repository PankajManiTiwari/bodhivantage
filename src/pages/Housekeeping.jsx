import Footer from "../component/Footer";
import Header from "../component/Header";
import ban1 from "../images/Housekeeping.jpg";
import FaqSection from "./Faqsection";

import ContactSection from "./Contactsection";



function Housekeeping() {
  

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
              <h3 className=" subFont">Housekeeping Services</h3>
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
              <p style={{ textAlign: "justify" }}>
               We offer <b>Housekeeping Services</b> that ensure hygiene, cleanliness, and a pleasant environment for workplaces, institutions, and public facilities. Our trained staff follow standard cleaning protocols and use eco-friendly cleaning products. 
               </p>
               <h4>Areas We Serve: </h4>
               <ul>
                <li>Government offices, hospitals, hostels, and airports </li>
                <li>Educational institutions and training centres  </li>
                <li>Residential societies and commercial buildings  </li>
               </ul>
                <h4>Scope of Services:  </h4>
                <ul>
                  <li>Daily cleaning, dusting, mopping, and waste disposal </li>
                  <li>Deep cleaning of restrooms, workstations, and common areas </li>
                  <li>Sanitization services and pest control (on demand)  </li>
                  <li>Housekeeping supervision and quality checks  </li>
                </ul>
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

export default Housekeeping;
