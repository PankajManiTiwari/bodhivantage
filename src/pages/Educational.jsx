import Footer from "../component/Footer";
import Header from "../component/Header";
import ban1 from "../images/educational.jpg";
import FaqSection from "./Faqsection";

import ContactSection from "./Contactsection";



function Educational() {


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
              <h3 className=" subFont">Educational Institution</h3>
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
               <h2 className="text-uppercase">Manpower Outsourcing for Schools, Colleges & Universities</h2>
                
              <p style={{ textAlign: "justify" }}> Staff your educational institution with trained admin, lab assistants, non-teaching staff, and support personnel across India. </p>
             
              <p style={{ textAlign: "justify" }}> Educational institutions rely on a strong support system beyond just teaching faculty. Vaishnavi Consultancy Services provides manpower outsourcing for schools, colleges, universities, and training centers.  </p>
              <p style={{ textAlign: "justify" }}>We supply: </p>
              <ul>
                <li>Administrative Staff </li>
                <li>Lab Technicians </li>
                <li>IT Support Assistants </li>
                <li>Receptionists  </li>
                <li>Facility & Hostel Management Staff   </li>
              </ul>
              <p>
                Our team understands the academic environment and provides polite, responsible personnel who support smooth campus operations. Our contracts offer complete flexibility based on academic sessions or year-round staffing. 
              </p>
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

export default Educational;
