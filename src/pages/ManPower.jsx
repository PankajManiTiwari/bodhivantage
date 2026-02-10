import Footer from "../component/Footer";
import Header from "../component/Header";
import ban1 from "../images/manpower.jpg";
import FaqSection from "./Faqsection";

import ContactSection from "./Contactsection";


function Manpower() {


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
              <h3 className=" subFont">ManPower Outsourcing</h3>
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
                Our <b>Manpower Outsourcing Services</b> help businesses of all sizes find qualified workers without the hassle of direct recruitment. We act as your strategic partner by managing the hiring, onboarding, and administrative process of workers across multiple sectors. 
              </p>
              <h4>What We Offer: </h4>
              <ul>
                <li>Supply of unskilled, semi-skilled, and skilled workers </li>
                <li>Staffing for hospitals, airports, engineering colleges, offices, factories, and more </li>
                <li>Workforce available for short-term or long-term contracts </li>
                <li>Complete handling of HR, attendance, and payroll processes </li>
              </ul>
              <h4>Why Choose Us?  </h4>
               <ul>
                <li>Quick deployment of trained manpower  </li>
                <li>Flexible staffing models to meet project needs </li>
                <li>Cost-effective and compliant with labour laws </li>
                <li>Dedicated account manager for your business </li>
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

export default Manpower;
