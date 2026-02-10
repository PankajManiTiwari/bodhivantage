import Footer from "../component/Footer";
import Header from "../component/Header";
import ban1 from "../images/consultancy.jpg";
import FaqSection from "./Faqsection";

import ContactSection from "./Contactsection";



function Consultancy() {


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
              <h3 className=" subFont">Recruitment Process Outsourcing</h3>
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
              Our<b>Recruitment Process Outsourcing (RPO)</b>  service offers end-to-end recruitment management. Whether you are hiring 5 or 500 employees, we handle everything—job posting, candidate screening, interviews, and final selection. </p>
             <h4>How It Works: </h4>
             <ul>
              <li>We act as an extension of your HR team </li>
              <li>Access to a wide talent pool through job boards and referrals  </li>
              <li>Screening, background checks, and scheduling interviews   </li>
              <li>Cost-efficient and faster recruitment cycles   </li>
              </ul>
               <h4>Why It Matters: </h4>
               <ul>
                <li>Reduces time-to-hire and hiring costs </li>
                <li>Ensures top-quality talent for your business </li>
                <li>Scalable hiring support for seasonal or bulk recruitment </li>
                <li>Ideal for startups, MSMEs, and enterprises </li>
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

export default Consultancy;
