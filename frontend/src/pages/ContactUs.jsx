import React, { useState } from 'react';
import './ContactUs.css'; // Import ContactUs.css for styling
import emailIcon from './images/mail.png';
import phoneIcon from './images/phone-call.png';
import locationIcon from './images/office.png';

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Comment:', comment);
  };

  return (
    <div className="contact-us-container">
      <h1 className="contact-us-title">Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <div className="contact-info">
        <div className="info-item">
          <img src={emailIcon} alt="Email Icon" />
          <p>example@example.com</p>
        </div>
        <div className="info-item">
          <img src={phoneIcon} alt="Phone Icon" />
          <p>+1234567890</p>
        </div>
        <div className="info-item">
          <img src={locationIcon} alt="Location Icon" />
          <p>123 Street, City, Country</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
