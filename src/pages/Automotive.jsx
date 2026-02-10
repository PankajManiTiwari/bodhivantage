import Footer from "../component/Footer";
import Header from "../component/Header";
import ban1 from "../images/automotive.jpg";
import FaqSection from "./Faqsection";

import ContactSection from "./Contactsection";



function Automotive() {


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
              <h3 className=" subFont">Automotive </h3>
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
            <h2 className="text-uppercase">Contract Staffing Solutions for Automotive Sector </h2>
                
              <p style={{ textAlign: "justify" }}> Skilled manpower for assembly lines, service centers, and manufacturing in the automotive industry. Hire on-demand with Vaishnavi Consultancy.  </p>
              <p style={{ textAlign: "justify" }}> The automotive sector demands technical precision and time-bound efficiency. Vaishnavi Consultancy Services supports manufacturers, workshops, and component suppliers with trained staff for a variety of roles.   </p>
              <p style={{ textAlign: "justify" }}>Our staffing services cover:  </p>
              <ul>
                <li>Line Operators & Assemblers </li>
                <li>Auto Technicians & Fitters </li>
                <li>Quality Control Staff  </li>
                <li>Floor Managers   </li>
                <li>Spare Parts Handlers  </li>
                <p>
                  From plant production lines to vehicle service centers, we ensure consistent manpower availability that supports your business goals while adhering to compliance and safety standards. 
                </p>
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

export default Automotive;
