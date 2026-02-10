import Footer from "../component/Footer";
import Header from "../component/Header";
import ban1 from "../images/staffing.jpg";
import FaqSection from "./Faqsection";
import ContactSection from "./Contactsection";



function Staffing() {
 

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
              <h3 className=" subFont">Staff Hiring</h3>
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
                We provide Staff Hiring Services for all types of positions—from front-line support to mid- and senior-level professionals. We understand your staffing needs and provide candidates that are job-ready and fit your business culture.
              </p>
              <h4>Types of Staff We Provide: </h4>
              <ul>
                <li>Administrative staff </li>
                <li>Receptionists, data entry operators, MTS staff  </li>
                <li>Accountants, supervisors, office assistants  </li>
                <li>Field executives and sales teams   </li>
                </ul>
                <h4>What Makes Us Unique: </h4>
                <ul>
                  <li>Quick turnaround time </li>
                  <li>Pre-screened, qualified candidates</li>
                  <li>Industry-specific hiring support </li>
                  <li>Pan-India hiring coverage </li>
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

export default Staffing;
