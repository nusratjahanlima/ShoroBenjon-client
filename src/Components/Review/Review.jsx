import React from 'react';
import './Review.css'
import review_icon from '../Assets/review-icon.png'

const Review = () => {
    return (
        <div className='review'>
           <div className='review-heading'>
                <h2>Review</h2> 
                <p>We'd love to geting your valuable feedback from you.</p>
           </div>

           <div className="review-main">
            <div className="review-main-sub">
                <img src={review_icon} alt="" />
                <h3>Product name</h3>
                <p>What impresses me most is its versatility - effortlessly transitioning from day to night with just a change of accessories.</p>
            </div>

            <div className="review-main-sub">
                <img src={review_icon} alt="" />
                <h3>Services</h3>
                <p>What impresses me most is its versatility - effortlessly transitioning from day to night with just a change of accessories.</p>
            </div>

            <div className="review-main-sub">
                <img src={review_icon} alt="" />    
                <h3>Feedback</h3>
                <p>What impresses me most is its versatility - effortlessly transitioning from day to night with just a change of accessories.</p>
            </div>
           </div>
        </div>
    );
};

export default Review;