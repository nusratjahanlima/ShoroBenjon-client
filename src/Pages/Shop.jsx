import React from 'react';
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular';
import Offer from '../Components/Offers/Offer';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import Review from '../Components/Review/Review';


const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offer/>
            <NewCollections/>
            <NewsLetter/>
            <Review/>
        </div>
    );
};

export default Shop;