import React, { useContext } from 'react';
import './PlaceOrder.css'
import { ShopContext } from '../../Context/ShopContext'
import {useNavigate } from 'react-router-dom';

const PlaceOrder = () => {

    const {getTotalCartAmount} = useContext(ShopContext)

    const navigate = useNavigate();

    return (
        <form className='place-order'>
           <div className="place-order-left">
            <p className='title'>Delivery Information</p>
           <div className="multi-field">
                <input type="text" placeholder='First name'/>
                <input type="text" placeholder='Last name'/>
           </div>

                <input type="email" placeholder='Email addres'/>
                <input type="text" placeholder='Street'/>
            <div className="multi-field">
                <input type="text" placeholder='City'/>
                <input type="text" placeholder='State'/>
           </div> 

           <div className="multi-field">
                <input type="text" placeholder='Zip code'/>
                <input type="text" placeholder='Country'/>
           </div>
           <input type="text" placeholder='Phone'/>
           </div>
           <div className='place-orde-right'>
           <div className='cartitems-total'>
                    <h1>cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
            
                        </div>
                        <hr />

                        <div className="cartitems-total-item">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount()===0?0:2}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</h3>
                        </div>
                    </div>
                    <button onClick={()=>navigate('/payment')}>PROCEED TO PAYMENT</button>
                </div>
           </div>
        </form>
    );
};

export default PlaceOrder;