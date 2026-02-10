import Header from '../component/Header'
import Footer from '../component/Footer'

import ban1 from "../images/job.png"
import JobPostCarousel from './JobPostSection'

function FindJob() {
  return (
   <>
   {/* <Header/> */}
   {/* <section className='desktop'>
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
      </section> */}

          <JobPostCarousel/>

      
    {/* <Footer/> */}
    </>
  )
}

export default FindJob