import React from 'react';
import './Hero.css'
import banner_image from '../Assets/banner_image.png'


const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
               <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <p>New</p>
                    <p>colections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <button>Latest Collection</button>
                    
                </div>
            </div>

            <div className='hero-right'>
                <img class='banner-img' src={banner_image} alt="" />
            </div>
        </div>
    );
};

export default Hero;