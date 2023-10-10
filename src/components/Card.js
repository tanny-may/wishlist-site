import React from 'react';
import './Card.css';

function Card({src, shape, number}) {

    return (
        <div className='card-div'>
            <img src={src} alt='name'></img>
            <h4>Sticker #{number + 1}</h4>
            <p>{shape}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default Card;