import React, { useContext } from 'react';
import './CategoryDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import ArtCraftsItem from '../ArtCraftsItem/ArtCraftsItem';

const CategoryDisplay = ({category}) => {

    const { item_list } = useContext(StoreContext)

    return (
        <div className='art-craft-item-display' id='art-craft-item-display'>
           <h2>Top items for you</h2> 
           <div className="art-craft-item-display-list">
            {item_list.map((item,index)=>{
                if(category==="All" || category===item.category){
                    return <ArtCraftsItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                }
            })}
           </div>
        </div>
    );
};

export default CategoryDisplay;