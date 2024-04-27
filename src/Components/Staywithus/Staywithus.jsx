import React from 'react';
import './Staywithus.css'
import mail_icon from '../Assets/mail-icon.png'

const Staywithus = () => {
    return (
        <div className='staytuned'>
            <div className="staytuned-left">
                <div className='staytumed-main'>
                    <img src={mail_icon} alt="" />
                    <h2>STAY TUNED</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="staytuned-right">
                <div className="input-first">
                    <input type="text" placeholder='Enter your email' />
                    <div className='staytuned-checkbox'>
                    <input type="checkbox" id="agree-checkbox" required />
                    <label for="agree-checkbox">I am in Bangladesh</label>
                    </div>
                </div>

                <div className="input-first">
                    <input type="text" placeholder='Enter your phone no'/>
                    <div className='staytuned-checkbox'>
                    <input type="checkbox" id="agree-checkbox" required />
                    <label for="agree-checkbox">I am outside of Bangladesh</label>
                    </div>
                </div>

                <div className="st-btn">
                    <button>Subscribe</button>
                </div>
            </div>

            
        </div>
    );
};

export default Staywithus;