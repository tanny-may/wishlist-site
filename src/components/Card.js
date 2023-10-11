import React from 'react';

function Card({src, shape, number}) {
    return (
        <div className='card-div'>
            <img className='card-img' src={src} alt='name'></img>
            <h4 className='card-h4'>Sticker #{number + 1}</h4>
            <p className='card-p'>{shape}</p>
            <button className='card-button'>Add to Cart</button>
        </div>
    );
}

export default Card;