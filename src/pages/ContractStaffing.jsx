import Footer from "../component/Footer";
import Header from "../component/Header";
import ban1 from "../images/contractstaffingbanner.jpg";
import FaqSection from "./Faqsection";

import ContactSection from "./Contactsection";



function ContractStaffing() {
  

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
              <h3 className=" subFont">Contractstaffing Services</h3>
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
               Our <b>Contract Staffing Services</b> provide businesses with temporary staff to manage projects, peak workloads, or seasonal demands. We hire, deploy, and manage contract staff under our payroll, reducing your administrative burden. 
               </p>
               <h4>Key Features: </h4>
               <ul>
                <li>Workers deployed for 3, 6, or 12-month projects </li>
                <li>Staff available across sectors—logistics, hospitality, IT, healthcare, etc. </li>
                <li>Full compliance with labour regulations </li>
                <li>Option to extend or convert to permanent roles </li>
               </ul>
                <h4>Advantages:  </h4>
                <ul>
                  <li>No long-term commitment required </li>
                  <li>Fast hiring to fill urgent roles</li>
                  <li>Reduces permanent headcount costs </li>
                  <li>Ideal for startups, construction, and project-based companies  </li>
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

export default ContractStaffing;
