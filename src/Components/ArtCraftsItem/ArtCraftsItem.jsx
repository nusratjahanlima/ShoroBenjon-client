import React, { useContext } from 'react';
import './ArtCraftsItem.css'
import { categoryassets } from '../../Components/category-assets/categoryassets'
import { StoreContext } from '../../Context/StoreContext';

const ArtCraftsItem = ({id,name,price,description,image}) => {
    
    
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
    
    return (
        <div className='art-crafts-item'>
            <div className="art-crafts-item-img-container">
               <img className='art-crafts-item-image' src={image} alt="" /> 
                {!cartItems[id]
                    ?<img className='add' onClick={()=>addToCart(id)} src={categoryassets.add_icon_white} alt="" />
                    :<div className='art-crafts-item-counter'>
                        <img onClick={()=>removeFromCart(id)} src={categoryassets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={()=>addToCart(id)} src={categoryassets.remove_icon_red} alt="" />
                    </div>
                }
            </div>

            <div className="art-crafts-item-info">
                <div className="art-crafts-item-rating">
                    <p>{name}</p>
                    <img src={categoryassets.rating_starts} alt="" />
                </div>
                <p className="art-craft-item-description">{description}</p>
                <p className="art-craft-item-price">${price}</p>
            </div>
        </div>
    );
};

export default ArtCraftsItem;