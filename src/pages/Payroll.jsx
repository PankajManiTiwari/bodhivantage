import Footer from "../component/Footer";
import Header from "../component/Header";
import ban1 from "../images/Payroll.jpg";
import FaqSection from "./Faqsection";

import ContactSection from "./Contactsection";


function Payroll() {


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
              <h3 className=" subFont">Payroll Management</h3>
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
                Our <b>Payroll Management Services</b> simplify salary and statutory compliance for your organization. We handle everything from salary calculations to statutory deductions (PF, ESI, TDS) so that you can focus on growing your business. 
              </p>
              <h4>What We Cover: </h4>
              <ul>
                <li>Accurate salary processing with payslips</li>
                <li>Management of EPF, ESI, and professional tax </li>
                <li>Full compliance with labour and tax laws </li>
                <li>Year-end tax computation and Form 16 generation </li>
              </ul>
              <h4>Benefits of Our Service:  </h4>
              <ul>
                <li>Error-free payroll every month </li>
                <li>Saves time and HR workload  </li>
                <li>Transparent, audit-ready reports  </li>
                <li>Data security and complete confidentiality </li>
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

export default Payroll;
