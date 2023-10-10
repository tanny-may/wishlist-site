import React, { useState } from 'react';
import './Content.css';
import Card from './Card';
import Filters from './Filters';
import ShoppingCart from './ShoppingCart';




const filterButtons = ['All stickers', 'Transparent background', 'Colorful background']

function Content(props) {
    const [filter, setFilter] = useState(filterButtons[0].toLowerCase());
    
    let images = props.images;
    if (filter.toLowerCase() !== 'all stickers') {
      console.log(filter.toLowerCase(), 'any background')
        images = images.filter(el => el.shape.toLowerCase() === filter)
    }

    return (
        <div>
            <div className='filtersAndCart'>
                <Filters filter={filter} filterButtons ={filterButtons} handleFilterClick={(event => setFilter(event.target.textContent.trim().toLowerCase()))}/>
                <ShoppingCart/>
            </div>

            <div className='cards'>
                {images.map(el => <Card key={el.number} src={el.img} shape={el.shape} number={el.number}></Card>)}
            </div>
        </div>
    );
}

export default Content;