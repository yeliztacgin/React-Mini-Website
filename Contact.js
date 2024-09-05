
import React, { useState } from 'react';
import Icons from '../components/Icons'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form verilerini gönderme işlemi
    setFormSubmitted(true);
    // Burada form verilerini göndermek için bir API çağrısı yapabilirsiniz.
  };

  return (
    <div className="container mt-5">
      <h1 style={{marginTop:150}} >Contact Us</h1>
      {formSubmitted ? (
        <div className="alert alert-success" role="alert">
          Thank you for your message! We will get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
        
      )} 
      <br></br>
      <br></br>
      <br></br>
      <Icons></Icons>
      <br></br>
      <br></br>
      <br></br>
    </div>
   
  );
};

export default Contact;
