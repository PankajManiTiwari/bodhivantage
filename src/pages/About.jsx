import Footer from "../component/Footer"
import Header from "../component/Header"
import ban1 from "../images/aboutus.jpg"
import FaqSection from "./Faqsection"
import col1 from "../images/ClientsLOGO/lg1.jpeg"
import col2 from "../images/ClientsLOGO/lg2.jpg"
import col3 from "../images/ClientsLOGO/lg3.png"
import col4 from "../images/ClientsLOGO/lg4.png"
import col5 from "../images/ClientsLOGO/lg5.png"
import col6 from "../images/ClientsLOGO/lg6.jpg"
import col7 from "../images/ClientsLOGO/lg7.png"
import col8 from "../images/ClientsLOGO/lg8.jpg"


import col9 from "../images/ClientsLOGO/lg8.png"
import col10 from "../images/ClientsLOGO/lg9.jpg"
import col11 from "../images/ClientsLOGO/lg9.png"
import col12 from "../images/ClientsLOGO/lg10.webp"
import col13 from "../images/ClientsLOGO/lg11.png"
import col14 from "../images/ClientsLOGO/lg12.jpg"
import col15 from "../images/ClientsLOGO/lg13.png"
import col16 from "../images/ClientsLOGO/lg14.jpg"
import col17 from "../images/ClientsLOGO/lg15.png"
import col18 from "../images/ClientsLOGO/lg16.jpg"
import col19 from "../images/ClientsLOGO/lg17.jpg"
import col20 from "../images/ClientsLOGO/lg18.jpeg"

import col21 from "../images/ClientsLOGO/lg19.jpg"
import col22 from "../images/ClientsLOGO/lg20.png"
import col23 from "../images/ClientsLOGO/lg21.png"
import col24 from "../images/ClientsLOGO/lg22.jpg"
import col25 from "../images/ClientsLOGO/lg23.jpeg"
import col26 from "../images/ClientsLOGO/lg24.png"
import col27 from "../images/ClientsLOGO/lg25.jpeg"
import col28 from "../images/ClientsLOGO/lg26.png"
import col29 from "../images/ClientsLOGO/lg27.png"

import col30 from "../images/ClientsLOGO/lg28.png"
import col31 from "../images/ClientsLOGO/lg29.png"
import col32 from "../images/ClientsLOGO/lg30.png"
import col33 from "../images/ClientsLOGO/lg31.png"
import col34 from "../images/ClientsLOGO/lg32.png"
import col35 from "../images/ClientsLOGO/lg33.png"
import sideimage from "../images/aboutside.png"
import vision from "../images/vision.png"
import ContactSection from "./Contactsection"
import visionlogo from "../images/visionlogo.png"
import missionlogo from "../images/targeting.png"
import left from "../images/left-arrow.png"
import right from "../images/right-arrow.png"
import Marquee from "react-fast-marquee"
import { useNavigate } from "react-router-dom"
const clients = [
  { id: 1, img: col1, alt: 'Client 1' },
  { id: 2, img: col2, alt: 'Client 2' },
  { id: 3, img: col3, alt: 'Client 3' },
  { id: 4, img: col4, alt: 'Client 4' },
  { id: 5, img: col5, alt: 'Client 5' },
  { id: 6, img: col6, alt: 'Client 6' },
  { id: 7, img: col7, alt: 'Client 7' },
  { id: 8, img: col8, alt: 'Client 8' },
  { id: 9, img: col9, alt: 'Client 9' },
  { id: 10, img: col10, alt: 'Client 10' },
  { id: 11, img: col11, alt: 'Client 11' },
  { id: 12, img: col12, alt: 'Client 12' },
  { id: 13, img: col13, alt: 'Client 13' },
  { id: 14, img: col14, alt: 'Client 14' },
  { id: 15, img: col15, alt: 'Client 15' },
  { id: 16, img: col16, alt: 'Client 16' },
  { id: 17, img: col17, alt: 'Client 17' },
  { id: 18, img: col18, alt: 'Client 18' },
  { id: 19, img: col19, alt: 'Client 19' },
  { id: 20, img: col20, alt: 'Client 20' },
  { id: 21, img: col21, alt: 'Client 21' },
  { id: 22, img: col22, alt: 'Client 22' },
  { id: 23, img: col23, alt: 'Client 23' },
  { id: 24, img: col24, alt: 'Client 24' },
  { id: 25, img: col25, alt: 'Client 25' },
  { id: 26, img: col26, alt: 'Client 26' },
  { id: 27, img: col27, alt: 'Client 27' },
  { id: 28, img: col28, alt: 'Client 28' },
  { id: 29, img: col29, alt: 'Client 29' },
  { id: 30, img: col30, alt: 'Client 30' },
  { id: 31, img: col31, alt: 'Client 31' },
  { id: 32, img: col32, alt: 'Client 32' },
  { id: 33, img: col33, alt: 'Client 33' },
  { id: 34, img: col34, alt: 'Client 34' },
  { id: 35, img: col35, alt: 'Client 35' },
];

