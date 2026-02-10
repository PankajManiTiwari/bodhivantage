import Footer from "../component/Footer";
import Header from "../component/Header";
import ban1 from "../images/permanetbanner.jpg";
import FaqSection from "./Faqsection";

import ContactSection from "./Contactsection";


function PermanentStaffing() {


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
              <h3 className=" subFont">Permanent Staffing</h3>
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
                We help you build your core team with our <b>Permanent Staffing Services</b>. From identifying the right candidates to arranging interviews and salary negotiations, we ensure you hire talent that fits the role and company culture.  
              </p>
              <h4>Our Process:   </h4>
              <ul>
                <li>Job role analysis and JD development </li>
                <li>Sourcing through portals, referrals, and networks   </li>
                <li>Pre-screening and shortlisting   </li>
                <li>Interview scheduling and offer management  </li>
              </ul>
              <h4>Why It Works:    </h4>
               <ul>
                <li>Reduces bad hires and rehiring costs   </li>
                <li>Access to top-tier talent across industries  </li>
                <li>End-to-end support until the candidate joins  </li>
                <li>Suitable for all departments: HR, admin, finance, IT, and more  </li>
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

export default PermanentStaffing;
