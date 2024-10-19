import React from 'react';
import { FaGithubSquare, FaInstagramSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-6 mb-4 text-left'>
            <h5 className='footer-heading'>Follow Us</h5>
            <div className='social-links'>
              <a href='https://github.com' target='_blank' rel='noopener noreferrer'>
                <FaGithubSquare className='social-icon' />
              </a>
              <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                <FaInstagramSquare className='social-icon' />
              </a>
              <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                <FaFacebookSquare className='social-icon' />
              </a>
              <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='social-icon' />
              </a>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 mb-4 text-right'>
            <h5 className='footer-heading'>Contact Us</h5>
            <ul className='list-unstyled contact-info'>
              <li className='footerb'><FaMapMarkerAlt /> 123 Explore St, Delhi, India</li>
              <li className='footerb'><FaPhoneAlt /> +91 98765 43210</li>
              <li className='footerb'><FaEnvelope /> info@exploreindia.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
