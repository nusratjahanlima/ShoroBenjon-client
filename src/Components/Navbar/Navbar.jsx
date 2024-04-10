import React, { useContext } from 'react';
import { useState } from "react";
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Shoro <span class="special">Benjon</span></p>
            </div>

            <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none', color: 'white'}} to='/'>Home</Link></li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration: 'none', color: 'white'}} to='/mens'>Men</Link> </li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none',color: 'white'}} to='/womens'>Women</Link></li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none',color: 'white'}} to='/kids'>Kid</Link> </li>
            </ul>

            <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">
                  {getTotalCartItems()} 
                </div>
            </div>
        </div>
    );
};

export default Navbar;