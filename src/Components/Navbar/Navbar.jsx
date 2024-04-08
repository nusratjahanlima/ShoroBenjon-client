import React from 'react';
import { useState } from "react";
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState("shop");

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
            <li onClick={()=>{setMenu("arts")}}><Link style={{ textDecoration: 'none',color: 'white'}} to='/arts'>Art</Link> </li>
            <li onClick={()=>{setMenu("craft")}}><Link style={{ textDecoration: 'none',color: 'white'}} to='/craft'>Crafts</Link></li>
            </ul>

            <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">
                  0  
                </div>
            </div>
        </div>
    );
};

export default Navbar;