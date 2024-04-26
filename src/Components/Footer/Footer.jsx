import React from 'react';
import './Footer.css'
import footer_logo from '../Assets/shoro-benjon.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHORO BENJON</p>
            </div>


            <div className="footer-details">
                <div className="footer-left">
                    <h2>Bangladesh store</h2>
                    <p>H-32, 115 Gulshan Avenue, Gulshan-2</p>
                    <p>Dhaka District</p>
                    <input type="text" />
                </div>

                <div className="footer-middle">
                    <h2>Contact us</h2>
                    <p>shorobenjon@gmail.com</p>
                    <p>017424356289</p>
                    
                    <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>

                <div className="footer-icons-container">
                    <img src={pintester_icon} alt="" />
                </div>

                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>


                </div>
            

            <div className="footer-right">
                <h2>HELP</h2>
                    <ul className="footer-link">
                        <li>shipping-delivery-policy</li>
                        <li>Return & Exchange Policy</li>
                        <li>Return My Order</li>
                        <li>Privacy Policy</li>
                        <li>Terms of service</li>
                        <li>FAQ's</li>
                        <li>Blog</li>
                    </ul>
            </div>

            </div>
            
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All Right Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;