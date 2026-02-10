import Footer from "../component/Footer";
import Header from "../component/Header";
import ban1 from "../images/privacy.jpg";
import FaqSection from "./Faqsection";
import ContactSection from "./Contactsection";

function Privacy() {
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
              <h3 className="subFont text-uppercase">Privacy Policy</h3>
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
                   <h4 className="subFont ">Privacy Policy<span style={{ color: '#1565C0' }}> of Vaishnavi Consultancy Services</span></h4>
                {/* <h4 className="text-uppercase mb-3" style={{ color: "#b80808" }}>
                   
                </h4> */}
                <p><strong>Vaishnavi Consultancy Services</strong> (“Company”, “we”, “us”, or “our”) is committed to safeguarding the privacy of our clients, employees, partners, and all stakeholders. This Privacy Policy explains how we collect, use, disclose, and protect your information when you engage with our services or visit our website.</p>

                <h5>1. Scope</h5>
                <p>This Privacy Policy applies to clients (government or private), job applicants and employees, vendors and contractors, website visitors, and individuals interacting with our services or communication systems.</p>

                <h5>2. Information We Collect</h5>
                <p><strong>2.1 Personally Identifiable Information (PII):</strong> Name, Contact Number, Email, Address, Aadhaar, PAN, Voter ID, educational/professional info, bank details, UAN, EPFO, ESIC, photos, biometrics, etc.</p>
                <p><strong>2.2 Business Information:</strong> Company name, nature of business, GST, TAN, CIN, contracts, etc.</p>
                <p><strong>2.3 Technical Data:</strong> IP, browser type, cookies, etc.</p>

                <h5>3. How We Use Your Information</h5>
                <ul>
                  <li>Service delivery & compliance</li>
                  <li>Employment processing & HR functions</li>
                  <li>Communication and legal obligations</li>
                  <li>Tender documentation & auditing</li>
                </ul>

                <h5>4. Legal Basis for Processing</h5>
                <p>Based on contractual necessity, legal obligations, consent, and legitimate business interest as per Indian IT laws.</p>

                <h5>5. Data Sharing and Disclosure</h5>
                <p>Shared with government, internal departments, vendors, IT providers, statutory bodies, etc., strictly on a need-to-know basis. No selling/renting of data.</p>

                <h5>6. Data Security</h5>
                <p>Encrypted systems, secure environments, periodic audits, access control, employee confidentiality agreements.</p>

                <h5>7. Data Retention</h5>
                <p>Retained as long as necessary and compliant. Reviewed annually.</p>

                <h5>8. Your Rights</h5>
                <ul>
                  <li>Access and correct your data</li>
                  <li>Withdraw consent</li>
                  <li>Request deletion (subject to law)</li>
                  <li>File complaints</li>
                </ul>

                <h5>9. Cookies and Tracking</h5>
                <p>Used for performance, analytics, preferences. Can be disabled via browser.</p>

                <h5>10. Third-Party Links</h5>
                <p>Not responsible for external privacy policies.</p>

                <h5>11. Changes</h5>
                <p>May update anytime. Continued use implies acceptance.</p>

                <h5>12. Contact</h5>
                <p><strong>Phone:</strong> 9031040361<br />
                  <strong>Email:</strong> Vcs@vaishnavigroup.in<br />
                  <strong>Address:</strong> Rohini Nagar, Krishna Niketan School Road, Near Baadshahi Paeen, P.O.-Pahari, Jakariyapur, Patna-800030</p>

                <hr className="my-4" />

                {/* <h4 className="text-uppercase mb-3" style={{ color: "#b80808" }}>
                  Terms and Conditions
                </h4> */}
                
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

export default Privacy;
