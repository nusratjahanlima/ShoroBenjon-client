import React from 'react';
import Popular from '../Components/Popular/Popular';
import Offer from '../Components/Offers/Offer';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';

const Shop = () => {
    return (
        <div>
            <Popular/>
            <Offer/>
            <NewCollections/>
            <NewsLetter/>
        </div>
    );
};

export default Shop;