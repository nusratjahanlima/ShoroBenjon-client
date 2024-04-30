import React, { useState } from 'react';
import ArtCrafts from '../Components/ArtCrafts/ArtCrafts';
import CategoryDisplay from '../Components/CategoryDisplay/CategoryDisplay';

const ArtCraftCategory = () => {
    const [category, setCategory] = useState("All");

    return (
        <div>
            <ArtCrafts category={category} setCategory={setCategory} />
            <CategoryDisplay category={category}/>
        </div>
    );
};

export default ArtCraftCategory;
