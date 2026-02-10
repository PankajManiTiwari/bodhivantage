import Footer from "../component/Footer";
import Header from "../component/Header";
import ban1 from "../images/logistics.jpg";
import FaqSection from "./Faqsection";

import ContactSection from "./Contactsection";



function Logistics() {


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
              <h3 className=" subFont">Logistics Industries</h3>
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
              <h2 className="text-uppercase">Logistics and Warehouse Staffing Solutions Across India</h2>
             
              <p style={{ textAlign: "justify" }}>Hire packers, loaders, inventory managers, and delivery support staff. Reliable logistics manpower outsourcing for warehouses and supply chains. </p>
               
              <p style={{ textAlign: "justify" }}>Logistics operations run on timely movement and accurate handling. Vaishnavi Consultancy Services provides reliable manpower for warehouses, transportation hubs, and e-commerce supply chains.</p>
              <p>Our logistics staffing includes: </p>
              <ul>
                <li>Warehouse Assistants </li>
                <li>Inventory Controllers  </li>
                <li>Packers and Loaders   </li>
                <li>Delivery Helpers   </li>
                <li>Forklift Operators   </li>
              </ul>
              <p>We help you meet peak demand seasons, maintain turnaround efficiency, and optimize last-mile operations with skilled and verified personnel. Let us handle your staffing so you can focus on logistics performance. </p>
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

export default Logistics;
