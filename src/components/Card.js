import { React} from 'react';

function Card({src, parameter, name, handleClick, buttonText, style}) {
    return (
        <div className='card-div'>
            <img className='card-img' src={src} alt='name'></img>
            <h4 className='card-h4'>{name}</h4>
            <p className='card-p'>{parameter}</p>
            <button style={style} className='card-button' onClick={handleClick}>{buttonText}</button>  
        </div>
    );
}

function CardWishlist({src, name, handleClick, buttonText, style}) {
    return (
        <div className='card-div cardWishlist-div'>
            <img className='card-img cardWishlist-img' src={src} alt='name'></img>
            <h4 className='card-h4 cardWishlist-h4'>{name}</h4>
            <button style={style} className='card-button cardWishlist-button' onClick={handleClick}>{buttonText}</button>  
        </div>
    )
}

export default Card;
export {CardWishlist};