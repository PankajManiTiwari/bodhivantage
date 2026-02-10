

import Footer from "../component/Footer";
import Header from "../component/Header";
import ban1 from "../images/IT.jpg";
import FaqSection from "./Faqsection";

import ContactSection from "./Contactsection";



function ITStaff() {


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
              <h3 className=" subFont">Security Services</h3>
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
                Our <b>Security Services</b> ensure safety, surveillance, and protection for businesses, government buildings, schools, and public areas. We deploy trained, verified security personnel capable of managing access control, visitor management, and emergency situations. 
              </p>
              <h4>Services We Offer: </h4>
              <ul>
                <li>Static guards for buildings and entry points </li>
                <li>Armed and unarmed guards for VIP security  </li>
                <li>Event and crowd management   </li>
                <li>Night patrol and 24x7 surveillance support  </li>
              </ul>
               <h4>Why Trust Us:  </h4>
              <ul>
                <li>Police-verified, well-trained security guards  </li>
                <li>Regular supervision and monitoring   </li>
                <li>Professionally uniformed personnel    </li>
                <li>Quick response to emergencies  </li>
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

export default ITStaff;
