import React, { useContext, useState, useRef } from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
// import nav_dropdown from '../Assets/dropdown_icon.png'

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

//     const dropdown_toggle = (e) =>{
//     menuRef.current.classList.toggle('nav-menu-visible');
//     e.target.classList.toggle('open');
// }
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Shoro <span className="special">Benjon</span></p>
            </div>

            {/* <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" /> */}
            <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none', color: 'white'}} to='/'>Home</Link></li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration: 'none', color: 'white'}} to='/mens'>Men</Link> </li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none',color: 'white'}} to='/womens'>Women</Link></li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none',color: 'white'}} to='/kids'>Kid</Link> </li>
            </ul>

            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>logout</button>
            :<Link to='/login'><button>Login</button></Link>}
            
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">
                  {getTotalCartItems()} 
                </div>
            </div>
        </div>
    );
};

export default Navbar;