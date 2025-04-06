import React, { useState } from 'react';
import img1 from '../assets/images/support.png';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Support() {
  // Define state for form fields and success/error messages
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    message: '',
    agree: false,
  });

  const [formStatus, setFormStatus] = useState(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.email ||
      !formData.phonenumber ||
      !formData.message ||
      !formData.agree
    ) {
      setFormStatus('Please fill in all fields and agree to the terms.');
      return;
    }

    try {
      // Show loading toast
      toast.loading('Submitting your message...');

      // Post form data to API
      const response = await fetch('https://server-r7k9.onrender.com/api/supportform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Show success alert with SweetAlert2
        Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
        });

        // Reset form
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phonenumber: '',
          message: '',
          agree: false,
        });
      } else {
        setFormStatus('There was an error submitting the form. Please try again.');
        toast.error('Error submitting the form.');
      }
    } catch (error) {
      setFormStatus('Error submitting the form. Please try again later.');
      toast.error('Error submitting the form. Please try again later.');
      console.error(error);
    } finally {
      // Close loading toast
      toast.dismiss();
    }
  };

  return (
    <>
      <section className="support_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right" data-aos-duration="1500">
              <h2 className="heading_title">Welcome to our <br />support page!</h2>
              <p className="heading_text pb-4">We're here to help you with any problems you may be <br />having with our product.</p>
              <div className="support_img mt-3">
                  {/* <img src={img1} alt="" /> */}
              </div>
            </div>
            <div className="col-lg-8" data-aos="fade-left" data-aos-duration="1500">
              <div className="form mt-lg-0 mt-5">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form_input">
                        <label htmlFor="firstname">First Name</label>
                        <input
                          type="text"
                          name="firstname"
                          id="firstname"
                          placeholder="Enter First Name"
                          value={formData.firstname}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_input">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                          type="text"
                          name="lastname"
                          id="lastname"
                          placeholder="Enter Last Name"
                          value={formData.lastname}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_input">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter Your Email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_input">
                        <label htmlFor="phonenumber">Phone Number</label>
                        <input
                          type="number"
                          name="phonenumber"
                          id="phonenumber"
                          placeholder="Enter Your Number"
                          value={formData.phonenumber}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form_input">
                        <label htmlFor="message">Message</label>
                        <textarea
                          name="message"
                          id="message"
                          rows={8}
                          placeholder="Enter Your Message"
                          value={formData.message}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="form_confirm ps-md-3">
                        <div className="form_confirm text-start">
                          <input
                            type="checkbox"
                            name="agree"
                            id="agree"
                            required
                            checked={formData.agree}
                            onChange={handleInputChange}
                          />
                          <label>I agree with Terms of Use and Privacy Policy</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-md-end text-center">
                        <button className="sub_btn" type="submit">Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {formStatus && (
                <div className="form_status">
                  <p>{formStatus}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* React Toastify Container */}
      <ToastContainer />
    </>
  );
}

export default Support;
