import React, { useEffect, useState } from "react";

import col1 from "../images/comlogo1.png";
import col2 from "../images/comlogo2.png";
import col3 from "../images/comlogo3.png";
import col4 from "../images/comlogo4.png";
import col5 from "../images/comlogo5.png";
import col6 from "../images/comlogo6.png";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

import ban1 from "../images/job.png"
import { Modal } from "react-bootstrap";
const jobs = [
  { id: 1, title: "Frontend Developer", company: "Brightcode Software Pvt Ltd", location: "Patna", type: "Full-Time", posted: "2 days ago", image: col1 },
  { id: 2, title: "Backend Developer", company: "Tech Minds", location: "Remote", type: "Part-Time", posted: "5 days ago", image: col2 },
  { id: 3, title: "UI/UX Designer", company: "DesignWare", location: "Bangalore", type: "Contract", posted: "1 week ago", image: col3 },
  { id: 4, title: "QA Engineer", company: "Quality Corp", location: "Mumbai", type: "Full-Time", posted: "3 days ago", image: col4 },
  { id: 5, title: "DevOps Engineer", company: "DeployNow", location: "Hyderabad", type: "Remote", posted: "4 days ago", image: col5 },
  { id: 6, title: "Product Manager", company: "Productify", location: "Delhi", type: "Full-Time", posted: "1 day ago", image: col6 },
];

const styles = {
  container: {
    width: "100%",
    padding: "40px 20px",
    backgroundColor: "#f9fafc",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "24px",
  },
  card: {
    width: "300px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  cardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "120px",
    objectFit: "contain",
    borderRadius: "12px",
    marginBottom: "16px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "6px",
    color: "#333",
  },
  text: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "4px",
  },
  posted: {
    fontSize: "13px",
    color: "#888",
    marginBottom: "12px",
  },
  button: {
    marginTop: "auto",
    padding: "10px",
   background: "linear-gradient(to right, #223041, #1565C0)",
    color: "#fff",
    fontWeight: "600",
    fontSize: "14px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
  
};


const JobPostCarousel = () => {
   const [showModal, setShowModal] = useState(false);
const [selectedJob, setSelectedJob] = useState(null);
const handleReadMore = (job) => {
  setSelectedJob(job);
  setShowModal(true);
};
const truncateText = (text, maxLength = 70) => {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};
   const [jobPostList,setjobPostList] = useState([]);
    useEffect(()=> {
      getPostJob()
      window.scrollTo(0, 0);
    },[]);
  
  const getPostJob = async () => {
    try {
      const response = await fetch('https://admin.vaishnavigroup.in/api/customer/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
      });
  
      const result = await response.json();
      
      setjobPostList(result.cat_res);
      console.log("PANKAJ",result.cat_res);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const navigate = useNavigate();
  return (<>
   <Header />
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
  <h4 className="subFont mt-5">🚀 Featured <span style={{ color: '#1565C0' }}>Job Openings</span></h4>
  

    
    <div style={styles.container}>
        
      {jobPostList.map((job) => (
        <div
          key={job.id}
          style={styles.card}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
          onMouseLeave={(e) =>
            Object.assign(e.currentTarget.style, {
              transform: "none",
              boxShadow: styles.card.boxShadow,
            })
          }
        >
          <img src={`https://admin.vaishnavigroup.in${job.logo}`} alt={job.companyName} style={styles.image} />

          <div style={styles.title}>{job.jobname}</div>
          <div style={styles.text}>{job.companyName} - {job.location}</div>
          <div style={styles.text}>{job.type}</div>
          <div style={styles.posted}>{job.date}</div>
          <div style={styles.text}>{job.salaryRange}</div>
           <div style={styles.text}>
        {truncateText(job.jobdescription)}
        {job.jobdescription.length > 150 && (
          <span
            onClick={() => handleReadMore(job)}
            style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
          >
            Read More
          </span>
        )}
      </div>
         <button className="mt-3" style={styles.button} onClick={() => navigate(`/jobseekerform/${job.id}`)}>
             Apply Now
            </button>
        </div>
      ))}
     
    </div>
   <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '30px 0',
        backgroundColor: '#f8f9fb', // Optional light background
      }}
    >
      <h5
        style={{
          margin: 0,
          marginBottom: '16px', // 👈 spacing below heading
          fontSize: '18px',
          fontWeight: '600',
          color: '#000',
        }}
      >
        Didn't Find Your Role?
      </h5>

      <button
        onClick={() => navigate('/otherJobSeekerForm')}
        style={{
          background: 'linear-gradient(to right, #2c3e50, #2980b9)',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        Click Here &rsaquo;
      </button>
    </div>

    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
  <Modal.Header>
    <Modal.Title>{selectedJob?.jobname}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <img src={`https://admin.vaishnavigroup.in${selectedJob?.logo}`} alt="Company Logo" style={{ width: "100px", marginBottom: "10px" }} />
    <p><strong>Company:</strong> {selectedJob?.companyName}</p>
    <p><strong>Location:</strong> {selectedJob?.location}</p>
    <p><strong>Type:</strong> {selectedJob?.type}</p>
    <p><strong>Date:</strong> {selectedJob?.date}</p>
    <p><strong>Salary:</strong> {selectedJob?.salaryRange}</p>
    <p><strong>Description:</strong></p>
    <p>{selectedJob?.jobdescription}</p>
  </Modal.Body>
  <Modal.Footer>
    <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
  </Modal.Footer>
</Modal>
    <Footer/>
      </>
  );
};

export default JobPostCarousel;
