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

export default Card;