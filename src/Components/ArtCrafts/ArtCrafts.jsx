import React from 'react';
import './ArtCraft.css'
import { category_list } from '../category-assets/categoryassets'


const ArtCrafts = ({category,setCategory}) => {

    

    return (    
        <div className='explore-artcraft' id='explore-artcraft'>
            {/* <ul className='artcraft-category'>
                <li>Home decore</li>
                <li>Jwellery</li>
                <li>Lippan art</li>
                <li>Flower crafts</li>
                <li>Painting</li>
                <li>Hand Bag</li>
                <li>Basket</li>
                <li>Clothes</li>
            </ul> */}
            <h1>Explore our category</h1>
            <p className='explore-artcraft-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit consequatur doloribus impedit, dolores repellat magni ullam iure debitis? Aliquam, illum.</p>
            <div className="explore-artcraft-list">
                {category_list.map((item,index)=>{
                    return(
                        <div onClick={() => setCategory(prev => prev === item.category_name ? "All" : item.category_name)} key={index} className="explore-artcraft-list-item">
                            <img className={category===item.category_name?"active":""} src={item.category_image} alt="" />
                            <p>{item.category_name}</p>
                       </div>
                    )
                })}
            </div>


               
        
        </div>
    );
};

export default ArtCrafts;


