import React, {useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function JobSeekerForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});
  const { jobId } = useParams();

  const validateForm = () => {
     
       
    const newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!name.trim()) newErrors.name = "Full Name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(email)) newErrors.email = "Please enter a valid Email address.";
    if (!mobile.trim()) newErrors.mobile = "Phone Number is required.";
    else if (mobile.length !== 10) newErrors.mobile = "Phone Number must be exactly 10 digits.";
    if (!resume) newErrors.resume = "Resume file is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
 useEffect(()=> {
          window.scrollTo(0, 0);
        },[]);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', mobile);
    formData.append('resume', resume);
    formData.append('job_id', jobId);

    try {
      // const response = await fetch('https://vaishnavicsadmin.codezealtech.in/api/customer/registeration', {
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
        setResume(null);
        setErrors({});
      } else {
        // alert('Something went wrong!');
        Swal.fire('Error!', 'Something went wrong.', 'error');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // alert('Error while submitting the form!');
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
                    <label htmlFor="email">Email address*</label>
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
                      placeholder="Phone Number*"
                      id="mobile"
                      name="mobile"
                      value={mobile}
                      maxLength={10}
                      onChange={(e) => setMobile(e.target.value.replace(/[^0-9]/g, ''))}
                    />
                    {errors.mobile && <small style={{ color: 'red' }}>{errors.mobile}</small>}
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
                    style={{ background: "rgb(20, 33, 43)", color: "#fff" }}
                    className="btn btn-block"
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
