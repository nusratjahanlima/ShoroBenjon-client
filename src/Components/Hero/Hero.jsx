import React from 'react';
import './Hero.css'
import banner_image from '../Assets/banner_image.png'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'

const Hero = () => {
    return (
        
        <div className='hero'>
            <div className='hero-left'>
               <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className='hero-hand-icon'>
                    <p>New</p>
                    <img src={hand_icon} alt="" />
                    </div>
                    <p>colections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn-main">
                    <button className='hero-latest-btn'>Latest Collection</button>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>

            <div className='hero-right'>
                <img  src={banner_image} alt="" />
            </div>
        </div>
    );
};

export default Hero;