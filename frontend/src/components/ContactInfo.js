import React from 'react';
import '../App.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; 

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>Contact Details</h2>
      <div className="contact-row">
        <a href="mailto:sharma.rishi130198@gmail.com" className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/rishi-sharma13/" className="contact-item">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/sharma-rishi-130198" className="contact-item">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;

