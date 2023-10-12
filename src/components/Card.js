import React from 'react';

function Card({src, parameter, name}) {
    return (
        <div className='card-div'>
            <img className='card-img' src={src} alt='name'></img>
            <h4 className='card-h4'>{name}</h4>
            <p className='card-p'>{parameter}</p>
            <button className='card-button'>Add to Cart</button>
        </div>
    );
}

export default Card;