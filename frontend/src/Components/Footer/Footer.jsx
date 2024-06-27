import React from 'react'
import './Footer.css'
import { assets } from './../../assets/assets';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={assets.logo} alt="" />
        <p>SHOPPING</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={assets.instagram_icon} alt="" />
          
        </div>
        <div className="footer-icons-container">
          <img src={assets.pintester_icon} alt="" />
          
        </div>
        <div className="footer-icons-container">
          <img src={assets.whatsapp_icon} alt="" />
          
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>


      
    </div>
  )
}

export default Footer
