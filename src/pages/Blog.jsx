import Header from '../component/Header'
import Footer from '../component/Footer'

import ban1 from "../images/blog.jpg"
import blog1 from "../images/blog1.jpg"
import blog2 from "../images/blog2.jpg"
import blog3 from "../images/blog3.jpg"
import blog4 from "../images/blog4.jpg"
import blogData from "./Blogdata.js"
import { Link } from 'react-router-dom'

function Blog() {

 
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

       <section className="clients-section py-5 text-center">
            <div className="container">
              <h2 className="mb-4">
                  <h4 className="subFont ">OUR<span style={{ color: '#1565C0' }}> BLOG</span></h4>
              </h2>
      
              {/* <div className="row">
                <div className="col-md-3 mb-4 ">
                   <div className="card eftcard" style={{width: "17rem"}}>
                    <img className="card-img-top" src={blog1} alt="Card image cap"/>
                    <div className="card-body">
                      <h5 className="card-title">Staffing Agency in Bihar</h5>
                      <p className="card-text">Workforce Solutions has established itself as one of the most dependable staffing agencies in Bihar, supporting organizations across the state in efficiently managing their workforce needs and navigating the region’s employment landscape.</p>
                      <a href="#" className="btn " style={{background:"#1565C0",color:"#fff"}}>READ MORE &rsaquo;</a>
                    </div>
                  </div>
      
                </div>
                <div className="col-md-3 mb-4 ">
                   <div className="card eftcard" style={{width: "17rem"}}>
                    <img className="card-img-top" src={blog2} alt="Card image cap"/>
                    <div className="card-body">
                      <h5 className="card-title">Consultancy Service</h5>
                      <p className="card-text">Vaishnavi Consultancy Service has emerged as a trusted name in Bihar's construction sector, providing reliable consultancy and project management solutions to ensure quality, efficiency, and timely completion across diverse infrastructure projects.</p>
                      <a href="#" className="btn " style={{background:"#1565C0",color:"#fff"}}>READ MORE &rsaquo;</a>
                    </div>
                  </div>
      
                </div>
      
                <div className="col-md-3 mb-4 ">
                   <div className="card eftcard" style={{width: "17rem"}}>
                    <img className="card-img-top" src={blog3} alt="Card image cap"/>
                    <div className="card-body">
                      <h5 className="card-title">Medical Care in Bihar</h5>
                      <p className="card-text">Vaishnavi Consultancy Service is recognized for its dependable support in the healthcare sector across Bihar, offering strategic consultancy and management solutions to enhance the quality, accessibility, and efficiency of medical care services statewide.</p>
                      <a href="#" className="btn" style={{background:"#1565C0",color:"#fff"}}>READ MORE &rsaquo;</a>
                    </div>
                  </div>
      
                </div>
                  <div className="col-md-3 mb-4 ">
                   <div className="card eftcard" style={{width: "17rem"}}>
                    <img className="card-img-top" src={blog4} alt="Card image cap"/>
                    <div className="card-body">
                      <h5 className="card-title">Logistics & Warehousing in Bihar</h5>
                      <p className="card-text">Vaishnavi Consultancy Service has established itself as a reliable name in Bihar’s logistics and warehousing sector, helping businesses improve operations, manage storage efficiently, and enhance overall supply chain performance.</p>
                      <a href="#" className="btn" style={{background:"#1565C0",color:"#fff"}}>READ MORE &rsaquo;</a>
                    </div>
                  </div>
      
                </div>
              
                
              </div> */}

                <div className="row">
                  {blogData.map((blog) => (
                    <div className="col-md-3 mb-4" key={blog.id}>
                      <div className="card eftcard">
                        <img className="card-img-top" src={blog.image} alt={blog.title} />
                        <div className="card-body">
                            <h5 className="" style={{fontSize:"15px",color:"#424242"}}>{blog.title}</h5>
                          <p className="card-text">{blog.content.substring(0, 100)}...</p>
                          <Link
                            to={`/blog-details/${blog.id}`}
                            className="btn"
                            style={{ background: "#1565C0", color: "#fff" }}
                          >
                            READ MORE &rsaquo;
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
             
      
            
            </div>
          </section>

      
    <Footer/>
    </>
  )
}

export default Blog