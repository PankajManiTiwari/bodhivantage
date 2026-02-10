import Footer from "../component/Footer";
import Header from "../component/Header";
import ban1 from "../images/term.jpg";
import FaqSection from "./Faqsection";
import ContactSection from "./Contactsection";

function Term() {
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

      {/* Privacy Policy & Terms */}
      <section className="iimm py-5" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <h3 className="subFont text-uppercase">Terms & Condition</h3>
              <hr
                className="text-center"
                style={{
                  border: "5px solid #FFB300",
                  width: "15%",
                  margin: "0px auto 20px auto",
                }}
              />
            </div>
            <div className="col-md-12">
              <div
                style={{
                  backgroundColor: "white",
                  padding: "25px",
                  borderRadius: "10px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                  maxHeight: "75vh",
                  overflowY: "scroll",
                }}
              >
                  
                 <h4 className="subFont ">Terms and Conditions<span style={{ color: '#1565C0' }}> of Vaishnavi Consultancy Services</span></h4>
                <p><strong>Vaishnavi Consultancy Services</strong> (“we”, “us”, “our”) offers services including manpower outsourcing, payroll, and tender execution. By using our services, you agree to these terms.</p>

                <h5>1. Company Overview</h5>
                <p>Services include manpower, housekeeping, HR outsourcing, goods/equipment supply, and government tender participation.</p>

                <h5>2. Acceptance</h5>
                <p>Using our services indicates acceptance. Organizational reps must have authority.</p>

                <h5>3. Services</h5>
                <p>Manpower, goods delivery, payroll, HR, and tender support—all under specific terms and SLAs.</p>

                <h5>4. Client Responsibilities</h5>
                <ul>
                  <li>Provide correct info, access, and cooperation</li>
                  <li>Pay service fees on time</li>
                </ul>

                <h5>5. Payment</h5>
                <p>Invoices due within 15/30 days. Late payments attract 1.5% monthly interest.</p>

                <h5>6. Confidentiality</h5>
                <p>Both parties must maintain confidentiality unless legally required.</p>

                <h5>7. Intellectual Property</h5>
                <p>Our systems and formats remain our property unless otherwise agreed.</p>

                <h5>8. Privacy</h5>
                <p>Personal data is processed as per our privacy policy. Clients must ensure legal data sharing.</p>

                <h5>9. Liability</h5>
                <p>Limited to paid fees. No liability for indirect losses. Client indemnifies us for client-side issues.</p>

                <h5>10. Termination</h5>
                <p>Can terminate with 30 days' notice or immediately upon breach. Pending payments and returns must be completed.</p>

                <h5>11. Force Majeure</h5>
                <p>We’re not liable for disruptions due to uncontrollable events.</p>

                <h5>12. Jurisdiction</h5>
                <p>Subject to Patna, Bihar jurisdiction. Governed by Indian law.</p>

                <h5>13. Changes</h5>
                <p>We may revise terms anytime. Continued use = acceptance.</p>

                <h5>14. Contact</h5>
                <p><strong>Phone:</strong> 9031040361<br />
                  <strong>Email:</strong> Vcs@vaishnavigroup.in<br />
                  <strong>Address:</strong> Rohini Nagar, Krishna Niketan School Road, Near Baadshahi Paeen, P.O.-Pahari, Jakariyapur, Patna-800030</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <FaqSection />
      <ContactSection /> */}
      <Footer />
    </>
  );
}

export default Term;
