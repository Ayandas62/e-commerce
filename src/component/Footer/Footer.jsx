import React from 'react'
import './Footer.css';
import footer_logo from '../assets/logo_big.png'
import insta from '../assets/instagram_icon.png'
import printster from '../assets/pintester_icon.png'
import whatsapp from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="footer-logo" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-link">
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container" >
                <img src={insta} alt="" />
            </div>
            <div className="footer-icon-container" >
                <img src={printster} alt="" />
            </div>
            <div className="footer-icon-container" >
                <img src={whatsapp} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 - All Right Reseverd</p>
        </div>
    </div>
  )
}

export default Footer