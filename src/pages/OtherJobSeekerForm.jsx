import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function OtherJobSeekerForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [remarks, setRemarks] = useState('');
  const [resume, setResume] = useState(null);
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});
  const { jobId } = useParams();
    useEffect(()=> {
            window.scrollTo(0, 0);
          },[]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!gmailRegex.test(email)) newErrors.email = "Enter a valid Email address (e.g., user@gmail.com).";
    if (!mobile.trim()) newErrors.mobile = "Mobile number is required.";
    else if (mobile.length !== 10) newErrors.mobile = "Mobile number must be 10 digits.";
    if (!jobRole.trim()) newErrors.jobRole = "Job role is required.";
    if (!remarks.trim()) newErrors.remarks = "Remarks are required.";
    if (!resume) newErrors.resume = "Resume file is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setValidated(true);
      return;
    }

    setErrors({}); // clear previous errors

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', mobile);
    formData.append('job_role', jobRole);
    formData.append('remarks', remarks);
    formData.append('resume', resume);
    formData.append('job_id', jobId);

    try {
      const response = await fetch('https://admin.vaishnavigroup.in/api/customer/registeration', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        Swal.fire('Success!', 'Thank you! Our repersentative will reach out to you shortly', 'success');
        // alert('Thank you! Our repersentative will reach out to you shortly');
        setName('');
        setEmail('');
        setMobile('');
        setJobRole('');
        setRemarks('');
        setResume(null);
        setValidated(false);
      } else {
      
        Swal.fire('Error!', 'Something went wrong!', 'error');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      
       Swal.fire('Error!', 'Error while submitting the form!', 'error');
    }
  };

  return (
    <>
      <Header />
      <div className="container" style={{ maxWidth: "500px" }}>
        <div className="row">
          <div className="col-md-12 mb-4 mt-4">
            <div className="card shadow-sm">
              <div className="card-header text-white text-center" style={{ background: "#1565C0" }}>
                <h4 className="mb-0">Job Seeker Registration</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label htmlFor="name">Full Name*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value.replace(/[0-9]/g, ''))}
                      placeholder="Enter your name*"
                    />
                    {errors.name && <small style={{ color: 'red' }}>{errors.name}</small>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address*</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your Email*"
                    />
                    {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="mobile">Phone Number*</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="mobile"
                      name="mobile"
                      value={mobile}
                      onChange={(e) => {
                        const onlyNumbers = e.target.value.replace(/[^0-9]/g, '');
                        setMobile(onlyNumbers);
                      }}
                      placeholder="Enter 10-digit phone number*"
                      maxLength={10}
                    />
                    {errors.mobile && <small style={{ color: 'red' }}>{errors.mobile}</small>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="jobRole">Job Role*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="jobRole"
                      name="jobRole"
                      value={jobRole}
                      onChange={(e) => setJobRole(e.target.value)}
                      placeholder="Enter desired job role*"
                    />
                    {errors.jobRole && <small style={{ color: 'red' }}>{errors.jobRole}</small>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="remarks">Remarks*</label>
                    <textarea
                      className="form-control"
                      id="remarks"
                      name="remarks"
                      value={remarks}
                      onChange={(e) => setRemarks(e.target.value)}
                      placeholder="Enter any remarks*"
                    ></textarea>
                    {errors.remarks && <small style={{ color: 'red' }}>{errors.remarks}</small>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="resume">Upload Resume*</label>
                    <input
                      type="file"
                      className="form-control-file"
                      id="resume"
                      name="resume"
                      onChange={(e) => setResume(e.target.files[0])}
                      accept=".pdf,.doc,.docx"
                    />
                    {errors.resume && <small style={{ color: 'red' }}>{errors.resume}</small>}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-block"
                    style={{ background: "rgb(20, 33, 43)", color: "#fff" }}
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
