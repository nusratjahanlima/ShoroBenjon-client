import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contactUs'>
           <div className='contact-heading'>
                <h2>Contact Us</h2> 
                <p>Have any questions?We'd love to hear from you.</p>
           </div>

           <div className="contact-main">
            <div className="contact-main-sub">
                <h3>Press</h3>
                <p>Are you interested in our latest collection or design on a ShoroBenjon story and need to get in touch?</p>
                <button>Visit Press Page</button>
            </div>

            <div className="contact-main-sub">
                <h3>Help & Support</h3>
                <p>Our support team is spread across the globe to give you answers first.</p>
                <button>Visit Support Page</button>
            </div>

            <div className="contact-main-sub">
                <h3>Sales</h3>
                <p>Getting touch with our sales team to see how we can work together</p>
                <button>Contact sales</button>
            </div>
           </div>
        </div>
    );
};

export default Contact;