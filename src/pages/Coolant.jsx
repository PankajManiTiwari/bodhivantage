import Header from '../component/Header'
import Footer from '../component/Footer'

import ban1 from "../images/colnet.jpg"
import mcq from "../images/p05.png"
function Coolant() {
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
                <div className="col-md-12">
                    <h3 className="text-warning text-uppercase">Coolant</h3>
                    <hr className="text-center" style={{ border: "5px solid orange", width: "20%", margin: "0px 0px 5px 0px",textAlign:"center" }} /><br></br>
                </div>

                <div className='col-md-6'>
                <img src={mcq} className="w-100" alt="band3.jpg" />
                </div>
                <div className='col-md-6'>
                    <p style={{textAlign:"justify"}}>
                    CorviX Engine oil meets the requirements of <span style={{fontWeight:700}} className='text-warning'>SAE –</span> Society of Automotive Engineers 20W-40, <span style={{fontWeight:700}} className='text-warning'>API SN –</span> American Petroleum Institute, <span style={{fontWeight:700}} className='text-warning'>JASO MA2 –</span> Japanese Automotive Standards Organization  
                    </p>
                    <h5 className="text-warning">PRODUCT BENEFITS:</h5>
                    <hr className="text-center" style={{ border: "5px solid orange", width: "35%", margin: "0px 0px 5px 0px",textAlign:"center" }} /><br></br>
                    <p style={{fontWeight:200, fontSize:"17px"}}>1. Very good shear stability and excellent viscosity temperature behaviour.</p>
                    <p style={{fontWeight:200, fontSize:"17px"}}>2. Outstanding thermal and oxidation stability .</p>
                    <p style={{fontWeight:200, fontSize:"17px"}}>3. Provides better fuel economy. </p>
                    <p style={{fontWeight:200, fontSize:"17px"}}>4. Longer drain interval means value for money.  </p>
                    <p style={{fontWeight:200, fontSize:"17px"}}>5. Excellent operation at high temperature conditions.  </p>
                    <p style={{fontWeight:200, fontSize:"17px"}}>6. Maintains a high order of engine cleanliness. </p>
                    <div className='row'>
                        <div className='col-md-6 col-6'>
                            <h5 className="text-warning">BikXL 20W40 API SN:</h5>
                            <p style={{textAlign:"justify"}}>Lubrication to keep the engine in Perfect shape, reaches extreme corners & longer service duration</p>
                        </div>
                        <div className='col-md-6 col-6'>
                        <h5 className="text-warning">BikXL+ 20W40 API SN</h5>
                        <p style={{textAlign:"justify"}}>Advanced lubrication for extended engine life, action even in intricates parts & quick action, eliminate starting problem</p>
                        </div>
                        <div className='col-md-12 col-12 text-center'>
                            <a href='' className='btn btn-lg btn-warning'>Download Pdf</a>
                            </div>
                    </div>



                    </div>





                </div>
                </div>

</section>    
    <Footer/>
    </>
  )
}

export default Coolant