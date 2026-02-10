import Footer from "../component/Footer";
import Header from "../component/Header";
import ban1 from "../images/banking.png";
import FaqSection from "./Faqsection";

import ContactSection from "./Contactsection";



function Banking() {


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
              <h3 className=" subFont">Banking & Finance Services</h3>
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
               <h2 className="text-uppercase">Banking & Finance Staffing Solutions Across India </h2>
               
              <p style={{ textAlign: "justify" }}>Trusted manpower outsourcing for banks, NBFCs, and insurance companies. Hire trained finance staff and executives with Vaishnavi Consultancy. </p>
             
              <p style={{ textAlign: "justify" }}>The financial sector requires precision, trust, and regulatory compliance. At Vaishnavi Consultancy Services, we help banks, insurance firms, and NBFCs maintain operational efficiency by providing skilled professionals for roles in finance, compliance, customer service, and administration.</p>
                <p style={{ textAlign: "justify" }}>Our manpower solutions include: </p>
                <ul>
                  <li>Bank Tellers & Executives </li>
                  <li>Loan Processing Officers  </li>
                  <li>Back Office Staff   </li>
                  <li>Insurance Sales Executives    </li>
                  <li>Compliance & KYC Analysts     </li>
                </ul>
                <p style={{ textAlign: "justify" }}>Whether you're managing high-volume customer services or backend processing, our talent pool is ready to support you across India. We ensure all staff are trained in financial ethics and sector-specific protocols, allowing you to scale confidently without recruitment delays. </p>
               
               
               
               
               
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

export default Banking;
