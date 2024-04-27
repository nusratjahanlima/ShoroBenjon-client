import React from 'react';
import './Payment.css'
import bKash_logo from '../Assets/bKash-logo.png'

const Payment = () => {
    return (
        <div className='payment'>
            <div className="payment-heading">
                <img src={bKash_logo} alt="" />
                <h3>bKash Online Payment Gateway</h3>
                <p style={{color: 'magenta'}}>01xxx345673</p>
            </div>

            <div className="payment-main">
                <input type="text" placeholder='User name'/>
                <input type="text" placeholder='Your email' />
                <input type="text" placeholder='Your phone no'/>
                <input type="text" placeholder='Transaction id' />
            </div>

            <div className="payment-btn">
                <button>Pay now</button>
            </div>
        </div>
    );
};

export default Payment;