import { BiBorderRadius } from "react-icons/bi"
import pic1 from "../images/logonew.png"
import { Link } from "react-router-dom";

export default function Footer(){
    return(
      <>
       <footer>
        <div className='container '>
          <div className='row'>
            <div className='col-md-12 col-12 pb-3' >
           
              {/* <img className='pt-3 pb-3' src='01.png' alt='sarkariexam' /> */}
            </div>
            <div className='col-md-4 pb-3'>


            <div className='row'>
            <div className="col-md-12"><h4 style={{ textAlign:"center", fontWeight: "700", color: "#f5a623",fontSize:"21px" }} className="text-uppercase">Vaishnavi Consultancy Services</h4></div>
            </div>
            {/* <img src={pic1} className="" alt="sarkariexam" style={  {borderRadius:"20px",padding:"10px",background:"white"}} /> */}
              <h5 style={{textAlign:"justify"}}>Vaishnavi Consultancy Services, founded in 2010, is a leading provider of manpower outsourcing, payroll management, and facility support services in India. With a strong presence in 8 states, we have established ourselves as a trusted partner for both government organizations and private sector enterprises. </h5>
            </div>
            <div className='col-md-4 pb-3'>
              
              <div className='row'>
                <div className="col-md-12"><h4 style={{ textAlign:"center", fontWeight: "700", color: "#f5a623" ,fontSize:"21px"}} className="text-uppercase">Quick Link</h4></div>
                <div className='col-md-12 col-12 text-center' >
                  <a href="/"><h5>Home</h5></a>
                  <a href="/about"><h5>About</h5></a>
                  <a href="/blog"><h5>Blog</h5></a>
                  <a href="/partner"><h5>Gallery</h5></a>
                  <a href="/findjob"><h5>Find Job</h5></a>
                  {/* <a href="/contact"><h5>Contact Us</h5></a> */}
                  <a href="/privacy"><h5>Privacy & Policy</h5></a>
                  <a href="/term"><h5>Term & Condition</h5></a>
                </div>
               
              </div>

            </div>
            <div className='col-md-4 text-center'>
               <Link to="/">
              <img
                                                              src={pic1}
                                                              alt="logo"
                                                              style={{ width: "100%", height: "70px", objectFit: "contain" }}
                                                          /></Link>
                <a href="/contact"><button
  type="button"
  style={{
    backgroundColor: '#f5a623',
    color: '#fff',
    border: 'none',
    padding: '14px 36px',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: '16px',
    cursor: 'pointer',
    boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease-in-out',
    minWidth: '160px',
  }}
    
  onMouseEnter={e => {
    e.currentTarget.style.backgroundColor = '#ffbf00';
    e.currentTarget.style.transform = 'translateY(-2px)';
  }}
  onMouseLeave={e => {
    e.currentTarget.style.backgroundColor = '#f5a623';
    e.currentTarget.style.transform = 'translateY(0)';
  }}
>
  Contact Us
</button></a>
              </div>
          </div>
        </div>
      </footer>
      <section className='copyy'>
        <div className='container'>
          <div className='row'>
            <div className="col-md-12">
              <p style={{ color: "#fff", textAlign: "center" }} className="mb-1 mt-1">
                Copyrights 2025 <a style={{ fontWeight: "700", color: "#fff" }} href="/">Vaishnavi Consultancy Services</a>. All Rights Reserved.
              </p>
            </div>
            {/* <div className="col-md-6">
              <p style={{ color: "#fff", textAlign: "center" }} className="mb-1 mt-1">
                Designed By{" "}
                <a style={{ fontWeight: "700", color: "#f5a623" }} href="https://www.brightcodess.com/">Brightcode Software Services.</a>
              </p>
            </div> */}
          </div>
        </div>
      </section>
      </>
    )
}