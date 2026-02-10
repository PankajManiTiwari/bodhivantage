
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'; 
import Home from './pages/Home'
import About from './pages/About';

import Contact from './pages/Contact';
import Partner from './pages/Partner';
import Blog from './pages/Blog';
import JobSeekerForm from './pages/JobSeekerForm';
import FindJob from './pages/FindJob';
import Staffing from './pages/Staffing';
import Manpower from './pages/ManPower';
import Housekeeping from './pages/Housekeeping';
import Payroll from './pages/Payroll';
import Consultancy from './pages/Consultancy';
import ITStaff from './pages/ITStaff';
import Healthcare from './pages/Healthcare';
import Hospitality from './pages/Hospitality';
import Automotive from './pages/Automotive';
import Retail from './pages/Retail';
import Manufacturing from './pages/Manufacturing';
import Banking from './pages/Banking';
import Electronics from './pages/Electronics';
import Logistics from './pages/Logistics';
import Educational from './pages/Educational';
import Government from './pages/Government';
import Privacy from './pages/Privacy';
import Blogdetails from './pages/Blogdetails';
// import ContractStaffing from './pages/Contactsection';

import PermanentStaffing from './pages/PermanentStaffing';
import ContractStaffing from './pages/ContractStaffing';
import OurClient from './pages/OurClient';
import Term from './pages/Term';
import WhatsAppButton from './pages/WhatsAppButton';
import JobPostCarousel from './pages/JobPostSection';
import OtherJobSeekerForm from './pages/OtherJobSeekerForm';

function App() {

  return (
    <>

      <BrowserRouter>
          <Routes>
          <Route path="/" index element={<Home/>}/>
          <Route path="/about" element={<About/>} />
        
          <Route path="/contact" element={<Contact/>}/>
          
          <Route path="/partner" element={<Partner/>}/> 
           <Route path="/blog" element={<Blog/>}/> 
          <Route path="/jobseekerform/:jobId" element={<JobSeekerForm />} /> 
           <Route path='/findjob' element={<FindJob/>}/> 
           <Route path='/staffing' element={<Staffing/>}/> 
            <Route path='/manpower' element={<Manpower/>}/> 
             <Route path='/housekeeping' element={<Housekeeping/>}/> 
             <Route path='/payroll' element={<Payroll/>}/> 
             <Route path='/consultancy' element={<Consultancy/>}/>
             <Route path='/itstaff' element={<ITStaff/>}/>  
              <Route path='/healthcare' element={<Healthcare/>}/>  
              <Route path='/hospitality' element={<Hospitality/>}/>  
              <Route path='/manufacturing' element={<Manufacturing/>}/>  
              <Route path='/automotive' element={<Automotive/>}/>  
              <Route path='/retail' element={<Retail/>}/>  
              <Route path='/banking' element={<Banking/>}/>  
              <Route path='/electronics' element={<Electronics/>}/>  
              <Route path='/logistics' element={<Logistics/>}/>  
              <Route path='/educational' element={<Educational/>}/>  
              <Route path='/government' element={<Government/>}/> 
              <Route path='/privacy' element={<Privacy/>}/>   
               <Route path='/term' element={<Term/>}/>   
                <Route path="/blog-details/:id" element={<Blogdetails />} />
                <Route path="/contractstaffing" element={<ContractStaffing />} />
                <Route path="/permanentstaffing" element={<PermanentStaffing />} />
                  <Route path="/alljobpostsection" element={<JobPostCarousel />} />
                  <Route path="/otherJobSeekerForm" element={<OtherJobSeekerForm />} />
                <Route path="/ourclient" element={<OurClient />} />
          </Routes>
          <WhatsAppButton />
      </BrowserRouter>
    </>
  )
}

export default App
