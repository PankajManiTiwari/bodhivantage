import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
  },
  viewAllButton: {
    marginTop: "30px",
    padding: "12px 24px",
    backgroundColor: "#1565C0",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

const HomeJobPostCarousel = () => {
  const [jobPostList, setJobPostList] = useState([]);
  const [showjobModal, setShowjobModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getPostJob();
    window.scrollTo(0, 0);
  }, []);

  const getPostJob = async () => {
    try {
      const response = await fetch("https://admin.vaishnavigroup.in/api/customer/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });

      const result = await response.json();
      setJobPostList(result.cat_res.slice(0, 3)); // Show only first 3 jobs
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleReadMore = (job) => {
    setSelectedJob(job);
    setShowjobModal(true);
  };

  const truncateText = (text, maxLength = 70) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <>
      <h4 className="subFont mt-5">
        🚀 Featured <span style={{ color: "#1565C0" }}>Job Openings</span>
      </h4>

      <div style={styles.container}>
        {jobPostList.map((job) => (
          <div key={job.id} style={styles.card}>
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

      <div style={{ textAlign: "center" }}>
        <button
          className="btn btn-sm btn-secondary hover-border-11 mt-1 mb-5"
          onClick={() => navigate('alljobpostsection')}
        >
          <span>View All &rsaquo;</span>
        </button>
      </div>

      {/* ✅ Modal for full job description */}
      <Modal show={showjobModal} onHide={() => setShowjobModal(false)} centered size="lg" scrollable>
        <Modal.Header >
          <Modal.Title>{selectedJob?.jobname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={`https://admin.vaishnavigroup.in${selectedJob?.logo}`}
            alt="Company Logo"
            style={{ width: "100px", marginBottom: "10px" }}
          />
          <p><strong>Company:</strong> {selectedJob?.companyName}</p>
          <p><strong>Location:</strong> {selectedJob?.location}</p>
          <p><strong>Type:</strong> {selectedJob?.type}</p>
          <p><strong>Date:</strong> {selectedJob?.date}</p>
          <p><strong>Salary:</strong> {selectedJob?.salaryRange}</p>
          <p><strong>Description:</strong></p>
          <p>{selectedJob?.jobdescription}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={() => setShowjobModal(false)}>Close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HomeJobPostCarousel;
