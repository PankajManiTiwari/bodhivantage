import { useState } from "react";
import image from "../images/map.png";
import Swal from "sweetalert2";

function ContactSection() {
  const [mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) newErrors.name = "Full Name is required.";
    if (!mobile.trim()) newErrors.mobile = "Phone Number is required.";
    else if (mobile.length !== 10) newErrors.mobile = "Phone Number must be exactly 10 digits.";
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(email)) newErrors.email = "Please enter a valid email.";
    if (!message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const handleSubmitForm = async (e) => {
  if (e) e.preventDefault();
  

  const newErrors = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name.trim()) newErrors.name = "Full Name is required.";
  if (!mobile.trim()) newErrors.mobile = "Phone Number is required.";
  else if (mobile.length !== 10) newErrors.mobile = "Phone must be exactly 10 digits.";
  if (!email.trim()) newErrors.email = "Email is required.";
  else if (!emailRegex.test(email)) newErrors.email = "Enter valid email.";
  if (!message.trim()) newErrors.message = "Message is required.";

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
     const formData = new FormData();
      formData.append('name', name);
    formData.append('mobile', mobile);
    formData.append('email', email);
    formData.append('message', message);
    
    try {
      const response = await fetch('https://admin.vaishnavigroup.in/api/customer/addquery', {
        method: 'POST',
     
        body: formData, // ✅ Convert object to JSON string
      });
      console.log(response);

      if (response.ok) {
        Swal.fire('Success!', 'Thank you! Our representative will reach out to you shortly', 'success');
        setName('');
        setMobile('');
        setEmail('');
        setMessage('');
        setErrors({});
      } else {
        Swal.fire('Error!', 'Something went wrong.', 'error');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire('Error!', 'Error while submitting the form!', 'error');
    }
  }
};

  return (
    <>
      <div className="contact-container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="text-center">
              <h4 className="subFont text-center ">
                OUR<span style={{ color: "rgb(21, 101, 192)" }}> PRESENCE </span>
              </h4>
              <hr
                className="mx-auto"
                style={{
                  border: "5px solid #FFB300",
                  width: "20%",
                  margin: "0px 0px 5px 0px",
                }}
              />
              <br />
              <img
                src={image}
                className="img-fluid"
                alt="map.png"
                style={{ width: "50%" }}
              />
            </div>
          </div>
          <div className="col-md-6 col-12 contact-right">
            <h3>Reach Out to Us</h3>
            <p>
              Send us a message today to talk about your staffing requirements and
              learn how we can support your hiring goals.
            </p>
            <form className="contact-form" onSubmit={handleSubmitForm} noValidate>
              <input
                type="text"
                placeholder="Full Name*"
                value={name}
                onChange={(e) => setName(e.target.value.replace(/[0-9]/g, ''))}
                required
              />
              {errors.name && <small style={{ color: "red" }}>{errors.name}</small>}

              <input
                type="tel"
                placeholder="Phone Number*"
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/[^0-9]/g, ''))}
                maxLength="10"
                required
              />
              {errors.mobile && <small style={{ color: "red" }}>{errors.mobile}</small>}

              <input
                type="email"
                placeholder="Email address*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}

              <textarea
                placeholder="Message*"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              {errors.message && <small style={{ color: "red" }}>{errors.message}</small>}

              <button type="submit">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactSection;
