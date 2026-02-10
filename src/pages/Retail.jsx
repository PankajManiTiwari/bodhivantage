import Footer from "../component/Footer";
import Header from "../component/Header";
import ban1 from "../images/retail.jpg";
import FaqSection from "./Faqsection";

import ContactSection from "./Contactsection";



function Retail() {


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
              <h3 className=" subFont">Retail </h3>
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
            
              <h2 className="text-uppercase">Scalable Staffing for Retail Chains and Stores </h2>
              
              <p style={{ textAlign: "justify" }}>Hire floor staff, cashiers, store managers, and inventory handlers for malls, supermarkets, and retail chains across India.  </p>
             
              <p style={{ textAlign: "justify" }}>Retail businesses need agile, customer-focused staff to ensure smooth operations. Vaishnavi Consultancy Services offers manpower outsourcing for retail stores, malls, supermarkets, and showroom chains.</p>
              <p>We provide:  </p>
              <ul>
                <li>Sales Executives </li>
                <li>Cashiers   </li>
                <li>Inventory Staff   </li>
                <li>Visual Merchandisers   </li>
                <li>Store Managers    </li>
              </ul>
              <p>Our trained staff support retail operations during peak sales periods, promotional events, or regular store activities. We offer flexible contracts to meet your changing workforce demands across multiple locations. </p>
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

export default Retail;