function About() {
  
 const navigate = useNavigate();
  const chunkArray = (arr, chunkSize) =>
  arr.reduce((acc, _, i) => {
    if (i % chunkSize === 0) acc.push(arr.slice(i, i + chunkSize));
    return acc;
  }, []);


  const clientChunks = chunkArray(clients, 4);
  return (
   <>
    <Header/>

    <section className='desktop'>
        <section className='carro'>
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
              <img src={ban1} className="d-block w-100" alt="band3.jpg" />
               
              </div>
              
          </div>
          </div>
        </section>
      </section>

      <section className='mobile'>
        <section className='carro'>
          <div id="carouselExampleControlssaiiias" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
              <img src={ban1} className="d-block w-100" alt="band3.jpg" />
              </div>
             
            </div>
           
          </div>
        </section>
      </section>

      <section className='iimm'>
        <div className='container'>
          <div className='row justify-content-center'>
               <div className="col-md-12 text-center">
                  <h3 style={{ color: "#424242" }} className="text-uppercase">
                    About Us
                    <hr
                      style={{
                        border: "5px solid",
                        borderColor: "rgb(255, 179, 0)",
                        width: "20%",
                        margin: "5px auto"
                      }}
                    />
                    <br />
                  </h3>
                </div>
                <div className="col-md-6">
              <img src={sideimage} className="img-fluid" alt="map.png" />
                </div>
                <div className="col-md-6">
                    <p  style={{textAlign:"justify"}}>Vaishnavi Consultancy Services, founded in 2010, is a leading provider of manpower outsourcing, payroll management, and facility support services in India. With a strong presence in 8 states, we have established ourselves as a trusted partner for both government organizations and private sector enterprises. 

For over a decade, we have been delivering customized workforce solutions that meet the dynamic needs of industries such as healthcare, education, infrastructure, aviation, logistics, manufacturing, hospitality, and corporate offices. Our focus on quality, compliance, and operational efficiency allows our clients to optimize performance while staying focused on their core objectives. 

We are proud to support various state and central government departments, public sector undertakings, and private institutions with reliable staffing and support services tailored to their specific requirements. </p>
                   <p><b>Customized Solutions for Diverse Industry Needs:</b></p>
                   <ul>
                    <li><b>Manpower Outsourcing –</b><span>Manpower Outsourcing Services that simplify recruitment by managing hiring, onboarding, and admin tasks across sectors.</span></li>
                    <li><b>Payroll Management – </b><span>Streamline your salary and compliance processes with our end-to-end Payroll Management Services.</span></li>
                    <li><b>Recruitment Process Outsourcing – </b><span>End-to-end recruitment management through our RPO service—streamlining hiring from job posting to final selection for any team size.</span></li>
                    <li><b>Staff Hiring –  </b><span>Comprehensive staff hiring services tailored to your business needs, from front-line to senior-level professionals.</span></li>
                    <li><b>Security Services  –  </b><span>Reliable security services providing trained personnel for safety, surveillance, and emergency response across public and private sectors.</span></li>
                    <li><b>Housekeeping Services  –  </b><span>Professional Housekeeping Services ensuring hygiene, cleanliness, and eco-friendly care for workplaces, institutions, and public spaces.</span></li>
                     <li><b>Contract Staffing  – </b><span>We provide contract staffing solutions by hiring and managing temporary talent on our payroll to help businesses meet project, peak, or seasonal demands with ease.</span></li>
                    <li><b>Permanent Staffing  –  </b><span>We help you hire the right long-term talent with our end-to-end Permanent Staffing Services, tailored to match your company’s needs and culture.</span></li>
                   </ul>
                </div>

                <div className="col-md-12 text-center">
                <h3 className=" text-uppercase" style={{color:"#424242"}}><img src={visionlogo} style={{width:"60px"}} className="mr-2" alt="vision.png" />Our Vision </h3>
                <hr className="text-center" style={{ border: "5px solid ",color:"rgb(255, 179, 0)", width: "20%", margin: "5px auto" }} /><br></br>
                </div>

                <div className="col-md-6">
                    {/* <p style={{fontStyle:"italic", fontWeight:"500"}}>"Your Partner in Automotive Lubricants, Corrosion Prevention & Packaging"</p> */}
                    <p style={{textAlign:"justify"}}>Our mission is to become the most reliable and respected partner for both businesses and government entities by offering transformative workforce solutions that are not only forward-thinking but also flexible enough to evolve with changing market conditions. We are committed to providing agile, efficient, and scalable services that align with the unique goals of every organization we serve. In an era defined by digital transformation, economic shifts, and evolving compliance standards, we aim to empower our clients with workforce strategies that drive performance, boost adaptability, and foster long-term success.</p>
                    <ul>
                      <li><span style={{fontWeight:700,color:"#424242"}}>Agility & Responsiveness:</span> We prioritize quick adaptation to workforce changes and industry trends to keep our clients competitive.</li>
                    
                      <li><span style={{fontWeight:700,color:"#424242"}}>Efficiency-Driven:</span> Our solutions are designed to optimize operational efficiency and reduce time-to-hire.</li>
                      <li><span style={{fontWeight:700,color:"#424242"}}>Scalability:</span> We offer workforce models that can grow with your organization’s evolving needs.</li>
                      </ul>
                
                </div>
                <div className="col-md-6">
                    {/* <p style={{fontStyle:"italic", fontWeight:"500"}}>"Your Partner in Automotive Lubricants, Corrosion Prevention & Packaging"</p> */}
                     <img src={vision} className="img-fluid" alt="vision.png" />
                </div>

                <div className="col-md-12 text-center">
                   <h3 className=" text-uppercase" style={{color:"#424242"}}><img src={missionlogo} style={{width:"60px"}} className="mr-2" alt="vision.png" />Our Mission</h3>
                <hr className="text-center" style={{ border: "5px solid ",color:"rgb(255, 179, 0)", width: "20%", margin: "5px auto" }} /><br></br>
                
                </div>

                <div className="col-md-12">
                  <ul>
                    <li><p style={{textAlign:"justify"}}>To provide flexible, cost-effective manpower outsourcing and payroll services that solve real operational challenges for both government and private sector clients.  </p></li>
                    <li><p style={{textAlign:"justify"}}>To deliver smart staffing and facility management solutions that enhance productivity, ensure compliance, and reduce administrative burdens.   </p></li>
                     <li><p style={{textAlign:"justify"}}>To continuously invest in technology, training, and process innovation to meet the evolving needs of the workforce and the industries we serve.    </p></li>
                     <li><p style={{textAlign:"justify"}}>To foster long-term partnerships by focusing on transparency, reliability, and client success, helping organizations navigate workforce complexities today and prepare for future growth.     </p></li>
                  </ul>

                    
                
                </div>
          </div>
          </div>
          </section>
           <FaqSection />
           
       <section className="clients-section py-5 text-center">
  <div className="container">
    <h2 className="subFont">
      OUR<span style={{ color: "#1565C0" }}> CLIENTS</span>
    </h2>

    <Marquee
      gradient={false}
      speed={40}
      pauseOnHover={true}
      direction="left"
      className="mt-4"
    >
      {clients.map((client) => (
        <div
          key={client.id}
          className="mx-3"
          style={{ width: "220px" }} // maintain consistent width
        >
          <div className="client-box dotted-border">
            <img
              src={client.img}
              alt={client.alt}
              className="img-fluid"
              style={{ maxHeight: "100px", objectFit: "contain" }}
            />
          </div>
        </div>
      ))}
    </Marquee>
    
    <button
                  className="btn btn-sm btn-secondary hover-border-11 mt-5"
                  onClick={() => navigate('/ourclient')}
                >
                  <span>View All &rsaquo;</span>
                </button>
  </div>
</section>

       <ContactSection/>

    <Footer/>
   
   
   </>
  )
}

export default About