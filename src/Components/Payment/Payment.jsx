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
                <div>
                <label htmlFor="">User name</label>
                <input type="text" />
                </div>
                <div>
                <label htmlFor="">Your email</label>
                <input type="text"  />
                </div>
                <div>
                <label htmlFor="">Your phone no</label>
                <input type="text" />
                </div>
                <div>
                <label htmlFor="">Transaction id</label>
                <input type="password"  />
                </div>
            </div>

            <div className="payment-btn">
                <button>Pay now</button>
            </div>
        </div>
    );
};

export default Payment;