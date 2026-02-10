import Footer from "../component/Footer";
import Header from "../component/Header";
import ban1 from "../images/government.jpg";
import FaqSection from "./Faqsection";

import ContactSection from "./Contactsection";



function Government() {


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
              <h3 className=" subFont">Government Industries</h3>
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
             <h2 className="text-uppercase">Trusted Manpower Support for Government Departments </h2>
                
              <p style={{ textAlign: "justify" }}>Reliable staffing solutions for government offices, public institutions, and state-run departments across India.   </p>
     
              <p style={{ textAlign: "justify" }}>Government offices often require flexible staffing models to meet administrative, clerical, and field operation demands. Vaishnavi Consultancy Services has extensive experience working with various public sector entities across India.   </p>
              <p>We provide: </p>
              <ul>
                <li>Data Entry Operators </li>
                <li>Office Assistants  </li>
                <li>MTS (Multi-Tasking Staff)   </li>
                <li>Helpdesk Executives    </li>
                <li>Facility Maintenance Staff     </li>
              </ul>
              <p>
                We ensure quick deployment, background-verified staff, and strict adherence to all labor laws and contractual compliances. Our manpower services help government bodies operate efficiently without the burden of long hiring cycles. 
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

export default Government;
