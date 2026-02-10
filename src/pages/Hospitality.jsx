import Footer from "../component/Footer";
import Header from "../component/Header";
import ban1 from "../images/hospitality.jpg";
import FaqSection from "./Faqsection";

import ContactSection from "./Contactsection";



function Hospitality() {


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
              <h3 className=" subFont">Hospitality </h3>
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
              <h2 className="text-uppercase">Hospitality Staffing Services for Hotels & Resorts  </h2>
   
              <p style={{ textAlign: "justify" }}>Hire chefs, housekeeping staff, front desk executives, and hospitality managers with Vaishnavi Consultancy. Pan-India manpower solutions. </p>
     
              <p style={{ textAlign: "justify" }}>The hospitality industry thrives on presentation, professionalism, and guest satisfaction. Vaishnavi Consultancy Services offers end-to-end manpower support for hotels, resorts, clubs, banquets, and food service providers.  </p>
              <p>We provide: </p>
              <ul>
                <li>Housekeeping Attendants</li>
                <li>Receptionists & Front Desk Executives</li>
                <li>F&B Service Staff </li>
                <li>Chefs & Kitchen Helpers </li>
                <li>Banquet and Event Staff </li>
              </ul>
               <p style={{ textAlign: "justify" }}>Whether you’re a luxury resort or a business hotel, we ensure timely deployment of trained, courteous staff ready to uphold your brand's standards. Our flexible staffing solutions are available for seasonal, event-based, or long-term needs. </p>
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

export default Hospitality;
