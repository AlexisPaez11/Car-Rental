import React from 'react'
import { NavLink} from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-section">
            <div className="footer-information">
            <NavLink to="/" className='logo'>
                <span>OPTIMUS</span>
            </NavLink>
            <p>Premium cars.<br />
            Enjoy the luxury</p>
            <p className='copyright'>© 2022 Optimus All rights reserved.</p>
            </div>
            
            <div className="footer-container">
                <div className="footer-item">
                    <h4>Product</h4>
                    <p>Overview</p>
                    <p>Features</p>
                    <p>Solutions</p>
                    <p>Tutorials</p>
                    <p>Releases</p>
                </div>
                <div className="footer-item">
                    <h4>Company</h4>
                    <p>Careers</p>
                    <p>News</p>
                    <p>Help</p>
                    <p>Tutorials</p>
                    <p>Support</p>
                </div>
                <div className="footer-item">
                    <h4>Social</h4>
                    <p>LinkedIn</p>
                    <p>Facebook</p>
                    <p>Instagram</p>
                </div>
                <div className="footer-item">
                    <h4>Legal</h4>
                    <p>Terms</p>
                    <p>Privacy</p>
                    <p>Cookies</p>
                    <p>Licences</p>
                    <p>Settings</p>
                    <p>Contact</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer